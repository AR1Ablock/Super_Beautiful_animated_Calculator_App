(function(){var t={5042:function(){},9006:function(t,e,s){"use strict";var o=s(9963),n=s(6252),l=s(2262),u=s(3577),a=s(2542),i=s(6243);let c=(0,l.iH)(!1),r=(0,l.iH)(!1),_=(0,l.iH)(!1),d=(0,l.iH)(""),v=[],m=(0,l.iH)(""),g=(0,l.iH)(""),b=(0,l.iH)(""),y=(0,l.iH)(""),w=(0,l.iH)();(0,l.iH)(!1);function p(){document.querySelector(".ColorMode").classList.add("Round"),document.querySelector(".calculator_Body").classList.toggle("BackGround"),document.querySelector(".answer").classList.toggle("TextColor"),document.querySelector(".WrittingArea").classList.toggle("TextColor"),document.querySelectorAll(".buttons_card div button").forEach((t=>{t.classList.contains("numbers_cus")||t.classList.contains("Light_numbers_cus")?(t.classList.toggle("numbers_cus"),t.classList.toggle("Light_numbers_cus")):t.classList.contains("operations_cus")||t.classList.contains("Light_operations_cus")?(t.classList.toggle("operations_cus"),t.classList.toggle("Light_operations_cus")):t.classList.contains("eraser_cus")||t.classList.contains("Light_eraser_cus")?(t.classList.toggle("eraser_cus"),t.classList.toggle("Light_eraser_cus")):(t.classList.contains("Special_Btn_Cus")||t.classList.contains("Light_Special_Btn_Cus"))&&(t.classList.toggle("Special_Btn_Cus"),t.classList.toggle("Light_Special_Btn_Cus"))})),setTimeout((()=>{document.querySelector(".ColorMode").classList.remove("Round")}),500)}async function h(){try{r.value=!r.value;let t=document.querySelectorAll(".getit"),e=document.querySelector(".calculator_Body");r.value?t.forEach((t=>{t.classList.remove("showingExtraFunctionality"),t.classList.remove("showingExtraFunctionality100"),t.classList.add("HideExtraFunctionality"),setTimeout((()=>{document.querySelector(".screen").style.margin="1.5vmin 0",e.style.height="85vmin",e.style.top="7.5vmin",_.value=!0,t.classList.add("HideExtraFunctionality100")}),300)})):r.value||t.forEach((t=>{e.style.height="95vmin",e.style.top="2.5vmin",document.querySelector(".arrow").style.top="0",t.classList.remove("HideExtraFunctionality"),t.classList.remove("HideExtraFunctionality100"),t.classList.add("showingExtraFunctionality"),_.value=!1,setTimeout((()=>{t.classList.add("showingExtraFunctionality100")}),200)}))}catch(t){console.log(t.message)}}function f(t){try{let e=[0,1,2,3,4,5,6,7,8,9,".","+","-","*","/","∛","π","^","%","()","!","r"];return!!e.toString().includes(t)}catch(e){console.log(e.message)}}function C(t){try{return Number.isInteger(t)?t:t.toFixed(3)}catch(e){console.log(e.message)}}function L(t){try{let e=0;for(e;e<=t.length;e++)if("r"==t[e])return!0;return!1}catch(e){console.log(e.message)}}function S(t){try{let e=/([*+-/^r]{2,})|([*+-/^r]$)/g,s=t.replace(e,(t=>t.slice(-1)));return s}catch(e){console.log(e.message)}}function k(){try{v.join(""),v.forEach((t=>{m.value+=t;let e=S(m.value);m.value="",m.value=e,d.value=m.value,g.value=m.value.replace(/∛([0-9.]+)/g,"($1)^(1/3)").replace(/π/g,"*3.14")})),L(g.value)?(b.value=g.value.replace(/r/g,""),y.value=(0,a.NMM)(C((0,i.ku)(b.value)))):y.value=C((0,i.ku)(g.value));let t=new Date,e={Date:t.toLocaleDateString(),Question:m.value,Answer:y.value};H.value.push(e),localStorage.setItem("CalculationHistory",JSON.stringify(H.value)),v.splice(0,v.length)}catch(t){console.log(t.message),y.value="Invalid Expression"}}function E(){try{d.value.length>0&&(d.value=d.value.slice(0,-1),v.pop(),m.value=m.value.slice(0,-1),b.value=b.value.slice(0,-1))}catch(t){console.log(t.message)}}function A(){try{d.value="",y.value="",m.value="",b.value="",v.splice(0,v.length)}catch(t){console.log(t.message)}}document.addEventListener("DOMContentLoaded",(()=>{try{document.querySelectorAll(".buttons_card div button").forEach((t=>{t.addEventListener("click",(()=>{let e=t.getAttribute("data-value"),s=t.textContent.trim();""==s?f(e)&&(d.value+=e,v.push(e)):f(s)&&(d.value+=s,v.push(s))}))}))}catch(t){console.log(t.message)}if(w.value=JSON.parse(localStorage.getItem("CalculationHistory")),null!==w.value){let t=w.value.filter((t=>"8/20/2023"!==t.Date));t.forEach((t=>{H.value.push(t)}))}})),window.addEventListener("keydown",(t=>{try{f(t.key)?v.push(t.key):"ArrowLeft"==t.key||"ArrowRight"==t.key||"ArrowUp"==t.key||"ArrowDown"==t.key||"Control"==t.key||"c"==t.key||"a"==t.key||"C"==t.key||"A"==t.key||("Enter"==t.key?k():"Delete"==t.key?A():t.preventDefault()),"Backspace"==t.key&&E()}catch(e){console.log(e.message)}}));let H=(0,l.iH)([{Date:"8/20/2023",Question:"1+22-3434*54545/5656^4545",Answer:335314955.534}]);const x={class:"encapsulation"},U={class:"calculator_Body"},q={class:"historymode"},B=(0,n._)("span",{class:"arrow"},null,-1),D=[B],O={class:"HistroyDate"},F={class:"currentlyWriting"},j={class:"answer"},M={class:"Colum1_row1_item custom_row_pos"},T={class:"Colum1_row2_item custom_row_pos"},W=(0,n.uE)('<div class="Colum1_row3_item custom_row_pos"><button class="custom_row numbers_cus"> ∛ </button></div><div class="Colum1_row4_item custom_row_pos"><button class="custom_row numbers_cus"> π </button></div><div class="Colum1_row5_item getit"><button class="Special_Btn_Cus"> ^ </button></div><div class="Colum1_row6_item getit"><button class="Special_Btn_Cus"> r </button></div><div class="Colum1_row7_item getit"><button class="Special_Btn_Cus"> ! </button></div><div class="Colum2_row1_item getit"><button class="Special_Btn_Cus"> % </button></div>',6),z={class:"Colum2_row2_item"},I=(0,n.uE)('<div class="Colum2_row3_item"><button class="operations_cus divide" data-value="/"></button></div><div class="Colum2_row4_item"><button class="operations_cus Multiplication" data-value="*"></button></div><div class="Colum2_row5_item"><button class="operations_cus Minus" data-value="-"></button></div><div class="Colum2_row6_item"><button class="numbers_cus"> 1 </button></div><div class="Colum2_row7_item"><button class="numbers_cus"> 2 </button></div><div class="Colum3_row1_item"><button class="numbers_cus"> 3 </button></div>',6),N=(0,n._)("button",{class:"PlusAndEqualBtn operations_cus"}," + ",-1),P=[N],Q=(0,n.uE)('<div class="Colum3_row3_item"><button class="numbers_cus"> 4 </button></div><div class="Colum3_row4_item"><button class="numbers_cus"> 5 </button></div><div class="Colum3_row5_item"><button class="numbers_cus"> 6 </button></div><div class="Colum3_row6_item"><button class="numbers_cus">7 </button></div><div class="Colum4_row1_item"><button class="numbers_cus"> 8 </button></div><div class="Colum4_row2_item"><button class="numbers_cus"> 9 </button></div>',6),R=(0,n._)("div",{class:"Colum4_row4_item"},[(0,n._)("button",{class:"calculator-button numbers_cus","data-value":"."})],-1),J=(0,n._)("div",{class:"Colum4_row5_item"},[(0,n._)("button",{class:"numbers_cus zeroBtnWidth"}," 0 ")],-1);var $={__name:"App",setup(t){return(0,n.bv)((()=>{h(),document.querySelector(".WrittingArea").focus()})),window.addEventListener("keydown",(()=>{document.querySelector(".WrittingArea").focus()})),(t,e)=>((0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("button",{class:"ColorMode",onClick:e[0]||(e[0]=t=>(0,l.SU)(p)())},"Change"),(0,n._)("div",U,[(0,n._)("div",q,[(0,n._)("button",{class:(0,u.C_)(["histroy_btn",{activeArrow:(0,l.SU)(c)}]),onClick:e[1]||(e[1]=t=>c.value=!(0,l.SU)(c))},D,2)]),(0,n._)("div",{class:(0,u.C_)(["history",{activeHistory:(0,l.SU)(c)}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,l.SU)(H),((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n._)("p",O,(0,u.zw)(t.Date),1),(0,n._)("p",null,(0,u.zw)(t.Question)+" = "+(0,u.zw)(t.Answer),1)])))),128))],2),(0,n._)("div",{class:"screen",style:(0,u.j5)((0,l.SU)(r)?"top: 3vmin":"")},[(0,n._)("div",F,[(0,n.wy)((0,n._)("textarea",{class:"WrittingArea",name:"",id:"",cols:"23",rows:"1","onUpdate:modelValue":e[2]||(e[2]=t=>(0,l.dq)(d)?d.value=t:null)},null,512),[[o.nr,(0,l.SU)(d),void 0,{trim:!0}]])]),(0,n._)("div",j,[(0,n._)("p",null,(0,u.zw)((0,l.SU)(y)),1)])],4),(0,n._)("div",{class:"buttons_card",style:(0,u.j5)((0,l.SU)(r)?"top: 5vmin":"")},[(0,n._)("div",M,[(0,n._)("button",{class:"custom_row eraser_cus",onClick:e[3]||(e[3]=(...t)=>(0,l.SU)(A)&&(0,l.SU)(A)(...t))}," C ")]),(0,n._)("div",T,[(0,n._)("button",{class:"custom_row numbers_cus",onClick:e[4]||(e[4]=t=>(0,l.SU)(h)())}," E ")]),W,(0,n._)("div",z,[(0,n._)("button",{class:"eraser_cus",onClick:e[5]||(e[5]=t=>(0,l.SU)(E)())}," X ")]),I,(0,n._)("div",{class:(0,u.C_)(["Colum3_row2_item",{Change1:(0,l.SU)(_)}])},P,2),Q,(0,n._)("div",{class:(0,u.C_)(["Colum4_row3_item",{Change2:(0,l.SU)(_)}])},[(0,n._)("button",{class:"PlusAndEqualBtn operations_cus",onClick:e[6]||(e[6]=t=>(0,l.SU)(k)())}," = ")],2),R,J],4)])]))}};const G=$;var K=G;(0,o.ri)(K).mount("#app")}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var l=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}s.m=t,function(){s.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){s.amdO={}}(),function(){var t=[];s.O=function(e,o,n,l){if(!o){var u=1/0;for(r=0;r<t.length;r++){o=t[r][0],n=t[r][1],l=t[r][2];for(var a=!0,i=0;i<o.length;i++)(!1&l||u>=l)&&Object.keys(s.O).every((function(t){return s.O[t](o[i])}))?o.splice(i--,1):(a=!1,l<u&&(u=l));if(a){t.splice(r--,1);var c=n();void 0!==c&&(e=c)}}return e}l=l||0;for(var r=t.length;r>0&&t[r-1][2]>l;r--)t[r]=t[r-1];t[r]=[o,n,l]}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,l,u=o[0],a=o[1],i=o[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(i)var r=i(s)}for(e&&e(o);c<u.length;c++)l=u[c],s.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return s.O(r)},o=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(9006)}));o=s.O(o)})();
//# sourceMappingURL=app.039da139.js.map