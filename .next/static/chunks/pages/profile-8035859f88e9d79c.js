(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a(4789)}])},3816:function(e,t,a){"use strict";var r=a(5893),s=a(5200),i=a(2415),n=(a(7294),a(682)),o=a(1608),l=a(1555),c=a(1468),d=a(4394),u=(a(1664),s.ZP.logo),p=s.ZP.navItems,m=s.ZP.phone,f=s.ZP.icon,h=s.ZP.email,g=s.ZP.address,x=s.ZP.socials,b=s.ZP.navDefault;t.Z=function(e){var t=e.className,a=void 0===t?"":t,s=(0,i.Z)(160).scrollTop;return(0,r.jsxs)("header",{className:"header-area ".concat(a),children:[(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{lg:12,children:(0,r.jsxs)("div",{className:"header-top d-flex justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"header-info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"mailto:".concat(h),children:[(0,r.jsx)("i",{className:"flaticon-email"})," ",h]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"#",children:[(0,r.jsx)("i",{className:"flaticon-placeholder"})," ",g]})})]})}),(0,r.jsx)(d.Z,{socials:x})]})})})}),(0,r.jsx)("div",{className:"main-header".concat(s?" sticky":""),children:(0,r.jsx)(n.Z,{children:(0,r.jsx)(c.Z,{logo:u,navItems:p,navDefault:b,icon:f,phone:m})})})]})}},2251:function(e,t,a){"use strict";var r=a(5893),s=a(6957),i=(a(7294),a(682)),n=a(1608),o=a(1555),l=a(8129);t.Z=function(e){var t=e.title,a=void 0===t?"":t,c=e.page,d=void 0===c?"":c,u=e.parent,p=void 0===u?"":u;return(0,r.jsx)("section",{className:"page-title-area bg_cover",style:{backgroundImage:"url(".concat(s.default.src,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(n.Z,{children:(0,r.jsx)(o.Z,{lg:12,children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h3",{className:"title",children:a}),(0,r.jsx)("nav",{"aria-label":"breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(l.Z,{href:"/",children:"Home"})}),p&&(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:p}),(0,r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:d||a})]})})]})})})})})}},4789:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var r=a(5893),s=a(3816),i=a(3620),n=a(7294),o=a(682),l=a(1608),c=a(1555),d=a(2914),u=a(3680),p=a(9603),m=a(9417),f=a(5675),h=a.n(f),g={src:"/_next/static/media/empty-cart.98049655.svg",height:748,width:896},x=a(6501),b=a(1163);function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(){var e=(0,n.useState)(null),t=e[0],a=e[1],s=(0,n.useState)({firstName:"",lastName:"",email:""}),i=s[0],f=s[1],v=(0,n.useState)(null),j=v[0],N=v[1],w=(0,n.useState)(!0),Z=w[0],E=w[1],k=(0,n.useState)(!1),P=k[0],C=k[1],O=(0,b.useRouter)();(0,n.useEffect)((function(){var e=localStorage.getItem("token");e&&fetch("https://api.olympiquemnihla.com/users/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}).then((function(e){return e.json()})).then((function(e){a(e),f({firstName:e.firstName,lastName:e.lastName,email:e.email}),N(e.avatar),E(!1)})).catch((function(e){console.error("Error fetching user data:",e),E(!1)})),e||(O.push("/sign-in"),E(!1))}),[O]);var S=function(e){var t=e.target,a=t.name,r=t.value;f(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){y(e,t,a[t])}))}return e}({},i,y({},a,r)))};return Z?(0,r.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"300px",width:"100%"},children:(0,r.jsx)("div",{className:"pageLoader"})}):(0,r.jsxs)(o.Z,{className:"profile-container",style:{minHeight:"60vh",width:"100%",padding:"20px"},children:[(0,r.jsxs)(l.Z,{className:"justify-content-between",style:{height:"100%"},children:[(0,r.jsxs)(c.Z,{lg:6,className:"mb-5",children:[(0,r.jsx)("h2",{className:"text-center mb-3",children:"Edit Profile"}),(0,r.jsxs)(d.Z,{onSubmit:function(e){e.preventDefault();var r=new FormData;r.append("firstName",i.firstName),r.append("lastName",i.lastName),r.append("email",i.email),j&&r.append("avatar",j),C(!0),fetch("https://api.olympiquemnihla.com/users/update/".concat(t.id),{method:"PUT",headers:{},body:r}).then((function(e){return e.json()})).then((function(e){a(e),x.Am.success("Profile updated successfully.")})).catch((function(e){x.Am.error("Error updating profile.")})).finally((function(){C(!1)}))},children:[(0,r.jsxs)(d.Z.Group,{controlId:"formAvatar",children:[(0,r.jsx)(d.Z.Label,{children:"Upload Avatar"}),(0,r.jsxs)("label",{className:"avatar-preview",style:{width:"100px",height:"100px",borderRadius:"50%",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #ccc",backgroundColor:"#f0f0f0",marginBottom:"10px",cursor:"pointer"},children:[j?(0,r.jsx)(h(),{src:j,alt:"Avatar Preview",className:"avatar-image",width:100,height:100,objectFit:"cover"}):(0,r.jsx)("span",{}),(0,r.jsx)(d.Z.Control,{type:"file",name:"avatar",hidden:!0,onChange:function(e){var t=e.target.files[0];if(t){var a=new FileReader;a.onloadend=function(){N(a.result)},a.readAsDataURL(t)}}})]})]}),(0,r.jsxs)(d.Z.Group,{controlId:"formFirstName",children:[(0,r.jsx)(d.Z.Label,{children:"First Name"}),(0,r.jsx)(d.Z.Control,{type:"text",name:"firstName",value:i.firstName,onChange:S,required:!0})]}),(0,r.jsxs)(d.Z.Group,{controlId:"formLastName",children:[(0,r.jsx)(d.Z.Label,{children:"Last Name"}),(0,r.jsx)(d.Z.Control,{type:"text",name:"lastName",value:i.lastName,onChange:S,required:!0})]}),(0,r.jsxs)(d.Z.Group,{controlId:"formEmail",children:[(0,r.jsx)(d.Z.Label,{children:"Email"}),(0,r.jsx)(d.Z.Control,{type:"email",name:"email",value:i.email,onChange:S,required:!0})]}),(0,r.jsx)(u.Z,{variant:"primary",type:"submit",className:"mt-3 text-center align-self-center",style:{width:"100%"},disabled:P,children:P?(0,r.jsx)("div",{className:"spinner-border text-light spinner-border-sm",role:"status"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.G,{icon:m.r6l})," Save Changes"," "]})})]})]}),(0,r.jsxs)(c.Z,{lg:5,className:"mb-3 text-center",children:[(0,r.jsx)("h2",{className:"mb-5",children:"Subscription"}),(null===t||void 0===t?void 0:t.subscription)?(0,r.jsxs)("div",{className:"container-card",children:[(0,r.jsx)("h2",{className:"title-card",children:t.subscription.title}),(0,r.jsx)("p",{className:"body-card",children:t.subscription.description}),(0,r.jsx)("div",{className:"btn-card",children:(0,r.jsxs)("span",{className:"text-lg",children:["Ends on: ",new Date(t.dateEnd).toLocaleDateString()]})})]}):(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)(h(),{src:g,alt:"No Payment",className:"mr-5 ",style:{display:"block",margin:"0 auto"}}),(0,r.jsx)("h4",{children:"No Subscription Found"})]})]})]}),(0,r.jsx)(x.x7,{})]})},j=a(2251),N=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(j.Z,{title:"Profile"}),(0,r.jsx)(v,{})]})}},6501:function(e,t,a){"use strict";a.d(t,{x7:function(){return ae},Am:function(){return $}});var r=a(7294);let s={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",s="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?c(n,i):i+"{"+c(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=c(n,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(i,n):i+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},p=(e,t,a,r,s)=>{let i=u(e),p=d[i]||(d[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!d[p]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=n.exec(e.replace(o,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[p]=c(s?{["@keyframes "+p]:t}:t,a?"":"."+p)}let m=a&&d.g?d.g:null;return a&&(d.g=d[p]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[p],t,r,m),p},m=(e,t,a)=>e.reduce(((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),"");function f(e){let t=this||{},a=e.call?e(t.p):e;return p(a.unshift?a.raw?m(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,i(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,g,x,b=f.bind({k:1});function y(e,t){let a=this||{};return function(){let r=arguments;function s(i,n){let o=Object.assign({},i),l=o.className||s.className;a.p=Object.assign({theme:g&&g()},o),a.o=/ *go\d+/.test(l),o.className=f.apply(a,r)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),x&&c[0]&&x(o),h(c,o)}return t?t(s):s}}var v=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),N=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),w=new Map,Z=e=>{if(w.has(e))return;let t=setTimeout((()=>{w.delete(e),C({type:4,toastId:e})}),1e3);w.set(e,t)},E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=w.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?E(e,{type:1,toast:a}):E(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?Z(r):e.toasts.forEach((e=>{Z(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+s})))}}},k=[],P={toasts:[],pausedAt:void 0},C=e=>{P=E(P,e),k.forEach((e=>{e(P)}))},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||j()}))(t,e,a);return C({type:2,toast:r}),r.id},$=(e,t)=>S("blank")(e,t);$.error=S("error"),$.success=S("success"),$.loading=S("loading"),$.custom=S("custom"),$.dismiss=e=>{C({type:3,toastId:e})},$.remove=e=>C({type:4,toastId:e}),$.promise=(e,t,a)=>{let r=$.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>($.success(v(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{$.error(v(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var D=(e,t)=>{C({type:1,toast:{id:e,height:t}})},I=()=>{C({type:5,time:Date.now()})},_=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,r.useState)(P);(0,r.useEffect)((()=>(k.push(a),()=>{let e=k.indexOf(a);e>-1&&k.splice(e,1)})),[t]);let s=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:s}})(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>$.dismiss(t.id)),a);t.visible&&$.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let s=(0,r.useCallback)((()=>{a&&C({type:6,time:Date.now()})}),[a]),i=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=a||{},n=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),o=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<o&&e.visible)).length;return n.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+s),0)}),[t]);return{toasts:t,handlers:{updateHeight:D,startPause:I,endPause:s,calculateOffset:i}}},A=b`
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
}`,F=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=b`
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
  animation: ${z} 1s linear infinite;
`,q=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=b`
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

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
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
`,G=y("div")`
  position: absolute;
`,U=y("div")`
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
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?r.createElement(X,null,t):t:"blank"===a?null:r.createElement(U,null,r.createElement(H,{...s}),"loading"!==a&&r.createElement(G,null,"error"===a?r.createElement(T,{...s}):r.createElement(R,{...s})))},Y=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,K=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Q=y("div")`
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
`,W=r.memo((({toast:e,position:t,style:a,children:s})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(a),K(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(J,{toast:e}),o=r.createElement(V,{...e.ariaProps},v(e.message,e));return r.createElement(Q,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof s?s({icon:n,message:o}):r.createElement(r.Fragment,null,n,o))}));!function(e,t,a,r){c.p=t,h=e,g=a,x=r}(r.createElement);var ee=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let n=r.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;s(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,s]);return r.createElement("div",{ref:n,className:t,style:a},i)},te=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,containerStyle:n,containerClassName:o})=>{let{toasts:l,handlers:c}=_(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((a=>{let n=a.position||t,o=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...s}})(n,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return r.createElement(ee,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?te:"",style:o},"custom"===a.type?v(a.message,a):i?i(a):r.createElement(W,{toast:a,position:n}))})))}}},function(e){e.O(0,[976,716,408,665,774,888,179],(function(){return t=9344,e(e.s=t);var t}));var t=e.O();_N_E=t}]);