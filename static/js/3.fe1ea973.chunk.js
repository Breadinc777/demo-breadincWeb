(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{286:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(50),r=a(51),s=a(53),o=a(52),u=a(0),i=a.n(u),c=a(10),l=a(21),p=function(t){return{isAuth:t.auth.isAuth}},m=function(t){var e=function(e){Object(s.a)(u,e);var a=Object(o.a)(u);function u(){return Object(n.a)(this,u),a.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(t,this.props):i.a.createElement(c.a,{to:"/login"})}}]),u}(i.a.Component);return Object(l.b)(p)(e)}},288:function(t,e,a){t.exports=a.p+"static/media/user.1897f975.png"},289:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(93);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(i){r=!0,s=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw s}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2JH-O",wallpaper:"ProfileInfo_wallpaper__36WJZ"}},293:function(t,e,a){t.exports={statusBar:"profileStatus_statusBar__3x-mi"}},294:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__21x7q",posts:"MyPosts_posts__5Pr6l"}},295:function(t,e,a){t.exports={item:"Post_item__2c51z",like:"Post_like__3R7Gt"}},300:function(t,e,a){"use strict";a.r(e);var n=a(50),r=a(51),s=a(53),o=a(52),u=a(0),i=a.n(u),c=a(292),l=a.n(c),p=a(91),m=a(289),f=a(293),d=a.n(f),b=function(t){var e=Object(u.useState)(!1),a=Object(m.a)(e,2),n=a[0],r=a[1],s=Object(u.useState)(t.status),o=Object(m.a)(s,2),c=o[0],l=o[1];Object(u.useEffect)((function(){l(t.status)}),[t.status]);return i.a.createElement("div",{className:d.a.statusBar},!n&&i.a.createElement("div",null,i.a.createElement("span",{onClick:function(){r(!0)}},t.status||"No status")),n&&i.a.createElement("div",null,i.a.createElement("input",{onBlur:function(){r(!1),t.updateUserStatus(c)},autoFocus:!0,onChange:function(t){l(t.currentTarget.value)},value:c})))},h=a(288),v=a.n(h),E=function(t){var e=t.profile,a=t.status,n=t.updateUserStatus;return e?i.a.createElement("div",null,i.a.createElement("div",{className:l.a.descriptionBlock},i.a.createElement("img",{alt:"",src:null!=e.photos.large?e.photos.large:v.a}),i.a.createElement(b,{status:a,updateUserStatus:n}),i.a.createElement("span",null))):i.a.createElement(p.a,null)},j=a(92),y=a(33),O=a(294),g=a.n(O),k=a(295),P=a.n(k),_=function(t){return i.a.createElement("div",{className:P.a.item},i.a.createElement("img",{src:"https://tvbesedka.com/upload/2018/8/17/0/14/28/32634856-ec7c-4ef2-9d04-c1a2325dac76.jpg",alt:""}),t.message,i.a.createElement("div",null,i.a.createElement("span",{className:P.a.like}," Likes ")," ",t.likeCount))},S=a(84),U=a(125),x=a(80),w=a(34),B=i.a.memo((function(t){var e=Object(y.a)(t.posts).reverse().map((function(t){return i.a.createElement(_,{message:t.message,key:t.id,likeCount:t.LikeCount})}));return i.a.createElement("div",{className:g.a.postsBlock},i.a.createElement("h3",null,"My Posts"),i.a.createElement(I,{onSubmit:function(e){t.addPost(e.newPostText)}}),i.a.createElement("div",{className:g.a.posts},e))})),A=Object(x.a)(20),C=Object(x.b)(2),I=Object(U.a)({form:"addPostForm"})((function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement("div",null,i.a.createElement(S.a,{placeholder:"Type your message",component:w.b,name:"newPostText",validate:[x.c,A,C]}),i.a.createElement("div",null,i.a.createElement("button",null,"Add post"))))})),N=B,T=a(21),J=Object(T.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(N),M=function(t){return i.a.createElement("div",null,i.a.createElement(E,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),i.a.createElement(J,null))},z=a(10),F=a(286),L=a(8),q=function(t){Object(s.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return i.a.createElement(M,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),a}(i.a.Component);e.default=Object(L.d)(Object(T.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:j.c,getUserStatus:j.d,updateUserStatus:j.e}),z.f,F.a)(q)}}]);
//# sourceMappingURL=3.fe1ea973.chunk.js.map