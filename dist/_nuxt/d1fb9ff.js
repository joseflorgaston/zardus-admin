(window.webpackJsonp=window.webpackJsonp||[]).push([[50,16,17,30,35,38],{434:function(t,e,n){"use strict";n.r(e);n(21),n(31),n(58),n(20),n(53);var r={props:{amount:{type:Number,required:!0},currency:{type:String,default:"Gs."}},computed:{formattedAmount:function(){return this.formatMiles(parseInt(this.amount))}},methods:{formatMiles:function(t){return this.currency+" "+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedAmount)+"\n")])}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("dc0628f2",content,!0,{sourceMap:!1})},440:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=r},577:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+_(r,2,"0")+":"+_(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:a,D:h,h:u,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",w={};w[x]=y;var p=function(t){return t instanceof D},$=function(t,e,n){var r;if(!t)return x;if("string"==typeof t)w[t]&&(r=t),e&&(w[t]=e,r=t);else{var i=t.name;w[i]=t,r=i}return!n&&r&&(x=r),r||!n&&x},C=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},S=g;S.l=$,S.i=p,S.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function y(t){this.$L=$(t.locale,null,!0),this.parse(t)}var _=y.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(v);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return S},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return C(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<C(t)},_.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),f=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},v=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,_=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case c:return r?f(1,y):f(0,y+1);case o:var x=this.$locale().weekStart||0,w=(m<x?m+7:m)-x;return f(r?_-w:_+(6-w),y);case a:case h:return v(g+"Hours",0);case u:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var n,o=S.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[a]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[u]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],v=o===a?this.$D+(e-this.$W):e;if(o===c||o===d){var m=this.clone().set(h,1);m.$d[f](v),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[S.p(t)]()},_.add=function(r,l){var h,f=this;r=Number(r);var v=S.p(l),m=function(t){var e=C(f);return S.w(e.date(e.date()+Math.round(t*r)),f)};if(v===c)return this.set(c,this.$M+r);if(v===d)return this.set(d,this.$y+r);if(v===a)return m(1);if(v===o)return m(7);var y=(h={},h[s]=e,h[u]=n,h[i]=t,h)[v]||1,_=this.$d.getTime()+r*y;return S.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},d=function(t){return S.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||v[t]||i.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,h,f){var v,m=S.p(h),y=C(r),_=(y.utcOffset()-this.utcOffset())*e,g=this-y,x=S.m(this,y);return x=(v={},v[d]=x/12,v[c]=x,v[l]=x/3,v[o]=(g-_)/6048e5,v[a]=(g-_)/864e5,v[u]=g/n,v[s]=g/e,v[i]=g/t,v)[m]||g,f?x:S.a(x)},_.daysInMonth=function(){return this.endOf(c).$D},_.$locale=function(){return w[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},_.clone=function(){return S.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},y}(),b=D.prototype;return C.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",d],["$D",h]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,D,C),t.$i=!0),C},C.locale=$,C.isDayjs=p,C.unix=function(t){return C(1e3*t)},C.en=w[x],C.Ls=w,C.p={},C}()},580:function(t,e,n){"use strict";n.r(e);var r=n(577),o=n.n(r),c={props:{date:{type:String,required:!0},hasHour:{type:Boolean,default:!1}},computed:{formattedDate:function(){return this.hasHour?o()(this.date).format("DD/MM/YYYY HH:mm")+" hs.":o()(this.date).format("DD/MM/YYYY")}}},l=n(49),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedDate)+"\n")])}),[],!1,null,null,null);e.default=component.exports},590:function(t,e,n){"use strict";var r=n(2),o=(n(21),n(439),n(200)),c=n(25),l=n(201),d=n(123),h=n(581),f=n(35),v=n(0),m=n(5),y=n(4);e.a=Object(y.a)(c.a,l.a,d.a,h.a,f.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(r+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.g)(this.maxWidth),minWidth:Object(v.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(v.t)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===v.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},610:function(t,e,n){!function(t){"use strict";function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(t){a=!0,i=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var r,i,o,u,a=null,c="number"==typeof e?e:(i=(r=n(String(e).split(/(ms|s)/i),2))[0],u=void 0===(o=r[1])?"ms":o,Number(i)*{ms:1,s:1e3}[u]),l=function(){for(var e=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=function(){a=null,t.apply(e,r)};clearTimeout(a),(a=setTimeout(o,c))||t.apply(this,r)};return l.cancel=function(){clearTimeout(a),a=null},l}function o(t){return t.map((function(t){return t.toLowerCase()}))}function u(t,e){var n=(t.getNamedItem("debounce-events")||{}).value,r=void 0!==n&&n;return o(r?r.split(","):function(t){return Array.isArray(t)?t:null==t?[]:[t]}(e))}function a(t){return""===t}function c(t,e){return"Enter"===t&&(!e.lock||e.unlock)}function l(t,e,n){return a(t)&&n.fireonempty&&("Enter"===e||" "===e)}function d(t){var e=n(String(t).split("."),1)[0];return Number(e)>=3?"mounted":"bind"}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.lock,o=void 0!==r&&r,s=n.listenTo,h=void 0===s?"keyup":s,f=n.defaultTime,v=void 0===f?"300ms":f,m=n.fireOnEmpty,p=void 0!==m&&m,b=n.cancelOnEmpty,g=void 0!==b&&b,y=n.trim,_=void 0!==y&&y;return e({},d(t),(function(t,e){var n=e.value,r=e.arg,d=void 0===r?v:r,s=e.modifiers,f=Object.assign({lock:o,trim:_,fireonempty:p,cancelonempty:g},s),m=u(t.attributes,h),b=i((function(t){n(t.target.value,t)}),d);function y(t){var e=f.trim?t.target.value.trim():t.target.value;a(e)&&f.cancelonempty?b.cancel():c(t.key,f)||l(e,t.key,f)?(b.cancel(),n(t.target.value,t)):b(t)}m.forEach((function(e){t.addEventListener(e,y)}))}))}s();var h={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.directive("debounce",s(t.version,e))}};t.debounce=i,t.default=h,t.getDirective=s,Object.defineProperty(t,"__esModule",{value:!0})}(e)},613:function(t,e,n){"use strict";(function(t){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){t.exports=function t(data,e,n){var r,o,c=window,l="application/octet-stream",d=n||l,h=data,f=!e&&!n&&h,v=document.createElement("a"),m=function(a){return String(a)},y=c.Blob||c.MozBlob||c.WebKitBlob||m,_=e||"download";if(y=y.call?y.bind(c):Blob,"true"===String(this)&&(d=(h=[h,d])[0],h=h[1]),f&&f.length<2048&&(_=f.split("/").pop().split("?")[0],v.href=f,-1!==v.href.indexOf(f))){var x=new XMLHttpRequest;return x.open("GET",f,!0),x.responseType="blob",x.onload=function(e){t(e.target.response,_,l)},setTimeout((function(){x.send()}),0),x}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(h)){if(!(h.length>2096103.424&&y!==m))return navigator.msSaveBlob?navigator.msSaveBlob(C(h),_):S(h);d=(h=C(h)).type||l}else if(/([\x80-\xff])/.test(h)){for(var i=0,w=new Uint8Array(h.length),$=w.length;i<$;++i)w[i]=h.charCodeAt(i);h=new y([w],{type:d})}function C(t){for(var e=t.split(/[:;,]/),n=e[1],r=("base64"==e[2]?atob:decodeURIComponent)(e.pop()),o=r.length,i=0,c=new Uint8Array(o);i<o;++i)c[i]=r.charCodeAt(i);return new y([c],{type:n})}function S(t,e){if("download"in v)return v.href=t,v.setAttribute("download",_),v.className="download-js-link",v.innerHTML="downloading...",v.style.display="none",document.body.appendChild(v),setTimeout((function(){v.click(),document.body.removeChild(v),!0===e&&setTimeout((function(){c.URL.revokeObjectURL(v.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=h instanceof y?h:new y([h],{type:d}),navigator.msSaveBlob)return navigator.msSaveBlob(r,_);if(c.URL)S(c.URL.createObjectURL(r),!0);else{if("string"==typeof r||r.constructor===m)try{return S("data:"+d+";base64,"+c.btoa(r))}catch(t){return S("data:"+d+","+encodeURIComponent(r))}(o=new FileReader).onload=function(t){S(this.result)},o.readAsDataURL(r)}return!0}}));var r=function(template,style,script,t,e,n,r,o,c,l){"boolean"!=typeof r&&(c=o,o=r,r=!1);var d,h="function"==typeof script?script.options:script;if(template&&template.render&&(h.render=template.render,h.staticRenderFns=template.staticRenderFns,h._compiled=!0,e&&(h.functional=!0)),t&&(h._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=d):style&&(d=r?function(){style.call(this,l(this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),d)if(h.functional){var f=h.render;h.render=function(t,e){return d.call(e),f(t,e)}}else{var v=h.beforeCreate;h.beforeCreate=v?[].concat(v,d):[d]}return script};const o={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName:()=>"export_"+(new Date).getTime(),downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"==typeof this.beforeGenerate&&await this.beforeGenerate();let data=this.data;if("function"!=typeof this.fetch&&data||(data=await this.fetch()),!data||!data.length)return;let t=this.getProcessedJson(data,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(t),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(t),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(t),this.name,"application/vnd.ms-excel")},export:async function(data,t,e){let r=this.base64ToBlob(data,e);"function"==typeof this.beforeFinish&&await this.beforeFinish(),n(r,t,e)},jsonToXLS(data){let t="<thead>";const e=Object.keys(data[0]).length;let n=this;const header=this.header||this.$attrs.title;header&&(t+=this.parseExtraData(header,'<tr><th colspan="'+e+'">${data}</th></tr>')),t+="<tr>";for(let e in data[0])t+="<th>"+e+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",data.map((function(e,r){t+="<tr>";for(let r in e)t+="<td>"+n.preprocessLongNum(n.valueReformattedForMultilines(e[r]))+"</td>";t+="</tr>"})),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+e+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV(data){let t=this;var e=[];const header=this.header||this.$attrs.title;header&&e.push(this.parseExtraData(header,"${data}\r\n"));for(let t in data[0])e.push(t),e.push(",");return e.pop(),e.push("\r\n"),data.map((function(n){for(let r in n){let o=n[r]+"";t.escapeCsv&&(o='="'+o+'"',o.match(/[,"\n]/)&&(o='"'+o.replace(/\"/g,'""')+'"')),e.push(o),e.push(",")}e.pop(),e.push("\r\n")})),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson(data,header){let t=this.getKeys(data,header),e=[],n=this;return data.map((function(r,o){let c={};for(let label in t){let e=t[label];c[label]=n.getValue(e,r)}e.push(c)})),e},getKeys(data,header){if(header)return header;let t={};for(let e in data[0])t[e]=e;return t},parseExtraData(t,e){let n="";if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&(n+=e.replace("${data}",t[i]));else n+=e.replace("${data}",t);return n},getValue(t,e){const n="object"!=typeof t?t:t.field;let r="string"!=typeof n?[]:n.split("."),o=this.defaultValue;return o=n?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[n]):e,t.hasOwnProperty("callback")&&(o=this.getValueFromCallback(o,t.callback)),o},valueReformattedForMultilines:t=>"string"==typeof t?t.replace(/\n/gi,"<br/>"):t,preprocessLongNum(t){if(this.stringifyLongNum){if(String(t).startsWith("0x"))return t;if(!isNaN(t)&&""!=t&&(t>99999999999||t<1e-13))return'="'+t+'"'}return t},getValueFromNestedItem(t,e){let n=t;for(let t of e)n&&(n=n[t]);return this.parseValue(n)},getValueFromCallback(t,e){if("function"!=typeof e)return this.defaultValue;const n=e(t);return this.parseValue(n)},parseValue(t){return t||0===t||"boolean"==typeof t?t:this.defaultValue},base64ToBlob(data,t){let e=window.btoa(window.unescape(encodeURIComponent(data))),n=atob(e),r=n.length,o=new Uint8ClampedArray(r);for(;r--;)o[r]=n.charCodeAt(r);return new Blob([o],{type:t})}}};var c=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v(" Download "+t._s(t.name)+" ")])],2)};c._withStripped=!0;var l=r({render:c,staticRenderFns:[]},undefined,o,undefined,!1,undefined,void 0,void 0);e.a=l}).call(this,n(67))},625:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(73),n(282),n(41),n(610),{props:{title:{type:String,required:!0},link:{type:String,required:!0},searchUrl:{type:String,required:!0}},data:function(){return{searchText:"",loading:!1}},methods:{goToPage:function(){this.$router.push(this.link)},search:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,clearTimeout(t.debounce),t.debounce=setTimeout(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.searchText.length){e.next=5;break}return e.next=3,t.$store.dispatch("sharedSearch",t.searchUrl+"0/10");case 3:e.next=7;break;case 5:return e.next=7,t.$store.dispatch("sharedSearch",t.searchUrl+t.searchText);case 7:t.loading=!1;case 8:case"end":return e.stop()}}),e)}))),600);case 3:case"end":return e.stop()}}),e)})))()}}}),c=n(49),l=n(51),d=n.n(l),h=n(204),f=n(747),v=n(186),m=n(748),y=n(582),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12","offset-md":"0",sm:"3"}},[n("h2",[t._v(t._s(t.title))])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"5"}},[n("v-text-field",{attrs:{rounded:"","single-line":"",outlined:"",filled:"",dense:"",label:"Buscar "+t.title,"prepend-inner-icon":"mdi-magnify",loading:t.loading},on:{keyup:function(e){return t.search()}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"3","offset-md":"1",md:"2"}},[n("v-btn",{attrs:{color:"primary",width:"100%"},on:{click:function(e){return t.goToPage()}}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus")]),t._v("\n      Agregar\n    ")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VCol:f.a,VIcon:v.a,VRow:m.a,VTextField:y.a})},627:function(t,e,n){"use strict";n.r(e);var r={components:{JsonExcel:n(613).a},props:{item:{type:Object,required:!0}},data:function(){return{fields:{customer:"Cliente",deliveryDate:"Fecha de entrega",paymentMethod:"Metodo de pago",createdOn:"Fecha de pedido",status:"Estado",totalAmount:"Monto Total",totalPayed:"Total Pagado"}}},methods:{closeDialog:function(){this.$store.commit("setDialog")},getStatusClass:function(){return"Aguardando"==this.item.status?"blue--text ligthen-1":"Cancelado"==this.item.status?"red--text":"Preparado"==this.item.status?"yellow--text":"success--text"},exportToExcel:function(){},getData:function(){}}},o=n(49),c=n(51),l=n.n(c),d=n(204),h=n(185),f=n(156),v=n(747),m=n(412),y=n(186),_=n(748),x=n(426),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Detalles del Pedido\n    "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{color:"green"},on:{click:function(e){return t.exportToExcel()}}},[n("json-excel",{staticClass:"btn green white--text",attrs:{data:t.getData()}},[t._v("\n        Exportar\n        "),n("v-icon",{staticClass:"pl-1"},[t._v("mdi-download")])],1)],1),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"mt-4 black--text"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"d-flex"},[n("span",{staticClass:"font-weight-black"},[t._v("Fecha del pedido: ")]),t._v(" "),n("div",{staticClass:"pl-1"},[n("shared-formatted-date",{attrs:{date:t.item.createdOn||""}})],1)])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("span",{staticClass:"font-weight-black"},[t._v("Cliente:")]),t._v(" "),n("span",[t._v(t._s(t.item.customer))])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"d-flex"},[n("span",{staticClass:"font-weight-black"},[t._v("Fecha de entrega: ")]),t._v(" "),n("div",{staticClass:"pl-1"},[n("shared-formatted-date",{attrs:{date:t.item.deliveryDate||""}})],1)])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("span",{staticClass:"font-weight-black"},[t._v("Metodo de pago:")]),t._v(" "),n("span",[t._v(t._s(t.item.paymentMethod))])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("span",{staticClass:"font-weight-black"},[t._v("Encargado:")]),t._v(" "),n("span",[t._v(t._s(t.item.userName))])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("span",{staticClass:"font-weight-black"},[t._v("Estado:")]),t._v(" "),n("span",{class:t.getStatusClass()},[t._v(t._s(t.item.status))])])],1),t._v(" "),n("v-divider",{staticClass:"mt-3"}),t._v(" "),n("center",[n("div",{staticClass:"mt-2"},[n("h3",[t._v("Detalle del pedido:")])])]),t._v(" "),n("v-row",{staticClass:"pt-2 pb-0"},[n("v-col",{staticClass:"pb-0",attrs:{cols:"4"}},[n("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v(" Producto")])]),t._v(" "),n("v-col",{staticClass:"pb-0",attrs:{cols:"3"}},[n("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v(" Precio")])]),t._v(" "),n("v-col",{staticClass:"pb-0",attrs:{cols:"2"}},[n("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v(" Cantidad")])]),t._v(" "),n("v-col",{staticClass:"pb-0",attrs:{cols:"3"}},[n("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v(" SubTotal")])])],1),t._v(" "),t._l(t.item.details,(function(element,e){return n("v-row",{key:e,staticClass:"pt-0"},[n("v-col",{staticClass:"pt-0",attrs:{cols:"4"}},[t._v("\n        "+t._s(element.product.name)+"\n      ")]),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"3"}},[n("shared-money",{attrs:{amount:parseInt(element.product.price)}})],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2"}},[t._v("\n        "+t._s(element.quantity)+" "+t._s(element.product.unitOfMeasure)+"\n      ")]),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"3"}},[n("shared-money",{attrs:{amount:parseInt(element.subTotal)}})],1)],1)}))],2),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("div",{staticClass:"d-flex"},[n("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v("Monto Total:")]),t._v(" "),n("shared-money",{staticClass:"pl-1 subtitle-2",attrs:{amount:t.item.totalAmount}})],1),t._v(" "),n("v-spacer"),n("v-btn",{staticClass:"pa-4",attrs:{text:""},on:{click:t.closeDialog}},[t._v("Cerrar")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{SharedFormattedDate:n(580).default,SharedMoney:n(434).default}),l()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VDivider:m.a,VIcon:y.a,VRow:_.a,VSpacer:x.a})},628:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(73),{props:{status:{type:String,required:!0},id:{type:String,required:!0}},methods:{getClass:function(){return"Entregado"==this.status||"Pagado"==this.status?"success--text":"error--text"},changeOrderStatus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.closeDialog(),t.$store.commit("setLoading"),e.next=5,t.$axios.patch("api/order/update/status/"+t.id,{status:t.status});case 5:return t.$store.commit("setSuccess","Pedido actualizado exitosamente"),e.next=8,location.reload();case 8:t.$store.commit("setLoading"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),t.$store.commit("setError","Ha ocurrido un error al intentar actualizar el pedido");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},closeDialog:function(){this.$store.commit("setEditDialog")}}}),c=n(49),l=n(51),d=n.n(l),h=n(204),f=n(185),v=n(156),m=n(412),y=n(186),_=n(426),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Estado del Pedido.\n    "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),n("div",{staticClass:"ma-8"},[n("center",[n("h2",[t._v("\n        ¿Deseas cambiar el estado del pedido a\n        "),n("span",{class:t.getClass()},[t._v(t._s(t.status))]),t._v(" ?\n      ")])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.changeOrderStatus}},[t._v(" Aceptar ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VCard:f.a,VCardActions:v.a,VCardTitle:v.c,VDivider:m.a,VIcon:y.a,VSpacer:_.a})},757:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(73),n(627)),c=n(628),l=n(625),d={components:{ViewOrderDialog:o.default,ChangeOrderStatusDialog:c.default,PedidosHeader:l.default},computed:{items:{get:function(){return this.$store.state.items},set:function(t){this.$store.commit("setItems",t)}},dialog:function(){return this.$store.state.dialog},editDialog:{get:function(){return this.$store.state.editDialog},set:function(){this.$store.commit("setEditDialog")}},count:function(){return this.$store.state.count}},data:function(){return{disabledSwitch:!0,loading:!0,statusModalValue:"",statusModalId:"",headers:[{text:"Fecha",value:"createdOn",class:"header-color"},{text:"Fecha entrega",value:"deliveryDate",class:"header-color"},{text:"Cliente",value:"customer",class:"header-color"},{text:"Método de pago",value:"paymentMethod",class:"header-color"},{text:"Monto",value:"totalAmount",class:"header-color"},{text:"Estado",value:"status",class:"header-color"},{text:"Acciones",value:"actions",class:"header-color"}],page:1,viewItem:{},itemsPerPage:10}},methods:{viewOrder:function(t){this.viewItem=t,this.$store.commit("setDialog")},editOrder:function(t){this.$router.push({path:"/orders/create",query:{_id:"".concat(t._id)}})},nextPage:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page=t,n.next=3,e.getProducts();case 3:case"end":return n.stop()}}),n)})))()},otherItemCount:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.itemsPerPage=t,n.next=3,e.getProducts();case 3:case"end":return n.stop()}}),n)})))()},getOrders:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$store.commit("setLoading"),e.next=4,t.$store.dispatch("getOrders",{page:t.page,itemsPerPage:t.itemsPerPage});case 4:t.$store.commit("setLoading"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},changeState:function(t,e){this.statusModalValue=e,this.statusModalId=t,this.$store.commit("setEditDialog")}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getOrders();case 1:case"end":return e.stop()}}),e)})))()}},h=n(49),f=n(51),v=n.n(f),m=n(204),y=n(185),_=n(428),x=n(750),w=n(423),$=n(186),C=n(590),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("pedidos-header",{attrs:{title:"Pedidos",link:"orders/create",searchUrl:"/api/orders/"}}),t._v(" "),n("v-card",[n("v-data-table",{attrs:{items:t.items,headers:t.headers,"server-items-length":t.count,page:t.page,"items-per-page":t.itemsPerPage,loading:t.loading,"footer-props":{itemsPerPageOptions:[5,10,15]}},on:{"update:page":t.nextPage,"update:items-per-page":t.otherItemCount},scopedSlots:t._u([{key:"item.totalAmount",fn:function(t){var e=t.item;return[n("shared-money",{attrs:{amount:e.totalAmount||0}})]}},{key:"item.createdOn",fn:function(t){var e=t.item;return[n("shared-formatted-date",{attrs:{date:e.createdOn||"",hasHour:!0}})]}},{key:"item.deliveryDate",fn:function(t){var e=t.item;return[n("shared-formatted-date",{attrs:{date:e.deliveryDate||""}})]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),o),[n("v-icon",{attrs:{color:"primary",title:"Detalle Pedido"},on:{click:function(e){return t.viewOrder(r)}}},[t._v("mdi-eye")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Ver Pedido")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),o),[n("v-icon",{attrs:{color:"primary",title:"Editar Pedido"},on:{click:function(e){return t.editOrder(r)}}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Editar Pedido")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),o),[n("v-icon",{attrs:{color:"error",title:"Cancelar Pedido"},on:{click:function(e){return t.changeState(r._id,"Cancelado")}}},[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Cancelar Pedido")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",disabled:"Preparado"!=r.status}},"v-btn",c,!1),o),[n("v-icon",{attrs:{color:"success",title:"Entregar Pedido"},on:{click:function(e){return t.changeState(r._id,"Entregado")}}},[t._v("mdi-check")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Cambiar estado a Entregado")])])]}},{key:"item.status",fn:function(e){var r=e.item;return["Aguardando"==r.status?n("div",{staticClass:"chip blue ligthen-1"},[t._v("\n          "+t._s(r.status)+"\n        ")]):t._e(),t._v(" "),"Preparado"==r.status?n("div",{staticClass:"chip yellow darken-3"},[t._v("\n          "+t._s(r.status)+"\n        ")]):t._e(),t._v(" "),"Entregado"==r.status?n("div",{staticClass:"chip success"},[t._v("\n          "+t._s(r.status)+"\n        ")]):t._e(),t._v(" "),"Cancelado"==r.status?n("div",{staticClass:"chip error"},[t._v("\n          "+t._s(r.status)+"\n        ")]):t._e()]}}],null,!0)})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("view-order-dialog",{attrs:{item:t.viewItem}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[n("change-order-status-dialog",{attrs:{id:t.statusModalId,status:t.statusModalValue}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{SharedMoney:n(434).default,SharedFormattedDate:n(580).default}),v()(component,{VBtn:m.a,VCard:y.a,VContainer:_.a,VDataTable:x.a,VDialog:w.a,VIcon:$.a,VTooltip:C.a})}}]);