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

import{r as t,K as h}from"./index.BrTAJ7cx.js";import{u as p}from"./FormClearHelper.BjdyfMQx.js";function v({getStateFromWidgetMgr:n,getDefaultState:c,updateWidgetMgrState:i,element:s,widgetMgr:u,fragmentId:l,onFormCleared:r}){const[V,o]=t.useState(()=>n(u,s)??c(u,s)),[f,a]=t.useState({value:V,fromUi:!1});t.useEffect(()=>{h(f)||(a(null),o(f.value),i(s,u,f,l))},[f,i,s,u,l]);const e=t.useCallback(()=>{a({value:c(u,s),fromUi:!0}),r==null||r()},[a,s,c,u,r]);return p({widgetMgr:u,element:s,onFormCleared:e}),[V,a]}function S({getStateFromWidgetMgr:n,getDefaultStateFromProto:c,getCurrStateFromProto:i,updateWidgetMgrState:s,element:u,widgetMgr:l,fragmentId:r,onFormCleared:V}){const o=t.useCallback((e,x)=>c(x),[c]),[f,a]=v({getStateFromWidgetMgr:n,getDefaultState:o,updateWidgetMgrState:s,element:u,widgetMgr:l,fragmentId:r,onFormCleared:V});return t.useEffect(()=>{u.setValue&&(u.setValue=!1,a({value:i(u),fromUi:!1}))},[u,i,a]),[f,a]}export{S as a,v as u};
