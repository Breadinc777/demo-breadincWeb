(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(129),a=r.create({withCredentials:!0,headers:{"API-KEY":"ce1bac62-f4a8-400f-9300-57bf752b26a9"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},following:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowing:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(33),a=n(4),u={dialogs:[{id:1,name:"Alex",age:24},{id:2,name:"Svetlana",age:25},{id:3,name:"Sergey",age:26},{id:4,name:"Viktor",age:27},{id:5,name:"Maxim",age:24},{id:6,name:"Valera",age:23}],messages:[{id:1,message:"Hi"},{id:2,message:"What are you doing"},{id:3,message:"I love you"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},127:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return j}));var r=n(8),a=n.n(r),u=n(14),c=n(33),o=n(4),i=n(12),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O(!0)),r(v(e)),n.next=4,i.c.getUsers(e,t);case 4:u=n.sent,r(O(!1)),r(h(u.items)),r(E(u.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(u(n)),t(j(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(n,e,i.c.following.bind(i.c),b);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(n,e,i.c.unFollowing.bind(i.c),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return{type:"FOLLOW",userId:e}},g=function(e){return{type:"UNFOLLOW",userId:e}},h=function(e){return{type:"SET_USERS",users:e}},v=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},O=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},j=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:Object(c.a)(t.users)});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},131:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},133:function(e,t){},15:function(e,t,n){e.exports={nav:"Navbar_nav__2DL9u",item:"Navbar_item__1ujA3",activeLink:"Navbar_activeLink__shGuQ"}},159:function(e,t,n){e.exports=n(285)},164:function(e,t,n){},165:function(e,t,n){},25:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1HbzO",error:"FormsControls_error__1dmJV",formSummaryError:"FormsControls_formSummaryError__y5sh_"}},285:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),u=n(62),c=n.n(u),o=(n(164),n(50)),i=n(51),s=n(53),l=n(52),f=(n(165),n(15)),m=n.n(f),d=n(19),p=function(e){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/profile/",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/news",activeClassName:m.a.activeLink},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/settings",activeClassName:m.a.activeLink},"Settings")),a.a.createElement("div",null))},b=n(10),g=n(87),h=n.n(g),v=function(e){var t=e.login,n=e.isAuth,r=e.authLogout;return a.a.createElement("header",{className:h.a.header},a.a.createElement("img",{alt:"img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"}),a.a.createElement("div",{className:h.a.loginBlock},n?a.a.createElement("div",null,t," - ",a.a.createElement("button",{onClick:r},"Log out")):a.a.createElement(d.b,{to:"/login"},"Login")))},E=n(21),O=n(8),j=n.n(O),w=n(14),S=n(4),_=n(12),y=n(40),L={id:null,email:null,login:null,isAuth:!1},T=function(){return function(){var e=Object(w.a)(j.a.mark((function e(t){var n,r,a,u,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,u=r.email,c=r.login,t(k(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},N=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(v,this.props)}}]),n}(a.a.Component),P=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:T,authLogout:function(){return function(){var e=Object(w.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),I=n(125),x=n(34),A=n(80),F=n(25),U=n.n(F),G=Object(I.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(x.c)("email","Email",x.a,[A.c],null),Object(x.c)("password","Password",x.a,[A.c],"Password"),Object(x.c)("rememberMe",null,x.a,null,"checkbox","remember me"),n&&a.a.createElement("div",{className:U.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Log In")))})),R=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{authLogin:function(e,t,n){return function(){var r=Object(w.a)(j.a.mark((function r(a){var u,c;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(u=r.sent).data.resultCode?a(T()):(c=u.data.messages.length>0?u.data.messages[0]:"Some error",a(Object(y.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(b.a,{to:"profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(G,{onSubmit:function(t){e.authLogin(t.email,t.password,t.rememberMe)}}))})),z={initialized:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},M=n(91),H=n(9),W=n(92),B=n(124),J={},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;arguments.length>1&&arguments[1];return e},q=n(127),Z=n(132),K=n(126),Q=(n(133),Object(H.c)({profilePage:W.b,dialogsPage:B.a,sidebar:V,usersPage:q.a,auth:C,form:K.a,app:D})),Y=Object(H.e)(Q,Object(H.a)(Z.a));window.store=Y;var $=Y,X=a.a.lazy((function(){return n.e(5).then(n.bind(null,302))})),ee=a.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),te=a.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),ne=a.a.lazy((function(){return n.e(8).then(n.bind(null,303))})),re=a.a.lazy((function(){return n.e(6).then(n.bind(null,298))})),ae=a.a.lazy((function(){return n.e(7).then(n.bind(null,299))})),ue=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(P,null),a.a.createElement(p,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(b.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(te,null)}}),a.a.createElement(b.b,{path:"/dialogs",render:function(){return a.a.createElement(X,null)}}),a.a.createElement(b.b,{path:"/news",render:function(){return a.a.createElement(re,null)}}),a.a.createElement(b.b,{path:"/music",render:function(){return a.a.createElement(ne,null)}}),a.a.createElement(b.b,{path:"/settings",render:function(){return a.a.createElement(ae,null)}}),a.a.createElement(b.b,{path:"/users",render:function(){return a.a.createElement(ee,null)}}),a.a.createElement(b.b,{path:"/login",render:function(){return a.a.createElement(R,null)}})))):a.a.createElement(M.a,null)}}]),n}(a.a.Component),ce=Object(H.d)(b.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(T());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ue),oe=function(e){return a.a.createElement(d.a,null,a.a.createElement(E.a,{store:$},a.a.createElement(ce,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(83),a=n(0),u=n.n(a),c=n(25),o=n.n(c),i=n(84),s=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),c=n.touched&&n.error;return u.a.createElement("div",{className:o.a.formControl+" "+(c?o.a.error:"")},u.a.createElement("div",null,u.a.createElement("textarea",Object.assign({},t,a))),c&&u.a.createElement("span",{className:o.a.error},n.error))},l=function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,i=Object(r.a)(e,["input","meta"]),s=a&&c;return u.a.createElement("div",{className:o.a.formControl+" "+(s?o.a.error:"")},u.a.createElement("div",null,u.a.createElement("input",Object.assign({},t,i))),s&&u.a.createElement("span",{className:o.a.error},c))},f=function(e,t,n,r,a){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return u.a.createElement("div",null,u.a.createElement(i.a,{name:e,placeholder:t,component:n,validate:r,type:a})," ",c)}},80:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},u=function(e){return function(t){if(t.length<e)return"Minimum length is ".concat(e," symbols")}}},87:function(e,t,n){e.exports={header:"Header_header__3s_op",loginBlock:"Header_loginBlock__h2dHq"}},91:function(e,t,n){"use strict";var r=n(131),a=n.n(r),u=n(0),c=n.n(u);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("img",{alt:"img",src:a.a}))}},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(8),a=n.n(r),u=n(14),c=n(33),o=n(4),i=n(12),s={posts:[{id:1,message:"Hi, how are you?",LikeCount:12},{id:2,message:"This is my first message!",LikeCount:11}],profile:null,status:""},l=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(g(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return{type:"ADD_POST",newPostText:e}},b=function(e){return{type:"SET_STATUS",status:e}},g=function(e){return{type:"SET_PHOTO",photos:e}},h=function(e){return{type:"SET_USER_PROFILE",profile:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:3,message:t.newPostText,LikeCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:[e.posts.filter((function(e){return e.id!==t.postId}))]});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"SET_PHOTO":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[159,1,2]]]);
//# sourceMappingURL=main.820797de.chunk.js.map