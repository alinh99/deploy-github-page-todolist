(this.webpackJsonpalinhtodos=this.webpackJsonpalinhtodos||[]).push([[0],Array(52).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(42),r=c.n(i),o=(c(52),c(53),c(10)),l=c(11),j=c(13),u=c(12),d=(c(54),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Background",children:this.props.children})}}]),c}(n.Component)),b=function(e){return e.children},h=(c(55),c(56),c(57),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Input",children:Object(s.jsxs)("div",{className:"Block",children:[Object(s.jsx)("label",{children:this.props.label}),Object(s.jsx)("input",{type:this.props.type,onChange:this.changeHandler})]})})})}}]),c}(n.Component)),O=(c(58),c(59),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("button",{className:e.className,onClick:e.clicked,children:e.title})})}),p=c(43),f=c.n(p),x=c(9),m=c.n(x),v=m.a.get("access_token"),k=m.a.get("client"),g=m.a.get("uid"),y=f.a.create({baseURL:"http://herokutuan.herokuapp.com",headers:{Authorization:"Bearer ya29.a0AfH6SMC3w1tXe7lCUECmZhkZZ1tRIaeYTrcF1B9_Bk7PFJcfbuxds7nEqowZQNqBs4_JBrnA9a2dDuY_r58jnUl0zgtBUZz95iTKwlVhvVzWgpaJzsiqD7045KO-NdLCa1TT7ZhZcP6npf_Ofb_Y-fkN9ZVgGjG",uid:"".concat(g),"access-token":"".concat(v),client:"".concat(k),"Content-Type":"application/json"}}),w=(c(87),function(){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"Spinner",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),N=c(123),S=c(26),C=Object(S.a)({forceRefresh:!0}),T=c(21),L=c.n(T),_=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",message:!1,loading:!1},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.loginHandler=function(){e.setState({loading:!0}),y.post("/auth/sign_in",e.state).then((function(t){e.setState({loading:!1});var c=t.headers;m.a.set("isLoggedIn",!0),m.a.set("access_token",c["access-token"]),m.a.set("client",c.client),m.a.set("uid",c.uid),C.push({pathname:"/"})})).catch((function(t){e.setState({loading:!1}),e.setState({message:t.response.data.errors})}))},e.keyPress=function(){e.loginHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return!0===m.a.get("isLoggedIn")?C.push("/"):Object(s.jsxs)(b,{children:[Object(s.jsx)(L.a,{handleKeys:["enter"],onKeyEvent:this.keyPress,children:Object(s.jsx)("div",{className:"main-w3layouts wrapper",children:Object(s.jsx)("div",{className:"main-agileinfo",children:Object(s.jsx)("div",{className:"agileits-top",children:Object(s.jsxs)("div",{className:"LoginForm",children:[Object(s.jsx)("h2",{className:"Title",children:"Sign In"}),this.state.message?this.state.message.map((function(e){return Object(s.jsx)("p",{style:{color:"red",textAlign:"center"},children:e},e)})):"",this.props.isRegistered?Object(s.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"3px"},children:"You had signed up successfully!"}):"",Object(s.jsx)(h,{className:"text email",label:"Email",type:"email",setData:this.setEmail}),Object(s.jsx)(h,{className:"password",label:"Password",type:"password",setData:this.setPassword}),Object(s.jsxs)("div",{className:"ButtonGroup",children:[Object(s.jsx)(O,{className:"LoginButton",title:"Sign In",clicked:this.loginHandler}),Object(s.jsx)(O,{className:"RegisterButton",title:"Sign Up",clicked:this.props.clickedRegisterButton})]}),this.state.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):""]})})})})}),Object(s.jsxs)("ul",{className:"colorlib-bubbles",children:[Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{})]})]})}}]),c}(n.Component),B=Object(N.d)(_),D=c(45),I=(c(92),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Input",children:Object(s.jsxs)("div",{className:"Block",children:[Object(s.jsx)("label",{children:this.props.label}),this.props.message?Object(s.jsx)("p",{}):Object(s.jsx)("p",{style:{color:"red"},children:"Password does not match"}),Object(s.jsx)("input",{type:this.props.type,onChange:this.changeHandler})]})})})}}]),c}(n.Component)),A=(c(93),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("button",{className:e.className,onClick:e.clicked,disabled:e.disabled,children:e.title})})}),E=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={firstName:"",lastName:"",email:"",password:"",rightPassword:!0,loading:!1,message:!1,done:!1},e.setFirstname=function(t){e.setState({firstName:t})},e.setLastname=function(t){e.setState({lastName:t})},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.checkConfirm=function(t){0!==t.length&&e.setState({rightPassword:t===e.state.password})},e.registerHandler=function(){if(e.setState({loading:!0}),e.state.rightPassword){var t={name:e.state.firstName+e.state.lastName,email:e.state.email,password:e.state.password};y.post("/auth",t).then((function(t){e.setState({loading:!1}),m.a.set("successfulRegister",!0),e.setState({done:!0}),e.props.done(e.state.done)})).catch((function(t){e.setState({loading:!1});var c=t.response.data.errors.full_messages,n=Object.keys(c).map((function(e){return Number(e)})).map((function(e){return Object(D.a)(Array(c[e]))})).reduce((function(e,t){return e.concat(t)})).map((function(e){return Object(s.jsx)("p",{keys:e,style:{color:"red",textAlign:"center",marginTop:"3px"},children:e})}));e.setState({message:n})}))}},e.pressKey=function(){e.registerHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsxs)(b,{children:[Object(s.jsx)(L.a,{handleKeys:["enter"],onKeyEvent:this.pressKey,children:Object(s.jsx)("div",{className:"main-w3layouts wrapper",children:Object(s.jsx)("div",{className:"main-agileinfo",children:Object(s.jsxs)("div",{className:"agileits-top",children:[Object(s.jsx)("h2",{className:"Title",children:"Sign Up"}),Object(s.jsxs)("div",{className:"RegisterForm",children:[Object(s.jsx)(I,{className:"text email",label:"First Name",type:"text",setData:this.setFirstname,message:!0}),Object(s.jsx)(I,{className:"text email",label:"Last Name",type:"text",setData:this.setLastname,message:!0}),Object(s.jsx)(I,{className:"text email",label:"Email",type:"email",setData:this.setEmail,message:!0}),Object(s.jsx)(I,{className:"text",label:"Password",type:"password",setData:this.setPassword,message:!0}),Object(s.jsx)(I,{className:"text w3lpass",label:"Confirm Password",type:"password",setData:this.checkConfirm,message:this.state.rightPassword}),Object(s.jsxs)("div",{className:"ButtonGroup",children:[Object(s.jsx)(A,{className:"RegisterButton",title:"Sign Up Now",clicked:this.registerHandler}),Object(s.jsxs)("p",{children:["Have an Account?",Object(s.jsx)(A,{className:"LoginButton",clicked:this.props.clickedLoginButton,title:"Login now!"})]})]}),this.state.message,this.state.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):""]})]})})})}),Object(s.jsxs)("ul",{className:"colorlib-bubbles",children:[Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{})]})]})}}]),c}(n.Component),M=function(e){return Object(s.jsx)("div",{className:"Main",children:e.show?Object(s.jsx)(B,{clickedRegisterButton:e.showRegisterForm,isRegistered:e.registered}):Object(s.jsx)(E,{clickedLoginButton:e.showLoginForm,done:e.successfulRegister})})},P=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={show:!0,successfulRegister:!1},e.showRegisterFormHandler=function(){e.setState({show:!1})},e.showLoginFormHandler=function(){e.setState({show:!0})},e.loginStep=function(t){t&&e.setState({show:!0,successfulRegister:!0})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Welcome",children:Object(s.jsx)(M,{show:this.state.show,showRegisterForm:this.showRegisterFormHandler,showLoginForm:this.showLoginFormHandler,successfulRegister:this.loginStep,registered:this.state.successfulRegister})})})}}]),c}(n.Component),H=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(d,{children:Object(s.jsx)(P,{})})}}]),c}(n.Component),R=c(4),F=c.n(R),q=c(8),J=c(2),U=(c(95),c(96),c(97),c(5)),Y=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"Item",onClick:e.click,children:[Object(s.jsx)("div",{className:"Icon",children:Object(s.jsx)(U.a,{icon:e.icon,color:e.color})}),Object(s.jsx)("p",{className:"Label",children:e.label}),Object(s.jsx)("p",{className:"Number",children:e.number})]})})},W=c(3),z=(c(100),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Logo",onClick:e.clickedLogo,children:Object(s.jsx)("div",{className:"text-icon-sidebar",children:"alinh'stodos"})})})});c(101);var K=function(e){var t=Object(n.useState)(e.check),c=Object(J.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(J.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(e.name),d=Object(J.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(e.name),f=Object(J.a)(p,2),x=f[0],m=f[1],v=Object(n.useState)(!1),k=Object(J.a)(v,2),g=k[0],w=k[1];return Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{done:"".concat(a)});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(s.jsx)(b,{children:g?"":Object(s.jsxs)("div",{className:"TodoMain",children:[Object(s.jsx)("div",{className:"TodoMainCheckbox",children:l?Object(s.jsx)("input",{type:"text",value:x,onChange:function(e){var t=e.target.value;m(t)},className:"TodoCheck"}):Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[Object(s.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(s.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:h})]})}),Object(s.jsxs)("div",{className:"TodoMainIcon",children:[l?Object(s.jsx)(U.a,{icon:W.c,style:{cursor:"pointer"},onClick:function(){y.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{name:"".concat(x)}).then((function(e){j(!1),O(x)})).catch((function(e){console.log(e)}))}}):Object(s.jsx)(U.a,{icon:W.e,style:{cursor:"pointer"},onClick:function(){j(!0)}}),l?Object(s.jsx)(U.a,{icon:W.l,style:{cursor:"pointer"},onClick:function(){j(!1),m(h)}}):Object(s.jsx)(U.a,{icon:W.l,style:{cursor:"pointer"},onClick:function(){y.delete("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id)).then((function(e){w(!0)})).catch((function(e){console.log(e)}))}})]})]})})};c(102),c(103);var Z=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"AddTodoMain",children:[Object(s.jsx)(U.a,{icon:W.g,onClick:e.click,className:"AddTodoMainBtn"}),Object(s.jsx)("input",{className:"inputAdd",type:"text",placeholder:"Add todo",onChange:function(t){var c=t.target.value;e.setData(c)},value:e.value})]})})};c(104);var G=function(e){var t=Object(n.useState)([]),c=Object(J.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(J.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(e.name),d=Object(J.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(e.name),f=Object(J.a)(p,2),x=f[0],m=f[1],v=Object(n.useState)(!1),k=Object(J.a)(v,2),g=k[0],w=k[1],N=Object(n.useState)([]),S=Object(J.a)(N,2),C=(S[0],S[1],Object(n.useState)("")),T=Object(J.a)(C,2),L=T[0],_=T[1],B=Object(n.useState)(""),D=Object(J.a)(B,2),I=D[0],A=D[1],E=Object(n.useState)(!1),M=Object(J.a)(E,2),P=M[0],H=(M[1],Object(n.useState)(!1)),R=Object(J.a)(H,2),Y=(R[0],R[1],Object(n.useState)("")),z=Object(J.a)(Y,2),G=(z[0],z[1],Object(n.useState)([])),V=Object(J.a)(G,2),Q=(V[0],V[1]);Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/task_lists/".concat(e.id,"/todos"));case 3:c=t.sent,i(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/users");case 3:t=e.sent,Q(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/users");case 3:c=t.sent,c.data.map((function(t){t.id===e.user_id&&A(t.email)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var X=function(e){w(!1),O(x)},$=function(e){""!==L&&(j(!0),y.post("/task_lists/".concat(e,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){_(""),j(!1)})).catch((function(e){console.log(e)})))};return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"TaskListMain",children:[Object(s.jsxs)("div",{className:"TaskListMainName",children:[g?Object(s.jsx)("input",{type:"text",style:{opacity:"1"},value:h,onChange:function(e){var t=e.target.value;O(t)}}):Object(s.jsx)("h2",{style:{opacity:"1"},children:x}),Object(s.jsxs)("div",{className:"TaskListMainNameIcon",children:[g?Object(s.jsx)(U.a,{icon:W.c,onClick:function(){y.patch("/task_lists/".concat(e.id),{name:"".concat(h)}).then((function(e){w(!1),m(h)})).catch((function(e){console.log(e)}))}}):Object(s.jsx)(U.a,{icon:W.e,onClick:function(){w(!0)}}),g?Object(s.jsx)(U.a,{icon:W.l,onClick:X}):Object(s.jsx)(U.a,{icon:W.l,onClick:X,style:{display:"none"}}),g?Object(s.jsx)(U.a,{icon:W.l,color:"red",style:{display:"none"}}):Object(s.jsx)(U.a,{icon:W.l,onClick:e.clickDeleteBtn})]})]}),Object(s.jsx)("di",{v:!0,className:"TodosMain",children:a.map((function(t){return Object(s.jsx)(K,{check:t.done,name:t.name,id:t.id+t.name,tasklistId:e.id},e.id)}))}),e.edit?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(Z,{setData:_,click:function(){return $(e.id)},value:L})}),Object(s.jsx)("h6",{style:{opacity:"0"},children:"You do not have edit permission"})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{style:{opacity:"0"},children:[Object(s.jsx)(Z,{setData:_,click:function(){return $(e.id)},value:L}),Object(s.jsx)("div",{className:"DeleteBtn",children:Object(s.jsx)(U.a,{icon:W.m,color:"red",onClick:e.clickDeleteBtn})})]}),Object(s.jsx)("h6",{style:{opacity:"1"},children:"You do not have edit permission"})]}),e.user_id?Object(s.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Shared by ",I]}):null,P?Object(s.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Sharing with ",P]}):null]})})},V=(c(105),c(121)),Q=c(122);var X=function(e){var t=Object(n.useState)([e.tasklists]),c=Object(J.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(J.a)(r,2),l=o[0],j=o[1];Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(e.tasklists);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.tasklists]);var u=a.map((function(e){return Object(s.jsx)(V.a,{lg:3,children:Object(s.jsx)(G,{name:e.name,id:e.id,clickDeleteBtn:function(){return t=e.id,j(!0),void y.delete("/task_lists/".concat(t)).then((function(e){j(!1)})).catch((function(e){console.log(e)}));var t},edit:!0},e.id+e.name)},e.id)}));return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"MainDisplay",children:[e.children,Object(s.jsx)("div",{className:"TaskListArea",children:Object(s.jsx)(Q.a,{children:u})})]})})};c(106);var $=function(e){var t=e.tasklists.map((function(e){return Object(s.jsxs)("div",{className:"SBTasklistView",children:[Object(s.jsx)("div",{style:{fontSize:"8px",marginRight:"20px"},children:Object(s.jsx)(U.a,{icon:W.d,color:"red"})}),Object(s.jsx)("p",{children:e.name})]})}));return Object(s.jsxs)("div",{className:"SBTasklist",children:[t,Object(s.jsxs)("div",{className:"SBAddBtn",onClick:e.clicked,children:[Object(s.jsx)("div",{style:{fontSize:"15px",marginRight:"15px"},children:Object(s.jsx)(U.a,{icon:W.g})}),Object(s.jsx)("p",{children:"Add new"})]})]})},ee=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).sideBar=function(e){return function(){0===e?(!0,!1):1===e?(!1,!0):(!1,!1)}},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.op1,c=e.op2,n=e.op3;return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"SideBar",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)("div",{className:"sticky-content",children:[Object(s.jsx)(z,{clickedLogo:this.props.clickedLogo}),t?Object(s.jsx)(Y,{icon:W.b,label:"Tasks",number:this.props.tasklists,color:"#fff",click:this.props.clickTodo}):Object(s.jsx)(Y,{icon:W.b,label:"Tasks",number:this.props.tasklists,color:"white",click:this.props.clickTodo}),c?Object(s.jsx)(Y,{icon:W.f,label:"Support",number:this.props.shared,color:"#fff",click:this.clickInBox}):Object(s.jsx)(Y,{icon:W.f,label:"Support",number:this.props.shared,color:"white",click:this.props.clickInBox}),n?Object(s.jsx)(Y,{icon:W.i,label:"Share",number:this.props.share,color:"#fff",click:this.props.clickShare}):Object(s.jsx)(Y,{icon:W.i,label:"Share",number:this.props.share,color:"white",click:this.props.clickShare}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{style:{backgroundColor:"#000",border:"0.1px solid #000",margin:"0 auto",lineHeight:"0.2px",width:"70%"}}),Object(s.jsx)($,{tasklists:this.props.taskListItem,clicked:this.props.addTasklist})]})})})})}}]),c}(n.Component),te=(c(107),c(108),c(109),function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"DropMenuItem",onClick:e.clicked,children:[Object(s.jsx)(U.a,{icon:e.icon}),Object(s.jsx)("p",{children:e.label})]})})}),ce=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"DropMenu",children:[Object(s.jsx)(te,{label:"Profile",icon:W.a}),Object(s.jsx)(te,{label:"Log Out",icon:W.k,clicked:e.clickedSignOutButton})]})})},se=(c(110),function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"Search",children:[Object(s.jsx)(U.a,{icon:W.h,color:"black"}),Object(s.jsx)("input",{type:"text",placeholder:"Name of Tasklist..."})]})})}),ne=(c(111),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Sayhi",children:Object(s.jsx)("div",{className:"user",onClick:e.clickedDropDown,children:e.name})})})}),ae=(c(112),function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"DrawerToggle",onClick:e.clicked,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),ie=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={showDropMenu:!1},e.showDropMenu=function(){e.setState({showDropMenu:!e.state.showDropMenu})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"NavigationBar",children:[Object(s.jsx)(ae,{}),Object(s.jsx)(se,{}),Object(s.jsx)("span",{className:"hi",children:"Hi, "}),Object(s.jsx)(ne,{clickedDropDown:this.showDropMenu}),this.state.showDropMenu?Object(s.jsx)(ce,{clickedSignOutButton:this.props.clickedSignOutButton}):""]})})}}]),c}(n.Component),re=(c(113),c(114),function(e){return Object(s.jsx)(b,{children:e.show?Object(s.jsx)("div",{className:"BackDrop",onClick:e.cancel}):null})}),oe=function(e){return Object(s.jsxs)(b,{children:[Object(s.jsx)(re,{show:e.show,cancel:e.cancel}),Object(s.jsx)("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})};c(115),c(116);var le=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"InputTaskListArea",children:[Object(s.jsx)("label",{children:e.name}),Object(s.jsx)("input",{type:"text",onChange:function(t){var c=t.target.value;e.setData(c)}})]})})},je=(c(117),function(e){return Object(s.jsx)("p",{className:"AddButtonSubmit",onClick:e.click,children:"Submit"})});var ue=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"AddTaskListPanel",children:[Object(s.jsx)("h2",{children:"Add Task List"}),e.message?Object(s.jsx)("p",{style:{color:"red"},children:"You need to enter tasklist name"}):null,Object(s.jsx)(le,{name:"TaskList",setData:e.setTaskListName}),Object(s.jsx)(le,{name:"Todo 1",setData:e.setTodo1Name}),Object(s.jsx)(le,{name:"Todo 2",setData:e.setTodo2Name}),Object(s.jsx)(je,{click:e.submitHandler}),e.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):null]})})};c(118);var de=function(e){var t=Object(n.useState)([e.tasklists]),c=Object(J.a)(t,2),a=c[0],i=c[1];Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/shared");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=a.map((function(e){return Object(s.jsx)(V.a,{lg:3,children:Object(s.jsx)(G,{name:e.name,id:e.id,edit:e.is_write,user_id:e.user_id},e.id+e.name)},e.id)}));return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"MainDisplay",children:Object(s.jsx)("div",{className:"TaskListArea",children:Object(s.jsx)(Q.a,{children:r})})})})},be=c(29);var he=function(e){var t=Object(n.useState)(e.is_write),c=Object(J.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(J.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)([]),d=Object(J.a)(u,2),b=d[0],h=d[1],O=e.user;Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.put("/task_lists/".concat(e.taskListId,"/share/").concat(e.user_id),{share_task:{is_write:"".concat(a)}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/task_lists/".concat(e.taskListId,"/todos"));case 3:c=t.sent,h(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.taskListId]);var p=Object(s.jsxs)("div",{className:"TaskListMain",style:{width:"250px",margin:"10px"},children:[Object(s.jsx)("div",{className:"TaskListMainName",children:Object(s.jsxs)("h2",{children:[e.name,"  ",Object(s.jsxs)("span",{style:{color:"black",fontSize:"10px"},children:["(",b.length,")"]})]})}),Object(s.jsx)("div",{className:"TodosMain",children:b.map((function(t){return Object(s.jsx)(K,{check:t.done,name:t.name,id:t.id,tasklistId:e.id},e.id)}))}),Object(s.jsx)("span",{style:{color:"red",marginBottom:"20px"},children:O[e.id]}),Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",width:"150px"},children:[Object(s.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(s.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:"Edit Permission"})]}),Object(s.jsx)("div",{className:"DeleteBtn",children:Object(s.jsx)(U.a,{icon:W.m,color:"red",onClick:function(){try{y.delete("task_lists/".concat(e.taskListId,"/share/").concat(e.user_id)),j(!0)}catch(t){console.log(t)}}})})]});return l?null:p};var Oe=function(e){var t=Object(n.useState)({}),c=Object(J.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)([]),o=Object(J.a)(r,2),l=o[0],j=o[1];Object(n.useEffect)((function(){function t(){return(t=Object(q.a)(F.a.mark((function t(){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/task_lists/".concat(e.id,"/share"));case 3:c=t.sent,j(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t,c,s,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/users");case 3:t=e.sent,c=t.data,s=c.map((function(e){var t=e.id,c={id:e.email};return u(c,"id",t),c})),n=s.reduce((function(e,t){return Object(be.a)(Object(be.a)({},e),t)})),i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var u=function(e,t,c){t!==c&&(Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(e,t)),delete e[t])},d=l.map((function(t){return Object(s.jsx)(he,{user:a,id:t.user_id,taskListId:t.task_list_id,is_write:t.is_write,name:e.name,user_id:t.user_id},t.user_id)}));return Object(s.jsx)(b,{children:Object(s.jsx)("div",{style:{marginBottom:"15px",padding:"10px",display:"flex",overflow:"scroll",maxWidth:"1200px"},children:d})})};var pe=function(e){var t=Object(n.useState)([e.tasklists]),c=Object(J.a)(t,2),a=c[0],i=(c[1],a.reduce((function(e){return e})).map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(Oe,{name:e.name,id:e.id},e.id+e.name)},e.id)})));return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"MainDisplay",children:Object(s.jsx)("div",{className:"TaskListArea",children:i})})})};c(119);var fe=function(e){var t=!1;return e.correctEmail&&e.correctTaskList&&(t=!0),Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"AddTaskListPanel ShareTaskListPanel",children:[Object(s.jsx)("h2",{children:"Share Task List"}),e.message?Object(s.jsx)("p",{style:{color:"red"},children:"You need to enter tasklist name"}):null,Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsx)(le,{name:"User Email",setData:e.setUserEmail}),e.correctEmail?Object(s.jsx)(U.a,{icon:W.c,color:"#00ff00"}):Object(s.jsx)(U.a,{icon:W.l,color:"#ff0000"})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsx)(le,{name:"TaskList Name",setData:e.setTasklistName}),e.correctTaskList?Object(s.jsx)(U.a,{icon:W.c,color:"#00ff00"}):Object(s.jsx)(U.a,{icon:W.l,color:"#ff0000"})]}),Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},onChange:function(t){var c=t.target.value;e.setData(c)}.bind(this),children:[Object(s.jsx)("label",{children:"Edit Permission"}),Object(s.jsx)("input",{type:"radio",value:"editor",name:"name"}),"Editor",Object(s.jsx)("input",{type:"radio",value:"watcher",name:"name"}),"Watcher"]}),Object(s.jsx)("button",{onClick:e.submitHandler,disabled:!t,style:{width:"30%",padding:"5px",backgroundColor:"#5cb85c",color:"white",outline:"none",border:"none"},children:"Submit"}),e.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):null]})})};var xe=function(e){var t=Object(n.useState)([]),c=Object(J.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(J.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(!1),d=Object(J.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(""),f=Object(J.a)(p,2),x=f[0],v=f[1],k=Object(n.useState)(""),g=Object(J.a)(k,2),w=g[0],N=g[1],S=Object(n.useState)(""),T=Object(J.a)(S,2),L=T[0],_=T[1],B=Object(n.useState)(!1),D=Object(J.a)(B,2),I=D[0],A=D[1],E=Object(n.useState)(""),M=Object(J.a)(E,2),P=(M[0],M[1],Object(n.useState)([])),H=Object(J.a)(P,2),R=H[0],Y=H[1],z=Object(n.useState)([]),K=Object(J.a)(z,2),Z=K[0],G=K[1],V=Object(n.useState)(0),Q=Object(J.a)(V,2),$=Q[0],te=Q[1],ce=Object(n.useState)(!1),se=Object(J.a)(ce,2),ne=se[0],ae=se[1],re=Object(n.useState)(""),le=Object(J.a)(re,2),je=(le[0],le[1],Object(n.useState)("")),be=Object(J.a)(je,2),he=be[0],Oe=be[1],xe=Object(n.useState)(!1),me=Object(J.a)(xe,2),ve=me[0],ke=me[1],ge=Object(n.useState)(!1),ye=Object(J.a)(ge,2),we=ye[0],Ne=ye[1],Se=Object(n.useState)([]),Ce=Object(J.a)(Se,2),Te=Ce[0],Le=Ce[1],_e=Object(n.useState)(!1),Be=Object(J.a)(_e,2),De=Be[0],Ie=Be[1],Ae=Object(n.useState)(""),Ee=Object(J.a)(Ae,2),Me=Ee[0],Pe=Ee[1],He=Object(n.useState)(!1),Re=Object(J.a)(He,2);Re[0],Re[1],Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t,c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,c=t.data,s=[],c.map((function(e){if(0!==e.share_count){var t={id:e.id,name:e.name};s.push(t)}})),G(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/shared");case 3:t=e.sent,Y(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(q.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/users");case 3:t=e.sent,Le(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var Fe=function(){A(!0)};return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"WorkPlace",children:[Object(s.jsx)(ee,{clickTodo:function(){te(0)},clickInBox:function(){te(1)},clickShare:function(){te(2)},tasklists:a.length,share:Z.length,shared:R.length,controller:$,clickedLogo:function(){C.push("/account")},taskListItem:a,addTasklist:Fe}),Object(s.jsxs)("div",{className:"ActionArea",children:[Object(s.jsx)(ie,{clickedSignOutButton:function(){m.a.set("isLoggedIn",!1),m.a.set("access_token",""),m.a.set("uid",""),m.a.set("client",""),C.push("/account")}}),0===$?Object(s.jsxs)(X,{tasklists:a,children:[Object(s.jsx)(oe,{show:I,cancel:function(){O(!1),j(!1),A(!1)},children:Object(s.jsx)(ue,{setTaskListName:function(e){v(e.trim())},setTodo1Name:function(e){N(e.trim())},setTodo2Name:function(e){_(e.trim())},submitHandler:function(){O(!0),""===x?(j(!0),O(!1)):y.post("/task_lists",JSON.stringify({name:"".concat(x)})).then((function(e){var t=e.data.id;if(""===w){if(""===L)return O(!1),j(!1),void A(!1);y.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){O(!1),j(!1),A(!1)})).catch((function(e){console.log(e)}))}else y.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(w)})).then((function(e){if(""===L)return O(!1),j(!1),void A(!1);y.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){O(!1),j(!1),A(!1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},loading:h,message:l})}),Object(s.jsx)(oe,{show:ne,cancel:function(){O(!1),j(!1),ae(!1),Ne(!1),Ie(!1),Oe(""),ke(!1),Pe("")},children:Object(s.jsx)(fe,{setUserEmail:function(e){!0===De&&Ie(!1),Te.map((function(t){t.email===e&&(Ie(!0),Oe(t.id))}))},setTasklistName:function(e){var t=e;!0===we&&Ne(!1),a.map((function(e){if(e.name===t)return Ne(!0),void Pe(e.id)}))},submitHandler:function(){O(!0),y.post("/task_lists/".concat(Me,"/share"),{user_id:"".concat(he),is_write:"".concat(ve)}).then((function(e){O(!1),ae(!1)})).catch((function(e){console.log(e)}))},loading:h,correctTaskList:we,correctEmail:De,setData:function(e){"editor"===e?ke(!0):"watcher"===e&&ke(!1)}})}),Object(s.jsxs)("div",{className:"TaskListOption",children:[Object(s.jsxs)("div",{className:"addIconB",children:[Object(s.jsx)("p",{className:"icon-text-add",children:"Add todos"}),Object(s.jsx)(U.a,{icon:W.g,onClick:Fe})]}),Object(s.jsxs)("div",{className:"shareIconB",children:[Object(s.jsx)("p",{className:"icon-text-share",children:"Share todos"}),Object(s.jsx)(U.a,{icon:W.j,onClick:function(){ae(!0)}})]})]})]}):null,1===$?Object(s.jsx)(de,{tasklists:R}):null,2===$?Object(s.jsx)(pe,{tasklists:Z}):null]})]})})},me=m.a.get("isLoggedIn"),ve=function(){return!1===me?C.push("/account"):Object(s.jsx)("div",{className:"HomePage",children:Object(s.jsx)(xe,{})})};var ke=function(){return Object(s.jsx)(N.b,{history:C,children:Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(N.c,{children:[Object(s.jsx)(N.a,{path:"/account",component:H}),Object(s.jsx)(N.a,{path:"/",component:ve})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[120,1,2]]]);
//# sourceMappingURL=main.d79aed62.chunk.js.map