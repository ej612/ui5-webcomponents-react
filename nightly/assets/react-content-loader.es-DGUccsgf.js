import{r as t}from"./index-DysCNOs_.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var i=function(){return i=Object.assign||function(a){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(a[c]=o[c])}return a},i.apply(this,arguments)};function I(e,a){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o}var V=function(){return Math.random().toString(36).substring(6)},A=function(e){var a=e.animate,o=a===void 0?!0:a,r=e.backgroundColor,n=r===void 0?"#f5f6f7":r,c=e.backgroundOpacity,f=c===void 0?1:c,u=e.baseUrl,s=u===void 0?"":u,P=e.children,m=e.foregroundColor,S=m===void 0?"#eee":m,g=e.foregroundOpacity,M=g===void 0?1:g,p=e.gradientRatio,y=p===void 0?2:p,R=e.uniqueKey,v=e.rtl,_=v===void 0?!1:v,h=e.speed,q=h===void 0?1.2:h,b=e.style,G=b===void 0?{}:b,E=e.title,O=E===void 0?"Loading...":E,x=e.beforeMask,l=x===void 0?null:x,K=I(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),d=R||V(),C="".concat(d,"-diff"),k="".concat(d,"-animated-diff"),w="".concat(d,"-aria"),L=_?{transform:"scaleX(-1)"}:null,T="".concat(q,"s"),j="".concat(y*-1," 0"),U="".concat(y," 0");return t.createElement("svg",i({"aria-labelledby":w,role:"img",style:i(i({},G),L)},K),O?t.createElement("title",{id:w},O):null,l&&t.isValidElement(l)?l:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(s,"#").concat(C,")"),style:{fill:"url(".concat(s,"#").concat(k,")")}}),t.createElement("defs",null,t.createElement("clipPath",{id:C},P),t.createElement("linearGradient",{id:k,gradientTransform:"translate(".concat(j,")")},t.createElement("stop",{offset:"0%",stopColor:n,stopOpacity:f}),t.createElement("stop",{offset:"50%",stopColor:S,stopOpacity:M}),t.createElement("stop",{offset:"100%",stopColor:n,stopOpacity:f}),o&&t.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(j,"; 0 0; ").concat(U),dur:T,repeatCount:"indefinite"}))))},B=function(e){return e.children?t.createElement(A,i({},e)):t.createElement(F,i({},e))},F=function(e){return t.createElement(B,i({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};export{B as C};
