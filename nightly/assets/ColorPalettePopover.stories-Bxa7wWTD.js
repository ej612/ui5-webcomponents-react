import{j as r}from"./jsx-runtime-D6fbYt3N.js";import{i as S}from"./utils-1DaASevu.js";import{r as w}from"./index-DysCNOs_.js";import{B as N}from"./index-DP-u0XOf.js";import{a as k,C as a}from"./index-DmKkpfpV.js";import{p as b,v as u,q as l,a as R,s as T,b as m,m as I,y as O,S as q,w as E}from"./withWebComponent-DpVKsRHi.js";import{d as j}from"./slot-_4yKMUwC.js";import{b as y}from"./event-BX8i4Y_x.js";import{i as V}from"./i18n-DEVDpFvK.js";import{e as A}from"./Popover-CxadHYVC.js";import{d as M}from"./useIsomorphicLayoutEffect-F-N6bu_1.js";import{c as P}from"./Icon-CrKv37md.js";import{s as x}from"./parameters-bundle.css-R51uC6BG.js";import{s as B}from"./ResponsivePopoverCommon.css-CQwE_ndi.js";import{al as L,l as U}from"./i18n-defaults-CMHHS2wK.js";import{a as F}from"./Button-CzXV-qq-.js";import{a as Y}from"./Title-DnczWaCy.js";import{R as H}from"./ResponsivePopover-CkLpmtL-.js";function z(s,e,o){return o?b`<${u("ui5-responsive-popover",e,o)} hide-arrow content-only-on-desktop placement="Bottom" .opener="${l(this.opener)}" ?open="${this._open}" @ui5-close="${l(this.onAfterClose)}" @ui5-open="${l(this.onAfterOpen)}"><div slot="header" class="ui5-cp-header"><${u("ui5-title",e,o)} level="H1" wrapping-type="None">${l(this._colorPaletteTitle)}</${u("ui5-title",e,o)}></div><div><${u("ui5-color-palette",e,o)} ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${l(this.defaultColor)}" popup-mode @ui5-item-click="${l(this.onSelectedColor)}">${P(this.colorPaletteColors,(t,n)=>t._id||n,(t,n)=>g.call(this,s,e,o,t,n))}</${u("ui5-color-palette",e,o)}></div><div slot="footer" class="ui5-cp-footer"><${u("ui5-button",e,o)} design="Transparent" @click="${this.closePopover}">${l(this._cancelButtonLabel)}</${u("ui5-button",e,o)}></div></${u("ui5-responsive-popover",e,o)}>`:b`<ui5-responsive-popover hide-arrow content-only-on-desktop placement="Bottom" .opener="${l(this.opener)}" ?open="${this._open}" @ui5-close="${l(this.onAfterClose)}" @ui5-open="${l(this.onAfterOpen)}"><div slot="header" class="ui5-cp-header"><ui5-title level="H1" wrapping-type="None">${l(this._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${l(this.defaultColor)}" popup-mode @ui5-item-click="${l(this.onSelectedColor)}">${P(this.colorPaletteColors,(t,n)=>t._id||n,(t,n)=>g.call(this,s,e,o,t,n))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${this.closePopover}">${l(this._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`}function g(s,e,o,t,n){return b`<slot name="${l(t._individualSlot)}"></slot>`}R("@ui5/webcomponents-theming","sap_horizon",async()=>T);R("@ui5/webcomponents","sap_horizon",async()=>x);const W={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalettePopover.css.ts",content:`.ui5-cp-header{width:100%;height:var(--_ui5-v2-4-0_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`};var p=function(s,e,o,t){var n=arguments.length,i=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,o,t);else for(var C=s.length-1;C>=0;C--)(d=s[C])&&(i=(n<3?d(i):n>3?d(e,o,i):d(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i},v;let c=v=class extends q{constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireDecoratorEvent("close")}onAfterOpen(){var o;const e=this._colorPalette;e._currentlySelected?(o=e._currentlySelected)==null||o.focus():e.showRecentColors&&e.recentColorsElements.length?e.recentColorsElements[0].focus():e.showDefaultColor&&e.colorPaletteNavigationElements[0].focus(),e.allColorsInPalette.forEach(t=>{const n=t.offsetHeight+4;t.style.setProperty(M("--_ui5_color_palette_item_height"),`${n}px`)})}onSelectedColor(e){this.closePopover(),this.fireDecoratorEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return v.i18nBundle.getText(L)}get _cancelButtonLabel(){return v.i18nBundle.getText(U)}get _open(){return this.open||void 0}};p([m({type:Boolean})],c.prototype,"showRecentColors",void 0);p([m({type:Boolean})],c.prototype,"showMoreColors",void 0);p([m({type:Boolean})],c.prototype,"showDefaultColor",void 0);p([m()],c.prototype,"defaultColor",void 0);p([m({type:Boolean})],c.prototype,"open",void 0);p([m({converter:A})],c.prototype,"opener",void 0);p([j({default:!0,type:HTMLElement,individualSlots:!0})],c.prototype,"colors",void 0);p([V("@ui5/webcomponents")],c,"i18nBundle",void 0);c=v=p([I({tag:"ui5-color-palette-popover",renderer:O,styles:[B,W],template:z,dependencies:[H,F,Y,k]}),y("item-click",{detail:{color:{type:String}},bubbles:!0}),y("close",{bubbles:!0})],c);c.define();const h=E("ui5-color-palette-popover",["defaultColor","opener"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"]);h.displayName="ColorPalettePopover";try{h.displayName="ColorPalettePopover",h.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired when the \`ColorPalettePopover\` is closed due to user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:'Defines whether the user can choose a custom color from a component.\n\n**Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="ColorPalettePopover",h.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired when the \`ColorPalettePopover\` is closed due to user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:'Defines whether the user can choose a custom color from a component.\n\n**Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const J={title:"Modals & Popovers / ColorPalettePopover",component:h,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3},open:S},tags:["package:@ui5/webcomponents"]},f={render(s){const e=w.useRef(null),[o,t]=w.useState(s.open),n=i=>{t(d=>!d)};return r.jsxs(r.Fragment,{children:[r.jsx(N,{onClick:n,ref:e,children:"Open ColorPalettePopover"}),r.jsxs(h,{...s,opener:e.current,open:o,onClose:i=>{s.onClose(i),t(!1)},children:[r.jsx(a,{value:"black"}),r.jsx(a,{value:"darkblue"}),r.jsx(a,{value:"#444444"}),r.jsx(a,{value:"rgb(0,200,0)"}),r.jsx(a,{value:"green"}),r.jsx(a,{value:"darkred"}),r.jsx(a,{value:"yellow"}),r.jsx(a,{value:"blue"}),r.jsx(a,{value:"cyan"}),r.jsx(a,{value:"orange"}),r.jsx(a,{value:"#5480e7"}),r.jsx(a,{value:"#ff6699"})]})]})}};var _,D,$;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render(args) {
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    const onButtonClick = e => {
      setOpen(prev => !prev);
    };
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} opener={btnRef.current} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
          <ColorPaletteItem value="#444444" />
          <ColorPaletteItem value="rgb(0,200,0)" />
          <ColorPaletteItem value="green" />
          <ColorPaletteItem value="darkred" />
          <ColorPaletteItem value="yellow" />
          <ColorPaletteItem value="blue" />
          <ColorPaletteItem value="cyan" />
          <ColorPaletteItem value="orange" />
          <ColorPaletteItem value="#5480e7" />
          <ColorPaletteItem value="#ff6699" />
        </ColorPalettePopover>
      </>;
  }
}`,...($=(D=f.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const G=["Default"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:G,default:J},Symbol.toStringTag,{value:"Module"}));export{fe as C,f as D};
