(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{705:function(e,t,r){"use strict";r.r(t);var o=r(10),c=(r(75),{props:{title:{type:String,required:!0},editItem:{type:Object,required:!0},deleteUrl:{type:String,required:!0},getUrl:{type:String,required:!0}},methods:{deleteItem:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.commit("setLoading"),e.$store.commit("setDeleteDialog"),t.next=5,e.$axios.$delete("".concat(e.deleteUrl,"/")+e.editItem._id);case 5:return e.$store.commit("setSuccess",e.title+" Eliminado exitosamente"),t.next=8,e.$axios.$get("".concat(e.getUrl));case 8:r=t.sent,e.$store.commit("setItems",r.data),e.$store.commit("setCount",r.count),e.$store.commit("setLoading"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),e.$store.commit("setError","Ha ocurrido un error");case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},closeDialog:function(){this.$store.commit("setDeleteDialog")}}}),n=r(43),l=r(50),d=r.n(l),m=r(219),v=r(201),_=r(82),$=r(447),h=r(202),x=r(459),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",{staticClass:"text-h5 white--text primary"},[e._v("\n    ¿Deseas deshacer esta "+e._s(e.title)+"?\n    "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.closeDialog}},[r("v-icon",{attrs:{color:"white"}},[e._v(" mdi-close ")])],1)],1),e._v(" "),r("div",{staticClass:"ma-8"},[r("center",[r("h2",[e._v(e._s(e.editItem.description))])])],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.deleteItem}},[e._v(" Eliminar ")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.closeDialog}},[e._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:_.a,VCardTitle:_.c,VDivider:$.a,VIcon:h.a,VSpacer:x.a})}}]);