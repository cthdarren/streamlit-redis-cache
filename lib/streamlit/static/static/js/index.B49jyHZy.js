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

import{r as c,b7 as s,j as e,b8 as B,bp as p,b6 as f,b9 as h}from"./index.BrTAJ7cx.js";function m(n){const{disabled:o,element:t,widgetMgr:l,width:a,fragmentId:r}=n,d={width:a};let i=s.SECONDARY;t.type==="primary"?i=s.PRIMARY:t.type==="tertiary"&&(i=s.TERTIARY);const u=t.help?a:!0;return e("div",{className:"stButton","data-testid":"stButton",style:d,children:e(B,{help:t.help,children:e(p,{kind:i,size:f.SMALL,disabled:o,fluidWidth:t.useContainerWidth?u:!1,onClick:()=>l.setTriggerValue(t,{fromUi:!0},r),children:e(h,{icon:t.icon,label:t.label})})})})}const y=c.memo(m);export{y as default};
