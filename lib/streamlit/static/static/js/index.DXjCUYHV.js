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

import{r as b,R as p,aF as B,b7 as i,j as e,b8 as h,bp as w,b6 as D,b9 as k}from"./index.BrTAJ7cx.js";import{c as R}from"./createDownloadLinkElement.DZMwyjvU.js";function C(n,o,t){return R({enforceDownloadInNewTab:t,url:n.buildMediaURL(o),filename:""})}function L(n){const{disabled:o,element:t,widgetMgr:s,width:l,endpoints:r,fragmentId:d}=n,c={width:l},{libConfig:{enforceDownloadInNewTab:u=!1}}=p.useContext(B);let a=i.SECONDARY;t.type==="primary"?a=i.PRIMARY:t.type==="tertiary"&&(a=i.TERTIARY);const f=()=>{s.setTriggerValue(t,{fromUi:!0},d),C(r,t.url,u).click()},m=t.help?l:!0;return e("div",{className:"stDownloadButton","data-testid":"stDownloadButton",style:c,children:e(h,{help:t.help,children:e(w,{kind:a,size:D.SMALL,disabled:o,onClick:f,fluidWidth:t.useContainerWidth?m:!1,children:e(k,{icon:t.icon,label:t.label})})})})}const T=b.memo(L);export{T as default};
