(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{607:function(e,t,r){"use strict";r.r(t);var o=r(5),c=(r(73),{props:{title:{type:String,required:!0},editItem:{type:Object,required:!0},deleteUrl:{type:String,required:!0},getUrl:{type:String,required:!0}},methods:{deleteItem:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$store.commit("setLoading"),e.$store.commit("setDeleteDialog"),t.next=5,e.$axios.$delete("".concat(e.deleteUrl,"/")+e.editItem._id);case 5:return console.log("setSuccess"),e.$store.commit("setSuccess",e.title+" Eliminado exitosamente"),console.log(e.getUrl),t.next=10,e.$axios.$get("".concat(e.getUrl));case 10:r=t.sent,e.$store.commit("setItems",r.data),e.$store.commit("setCount",r.count),e.$store.commit("setLoading"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),e.$store.commit("setError","Ha ocurrido un error");case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},closeDialog:function(){this.$store.commit("setDeleteDialog")}}}),n=r(51),l=r(53),m=r.n(l),d=r(206),v=r(185),_=r(156),$=r(413),h=r(186),x=r(427),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",{staticClass:"text-h5 white--text primary"},[e._v("\n    ¿Deseas eliminar este "+e._s(e.title)+"?\n    "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.closeDialog}},[r("v-icon",{attrs:{color:"white"}},[e._v(" mdi-close ")])],1)],1),e._v(" "),r("div",{staticClass:"ma-8"},[r("center",[r("h2",[e._v(e._s(e.editItem.name))])])],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.deleteItem}},[e._v(" Eliminar ")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.closeDialog}},[e._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:d.a,VCard:v.a,VCardActions:_.a,VCardTitle:_.c,VDivider:$.a,VIcon:h.a,VSpacer:x.a})}}]);