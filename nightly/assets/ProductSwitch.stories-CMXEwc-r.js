import{j as w}from"./jsx-runtime-D6fbYt3N.js";import{p as c,q as n,a as y,s as N,b as d,m as C,y as D,S as z,w as R,v as _,A as V}from"./withWebComponent-DpVKsRHi.js";import{I as H,f as p}from"./Icon-CrKv37md.js";import{h as A}from"./home-CLQVDtS8.js";import{P as L,D as O,i as v,b as S,A as M}from"./Keys-DoZifIQ_.js";import{b as T}from"./event-BX8i4Y_x.js";import{s as E}from"./parameters-bundle.css-B09Df3Yy.js";import{f as U}from"./ItemNavigation-DWaDskwg.js";import{d as j}from"./slot-_4yKMUwC.js";import{i as F}from"./i18n-DEVDpFvK.js";import{f as k}from"./ResizeHandler-D2m47C26.js";import{aO as B}from"./i18n-defaults-Bh0NvB0l.js";function W(o,t,e){return c`<div class="ui5-product-switch-root" role="list" aria-label="${n(this._ariaLabelText)}" @focusin=${this._onfocusin} @keydown=${this._onkeydown} @click="${this.handleProductSwitchItemClick}"><slot></slot></div>`}y("@ui5/webcomponents-theming","sap_horizon",async()=>N);y("@ui5/webcomponents-fiori","sap_horizon",async()=>E);const K={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ProductSwitch.css.ts",content:`:host{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-product-switch-root{display:flex;flex-wrap:wrap;justify-content:inherit;align-items:inherit;width:752px;padding:1.25rem .75rem}:host([desktop-columns="3"]) .ui5-product-switch-root{width:564px}@media only screen and (max-width: 900px){.ui5-product-switch-root{width:564px}}@media only screen and (max-width: 600px){.ui5-product-switch-root,:host([desktop-columns="3"]) .ui5-product-switch-root{flex-direction:column;padding:0;width:100%}}
`};var q=function(o,t,e,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,a);else for(var m=o.length-1;m>=0;m--)(u=o[m])&&(i=(l<3?u(i):l>3?u(t,e,i):u(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},x;let b=x=class extends z{constructor(){super(),this._currentIndex=0,this._rowSize=4,this._itemNavigation=new U(this,{rowSize:this._rowSize,getItemsCallback:()=>this.items}),this._handleResizeBound=this._handleResize.bind(this)}static get ROW_MIN_WIDTH(){return{ONE_COLUMN:600,THREE_COLUMN:900}}get _ariaLabelText(){return x.i18nBundle.getText(B)}onEnterDOM(){k.register(document.body,this._handleResizeBound)}onExitDOM(){k.deregister(document.body,this._handleResizeBound)}onBeforeRendering(){this.desktopColumns=this.items.length>6?4:3}_handleResize(){const t=document.body.clientWidth;t<=this.constructor.ROW_MIN_WIDTH.ONE_COLUMN?this._setRowSize(1):t<=this.constructor.ROW_MIN_WIDTH.THREE_COLUMN||this.items.length<=6?this._setRowSize(3):this._setRowSize(4)}handleProductSwitchItemClick(t){this.items.forEach(e=>{e.selected=!1}),t.target.selected=!0}_onfocusin(t){const e=t.target;this._itemNavigation.setCurrentItem(e),this._currentIndex=this.items.indexOf(e)}_setRowSize(t){this._rowSize=t,this._itemNavigation.setRowSize(t)}_onkeydown(t){L(t)?this._handleDown(t):O(t)&&this._handleUp(t)}_handleDown(t){const e=this.items.length;this._currentIndex+this._rowSize>e&&t.stopPropagation()}_handleUp(t){this._currentIndex-this._rowSize<0&&t.stopPropagation()}};q([d({type:Number})],b.prototype,"desktopColumns",void 0);q([j({type:HTMLElement,default:!0})],b.prototype,"items",void 0);q([F("@ui5/webcomponents-fiori")],b,"i18nBundle",void 0);b=x=q([C({tag:"ui5-product-switch",renderer:D,styles:K,template:W})],b);b.define();const f=R("ui5-product-switch",[],[],[],[]);f.displayName="ProductSwitch";try{f.displayName="ProductSwitch",f.__docgenInfo={description:`The \`ProductSwitch\` is an SAP Fiori specific web component that is used in \`ShellBar\`
and allows the user to easily switch between products.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Tab] - Move focus to the next interactive element after the \`ProductSwitch\`
- [Up] or [Down] - Navigates up and down the items
- [Left] or [Right] - Navigates left and right the items



\`import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";\` (for \`ProductSwitchItem\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitch",props:{children:{defaultValue:null,description:"Defines the items of the `ProductSwitch`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="ProductSwitch",f.__docgenInfo={description:`The \`ProductSwitch\` is an SAP Fiori specific web component that is used in \`ShellBar\`
and allows the user to easily switch between products.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Tab] - Move focus to the next interactive element after the \`ProductSwitch\`
- [Up] or [Down] - Navigates up and down the items
- [Left] or [Right] - Navigates left and right the items



\`import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";\` (for \`ProductSwitchItem\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitch",props:{children:{defaultValue:null,description:"Defines the items of the `ProductSwitch`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function G(o,t,e){return c`${this.targetSrc?J.call(this,o,t,e):Z.call(this,o,t,e)}`}function J(o,t,e){return c`<a class="ui5-product-switch-item-root" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" tabindex=${n(this.forcedTabIndex)} href="${n(this.targetSrc)}" target="${n(this._effectiveTarget)}">${this.icon?Q.call(this,o,t,e):void 0}<span class="ui5-product-switch-item-text-content">${this.titleText?X.call(this,o,t,e):void 0}${this.subtitleText?Y.call(this,o,t,e):void 0}</span></a>`}function Q(o,t,e){return e?c`<${_("ui5-icon",t,e)} class="ui5-product-switch-item-icon" name="${n(this.icon)}"></${_("ui5-icon",t,e)}>`:c`<ui5-icon class="ui5-product-switch-item-icon" name="${n(this.icon)}"></ui5-icon>`}function X(o,t,e){return c`<span class="ui5-product-switch-item-title">${n(this.titleText)}</span>`}function Y(o,t,e){return c`<span class="ui5-product-switch-item-subtitle">${n(this.subtitleText)}</span>`}function Z(o,t,e){return c`<div role="listitem" class="ui5-product-switch-item-root" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" tabindex=${n(this.forcedTabIndex)}>${this.icon?tt.call(this,o,t,e):void 0}<span class="ui5-product-switch-item-text-content">${this.titleText?et.call(this,o,t,e):void 0}${this.subtitleText?ot.call(this,o,t,e):void 0}</span></div>`}function tt(o,t,e){return e?c`<${_("ui5-icon",t,e)} class="ui5-product-switch-item-icon" name="${n(this.icon)}"></${_("ui5-icon",t,e)}>`:c`<ui5-icon class="ui5-product-switch-item-icon" name="${n(this.icon)}"></ui5-icon>`}function et(o,t,e){return c`<span class="ui5-product-switch-item-title">${n(this.titleText)}</span>`}function ot(o,t,e){return c`<span class="ui5-product-switch-item-subtitle">${n(this.subtitleText)}</span>`}y("@ui5/webcomponents-theming","sap_horizon",async()=>N);y("@ui5/webcomponents-fiori","sap_horizon",async()=>E);const it={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ProductSwitchItem.css.ts",content:`:host{width:var(--_ui5-v2-4-0_product_switch_item_width);height:var(--_ui5-v2-4-0_product_switch_item_height);margin:.25rem;border-radius:.25rem;box-sizing:border-box;background:var(--sapList_Background)}:host([selected]) .ui5-product-switch-item-root{background:var(--sapList_SelectionBackgroundColor);border:.125rem solid var(--sapList_SelectionBorderColor)}:host(:hover) .ui5-product-switch-item-root{background:var(--sapList_Hover_Background)}:host([selected]:hover) .ui5-product-switch-item-root{background:var(--sapList_Hover_SelectionBackground)}:host([active]) .ui5-product-switch-item-root,:host([selected][active]) .ui5-product-switch-item-root{background:var(--sapList_Active_Background)}:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-icon,:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title,:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle{color:var(--sapList_Active_TextColor)}:host([desktop]) .ui5-product-switch-item-root:focus,.ui5-product-switch-item-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-4-0_product_switch_item_outline_offset)}:host([desktop][active]) .ui5-product-switch-item-root:focus,:host([active]) .ui5-product-switch-item-root:focus-visible{outline-color:var(--_ui5-v2-4-0_product_switch_item_active_outline_color)}.ui5-product-switch-item-root{user-select:none;width:100%;height:100%;flex-direction:column;display:flex;align-items:center;text-decoration:none;outline:none;box-sizing:border-box;padding:4rem .5rem .5rem;cursor:pointer;border:var(--_ui5-v2-4-0_product_switch_item_border)}:host([icon]) .ui5-product-switch-item-root{padding-top:.5rem}:host([selected]) .ui5-product-switch-item-root{padding:.375rem}.ui5-product-switch-item-root .ui5-product-switch-item-icon{width:3rem;height:3rem;padding:.75rem;margin-bottom:.5rem;box-sizing:border-box;color:var(--sapContent_IconColor);pointer-events:none}.ui5-product-switch-item-root .ui5-product-switch-item-text-content{display:flex;align-items:center;flex-direction:column;max-width:10.25rem}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle,.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title{line-height:1.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none;text-align:center}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title{font-size:var( --sapFontHeader6Size);color:var(--sapGroup_TitleTextColor)}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title:only-child{white-space:normal;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle{font-size:var( --sapFontSmallSize);color:var(--sapContent_LabelColor)}@media only screen and (max-width: 600px){:host{margin:0;width:100%;max-width:600px;height:5rem;border-radius:0}.ui5-product-switch-item-root{padding:0 1rem;flex-direction:row}:host([icon]) .ui5-product-switch-item-root{padding-top:0}.ui5-product-switch-item-root .ui5-product-switch-item-icon{padding:.875rem;color:var(--sapContent_NonInteractiveIconColor);margin:0 .75rem 0 0}.ui5-product-switch-item-root .ui5-product-switch-item-text-content{align-items:flex-start;max-width:100%}:host([icon]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content{max-width:calc(100% - 3.75rem)}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle,.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title{line-height:normal}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle{font-size:var(--sapFontSize);padding-top:.75rem}}
`};var h=function(o,t,e,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,a);else for(var m=o.length-1;m>=0;m--)(u=o[m])&&(i=(l<3?u(i):l>3?u(t,e,i):u(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};let s=class extends z{constructor(){super(),this.active=!1,this.selected=!1,this._deactivate=()=>{this.active&&(this.active=!1)}}onEnterDOM(){document.addEventListener("mouseup",this._deactivate),V()&&this.setAttribute("desktop","")}onExitDOM(){document.removeEventListener("mouseup",this._deactivate)}_onmousedown(){this.active=!0}get _effectiveTarget(){return this.target||"_self"}_onkeydown(t){(v(t)||S(t))&&(this.active=!0),v(t)&&t.preventDefault(),S(t)&&this._fireItemClick()}_onkeyup(t){(v(t)||S(t))&&(this.active=!1),v(t)&&(M(t)&&t.stopPropagation(),this._fireItemClick())}_onfocusout(){this.active=!1}_onfocusin(t){this.fireDecoratorEvent("_focused",t)}_fireItemClick(){this.fireDecoratorEvent("click",{item:this})}};h([d()],s.prototype,"titleText",void 0);h([d()],s.prototype,"subtitleText",void 0);h([d()],s.prototype,"icon",void 0);h([d()],s.prototype,"target",void 0);h([d()],s.prototype,"targetSrc",void 0);h([d({type:Boolean})],s.prototype,"active",void 0);h([d({type:Boolean})],s.prototype,"selected",void 0);h([d({noAttribute:!0})],s.prototype,"forcedTabIndex",void 0);s=h([C({tag:"ui5-product-switch-item",renderer:D,styles:it,template:G,dependencies:[H]}),T("click",{bubbles:!0}),T("_focused",{bubbles:!0})],s);s.define();const r=R("ui5-product-switch-item",["icon","subtitleText","target","targetSrc","titleText"],[],[],["click"]);r.displayName="ProductSwitchItem";try{r.displayName="ProductSwitchItem",r.__docgenInfo={description:`The \`ProductSwitchItem\` web component represents the items displayed in the
\`ProductSwitch\` web component.

**Note:** \`ProductSwitchItem\` is not supported when used outside of \`ProductSwitch\`.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitchItem",props:{onClick:{defaultValue:null,description:`Fired when the \`ProductSwitchItem\` is activated either with a
click/tap or by using the Enter or Space key.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ProductSwitchItemDomRef, never>) => void"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as a graphical element within the component.

Example:

\`<ProductSwitchItem icon="palette">\`

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the subtitle of the component.",name:"subtitleText",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines a target where the `targetSrc` content must be open.\n\nAvailable options are:\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**Note:** By default target will be open in the same frame as it was clicked.",name:"target",required:!1,type:{name:"string"}},targetSrc:{defaultValue:{value:"undefined"},description:"Defines the component target URI. Supports standard hyperlink behavior.",name:"targetSrc",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the title of the component.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ProductSwitchItem",r.__docgenInfo={description:`The \`ProductSwitchItem\` web component represents the items displayed in the
\`ProductSwitch\` web component.

**Note:** \`ProductSwitchItem\` is not supported when used outside of \`ProductSwitch\`.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitchItem",props:{onClick:{defaultValue:null,description:`Fired when the \`ProductSwitchItem\` is activated either with a
click/tap or by using the Enter or Space key.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ProductSwitchItemDomRef, never>) => void"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as a graphical element within the component.

Example:

\`<ProductSwitchItem icon="palette">\`

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the subtitle of the component.",name:"subtitleText",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines a target where the `targetSrc` content must be open.\n\nAvailable options are:\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**Note:** By default target will be open in the same frame as it was clicked.",name:"target",required:!1,type:{name:"string"}},targetSrc:{defaultValue:{value:"undefined"},description:"Defines the component target URI. Supports standard hyperlink behavior.",name:"targetSrc",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the title of the component.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const nt="business-objects-experience",ct="M68 143q-4-7-4-15 0-13 9-22.5T96 96t23 9.5 9 22.5q0 8-4 15l53 54q8-5 15-5h1l45-102q-14-11-14-26 0-13 9-22.5t23-9.5 23 9.5 9 22.5-8 21l60 78q6-3 12-3 12 0 19 7l93-106 12 10-94 109q1 5 1.5 8t.5 4q0 14-9 23t-23 9-23-9-9-23q0-9 8-20l-62-78h-2l-4 1h-2q-1 1-2 1h-3l-45 101q7 5 11.5 12t4.5 15q0 14-9 23t-23 9-23-9-9-23q0-8 5-16l-52-53q-8 5-17 5-8 0-16-5l-37 37-11-11zm348 121q0-8 8-8h48q8 0 8 8v208q0 8-8 8h-48q-8 0-8-8V264zm-256 64q0-8 8-8h48q8 0 8 8v144q0 8-8 8h-48q-8 0-8-8V328zm136 24h48q8 0 8 8v112q0 8-8 8h-48q-8 0-8-8V360q0-8 8-8zM40 384h48q8 0 8 8v80q0 8-8 8H40q-8 0-8-8v-80q0-8 8-8z",st=!1,rt="SAP-icons-v4",at="@ui5/webcomponents-icons";p(nt,{pathData:ct,ltr:st,collection:rt,packageName:at});const lt="business-objects-experience",ut="M26 384q11 0 18 7.5t7 18.5v44q0 11-7 18.5T26 480t-18.5-7.5T0 454v-44q0-11 7.5-18.5T26 384zm160-128q11 0 18 7.5t7 18.5v172q0 11-7 18.5t-18 7.5-18.5-7.5T160 454V282q0-11 7.5-18.5T186 256zm140 64q11 0 18.5 7.5T352 346v108q0 11-7.5 18.5T326 480t-18-7.5-7-18.5V346q0-11 7-18.5t18-7.5zm148-96q11 0 18 7.5t7 18.5v204q0 11-7 18.5t-18 7.5-18.5-7.5T448 454V250q0-11 7.5-18.5T474 224zm-106-10q-1 18-13.5 30T324 256q-16 0-28.5-10.5T281 219l-81-70q-10 5-20 5-2 0-4.5-.5t-4.5-.5L86 264q1 4 1 12 0 18-12.5 31T44 320t-31-13-13-31 13-31 31-13h1l92-118v-4q-2-18 11.5-31T180 66q17 0 29 10.5t14 25.5l83 70q10-4 18-4 9 0 15 3l86-87v-8q0-18 12.5-31T468 32t31 13 13 31-13 31-31 13q-4 0-6-1z",dt=!1,ht="SAP-icons-v5",pt="@ui5/webcomponents-icons";p(lt,{pathData:ut,ltr:dt,collection:ht,packageName:pt});const mt="business-objects-experience",ft="contacts",wt="M0 384h32v-32H0v-32h32V192H0v-32h32v-32H0V96h32V32q0-14 9.5-23T64 0h384q14 0 23 9t9 23q14 0 23 9t9 23v64q0 14-9 23t-23 9v32q14 0 23 9t9 23v64q0 14-9 23t-23 9v32q14 0 23 9t9 23v64q0 14-9 23t-23 9q0 14-9 23t-23 9H64q-13 0-22.5-9T32 480v-64H0v-32zm96 0v32H64v64h384V32H64v64h32v32H64v32h32v32H64v128h32v32H64v32h32zM384 96v64H160V96h224z",bt=!1,gt="SAP-icons-v4",vt="@ui5/webcomponents-icons";p(ft,{pathData:wt,ltr:bt,collection:gt,packageName:vt});const _t="contacts",yt="M358 128q11 0 18.5 7.5T384 154v12q0 11-7.5 18.5T358 192H154q-11 0-18.5-7.5T128 166v-12q0-11 7.5-18.5T154 128h204zm122 96v64h6q11 0 18.5 7.5T512 314v76q0 11-7.5 18.5T486 416h-10q-8 28-31.5 46T390 480H122q-31 0-54.5-18T36 416H26q-11 0-18.5-7.5T0 390t7.5-18 18.5-7h6v-39h-6q-11 0-18.5-7T0 301t7.5-18.5T26 275h6v-38h-6q-11 0-18.5-7.5T0 211t7.5-18 18.5-7h6v-39h-6q-11 0-18.5-7T0 122t7.5-18.5T26 96h10q8-28 31.5-46T122 32h268q31 0 54.5 18T476 96h10q11 0 18.5 7.5T512 122v76q0 11-7.5 18.5T486 224h-6zm-51-102q0-17-11-28t-28-11H122q-17 0-28 11t-11 28v268q0 17 11 28t28 11h268q17 0 28-11t11-28V122z",qt=!1,St="SAP-icons-v5",xt="@ui5/webcomponents-icons";p(_t,{pathData:yt,ltr:qt,collection:St,packageName:xt});const Tt="contacts",kt="flight",Pt="M470 43q9 9 9.5 18.5T480 74q0 12-3.5 27t-12 30.5T447 156l-45 45 68 204-68 68-91-181-87 66v90l-32 32-62-98-98-62 32-32h91l66-87-181-90 68-68 203 68 45-45q14-14 37-24t45-10q21 0 32 11zm-46 90q7-7 12.5-17t8.5-20.5 3.5-15.5.5-7q0-6-2-8h-4l-3-1h-2q-15 0-33 8t-26 16l-59 59-204-67-22 22 175 88-98 130H92l61 39 39 61v-78l131-99 88 176 22-23-68-203z",$t=!1,It="SAP-icons-v4",Nt="@ui5/webcomponents-icons";p(kt,{pathData:Pt,ltr:$t,collection:It,packageName:Nt});const Ct="flight",Dt="M480 278q16 10 16 28v5q0 14-9.5 23t-22.5 9h-7l-163-39v114l60 39q14 8 14 25 0 13-9 21.5t-21 8.5q-6 0-9-1l-73-23-73 23q-3 1-9 1-12 0-21-8.5t-9-21.5q0-17 14-25l60-39V304L55 343h-7q-13 0-22.5-9T16 311v-5q0-18 16-28l186-109V38q0-16 11-27t27-11 27 11 11 27v131z",zt=!1,Rt="SAP-icons-v5",Et="@ui5/webcomponents-icons";p(Ct,{pathData:Dt,ltr:zt,collection:Rt,packageName:Et});const Vt="flight",Ht="wrench",At="M471 381q9 10 9 22.5t-9 21.5l-46 46q-9 9-21 9-14 0-23-9L218 307q-23 10-52 10-47 0-83-26.5T32 224h118q14 0 27.5-9.5T191 191v-32q0-14-13.5-23t-27.5-9H32q15-42 51-68.5T166 32q30 0 55.5 11.5t45 31T297 120t11 55q0 20-6 39zm-23 23L266 223l5-18q3-9 4-16t1-14q0-23-8.5-43T244 97t-35-24-43-9q-46 0-77 33h61q13 0 26 5t23.5 13 17 19.5T223 159v32q0 13-6.5 24.5t-17 20.5-23.5 14-26 5H89q15 14 35 22t42 8q17 0 41-8l19-8 178 179z",Lt=!1,Ot="SAP-icons-v4",Mt="@ui5/webcomponents-icons";p(Ht,{pathData:At,ltr:Lt,collection:Ot,packageName:Mt});const Ut="wrench",jt="M505 399q7 9 7 18 0 11-7 18l-70 70q-7 7-18 7-9 0-18-7L215 320q-27 8-51 8-34 0-64-13t-52.5-35.5-35-53T0 162q0-9 1-22.5t5-26 11-22T36 82q11 0 18 7l63 62 34-34-62-63q-7-7-7-18 0-12 10-19t23.5-11T143 1t22-1q34 0 63.5 13T280 48.5t35 52 13 63.5q0 24-8 51zM51 161q0 24 8.5 45t24 36.5 36 24.5 44.5 9q23 0 43.5-9t35.5-24 24-35.5 9-43.5q0-24-9-44.5T243 84t-35.5-24-43.5-9h-6l47 49q7 7 7 18t-7 18l-69 69q-7 7-18 7t-18-7l-49-47v3zm399 256L295 262q-13 19-33 33l155 155z",Ft=!1,Bt="SAP-icons-v5",Wt="@ui5/webcomponents-icons";p(Ut,{pathData:jt,ltr:Ft,collection:Bt,packageName:Wt});const Kt="wrench",Gt={title:"Inputs / ProductSwitch",component:f,argTypes:{children:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},g={render:o=>w.jsxs(f,{...o,children:[w.jsx(r,{titleText:"ProductSwitchItem",icon:Kt,target:"_blank",targetSrc:"https://sap.github.io/ui5-webcomponents-react/"}),w.jsx(r,{titleText:"Home",subtitleText:"Central Home",icon:A}),w.jsx(r,{titleText:"Analytical Cloud",subtitleText:"Analytical Cloud",icon:mt}),w.jsx(r,{titleText:"Catalog",subtitleText:"Ariba",icon:Tt}),w.jsx(r,{titleText:"Travel & Expense",subtitleText:"Concur",icon:Vt})]})};var P,$,I;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <ProductSwitch {...args}>
        <ProductSwitchItem titleText={'ProductSwitchItem'} icon={wrenchIcon} target="_blank" targetSrc="https://sap.github.io/ui5-webcomponents-react/" />
        <ProductSwitchItem titleText="Home" subtitleText="Central Home" icon={homeIcon} />
        <ProductSwitchItem titleText="Analytical Cloud" subtitleText="Analytical Cloud" icon={businessObjectsExperienceIcon} />
        <ProductSwitchItem titleText="Catalog" subtitleText="Ariba" icon={contactsIcon} />
        <ProductSwitchItem titleText="Travel & Expense" subtitleText="Concur" icon={flightIcon} />
      </ProductSwitch>;
  }
}`,...(I=($=g.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const Jt=["Default"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:Jt,default:Gt},Symbol.toStringTag,{value:"Module"}));export{ue as C,g as D,r as P};
