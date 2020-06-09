(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(129),a=r.create({withCredentials:!0,headers:{"API-KEY":"ce1bac62-f4a8-400f-9300-57bf752b26a9"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},following:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowing:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(35),a=n(4),c={dialogs:[{id:1,name:"Alex",age:24},{id:2,name:"Svetlana",age:25},{id:3,name:"Sergey",age:26},{id:4,name:"Viktor",age:27},{id:5,name:"Maxim",age:24},{id:6,name:"Valera",age:23}],messages:[{id:1,message:"Hi"},{id:2,message:"What are you doing"},{id:3,message:"I love you"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},127:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return j}));var r=n(7),a=n.n(r),c=n(13),u=n(35),o=n(4),i=n(11),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O(!0)),r(v(e)),n.next=4,i.d.getUsers(e,t);case 4:c=n.sent,r(O(!1)),r(b(c.items)),r(E(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(j(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(n,e,i.d.following.bind(i.d),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(n,e,i.d.unFollowing.bind(i.d),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:"FOLLOW",userId:e}},g=function(e){return{type:"UNFOLLOW",userId:e}},b=function(e){return{type:"SET_USERS",users:e}},v=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},O=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},j=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:Object(u.a)(t.users)});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},131:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},133:function(e,t){},15:function(e,t,n){e.exports={nav:"Navbar_nav__2DL9u",item:"Navbar_item__1ujA3",activeLink:"Navbar_activeLink__shGuQ"}},159:function(e,t,n){e.exports=n(285)},164:function(e,t,n){},165:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(84),a=n(0),c=n.n(a),u=n(26),o=n.n(u),i=n(85),s=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,c.a.createElement("textarea",Object.assign({},t,a))),u&&c.a.createElement("span",{className:o.a.error},n.error))},l=function(e){var t=e.input,n=e.meta,a=n.touched,u=n.error,i=Object(r.a)(e,["input","meta"]),s=a&&u;return c.a.createElement("div",{className:o.a.formControl+" "+(s?o.a.error:"")},c.a.createElement("div",null,c.a.createElement("input",Object.assign({},t,i))),s&&c.a.createElement("span",{className:o.a.error},u))},f=function(e,t,n,r,a){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,{name:e,placeholder:t,component:n,validate:r,type:a})," ",u)}},26:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1HbzO",error:"FormsControls_error__1dmJV",formSummaryError:"FormsControls_formSummaryError__y5sh_"}},285:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),c=n(62),u=n.n(c),o=(n(164),n(50)),i=n(51),s=n(53),l=n(52),f=(n(165),n(15)),d=n.n(f),m=n(19),p=function(){return a.a.createElement("nav",{className:d.a.nav},a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/profile/",activeClassName:d.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:d.a.activeLink},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:d.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:d.a.activeLink},"\u041c\u0443\u0437\u044b\u043a\u0430")),a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:d.a.activeLink},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:d.a.activeLink},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),a.a.createElement("div",null))},h=n(10),g=n(66),b=n.n(g),v=function(e){var t=e.login,n=e.isAuth,r=e.authLogout;return a.a.createElement("header",{className:b.a.header},a.a.createElement("img",{alt:"img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"}),a.a.createElement("div",{className:b.a.loginBlock},n?a.a.createElement("div",{className:b.a.loginName},t," -> ",a.a.createElement("button",{onClick:r},"\u0412\u044b\u0439\u0442\u0438")):a.a.createElement(m.b,{to:"/login"},"Login")))},E=n(21),O=n(7),j=n.n(O),_=n(13),S=n(4),w=n(11),y=n(31),C={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},T=function(){return function(){var e=Object(_.a)(j.a.mark((function e(t){var n,r,a,c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,u=r.login,t(k(a,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(_.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(N(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},N=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},x=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(v,this.props)}}]),n}(a.a.Component),U=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:T,authLogout:function(){return function(){var e=Object(_.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(x),A=n(125),I=n(25),F=n(63),G=n(26),R=n.n(G),z=Object(A.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(I.c)("email","Email",I.a,[F.c],null),Object(I.c)("password","Password",I.a,[F.c],"Password"),Object(I.c)("rememberMe",null,I.a,null,"checkbox","remember me"),r&&a.a.createElement("img",{src:r,alt:""}),r&&Object(I.c)("captcha","Symbols from image",I.a,[F.c],null,null),n&&a.a.createElement("div",{className:R.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Log In")))})),D=Object(E.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{authLogin:function(e,t,n,r){return function(){var a=Object(_.a)(j.a.mark((function a(c){var u,o;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n,r);case 2:0===(u=a.sent).data.resultCode?c(T()):(10===u.data.resultCode&&c(L()),o=u.data.messages.length>0?u.data.messages[0]:"Some error",c(Object(y.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(h.a,{to:"profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(z,{onSubmit:function(t){e.authLogin(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),H={initialized:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},W=n(91),B=n(9),J=n(92),V=n(124),q={},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;arguments.length>1&&arguments[1];return e},K=n(127),Q=n(132),Y=n(126),$=(n(133),Object(B.c)({profilePage:J.b,dialogsPage:V.a,sidebar:Z,usersPage:K.a,auth:P,form:Y.a,app:M})),X=Object(B.e)($,Object(B.a)(Q.a));window.store=X;var ee=X,te=a.a.lazy((function(){return n.e(5).then(n.bind(null,302))})),ne=a.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),re=a.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),ae=a.a.lazy((function(){return n.e(8).then(n.bind(null,303))})),ce=a.a.lazy((function(){return n.e(6).then(n.bind(null,298))})),ue=a.a.lazy((function(){return n.e(7).then(n.bind(null,299))})),oe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(U,null),a.a.createElement(p,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(re,null)}}),a.a.createElement(h.b,{path:"/dialogs",render:function(){return a.a.createElement(te,null)}}),a.a.createElement(h.b,{path:"/news",render:function(){return a.a.createElement(ce,null)}}),a.a.createElement(h.b,{path:"/music",render:function(){return a.a.createElement(ae,null)}}),a.a.createElement(h.b,{path:"/settings",render:function(){return a.a.createElement(ue,null)}}),a.a.createElement(h.b,{path:"/users",render:function(){return a.a.createElement(ne,null)}}),a.a.createElement(h.b,{path:"/login",render:function(){return a.a.createElement(D,null)}})))):a.a.createElement(W.a,null)}}]),n}(a.a.Component),ie=Object(B.d)(h.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(T());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(oe),se=function(e){return a.a.createElement(m.a,null,a.a.createElement(E.a,{store:ee},a.a.createElement(ie,null)))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},c=function(e){return function(t){if(t.length<e)return"Minimum length is ".concat(e," symbols")}}},66:function(e,t,n){e.exports={header:"Header_header__3s_op",loginBlock:"Header_loginBlock__h2dHq",loginName:"Header_loginName__2AwG6"}},91:function(e,t,n){"use strict";var r=n(131),a=n.n(r),c=n(0),u=n.n(c);t.a=function(e){return u.a.createElement("div",null,u.a.createElement("img",{alt:"img",src:a.a}))}},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return g}));var r=n(7),a=n.n(r),c=n(13),u=n(35),o=n(4),i=n(11),s=n(31),l={posts:[{id:1,message:"Hi, how are you?",LikeCount:12},{id:2,message:"This is my first message!",LikeCount:11}],profile:null,status:""},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n(E(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(v(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.next=3,i.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(f(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},g=function(e){return{type:"ADD_POST",newPostText:e}},b=function(e){return{type:"SET_STATUS",status:e}},v=function(e){return{type:"SET_PHOTO",photos:e}},E=function(e){return{type:"SET_USER_PROFILE",profile:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:3,message:t.newPostText,LikeCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:[e.posts.filter((function(e){return e.id!==t.postId}))]});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"SET_PHOTO":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[159,1,2]]]);
//# sourceMappingURL=main.66728aa7.chunk.js.map