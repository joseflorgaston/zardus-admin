(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{659:function(e,t,o){var content=o(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(15).default)("5037e5c2",content,!0,{sourceMap:!1})},682:function(e,t,o){"use strict";o(659)},683:function(e,t,o){var r=o(14)(!1);r.push([e.i,".max-width{width:100%}",""]),e.exports=r},715:function(e,t,o){"use strict";o.r(t);var r=o(11),c=(o(75),o(32),{props:{editItem:{type:Object,required:!0}},computed:{},data:function(){return{isValid:!0,rules:[function(e){return!!e||"Este campo es requerido"}],form:{_id:"",name:"",address:"",contact:""}}},methods:{closeDialog:function(){this.$store.commit("setEditDialog")},openDeleteDialog:function(){this.$store.commit("setDeleteDialog")},updateProvider:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form={_id:e.editItem._id,name:e.editItem.name,address:e.editItem.address,contact:e.editItem.contact},console.log(e.form),e.$store.commit("setLoading"),t.next=5,e.$store.dispatch("updateProvider",e.form);case 5:return t.next=7,e.$store.dispatch("getProviders",{page:1,itemsPerPage:10});case 7:e.closeDialog(),e.$store.commit("setLoading");case 9:case"end":return t.stop()}}),t)})))()}}}),n=(o(682),o(43)),l=o(50),d=o.n(l),m=o(219),v=o(201),f=o(82),_=o(456),x=o(447),h=o(457),V=o(202),w=o(458),I=o(459),D=o(445),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",[o("v-card-title",{staticClass:"text-h5 white--text primary"},[e._v("\n    Editar Proveedor\n    "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.closeDialog}},[o("v-icon",{attrs:{color:"white"}},[e._v(" mdi-close ")])],1)],1),e._v(" "),o("v-form",{model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[o("v-row",{staticClass:"mt-5 max-width mb-5"},[o("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[o("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:e.rules},model:{value:e.editItem.name,callback:function(t){e.$set(e.editItem,"name",t)},expression:"editItem.name"}})],1),e._v(" "),o("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4"}},[o("v-text-field",{attrs:{color:"accent",label:"Contacto"},model:{value:e.editItem.contact,callback:function(t){e.$set(e.editItem,"contact",t)},expression:"editItem.contact"}})],1),e._v(" "),o("v-col",{attrs:{offset:"1",cols:"10",sm:"10"}},[o("v-text-field",{attrs:{color:"accent",label:"Direccion"},model:{value:e.editItem.address,callback:function(t){e.$set(e.editItem,"address",t)},expression:"editItem.address"}})],1)],1)],1),e._v(" "),o("v-divider"),e._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"error"},on:{click:e.openDeleteDialog}},[e._v("\n      Eliminar Proveedor\n    ")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"primary",disabled:!e.isValid},on:{click:e.updateProvider}},[e._v("\n      Guardar\n    ")]),e._v(" "),o("v-btn",{attrs:{text:""},on:{click:e.closeDialog}},[e._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardTitle:f.c,VCol:_.a,VDivider:x.a,VForm:h.a,VIcon:V.a,VRow:w.a,VSpacer:I.a,VTextField:D.a})}}]);