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

import{N as a,c5 as i,r as o}from"./index.BrTAJ7cx.js";class d{manageFormClearListener(r,s,t){a(this.formClearListener)&&this.lastWidgetMgr===r&&this.lastFormId===s||(this.disconnect(),i(s)&&(this.formClearListener=r.addFormClearedListener(s,t),this.lastWidgetMgr=r,this.lastFormId=s))}disconnect(){var r;(r=this.formClearListener)==null||r.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}function l({element:e,widgetMgr:r,onFormCleared:s}){o.useEffect(()=>{if(!i(e.formId))return;const t=r.addFormClearedListener(e.formId,s);return()=>{t.disconnect()}},[e,r,s])}export{d as F,l as u};
