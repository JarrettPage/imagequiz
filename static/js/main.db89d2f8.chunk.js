(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{44:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(21),s=n.n(a),i=(n(44),n(10)),o=n(13),j=n(6),l=(n(45),n(46),n(39)),u=n(16),b=n(14),h=n(38),d=n(29),O=n(2);var x=function(){var e=Object(j.f)(),t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],a=n[1];function s(){for(var e=r.length/9,t=[],n=0;n<e;n++)t.push(Object(O.jsx)("tr",{children:o(n)}));return t}function o(t){for(var n=[],c=function(t){n.push(Object(O.jsx)("td",{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.a.Image,{src:r[t].picture,width:200,height:200,onClick:function(){return n=t,void e.push({pathname:"/quiz",state:{flowerIndex:n+1}});var n}}),Object(O.jsx)(d.a.Caption,{children:r[t].name})]})}))},a=0+9*t;a<9+9*t;a++)c(a);return n}return Object(c.useEffect)((function(){0===r.length&&fetch("https://jarrettpage-imagequiz.herokuapp.com/flowers").then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))})),Object(O.jsx)(u.a,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h2",{children:"This is the Home Page."}),Object(O.jsx)(h.a,{responsive:!0,children:Object(O.jsx)("tbody",{children:s()})})]})})},f=n(9),g=n(20);var m=function(e){var t=Object(j.f)(),n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),u=l[0],b=l[1];return Object(O.jsxs)(f.a,{onSubmit:function(){0!==a.trim().length&&0!==u.trim().length&&(e.onLoggedIn(a),t.push("/"))},children:[Object(O.jsxs)(f.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(f.a.Label,{children:"Email address"}),Object(O.jsx)(f.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){s(e.target.value)}}),Object(O.jsx)(f.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(f.a.Label,{children:"Password"}),Object(O.jsx)(f.a.Control,{type:"password",placeholder:"Password",onChange:function(e){b(e.target.value)}})]}),Object(O.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]})};var p=function(e){var t=Object(j.f)();return Object(O.jsxs)(f.a,{children:[Object(O.jsx)(f.a.Label,{children:"Are you sure you want to log out?"}),Object(O.jsx)(g.a,{onClick:function(){localStorage.removeItem("username"),e.onLoggedOut(),t.push("/")},children:"Yes"}),Object(O.jsx)(g.a,{onClick:function(){t.push("/")},children:"Cancel"})]})},v=n(23),S=n(28);var w=function(e){return Object(O.jsxs)(v.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(v.a.Brand,{href:"/",children:"ImageQuiz"}),Object(O.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(S.a,{className:"mr-auto",children:[Object(O.jsx)(S.a.Link,{children:Object(O.jsx)(o.b,{to:"/",children:"Home"})}),Object(O.jsx)(S.a.Link,{children:""!==e.username?Object(O.jsxs)(o.b,{to:"/logout",children:[e.username,", Logout"]}):Object(O.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var y=function(){return Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)("h2",{style:{textAlign:"center"},children:"Welcome to ImageQuiz React App!"})})})};var C=function(){return Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsxs)("div",{children:["ImageQuiz \xa9 Copyright ",(new Date).getFullYear(),", All Rights Reserved."]})})})},I=n(22);var z=function(e){var t="http://localhost:5432",n=Object(j.f)(),r=Object(c.useState)(0),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)(!1),h=Object(i.a)(l,2),d=h[0],x=h[1],m=Object(c.useState)(-1),p=Object(i.a)(m,2),v=p[0],S=p[1],w=Object(c.useState)(0),y=Object(i.a)(w,2),C=y[0],z=y[1],L=Object(c.useState)([]),k=Object(i.a)(L,2),q=k[0],F=k[1],E=Object(c.useState)(""),P=Object(i.a)(E,2),Q=(P[0],P[1]);return Object(c.useEffect)((function(){0===q.length&&(S(e.location.state.flowerIndex),function(e){var n=e.toString();return console.log(t+"/quiz/"+n),fetch(t+"/quiz/"+n).then((function(e){return e.json()}))}(v).then((function(e){F(e.questions),console.log(e)})).catch((function(e){return console.log(e)})))})),Object(O.jsx)(u.a,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h2",{children:"Flower Quiz"}),Object(O.jsx)("div",{class:"imageQuiz",children:d?Object(O.jsxs)("div",{class:"results",children:[Object(O.jsxs)(f.a,{onSubmit:function(e){var n,c=localStorage.getItem("username");(n={score:C,quiznumber:v,username:c},fetch(t+"/score",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).then((function(){Q("User score was added successfully.")})).catch((function(e){return Q("Score was unable to be added.")})),e.preventDefault()},children:[Object(O.jsxs)(f.a.Label,{children:["Your score was ",C," / 6."]}),Object(O.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(O.jsxs)("div",{class:"again",children:[Object(O.jsx)("button",{onClick:function(){n.push("/")},children:"Different Quiz"}),Object(O.jsx)("button",{onClick:function(){return o(0),z(0),void x(!1)},children:"Retry"})]})]}):Object(O.jsx)(O.Fragment,{children:0===q.length?"":Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{class:"questions",children:Object(O.jsx)("div",{class:"image",children:Object(O.jsx)(I.a,{src:q[s].flower,fluid:!0})})}),Object(O.jsx)("div",{class:"choices",children:function(){for(var e=[],t=function(t){e.push(Object(O.jsx)("button",{onClick:function(){return function(e){e===q[s].answer&&z(C+1);var t=s+1;t<6?o(t):x(!0)}(q[s].choices[t])},children:q[s].choices[t]}))},n=0;n<q[s].choices.length;n++)t(n);return e}()})]})})})]})})};var L=function(){var e=Object(c.useState)(localStorage.getItem("username")||""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(O.jsx)(o.a,{children:Object(O.jsxs)(l.a,{fluid:!0,children:[Object(O.jsx)(y,{}),Object(O.jsx)(w,{username:n}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:x}),Object(O.jsx)(j.a,{path:"/login",children:Object(O.jsx)(m,{onLoggedIn:function(e){localStorage.setItem("username",e),r(e)}})}),Object(O.jsx)(j.a,{path:"/logout",children:Object(O.jsx)(p,{onLoggedOut:function(){r("")}})}),Object(O.jsx)(j.a,{path:"/quiz",component:z})]}),Object(O.jsx)(C,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),k()}},[[54,1,2]]]);
//# sourceMappingURL=main.db89d2f8.chunk.js.map