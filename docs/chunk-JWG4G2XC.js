import{a as Et}from"./chunk-KS6ZJ6VA.js";import{d as Ct}from"./chunk-RDDJVT65.js";import{a as nt,d as ot,g as it,k as lt,l as Ot}from"./chunk-NC2X57N6.js";import{b as xt,c as Tt,e as Mt}from"./chunk-QTMXICW3.js";import{$ as tt,K as W,L,T as X,V as Z,_ as b,i as G,j as Y,r as J,s as j}from"./chunk-M7BIZWSR.js";import{$a as d,Ab as yt,Cb as q,Eb as S,Fa as O,Fb as vt,Ga as ut,Ha as bt,Hb as H,I as N,Ia as $,J as V,Ja as w,K as st,Ka as y,Kb as K,M as A,O as h,Ob as m,Qa as I,T as ft,Ta as v,Tb as p,U as mt,Ua as C,Ub as Q,Wa as ht,Wb as kt,Xa as P,Ya as B,Yb as et,Za as c,_ as D,_a as s,ab as R,da as z,ga as _,gb as F,hb as _t,jb as x,kb as u,nb as U,pb as T,qa as ct,qb as M,ta as r,xb as k,yb as g,zb as f}from"./chunk-VJYKMV5U.js";var at=(()=>{class e extends Ot{required=m(void 0,{transform:p});invalid=m(void 0,{transform:p});disabled=m(void 0,{transform:p});name=m();_disabled=z(!1);$disabled=K(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(t){this._disabled.set(t)}writeControlValue(t,n){}writeValue(t){this.writeControlValue(t,this.writeModelValue.bind(this))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.writeDisabledState(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275dir=bt({type:e,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[w]})}return e})();var wt=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var zt=["icon"],$t=["content"],St=e=>({$implicit:e});function Rt(e,i){e&1&&F(0)}function Ut(e,i){if(e&1&&R(0,"span",0),e&2){let t=u(3);k(t.cn(t.cx("icon"),t.checked?t.onIcon:t.offIcon,t.iconPos==="left"?t.cx("iconLeft"):t.cx("iconRight"))),c("pBind",t.ptm("icon"))}}function qt(e,i){if(e&1&&v(0,Ut,1,3,"span",2),e&2){let t=u(2);C(t.onIcon||t.offIcon?0:-1)}}function Ht(e,i){e&1&&F(0)}function Kt(e,i){if(e&1&&y(0,Ht,1,0,"ng-container",1),e&2){let t=u(2);c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",S(2,St,t.checked))}}function Qt(e,i){if(e&1&&(v(0,qt,1,1)(1,Kt,1,4,"ng-container"),s(2,"span",0),g(3),d()),e&2){let t=u();C(t.iconTemplate?1:0),r(2),k(t.cx("label")),c("pBind",t.ptm("label")),r(),f(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Gt=`
    ${wt}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Yt={root:({instance:e})=>["p-togglebutton p-component",{"p-togglebutton-checked":e.checked,"p-invalid":e.invalid(),"p-disabled":e.$disabled(),"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large","p-togglebutton-fluid":e.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Pt=(()=>{class e extends X{name="togglebutton";style=Gt;classes=Yt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var Bt=new A("TOGGLEBUTTON_INSTANCE"),Jt={provide:nt,useExisting:N(()=>gt),multi:!0},gt=(()=>{class e extends at{componentName="ToggleButton";$pcToggleButton=h(Bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=m(void 0,{transform:p});onChange=new D;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=h(Pt);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,n){this.checked=t,n(t),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,l){if(n&1&&U(l,zt,4)(l,$t,4)(l,W,4),n&2){let a;T(a=M())&&(o.iconTemplate=a.first),T(a=M())&&(o.contentTemplate=a.first),T(a=M())&&(o.templates=a)}},hostVars:11,hostBindings:function(n,o){n&1&&x("keydown",function(a){return o.onKeyDown(a)})("click",function(a){return o.toggle(a)}),n&2&&(I("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-pressed",o.checked?"true":"false")("role","button")("tabindex",o.tabindex!==void 0?o.tabindex:o.$disabled()?-1:0)("data-pc-name","togglebutton")("data-p-checked",o.active)("data-p-disabled",o.$disabled())("data-p",o.dataP),k(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Q],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",p],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[q([Jt,Pt,{provide:Bt,useExisting:e},{provide:Z,useExisting:e}]),$([xt,b]),w],decls:3,vars:9,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(n,o){n&1&&(s(0,"span",0),y(1,Rt,1,0,"ng-container",1),v(2,Qt,4,5),d()),n&2&&(k(o.cx("content")),c("pBind",o.ptm("content")),I("data-p",o.dataP),r(),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",S(7,St,o.checked)),r(),C(o.contentTemplate?-1:2))},dependencies:[Y,G,L,tt,b],encapsulation:2,changeDetection:0})}return e})();var Lt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Xt=["item"],Zt=(e,i)=>({$implicit:e,index:i});function te(e,i){return this.getOptionLabel(i)}function ee(e,i){e&1&&F(0)}function ne(e,i){if(e&1&&y(0,ee,1,0,"ng-container",3),e&2){let t=u(2),n=t.$implicit,o=t.$index,l=u();c("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",vt(2,Zt,n,o))}}function oe(e,i){e&1&&y(0,ne,1,5,"ng-template",null,0,H)}function ie(e,i){if(e&1){let t=_t();s(0,"p-togglebutton",2),x("onChange",function(o){let l=ft(t),a=l.$implicit,E=l.$index,dt=u();return mt(dt.onOptionSelect(o,a,E))}),v(1,oe,2,0),d()}if(e&2){let t=i.$implicit,n=u();c("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.$disabled()||n.isOptionDisabled(t))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid())("pt",n.ptm("pcToggleButton"))("unstyled",n.unstyled()),r(),C(n.itemTemplate||n._itemTemplate?1:-1)}}var le=`
    ${Lt}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,ae={root:({instance:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid(),"p-selectbutton-fluid":e.fluid()}]},Dt=(()=>{class e extends X{name="selectbutton";style=le;classes=ae;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var It=new A("SELECTBUTTON_INSTANCE"),re={provide:nt,useExisting:N(()=>rt),multi:!0},rt=(()=>{class e extends at{componentName="SelectButton";options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=m();fluid=m(void 0,{transform:p});onOptionClick=new D;onChange=new D;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=h(Dt);$pcSelectButton=h(It,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(t){return this.optionLabel?J(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?J(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?J(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}onOptionSelect(t,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let l=this.isSelected(n);if(l&&this.unselectable)return;let a=this.getOptionValue(n),E;if(this.multiple)l?E=this.value.filter(dt=>!j(dt,a,this.equalityKey||void 0)):E=this.value?[...this.value,a]:[a];else{if(l&&!this.allowEmpty)return;E=l?null:a}this.focusedIndex=o,this.value=E,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,l;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[a],index:a});n==="prev"?o.index===0?l=this.el.nativeElement.children.length-1:l=o.index-1:o.index===this.el.nativeElement.children.length-1?l=0:l=o.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!j(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if(j(l,o,this.dataKey)){n=!0;break}}}else n=j(this.getOptionValue(t),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(t=>{t.getType()==="item"&&(this._itemTemplate=t.template)})}writeControlValue(t,n){this.value=t,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,l){if(n&1&&U(l,Xt,4)(l,W,4),n&2){let a;T(a=M())&&(o.itemTemplate=a.first),T(a=M())&&(o.templates=a)}},hostVars:5,hostBindings:function(n,o){n&2&&(I("role","group")("aria-labelledby",o.ariaLabelledBy)("data-p",o.dataP),k(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",p],tabindex:[2,"tabindex","tabindex",Q],multiple:[2,"multiple","multiple",p],allowEmpty:[2,"allowEmpty","allowEmpty",p],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",p],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[q([re,Dt,{provide:It,useExisting:e},{provide:Z,useExisting:e}]),$([b]),w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&P(0,ie,2,12,"p-togglebutton",1,te,!0),n&2&&B(o.options)},dependencies:[gt,lt,ot,it,Y,G,L,tt],encapsulation:2,changeDetection:0})}return e})(),Ft=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ut({type:e});static \u0275inj=st({imports:[rt,L,L]})}return e})();var jt=e=>["/portfolio",e],se=(e,i)=>i.id,ce=(e,i)=>i.url;function ue(e,i){if(e&1&&g(0),e&2){let t=i.$implicit,n=u();yt(" ",t.label[n.lang()]," ")}}function pe(e,i){if(e&1&&(s(0,"span",16),g(1),d()),e&2){let t=i.$implicit;r(),f(t)}}function ge(e,i){if(e&1&&(s(0,"a",19),x("click",function(n){return n.stopPropagation()}),d()),e&2){let t=i.$implicit;c("label",t.label)("icon",t.icon)("outlined",!0)("href",t.url,ct)}}function fe(e,i){if(e&1&&(s(0,"div",17),P(1,ge,1,4,"a",18,ce),d()),e&2){let t=u().$implicit;r(),B(t.links)}}function me(e,i){if(e&1&&(s(0,"article",6)(1,"div",8),R(2,"img",9),d(),s(3,"div",10)(4,"span",11),g(5),d(),s(6,"h2",12)(7,"a",13),g(8),d()(),s(9,"p",14),g(10),d(),s(11,"div",15),P(12,pe,2,1,"span",16,ht),d(),v(14,fe,3,0,"div",17),d()()),e&2){let t=i.$implicit,n=u();c("routerLink",S(8,jt,t.id)),r(2),c("src",t.image,ct)("alt",t.title[n.lang()]),r(3),f(t.year),r(2),c("routerLink",S(10,jt,t.id)),r(),f(t.title[n.lang()]),r(2),f(t.description[n.lang()]),r(2),B(t.tags),r(2),C(t.links!=null&&t.links.length?14:-1)}}function be(e,i){if(e&1&&(s(0,"p",7),g(1),d()),e&2){let t=u();r(),f(t.t.portfolio.empty[t.lang()])}}var Nt=class e{t=et;lang=kt();categoryOptions=[{label:et.portfolio.professional,value:"professional"},{label:et.portfolio.personal,value:"personal"}];category=z("professional");projects=K(()=>Et.filter(i=>i.category===this.category()));static \u0275fac=function(t){return new(t||e)};static \u0275cmp=O({type:e,selectors:[["app-portfolio-page"]],decls:13,vars:6,consts:[["item",""],[1,"portfolio-page"],[1,"page-header"],[1,"page-subtitle"],["optionValue","value",3,"ngModelChange","options","allowEmpty","ngModel"],[1,"projects-grid"],[1,"project-card",3,"routerLink"],[1,"portfolio-empty"],[1,"project-image"],["loading","lazy",3,"src","alt"],[1,"project-content","content-card"],[1,"project-year"],[1,"project-title"],[3,"routerLink"],[1,"project-description"],[1,"project-tags"],[1,"tag"],[1,"project-links"],["pButton","","size","small","target","_blank","rel","noopener",3,"label","icon","outlined","href"],["pButton","","size","small","target","_blank","rel","noopener",3,"click","label","icon","outlined","href"]],template:function(t,n){t&1&&(s(0,"section",1)(1,"header",2)(2,"h1"),g(3),d(),s(4,"p",3),g(5),d(),s(6,"p-selectbutton",4),x("ngModelChange",function(l){return n.category.set(l)}),y(7,ue,1,1,"ng-template",null,0,H),d()(),s(9,"div",5),P(10,me,15,12,"article",6,se,!1,be,2,1,"p",7),d()()),t&2&&(r(3),f(n.t.portfolio.title[n.lang()]),r(2),f(n.t.portfolio.subtitle[n.lang()]),r(),c("options",n.categoryOptions)("allowEmpty",!1)("ngModel",n.category()),r(4),B(n.projects()))},dependencies:[lt,ot,it,Ct,Ft,rt,Mt,Tt],styles:['@charset "UTF-8";.portfolio-page[_ngcontent-%COMP%]{min-height:calc(100vh - var(--navbar-height));max-width:1200px;margin:0 auto;padding:var(--spacing-xl) var(--spacing-lg) var(--spacing-2xl)}.portfolio-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:var(--spacing-xl)}.portfolio-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 .5rem}.portfolio-header[_ngcontent-%COMP%]   .portfolio-subtitle[_ngcontent-%COMP%]{font-size:1.125rem;opacity:.8;margin:0 0 var(--spacing-lg) 0}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:var(--spacing-lg)}.project-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden;cursor:pointer;border-radius:.5rem;transition:transform .3s ease,box-shadow .3s ease}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px);box-shadow:0 12px 24px #00000026}.project-image[_ngcontent-%COMP%]{aspect-ratio:16/10;overflow:hidden;background:var(--p-surface-800)}.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover}.project-content[_ngcontent-%COMP%]{padding:var(--spacing-md);display:flex;flex-direction:column;gap:.75rem;flex:1;position:relative;margin-top:-.75rem;border-radius:.75rem .75rem 0 0}.project-content[_ngcontent-%COMP%]   .project-year[_ngcontent-%COMP%]{font-size:.875rem;font-weight:600;color:var(--p-primary-600)}.project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{font-size:1.4rem;margin:0}.project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--p-surface-900);text-decoration:none}.project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--p-primary-600)}.project-content[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.6;margin:0;color:var(--p-surface-500);flex:1}.project-tags[_ngcontent-%COMP%], .project-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.portfolio-empty[_ngcontent-%COMP%]{grid-column:1/-1;text-align:center;font-size:1.125rem;opacity:.7;padding:var(--spacing-2xl) 0}@media(max-width:768px){.portfolio-page[_ngcontent-%COMP%]{padding:var(--spacing-lg) var(--spacing-sm) var(--spacing-xl)}}'],changeDetection:0})};export{Nt as PortfolioPage};
