(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),u=n(3),i=n(4),l=n(6),s=n(5),m=n(7),h=function(e){function t(e){var n;Object(u.a)(this,t),n=Object(l.a)(this,Object(s.a)(t).call(this,e));var r=JSON.parse(localStorage.getItem("counter"))||0;return n.state={counter:r},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"increment",value:function(){localStorage.setItem("counter",String(this.state.counter+1)),this.setState((function(e){return{counter:+localStorage.getItem("counter")}}))}},{key:"decrement",value:function(){0!==this.state.counter&&(localStorage.setItem("counter",String(this.state.counter+-1)),this.setState((function(e){return{counter:+localStorage.getItem("counter")}})))}},{key:"reset",value:function(){localStorage.setItem("counter","0"),this.setState((function(e){return{counter:+localStorage.getItem("counter")}}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return e.increment()}},"Increment"),o.a.createElement("span",null,this.state.counter),o.a.createElement("button",{onClick:function(){return e.decrement()}},"Decrement"),o.a.createElement("button",{onClick:function(){return e.reset()}},"Reset"))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement((function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.debe22ce.chunk.js.map