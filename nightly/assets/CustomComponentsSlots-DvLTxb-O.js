import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as e}from"./index-DyCphG7h.js";import"./chunk-NUUEMKO5-Dp8wVjMX.js";import{ae as p}from"./index-AF0dfIsG.js";import"./index-D_6MlDCz.js";import{B as i}from"./index-Dmy9ytmu.js";import{B as s}from"./index-DP-u0XOf.js";import"./index-OrErW1tb.js";import"./TagDesign-Dou_yO3g.js";import"./index-DysCNOs_.js";import"./index-C4cLd1FO.js";import"./Button-CzXV-qq-.js";import"./withWebComponent-DpVKsRHi.js";import"./copy-BtTL6xAX.js";import{F as m}from"./CommandsAndQueries-bjhqHJch.js";import"./WrappingType-CW8URInd.js";import"./Title-DnczWaCy.js";import"./iframe-YeYAuAsd.js";import"../sb-preview/runtime.js";import"./client-CqEfiX9M.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-D2m47C26.js";import"./class-map-CAgcI9af.js";import"./utils-BMpfTDbr.js";import"./useIsomorphicLayoutEffect-F-N6bu_1.js";import"./parameters-bundle.css-R51uC6BG.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-Ch4ABsnB.js";import"./Icon-CrKv37md.js";import"./Keys-DoZifIQ_.js";import"./i18n-defaults-neJWcM66.js";import"./information-D_LjlJHK.js";import"./alert-CiqdS0Ti.js";import"./i18n-defaults-CMHHS2wK.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-HqN2rB8b.js";import"./Popover-CxadHYVC.js";import"./PopupsCommon.css-Bu1W85h-.js";import"./FocusableElements-DpmShrVF.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bigav4TG.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-VxGFz2Tr.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BAIsnduv.js";import"./index-kNlKigw5.js";import"./Label-D_ADNoJV.js";import"./index-cawFe0IV.js";import"./Link-CcG_uYXc.js";import"./index-x5zB9JtW.js";import"./index-CA4smrai.js";import"./addCustomCSSWithScoping-DYmOnLgW.js";import"./index-qKU3PnwJ.js";import"./BusyIndicator-B17L6t2M.js";import"./index-C6sMyakJ.js";import"./index-CHrZj7jK.js";import"./Avatar-CLqwzIQ4.js";import"./employee-CUDhI-YO.js";import"./index-DncnOMHF.js";import"./I18nStore-CXxqSOxg.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(s,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(s,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-components-to-slots",children:"Adding custom components to slots"}),`
`,t.jsxs(o.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(o.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(o.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(d,{}),`
`,t.jsxs(o.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(o.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(o.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(o.p,{children:["To fix this the ",t.jsx(o.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(o.p,{children:["Now the ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(u,{}),`
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Mt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Mt as default};
