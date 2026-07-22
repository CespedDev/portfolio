import{a as rt}from"./chunk-KS6ZJ6VA.js";import{b as $e,d as ze}from"./chunk-ROAERNMH.js";import{a as st,c as ye}from"./chunk-SUJATL3L.js";import{b as tt,c as it,d as nt,e as at}from"./chunk-KYHLHVCG.js";import{a as Ie,c as ct,d as dt}from"./chunk-LFP732YR.js";import{$ as T,J as _e,Q as Ke,R as Ze,S as xe,U as We,W as Xe,X as W,Z as Ye,_ as Je,aa as et,ba as F,f as He,g as ve,h as K,i as fe,j as ee,k as be,o as N,q as Qe,r as le,w as Z,x as re,y as qe,z as Ue}from"./chunk-IKAGNX4Q.js";import{$a as d,Aa as L,Cb as J,Db as q,Eb as he,Fa as x,Fb as je,G as pe,Ga as De,Hb as oe,Ia as Y,J as ke,Ja as w,K as Me,Ka as h,Kb as O,M as Ve,O as b,Ob as ge,Qa as M,Sb as Re,T as u,Ta as j,U as m,Ua as R,Ub as v,V as _,Va as Fe,Vb as U,Wa as Pe,Xa as ie,Xb as ot,Y as ue,Ya as ne,Za as l,Zb as lt,_ as V,_a as g,a as E,ab as f,da as G,db as D,eb as H,fb as $,ga as k,gb as Ae,hb as S,ia as Be,jb as I,kb as r,nb as Ne,o as Se,ob as ae,pb as y,qa as me,qb as C,sa as Oe,ta as s,tb as Ee,vb as Ge,wb as Le,xb as p,yb as z,zb as Q}from"./chunk-3H7DRUIN.js";function pt(t,o){let i=!o?.manualCleanup?o?.injector?.get(ue)??b(ue):null,n=vt(o?.equal),a;o?.requireSync?a=G({kind:0},{equal:n}):a=G({kind:1,value:o?.initialValue},{equal:n});let c,B=t.subscribe({next:A=>a.set({kind:1,value:A}),error:A=>{a.set({kind:2,error:A}),c?.()},complete:()=>{c?.()}});if(o?.requireSync&&a().kind===0)throw new pe(601,!1);return c=i?.onDestroy(B.unsubscribe.bind(B)),O(()=>{let A=a();switch(A.kind){case 1:return A.value;case 2:throw A.error;case 0:throw new pe(601,!1)}},{equal:o?.equal})}function vt(t=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&t(o.value,e.value)}var ft=["data-p-icon","chevron-down"],Ce=(()=>{class t extends F{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[w],attrs:ft,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(_(),D(0,"path",0))},encapsulation:2})}return t})();var bt=["data-p-icon","chevron-left"],se=(()=>{class t extends F{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["","data-p-icon","chevron-left"]],features:[w],attrs:bt,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(_(),D(0,"path",0))},encapsulation:2})}return t})();var _t=["data-p-icon","chevron-right"],ce=(()=>{class t extends F{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[w],attrs:_t,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(_(),D(0,"path",0))},encapsulation:2})}return t})();var xt=["data-p-icon","chevron-up"],we=(()=>{class t extends F{static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["","data-p-icon","chevron-up"]],features:[w],attrs:xt,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(i,n){i&1&&(_(),D(0,"path",0))},encapsulation:2})}return t})();var ut=`
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

       .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }

    .p-galleria-enter-active {
        animation: p-animate-galleria-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-leave-active {
        animation: p-animate-galleria-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    @keyframes p-animate-galleria-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-galleria-leave {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var It=["header"],yt=["footer"],Ct=["indicator"],wt=["caption"],Tt=["closeicon"],St=["previousthumbnailicon"],kt=["nextthumbnailicon"],Mt=["itempreviousicon"],Vt=["itemnexticon"],Bt=["item"],Ot=["thumbnail"],Dt=["container"];function Ft(t,o){if(t&1){let e=S();g(0,"div",6),I("pMotionOnBeforeEnter",function(n){u(e);let a=r(3);return m(a.onBeforeEnter(n))})("pMotionOnBeforeLeave",function(){u(e);let n=r(3);return m(n.onBeforeLeave())})("pMotionOnAfterLeave",function(){u(e);let n=r(3);return m(n.onAfterLeave())})("maskHide",function(){u(e);let n=r(3);return m(n.onMaskHide())})("activeItemChange",function(n){u(e);let a=r(3);return m(a.onActiveItemChange(n))}),d()}if(t&2){let e=r(3);l("pMotion",e.visible)("pMotionAppear",!0)("pMotionName","p-galleria")("pMotionOptions",e.computedMotionOptions())("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)("pt",e.pt())("pFocusTrapDisabled",!e.fullScreen)("unstyled",e.unstyled())}}function Pt(t,o){if(t&1){let e=S();g(0,"div",4),I("pMotionOnAfterLeave",function(){u(e);let n=r(2);return m(n.onMaskAfterLeave())})("click",function(n){u(e);let a=r(2);return m(a.onMaskHide(n))}),j(1,Ft,1,12,"div",5),d()}if(t&2){let e=r(2);p(e.maskClass),l("pBind",e.ptm("mask"))("pMotion",e.maskVisible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.fullScreen?"p-overlay-mask-enter-active":"")("pMotionLeaveActiveClass",e.fullScreen?"p-overlay-mask-leave-active":"")("pMotionOptions",e.computedMaskMotionOptions())("ngClass",e.cx("mask")),M("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),s(),R(e.renderContent()?1:-1)}}function At(t,o){if(t&1&&(g(0,"div",null,1),j(2,Pt,2,12,"div",3),d()),t&2){let e=r();s(2),R(e.renderMask()?2:-1)}}function Nt(t,o){if(t&1){let e=S();g(0,"div",7),I("activeItemChange",function(n){u(e);let a=r();return m(a.onActiveItemChange(n))}),d()}if(t&2){let e=r();l("pt",e.pt())("unstyled",e.unstyled())("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var Et=["closeButton"],Gt=()=>({}),Lt=["pGalleriaContent",""];function jt(t,o){if(t&1&&(_(),f(0,"svg",10)),t&2){let e=r(3);p(e.cx("closeIcon")),l("pBind",e.getPTOptions("closeIcon"))}}function Rt(t,o){}function Ht(t,o){t&1&&h(0,Rt,0,0,"ng-template")}function $t(t,o){if(t&1){let e=S();g(0,"button",7),I("click",function(){u(e);let n=r(2);return m(n.maskHide.emit())}),h(1,jt,1,3,"svg",8)(2,Ht,1,0,null,9),d()}if(t&2){let e=r(2);p(e.cx("closeButton")),l("pBind",e.getPTOptions("closeButton")),M("aria-label",e.closeAriaLabel()),s(),l("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),s(),l("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function zt(t,o){if(t&1&&f(0,"div",11),t&2){let e=r(2);p(e.cx("header")),l("unstyled",e.unstyled())("templates",e.galleria.templates)("pBind",e.getPTOptions("header"))}}function Qt(t,o){if(t&1){let e=S();g(0,"div",12),I("onActiveIndexChange",function(n){u(e);let a=r(2);return m(a.onActiveIndexChange(n))})("stopSlideShow",function(){u(e);let n=r(2);return m(n.stopSlideShow())}),d()}if(t&2){let e=r(2);l("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)("pt",e.pt())("unstyled",e.unstyled())}}function qt(t,o){if(t&1&&f(0,"div",13),t&2){let e=r(2);p(e.cx("footer")),l("pBind",e.getPTOptions("footer"))("templates",e.galleria.templates)("unstyled",e.unstyled())}}function Ut(t,o){if(t&1){let e=S();H(0),h(1,$t,3,6,"button",1)(2,zt,1,5,"div",2),g(3,"div",3)(4,"div",4),I("onActiveIndexChange",function(n){u(e);let a=r();return m(a.onActiveIndexChange(n))})("startSlideShow",function(){u(e);let n=r();return m(n.startSlideShow())})("stopSlideShow",function(){u(e);let n=r();return m(n.stopSlideShow())}),d(),h(5,Qt,1,13,"div",5),d(),h(6,qt,1,5,"div",6),$()}if(t&2){let e=r();s(),l("ngIf",e.galleria.fullScreen),s(),l("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),s(),p(e.cx("content")),l("pBind",e.getPTOptions("content")),M("aria-live",e.galleria.autoPlay?"polite":"off"),s(),p(e.cx("itemsContainer")),l("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive)("pt",e.pt())("unstyled",e.unstyled()),s(),l("ngIf",e.galleria.showThumbnails),s(),l("ngIf",e.shouldRenderFooter())}}var Kt=["pGalleriaItemSlot",""];function Zt(t,o){t&1&&Ae(0)}function Wt(t,o){if(t&1&&(H(0),h(1,Zt,1,0,"ng-container",1),$()),t&2){let e=r();s(),l("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var Xt=["pGalleriaItem",""],Yt=t=>({index:t});function Jt(t,o){if(t&1&&(_(),f(0,"svg",8)),t&2){let e=r(2);p(e.cx("prevIcon")),l("pBind",e.ptm("prevIcon"))}}function ei(t,o){}function ti(t,o){t&1&&h(0,ei,0,0,"ng-template")}function ii(t,o){if(t&1){let e=S();g(0,"button",5),I("click",function(n){u(e);let a=r();return m(a.navBackward(n))})("focus",function(){u(e);let n=r();return m(n.onButtonFocus("left"))})("blur",function(){u(e);let n=r();return m(n.onButtonBlur("left"))}),h(1,Jt,1,3,"svg",6)(2,ti,1,0,null,7),d()}if(t&2){let e=r();p(e.cx("prevButton")),l("pBind",e.ptm("prevButton")),s(),l("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),s(),l("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function ni(t,o){if(t&1&&(_(),f(0,"svg",10)),t&2){let e=r(2);p(e.cx("nextIcon")),l("pBind",e.ptm("nextIcon"))}}function ai(t,o){}function oi(t,o){t&1&&h(0,ai,0,0,"ng-template")}function li(t,o){if(t&1){let e=S();g(0,"button",5),I("click",function(n){u(e);let a=r();return m(a.navForward(n))})("focus",function(){u(e);let n=r();return m(n.onButtonFocus("right"))})("blur",function(){u(e);let n=r();return m(n.onButtonBlur("right"))}),h(1,ni,1,3,"svg",9)(2,oi,1,0,null,7),d()}if(t&2){let e=r();p(e.cx("nextButton")),l("pBind",e.ptm("nextButton")),s(),l("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),s(),l("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function ri(t,o){if(t&1&&f(0,"div",11),t&2){let e=r();p(e.cx("caption")),l("pBind",e.ptm("caption"))("unstyled",e.unstyled())("item",e.activeItem)("templates",e.templates)}}function si(t,o){if(t&1&&f(0,"button",16),t&2){let e=r().index,i=r(2);p(i.cx("indicatorButton")),l("pBind",i.ptm("indicatorButton",i.getIndicatorPTOptions(e)))}}function ci(t,o){if(t&1&&(H(0),f(1,"div",17),$()),t&2){let e=r().index,i=r(2);s(),l("index",e)("templates",i.templates)("pBind",i.ptm("item"))("unstyled",i.unstyled())}}function di(t,o){if(t&1){let e=S();g(0,"li",13),I("click",function(){let n=u(e).index,a=r(2);return m(a.onIndicatorClick(n))})("mouseenter",function(){let n=u(e).index,a=r(2);return m(a.onIndicatorMouseEnter(n))})("keydown",function(n){let a=u(e).index,c=r(2);return m(c.onIndicatorKeyDown(n,a))}),h(1,si,1,3,"button",14)(2,ci,2,4,"ng-container",15),d()}if(t&2){let e=o.index,i=r(2);p(i.cx("indicator",he(10,Yt,e))),l("pBind",i.getIndicatorPTOptions(e))("pBind",i.ptm("indicator",i.getIndicatorPTOptions(e))),M("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e)("data-p-active",i.isIndicatorItemActive(e)),s(),l("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),s(),l("ngIf",i.indicatorFacet||i.galleria.indicatorTemplate)}}function pi(t,o){if(t&1&&(g(0,"ul",0),h(1,di,3,12,"li",12),d()),t&2){let e=r();p(e.cx("indicatorList")),l("pBind",e.ptm("indicatorList")),s(),l("ngForOf",e.value)}}var ui=["itemsContainer"],mi=["pGalleriaThumbnails",""],hi=t=>({height:t}),gi=(t,o)=>({index:t,activeIndex:o});function vi(t,o){if(t&1&&(_(),f(0,"svg",11)),t&2){let e=r(3);p(e.cx("thumbnailPrevIcon")),l("pBind",e.ptm("thumbnailPrevIcon"))}}function fi(t,o){if(t&1&&(_(),f(0,"svg",12)),t&2){let e=r(3);p(e.cx("thumbnailPrevIcon")),l("pBind",e.ptm("thumbnailPrevIcon"))}}function bi(t,o){if(t&1&&(H(0),h(1,vi,1,3,"svg",9)(2,fi,1,3,"svg",10),$()),t&2){let e=r(2);s(),l("ngIf",!e.isVertical),s(),l("ngIf",e.isVertical)}}function _i(t,o){}function xi(t,o){t&1&&h(0,_i,0,0,"ng-template")}function Ii(t,o){if(t&1){let e=S();g(0,"button",6),I("click",function(n){u(e);let a=r();return m(a.navBackward(n))}),h(1,bi,3,2,"ng-container",7)(2,xi,1,0,null,8),d()}if(t&2){let e=r();p(e.cx("thumbnailPrevButton")),l("pBind",e.ptm("thumbnailPrevButton")),M("aria-label",e.ariaPrevButtonLabel()),s(),l("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),s(),l("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function yi(t,o){if(t&1){let e=S();g(0,"div",13),I("keydown",function(n){let a=u(e).index,c=r();return m(c.onThumbnailKeydown(n,a))}),g(1,"div",14),I("click",function(){let n=u(e).index,a=r();return m(a.onItemClick(n))})("touchend",function(){let n=u(e).index,a=r();return m(a.onItemClick(n))})("keydown.enter",function(){let n=u(e).index,a=r();return m(a.onItemClick(n))}),f(2,"div",15),d()()}if(t&2){let e=o.$implicit,i=o.index,n=r();p(n.cx("thumbnailItem",je(16,gi,i,n.activeIndex))),l("pBind",n.ptm("thumbnailItem")),M("aria-selected",n.activeIndex===i)("aria-controls",n.containerId+"_item_"+i)("data-p-active",n.activeIndex===i),s(),p(n.cx("thumbnail")),l("pBind",n.ptm("thumbnail")),M("tabindex",n.activeIndex===i?0:-1)("aria-current",n.activeIndex===i?"page":void 0)("aria-label",n.ariaPageLabel(i+1)),s(),l("pBind",n.ptm("thumbnailItem"))("item",e)("templates",n.templates)("unstyled",n.unstyled())}}function Ci(t,o){if(t&1&&(_(),f(0,"svg",18)),t&2){let e=r(3);p(e.cx("thumbnailNextIcon")),l("pBind",e.ptm("thumbnailNextIcon"))}}function wi(t,o){if(t&1&&(_(),f(0,"svg",19)),t&2){let e=r(3);p(e.cx("thumbnailNextIcon")),l("pBind",e.ptm("thumbnailNextIcon"))}}function Ti(t,o){if(t&1&&(H(0),h(1,Ci,1,3,"svg",16)(2,wi,1,3,"svg",17),$()),t&2){let e=r(2);s(),l("ngIf",!e.isVertical),s(),l("ngIf",e.isVertical)}}function Si(t,o){}function ki(t,o){t&1&&h(0,Si,0,0,"ng-template")}function Mi(t,o){if(t&1){let e=S();g(0,"button",6),I("click",function(n){u(e);let a=r();return m(a.navForward(n))}),h(1,Ti,3,2,"ng-container",7)(2,ki,1,0,null,8),d()}if(t&2){let e=r();p(e.cx("thumbnailNextButton")),l("pBind",e.ptm("thumbnailNextButton")),M("aria-label",e.ariaNextButtonLabel()),s(),l("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),s(),l("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var Vi={mask:"p-galleria-mask p-overlay-mask",root:({instance:t})=>{let o=t.galleria.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.galleria.thumbnailsPosition),e=t.galleria.showIndicators&&t.getPositionClass("p-galleria-indicators",t.galleria.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.galleria.fullScreen,"p-galleria-inset-indicators":t.galleria.showIndicatorsOnItem,"p-galleria-hover-navigators":t.galleria.showItemNavigatorsOnHover&&!t.galleria.fullScreen},o,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:o})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(o)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:o,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===o,"p-galleria-thumbnail-item-active":t.isItemActive(o),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===o,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===o}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},P=(()=>{class t extends We{name="galleria";style=ut;classes=Vi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275prov=ke({token:t,factory:t.\u0275fac})}return t})();var de=new Ve("GALLERIA_INSTANCE"),X=(()=>{class t extends W{element;componentName="Galleria";bindDirectiveInstance=b(T,{self:!0});$pcGalleria=b(de,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";motionOptions=ge(void 0);computedMotionOptions=O(()=>E(E({},this.ptm("motion")),this.motionOptions()));maskMotionOptions=ge(void 0);computedMaskMotionOptions=O(()=>E(E({},this.ptm("maskMotion")),this.maskMotionOptions()));get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible?(this.maskVisible=!0,this.renderMask.set(!0),this.renderContent.set(!0)):!this._visible&&this.maskVisible&&(this.maskVisible=!1)}renderMask=G(!1);renderContent=G(!1);activeIndexChange=new V;visibleChange=new V;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=b(P);mask;templates;constructor(e){super(),this.element=e}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}onChanges(e){e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(e){(!e||e.target===e.currentTarget)&&(this.visible=!1,this.visibleChange.emit(!1))}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onBeforeEnter(e){this.mask=e.element?.parentElement,this.enableModality(),setTimeout(()=>{let i=re(this.container?.nativeElement,'[data-pc-section="closebutton"]');i&&qe(i)},25)}onBeforeLeave(){this.mask&&(this.maskVisible=!1)}onAfterLeave(){this.disableModality(),this.renderContent.set(!1)}onMaskAfterLeave(){this.renderContent()||this.renderMask.set(!1)}enableModality(){Ye(),this.cd.markForCheck(),this.mask&&ye.set("modal",this.mask,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Je(),this.cd.markForCheck(),this.mask&&ye.clear(this.mask)}onDestroy(){this.fullScreen&&le(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(L(Be))};static \u0275cmp=x({type:t,selectors:[["p-galleria"]],contentQueries:function(i,n,a){if(i&1&&Ne(a,It,4)(a,yt,4)(a,Ct,4)(a,wt,4)(a,Tt,4)(a,St,4)(a,kt,4)(a,Mt,4)(a,Vt,4)(a,Bt,4)(a,Ot,4)(a,Ze,4),i&2){let c;y(c=C())&&(n.headerTemplate=c.first),y(c=C())&&(n.footerTemplate=c.first),y(c=C())&&(n.indicatorTemplate=c.first),y(c=C())&&(n.captionTemplate=c.first),y(c=C())&&(n._closeIconTemplate=c.first),y(c=C())&&(n._previousThumbnailIconTemplate=c.first),y(c=C())&&(n._nextThumbnailIconTemplate=c.first),y(c=C())&&(n._itemPreviousIconTemplate=c.first),y(c=C())&&(n._itemNextIconTemplate=c.first),y(c=C())&&(n._itemTemplate=c.first),y(c=C())&&(n._thumbnailTemplate=c.first),y(c=C())&&(n.templates=c)}},viewQuery:function(i,n){if(i&1&&ae(Dt,5),i&2){let a;y(a=C())&&(n.container=a.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",v],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",U],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",v],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",v],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",v],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",v],circular:[2,"circular","circular",v],autoPlay:[2,"autoPlay","autoPlay",v],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",v],transitionInterval:[2,"transitionInterval","transitionInterval",U],showThumbnails:[2,"showThumbnails","showThumbnails",v],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",v],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",v],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",U],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],maskMotionOptions:[1,"maskMotionOptions"],visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[J([P,{provide:de,useExisting:t},{provide:Xe,useExisting:t}]),Y([T]),w],decls:3,vars:2,consts:[["windowed",""],["container",""],[4,"ngIf","ngIfElse"],[3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","ngClass","class"],[3,"pMotionOnAfterLeave","click","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","ngClass"],["pGalleriaContent","","pFocusTrap","",3,"pMotion","pMotionAppear","pMotionName","pMotionOptions","value","activeIndex","numVisible","ngStyle","fullScreen","pt","pFocusTrapDisabled","unstyled"],["pGalleriaContent","","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnBeforeLeave","pMotionOnAfterLeave","maskHide","activeItemChange","pMotion","pMotionAppear","pMotionName","pMotionOptions","value","activeIndex","numVisible","ngStyle","fullScreen","pt","pFocusTrapDisabled","unstyled"],["pGalleriaContent","",3,"activeItemChange","pt","unstyled","value","activeIndex","numVisible"]],template:function(i,n){if(i&1&&h(0,At,3,1,"div",2)(1,Nt,1,5,"ng-template",null,0,oe),i&2){let a=Ee(2);l("ngIf",n.fullScreen)("ngIfElse",a)}},dependencies:()=>[He,K,fe,st,T,ct,Bi],encapsulation:2,changeDetection:0})}return t})(),Bi=(()=>{class t extends W{galleria;differs;hostName="Galleria";bindDirectiveInstance=b(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.getPTOptions("root"))}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new V;activeItemChange=new V;closeButton;_componentStyle=b(P);$pcGalleria=b(de,{optional:!0,skipSelf:!0})??void 0;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i){super(),this.galleria=e,this.differs=i,this.id=this.galleria.id||Ke("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.el.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}onDoCheck(){if(N(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}startSlideShow(){N(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let a=["top","left","bottom","right"].find(c=>c===i);return a?`${e}-${a}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}getPTOptions(e){return this.ptm(e,{context:{pt:this.pt(),unstyled:this.unstyled()}})}static \u0275fac=function(i){return new(i||t)(L(X),L(Re))};static \u0275cmp=x({type:t,selectors:[["div","pGalleriaContent",""]],viewQuery:function(i,n){if(i&1&&ae(Et,5),i&2){let a;y(a=C())&&(n.closeButton=a.first)}},hostVars:7,hostBindings:function(i,n){i&1&&I("fullscreenchange",function(c){return n.handleFullscreenChange(c)},Oe),i&2&&(M("id",n.id)("role","region"),Le(n.galleria.fullScreen?q(6,Gt):n.galleria.containerStyle),p(n.cn(n.cx("root"))))},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",U],fullScreen:[2,"fullScreen","fullScreen",v]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[J([P]),Y([T]),w],attrs:Lt,decls:1,vars:1,consts:[[4,"ngIf"],["type","button",3,"pBind","class","click",4,"ngIf"],["pGalleriaItemSlot","","type","header",3,"unstyled","templates","pBind","class",4,"ngIf"],[3,"pBind"],["pGalleriaItem","",3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive","pt","unstyled"],["pGalleriaThumbnails","",3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","pt","unstyled","onActiveIndexChange","stopSlideShow",4,"ngIf"],["pGalleriaItemSlot","","type","footer",3,"pBind","class","templates","unstyled",4,"ngIf"],["type","button",3,"click","pBind"],["data-p-icon","times",3,"pBind","class",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","times",3,"pBind"],["pGalleriaItemSlot","","type","header",3,"unstyled","templates","pBind"],["pGalleriaThumbnails","",3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","pt","unstyled"],["pGalleriaItemSlot","","type","footer",3,"pBind","templates","unstyled"]],template:function(i,n){i&1&&h(0,Ut,7,24,"ng-container",0),i&2&&l("ngIf",n.value&&n.value.length>0)},dependencies:()=>[K,ee,Ie,T,Te,Oi,Di],encapsulation:2,changeDetection:0})}return t})(),Te=(()=>{class t extends W{hostName="Galleria";templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=b(X);$pcGalleria=b(de,{optional:!0,skipSelf:!0})??void 0;set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getTemplateFromQueryList(e){return this.galleria.templates?.find(i=>i.getType()===e)?.template}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.getTemplateFromQueryList("item");break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.getTemplateFromQueryList("caption");break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria._thumbnailTemplate||this.getTemplateFromQueryList("thumbnail");break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.getTemplateFromQueryList("indicator");break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.getTemplateFromQueryList("footer");break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.getTemplateFromQueryList("item")}}type;contentTemplate;context;_item;onAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["div","pGalleriaItemSlot",""]],inputs:{templates:"templates",index:[2,"index","index",U],item:"item",type:"type"},standalone:!1,features:[w],attrs:Kt,decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&h(0,Wt,2,2,"ng-container",0),i&2&&l("ngIf",n.shouldRender())},dependencies:[K,ee],encapsulation:2,changeDetection:0})}return t})(),Oi=(()=>{class t extends W{galleria;hostName="Galleria";bindDirectiveInstance=b(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("itemsContainer"))}id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new V;stopSlideShow=new V;onActiveIndexChange=new V;_componentStyle=b(P);get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){super(),this.galleria=e}getIndicatorPTOptions(e){return this.ptm("indicator",{context:{highlighted:this.activeIndex===e}})}onChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber?.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(L(X))};static \u0275cmp=x({type:t,selectors:[["div","pGalleriaItem",""]],inputs:{id:"id",circular:[2,"circular","circular",v],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",v],showIndicators:[2,"showIndicators","showIndicators",v],slideShowActive:[2,"slideShowActive","slideShowActive",v],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",v],autoPlay:[2,"autoPlay","autoPlay",v],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[J([P]),Y([T]),w],attrs:Xt,decls:6,vars:16,consts:[[3,"pBind"],["type","button","role","navigation","data-pc-group-section","itemnavigator",3,"pBind","class","click","focus","blur",4,"ngIf"],["pGalleriaItemSlot","","role","group",3,"pBind","unstyled","item","templates","id"],["pGalleriaItemSlot","","type","caption",3,"pBind","unstyled","class","item","templates",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","role","navigation","data-pc-group-section","itemnavigator",3,"click","focus","blur","pBind"],["data-p-icon","chevron-left",3,"pBind","class",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-left",3,"pBind"],["data-p-icon","chevron-right",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["pGalleriaItemSlot","","type","caption",3,"pBind","unstyled","item","templates"],["tabindex","0",3,"pBind","class","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","pBind"],["type","button","tabIndex","-1",3,"pBind","class",4,"ngIf"],[4,"ngIf"],["type","button","tabIndex","-1",3,"pBind"],["pGalleriaItemSlot","","type","indicator",3,"index","templates","pBind","unstyled"]],template:function(i,n){i&1&&(g(0,"div",0),h(1,ii,3,5,"button",1),f(2,"div",2),h(3,li,3,5,"button",1)(4,ri,1,6,"div",3),d(),h(5,pi,2,4,"ul",4)),i&2&&(p(n.cx("items")),l("pBind",n.ptm("items")),s(),l("ngIf",n.showItemNavigators),s(),p(n.cx("item")),l("pBind",n.ptm("item"))("unstyled",n.unstyled())("item",n.activeItem)("templates",n.templates)("id",n.id+"_item_"+n.activeIndex),M("aria-label",n.ariaSlideNumber(n.activeIndex+1))("aria-roledescription",n.ariaSlideLabel()),s(),l("ngIf",n.showItemNavigators),s(),l("ngIf",n.captionFacet||n.galleria.captionTemplate),s(),l("ngIf",n.showIndicators))},dependencies:()=>[ve,K,ee,ce,se,T,Te],encapsulation:2,changeDetection:0})}return t})(),Di=(()=>{class t extends W{galleria;hostName="Galleria";bindDirectiveInstance=b(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("thumbnails"))}containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new V;stopSlideShow=new V;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;_componentStyle=b(P);constructor(e){super(),this.galleria=e}onInit(){N(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}onAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(this.document.body.setAttribute("data-p-items-hidden","false"),!this.$unstyled()&&le(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}onAfterViewInit(){N(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),_e(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions&&!this.$unstyled()){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,n)=>{let a=i.breakpoint,c=n.breakpoint,B;return a==null&&c!=null?B=-1:a!=null&&c==null?B=1:a==null&&c==null?B=0:typeof a=="string"&&typeof c=="string"?B=a.localeCompare(c,void 0,{numeric:!0}):B=a<c?-1:a>c?1:0,-1*B});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let n=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,_e(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(N(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let n=0;n<this.sortedResponsiveOptions.length;n++){let a=this.sortedResponsiveOptions[n];parseInt(a.breakpoint,10)>=e&&(i=a)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let n=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,n=i+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let a=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let n=i+this.totalShiftedItems,a=0;i<this._activeIndex?(a=this.d_numVisible-n-1-this.getMedianItemIndex(),a>0&&-1*this.totalShiftedItems!==0&&this.step(a)):(a=this.getMedianItemIndex()-n,a<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(a)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=Z(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=Z(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...Z(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(c=>Ue(c,"data-p-active")===!0),n=re(this.itemsContainer?.nativeElement,'[tabindex="0"]'),a=e.findIndex(c=>c===n?.parentElement);e[a].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...Z(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]')],i=re(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(n=>n===i?.parentElement)}changedFocusedIndicator(e,i){let n=Z(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]');n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(this.document.body.setAttribute("data-p-items-hidden","false"),!this.$unstyled()&&le(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(this.document.body.setAttribute("data-p-items-hidden","true"),!this.$unstyled()&&Qe(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(N(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(L(X))};static \u0275cmp=x({type:t,selectors:[["div","pGalleriaThumbnails",""]],viewQuery:function(i,n){if(i&1&&ae(ui,5),i&2){let a;y(a=C())&&(n.itemsContainer=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&p(n.cx("thumbnails"))},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",v],slideShowActive:[2,"slideShowActive","slideShowActive",v],circular:[2,"circular","circular",v],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,features:[J([P]),Y([T]),w],attrs:mi,decls:7,vars:15,consts:[["itemsContainer",""],[3,"pBind"],["type","button","pRipple","","data-pc-group-section","thumbnailnavigator",3,"pBind","class","click",4,"ngIf"],[3,"pBind","ngStyle"],["role","tablist",3,"transitionend","touchstart","touchmove","pBind"],[3,"pBind","class","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","","data-pc-group-section","thumbnailnavigator",3,"click","pBind"],[4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-left",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-up",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-left",3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],[3,"keydown","pBind"],[3,"click","touchend","keydown.enter","pBind"],["pGalleriaItemSlot","","type","thumbnail",3,"pBind","item","templates","unstyled"],["data-p-icon","chevron-right",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["data-p-icon","chevron-down",3,"pBind"]],template:function(i,n){i&1&&(g(0,"div",1),h(1,Ii,3,6,"button",2),g(2,"div",3)(3,"div",4,0),I("transitionend",function(){return n.onTransitionEnd()})("touchstart",function(c){return n.onTouchStart(c)})("touchmove",function(c){return n.onTouchMove(c)}),h(5,yi,3,19,"div",5),d()(),h(6,Mi,3,6,"button",2),d()),i&2&&(p(n.cx("thumbnailContent")),l("pBind",n.ptm("thumbnailContent")),s(),l("ngIf",n.showThumbnailNavigators),s(),p(n.cx("thumbnailsViewport")),l("pBind",n.ptm("thumbnailsViewport"))("ngStyle",he(13,hi,n.isVertical?n.contentHeight:"")),s(),p(n.cx("thumbnailItems")),l("pBind",n.ptm("thumbnailItems")),s(2),l("ngForOf",n.value),s(),l("ngIf",n.showThumbnailNavigators))},dependencies:()=>[ve,K,ee,fe,tt,ce,we,Ce,se,T,Te],encapsulation:2,changeDetection:0})}return t})(),mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=De({type:t});static \u0275inj=Me({imports:[be,xe,Ie,ce,we,Ce,se,et,dt,be,xe]})}return t})();var gt=()=>["/portfolio"],Pi=()=>({width:"100%"}),Ai=(t,o)=>o.url;function Ni(t,o){if(t&1&&(g(0,"span",8),z(1),d()),t&2){let e=o.$implicit;s(),Q(e)}}function Ei(t,o){if(t&1&&f(0,"a",13),t&2){let e=o.$implicit;l("label",e.label)("icon",e.icon)("outlined",!0)("href",e.url,me)}}function Gi(t,o){if(t&1&&(g(0,"div",9),ie(1,Ei,1,4,"a",13,Ai),d()),t&2){let e=r();s(),ne(e.links)}}function Li(t,o){if(t&1&&f(0,"img",14),t&2){let e=o.$implicit,i=r(),n=r();l("src",e,me)("alt",i.title[n.lang()])}}function ji(t,o){if(t&1&&(g(0,"p"),z(1),d()),t&2){let e=o.$implicit;s(),Q(e)}}function Ri(t,o){if(t&1&&(f(0,"a",3),g(1,"header",4)(2,"span",5),z(3),d(),g(4,"h1"),z(5),d(),g(6,"div",6)(7,"div",7),ie(8,Ni,2,1,"span",8,Pe),d(),j(10,Gi,3,0,"div",9),d()(),g(11,"div",10)(12,"p-galleria",11),h(13,Li,1,2,"ng-template",null,0,oe),d()(),g(15,"div",12),ie(16,ji,2,1,"p",null,Fe),d()),t&2){let e=o,i=r();l("label",i.t.portfolio.back[i.lang()])("text",!0)("routerLink",q(15,gt)),s(3),Q(e.year),s(2),Q(e.title[i.lang()]),s(3),ne(e.tags),s(2),R(e.links!=null&&e.links.length?10:-1),s(),Ge("single",i.images().length<2),s(),l("value",i.images())("showThumbnails",!1)("showIndicators",i.images().length>1)("showIndicatorsOnItem",!0)("showItemNavigators",i.images().length>1)("circular",i.images().length>1)("containerStyle",q(16,Pi)),s(4),ne(i.paragraphs())}}function Hi(t,o){if(t&1&&(g(0,"div",2)(1,"p"),z(2),d(),f(3,"p-button",15),d()),t&2){let e=r();s(2),Q(e.t.portfolio.notFound[e.lang()]),s(),l("label",e.t.portfolio.back[e.lang()])("routerLink",q(3,gt))}}var ht=class t{route=b($e);t=lt;lang=ot();id=pt(this.route.paramMap.pipe(Se(o=>o.get("id"))),{initialValue:this.route.snapshot.paramMap.get("id")});project=O(()=>rt.find(o=>o.id===this.id()));images=O(()=>{let o=this.project();return o?[o.image,...o.gallery??[]]:[]});paragraphs=O(()=>{let o=this.project();return o?(o.content?.[this.lang()]??o.description[this.lang()]).split(`

`):[]});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-project-detail-page"]],decls:3,vars:1,consts:[["item",""],[1,"project-detail"],[1,"detail-not-found"],["pButton","","icon","pi pi-arrow-left",1,"back-button",3,"label","text","routerLink"],[1,"detail-header"],[1,"detail-year"],[1,"detail-meta"],[1,"detail-tags"],[1,"tag"],[1,"detail-links"],[1,"detail-carousel"],[3,"value","showThumbnails","showIndicators","showIndicatorsOnItem","showItemNavigators","circular","containerStyle"],[1,"detail-content","content-card"],["pButton","","size","small","target","_blank","rel","noopener",3,"label","icon","outlined","href"],["loading","lazy",1,"carousel-image",3,"src","alt"],["icon","pi pi-arrow-left",3,"label","routerLink"]],template:function(e,i){if(e&1&&(g(0,"section",1),j(1,Ri,18,17)(2,Hi,4,4,"div",2),d()),e&2){let n;s(),R((n=i.project())?1:2,n)}},dependencies:[ze,at,it,nt,mt,X],styles:[".project-detail[_ngcontent-%COMP%]{min-height:calc(100vh - var(--navbar-height));max-width:900px;margin:0 auto;padding:var(--spacing-lg) var(--spacing-lg) var(--spacing-2xl);display:flex;flex-direction:column;gap:var(--spacing-lg)}.back-button[_ngcontent-%COMP%]{align-self:flex-start}.detail-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.25rem 0 1rem}.detail-header[_ngcontent-%COMP%]   .detail-year[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--p-primary-color)}.detail-meta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--spacing-sm)}.detail-tags[_ngcontent-%COMP%], .detail-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.detail-carousel[_ngcontent-%COMP%]{border-radius:.5rem;overflow:hidden}.detail-carousel[_ngcontent-%COMP%]   .carousel-image[_ngcontent-%COMP%]{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}.detail-carousel[_ngcontent-%COMP%]     .p-galleria{border:none;background:transparent}.detail-carousel[_ngcontent-%COMP%]     .p-galleria-prev-button, .detail-carousel[_ngcontent-%COMP%]     .p-galleria-next-button{background:color-mix(in srgb,var(--p-surface-900) 55%,transparent);color:var(--p-surface-0)}.detail-carousel[_ngcontent-%COMP%]     .p-galleria-prev-button:hover, .detail-carousel[_ngcontent-%COMP%]     .p-galleria-next-button:hover{background:color-mix(in srgb,var(--p-surface-900) 75%,transparent);color:var(--p-surface-0)}.detail-content[_ngcontent-%COMP%]{padding:var(--spacing-lg)}.detail-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.05rem;line-height:1.8;margin:0 0 1rem;color:var(--p-surface-900)}.detail-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.detail-not-found[_ngcontent-%COMP%]{min-height:50vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-sm)}.detail-not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.125rem;opacity:.8}@media(max-width:768px){.project-detail[_ngcontent-%COMP%]{padding:var(--spacing-md) var(--spacing-sm) var(--spacing-xl)}}"],changeDetection:0})};export{ht as ProjectDetailPage};
