(window.webpackJsonp=window.webpackJsonp||[]).push([[44,36],{615:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,require:!0},hasSearchQuery:{type:Boolean,default:!1}},methods:{openCreateDialog:function(){this.$store.commit("setDialog")}}},o=r(49),l=r(52),c=r.n(l),d=r(205),f=r(746),m=r(186),v=r(747),h=r(580),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{attrs:{cols:"12","offset-md":"0",sm:"3"}},[r("h2",[e._v(e._s(e.title))])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"9",md:"5"}},[r("v-text-field",{attrs:{rounded:"","single-line":"",outlined:"",filled:"",dense:"",label:"Buscar "+e.title,"prepend-inner-icon":"mdi-magnify"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"3","offset-md":"1",md:"2"}},[r("v-btn",{attrs:{color:"primary",width:"100%","max-width":"250"},on:{click:function(t){return e.openCreateDialog()}}},[r("v-icon",{staticClass:"mr-2"},[e._v("mdi-plus")]),e._v("\n      Agregar\n    ")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCol:f.a,VIcon:m.a,VRow:v.a,VTextField:h.a})},752:function(e,t,r){"use strict";r.r(t);var n=r(7),o=(r(73),{auth:!0,data:function(){return{items:{}}},beforeMount:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getExpenses:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=r(49),c=r(52),d=r.n(c),f=r(185),m=r(749),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("shared-header",{attrs:{title:"Gastos Varios"}}),e._v(" "),r("v-card",[r("v-data-table")],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{SharedHeader:r(615).default}),d()(component,{VCard:f.a,VDataTable:m.a})}}]);