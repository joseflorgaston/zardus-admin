(window.webpackJsonp=window.webpackJsonp||[]).push([[5,36,39],{436:function(t,e,n){"use strict";n.r(e);n(21),n(31),n(58),n(20),n(53);var r={props:{amount:{type:Number,required:!0},currency:{type:String,default:"Gs."}},computed:{formattedAmount:function(){return this.formatMiles(parseInt(this.amount))}},methods:{formatMiles:function(t){return this.currency+" "+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedAmount)+"\n")])}),[],!1,null,null,null);e.default=component.exports},577:function(t,e,n){"use strict";n.r(e);var r=n(581),o=n.n(r),l={props:{date:{type:String,required:!0},hasHour:{type:Boolean,default:!1}},computed:{formattedDate:function(){return this.hasHour?o()(this.date).format("DD/MM/YYYY HH:mm")+" hs.":o()(this.date).format("DD/MM/YYYY")}}},c=n(49),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedDate)+"\n")])}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",l="month",c="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),s=n-i<0,u=e.clone().add(r+(s?-1:1),l);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:a,D:h,h:u,m:s,s:i,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",w={};w[$]=y;var p=function(t){return t instanceof D},x=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)w[t]&&(r=t),e&&(w[t]=e,r=t);else{var i=t.name;w[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},k=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},S=g;S.l=x,S.i=p,S.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function y(t){this.$L=x(t.locale,null,!0),this.parse(t)}var v=y.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=k(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return k(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<k(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!S.u(e)||e,c=S.p(t),f=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},j=this.$W,y=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case l:return r?f(1,y):f(0,y+1);case o:var $=this.$locale().weekStart||0,w=(j<$?j+7:j)-$;return f(r?v-w:v+(6-w),y);case a:case h:return m(g+"Hours",0);case u:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,o=S.p(t),c="set"+(this.$u?"UTC":""),f=(n={},n[a]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[d]=c+"FullYear",n[u]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[o],m=o===a?this.$D+(e-this.$W):e;if(o===l||o===d){var j=this.clone().set(h,1);j.$d[f](m),j.init(),this.$d=j.set(h,Math.min(this.$D,j.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,c){var h,f=this;r=Number(r);var m=S.p(c),j=function(t){var e=k(f);return S.w(e.date(e.date()+Math.round(t*r)),f)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===a)return j(1);if(m===o)return j(7);var y=(h={},h[s]=e,h[u]=n,h[i]=t,h)[m]||1,v=this.$d.getTime()+r*y;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,l=n.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},d=function(t){return S.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:c(n.monthsShort,a,l,3),MMMM:c(l,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(j,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var m,j=S.p(h),y=k(r),v=(y.utcOffset()-this.utcOffset())*e,g=this-y,$=S.m(this,y);return $=(m={},m[d]=$/12,m[l]=$,m[c]=$/3,m[o]=(g-v)/6048e5,m[a]=(g-v)/864e5,m[u]=g/n,m[s]=g/e,m[i]=g/t,m)[j]||g,f?$:S.a($)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return w[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),b=D.prototype;return k.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",l],["$y",d],["$D",h]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,D,k),t.$i=!0),k},k.locale=x,k.isDayjs=p,k.unix=function(t){return k(1e3*t)},k.en=w[$],k.Ls=w,k.p={},k}()},582:function(t,e,n){var map={"./af":439,"./af.js":439,"./ar":440,"./ar-dz":441,"./ar-dz.js":441,"./ar-kw":442,"./ar-kw.js":442,"./ar-ly":443,"./ar-ly.js":443,"./ar-ma":444,"./ar-ma.js":444,"./ar-sa":445,"./ar-sa.js":445,"./ar-tn":446,"./ar-tn.js":446,"./ar.js":440,"./az":447,"./az.js":447,"./be":448,"./be.js":448,"./bg":449,"./bg.js":449,"./bm":450,"./bm.js":450,"./bn":451,"./bn-bd":452,"./bn-bd.js":452,"./bn.js":451,"./bo":453,"./bo.js":453,"./br":454,"./br.js":454,"./bs":455,"./bs.js":455,"./ca":456,"./ca.js":456,"./cs":457,"./cs.js":457,"./cv":458,"./cv.js":458,"./cy":459,"./cy.js":459,"./da":460,"./da.js":460,"./de":461,"./de-at":462,"./de-at.js":462,"./de-ch":463,"./de-ch.js":463,"./de.js":461,"./dv":464,"./dv.js":464,"./el":465,"./el.js":465,"./en-au":466,"./en-au.js":466,"./en-ca":467,"./en-ca.js":467,"./en-gb":468,"./en-gb.js":468,"./en-ie":469,"./en-ie.js":469,"./en-il":470,"./en-il.js":470,"./en-in":471,"./en-in.js":471,"./en-nz":472,"./en-nz.js":472,"./en-sg":473,"./en-sg.js":473,"./eo":474,"./eo.js":474,"./es":475,"./es-do":476,"./es-do.js":476,"./es-mx":477,"./es-mx.js":477,"./es-us":478,"./es-us.js":478,"./es.js":475,"./et":479,"./et.js":479,"./eu":480,"./eu.js":480,"./fa":481,"./fa.js":481,"./fi":482,"./fi.js":482,"./fil":483,"./fil.js":483,"./fo":484,"./fo.js":484,"./fr":485,"./fr-ca":486,"./fr-ca.js":486,"./fr-ch":487,"./fr-ch.js":487,"./fr.js":485,"./fy":488,"./fy.js":488,"./ga":489,"./ga.js":489,"./gd":490,"./gd.js":490,"./gl":491,"./gl.js":491,"./gom-deva":492,"./gom-deva.js":492,"./gom-latn":493,"./gom-latn.js":493,"./gu":494,"./gu.js":494,"./he":495,"./he.js":495,"./hi":496,"./hi.js":496,"./hr":497,"./hr.js":497,"./hu":498,"./hu.js":498,"./hy-am":499,"./hy-am.js":499,"./id":500,"./id.js":500,"./is":501,"./is.js":501,"./it":502,"./it-ch":503,"./it-ch.js":503,"./it.js":502,"./ja":504,"./ja.js":504,"./jv":505,"./jv.js":505,"./ka":506,"./ka.js":506,"./kk":507,"./kk.js":507,"./km":508,"./km.js":508,"./kn":509,"./kn.js":509,"./ko":510,"./ko.js":510,"./ku":511,"./ku.js":511,"./ky":512,"./ky.js":512,"./lb":513,"./lb.js":513,"./lo":514,"./lo.js":514,"./lt":515,"./lt.js":515,"./lv":516,"./lv.js":516,"./me":517,"./me.js":517,"./mi":518,"./mi.js":518,"./mk":519,"./mk.js":519,"./ml":520,"./ml.js":520,"./mn":521,"./mn.js":521,"./mr":522,"./mr.js":522,"./ms":523,"./ms-my":524,"./ms-my.js":524,"./ms.js":523,"./mt":525,"./mt.js":525,"./my":526,"./my.js":526,"./nb":527,"./nb.js":527,"./ne":528,"./ne.js":528,"./nl":529,"./nl-be":530,"./nl-be.js":530,"./nl.js":529,"./nn":531,"./nn.js":531,"./oc-lnc":532,"./oc-lnc.js":532,"./pa-in":533,"./pa-in.js":533,"./pl":534,"./pl.js":534,"./pt":535,"./pt-br":536,"./pt-br.js":536,"./pt.js":535,"./ro":537,"./ro.js":537,"./ru":538,"./ru.js":538,"./sd":539,"./sd.js":539,"./se":540,"./se.js":540,"./si":541,"./si.js":541,"./sk":542,"./sk.js":542,"./sl":543,"./sl.js":543,"./sq":544,"./sq.js":544,"./sr":545,"./sr-cyrl":546,"./sr-cyrl.js":546,"./sr.js":545,"./ss":547,"./ss.js":547,"./sv":548,"./sv.js":548,"./sw":549,"./sw.js":549,"./ta":550,"./ta.js":550,"./te":551,"./te.js":551,"./tet":552,"./tet.js":552,"./tg":553,"./tg.js":553,"./th":554,"./th.js":554,"./tk":555,"./tk.js":555,"./tl-ph":556,"./tl-ph.js":556,"./tlh":557,"./tlh.js":557,"./tr":558,"./tr.js":558,"./tzl":559,"./tzl.js":559,"./tzm":560,"./tzm-latn":561,"./tzm-latn.js":561,"./tzm.js":560,"./ug-cn":562,"./ug-cn.js":562,"./uk":563,"./uk.js":563,"./ur":564,"./ur.js":564,"./uz":565,"./uz-latn":566,"./uz-latn.js":566,"./uz.js":565,"./vi":567,"./vi.js":567,"./x-pseudo":568,"./x-pseudo.js":568,"./yo":569,"./yo.js":569,"./zh-cn":570,"./zh-cn.js":570,"./zh-hk":571,"./zh-hk.js":571,"./zh-mo":572,"./zh-mo.js":572,"./zh-tw":573,"./zh-tw.js":573};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=582},592:function(t,e,n){"use strict";(function(t){"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){t.exports=function t(data,e,n){var r,o,l=window,c="application/octet-stream",d=n||c,h=data,f=!e&&!n&&h,m=document.createElement("a"),j=function(a){return String(a)},y=l.Blob||l.MozBlob||l.WebKitBlob||j,v=e||"download";if(y=y.call?y.bind(l):Blob,"true"===String(this)&&(d=(h=[h,d])[0],h=h[1]),f&&f.length<2048&&(v=f.split("/").pop().split("?")[0],m.href=f,-1!==m.href.indexOf(f))){var $=new XMLHttpRequest;return $.open("GET",f,!0),$.responseType="blob",$.onload=function(e){t(e.target.response,v,c)},setTimeout((function(){$.send()}),0),$}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(h)){if(!(h.length>2096103.424&&y!==j))return navigator.msSaveBlob?navigator.msSaveBlob(k(h),v):S(h);d=(h=k(h)).type||c}else if(/([\x80-\xff])/.test(h)){for(var i=0,w=new Uint8Array(h.length),x=w.length;i<x;++i)w[i]=h.charCodeAt(i);h=new y([w],{type:d})}function k(t){for(var e=t.split(/[:;,]/),n=e[1],r=("base64"==e[2]?atob:decodeURIComponent)(e.pop()),o=r.length,i=0,l=new Uint8Array(o);i<o;++i)l[i]=r.charCodeAt(i);return new y([l],{type:n})}function S(t,e){if("download"in m)return m.href=t,m.setAttribute("download",v),m.className="download-js-link",m.innerHTML="downloading...",m.style.display="none",document.body.appendChild(m),setTimeout((function(){m.click(),document.body.removeChild(m),!0===e&&setTimeout((function(){l.URL.revokeObjectURL(m.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=h instanceof y?h:new y([h],{type:d}),navigator.msSaveBlob)return navigator.msSaveBlob(r,v);if(l.URL)S(l.URL.createObjectURL(r),!0);else{if("string"==typeof r||r.constructor===j)try{return S("data:"+d+";base64,"+l.btoa(r))}catch(t){return S("data:"+d+","+encodeURIComponent(r))}(o=new FileReader).onload=function(t){S(this.result)},o.readAsDataURL(r)}return!0}}));var r=function(template,style,script,t,e,n,r,o,l,c){"boolean"!=typeof r&&(l=o,o=r,r=!1);var d,h="function"==typeof script?script.options:script;if(template&&template.render&&(h.render=template.render,h.staticRenderFns=template.staticRenderFns,h._compiled=!0,e&&(h.functional=!0)),t&&(h._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=d):style&&(d=r?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),d)if(h.functional){var f=h.render;h.render=function(t,e){return d.call(e),f(t,e)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,d):[d]}return script};const o={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName:()=>"export_"+(new Date).getTime(),downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"==typeof this.beforeGenerate&&await this.beforeGenerate();let data=this.data;if("function"!=typeof this.fetch&&data||(data=await this.fetch()),!data||!data.length)return;let t=this.getProcessedJson(data,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(t),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(t),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(t),this.name,"application/vnd.ms-excel")},export:async function(data,t,e){let r=this.base64ToBlob(data,e);"function"==typeof this.beforeFinish&&await this.beforeFinish(),n(r,t,e)},jsonToXLS(data){let t="<thead>";const e=Object.keys(data[0]).length;let n=this;const header=this.header||this.$attrs.title;header&&(t+=this.parseExtraData(header,'<tr><th colspan="'+e+'">${data}</th></tr>')),t+="<tr>";for(let e in data[0])t+="<th>"+e+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",data.map((function(e,r){t+="<tr>";for(let r in e)t+="<td>"+n.preprocessLongNum(n.valueReformattedForMultilines(e[r]))+"</td>";t+="</tr>"})),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+e+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV(data){let t=this;var e=[];const header=this.header||this.$attrs.title;header&&e.push(this.parseExtraData(header,"${data}\r\n"));for(let t in data[0])e.push(t),e.push(",");return e.pop(),e.push("\r\n"),data.map((function(n){for(let r in n){let o=n[r]+"";t.escapeCsv&&(o='="'+o+'"',o.match(/[,"\n]/)&&(o='"'+o.replace(/\"/g,'""')+'"')),e.push(o),e.push(",")}e.pop(),e.push("\r\n")})),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson(data,header){let t=this.getKeys(data,header),e=[],n=this;return data.map((function(r,o){let l={};for(let label in t){let e=t[label];l[label]=n.getValue(e,r)}e.push(l)})),e},getKeys(data,header){if(header)return header;let t={};for(let e in data[0])t[e]=e;return t},parseExtraData(t,e){let n="";if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&(n+=e.replace("${data}",t[i]));else n+=e.replace("${data}",t);return n},getValue(t,e){const n="object"!=typeof t?t:t.field;let r="string"!=typeof n?[]:n.split("."),o=this.defaultValue;return o=n?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[n]):e,t.hasOwnProperty("callback")&&(o=this.getValueFromCallback(o,t.callback)),o},valueReformattedForMultilines:t=>"string"==typeof t?t.replace(/\n/gi,"<br/>"):t,preprocessLongNum(t){if(this.stringifyLongNum){if(String(t).startsWith("0x"))return t;if(!isNaN(t)&&""!=t&&(t>99999999999||t<1e-13))return'="'+t+'"'}return t},getValueFromNestedItem(t,e){let n=t;for(let t of e)n&&(n=n[t]);return this.parseValue(n)},getValueFromCallback(t,e){if("function"!=typeof e)return this.defaultValue;const n=e(t);return this.parseValue(n)},parseValue(t){return t||0===t||"boolean"==typeof t?t:this.defaultValue},base64ToBlob(data,t){let e=window.btoa(window.unescape(encodeURIComponent(data))),n=atob(e),r=n.length,o=new Uint8ClampedArray(r);for(;r--;)o[r]=n.charCodeAt(r);return new Blob([o],{type:t})}}};var l=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v(" Download "+t._s(t.name)+" ")])],2)};l._withStripped=!0;var c=r({render:l,staticRenderFns:[]},undefined,o,undefined,!1,undefined,void 0,void 0);e.a=c}).call(this,n(67))}}]);