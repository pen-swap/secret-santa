(this["webpackJsonppen-swap-secret-santa"]=this["webpackJsonppen-swap-secret-santa"]||[]).push([[0],{17:function(t,e,s){},18:function(t,e,s){},20:function(t,e,s){},21:function(t,e,s){},22:function(t,e,s){},23:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s(1),o=s.n(a),c=s(5),r=s.n(c),i=(s(17),s(9)),u=s.p+"static/media/santa.e7bfb936.svg",d=(s(18),function(t){var e=t.message;return Object(n.jsxs)("div",{className:"Santa",children:[Object(n.jsx)("img",{className:"Santa-img",src:u,alt:"santa"}),Object(n.jsx)("div",{className:"Santa-speechbubble new-message",children:e},"{message} ".concat(Math.random()))]})}),m=s(4),b=s.n(m),p=s(6),h=s(7),l=s(8),j=s(2),v=s(11),f=s(10),g=(s(20),function(t){Object(v.a)(s,t);var e=Object(f.a)(s);function s(t){var n;return Object(h.a)(this,s),(n=e.call(this,t)).state={submitting:!1,dotdotdot:"..",message:void 0},n.onSubmit=n.onSubmit.bind(Object(j.a)(n)),n.doDotDotDot=n.doDotDotDot.bind(Object(j.a)(n)),n}return Object(l.a)(s,[{key:"onSubmit",value:function(){var t=Object(p.a)(b.a.mark((function t(e){var s,n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),void 0!==(s=document.getElementById("name").value)&&null!==s&&""!==s.trim()){t.next=5;break}return this.props.setMessage("Hey now! You need to type in your reddit username!"),t.abrupt("return");case 5:return this.setState({submitting:!0}),this.doDotDotDot(),t.prev=7,t.next=10,fetch("".concat("https://pen-swap-secret-santa.us-e2.cloudhub.io/secretsanta","?giver=").concat(s));case 10:return n=t.sent,t.next=13,n.json();case 13:a=t.sent,this.props.setMessage(a.message),document.getElementById("name").value="",t.next=21;break;case 18:t.prev=18,t.t0=t.catch(7),this.props.setMessage("Ruh-roh! An error occured! Contact the mods?");case 21:this.setState({submitting:!1});case 22:case"end":return t.stop()}}),t,this,[[7,18]])})));return function(e){return t.apply(this,arguments)}}()},{key:"doDotDotDot",value:function(){var t=this;this.setState((function(e){var s=e.dotdotdot.length%3;return e.submitting&&setTimeout(t.doDotDotDot,100),{dotdotdot:".".repeat(s+1)}}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"LookupForm",children:this.state.message?Object(n.jsx)("div",{}):Object(n.jsxs)("form",{className:"LookupForm-form",children:[Object(n.jsx)("input",{placeholder:"Enter Reddit username..",className:"LookupForm-input",id:"name"}),Object(n.jsx)("button",{type:"submit",className:"LookupForm-button",onClick:this.onSubmit,disabled:this.state.submitting,children:this.state.submitting?this.state.dotdotdot:"Lookup"})]})})}}]),s}(a.Component)),O=(s(21),function(){return Object(n.jsxs)("div",{className:"Footer",children:["Made with ",Object(n.jsx)("span",{style:{color:"#e25555"},children:"\u2764\ufe0f"})," for ",Object(n.jsx)("a",{href:"https://reddit.com/r/pen_swap",children:"r/pen_swap"})]})});s(22);var x=function(){var t=Object(a.useState)("Enter your Reddit username and I'll pm you your match!"),e=Object(i.a)(t,2),s=e[0],o=e[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"App-container",children:[Object(n.jsx)(d,{message:s}),Object(n.jsx)(g,{setMessage:o})]}),Object(n.jsx)(O,{})]})},D=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;s(t),n(t),a(t),o(t),c(t)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),D()}},[[23,1,2]]]);
//# sourceMappingURL=main.f80c9855.chunk.js.map