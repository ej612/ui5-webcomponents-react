import{p as s,q as e,v as l,a as _,s as h,b as B,m as b,B as g}from"./withWebComponent-DpVKsRHi.js";import{A as k}from"./Keys-DoZifIQ_.js";import{a as p}from"./Button-CzXV-qq-.js";import{s as A}from"./parameters-bundle.css-R51uC6BG.js";function $(n,t,o){return s`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  aria-pressed="${e(this.pressed)}"  @focusout=${this._onfocusout} @click=${this._onclick} @mousedown=${this._onmousedown} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${e(this.tabIndexValue)} aria-expanded="${e(this.accessibilityAttributes.expanded)}" aria-controls="${e(this.accessibilityAttributes.controls)}" aria-haspopup="${e(this._hasPopup)}" aria-label="${e(this.ariaLabelText)}" aria-describedby="${e(this.ariaDescribedbyText)}" title="${e(this.buttonTitle)}" part="button" role="${e(this.effectiveAccRole)}">${this.icon?m.call(this,n,t,o):void 0}<span id="${e(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.endIcon?S.call(this,n,t,o):void 0}${this.hasButtonType?f.call(this,n,t,o):void 0}</button> `}function m(n,t,o){return o?s`<${l("ui5-icon",t,o)} class="ui5-button-icon" name="${e(this.icon)}" mode="${e(this.iconMode)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${l("ui5-icon",t,o)}>`:s`<ui5-icon class="ui5-button-icon" name="${e(this.icon)}" mode="${e(this.iconMode)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function S(n,t,o){return o?s`<${l("ui5-icon",t,o)} class="ui5-button-end-icon" name="${e(this.endIcon)}" mode="${e(this.endIconMode)}" part="endIcon"></${l("ui5-icon",t,o)}>`:s`<ui5-icon class="ui5-button-end-icon" name="${e(this.endIcon)}" mode="${e(this.endIconMode)}" part="endIcon"></ui5-icon>`}function f(n,t,o){return s`<span id="ui5-button-hiddenText-type" aria-hidden="true" class="ui5-hidden-text">${e(this.buttonTypeText)}</span>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>h);_("@ui5/webcomponents","sap_horizon",async()=>A);const T={packageName:"@ui5/webcomponents",fileName:"themes/ToggleButton.css.ts",content:`:host(:not([hidden])){display:inline-block}:host([design="Emphasized"]:not([pressed])){text-shadow:var(--_ui5-v2-4-0_toggle_button_emphasized_text_shadow)}:host([pressed]),:host([design="Default"][pressed]),:host([design="Transparent"][pressed]),:host([design="Emphasized"][pressed]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor);text-shadow:none}:host([pressed]:hover),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Default"][pressed]:hover),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Transparent"][pressed]:hover),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Emphasized"][pressed]:hover),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([active]:not([disabled])),:host([design="Default"][active]:not([disabled])),:host([design="Transparent"][active]:not([disabled])),:host([design="Emphasized"][active]:not([disabled])){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design="Negative"][pressed]){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][active]:not([disabled])){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Negative"][pressed][active]:hover),:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Reject_Selected_Hover_Background);border-color:var(--sapButton_Reject_Selected_Hover_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Positive"][pressed]){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][active]:not([disabled])){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed][active]:hover),:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Accept_Selected_Hover_Background);border-color:var(--sapButton_Accept_Selected_Hover_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Attention"][pressed]){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][active]:not([disabled])){background:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Attention"][pressed][active]:hover),:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Attention_Selected_Hover_Background);border-color:var(--sapButton_Attention_Selected_Hover_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}
`};var v=function(n,t,o,c){var i=arguments.length,r=i<3?t:c===null?c=Object.getOwnPropertyDescriptor(t,o):c,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,o,c);else for(var u=n.length-1;u>=0;u--)(d=n[u])&&(r=(i<3?d(r):i>3?d(t,o,r):d(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};let a=class extends p{constructor(){super(...arguments),this.pressed=!1}_onclick(){this.pressed=!this.pressed,g()&&this.getDomRef().focus()}_onkeyup(t){if(k(t)){t.preventDefault();return}super._onkeyup(t)}};v([B({type:Boolean})],a.prototype,"pressed",void 0);a=v([b({tag:"ui5-toggle-button",template:$,styles:[p.styles,T]})],a);a.define();const w=a;export{w as T};
