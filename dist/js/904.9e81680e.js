"use strict";(self["webpackChunkever_wall"]=self["webpackChunkever_wall"]||[]).push([[904],{961:function(t,s,e){e.d(s,{Z:function(){return m}});var a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("nav",{staticClass:"text-right mt-2",staticStyle:{"text-align":"right"}},[s("span",{staticClass:"btn-link text-primary",staticStyle:{cursor:"pointer","padding-right":"2em"},on:{click:function(s){return t.auth()}}},[t._v(t._s(t.ls))])])])},i=[],n=e(6369),r=e(3849),l=n["default"].extend({name:"LoginLogout",data(){return{ls:null}},methods:{subscriber(){(0,r.subscriber)().then((t=>{this.ls=t.data.username}))},async auth(){if(!1===await(0,r.fD)()){await(0,r.x4)();const t=await(0,r.fD)();"string"===typeof t&&(this.ls=`${t.slice(0,6)}...${t.slice(62)} ⎆`)}else(0,r.kS)().then((()=>{this.ls="Connect"}))}},async created(){const t=await(0,r.fD)();this.ls=!1===t?"Connect":`${t.slice(0,6)}...${t.slice(62)} ⎆`}}),o=l,c=e(1001),u=(0,c.Z)(o,a,i,!1,null,null,null),m=u.exports},9904:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("div",[s("LoginLogout")],1),s("nav",{staticClass:"text-center mt-1"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"text-primary"},[t._v("Wall address: "+t._s(this.$route.params.chatAddress))]),s("b-form",{staticClass:"mt-3"},[s("b-form-group",[s("b-form-textarea",{staticClass:"mt-3 mb-3",attrs:{placeholder:"Write something ... "},model:{value:t.message,callback:function(s){t.message=s},expression:"message"}})],1),s("b-button",{attrs:{variant:"outline-primary"},on:{click:function(s){return t.submit()}}},[t._v("submit")])],1),s("b-list-group",{staticClass:"mt-5"},t._l(t.posts,(function(e){return s("b-list-group-item",{key:e.message},[s("div",[t._v(t._s(e.message))]),s("br"),s("div",{staticClass:"text-secondary d-flex justify-content-between"},[s("div",[t._v("From: "+t._s(e.sender.slice(0,6)+"..."+e.sender.slice(62)))]),s("div",[s("a",{attrs:{href:"#/post/"+e.id}},[t._v(" "+t._s(new Date(1e3*e.timestamp).toLocaleDateString("ru-RU")+" "+new Date(1e3*e.timestamp).toLocaleTimeString("en-US"))+" ")])])])])})),1)],1)])},i=[],n=e(6369),r=e(3849),l=e(961),o=n["default"].extend({name:"WallView",props:{msg:String},data(){return{message:"",posts:[]}},methods:{async submit(){""!==this.message?(0,r.bG)(this.message,this.$route.params.chatAddress).then((()=>{this.message="",(0,r.Jq)(this.$route.params.chatAddress).then((t=>{"undefined"===typeof t?alert("Something went wrong"):this.posts=t}))})):alert("Please, write something")}},async mounted(){this.posts=await(0,r.Jq)(this.$route.params.chatAddress),console.log(this.posts)},components:{LoginLogout:l.Z}}),c=o,u=e(1001),m=(0,u.Z)(c,a,i,!1,null,null,null),d=m.exports}}]);
//# sourceMappingURL=904.9e81680e.js.map