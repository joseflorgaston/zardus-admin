(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{710:function(e,t,r){"use strict";r.r(t);var n=r(11),c=(r(75),r(39),{props:{title:{type:String,require:!0},hasSearchQuery:{type:Boolean,default:!1}},data:function(){return{searchText:"",loading:!1}},methods:{getHistoryOrders:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!0,clearTimeout(e.debounce),e.debounce=setTimeout(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchText.length){t.next=5;break}return t.next=3,e.$store.dispatch("sharedSearch","/api/orders/history/0/10");case 3:t.next=7;break;case 5:return t.next=7,e.$store.dispatch("sharedSearch","/api/ordershistory/search/"+e.searchText);case 7:e.loading=!1;case 8:case"end":return t.stop()}}),t)}))),600);case 3:case"end":return t.stop()}}),t)})))()}}}),o=r(43),l=r(50),d=r.n(l),h=r(445),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-wrap"},[e._m(0),e._v(" "),r("div",{staticClass:"col-12 col-sm-9 col-md-7 col-lg-6"},[r("v-text-field",{attrs:{rounded:"","single-line":"",outlined:"",filled:"",dense:"",label:"Buscar "+e.title,"prepend-inner-icon":"mdi-magnify",loading:e.loading},on:{keyup:function(t){return e.getHistoryOrders(t)}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 col-sm-3 col-md-5"},[r("h2",[e._v("Historial de pedidos")])])}],!1,null,null,null);t.default=component.exports;d()(component,{VTextField:h.a})}}]);