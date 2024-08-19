(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{5873:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donation-project/[id]",function(){return r(8475)}])},7539:function(e,t,r){"use strict";var a=r(5893);r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.Z=function(e){var t=e.title,r=void 0===t?"":t,i=e.tagline,s=void 0===i?"":i,l=e.children,c=e.className,u=void 0===c?"":c,d=o(e,["title","tagline","children","className"]);return(0,a.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({className:"section-title ".concat(u)},d,{children:[s&&(0,a.jsx)("span",{children:s}),(0,a.jsx)("h3",{className:"title",children:r||l})]}))}},8475:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var a=r(5893),n=r(3816),o=r(3620),i=(r(6658),r(4051)),s=r.n(i),l=r(7066),c=r(7294),u=r(682),d=r(1608),p=r(1555),f=r(1330),m=r(3680),g=r(1163),b=r(6501);function h(e,t,r,a,n,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(a,n)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){y(e,t,r[t])}))}return e}var x=function(e){var t=e.project,r=t.image,n=t.name,o=t.description,i=(0,g.useRouter)(),y=(0,c.useState)(""),x=(y[0],y[1]),j=(0,c.useState)(""),w=j[0],N=j[1],O=(0,c.useState)(""),E=O[0],k=O[1],P=(0,c.useState)(""),$=P[0],S=P[1],C=(0,c.useState)(""),D=C[0],_=C[1],Z=(0,c.useState)(""),A=Z[0],I=Z[1],z=(0,c.useState)({token:"",amount:"",firstName:"",lastName:"",email:"",phone:""}),T=z[0],F=z[1],L=function(){var e,r=(e=s().mark((function e(r){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a={},w||(a.amount="Please enter an amount"),E||(a.firstName="Please enter your first name"),$||(a.lastName="Please enter your last name"),D||(a.email="Please enter your email"),A||(a.phone="Please enter your phone number"),F(a),!(Object.keys(a).length>0)){e.next=10;break}return e.abrupt("return");case 10:return e.prev=10,e.next=13,l.Z.post("http://194.164.54.216:3636/payments/project-donation",{token:"TND",amount:parseFloat(w),description:o,firstName:E,lastName:$,email:D,phoneNumber:A,projectId:t.id});case 13:204===(n=e.sent).status?b.Am.error("Email Not found"):n.data.url?(i.push(n.data.url),x(""),N(""),k(""),S(""),_(""),I("")):console.error("Error: URL is undefined"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),console.error("Error donating:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[10,17]])})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){h(o,a,n,i,s,"next",e)}function s(e){h(o,a,n,i,s,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,a.jsxs)("section",{className:"project-details-area pt-120 pb-190",children:[(0,a.jsx)(u.Z,{children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(p.Z,{lg:7,children:(0,a.jsxs)("div",{className:"project-details-thumb",children:[(0,a.jsx)(f.Z,{src:r,alt:n}),(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)("i",{className:"fa fa-heart"})})]})}),(0,a.jsx)(p.Z,{lg:5,children:(0,a.jsxs)("div",{className:"donation-form",children:[(0,a.jsxs)("h3",{children:["Support ",n]}),(0,a.jsx)("p",{children:o}),(0,a.jsxs)("form",{onSubmit:L,className:"project-form mt-30 d-flex flex-column gap-3",children:[(0,a.jsx)("input",{type:"text",placeholder:"Email",value:D,className:"p-2 rounded border border-gray shadow-sm bg-light text-gray ".concat(T.email&&"border-danger"),onChange:function(e){_(e.target.value),F(v({},T,{email:""}))}}),(0,a.jsx)("input",{type:"text",placeholder:"First Name",className:"p-2 rounded border border-gray shadow-sm bg-light text-gray ".concat(T.firstName&&"border-danger"),value:E,onChange:function(e){k(e.target.value),F(v({},T,{firstName:""}))}}),(0,a.jsx)("input",{type:"text",placeholder:"Last Name",className:"p-2 rounded border border-gray shadow-sm bg-light text-gray ".concat(T.lastName&&"border-danger"),value:$,onChange:function(e){S(e.target.value),F(v({},T,{lastName:""}))}}),(0,a.jsx)("input",{type:"text",placeholder:"Phone",className:"p-2 rounded border border-gray shadow-sm bg-light text-gray ".concat(T.phone&&"border-danger"),value:A,onChange:function(e){I(e.target.value),F(v({},T,{phone:""}))}}),(0,a.jsx)("input",{type:"text",placeholder:"Amount",className:"p-2 rounded border border-gray shadow-sm bg-light text-gray ".concat(T.amount&&"border-danger"),value:w,onChange:function(e){N(e.target.value),F(v({},T,{amount:""}))}}),(0,a.jsx)(m.Z,{className:"main-btn",type:"submit",children:"Submit Donation"})]})]})})]})}),(0,a.jsx)(b.x7,{})]})},j=(r(7914),r(2251));function w(){var e=(0,g.useRouter)().query.id,t=(0,c.useState)(null),r=t[0],i=t[1];return(0,c.useEffect)((function(){e&&fetch("http://194.164.54.216:3636/projects/find-one/".concat(e)).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.error("Error fetching project:",e)}))}),[e]),r?(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(j.Z,{title:"Single Project",page:"Explore"}),(0,a.jsx)(x,{project:r})]}):(0,a.jsx)("div",{children:"Loading..."})}},3680:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(3967),n=r.n(a),o=r(7294),i=r(5893);const s=["as","disabled"];function l({tagName:e,disabled:t,href:r,target:a,rel:n,role:o,onClick:i,tabIndex:s=0,type:l}){e||(e=null!=r||null!=a||null!=n?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==i||i(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:s,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const c=o.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,s);const[o,{tagName:c}]=l(Object.assign({tagName:r,disabled:a},n));return(0,i.jsx)(c,Object.assign({},n,o,{ref:t}))}));c.displayName="Button";var u=r(6792);const d=o.forwardRef((({as:e,bsPrefix:t,variant:r="primary",size:a,active:o=!1,disabled:s=!1,className:c,...d},p)=>{const f=(0,u.vE)(t,"btn"),[m,{tagName:g}]=l({tagName:e,disabled:s,...d}),b=g;return(0,i.jsx)(b,{...m,...d,ref:p,disabled:s,className:n()(c,f,o&&"active",r&&`${f}-${r}`,a&&`${f}-${a}`,d.href&&s&&"disabled")})}));d.displayName="Button";var p=d},6501:function(e,t,r){"use strict";r.d(t,{x7:function(){return re},Am:function(){return D}});var a=r(7294);let n={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",a="",n="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=c(i,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=c.p?c.p(o,i):o+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+a},u={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e},p=(e,t,r,a,n)=>{let o=d(e),p=u[o]||(u[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!u[p]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=i.exec(e.replace(s,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);u[p]=c(n?{["@keyframes "+p]:t}:t,r?"":"."+p)}let f=r&&u.g?u.g:null;return r&&(u.g=u[p]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(u[p],t,a,f),p},f=(e,t,r)=>e.reduce(((e,a,n)=>{let o=t[n];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)}),"");function m(e){let t=this||{},r=e.call?e(t.p):e;return p(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,o(t.target),t.g,t.o,t.k)}m.bind({g:1});let g,b,h,y=m.bind({k:1});function v(e,t){let r=this||{};return function(){let a=arguments;function n(o,i){let s=Object.assign({},o),l=s.className||n.className;r.p=Object.assign({theme:b&&b()},s),r.o=/ *go\d+/.test(l),s.className=m.apply(r,a)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),h&&c[0]&&h(s),g(c,s)}return t?t(n):n}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),N=new Map,O=e=>{if(N.has(e))return;let t=setTimeout((()=>{N.delete(e),$({type:4,toastId:e})}),1e3);N.set(e,t)},E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=N.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?E(e,{type:1,toast:r}):E(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?O(a):e.toasts.forEach((e=>{O(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+n})))}}},k=[],P={toasts:[],pausedAt:void 0},$=e=>{P=E(P,e),k.forEach((e=>{e(P)}))},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}))(t,e,r);return $({type:2,toast:a}),a.id},D=(e,t)=>C("blank")(e,t);D.error=C("error"),D.success=C("success"),D.loading=C("loading"),D.custom=C("custom"),D.dismiss=e=>{$({type:3,toastId:e})},D.remove=e=>$({type:4,toastId:e}),D.promise=(e,t,r)=>{let a=D.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(D.success(x(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e))).catch((e=>{D.error(x(t.error,e),{id:a,...r,...null==r?void 0:r.error})})),e};var _=(e,t)=>{$({type:1,toast:{id:e,height:t}})},Z=()=>{$({type:5,time:Date.now()})},A=e=>{let{toasts:t,pausedAt:r}=((e={})=>{let[t,r]=(0,a.useState)(P);(0,a.useEffect)((()=>(k.push(r),()=>{let e=k.indexOf(r);e>-1&&k.splice(e,1)})),[t]);let n=t.toasts.map((t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:n}})(e);(0,a.useEffect)((()=>{if(r)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>D.dismiss(t.id)),r);t.visible&&D.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let n=(0,a.useCallback)((()=>{r&&$({type:6,time:Date.now()})}),[r]),o=(0,a.useCallback)(((e,r)=>{let{reverseOrder:a=!1,gutter:n=8,defaultPosition:o}=r||{},i=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+n),0)}),[t]);return{toasts:t,handlers:{updateHeight:_,startPause:Z,endPause:n,calculateOffset:o}}},I=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,R=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=v("div")`
  position: absolute;
`,q=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?a.createElement(K,null,t):t:"blank"===r?null:a.createElement(q,null,a.createElement(M,{...n}),"loading"!==r&&a.createElement(U,null,"error"===r?a.createElement(F,{...n}):a.createElement(B,{...n})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Q=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=a.memo((({toast:e,position:t,style:r,children:n})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,n]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),J(r)];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(Y,{toast:e}),s=a.createElement(V,{...e.ariaProps},x(e.message,e));return a.createElement(Q,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof n?n({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))}));!function(e,t,r,a){c.p=t,g=e,b=r,h=a}(a.createElement);var ee=({id:e,className:t,style:r,onHeightUpdate:n,children:o})=>{let i=a.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;n(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,n]);return a.createElement("div",{ref:i,className:t,style:r},o)},te=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,re=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=A(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((r=>{let i=r.position||t,s=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...n}})(i,c.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return a.createElement(ee,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?te:"",style:s},"custom"===r.type?x(r.message,r):o?o(r):a.createElement(W,{toast:r,position:i}))})))}}},function(e){e.O(0,[976,716,66,662,120,852,774,888,179],(function(){return t=5873,e(e.s=t);var t}));var t=e.O();_N_E=t}]);