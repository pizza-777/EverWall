(function(){"use strict";var e={3849:function(e,t,n){n.d(t,{fD:function(){return m},ai:function(){return p},xl:function(){return v},Jq:function(){return d},x4:function(){return g},kS:function(){return h},bG:function(){return A}});n(1703);var r=n(7945);const o={abi:{"ABI version":2,version:"2.2",header:["time"],functions:[{name:"getMessage",inputs:[{name:"message",type:"string"}],outputs:[]},{name:"constructor",inputs:[],outputs:[]},{name:"chatId",inputs:[],outputs:[{name:"chatId",type:"uint256"}]}],data:[{key:1,name:"chatId",type:"uint256"}],events:[],fields:[{name:"_pubkey",type:"uint256"},{name:"_timestamp",type:"uint64"},{name:"_constructorFlag",type:"bool"},{name:"chatId",type:"uint256"}]},tvc:"te6ccgECEgEAAasAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsPBQQRAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAwGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Dg4GAzwgghBotV8/uuMCIIIQbdAaQbrjAiCCEH/uhji64wIKCQcDKDD4RvLgTPhCbuMA1NHbPDDbPPIADQgLAAIwAVAw0ds8+EohjhyNBHAAAAAAAAAAAAAAAAA7dAaQYMjOy//JcPsA3vIADQIiMPhCbuMA+Ebyc9H4ANs88gAMCwAk+Er4Q/hCyMv/yz/Pg8v/ye1UAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1wv/kXDi+GqAQPQO8r3XC//4YnD4Y+MNDQAm7UTQ0//TP9MAMdP/0fhq+GP4YgAK+Eby4EwCCvSkIPShERAAFHNvbCAwLjYxLjIAAA==",code:"te6ccgECDwEAAX4ABCSK7VMg4wMgwP/jAiDA/uMC8gsMAgEOAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAkDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8CwsDAzwgghBotV8/uuMCIIIQbdAaQbrjAiCCEH/uhji64wIHBgQDKDD4RvLgTPhCbuMA1NHbPDDbPPIACgUIAAIwAVAw0ds8+EohjhyNBHAAAAAAAAAAAAAAAAA7dAaQYMjOy//JcPsA3vIACgIiMPhCbuMA+Ebyc9H4ANs88gAJCAAk+Er4Q/hCyMv/yz/Pg8v/ye1UAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1wv/kXDi+GqAQPQO8r3XC//4YnD4Y+MNCgAm7UTQ0//TP9MAMdP/0fhq+GP4YgAK+Eby4EwCCvSkIPShDg0AFHNvbCAwLjYxLjIAAA==",codeHash:"ba2931d1cc7b5b988e1853a6cd606e02f83a7df9a0788c69c297358fffc40b72"};var a=n(5809);let i,s;const c=new r.ProviderRpcClient({fallback:()=>a.EverscaleStandaloneClient.create({connection:{id:1,group:"testnet",type:"graphql",data:{endpoints:["https://mainnet.evercloud.dev/7a7a6dcbbfd54069be906c64938f5962/graphql"],local:!1}}}),forceUseFallback:!0});async function u(){if("undefined"===typeof i&&(i=new r.ProviderRpcClient,!await i.hasProvider()))throw alert("Please install the EverWallet extension"),new Error("Extension is not installed");return i}async function l(){const e=await u();if("undefined"===typeof s){const{accountInteraction:t}=await e.requestPermissions({permissions:["basic","accountInteraction"]});if(null==t)throw alert("Issue with permissions"),new Error("Insufficient permissions");s=t}return s}async function A(e,t){const n=await u(),a=await l(),i=new n.Contract(o.abi,new r.Address(t));try{const t=await i.methods.getMessage({message:e}).send({from:a.address,amount:"1",bounce:!0});return t}catch(s){console.error(s)}}async function d(e){const t=c,n=new t.Contract(o.abi,new r.Address(e));try{const e=(await t.getTransactions({address:n.address})).transactions,r=e.map((e=>({sender:e.inMessage.src?.toString()??"",message:e.inMessage.body?.toString()??"",timestamp:e.createdAt,id:e.id.hash}))).filter((e=>""!=e.message));let o;for(let t=0;t<r.length;t++)o=await f(r[t].message),"undefined"!=typeof o?r[t].message=o.message:r.splice(t,1);return r}catch(a){console.error(a)}}async function f(e){const t=c;try{const n=await t.unpackFromCell({structure:[{name:"message",type:"string"}],boc:e,allowPartial:!0});return n.data}catch(n){console.error(n)}}function p(){let e="0:";const t="0123456789abcdef";for(let n=0;n<64;n++)e+=t[Math.floor(Math.random()*t.length)];return e}async function g(){await l();const e=await u();await e.ensureInitialized()}async function h(){const e=await u();e.disconnect(),s=void 0}async function m(){const e=await u(),t=await e.getProviderState();return"undefined"!==typeof t.permissions.accountInteraction&&t.permissions.accountInteraction.address.toString()}async function v(e){const t=c;try{const n=(await t.getTransaction({hash:e})).transaction;if("undefined"===typeof n)return void console.error("undefined t");const r={sender:n.inMessage.src?.toString()??"",message:n.inMessage.body?.toString()??"",timestamp:n.createdAt,id:n.id.hash},o=await f(r.message);return"undefined"===typeof o?void console.error("undefined message"):(r.message=o.message,r)}catch(n){console.error(n)}}},6712:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=n(1001),s={},c=(0,i.Z)(s,o,a,!1,null,null,null),u=c.exports,l=n(2631),A=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("b-container",[t("b-row",{staticClass:"vh-100 text-center",attrs:{"align-v":"center"}},[t("b-col"),t("b-col",[t("CreateWall",{attrs:{msg:"Everscale Walls"}})],1),t("b-col")],1)],1)],1)},d=[],f=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.createWall()}}},[e._v("Create Wall")]),t("div",{staticClass:"mt-3",attrs:{id:"createWallInfo"},domProps:{innerHTML:e._s(e.createWallInfoMessage)}})],1)},p=[],g=n(3849),h=r["default"].extend({name:"CreateWall",props:{msg:String},data(){return{createWallInfoMessage:""}},methods:{async createWall(){const e=(0,g.ai)();"undefined"!==typeof e&&(this.createWallInfoMessage=`<a href="./#/wall/${e}">New wall</a> created`)}}}),m=h,v=(0,i.Z)(m,f,p,!1,null,null,null),w=v.exports,b=r["default"].extend({name:"HomeView",components:{CreateWall:w}}),y=b,P=(0,i.Z)(y,A,d,!1,null,null,null),C=P.exports;r["default"].use(l.Z);const I=[{path:"/",name:"home",component:C},{path:"/wall/:chatAddress",name:"wall",component:()=>n.e(77).then(n.bind(n,3077))},{path:"/post/:postId",name:"postView",component:()=>n.e(101).then(n.bind(n,7101))}],M=new l.Z({routes:I});var j=M,E=n(5996),D=n(9425);n(7024);r["default"].use(E.XG7),r["default"].use(D.A7),r["default"].config.productionTip=!1,new r["default"]({router:j,render:e=>e(u)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{77:"d6562bc6",101:"a24984cb"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ever-wall:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var A=u[l];if(A.getAttribute("src")==r||A.getAttribute("data-webpack")==t+a){s=A;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/EverWall/"}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkever_wall"]=self["webpackChunkever_wall"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6712)}));r=n.O(r)})();
//# sourceMappingURL=app.f183afa8.js.map