"use strict";(self["webpackChunkever_wall"]=self["webpackChunkever_wall"]||[]).push([[320],{320:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("nav",{staticClass:"text-center mt-1"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"text-primary"},[t._v("Post ID: "+t._s(this.$route.params.postId))]),e("div",{staticClass:"text-danger"},[t._v(t._s(t.error))]),e("b-list-group",{staticClass:"mt-5"},t._l(t.posts,(function(s){return e("b-list-group-item",{key:s.message},[e("div",[t._v(t._s(s.message))]),e("br"),e("div",{staticClass:"text-secondary d-flex justify-content-between"},[e("div",[t._v("From: "+t._s(s.sender.slice(0,6)+"..."+s.sender.slice(62)))]),e("div",[t._v(" "+t._s(new Date(1e3*s.timestamp).toLocaleDateString("ru-RU")+" "+new Date(1e3*s.timestamp).toLocaleTimeString("en-US"))+" ")])])])})),1)],1)])},a=[],n=s(6369),i=s(3849),o=n["default"].extend({name:"PostView",data(){return{posts:[],error:""}},mounted(){(0,i.xl)(this.$route.params.postId).then((t=>{"undefined"===typeof t?this.error="Not found":this.posts=[t]}))}}),l=o,u=s(1001),d=(0,u.Z)(l,r,a,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=320.d94248a5.js.map