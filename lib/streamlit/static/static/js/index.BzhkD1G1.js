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

import{r as i,j as g,br as b,bO as m}from"./index.BrTAJ7cx.js";import{a as f}from"./useBasicWidgetState.DDri_chl.js";import"./FormClearHelper.BjdyfMQx.js";const p=(t,e)=>t.getStringValue(e),C=t=>t.default??null,d=t=>t.value??null,S=(t,e,r,o)=>{e.setStringValue(t,r.value,{fromUi:r.fromUi},o)},V=({element:t,disabled:e,widgetMgr:r,width:o,fragmentId:s})=>{var l;const[u,a]=f({getStateFromWidgetMgr:p,getDefaultStateFromProto:C,getCurrStateFromProto:d,updateWidgetMgrState:S,element:t,widgetMgr:r,fragmentId:s}),n=i.useCallback(c=>{a({value:c,fromUi:!0})},[a]);return g(m,{label:t.label,labelVisibility:b((l=t.labelVisibility)==null?void 0:l.value),help:t.help,onChange:n,disabled:e,width:o,value:u})},v=i.memo(V);export{v as default};
