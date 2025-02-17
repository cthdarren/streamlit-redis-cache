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

import{n,r as c,N as d,j as g,b3 as e,b4 as l,K as h}from"./index.BrTAJ7cx.js";const m=n("iframe",{target:"e1q9bkxk0"})(({theme:o,disableScrolling:r})=>({colorScheme:"normal",border:"none",padding:o.spacing.none,margin:o.spacing.none,overflow:r?"hidden":void 0}));function a(o){return h(o)||o===""?void 0:o}function F({element:o,width:r}){const t=o.hasWidth?o.width:r,s=a(o.src),i=d(s)?void 0:a(o.srcdoc);return g(m,{className:"stIFrame","data-testid":"stIFrame",allow:e,disableScrolling:!o.scrolling,src:s,srcDoc:i,width:t,height:o.height,scrolling:o.scrolling?"auto":"no",sandbox:l,title:"st.iframe"})}const f=c.memo(F);export{f as default};
