(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),i=(n(29),n(30),n.p+"static/media/logo.4ac60799.svg"),l=(n(31),n(54)),o=n(0);var u=function(){return Object(o.jsxs)("div",{className:"Navigation",children:[Object(o.jsx)("img",{src:i,className:"Brand-logo",alt:"logo"}),Object(o.jsxs)("div",{className:"Nav-right",children:[Object(o.jsx)("h1",{className:"contact",children:" 212.555.5555 "}),Object(o.jsx)("h1",{children:" LOGIN "}),Object(o.jsx)(l.a,{className:"hamburger",color:"#3f3f3f",distance:"sm",direction:"right",size:19})]})]})},j=n(21),d=n(9),h=n.n(d),b=n(22),O=n(4),f=n(23),v=n.n(f),x=function(e){var t=Object(c.useState)(null),n=Object(O.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),i=Object(O.a)(s,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(b.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get(e);case 3:n=t.sent,r(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){t()}}),[e]),{apiData:a,serverError:l}},m=(n(18),n(3)),p=n(24),g=(n(19),function(e){var t=e.children,n=e.width;return Object(o.jsx)("div",{className:"carousel-item",style:{width:n},children:t})}),N=function(e){var t=e.children,n=Object(c.useState)(0),r=Object(O.a)(n,2),s=r[0],i=r[1],l=function(e){e<0?e=a.a.Children.count(t)-1:e>=a.a.Children.count(t)&&(e=0),i(e)};Object(c.useEffect)((function(){var e=setInterval((function(){l(s+1)}),5e3);return function(){e&&clearInterval(e)}}));var u=Object(p.useSwipeable)({onSwipedLeft:function(){return l(s+1)},onSwipedRight:function(){return l(s-1)}});return Object(o.jsxs)("div",Object(m.a)(Object(m.a)({},u),{},{className:"carousel",children:[Object(o.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*s,"%)")},children:a.a.Children.map(t,(function(e,t){return a.a.cloneElement(e,{width:"100%"})}))}),Object(o.jsx)("div",{className:"indicators",children:a.a.Children.map(t,(function(e,t){return Object(o.jsx)("button",{className:"".concat(t===s?"active":"")})}))})]}))};var w=function(){var e=x("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge"),t=e.apiData,n=e.serverError;console.log(t);var c={},a=[];if(t){var r,s=Object(j.a)(t.hero_slides);try{for(s.s();!(r=s.n()).done;){var i=r.value;c[i.alt]||(c[i.alt]=i.image)}}catch(l){s.e(l)}finally{s.f()}a.push(t.hero_text)}return console.log("final",c),console.log("text",a[0]),Object(o.jsxs)("div",{className:"hero",children:[!t&&Object(o.jsx)("h1",{children:"Loading Images.."}),n&&Object(o.jsx)("h1",{className:"laoding-and-error",children:"Oops, sorry something went wrong.."}),Object(o.jsx)(N,{children:Object.entries(c).map((function(e,t){return Object(o.jsxs)(g,{children:[" ",Object(o.jsx)("img",{alt:e[0],src:e[1]})]},t)}))}),t&&Object(o.jsxs)("div",{className:"Hero-text",children:[Object(o.jsx)("div",{id:"title",children:a[0].title})," ",Object(o.jsx)("br",{}),Object(o.jsx)("div",{id:"date",children:a[0].date})," ",Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"subtitle",children:[a[0].subtitle," "]})]})]})};var y=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)(w,{})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.562e6994.chunk.js.map