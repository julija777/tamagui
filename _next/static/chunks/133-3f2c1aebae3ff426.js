"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{92682:function(e,t,r){r.d(t,{b:function(){return d},k:function(){return p}});var n=r(52322),o=r(2784);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=Object.defineProperty,f=function(e,t){return s(e,"name",{value:t,configurable:!0})};function p(e,t){var r=function(e){var t=e.children,r=a(e,["children"]),i=o.useMemo((function(){return r}),Object.values(r));return(0,n.jsx)(c.Provider,{value:i,children:t})},i=function(r){var n=o.useContext(c);if(n)return n;if(void 0!==t)return t;throw new Error("`".concat(r,"` must be used within `").concat(e,"`"))},c=o.createContext(t);return f(r,"Provider"),f(i,"useContext"),r.displayName=e+"Provider",[r,i]}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=function(t,r){var c=o.createContext(r),u=i.length;function s(t){var r=t.scope,i=t.children,l=a(t,["scope","children"]),s=(null==r?void 0:r[e][u])||c,f=o.useMemo((function(){return l}),Object.values(l));return(0,n.jsx)(s.Provider,{value:f,children:i})}function p(n,i){var a=(null==i?void 0:i[e][u])||c,l=o.useContext(a);if(l)return l;if(void 0!==r)return r;throw new Error("`".concat(n,"` must be used within `").concat(t,"`"))}return i=l(i).concat([r]),f(s,"Provider"),f(p,"useContext"),s.displayName=t+"Provider",[s,p]},i=[];f(r,"createContext");var s=f((function(){var t=i.map((function(e){return o.createContext(e)}));return f((function(r){var n=(null==r?void 0:r[e])||t;return o.useMemo((function(){return c({},"__scope".concat(e),u({},r,c({},e,n)))}),[r,n])}),"useScope")}),"createScope");return s.scopeName=e,[r,m.apply(void 0,[s].concat(l(t)))]}function m(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(1===t.length)return n;var i=f((function(){var e=t.map((function(e){return{useScope:e(),scopeName:e.scopeName}}));return f((function(t){var r=e.reduce((function(e,r){var n=r.useScope,o=r.scopeName;return u({},e,n(t)["__scope".concat(o)])}),{});return o.useMemo((function(){return c({},"__scope".concat(n.scopeName),r)}),[r])}),"useComposedScopes")}),"createScope");return i.scopeName=n.scopeName,i}f(p,"createContext"),f(d,"createContextScope"),f(m,"composeContextScopes")},70730:function(e,t,r){r.d(t,{H:function(){return u}});var n=r(52322),o=r(97729),i=r(5632);r(2784);function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e){var t,r=e.url,u=void 0===r?"https://tamagui.dev":r,a=e.pathname,l=e.title,s=void 0===l?"Tamagui":l,f=e.description,p=void 0===f?"":f,d=e.poster,m=c(e,["url","pathname","title","description","poster"]),y=(0,i.useRouter)(),b=null!==(t=m.image)&&void 0!==t?t:d?"".concat(u,"/").concat(d):"".concat(u,"/social.jpg"),v=a||y.pathname;return(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(u).concat(v)}),(0,n.jsx)("meta",{property:"og:title",content:s}),(0,n.jsx)("meta",{property:"og:description",content:p}),(0,n.jsx)("meta",{property:"og:image",content:b}),(0,n.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},27932:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(52322),o=r(96817),i=(r(2784),r(23917)),c=r(73456),u=r(34891),a=r(18732),l=r(5808);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var t=(0,a.d5)().tint,r=d((0,i.T)({strategy:"most-recent-wins",prop:e.position,defaultProp:0}),2),s=r[0],f=r[1],m=y[s],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;f((function(t){return(t+e)%y.length}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.b,p({animation:e.animation||"bouncy",onPress:function(){return b()},size:110,bc:"$pink10",br:"$9",hoverStyle:{scale:1.1},pressStyle:{scale:.9}},m,{children:(0,n.jsx)(l.K7,{downscale:.75})})),(0,n.jsx)(u.z,{tag:"button",bottom:"_b-18rd0c5",left:"_l-ctyi22",position:"_pos-u8s1d",iconAfter:o.s,theme:t,size:"$5",circular:!0,borderBottomLeftRadius:"_bblr-wy88pt",borderBottomRightRadius:"_bbrr-3djova",borderTopLeftRadius:"_btlr-1de1axg",borderTopRightRadius:"_btrr-dtk0zj",height:"_h-1ygb39h",maxHeight:"_mah-e90vpy",maxWidth:"_maw-1s7ydi6",minHeight:"_mih-116um31",minWidth:"_miw-1w1cp9x",paddingBottom:"_pb-1mdbw0j",paddingLeft:"_pl-gy4na3",paddingRight:"_pr-9aemit",paddingTop:"_pt-wk8lta",width:"_w-uahozn",onPress:function(){return b()}})]})}var y=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},74501:function(e,t,r){r.d(t,{E:function(){return p}});var n=r(52322),o=r(68970);function i(e){const t=(0,o.iE)().shorthands;if(!t)return e;let r={};for(const n in e)r[t[n]||n]=e[n];return r}(0,Object.defineProperty)(i,"name",{value:"getExpandedShorthands",configurable:!0});var c=r(45482),u=r(2784),a=r(30976);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}u.createElement;var f=(0,c.z)(a.Image,{name:"Image",position:"relative",source:{uri:""}},{inlineProps:new Set(["src","width","height"])}),p=f.extractable((function(e){var t=i(e),r=t.src,o=t.width,c=void 0===o?100:o,u=t.height,a=void 0===u?100:u,p=s(t,["src","width","height"]),d="string"===typeof r?{uri:r,width:c,height:a}:r,m=Array.isArray(d)?d[0]:d;return m?(0,n.jsx)(f,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({defaultSource:m,source:d},p)):null}))},23917:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(86029),o=r(2784),i=Object.defineProperty,c=function(e,t){return i(e,"name",{value:t,configurable:!0})};function u(e){var t=e.prop,r=e.defaultProp,i=e.onChange,c=e.strategy,u=void 0===c?"prop-wins":c,l=(0,o.useRef)(t),s=(0,n.W)(i),f=(0,o.useState)(null!=t?t:r),p=f[0],d=f[1],m="prop-wins"===u;return(0,o.useEffect)((function(){l.current=t,d((function(e){return a(e,t,s)}))}),[t]),[p,(0,o.useCallback)((function(e){m&&void 0!==l.current||d((function(t){return a(t,"function"===typeof e?e(t):e,s)}))}),[d,m])]}c(u,"useControllableState");var a=c((function(e,t,r){return e===t||void 0===t?e:(r(t),t)}),"getNextStateWithCallback")},96817:function(e,t,r){r.d(t,{s:function(){return a}});var n=r(2784),o=r(71295),i=r(74479),c=Object.defineProperty;const u=((e,t)=>c(e,"name",{value:t,configurable:!0}))((e=>{const{color:t="black",size:r=24,...i}=e;return n.createElement(o.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i},n.createElement(o.Polygon,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="Play";const a=(0,n.memo)((0,i.H)(u))}}]);