import{j as b}from"./jsx-runtime-D6fbYt3N.js";import{o as d}from"./ValueState-Bg0UWejw.js";import{B as P}from"./index-DP-u0XOf.js";import{p as c,q as s,v as m,a as q,s as B,b as u,m as R,y as L,S as H,w as W}from"./withWebComponent-DpVKsRHi.js";import{b as S}from"./event-BX8i4Y_x.js";import{d as z}from"./slot-_4yKMUwC.js";import{i as O}from"./i18n-DEVDpFvK.js";import{b as j,i as G}from"./Keys-DoZifIQ_.js";import{am as K,an as J,e as Q,d as X,V as Y,c as Z}from"./i18n-defaults-CMHHS2wK.js";import{a as ee}from"./Input-B242Ue_g.js";import{c as te}from"./Popover-CxadHYVC.js";import{I as oe}from"./Icon-CrKv37md.js";import{o as w}from"./class-map-CAgcI9af.js";import{s as F}from"./style-map-Bigav4TG.js";import{s as ae}from"./parameters-bundle.css-R51uC6BG.js";import{s as ne}from"./ResponsivePopoverCommon.css-CQwE_ndi.js";import{s as ie}from"./ValueStateMessage.css-BYtlHP7n.js";function se(o,e,t){return t?c`<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @dragover="${this._ondrag}" @drop="${this._ondrop}"><div class="ui5-file-uploader-mask">${this.hideInput?void 0:N.call(this,o,e,t)}<slot></slot></div><input type="file" title="${s(this.titleText)}" accept="${s(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1"></div><${m("ui5-popover",e,t)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div slot="header" class="${w(this.classes.popoverValueState)}" style="${F(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?$.call(this,o,e,t):void 0}${this.shouldDisplayDefaultValueStateMessage?I.call(this,o,e,t):T.call(this,o,e,t)}</div></${m("ui5-popover",e,t)}> `:c`<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @dragover="${this._ondrag}" @drop="${this._ondrop}"><div class="ui5-file-uploader-mask">${this.hideInput?void 0:N.call(this,o,e,t)}<slot></slot></div><input type="file" title="${s(this.titleText)}" accept="${s(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1"></div><ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div slot="header" class="${w(this.classes.popoverValueState)}" style="${F(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?$.call(this,o,e,t):void 0}${this.shouldDisplayDefaultValueStateMessage?I.call(this,o,e,t):T.call(this,o,e,t)}</div></ui5-popover> `}function N(o,e,t){return t?c`<${m("ui5-input",e,t)} value="${s(this.value)}" value-state="${s(this.valueState)}" placeholder="${s(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></${m("ui5-input",e,t)}>`:c`<ui5-input value="${s(this.value)}" value-state="${s(this.valueState)}" placeholder="${s(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`}function $(o,e,t){return t?c`<${m("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageInputIcon)}"></${m("ui5-icon",e,t)}>`:c`<ui5-icon class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageInputIcon)}"></ui5-icon>`}function I(o,e,t){return c`${s(this.valueStateText)}`}function T(o,e,t){return c`<slot name="valueStateMessage"></slot>`}q("@ui5/webcomponents-theming","sap_horizon",async()=>B);q("@ui5/webcomponents","sap_horizon",async()=>ae);const le={packageName:"@ui5/webcomponents",fileName:"themes/FileUploader.css.ts",content:`:host{vertical-align:middle}:host{display:inline-block}.ui5-file-uploader-root{position:relative}.ui5-file-uploader-root input[type=file]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;font-size:0}.ui5-file-uploader-root input[type=file]:not([disabled]){cursor:pointer}.ui5-file-uploader-mask{display:flex;align-items:center}.ui5-file-uploader-mask [ui5-input]{margin-right:.25rem}:host([value-state="None"]:not([disabled]):hover) [ui5-input],:host(:not([value-state]):not([disabled]):hover) [ui5-input]{border:var(--_ui5-v2-4-0_file_uploader_hover_border);background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Negative"]:not([disabled]):hover) [ui5-input]{background-color:var(--_ui5-v2-4-0_file_uploader_value_state_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Critical"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}:host(:not([disabled]):active) [ui5-button]{background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor);text-shadow:none}
`};var i=function(o,e,t,n){var l=arguments.length,r=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,n);else for(var _=o.length-1;_>=0;_--)(y=o[_])&&(r=(l<3?y(r):l>3?y(e,t,r):y(e,t))||r);return l>3&&r&&Object.defineProperty(e,t,r),r},p;const re=o=>o/1024/1024;let a=p=class extends H{constructor(){super(...arguments),this.hideInput=!1,this.disabled=!1,this.multiple=!1,this.value="",this.valueState="None",this.focused=!1}async formElementAnchor(){return this.getFocusDomRefAsync()}getFocusDomRef(){return this.content[0]}get formFormattedValue(){if(this.files&&this.name){const e=new FormData;for(let t=0;t<this.files.length;t++)e.append(this.name,this.files[t]);return e}return null}_onmouseover(){this.content.forEach(e=>{e.classList.add("ui5_hovered")})}_onmouseout(){this.content.forEach(e=>{e.classList.remove("ui5_hovered")})}_onclick(){this.getFocusDomRef().matches(":has(:focus-within)")&&this._input.click()}_onkeydown(e){j(e)&&(this._input.click(),e.preventDefault())}_onkeyup(e){G(e)&&(this._input.click(),e.preventDefault())}_ondrag(e){e.preventDefault(),e.stopPropagation()}_ondrop(e){var l;e.preventDefault(),e.stopPropagation();const t=(l=e.dataTransfer)==null?void 0:l.files;if(!t)return;const n=this._validateFiles(t);!this.value&&!n.length||(this._input.files=n,this._updateValue(n),this.fireDecoratorEvent("change",{files:n}))}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get files(){return this._input?this._input.files:p._emptyFilesList}onAfterRendering(){this.value||(this._input.value=""),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover)}_onChange(e){let t=e.target.files;t&&(t=this._validateFiles(t)),!(!this.value&&!(t!=null&&t.length))&&(this._updateValue(t),this.fireDecoratorEvent("change",{files:t}))}_updateValue(e){this.value=Array.from(e||[]).reduce((t,n)=>`${t}"${n.name}" `,"")}_validateFiles(e){const t=this.maxFileSize?this._getExceededFiles(e):[];return t.length&&(this.fireDecoratorEvent("file-size-exceed",{filesData:t}),e=new DataTransfer().files),e}_getExceededFiles(e){const t=Array.from(e),n=[];for(let l=0;l<t.length;l++){const r=re(t[l].size);r>this.maxFileSize&&n.push({fileName:t[l].name,fileSize:r})}return n}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}openValueStatePopover(){const e=this._getPopover();e&&(e.opener=this,e.open=!0)}closeValueStatePopover(){const e=this._getPopover();e&&(e.open=!1)}_getPopover(){return this.shadowRoot.querySelector(".ui5-valuestatemessage-popover")}static get _emptyFilesList(){return this.emptyInput||(this.emptyInput=document.createElement("input"),this.emptyInput.type="file"),this.emptyInput.files}get browseText(){return p.i18nBundle.getText(K)}get titleText(){return p.i18nBundle.getText(J)}get _input(){return this.shadowRoot.querySelector("input[type=file]")||this.querySelector("input[type=file][data-ui5-form-support]")}get valueStateTextMappings(){return{Positive:p.i18nBundle.getText(Q),Information:p.i18nBundle.getText(X),Negative:p.i18nBundle.getText(Y),Critical:p.i18nBundle.getText(Z)}}get valueStateText(){return this.valueStateTextMappings[this.valueState]}get hasValueState(){return this.valueState!==d.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==d.Positive}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this.hideInput}get _valueStateMessageInputIcon(){const e={Negative:"error",Critical:"alert",Positive:"sys-enter-2",Information:"information"};return this.valueState!==d.None?e[this.valueState]:""}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===d.Positive,"ui5-valuestatemessage--error":this.valueState===d.Negative,"ui5-valuestatemessage--warning":this.valueState===d.Critical,"ui5-valuestatemessage--information":this.valueState===d.Information}}}get styles(){return{popoverHeader:{width:`${this.ui5Input?this.ui5Input.offsetWidth:0}px`}}}get ui5Input(){return this.shadowRoot.querySelector(".ui5-file-uploader-input")}};i([u()],a.prototype,"accept",void 0);i([u({type:Boolean})],a.prototype,"hideInput",void 0);i([u({type:Boolean})],a.prototype,"disabled",void 0);i([u({type:Boolean})],a.prototype,"multiple",void 0);i([u()],a.prototype,"name",void 0);i([u()],a.prototype,"placeholder",void 0);i([u()],a.prototype,"value",void 0);i([u({type:Number})],a.prototype,"maxFileSize",void 0);i([u()],a.prototype,"valueState",void 0);i([u({type:Boolean})],a.prototype,"focused",void 0);i([z({type:HTMLElement,default:!0})],a.prototype,"content",void 0);i([z()],a.prototype,"valueStateMessage",void 0);i([O("@ui5/webcomponents")],a,"i18nBundle",void 0);a=p=i([R({tag:"ui5-file-uploader",languageAware:!0,formAssociated:!0,renderer:L,styles:[le,ne,ie],template:se,dependencies:[ee,te,oe]}),S("change",{detail:{files:{type:FileList}},bubbles:!0}),S("file-size-exceed",{detail:{filesData:{type:Array}},bubbles:!0})],a);a.define();const h=W("ui5-file-uploader",["accept","maxFileSize","name","placeholder","value","valueState"],["disabled","hideInput","multiple"],["valueStateMessage"],["change","file-size-exceed"]);h.displayName="FileUploader";try{h.displayName="FileUploader",h.__docgenInfo={description:`The \`FileUploader\` opens a file explorer dialog and enables users to upload files.
The component consists of input field, but you can provide an HTML element by your choice
to trigger the file upload, by using the default slot.
Furthermore, you can set the property "hideInput" to "true" to hide the input field.

To get all selected files, you can simply use the read-only "files" property.
To restrict the types of files the user can select, you can use the "accept" property.

And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the \`FileUploader\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"FileUploader",props:{children:{defaultValue:null,description:`By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.

**Note:** If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.
Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Event is fired when the value of the file path has been changed.

**Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void"}},onFileSizeExceed:{defaultValue:null,description:`Event is fired when the size of a file is above the \`maxFileSize\` property value.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onFileSizeExceed",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderFileSizeExceedEventDetail>) => void"}},accept:{defaultValue:{value:"undefined"},description:"Comma-separated list of file types that the component should accept.\n\n**Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.",name:"accept",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:{value:"false"},description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',name:"hideInput",required:!1,type:{name:"boolean"}},maxFileSize:{defaultValue:{value:"undefined"},description:`Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"maxFileSize",required:!1,type:{name:"number"}},multiple:{defaultValue:{value:"false"},description:"Allows multiple files to be chosen.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the name/names of the file/files to upload.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="FileUploader",h.__docgenInfo={description:`The \`FileUploader\` opens a file explorer dialog and enables users to upload files.
The component consists of input field, but you can provide an HTML element by your choice
to trigger the file upload, by using the default slot.
Furthermore, you can set the property "hideInput" to "true" to hide the input field.

To get all selected files, you can simply use the read-only "files" property.
To restrict the types of files the user can select, you can use the "accept" property.

And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the \`FileUploader\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"FileUploader",props:{children:{defaultValue:null,description:`By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.

**Note:** If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.
Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Event is fired when the value of the file path has been changed.

**Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void"}},onFileSizeExceed:{defaultValue:null,description:`Event is fired when the size of a file is above the \`maxFileSize\` property value.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onFileSizeExceed",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderFileSizeExceedEventDetail>) => void"}},accept:{defaultValue:{value:"undefined"},description:"Comma-separated list of file types that the component should accept.\n\n**Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.",name:"accept",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:{value:"false"},description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',name:"hideInput",required:!1,type:{name:"boolean"}},maxFileSize:{defaultValue:{value:"undefined"},description:`Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"maxFileSize",required:!1,type:{name:"number"}},multiple:{defaultValue:{value:"false"},description:"Allows multiple files to be chosen.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the name/names of the file/files to upload.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"Inputs / FileUploader",component:h,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:d.None},tags:["package:@ui5/webcomponents"]},f={},v={render(o){return b.jsx(h,{...o,children:b.jsx(P,{children:"Upload single file"})})}},g={render(o){return b.jsx(h,{...o,hideInput:!0,children:b.jsx(P,{children:"Upload single file"})})}};var D,x,V;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(V=(x=f.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var U,k,C;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render(args) {
    return <FileUploader {...args}>
        <Button>Upload single file</Button>
      </FileUploader>;
  }
}`,...(C=(k=v.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var E,M,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render(args) {
    return <FileUploader {...args} hideInput>
        <Button>Upload single file</Button>
      </FileUploader>;
  }
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const pe=["Default","WithButton","WithHiddenInput"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:f,WithButton:v,WithHiddenInput:g,__namedExportsOrder:pe,default:ue},Symbol.toStringTag,{value:"Module"}));export{xe as C,f as D,v as W,g as a};
