(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),c=a.n(o),r=(a(28),a(2)),i=(a(29),a(9)),s=a(3),u=function(){var e=Object(n.useContext)(O),t=e.state,a=e.dispatch,o=Object(i.f)();return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper white",style:{color:"black"}},l.a.createElement(s.b,{to:t?"/":"/signin",className:"brand-logo left"},"FzGram"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},t?[l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/profile"},"Profile")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/create"},"Create Post")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/myfollowingpost"},"My Following Posts")),l.a.createElement("li",null,l.a.createElement("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),a({type:"CLEAR"}),o.push("/signin")}},"Logout")))]:[l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/signin"},"Login")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/signup"},"SignUp")))])))},m=a(1),d=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(O),i=c.state;c.dispatch;Object(n.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e.posts),o(e.posts)}))}),[]);return l.a.createElement("div",{className:"Home"},a&&a.map((function(e){return console.log(e),l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement("img",{style:{width:"50px",height:"50px",borderRadius:"50%",marginBottom:"-20px"},src:e.postedBy.pic,alt:""}),l.a.createElement(s.b,{style:{marginBottom:"90px"},to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile"}," ",e.postedBy.name," "),e.postedBy._id===i._id&&l.a.createElement("i",{className:"material-icons icon_tambahan",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));o(t)}));var t}},"delete")),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.photo,alt:"foto"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("i",{className:"material-icons icon_tambahan",style:{color:"red"}},"favorite"),e.likes.includes(i._id)?l.a.createElement("i",{className:"material-icons icon_tambahan",onClick:function(){return t=e._id,void fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?Object(m.a)(Object(m.a)({},t),{},{likes:e.likes}):t}));o(t)})).catch((function(e){console.log(e)}));var t}},"thumb_down"):l.a.createElement("i",{className:"material-icons icon_tambahan",onClick:function(){return t=e._id,void fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?Object(m.a)(Object(m.a)({},t),{},{likes:e.likes}):t}));o(t)})).catch((function(e){console.log(e)}));var t}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," Likes"),l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"600"}},e.postedBy.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),console.log(t.target[0].value),n=t.target[0].value,l=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?Object(m.a)(Object(m.a)({},t),{},{comments:e.comments}):t}));o(t)})).catch((function(e){console.log(e)})),t.target.reset()}},l.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))},p=a(8),f=a.n(p),h=function(){var e=Object(n.useContext)(O),t=(e.state,e.dispatch),a=Object(i.f)(),o=l.a.useState(""),c=Object(r.a)(o,2),u=c[0],m=c[1],d=l.a.useState(""),p=Object(r.a)(d,2),h=p[0],g=p[1];return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"FzGram"),l.a.createElement("input",{type:"text",placeholder:"email",value:h,onChange:function(e){return g(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:u,onChange:function(e){return m(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(h)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:u,email:h})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?f.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),f.a.toast({html:"singin successfully",classes:"#43a047 green darken-1"}),a.push("/"))})).catch((function(e){console.log(e)})):f.a.toast({html:"Invalid Email",classes:"red darken-1"})}},"Login"),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"/signup"},"Don't have an account?"))))},g=(a(37),function(){var e=Object(i.f)(),t=l.a.useState(""),a=Object(r.a)(t,2),o=a[0],c=a[1],u=l.a.useState(""),m=Object(r.a)(u,2),d=m[0],p=m[1],h=l.a.useState(""),g=Object(r.a)(h,2),E=g[0],b=g[1],y=l.a.useState(""),v=Object(r.a)(y,2),j=v[0],w=v[1],O=l.a.useState(void 0),S=Object(r.a)(O,2),_=S[0],x=S[1];Object(n.useEffect)((function(){_&&N()}),[_]);var N=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,password:d,email:E,pic:_})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):f.a.toast({html:"Invalid Email",classes:"red darken-1"})},k=function(){j?function(){var e=new FormData;e.append("file",j),e.append("upload_preset","Fzgram"),e.append("cloud_name","fariz123"),fetch("https://api.cloudinary.com/v1_1/fariz123/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e),x(e.url)})).catch((function(e){console.log(e)}))}():N()};return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"FzGram"),l.a.createElement("input",{type:"text",placeholder:"name",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"email",value:E,onChange:function(e){return b(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:d,onChange:function(e){return p(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Upload Pic"),l.a.createElement("input",{type:"file",onChange:function(e){return w(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return k()}},"SignUp"),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"/signin"},"Already have an account?"))))}),E=function(){var e=l.a.useState([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(O),i=c.state,s=c.dispatch,u=l.a.useState(""),d=Object(r.a)(u,2),p=d[0],f=d[1];Object(n.useEffect)((function(){fetch("/myPost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(i),o(e.myposts)}))}),[]),console.log(i),Object(n.useEffect)((function(){if(p){var e=new FormData;e.append("file",p),e.append("upload_preset","Fzgram"),e.append("cloud_name","fariz123"),fetch("https://api.cloudinary.com/v1_1/fariz123/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e),fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(m.a)(Object(m.a)({},i),{},{pic:e.pic}))),s({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[p]);return l.a.createElement("div",{style:{maxWidth:"550px",margin:"0px auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"10px 0px",borderBottom:"1px solid grey"}},l.a.createElement("div",null,l.a.createElement("img",{src:i?i.pic:"loading",alt:"",style:{width:"160px",height:"160px",borderRadius:"80px"}})),l.a.createElement("div",null,l.a.createElement("h4",null,i?i.name:"Loading"),l.a.createElement("h4",null,i?i.email:"Loading"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h5",null,a.length," Posts"),l.a.createElement("h5",null,i?i.followers.length:"0"," followers"),l.a.createElement("h5",null,i?i.following.length:"0"," Following")),l.a.createElement("div",null),l.a.createElement("div",{className:"file-field input-field",style:{margin:"10px"}},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Update pic"),l.a.createElement("input",{type:"file",onChange:function(e){return t=e.target.files[0],void f(t);var t}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))))),l.a.createElement("div",{className:"gallery"},a&&a.map((function(e){return l.a.createElement("img",{key:e._id,className:"item",src:e.photo,alt:e.title})}))))},b=a(22),y=function(){var e=l.a.useState(null),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(O),s=c.state,u=c.dispatch,d=Object(i.g)().userId,p=l.a.useState(!s||!s.following.includes(d)),f=Object(r.a)(p,2),h=f[0],g=f[1];console.log(d),Object(n.useEffect)((function(){fetch("/user/".concat(d),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]);return l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{style:{maxWidth:"550px",margin:"0px auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"10px 0px",borderBottom:"1px solid grey"}},l.a.createElement("div",null,l.a.createElement("img",{src:a.user.pic,alt:"",style:{width:"160px",height:"160px",borderRadius:"80px"}})),l.a.createElement("div",null,l.a.createElement("h4",null,a.user.name),l.a.createElement("h4",null,a.user.email),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h5",null,a.posts.length," Posts"),l.a.createElement("h5",null,a.user.followers.length," followers"),l.a.createElement("h5",null,a.user.following.length," Following")),h?l.a.createElement("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:d})}).then((function(e){return e.json()})).then((function(e){console.log(e),u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:[].concat(Object(b.a)(t.user.followers),[e._id])})})})),g(!1)}))}},"Follow"):l.a.createElement("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:d})}).then((function(e){return e.json()})).then((function(e){console.log(e),u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){var a=t.user.followers.filter((function(t){return t!==e._id}));return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:a})})})),g(!0)}))}},"unFollow"))),l.a.createElement("div",{className:"gallery"},a.posts&&a.posts.map((function(e){return l.a.createElement("img",{key:e._id,className:"item",src:e.photo,alt:e.title})})))):l.a.createElement("h2",null,"Loading... : "))},v=function(){var e=Object(i.f)(),t=l.a.useState(""),a=Object(r.a)(t,2),o=a[0],c=a[1],s=l.a.useState(""),u=Object(r.a)(s,2),m=u[0],d=u[1],p=l.a.useState(""),h=Object(r.a)(p,2),g=h[0],E=h[1],b=l.a.useState(""),y=Object(r.a)(b,2),v=y[0],j=y[1];Object(n.useEffect)((function(){v&&fetch("/createPost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:o,body:m,pic:v})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:"created post successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[v]);return l.a.createElement("div",{className:"card input-field",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"}},l.a.createElement("input",{type:"text",placeholder:"title",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"body",value:m,onChange:function(e){return d(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Upload Image"),l.a.createElement("input",{type:"file",onChange:function(e){return E(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",g),e.append("upload_preset","Fzgram"),e.append("cloud_name","fariz123"),fetch("https://api.cloudinary.com/v1_1/fariz123/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e.url)})).catch((function(e){console.log(e)}))}()}},"Submit Post"))},j=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(O),i=c.state;c.dispatch;Object(n.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e.posts),o(e.posts)}))}),[]);return l.a.createElement("div",{className:"Home"},a&&a.map((function(e){return l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement("img",{style:{width:"50px",height:"50px",borderRadius:"50%",marginBottom:"-20px"},src:e.postedBy.pic,alt:""}),l.a.createElement(s.b,{to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile"}," ",e.postedBy.name," "),e.postedBy._id===i._id&&l.a.createElement("i",{className:"material-icons icon_tambahan",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));o(t)}));var t}},"delete")),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.photo,alt:"foto"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("i",{className:"material-icons icon_tambahan",style:{color:"red"}},"favorite"),e.likes.includes(i._id)?l.a.createElement("i",{className:"material-icons icon_tambahan",onClick:function(){return t=e._id,void fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?Object(m.a)(Object(m.a)({},t),{},{likes:e.likes}):t}));o(t)})).catch((function(e){console.log(e)}));var t}},"thumb_down"):l.a.createElement("i",{className:"material-icons icon_tambahan",onClick:function(){return t=e._id,void fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?Object(m.a)(Object(m.a)({},t),{},{likes:e.likes}):t}));o(t)})).catch((function(e){console.log(e)}));var t}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," Likes"),l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"600"}},e.postedBy.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),console.log(t.target[0].value),n=t.target[0].value,l=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id===e._id?Object(m.a)(Object(m.a)({},t),{},{comments:e.comments}):t}));o(t)})).catch((function(e){console.log(e)})),t.target.reset()}},l.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))},w=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(m.a)(Object(m.a)({},e),{},{following:t.payload.following,followers:t.payload.followers}):"UPDATEPIC"===t.type?Object(m.a)(Object(m.a)({},e),{},{pic:t.payload}):e},O=Object(n.createContext)(),S=function(){var e=Object(i.f)(),t=Object(n.useContext)(O),a=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));console.log(typeof t,t),t?a({type:"USER",payload:t}):e.push("/signin")}),[]),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(d,null)),l.a.createElement(i.a,{path:"/signin"},l.a.createElement(h,null)),l.a.createElement(i.a,{path:"/signup"},l.a.createElement(g,null)),l.a.createElement(i.a,{exact:!0,path:"/profile"},l.a.createElement(E,null)),l.a.createElement(i.a,{path:"/create"},l.a.createElement(v,null)),l.a.createElement(i.a,{path:"/profile/:userId"},l.a.createElement(y,null)),l.a.createElement(i.a,{path:"/myfollowingpost"},l.a.createElement(j,null)))};var _=function(){var e=Object(n.useReducer)(w,null),t=Object(r.a)(e,2),a=t[0],o=t[1];return l.a.createElement(O.Provider,{value:{state:a,dispatch:o}},l.a.createElement(s.a,null,l.a.createElement(u,null),l.a.createElement(S,null)))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6dae5392.chunk.js.map