"use strict";(self["webpackChunkever_wall"]=self["webpackChunkever_wall"]||[]).push([[242],{242:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",[e("LoginLogout",{attrs:{authProp:t.authTrigger}})],1),e("nav",{staticClass:"text-center mt-1"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"text-primary"},[t._v("Wall address: "+t._s(this.$route.params.chatAddress))]),e("b-form",{staticClass:"mt-3"},[e("b-form-group",[e("b-form-textarea",{staticClass:"mt-3 mb-3",attrs:{placeholder:"Write something ... "},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.submit()}}},[t._v("submit"),t.loader?e("b-spinner",{staticStyle:{"margin-left":"0.3em"},attrs:{small:""}}):t._e()],1)],1),e("b-list-group",{staticClass:"mt-5"},t._l(t.posts,(function(s){return e("b-list-group-item",{key:s.id},[e("div",[t._v(t._s(s.message))]),e("br"),e("div",{staticClass:"text-secondary d-flex justify-content-between"},[e("div",[t._v("From: "+t._s(s.sender.slice(0,6)+"..."+s.sender.slice(62)))]),e("div",[e("a",{attrs:{href:"./#/post/"+s.id}},[t._v(" "+t._s(new Date(1e3*s.timestamp).toLocaleDateString("ru-RU")+" "+new Date(1e3*s.timestamp).toLocaleTimeString("en-US"))+" ")])])])])})),1)],1)])},i=[],r=s(6369),n=s(3849),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("nav",{staticClass:"text-right mt-2",staticStyle:{"text-align":"right"}},[e("span",{staticClass:"btn-link text-primary",staticStyle:{cursor:"pointer","padding-right":"2em"},on:{click:function(e){return t._loginLogout()}}},[t._v(t._s(t.ls))])])])},l=[],u=r["default"].extend({name:"LoginLogout",props:["authProp"],data(){return{ls:null}},methods:{async authorization(){const t=await(0,n.fD)();this.ls=!1===t?"Connect":`${t.slice(0,6)}...${t.slice(62)} ⎆`},async _loginLogout(){!1===await(0,n.fD)()?(await(0,n.x4)(),await this.authorization()):(0,n.kS)().then((()=>{this.ls="Connect"}))}},async created(){await this.authorization()},watch:{authProp:function(){this.authorization()}}}),c=u,h=s(1001),d=(0,h.Z)(c,o,l,!1,null,null,null),m=d.exports,g=r["default"].extend({name:"WallView",props:{msg:String},data(){return{message:"",posts:[],authTrigger:!1,loader:!1}},methods:{async submit(){if(this.loader=!0,""===this.message)return alert("Please, write something"),void(this.loader=!1);(0,n.bG)(this.message,this.$route.params.chatAddress).then((()=>{this.authTrigger=!this.authTrigger,this.message="",(0,n.Jq)(this.$route.params.chatAddress).then((t=>{"undefined"===typeof t?alert("Something went wrong"):(this.posts=t,this.loader=!1)}))})).finally((()=>{this.loader=!1}))}},async mounted(){const t=await(0,n.Jq)(this.$route.params.chatAddress);"undefined"!==typeof t&&(this.posts=t)},components:{LoginLogout:m}}),p=g,f=(0,h.Z)(p,a,i,!1,null,null,null),v=f.exports}}]);
//# sourceMappingURL=242.bc4f322a.js.map