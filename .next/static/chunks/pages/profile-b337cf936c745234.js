(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a(3300)}])},3816:function(e,t,a){"use strict";var r=a(5893),i=a(5200),s=a(2415),n=(a(7294),a(682)),o=a(1608),l=a(1555),c=a(1468),d=a(4394),u=(a(1664),i.ZP.logo),p=i.ZP.navItems,m=i.ZP.phone,f=i.ZP.icon,h=i.ZP.email,g=i.ZP.address,x=i.ZP.socials,b=i.ZP.navDefault;t.Z=function(e){var t=e.className,a=void 0===t?"":t,i=(0,s.Z)(160).scrollTop;return(0,r.jsxs)("header",{className:"header-area ".concat(a),children:[(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{lg:12,children:(0,r.jsxs)("div",{className:"header-top d-flex justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"header-info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"mailto:".concat(h),children:[(0,r.jsx)("i",{className:"flaticon-email"})," ",h]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"#",children:[(0,r.jsx)("i",{className:"flaticon-placeholder"})," ",g]})})]})}),(0,r.jsx)(d.Z,{socials:x})]})})})}),(0,r.jsx)("div",{className:"main-header".concat(i?" sticky":""),children:(0,r.jsx)(n.Z,{children:(0,r.jsx)(c.Z,{logo:u,navItems:p,navDefault:b,icon:f,phone:m})})})]})}},2251:function(e,t,a){"use strict";var r=a(5893),i=a(8172),s=(a(7294),a(682)),n=a(1608),o=a(1555),l=a(8129);t.Z=function(e){var t=e.title,a=void 0===t?"":t,c=e.page,d=void 0===c?"":c,u=e.parent,p=void 0===u?"":u;return(0,r.jsx)("section",{className:"page-title-area bg_cover",style:{backgroundImage:"url(".concat(i.default.src,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{lg:12,children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h3",{className:"title",children:a}),(0,r.jsx)("nav",{"aria-label":"breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(l.Z,{href:"/",children:"Home"})}),p&&(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:p}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:d||a})]})})]})})})})})}},3300:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(5893),i=a(3816),s=a(3620),n=a(7294),o=a(682),l=a(2914),c=a(3680),d=a(9603),u=a(9417),p=a(5675),m=a.n(p),f=a(6501);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(){var e=(0,n.useState)(null),t=e[0],a=e[1],i=(0,n.useState)({firstName:"",lastName:"",email:""}),s=i[0],p=i[1],g=(0,n.useState)(null),x=g[0],b=g[1],y=(0,n.useState)(!0),v=y[0],j=y[1],w=(0,n.useState)(!1),N=w[0],Z=w[1];(0,n.useEffect)((function(){var e=localStorage.getItem("token");e&&fetch("http://194.164.54.216:3636/users/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}).then((function(e){return e.json()})).then((function(e){a(e),p({firstName:e.firstName,lastName:e.lastName,email:e.email}),b(e.avatar),j(!1)})).catch((function(e){console.error("Error fetching user data:",e),j(!1)}))}),[]);var E=function(e){var t=e.target,a=t.name,r=t.value;p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){h(e,t,a[t])}))}return e}({},s,h({},a,r)))};return v?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsxs)(o.Z,{className:"profile-container",style:{minHeight:"60vh",margin:"0 auto",width:"40%",padding:"20px"},children:[(0,r.jsx)("h2",{className:"text-center mb-3",children:"Edit Profile"}),(0,r.jsxs)(l.Z,{onSubmit:function(e){e.preventDefault();var r=new FormData;r.append("firstName",s.firstName),r.append("lastName",s.lastName),r.append("email",s.email),x&&r.append("avatar",x),Z(!0),fetch("http://194.164.54.216:3636/users/update/".concat(t.id),{method:"PUT",headers:{},body:r}).then((function(e){return e.json()})).then((function(e){a(e),f.Am.success("Profile updated successfully.")})).catch((function(e){f.Am.error("Error updating profile.")})).finally((function(){Z(!1)}))},children:[(0,r.jsxs)(l.Z.Group,{controlId:"formAvatar ",children:[(0,r.jsx)(l.Z.Label,{children:"Upload Avatar"}),(0,r.jsxs)("label",{className:"avatar-preview",style:{width:"100px",height:"100px",borderRadius:"50%",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #ccc",backgroundColor:"#f0f0f0",marginBottom:"10px",cursor:"pointer"},children:[x?(0,r.jsx)(m(),{src:x,alt:"Avatar Preview",className:"avatar-image",width:100,height:100,objectFit:"cover"}):(0,r.jsx)("span",{}),(0,r.jsx)(l.Z.Control,{type:"file",name:"avatar",hidden:!0,onChange:function(e){var t=e.target.files[0];if(t){var a=new FileReader;a.onloadend=function(){b(a.result)},a.readAsDataURL(t)}}})]})]}),(0,r.jsxs)(l.Z.Group,{controlId:"formFirstName",children:[(0,r.jsx)(l.Z.Label,{children:"First Name"}),(0,r.jsx)(l.Z.Control,{type:"text",name:"firstName",value:s.firstName,onChange:E,required:!0})]}),(0,r.jsxs)(l.Z.Group,{controlId:"formLastName",children:[(0,r.jsx)(l.Z.Label,{children:"Last Name"}),(0,r.jsx)(l.Z.Control,{type:"text",name:"lastName",value:s.lastName,onChange:E,required:!0})]}),(0,r.jsxs)(l.Z.Group,{controlId:"formEmail",children:[(0,r.jsx)(l.Z.Label,{children:"Email"}),(0,r.jsx)(l.Z.Control,{type:"email",name:"email",value:s.email,onChange:E,required:!0})]}),(0,r.jsx)(c.Z,{variant:"primary",type:"submit",className:"mt-3 text-center align-self-center",style:{width:"100%"},disabled:N,children:N?(0,r.jsx)("div",{className:"spinner-border text-light spinner-border-sm",role:"status"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.G,{icon:u.r6l})," Save Changes"," "]})})]}),(0,r.jsx)(f.x7,{})]})},x=a(2251),b=function(){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(x.Z,{title:"Profile"}),(0,r.jsx)(g,{})]})}},6501:function(e,t,a){"use strict";a.d(t,{x7:function(){return ae},Am:function(){return I}});var r=a(7294);let i={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",i="";for(let s in e){let n=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+n+";":r+="f"==s[1]?c(n,s):s+"{"+c(n,"k"==s[1]?"":t)+"}":"object"==typeof n?r+=c(n,t?t.replace(/([^,])+/g,(e=>s.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):s):null!=n&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=c.p?c.p(s,n):s+":"+n+";")}return a+(t&&i?t+"{"+i+"}":i)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},p=(e,t,a,r,i)=>{let s=u(e),p=d[s]||(d[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!d[p]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=n.exec(e.replace(o,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[p]=c(i?{["@keyframes "+p]:t}:t,a?"":"."+p)}let m=a&&d.g?d.g:null;return a&&(d.g=d[p]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[p],t,r,m),p},m=(e,t,a)=>e.reduce(((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==s?"":s)}),"");function f(e){let t=this||{},a=e.call?e(t.p):e;return p(a.unshift?a.raw?m(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,s(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,g,x,b=f.bind({k:1});function y(e,t){let a=this||{};return function(){let r=arguments;function i(s,n){let o=Object.assign({},s),l=o.className||i.className;a.p=Object.assign({theme:g&&g()},o),a.o=/ *go\d+/.test(l),o.className=f.apply(a,r)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),x&&c[0]&&x(o),h(c,o)}return t?t(i):i}}var v=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),N=new Map,Z=e=>{if(N.has(e))return;let t=setTimeout((()=>{N.delete(e),C({type:4,toastId:e})}),1e3);N.set(e,t)},E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=N.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?E(e,{type:1,toast:a}):E(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?Z(r):e.toasts.forEach((e=>{Z(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},k=[],P={toasts:[],pausedAt:void 0},C=e=>{P=E(P,e),k.forEach((e=>{e(P)}))},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||j()}))(t,e,a);return C({type:2,toast:r}),r.id},I=(e,t)=>$("blank")(e,t);I.error=$("error"),I.success=$("success"),I.loading=$("loading"),I.custom=$("custom"),I.dismiss=e=>{C({type:3,toastId:e})},I.remove=e=>C({type:4,toastId:e}),I.promise=(e,t,a)=>{let r=I.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(I.success(v(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{I.error(v(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var S=(e,t)=>{C({type:1,toast:{id:e,height:t}})},A=()=>{C({type:5,time:Date.now()})},_=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,r.useState)(P);(0,r.useEffect)((()=>(k.push(a),()=>{let e=k.indexOf(a);e>-1&&k.splice(e,1)})),[t]);let i=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:i}})(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>I.dismiss(t.id)),a);t.visible&&I.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let i=(0,r.useCallback)((()=>{a&&C({type:6,time:Date.now()})}),[a]),s=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=a||{},n=t.filter((t=>(t.position||s)===(e.position||s)&&t.height)),o=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<o&&e.visible)).length;return n.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:S,startPause:A,endPause:i,calculateOffset:s}}},D=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
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
`,F=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,M=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=b`
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
}`,R=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
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
`,U=y("div")`
  position: absolute;
`,q=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return void 0!==t?"string"==typeof t?r.createElement(X,null,t):t:"blank"===a?null:r.createElement(q,null,r.createElement(H,{...i}),"loading"!==a&&r.createElement(U,null,"error"===a?r.createElement(z,{...i}):r.createElement(R,{...i})))},Y=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,K=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Q=y("div")`
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
`,V=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=r.memo((({toast:e,position:t,style:a,children:i})=>{let s=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,i]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(a),K(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(J,{toast:e}),o=r.createElement(V,{...e.ariaProps},v(e.message,e));return r.createElement(Q,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof i?i({icon:n,message:o}):r.createElement(r.Fragment,null,n,o))}));!function(e,t,a,r){c.p=t,h=e,g=a,x=r}(r.createElement);var ee=({id:e,className:t,style:a,onHeightUpdate:i,children:s})=>{let n=r.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;i(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,i]);return r.createElement("div",{ref:n,className:t,style:a},s)},te=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:s,containerStyle:n,containerClassName:o})=>{let{toasts:l,handlers:c}=_(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((a=>{let n=a.position||t,o=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...i}})(n,c.calculateOffset(a,{reverseOrder:e,gutter:i,defaultPosition:t}));return r.createElement(ee,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?te:"",style:o},"custom"===a.type?v(a.message,a):s?s(a):r.createElement(W,{toast:a,position:n}))})))}}},function(e){e.O(0,[976,716,408,662,774,888,179],(function(){return t=9344,e(e.s=t);var t}));var t=e.O();_N_E=t}]);