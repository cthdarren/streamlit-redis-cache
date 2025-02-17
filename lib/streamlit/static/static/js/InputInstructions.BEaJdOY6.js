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

import{n as d,k as g,j as l,cd as p,ce as f}from"./index.BrTAJ7cx.js";const I=g("50%{color:rgba(0,0,0,0);}"),$=d("span",{target:"eva3uk20"})(({includeDot:n,shouldBlink:s,theme:t})=>({...n?{"&::before":{opacity:1,content:'"•"',animation:"none",color:t.colors.gray,margin:`0 ${t.spacing.twoXS}`}}:{},...s?{color:t.colors.red,animationName:`${I}`,animationDuration:"0.5s",animationIterationCount:5}:{}})),b=({dirty:n,value:s,inForm:t,maxLength:a,className:m,type:i="single",allowEnterToSubmit:u=!0})=>{const o=[],r=(e,c=!1)=>{o.push(l($,{includeDot:o.length>0,shouldBlink:c,children:e},o.length))};if(u){const e=t?"submit form":"apply";if(i==="multiline"){const c=f()?"⌘":"Ctrl";r(`Press ${c}+Enter to ${e}`)}else i==="single"&&r(`Press Enter to ${e}`)}return a&&(i!=="chat"||n)&&r(`${s.length}/${a}`,n&&s.length>=a),l(p,{"data-testid":"InputInstructions",className:m,children:o})};export{b as I};
