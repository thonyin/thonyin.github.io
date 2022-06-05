import{R as nn}from"./chunks/chunk.76b32911.js";import{j as v,F as an,a as O}from"./chunks/chunk.29965e17.js";/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qe(Object(n),!0).forEach(function(a){sn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function se(e){return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function rn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ke(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function on(e,t,n){return t&&Ke(e.prototype,t),n&&Ke(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ze(e,t){return fn(e)||un(e,t)||wt(e,t)||dn()}function me(e){return ln(e)||cn(e)||wt(e)||mn()}function ln(e){if(Array.isArray(e))return ke(e)}function fn(e){if(Array.isArray(e))return e}function cn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function un(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function wt(e,t){if(!!e){if(typeof e=="string")return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(e,t)}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qe=function(){},je={},kt={},Ct=null,At={mark:Qe,measure:Qe};try{typeof window<"u"&&(je=window),typeof document<"u"&&(kt=document),typeof MutationObserver<"u"&&(Ct=MutationObserver),typeof performance<"u"&&(At=performance)}catch{}var vn=je.navigator||{},Je=vn.userAgent,Ze=Je===void 0?"":Je,D=je,h=kt,et=Ct,ae=At;D.document;var M=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ot=~Ze.indexOf("MSIE")||~Ze.indexOf("Trident/"),T="___FONT_AWESOME___",Ce=16,Nt="fa",St="svg-inline--fa",H="data-fa-i2svg",Ae="data-fa-pseudo-element",pn="data-fa-pseudo-element-pending",De="data-prefix",Fe="data-icon",tt="fontawesome-i2svg",bn="async",gn=["HTML","HEAD","STYLE","SCRIPT"],Pt=function(){try{return!0}catch{return!1}}(),$e={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},le={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Et={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},hn={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},yn=/fa[srltdbk\-\ ]/,It="fa-layers-text",xn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,wn={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Tt=[1,2,3,4,5,6,7,8,9,10],kn=Tt.concat([11,12,13,14,15,16,17,18,19,20]),Cn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=[].concat(me(Object.keys(le)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY]).concat(Tt.map(function(e){return"".concat(e,"x")})).concat(kn.map(function(e){return"w-".concat(e)})),_t=D.FontAwesomeConfig||{};function On(e){var t=h.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Nn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(h&&typeof h.querySelector=="function"){var Sn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sn.forEach(function(e){var t=ze(e,2),n=t[0],a=t[1],r=Nn(On(n));r!=null&&(_t[a]=r)})}var Pn={familyPrefix:Nt,styleDefault:"solid",replacementClass:St,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Z=f(f({},Pn),_t);Z.autoReplaceSvg||(Z.observeMutations=!1);var d={};Object.keys(Z).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(n){Z[e]=n,re.forEach(function(a){return a(d)})},get:function(){return Z[e]}})});D.FontAwesomeConfig=d;var re=[];function En(e){return re.push(e),function(){re.splice(re.indexOf(e),1)}}var z=Ce,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function In(e){if(!(!e||!M)){var t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=h.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return h.head.insertBefore(t,a),e}}var Tn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function te(){for(var e=12,t="";e-- >0;)t+=Tn[Math.random()*62|0];return t}function q(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ye(e){return e.classList?q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Lt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _n(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Lt(e[n]),'" ')},"").trim()}function de(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function He(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function Ln(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Mn(e){var t=e.transform,n=e.width,a=n===void 0?Ce:n,r=e.height,o=r===void 0?Ce:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&Ot?l+="translate(".concat(t.x/z-a/2,"em, ").concat(t.y/z-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/z,"em), calc(-50% + ").concat(t.y/z,"em)) "):l+="translate(".concat(t.x/z,"em, ").concat(t.y/z,"em) "),l+="scale(".concat(t.size/z*(t.flipX?-1:1),", ").concat(t.size/z*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Rn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mt(){var e=Nt,t=St,n=d.familyPrefix,a=d.replacementClass,r=Rn;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var nt=!1;function ge(){d.autoAddCss&&!nt&&(In(Mt()),nt=!0)}var zn={mixout:function(){return{dom:{css:Mt,insertCss:ge}}},hooks:function(){return{beforeDOMElementCreation:function(){ge()},beforeI2svg:function(){ge()}}}},_=D||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var E=_[T],Rt=[],jn=function e(){h.removeEventListener("DOMContentLoaded",e),fe=1,Rt.map(function(t){return t()})},fe=!1;M&&(fe=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),fe||h.addEventListener("DOMContentLoaded",jn));function Dn(e){!M||(fe?setTimeout(e,0):Rt.push(e))}function ne(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Lt(e):"<".concat(t," ").concat(_n(a),">").concat(o.map(ne).join(""),"</").concat(t,">")}function at(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fn=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},he=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Fn(n,r):n,l,u,c;for(a===void 0?(l=1,c=t[o[0]]):(l=0,c=a);l<i;l++)u=o[l],c=s(c,t[u],u,t);return c};function $n(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Oe(e){var t=$n(e);return t.length===1?t[0].toString(16):null}function Yn(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function rt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ne(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=rt(t);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(e,rt(t)):E.styles[e]=f(f({},E.styles[e]||{}),o),e==="fas"&&Ne("fa",t)}var ee=E.styles,Hn=E.shims,Wn=Object.values(Et),We=null,zt={},jt={},Dt={},Ft={},$t={},Un=Object.keys($e);function Vn(e){return~An.indexOf(e)}function Bn(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Vn(r)?r:null}var Yt=function(){var t=function(o){return he(ee,function(i,s,l){return i[l]=he(s,o,{}),i},{})};zt=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),jt=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),$t=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in ee||d.autoFetchSvg,a=he(Hn,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Dt=a.names,Ft=a.unicodes,We=ve(d.styleDefault)};En(function(e){We=ve(e.styleDefault)});Yt();function Ue(e,t){return(zt[e]||{})[t]}function Gn(e,t){return(jt[e]||{})[t]}function V(e,t){return($t[e]||{})[t]}function Ht(e){return Dt[e]||{prefix:null,iconName:null}}function Xn(e){var t=Ft[e],n=Ue("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function F(){return We}var Ve=function(){return{prefix:null,iconName:null,rest:[]}};function ve(e){var t=$e[e],n=le[e]||le[t],a=e in E.styles?e:null;return n||a||null}function pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,a=n===void 0?!1:n,r=null,o=e.reduce(function(i,s){var l=Bn(d.familyPrefix,s);if(ee[s]?(s=Wn.includes(s)?hn[s]:s,r=s,i.prefix=s):Un.indexOf(s)>-1?(r=s,i.prefix=ve(s)):l?i.iconName=l:s!==d.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var u=r==="fa"?Ht(i.iconName):{},c=V(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||c||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!ee.far&&ee.fas&&!d.autoFetchSvg&&(i.prefix="fas")}return i},Ve());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var qn=function(){function e(){rn(this,e),this.definitions={}}return on(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=f(f({},n.definitions[s]||{}),i[s]),Ne(s,i[s]);var l=Et[s];l&&Ne(l,i[s]),Yt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),it=[],B={},X={},Kn=Object.keys(X);function Qn(e,t){var n=t.mixoutsTo;return it=e,B={},Object.keys(X).forEach(function(a){Kn.indexOf(a)===-1&&delete X[a]}),it.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),se(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){B[i]||(B[i]=[]),B[i].push(o[i])})}a.provides&&a.provides(X)}),n}function Se(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=B[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=B[e]||[];r.forEach(function(o){o.apply(null,n)})}function L(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function Pe(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||F();if(!!t)return t=V(n,t)||t,at(Wt.definitions,n,t)||at(E.styles,n,t)}var Wt=new qn,Jn=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,W("noAuto")},Zn={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(W("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Dn(function(){ta({autoReplaceSvgRoot:n}),W("watch",t)})}},ea={icon:function(t){if(t===null)return null;if(se(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ve(t[0]);return{prefix:a,iconName:V(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(d.familyPrefix,"-"))>-1||t.match(yn))){var r=pe(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=F();return{prefix:o,iconName:V(o,t)||t}}}},S={noAuto:Jn,config:d,dom:Zn,parse:ea,library:Wt,findIconDefinition:Pe,toHtml:ne},ta=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?h:n;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&S.dom.i2svg({node:a})};function be(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ne(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!M){var a=h.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function na(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(He(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=de(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function aa(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(d.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function Be(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,m=e.extra,p=e.watchable,g=p===void 0?!1:p,x=a.found?a:n,N=x.width,C=x.height,y=r==="fak",w=[d.replacementClass,o?"".concat(d.familyPrefix,"-").concat(o):""].filter(function(U){return m.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(m.classes).join(" "),k={children:[],attributes:f(f({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(C)})},P=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/C*16*.0625,"em")}:{};g&&(k.attributes[H]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||te())},children:[l]}),delete k.attributes.title);var A=f(f({},k),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:s,styles:f(f({},P),m.styles)}),R=a.found&&n.found?L("generateAbstractMask",A)||{children:[],attributes:{}}:L("generateAbstractIcon",A)||{children:[],attributes:{}},K=R.children,Q=R.attributes;return A.children=K,A.attributes=Q,s?aa(A):na(A)}function ot(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,u=f(f(f({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[H]="");var c=f({},i.styles);He(r)&&(c.transform=Mn({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=de(c);m.length>0&&(u.style=m);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function ra(e){var t=e.content,n=e.title,a=e.extra,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=de(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var ye=E.styles;function Ee(e){var t=e[0],n=e[1],a=e.slice(4),r=ze(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat($.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat($.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat($.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var ia={found:!1,width:512,height:512};function oa(e,t){!Pt&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ie(e,t){var n=t;return t==="fa"&&d.styleDefault!==null&&(t=F()),new Promise(function(a,r){if(L("missingIconAbstract"),n==="fa"){var o=Ht(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ye[t]&&ye[t][e]){var i=ye[t][e];return a(Ee(i))}oa(e,t),a(f(f({},ia),{},{icon:d.showMissingIcons&&e?L("missingIconAbstract")||{}:{}}))})}var st=function(){},Te=d.measurePerformance&&ae&&ae.mark&&ae.measure?ae:{mark:st,measure:st},J='FA "6.1.1"',sa=function(t){return Te.mark("".concat(J," ").concat(t," begins")),function(){return Ut(t)}},Ut=function(t){Te.mark("".concat(J," ").concat(t," ends")),Te.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))},Ge={begin:sa,end:Ut},ie=function(){};function lt(e){var t=e.getAttribute?e.getAttribute(H):null;return typeof t=="string"}function la(e){var t=e.getAttribute?e.getAttribute(De):null,n=e.getAttribute?e.getAttribute(Fe):null;return t&&n}function fa(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function ca(){if(d.autoReplaceSvg===!0)return oe.replace;var e=oe[d.autoReplaceSvg];return e||oe.replace}function ua(e){return h.createElementNS("http://www.w3.org/2000/svg",e)}function ma(e){return h.createElement(e)}function Vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?ua:ma:n;if(typeof e=="string")return h.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(Vt(i,{ceFn:a}))}),r}function da(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Vt(r),n)}),n.getAttribute(H)===null&&d.keepOriginalSource){var a=h.createComment(da(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Ye(n).indexOf(d.replacementClass))return oe.replace(t);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return ne(s)}).join(`
`);n.setAttribute(H,""),n.innerHTML=i}};function ft(e){e()}function Bt(e,t){var n=typeof t=="function"?t:ie;if(e.length===0)n();else{var a=ft;d.mutateApproach===bn&&(a=D.requestAnimationFrame||ft),a(function(){var r=ca(),o=Ge.begin("mutate");e.map(r),o(),n()})}}var Xe=!1;function Gt(){Xe=!0}function _e(){Xe=!1}var ce=null;function ct(e){if(!!et&&!!d.observeMutations){var t=e.treeCallback,n=t===void 0?ie:t,a=e.nodeCallback,r=a===void 0?ie:a,o=e.pseudoElementsCallback,i=o===void 0?ie:o,s=e.observeMutationsRoot,l=s===void 0?h:s;ce=new et(function(u){if(!Xe){var c=F();q(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!lt(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&lt(m.target)&&~Cn.indexOf(m.attributeName))if(m.attributeName==="class"&&la(m.target)){var p=pe(Ye(m.target)),g=p.prefix,x=p.iconName;m.target.setAttribute(De,g||c),x&&m.target.setAttribute(Fe,x)}else fa(m.target)&&r(m.target)})}}),M&&ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function va(){!ce||ce.disconnect()}function pa(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function ba(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=pe(Ye(e));return r.prefix||(r.prefix=F()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Gn(r.prefix,e.innerText)||Ue(r.prefix,Oe(e.innerText))),r}function ga(e){var t=q(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||te()):(t["aria-hidden"]="true",t.focusable="false")),t}function ha(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ut(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ba(e),a=n.iconName,r=n.prefix,o=n.rest,i=ga(e),s=Se("parseNodeAttributes",{},e),l=t.styleParser?pa(e):[];return f({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var ya=E.styles;function Xt(e){var t=d.autoReplaceSvg==="nest"?ut(e,{styleParser:!1}):ut(e);return~t.extra.classes.indexOf(It)?L("generateLayersText",e,t):L("generateSvgReplacementMutation",e,t)}function mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var n=h.documentElement.classList,a=function(m){return n.add("".concat(tt,"-").concat(m))},r=function(m){return n.remove("".concat(tt,"-").concat(m))},o=d.autoFetchSvg?Object.keys($e):Object.keys(ya),i=[".".concat(It,":not([").concat(H,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(H,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=q(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Ge.begin("onTree"),u=s.reduce(function(c,m){try{var p=Xt(m);p&&c.push(p)}catch(g){Pt||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(p){Bt(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),m(p)})})}function xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xt(e).then(function(n){n&&Bt([n],t)})}function wa(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Pe(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Pe(r||{})),e(a,f(f({},n),{},{mask:r}))}}var ka=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?I:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,m=n.title,p=m===void 0?null:m,g=n.titleId,x=g===void 0?null:g,N=n.classes,C=N===void 0?[]:N,y=n.attributes,w=y===void 0?{}:y,k=n.styles,P=k===void 0?{}:k;if(!!t){var A=t.prefix,R=t.iconName,K=t.icon;return be(f({type:"icon"},t),function(){return W("beforeDOMElementCreation",{iconDefinition:t,params:n}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||te()):(w["aria-hidden"]="true",w.focusable="false")),Be({icons:{main:Ee(K),mask:l?Ee(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:R,transform:f(f({},I),r),symbol:i,title:p,maskId:c,titleId:x,extra:{attributes:w,styles:P,classes:C}})})}},Ca={mixout:function(){return{icon:wa(ka)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mt,n.nodeCallback=xa,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?h:a,o=n.callback,i=o===void 0?function(){}:o;return mt(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,c=a.mask,m=a.maskId,p=a.extra;return new Promise(function(g,x){Promise.all([Ie(r,s),c.iconName?Ie(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var C=ze(N,2),y=C[0],w=C[1];g([n,Be({icons:{main:y,mask:w},prefix:s,iconName:r,transform:l,symbol:u,maskId:m,title:o,titleId:i,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=de(s);l.length>0&&(r.style=l);var u;return He(i)&&(u=L("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Aa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return be({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(me(o)).join(" ")},children:i}]})}}}},Oa={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,c=a.styles,m=c===void 0?{}:c;return be({type:"counter",content:n},function(){return W("beforeDOMElementCreation",{content:n,params:a}),ra({content:n.toString(),title:o,extra:{attributes:u,styles:m,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(me(s))}})})}}}},Na={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?I:r,i=a.title,s=i===void 0?null:i,l=a.classes,u=l===void 0?[]:l,c=a.attributes,m=c===void 0?{}:c,p=a.styles,g=p===void 0?{}:p;return be({type:"text",content:n},function(){return W("beforeDOMElementCreation",{content:n,params:a}),ot({content:n,transform:f(f({},I),o),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.familyPrefix,"-layers-text")].concat(me(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(Ot){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,ot({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},Sa=new RegExp('"',"ug"),dt=[1105920,1112319];function Pa(e){var t=e.replace(Sa,""),n=Yn(t,0),a=n>=dt[0]&&n<=dt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Oe(r?t[0]:t),isSecondary:a||r}}function vt(e,t){var n="".concat(pn).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=q(e.children),i=o.filter(function(R){return R.getAttribute(Ae)===t})[0],s=D.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xn),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?le[l[2].toLowerCase()]:wn[u],g=Pa(m),x=g.value,N=g.isSecondary,C=l[0].startsWith("FontAwesome"),y=Ue(p,x),w=y;if(C){var k=Xn(x);k.iconName&&k.prefix&&(y=k.iconName,p=k.prefix)}if(y&&!N&&(!i||i.getAttribute(De)!==p||i.getAttribute(Fe)!==w)){e.setAttribute(n,w),i&&e.removeChild(i);var P=ha(),A=P.extra;A.attributes[Ae]=t,Ie(y,p).then(function(R){var K=Be(f(f({},P),{},{icons:{main:R,mask:Ve()},prefix:p,iconName:w,extra:A,watchable:!0})),Q=h.createElement("svg");t==="::before"?e.insertBefore(Q,e.firstChild):e.appendChild(Q),Q.outerHTML=K.map(function(U){return ne(U)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ea(e){return Promise.all([vt(e,"::before"),vt(e,"::after")])}function Ia(e){return e.parentNode!==document.head&&!~gn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ae)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pt(e){if(!!M)return new Promise(function(t,n){var a=q(e.querySelectorAll("*")).filter(Ia).map(Ea),r=Ge.begin("searchPseudoElements");Gt(),Promise.all(a).then(function(){r(),_e(),t()}).catch(function(){r(),_e(),n()})})}var Ta={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?h:a;d.searchPseudoElements&&pt(r)}}},bt=!1,_a={mixout:function(){return{dom:{unwatch:function(){Gt(),bt=!0}}}},hooks:function(){return{bootstrap:function(){ct(Se("mutationObserverCallbacks",{}))},noAuto:function(){va()},watch:function(n){var a=n.observeMutationsRoot;bt?_e():ct(Se("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},gt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},La={mixout:function(){return{parse:{transform:function(n){return gt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=gt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:f({},g.outer),children:[{tag:"g",attributes:f({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),g.path)}]}]}}}},xe={x:0,y:0,width:"100%",height:"100%"};function ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ma(e){return e.tag==="g"?e.children:[e]}var Ra={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?pe(r.split(" ").map(function(i){return i.trim()})):Ve();return o.prefix||(o.prefix=F()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,m=i.width,p=i.icon,g=Ln({transform:l,containerWidth:m,iconWidth:u}),x={tag:"rect",attributes:f(f({},xe),{},{fill:"white"})},N=c.children?{children:c.children.map(ht)}:{},C={tag:"g",attributes:f({},g.inner),children:[ht(f({tag:c.tag,attributes:f(f({},c.attributes),g.path)},N))]},y={tag:"g",attributes:f({},g.outer),children:[C]},w="mask-".concat(s||te()),k="clip-".concat(s||te()),P={tag:"mask",attributes:f(f({},xe),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ma(p)},P]};return a.push(A,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(w,")")},xe)}),{children:a,attributes:r}}}},za={provides:function(t){var n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ja={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Da=[zn,Ca,Aa,Oa,Na,Ta,_a,La,Ra,za,ja];Qn(Da,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;var Le=S.parse;S.findIconDefinition;S.toHtml;var Fa=S.icon;S.layer;S.text;S.counter;var qt={exports:{}},$a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ya=$a,Ha=Ya;function Kt(){}function Qt(){}Qt.resetWarningCache=Kt;var Wa=function(){function e(a,r,o,i,s,l){if(l!==Ha){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Qt,resetWarningCache:Kt};return n.PropTypes=n,n};qt.exports=Wa();var b=qt.exports;function yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yt(Object(n),!0).forEach(function(a){G(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ue(e){return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ue(e)}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ua(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Jt(e,t){if(e==null)return{};var n=Ua(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(n[a]=e[a]))}return n}function Me(e){return Va(e)||Ba(e)||Ga(e)||Xa()}function Va(e){if(Array.isArray(e))return Re(e)}function Ba(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ga(e,t){if(!!e){if(typeof e=="string")return Re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Re(e,t)}}function Re(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Xa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qa(e){var t,n=e.beat,a=e.fade,r=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,m=e.pulse,p=e.fixedWidth,g=e.inverse,x=e.border,N=e.listItem,C=e.flip,y=e.size,w=e.rotation,k=e.pull,P=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":p,"fa-inverse":g,"fa-border":x,"fa-li":N,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},G(t,"fa-".concat(y),typeof y<"u"&&y!==null),G(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),G(t,"fa-pull-".concat(k),typeof k<"u"&&k!==null),G(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(A){return P[A]?A:null}).filter(function(A){return A})}function Ka(e){return e=e-0,e===e}function Zt(e){return Ka(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Qa=["style"];function Ja(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Za(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Zt(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?t[Ja(r)]=o:t[r]=o,t},{})}function en(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return en(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Za(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Zt(u)]=c}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=Jt(n,Qa);return r.attrs.style=j(j({},r.attrs.style),i),e.apply(void 0,[t.tag,j(j({},r.attrs),s)].concat(Me(a)))}var tn=!1;try{tn=!0}catch{}function er(){if(!tn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xt(e){if(e&&ue(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Le.icon)return Le.icon(e);if(e===null)return null;if(e&&ue(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function we(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?G({},e,t):{}}var tr=["forwardedRef"];function Y(e){var t=e.forwardedRef,n=Jt(e,tr),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,l=n.titleId,u=n.maskId,c=xt(a),m=we("classes",[].concat(Me(qa(n)),Me(i.split(" ")))),p=we("transform",typeof n.transform=="string"?Le.transform(n.transform):n.transform),g=we("mask",xt(r)),x=Fa(c,j(j(j(j({},m),p),g),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!x)return er("Could not find icon",c),null;var N=x.abstract,C={ref:t};return Object.keys(n).forEach(function(y){Y.defaultProps.hasOwnProperty(y)||(C[y]=n[y])}),nr(N[0],C)}Y.displayName="FontAwesomeIcon";Y.propTypes={beat:b.bool,border:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf(["horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};Y.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var nr=en.bind(null,nn.createElement);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ar={prefix:"fas",iconName:"people-line",icon:[640,512,[],"e534","M360 72C360 94.09 342.1 112 320 112C297.9 112 280 94.09 280 72C280 49.91 297.9 32 320 32C342.1 32 360 49.91 360 72zM104 168C104 145.9 121.9 128 144 128C166.1 128 184 145.9 184 168C184 190.1 166.1 208 144 208C121.9 208 104 190.1 104 168zM608 416C625.7 416 640 430.3 640 448C640 465.7 625.7 480 608 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H608zM456 168C456 145.9 473.9 128 496 128C518.1 128 536 145.9 536 168C536 190.1 518.1 208 496 208C473.9 208 456 190.1 456 168zM200 352C200 369.7 185.7 384 168 384H120C102.3 384 88 369.7 88 352V313.5L61.13 363.4C54.85 375 40.29 379.4 28.62 373.1C16.95 366.8 12.58 352.3 18.87 340.6L56.75 270.3C72.09 241.8 101.9 224 134.2 224H153.8C170.1 224 185.7 228.5 199.2 236.6L232.7 174.3C248.1 145.8 277.9 128 310.2 128H329.8C362.1 128 391.9 145.8 407.3 174.3L440.8 236.6C454.3 228.5 469.9 224 486.2 224H505.8C538.1 224 567.9 241.8 583.3 270.3L621.1 340.6C627.4 352.3 623 366.8 611.4 373.1C599.7 379.4 585.2 375 578.9 363.4L552 313.5V352C552 369.7 537.7 384 520 384H472C454.3 384 440 369.7 440 352V313.5L413.1 363.4C406.8 375 392.3 379.4 380.6 373.1C368.1 366.8 364.6 352.3 370.9 340.6L407.2 273.1C405.5 271.5 404 269.6 402.9 267.4L376 217.5V272C376 289.7 361.7 304 344 304H295.1C278.3 304 263.1 289.7 263.1 272V217.5L237.1 267.4C235.1 269.6 234.5 271.5 232.8 273.1L269.1 340.6C275.4 352.3 271 366.8 259.4 373.1C247.7 379.4 233.2 375 226.9 363.4L199.1 313.5L200 352z"]},rr={prefix:"fas",iconName:"store",icon:[576,512,[],"f54e","M495.5 223.2C491.6 223.7 487.6 224 483.4 224C457.4 224 434.2 212.6 418.3 195C402.4 212.6 379.2 224 353.1 224C327 224 303.8 212.6 287.9 195C272 212.6 248.9 224 222.7 224C196.7 224 173.5 212.6 157.6 195C141.7 212.6 118.5 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2H495.5zM499.7 254.9C503.1 254.4 508 253.6 512 252.6V448C512 483.3 483.3 512 448 512H128C92.66 512 64 483.3 64 448V252.6C67.87 253.6 71.86 254.4 75.97 254.9L76.09 254.9C81.35 255.6 86.83 256 92.36 256C104.8 256 116.8 254.1 128 250.6V384H448V250.7C459.2 254.1 471.1 256 483.4 256C489 256 494.4 255.6 499.7 254.9L499.7 254.9z"]},ir={prefix:"fas",iconName:"utensils",icon:[448,512,[61685,127860,"cutlery"],"f2e7","M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"]};function lr(){return v(an,{children:O("main",{children:[O("div",{className:"relative pt-16 pb-32 flex content-center items-center justify-center",style:{minHeight:"75vh"},children:[v("div",{className:"absolute top-0 w-full h-full bg-center bg-cover",style:{backgroundImage:"url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"},children:v("span",{id:"blackOverlay",className:"w-full h-full absolute opacity-75 bg-black"})}),v("div",{className:"container relative mx-auto",children:v("div",{className:"items-center flex flex-wrap",children:v("div",{className:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center",children:O("div",{className:"pr-12",children:[v("h1",{className:"text-white font-semibold text-5xl",children:"Project Experience"}),O("p",{className:"mt-4 text-lg text-gray-300",children:["As a junior developer. I'm able to ",v("br",{}),"Develop, maintain and support application programs for administrative, web and mobile systems using Java and related tools; Analyze code for system testing and debugging; Developing user interfaces using wireframe models;"]})]})})})}),v("div",{className:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",style:{height:"70px"},children:v("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:v("polygon",{className:"text-gray-300 fill-current",points:"2560 0 2560 100 0 100"})})})]}),v("section",{className:"pb-20 bg-gray-300 -mt-24",children:O("div",{className:"container mx-auto px-4",children:[O("div",{className:"flex flex-wrap",children:[v("div",{className:"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center",children:v("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg",children:O("div",{className:"px-4 py-5 flex-auto",children:[v("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400",children:v(Y,{icon:ar})}),v("h6",{className:"text-xl font-semibold",children:"Virtual Queuing Website"}),O("p",{className:"mt-2 mb-4 text-gray-600",children:["- Developed a virtual queue system for restaurant owner to manage their queue. ",v("br",{})," - Developed using Code Igniter 3 and MySQL as database. ",v("br",{})," - The project is completed within 4 months."]})]})})}),v("div",{className:"w-full md:w-4/12 px-4 text-center",children:v("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg",children:O("div",{className:"px-4 py-5 flex-auto",children:[v("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400",children:v(Y,{icon:ir})}),v("h6",{className:"text-xl font-semibold",children:"Recommendation System for Food Ordering Application"}),O("p",{className:"mt-2 mb-4 text-gray-600",children:["- Developed a food recommendation system based on user purchase and user click to view rate. ",v("br",{}),"- Developed using Android Studio and Firebase Stack."]})]})})}),v("div",{className:"pt-6 w-full md:w-4/12 px-4 text-center",children:v("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg",children:O("div",{className:"px-4 py-5 flex-auto",children:[v("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400",children:v(Y,{icon:rr})}),v("h6",{className:"text-xl font-semibold",children:"Store Management Website"}),O("p",{className:"mt-2 mb-4 text-gray-600",children:["- Developed a store management system that manage orders from customers.",v("br",{})," - Developed using PHP, HTML, CSS and MySQL as database.",v("br",{})," - Project has been developed with 100% functionality."]})]})})})]}),O("div",{className:"flex flex-wrap items-center",children:[O("div",{className:"w-full md:w-5/12 px-4 mr-auto ml-auto",children:[v("h3",{className:"text-3xl mb-2 font-semibold leading-normal",children:"Technical Skills:"}),O("p",{className:"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700",children:["Android App Development ",v("br",{})," Web Development ( PHP & CI ) ",v("br",{}),"Software Testing"]}),v("h3",{className:"text-3xl mb-2 font-semibold leading-normal",children:"Familiar Tools:"}),O("p",{className:"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700",children:["Android Studio ( Mobile app development ) ",v("br",{})," Visual Studio Code ( Web development ) ",v("br",{}),"Figma ( UI mockups )"]})]}),v("div",{className:"w-full md:w-4/12 px-4 mr-auto ml-auto",children:O("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600",children:[v("img",{alt:"...",src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",className:"w-full align-middle rounded-t-lg"}),O("blockquote",{className:"relative p-8 mb-4",children:[v("svg",{preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 583 95",className:"absolute left-0 w-full block",style:{height:"95px",top:"-94px"},children:v("polygon",{points:"-30,95 583,95 583,65",className:"text-pink-600 fill-current"})}),v("h4",{className:"text-xl font-bold text-white",children:"Future Goal"}),v("p",{className:"text-md font-light mt-2 text-white",children:"Looking to develop my skills in software development by researching into more prominent technology such as recommendation system and data analytics. Besides that, I would like to grow my experience into managing a development cycle and also create more attractive and effective user interface."})]})]})})]})]})})]})})}export{lr as default};
