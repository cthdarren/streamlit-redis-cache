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

import{r as s,K as S,j as d,br as x,c4 as V}from"./index.BrTAJ7cx.js";import{a as v}from"./useBasicWidgetState.DDri_chl.js";import"./FormClearHelper.BjdyfMQx.js";const U=(t,e)=>t.getIntValue(e),h=t=>t.default??null,C=t=>t.value??null,F=(t,e,o,a)=>{e.setIntValue(t,o.value,{fromUi:o.fromUi},a)},I=({disabled:t,element:e,widgetMgr:o,width:a,fragmentId:u})=>{const{options:n,help:c,label:i,labelVisibility:r,placeholder:m}=e,[g,l]=v({getStateFromWidgetMgr:U,getDefaultStateFromProto:h,getCurrStateFromProto:C,updateWidgetMgrState:F,element:e,widgetMgr:o,fragmentId:u}),f=s.useCallback(b=>{l({value:b,fromUi:!0})},[l]),p=S(e.default)&&!t;return d(V,{label:i,labelVisibility:x(r==null?void 0:r.value),options:n,disabled:t,width:a,onChange:f,value:g,help:c,placeholder:m,clearable:p})},E=s.memo(I);export{E as default};
