/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2025)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import{r as o,cp as i}from"./index.BrTAJ7cx.js";import{i as c}from"./inputUtils.CQWz5UKz.js";function E(r,n,s,t){o.useEffect(()=>{t||r!==n&&s(r)},[r,n,t,s])}function l(r,n,s,t,u,f=!1){return o.useCallback(e=>{const a=f?e.metaKey||e.ctrlKey:!0;!c(e)||!a||(e.preventDefault(),s&&n(),t.allowFormEnterToSubmit(r)&&t.submitForm(r,u))},[r,u,s,n,t,f])}function F({formId:r,maxChars:n,setDirty:s,setUiValue:t,setValueWithSource:u}){return o.useCallback(f=>{const{value:e}=f.target;n!==0&&e.length>n||(s(!0),t(e),i({formId:r})&&u({value:e,fromUi:!0}))},[r,n,s,t,u])}export{F as a,l as b,E as u};
