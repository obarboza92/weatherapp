(this.webpackJsonplista_tareas=this.webpackJsonplista_tareas||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),i=(a(9),a(3)),o=a(0),d="058cb8e0321f2a75722ed15033adeff5",u="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),r=Object(i.a)(s,2),l=r[0],h=r[1];return Object(o.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),c(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[l.name,",",l.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0"]}),Object(o.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.91d4e04b.chunk.js.map