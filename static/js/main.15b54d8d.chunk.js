(this.webpackJsonptransleggtor=this.webpackJsonptransleggtor||[]).push([[0],{13:function(e,n,t){e.exports=t.p+"static/media/egg.60d093c7.jpg"},16:function(e,n,t){e.exports=t(26)},21:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(10),o=t.n(i),c=(t(21),t(4)),u=t(1),l=t(2);function g(){var e=Object(u.a)(['\n  height: 24px;\n  min-width: 24px;\n  background-position: 0 -192px\n  background-image: url("https://ssl.gstatic.com/translate/1x_mobile.png");\n  cursor: pointer;\n']);return g=function(){return e},e}function d(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n\n  @media only screen and (max-width: 450px) {\n    flex-direction: column;\n  }\n\n  overflow: hidden;\n  height: 100%;\n"]);return d=function(){return e},e}function s(){var e=Object(u.a)(["\n  width: 90%;\n  background: white;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  height: 300px;\n\n  @media only screen and (max-width: 450px) {\n    width: 100%;\n    height: 500px;\n    border-radius: 0;\n  }\n"]);return s=function(){return e},e}var f=l.a.div(s()),p=l.a.div(d()),h=l.a.div(g());function m(){var e=Object(u.a)(['\n  margin: auto 0px;\n  min-width: 24px;\n  min-height: 24px;\n  background-position: 0 -48px;\n  background-image: url("https://ssl.gstatic.com/translate/1x_mobile.png");\n  cursor: pointer;\n']);return m=function(){return e},e}function x(){var e=Object(u.a)(['\n  width: 100%;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 40px;\n\n  font-family: "Roboto", arial, sans-serif;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n']);return x=function(){return e},e}function b(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n\n  border-style: hidden hidden solid hidden;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.2);\n\n  height: 40px;\n"]);return b=function(){return e},e}var v,w=l.a.div(b()),E=l.a.div(x()),y=l.a.div(m());!function(e){e.ENGLISH="english",e.EGG="egg"}(v||(v={}));var j=function(e){var n=e.onChange,t=a.a.useState(v.ENGLISH),r=Object(c.a)(t,2),i=r[0],o=r[1],u=a.a.useState(v.EGG),l=Object(c.a)(u,2),g=l[0],d=l[1];return a.a.createElement(w,null,a.a.createElement(E,null,i),a.a.createElement(y,{onClick:function(){o(g),n(g),d(i)}}),a.a.createElement(E,null,g))};function O(){var e=Object(u.a)(['\n  border-width: 0;\n  resize: none;\n  width: calc(100% - 24px);\n\n  @media only screen and (max-width: 450px) {\n    width: calc(95% - 24px);\n  }\n\n  height: 100%;\n  font-family: "Roboto", arial, sans-serif;\n  font-size: 24px;\n']);return O=function(){return e},e}function k(){var e=Object(u.a)(["\n  border-style: ",";\n\n  @media only screen and (max-width: 450px) {\n    border-style: ",";\n  }\n\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.2);\n\n  width: 100%;\n  height: 100%;\n  padding: 12px;\n\n  display: flex;\n"]);return k=function(){return e},e}var C=l.a.div(k(),(function(e){return e.hasBorder?"hidden solid hidden hidden":"hidden"}),(function(e){return e.hasBorder?"hidden hidden solid hidden":"hidden"})),G=l.a.textarea(O()),I=a.a.forwardRef((function(e,n){var t=e.onUpdate,r=e.isInput,i=e.value,o=e.renderProps,c=r?"":"Transleggtion";return a.a.createElement(C,{hasBorder:r},a.a.createElement(G,{ref:n,readOnly:!r,value:i,onChange:function(e){t(e.currentTarget.value)},placeholder:c,isInput:r}),""!==i&&o)}));function A(){var e=Object(u.a)(["\n  margin-top: 8px;\n  border-radius: 12px;\n  padding: 2px;\n  width: 24px;\n  height: 24px;\n  float: right;\n"]);return A=function(){return e},e}var R=l.a.input(A()),S=function(e){var n=e.textAreaRef;return a.a.createElement(R,{onClick:function(){n&&n.current&&(n.current.select(),document.execCommand("copy"))},type:"image",src:"https://img.icons8.com/metro/26/000000/clipboard.png"})},U={a:"eg",b:"geee",c:"gege",d:"gee",e:"e",f:"eege",g:"gge",h:"eeee",i:"ee",j:"eggg",k:"geg",l:"egee",m:"gg",n:"ge",o:"ggg",p:"egge",q:"ggeg",r:"ege",s:"eee",t:"g",u:"eeg",v:"eeeg",w:"egg",x:"geeg",y:"gegg",z:"ggee",1:"egggg",2:"eeggg",3:"eeegg",4:"eeeeg",5:"eeeee",6:"geeee",7:"ggeee",8:"gggee",9:"gggge",0:"ggggg"},z=function(){var e=a.a.useState(""),n=Object(c.a)(e,2),t=n[0],r=n[1],i=a.a.useState(""),o=Object(c.a)(i,2),u=o[0],l=o[1],g=a.a.useRef(null),d=a.a.useRef(null),s=function(e){for(var n="",t=0;t<e.length;t++)if(" "!==e.charAt(t)){var a=U[e.charAt(t).toLowerCase()];a&&(n+=a+" ")}else n+=" ";r(n)},m=function(e){for(var n=e.split(" "),t="",a=0;a<n.length;a++)if(""!==n[a]){for(var i in U)if(U[i]===n[a]){t+=i;break}}else t+=" ";r(t)},x=a.a.useReducer((function(e,n){switch(n.type){case v.ENGLISH:return{translator:s};case v.EGG:return{translator:m}}}),{translator:s}),b=Object(c.a)(x,2),w=b[0],E=b[1];return a.a.createElement(f,null,a.a.createElement(j,{onChange:function(e){if(E({type:e}),d.current&&g.current){var n=d.current.value,t=g.current.value;l(n),r(t)}}}),a.a.createElement(p,null,a.a.createElement(I,{ref:g,value:u,isInput:!0,onUpdate:function(e){w.translator(e),l(e)},renderProps:a.a.createElement(h,{onClick:function(){l(""),r("")}})}),a.a.createElement(I,{ref:d,value:t,isInput:!1,onUpdate:function(){},renderProps:a.a.createElement(S,{textAreaRef:d})})))};function B(){var e=Object(u.a)(["\n  width: 30%;\n"]);return B=function(){return e},e}function H(){var e=Object(u.a)(["\n  display: inline-block;\n  text-align: center;\n"]);return H=function(){return e},e}var L=l.a.div(H()),N=l.a.img(B()),P=t(13),T=t.n(P),J=function(e){var n=e.redirectUrl;return a.a.createElement(L,null,a.a.createElement("a",{href:n},a.a.createElement(N,{src:T.a,alt:"A jpegg"})))};function _(){var e=Object(u.a)(["\n  margin: 12px;\n"]);return _=function(){return e},e}function q(){var e=Object(u.a)(["\n  margin-top: 8px;\n  width: 100%;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return q=function(){return e},e}var F=l.a.div(q()),M=l.a.footer(_()),W=t(8);W.a.initialize("UA-162030091-1"),W.a.pageview(window.location.pathname+window.location.search);var Y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,null,a.a.createElement(J,{redirectUrl:"https://www.facebook.com/groups/AGroupWhereYouCanOnlySayEgg"}),a.a.createElement(z,null)),a.a.createElement(M,null,a.a.createElement("a",{href:"https://www.github.com/tohaker"},"Made with eggs by Tohaker"),a.a.createElement("br",null),a.a.createElement("a",{href:"https://icons8.com/icon/5361/clipboard"},"Clipboard icon by Icons8")))};o.a.render(a.a.createElement(Y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.15b54d8d.chunk.js.map