(this["webpackJsonpreact-auth-client-done-v2"]=this["webpackJsonpreact-auth-client-done-v2"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo_200x200.cbe7845f.png"},31:function(e,t,a){e.exports=a.p+"static/media/Success.257f5cc9.jpg"},36:function(e,t,a){e.exports=a(64)},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(33),o=a.n(r),l=a(1),c=a(2),s=a(4),u=a(3),m=a(5),h=a(14),p=a(12),d=a(6),g=a(13),b=a.n(g),f=new(function(){function e(){Object(l.a)(this,e),this.auth=b.a.create({baseURL:"https://habitu-app.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.email,n=e.password;return this.auth.post("/auth/signup",{username:t,email:a,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.email,n=e.password;return this.auth.post("/auth/login",{username:t,email:a,password:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),v=i.a.createContext(),E=v.Consumer,O=v.Provider,j=function(e){return function(t){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){var t=this;return i.a.createElement(E,null,(function(a){var n=a.login,r=a.signup,o=a.user,l=a.logout,c=a.isLoggedin,s=a.isLoading;return i.a.createElement(e,Object.assign({login:n,signup:r,user:o,logout:l,isLoggedin:c,isLoading:s},t.props))}))}}]),a}(i.a.Component)},y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.email,i=e.password;f.signup({username:t,email:n,password:i}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e){var t=e.username,n=e.password;f.login({username:t,password:n}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){f.logout().then((function(){return a.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,r=this.login,o=this.logout,l=this.signup;return i.a.createElement(O,{value:{isLoading:t,isLoggedin:a,user:n,login:r,logout:o,signup:l}},this.props.children)}}]),t}(i.a.Component),w=(a(31),j(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",email:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,i=t.email,r=t.password;a.props.signup({username:n,email:i,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password;return i.a.createElement("div",null,i.a.createElement(d.b,{to:"/login"}," ",i.a.createElement("button",{className:"login-btn"},"Login")," "),i.a.createElement("div",{className:"signup-wrapper"},i.a.createElement("h1",null,"Join and start your new habit"),i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("input",{type:"text",name:"username",placeholder:"Username",maxLength:"12",value:t,onChange:this.handleChange}),i.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a,onChange:this.handleChange}),i.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:n,onChange:this.handleChange}),i.a.createElement("input",{id:"signup-btn",type:"submit",value:"Signup"})),i.a.createElement("div",{className:"login-link"},i.a.createElement("p",null,"Already have an account?"),i.a.createElement(d.b,{to:"/login"},"Login"))))}}]),t}(n.Component))),C=j(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,i=t.password;a.props.login({username:n,password:i})},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return i.a.createElement("div",null,i.a.createElement(d.b,{to:"/signup"}," ",i.a.createElement("button",{className:"signup-btn"},"Signup")," "),i.a.createElement("div",{className:"login-wrapper"},i.a.createElement("h1",null,"Login"),i.a.createElement("form",{onSubmit:this.handleFormSubmit},i.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),i.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange}),i.a.createElement("input",{id:"login-btn",type:"submit",value:"Login"})),i.a.createElement("div",{className:"signup-link"},i.a.createElement("p",null,"No account?"),i.a.createElement(d.b,{to:"/signup"}," Sign Up"))))}}]),t}(n.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Private Route"))}}]),t}(n.Component),L=a(21),S=a.n(L),N=j(function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedin;return i.a.createElement("div",{className:"nav-wrapper"},n?i.a.createElement("div",{className:"logo-nav"},i.a.createElement("img",{className:"logo",src:S.a,alt:""}),i.a.createElement("div",{className:"username"},i.a.createElement("p",null,"Username:"),i.a.createElement("p",null,t.username)),i.a.createElement("button",{className:"logout-btn",onClick:a},"Logout")):i.a.createElement("div",{className:"logo-nav"},i.a.createElement("img",{className:"logo",src:S.a,alt:""})))}}]),t}(n.Component)),x=a(17);var D=j((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,r=Object(x.a)(e,["component","isLoggedin","isLoading"]);return n?i.a.createElement("h1",null,"Loading"):i.a.createElement(h.b,Object.assign({},r,{render:function(e){return a?i.a.createElement(h.a,{to:"/today"}):i.a.createElement(t,e)}}))}));var U=j((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,r=Object(x.a)(e,["component","isLoggedin","isLoading"]);return n?i.a.createElement("h1",null,"Loading"):i.a.createElement(h.b,Object.assign({},r,{render:function(e){return a?i.a.createElement(t,e):i.a.createElement(h.a,{to:"/login"})}}))})),F=new(function(){function e(){Object(l.a)(this,e),this.auth=b.a.create({baseURL:"https://habitu-app.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"imageUpload",value:function(e){return this.auth.post("/cloudinary",e).then((function(e){return e.data}))}}]),e}()),P=new(function(){function e(){Object(l.a)(this,e),this.habit=b.a.create({baseURL:"https://habitu-app.herokuapp.com/habits",withCredentials:!0})}return Object(c.a)(e,[{key:"createOne",value:function(e){return this.habit.post("/",e).then((function(e){return e.data}))}},{key:"getOne",value:function(e){return this.habit.get("/".concat(e)).then((function(e){return e.data}))}},{key:"updateOne",value:function(e,t){return this.habit.put("/".concat(e),t).then((function(e){return e.data}))}}]),e}()),A=new(function(){function e(){Object(l.a)(this,e),this.user=b.a.create({baseURL:"https://habitu-app.herokuapp.com",withCredentials:!0})}return Object(c.a)(e,[{key:"getOne",value:function(e){return this.user.get("/user/".concat(e)).then((function(e){return e.data}))}},{key:"updateTheHabits",value:function(e,t){return this.user.put("/user/".concat(e),{habitsId:t}).then((function(e){var t=e.data;return console.log(t)}))}},{key:"showHabits",value:function(e){return this.user.get("/user/".concat(e)).then((function(e){return e.data}))}}]),e}()),H=j(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={img:"",title:"",description:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.img,i=t.title,r=t.description;P.createOne({img:n,title:i,description:r}).then((function(e){console.log(e);var t=a.props.user._id;console.log(t),A.updateTheHabits(t,e._id)}))},a.handlePhotoChange=function(e){console.log(e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("photo",t),F.imageUpload(n).then((function(e){console.log(e),a.setState({img:e})})),console.log(a.state)},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.img,t.title),n=t.description;return i.a.createElement("div",null,i.a.createElement("button",null,"Go back"),i.a.createElement("h1",null,"Create a new habit"),i.a.createElement("img",{style:{width:200,height:"auto"},src:this.state.img,alt:""}),i.a.createElement("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data"},i.a.createElement("label",null,"Photo:"),i.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handlePhotoChange(t)}}),i.a.createElement("label",null,"Title:"),i.a.createElement("input",{type:"text",name:"title",value:a,onChange:this.handleChange}),i.a.createElement("label",null,"Description:"),i.a.createElement("input",{type:"text",name:"description",value:n,onChange:this.handleChange}),i.a.createElement("input",{type:"submit",value:"Create"})))}}]),t}(n.Component)),_=j(function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"empty-list-wrapper"},"        ",i.a.createElement("h3",{className:"emptylist-header"},"Create your new habit starting today!"),i.a.createElement(d.b,{to:"add-habit"},i.a.createElement("p",{className:"add-btn-empty"},i.a.createElement("i",{class:"fas fa-plus-circle"}))))}}]),t}(n.Component)),R=j(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={listOfHabits:[]},a.getAllHabits=function(){var e=a.props.user._id;A.showHabits(e).then((function(e){console.log("USER",e),a.setState({listOfHabits:e.habits})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllHabits()}},{key:"render",value:function(){var e=this.state.listOfHabits;return i.a.createElement("div",{className:"habit-list"},e.length?i.a.createElement("div",null,e.map((function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"habit-tile",key:e._id},i.a.createElement("img",{src:e.img,alt:""}),i.a.createElement(d.b,{to:"/single-habit/".concat(e._id)},i.a.createElement("h3",null,e.title)),i.a.createElement("label",{class:"container"},i.a.createElement("input",{type:"checkbox",checked:!0}),i.a.createElement("span",{class:"checkmark"}))),i.a.createElement("div",null))})),i.a.createElement(d.b,{to:"add-habit"}," ",i.a.createElement("p",{className:"add-btn-full"},i.a.createElement("i",{class:"fas fa-plus-circle"}))),"                       "):i.a.createElement(_,null))}}]),t}(n.Component)),T=j(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.img,i=t.title,r=t.description,o=a.props.match.params.id;P.updateOne(o,{img:n,title:i,description:r}).then((function(e){console.log(e)}))},a.handlePhotoChange=function(e){console.log(e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("photo",t),F.imageUpload(n).then((function(e){console.log(e),a.setState({img:e})})),console.log(a.state)},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a.state={img:"",title:"",description:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(t),P.getOne(t).then((function(t){console.log(t);var a=t.img,n=t.title,i=t.description;e.setState({img:a,title:n,description:i})}))}},{key:"render",value:function(){var e=this,t=this.state;t.img,t.title,t.description;return i.a.createElement("div",{className:"edit-habit-wrapper"},i.a.createElement(d.b,{className:"goback-btn"},i.a.createElement("i",{class:"fas fa-arrow-circle-left"})),i.a.createElement("h1",null,"Edit the habit"),i.a.createElement("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data"},i.a.createElement("label",null,"Photo:"),i.a.createElement("input",{className:"input-img",type:"file",name:"photo",onChange:function(t){return e.handlePhotoChange(t)}}),i.a.createElement("div",{className:"img-edit"},i.a.createElement("img",{style:{width:"auto",height:"140px"},src:this.state.img,alt:""})),i.a.createElement("label",null,"Title:"),i.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),i.a.createElement("label",null,"Description:"),i.a.createElement("textarea",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange,rows:"7",cols:"30"},"Short description."),i.a.createElement("input",{id:"save-btn",type:"submit",value:"Save"})),i.a.createElement("button",{id:"delete-btn"},"Delete habit"))}}]),t}(n.Component)),I=j(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={img:"",title:"",description:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.habitId;console.log(t),P.getOne(t).then((function(t){console.log(t);var a=t.img,n=t.title,i=t.description;e.setState({img:a,title:n,description:i})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"onehabit-wrapper",key:this.state._id},i.a.createElement("h3",{id:"onehabit-title"},this.state.title),i.a.createElement("img",{id:"onehabit-img",src:this.state.img,alt:""}),i.a.createElement("p",{id:"onehabit-desc"},this.state.description)),i.a.createElement("button",{id:"delete-btn"},"Delete habit"))}}]),t}(n.Component)),M=j(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={img:"",title:"",description:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.habitId;console.log(t),P.getOne(t).then((function(t){console.log(t);var a=t.img,n=t.title,i=t.description;e.setState({img:a,title:n,description:i})}))}},{key:"render",value:function(){return i.a.createElement("div",{style:{width:"200px",height:"200px"}})}}]),t}(n.Component)),J=j(function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return console.log(e),i.a.createElement("div",{className:"single-habit-page"},i.a.createElement(I,{habitId:e}),i.a.createElement(M,null),i.a.createElement(d.b,{to:"/edit-habit/".concat(e)},i.a.createElement("button",{className:"edit-btn"},"Edit")))}}]),t}(n.Component)),B=(a(63),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,null),i.a.createElement(h.d,null,i.a.createElement(D,{exact:!0,path:"/signup",component:w}),i.a.createElement(D,{exact:!0,path:"/login",component:C}),i.a.createElement(U,{exact:!0,path:"/private",component:k}),i.a.createElement(U,{exact:!0,path:"/add-habit",component:H}),i.a.createElement(U,{exact:!0,path:"/today",component:R}),i.a.createElement(U,{exact:!0,path:"/edit-habit/:id",component:T}),i.a.createElement(U,{exact:!0,path:"/single-habit/:id",component:J})))}}]),t}(n.Component));o.a.render(i.a.createElement(d.a,null,i.a.createElement(y,null,i.a.createElement(B,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b286eeb9.chunk.js.map