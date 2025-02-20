# Streamlit redis implementation and caching documentation
This fork focuses around the modification around the @st.cache_data method to implement redis caching.

This readme documents some basic understanding of the streamlit caching mechanism, with further in depth insights into @st.cache_data further down [below](#deep-dive-into-%40st.cache_data). 

<br/>

## Table of Contents
0. [Setting up this repo](#setting-up-this-repo)
1. [Key Pointers](#key-pointers)
2. [@st.cache_data decorator](#%40st.cache_data-decorator)
3. [@st.cache_resource decorator](#%40st.cache_resource-decorator)
4. [st.sssion_state](#st.session_state)
5. [Mutations and Concurrency Issues](#mutations-and-concurrency-issues)
6. [Summary](#summary)
7. [Deep Dive into @st.cache_data](#deep-dive-into-%40st.cache_data)
    - [Cache Miss Scenario](#cache-miss-scenario)
    - [Cache Hit Scenario](#cache-hit-scenario)
8. [Changes made in this fork](#changes-made-in-this-fork)
9. [Additional Notes](#additional-notes)
10. [Deployment of your own streamlit fork](#deployment-of-your-own-streamlit-fork)

<br/>

## Setting up this repo
1. Add the following to your .envs with the respective values:
    - REDIS_HOST    (host network string)
    - REDIS_PORT    (port number)
    - REDIS_DB      (db index number)

> NOTE: If you don't, the defaults are localhost, 6379 and 0 respectively

2. `
pip install git+https://github.com/cthdarren/streamlit.git@1.42.1#subdirectory=lib
`

<br/>

## Key pointers
- When something must be updated on the screen, Streamlit reruns the entire python script from top to bottom.
- Whenever the source code is modified
- Whenever a user interacts with widgets in the app. Like dragging a slider, entering text, or clicking buttons
- If a callback (like on_change or on_click) is passed to a widget, it will run before the rest of your script

<br/>

## @st.cache_data decorator
Will cache return results, storing return __values__ in cache.
Upon each function call, it will return the cached result based on whether a few criterias match:
1) The function name is the same
2) The parameters passed are the same
> __INFO:__  If function logic changes only based on streamlit state, the cache will not update with the new values. You MUST use a different parameter for the cache to register as having to re run the function.

<br/>

## @st.cache_resource decorator
Will cache return results, storing **objects** that were returned by the function.
Upon each function call, it will return the object as if stored in a global variable.

> __WARNING:__ Using `@st.cache_resource` on objects that are not thread-safe might lead to crashes or corrupted data.

<br/>

## st.session_state

st.session_state helps to maintain session variables that persist between each script reload.

```python
   if 'key' not in st.session_state:
       st.session_state['key'] = 'value'
```

This prevents the key from being overwritten when streamlit performs a rerun of the py file

<br/>


## Mutations and Concurrency Issues

Since streamlit is a web framework, it is built to support multiple users connecting to the server at once. When two (or more) users view the app at the same time, they will all cause the Python script to re-run, which may manipulate cached return objects at the same time.

Mutations refer to changes made to a cached function's return value, after the function has been called.

```py
import streamlit as st

@st.cache_resource
def load_data():
    return [0]

mutlist = load_data()

st.text(mutlist[0])

mutlist[0] = 1

st.button("Rerun")
```
> This would change from 0 to 1 when the button is pressed.

Mutations like the one above can cause unpredictable behaviours and as such, st.cache_resource should only be used if you are 100% sure that the return object will not be mutated.

`@st.cache_data` is therefore much safer to use in most cases, as it resorts to making a copy of the original return value, and reusing that saved value across all sessions instead.

<br>
<br>

## Summary
`
@st.cache_data
` 
is comparable to deep copying an array where it creates a brand new copy of the original array, whereas 

`
@st.cache_resource
`
is similar to shallow copying arrays, where it only references the real object instead of creating another copy

<br/>

## Deep dive into @st.cache_data

Each function has their own respective cache, denoted by the `function_key`, and each function cache entry has an individual entry for each set of parameters given.

### Cache Miss Scenario 
1. Decorator is instantiated, creates a `CachedDataFuncInfo` object (cache_data_api.py:571)

2. Upon reaching a function call, triggers the `__call__()` in built method of `CachedFunc` (cache_utils.py:204). This further triggers the `self._get_or_create_cached_value()` method.
3. The `self._get_or_create_cached_value()` method (cache_utils.py:219) calls `get_function_cache()` to get the DataCache() relating to the function.
    - The `get_function_cache()` function makes a call to the `get_cache()` method of the `DataCaches()` singleton, which returns the `DataCache()` relating to the function
    - This `DataCaches()` (basically a list of DataCache() objects) singleton (cache_data_api.py:143) looks through it's own `_function_caches` attribute to find the `DataCache()` tied to the function.
    - If the `DataCache()` object doesn't exist (normally on first run/cache miss), it is created immediately, then returned.

4. Then makes a `value_key` using the arguments passed to the function. This `value_key` determines the return value for a given set of arguments.
5. Uses the `value_key` to read from the cache obtained in Step 3 using the `cache.read_result(value_key)` method.  
    > INFO: Remember that the function cache stores the return values of all arguments passed to that specific function, and the `value_key` is the key that identifies which of these return values is the correct one.

6. In the `read_result()` method (cache_data_api.py:632), it attempts to get the pickled return value with the given key using `self.storage.get(key)`, this would by default check the `InMymoryCacheStorageWrapper` (in_memory_cache_storage_wrapper.py:33), to read from the in memory cache, because this is how streamlit caching works by nature. Read from local mem > check for disk persistence. 
7. If the cached value doesn't exist in the given storage medium (cache miss), it returns a `CacheKeyNotFounderror`. 
8. The exception is caught within the `_get_or_create_cached_value()` method
9. The `_handle_cache_miss()` method is run (cache_utils.py:271), which computs the return value by running the function with the given parameters, writes the result into the cache using `cache.write_result()`, then returns it back to the `_get_or_created_cached_value()` method.

<br/>

### Cache Hit Scenario
1. Steps 1. to Step 6. are the same 
2. Unpickle the value obtained from the cache and return it to `get_or_create_cached_value()`
3. Returns the result all the way up the call stack 

<br/>

## Changes made in this fork
In order to use redis for caching I copied over the implementation for disk persistence (`LocalDiskCacheStorageManager` in local_disk_cache_storage.py). How this would normally work is that Step 6. in the cache miss scenario would run, then upon mem cache miss, it would then check the persistent storage (in this case the disk) to see if there is a cached value there. This would allow cache to persist across reruns of the script.

Modifications to the disk persistence file included: 
1. Change in `get` and `set` methods to query redis server instead of the local disk
2. Registered a new storage manager in runtime.py for redis (`RedisCacheStorageManager` in redis_cache_storage.py) The difference in instantiation is that there is no `InMemoryCacheStorageWrapper` around the redis persistence, so it skips the mem cache checking and directly queries the server. 
3. In `get_storage_manager()` (cache_data_api.py:298), an additional check was made to use the `RedisCacheStorageManager` if the `persist` option was set to "redis". This ensured that all `@st.cache_data` decorators with `persist="redis"` would use this storage manager instead of the default behaviour, and at the same time keeping the default implementation in place.

<br/>

## Additional Notes
If you would like to maintain the same implementation for redis persistence as streamlit has for local disk persistence (querying the local memory cache before making a query to redis), simply change the `create()` method in redis_cache_storage.py as follows:

```python
def create(self, context: CacheStorageContext) -> CacheStorage:
    persist_storage = RedisCacheStorage(context)
    return InMemoryCacheStorageWrapper(
        persist_storage=persist_storage, context=context
    )
```

<br/>

## Deployment of your own streamlit fork
There isn't really documentation of how to do this that I could find online, but if you would want to deploy your own version of streamlit after forking from the main repo, do follow these steps:
1. Make a fork from the official streamlit repo
2. Switch over to the correct branch of the version that you would like 
> NOTE: Earlier versions might have some issues compiling due to dependency issues and what not so try not to pick a version that is too far in the past
3. Follow the steps over at https://github.com/streamlit/streamlit/wiki/Contributing
> INFO: I recommend running the `make all-devel` to be able to run the test suite and check if you have broken anything else with your changes
4. Make whatever changes you want to the source code for your implementation
5. (OPTIONAL) run `make pytest` to ensure that you haven't broken anything by implementing your changes
6. At the root folder, run `make package`
7. Remove all the lib/ entries in the .gitignore, the run `git commit -m "" --no-verify` to push into your branch
8. To install through pip, use `pip install git+<github-clone-https>@<branch-name>#subdirectory=lib`

Example:
```
pip install git+https://github.com/cthdarren/streamlit.git@1.42.1#subdirectory=lib
```
> INFO: You can also put this link directly into a requirements.txt file, omitting the pip install part

> INFO: #subdirectory=lib is needed as the `setup.py` file is located in that subfolder
