(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(23),r=c.n(s),i=(c(32),c(33),c(24)),l=c(10),j=c.n(l),o=c(25),u=c(3),d=c(7),b=c.n(d),h=function(e){var t=Object(a.useState)(null),c=Object(u.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(null),i=Object(u.a)(r,2),l=i[0],d=i[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(o.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get(e);case 3:c=t.sent,s(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),d(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){t()}}),[e]),{apiData:n,serverError:l}},O=c(12),m=c(26),x=(c(21),c(1)),f=function(e){var t=e.children,c=e.width;return Object(x.jsx)("div",{className:"carousel-item",style:{width:c},children:t})},v=function(e){var t=e.children,c=Object(a.useState)(0),s=Object(u.a)(c,2),r=s[0],i=s[1],l=function(e){e<0?e=n.a.Children.count(t)-1:e>=n.a.Children.count(t)&&(e=0),i(e)};Object(a.useEffect)((function(){var e=setInterval((function(){l(r+1)}),5e3);return function(){e&&clearInterval(e)}}));var j=Object(m.useSwipeable)({onSwipedLeft:function(){return l(r+1)},onSwipedRight:function(){return l(r-1)}});return Object(x.jsxs)("div",Object(O.a)(Object(O.a)({},j),{},{className:"carousel",children:[Object(x.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*r,"%)")},children:n.a.Children.map(t,(function(e,t){return n.a.cloneElement(e,{width:"100%"})}))}),Object(x.jsx)("div",{className:"indicators",children:n.a.Children.map(t,(function(e,t){return Object(x.jsx)("button",{className:"".concat(t===r?"active":"")})}))})]}))};var p=function(){var e=h("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge"),t=e.apiData,c=e.serverError,a={},n=[];if(t){var s,r=Object(i.a)(t.hero_slides);try{for(r.s();!(s=r.n()).done;){var l=s.value;a[l.alt]||(a[l.alt]=l.image)}}catch(j){r.e(j)}finally{r.f()}n.push(t.hero_text)}return Object(x.jsxs)("div",{className:"hero",children:[!t&&Object(x.jsx)("h1",{className:"laoding-and-error",children:"Loading Images.."}),c&&Object(x.jsx)("h1",{className:"laoding-and-error",children:"Oops, sorry something went wrong.."}),Object(x.jsx)(v,{children:Object.entries(a).map((function(e,t){return Object(x.jsxs)(f,{id:"image-size",children:[" ",Object(x.jsx)("img",{alt:e[0],src:e[1]})]},t)}))}),t&&Object(x.jsxs)("div",{className:"Hero-text",children:[Object(x.jsx)("div",{id:"title",children:n[0].title})," ",Object(x.jsx)("br",{}),Object(x.jsx)("div",{id:"date",children:n[0].date})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("div",{id:"subtitle",children:[n[0].subtitle," "]})]})]})},g=(c(54),c(11)),N=c(0),w=c.p+"static/media/logo.4ac60799.svg";var S=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],s=function(){return n(!1)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.b.Provider,{value:{color:"grey"},children:Object(x.jsx)("nav",{className:"navbar",children:Object(x.jsxs)("div",{className:"navbar-container container",children:[Object(x.jsx)("img",{src:w,className:"brand-logo",alt:"logo"}),Object(x.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:c?Object(x.jsx)(g.b,{}):Object(x.jsx)(g.a,{})}),Object(x.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"https://matildawangelliman.github.io/react-gh-pages/",className:"nav-links",id:"phone",onClick:s,children:"212.555.5555"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"https://matildawangelliman.github.io/react-gh-pages/",className:"nav-links",id:"login",onClick:s,children:"LOGIN"})})]})]})})})})},y=c(27);c(22);var k=function(e){var t=e.item;return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"pics",alt:t.alt,src:t.image})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"date",children:[" ",t.date,"  "]})," ",Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"title",children:[" ",t.title," "]})," ",Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"author-display",children:Object(x.jsx)("span",{className:"ref",children:Object(x.jsx)("a",{id:"author",href:"/",children:t.author})})}),Object(x.jsx)("div",{className:"line"})]})};var C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge").then((function(e){return e.json()})).then((function(e){console.log("beforesort",e.cards),e.cards.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),n(e.cards)})).catch(console.log)}),[]),console.log("here",c),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(y.a,{breakpointCols:{default:3,1024:2,700:1,480:1,420:1,320:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:c.map((function(e){return Object(x.jsx)("div",{className:"item",children:Object(x.jsx)(k,{item:e})},e.image)}))})})};var E=function(){return Object(x.jsx)("div",{className:"MasonryContainer",children:Object(x.jsx)(C,{})})},I=(c(55),function(e){var t={};return e?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email is invalid. Please put in correct email format"):t.email="Email is required.",t});var F=function(e){var t=e.submitForm,c=Object(a.useState)(""),n=Object(u.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)({}),l=Object(u.a)(i,2),j=l[0],o=l[1],d=Object(a.useState)(!1),h=Object(u.a)(d,2),O=h[0],m=h[1];return Object(a.useEffect)((function(){0===Object.keys(j).length&&O&&t(!0)}),[j]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{id:"m",placeholder:"   Email",type:"email",name:"email",value:s.email,onChange:function(e){return r(e.target.value)}}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),o(I(s)),m(!0),b.a.post("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge",{email:s}).then((function(e){console.log("print",e.data)})),r("")},children:"SUBMIT"})]}),j.email&&Object(x.jsx)("p",{className:"error-message",children:j.email})]})},T=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"signUp-success",children:"Thank You For Subscribing!"})})},D=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(x.jsx)("div",{children:c?Object(x.jsx)(T,{}):Object(x.jsx)(F,{submitForm:function(){n(!0)}})})};var z=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"sign-up",children:"Sign up for our Newsletter"}),Object(x.jsx)(D,{}),Object(x.jsx)("div",{className:"footer-link-display",children:Object(x.jsxs)("span",{className:"link-ref",children:[Object(x.jsx)("span",{className:"dash",children:Object(x.jsx)("a",{id:"social",href:"/",children:"INSTAGRAM"})}),Object(x.jsxs)("span",{className:"dash",children:[" ",Object(x.jsx)("a",{id:"social",href:"/",children:"FACEBOOK"})]}),Object(x.jsx)("span",{className:"dash",children:Object(x.jsx)("a",{id:"social",href:"/",children:"TWITTER"})})]})})]})};var A=function(){return Object(x.jsx)("div",{className:"FooterContainer",children:Object(x.jsx)(z,{})})};var M=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(S,{}),Object(x.jsx)(p,{}),Object(x.jsx)(E,{}),Object(x.jsx)(A,{})]})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d609769c.chunk.js.map