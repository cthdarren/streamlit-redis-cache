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

import{n as s,k as r,r as i,j as n}from"./index.BrTAJ7cx.js";import{P as m,R as c}from"./RenderInPortalIfExists.BhsYk57k.js";const p=""+new URL("../media/balloon-0.Czj7AKwE.png",import.meta.url).href,f=""+new URL("../media/balloon-1.CNvFFrND.png",import.meta.url).href,d=""+new URL("../media/balloon-2.DTvC6B1t.png",import.meta.url).href,B=""+new URL("../media/balloon-3.CgSk4tbL.png",import.meta.url).href,L=""+new URL("../media/balloon-4.mbtFrzxf.png",import.meta.url).href,h=""+new URL("../media/balloon-5.CSwkUfRA.png",import.meta.url).href,t=300,a=121,e=20,g=80,u=1e3,x=r("from{transform:translateY(calc(100vh + ",t,"px));}to{transform:translateY(0);}"),_=s("img",{target:"eosrfo90"})(({theme:o})=>({position:"fixed",top:`${-t}px`,marginLeft:`${-a/2}px`,zIndex:o.zIndices.balloons,left:`${Math.random()*(g-e)+e}vw`,animationDelay:`${Math.random()*u}ms`,height:`${t}px`,width:`${a}px`,pointerEvents:"none",animationDuration:"750ms",animationName:x,animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1})),w=30,l=[p,f,d,B,L,h],A=l.length,I=({particleType:o})=>n(_,{src:l[o]}),M=({scriptRunId:o})=>n(c,{children:n(m,{className:"stBalloons","data-testid":"stBalloons",scriptRunId:o,numParticleTypes:A,numParticles:w,ParticleComponent:I})}),S=i.memo(M);export{w as NUM_BALLOONS,S as default};
