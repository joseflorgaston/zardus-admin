(window.webpackJsonp=window.webpackJsonp||[]).push([[53,12,13,14,32],{572:function(t,e,o){"use strict";var r=o(2),n=(o(32),o(50),o(199),o(11),o(10),o(41),o(102),o(9),o(8),o(13),o(14),o(4)),c=o(85),l=o(122);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},573:function(t,e,o){var content=o(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("dc0628f2",content,!0,{sourceMap:!1})},574:function(t,e,o){var r=o(15)(!1);r.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=r},602:function(t,e,o){"use strict";var r=o(2),n=(o(21),o(573),o(201)),c=o(25),l=o(203),d=o(124),v=o(582),m=o(35),f=o(0),h=o(5),_=o(4);e.a=Object(_.a)(c.a,l.a,d.a,v.a,m.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||o?n=r+e.width/2-content.width/2:(this.left||this.right)&&(n=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=o+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=o+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(r+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.g)(this.maxWidth),minWidth:Object(f.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.t)(this,"activator",!0)&&Object(h.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},604:function(t,e,o){"use strict";o.r(e);var r=o(7),n=(o(73),{props:{title:{type:String,required:!0},editItem:{type:Object,required:!0},deleteUrl:{type:String,required:!0},getUrl:{type:String,required:!0}},methods:{deleteItem:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("setLoading"),t.$store.commit("setDeleteDialog"),e.next=5,t.$axios.$delete("".concat(t.deleteUrl,"/")+t.editItem._id);case 5:return console.log("setSuccess"),t.$store.commit("setSuccess",t.title+" Eliminado exitosamente"),console.log(t.getUrl),e.next=10,t.$axios.$get("".concat(t.getUrl));case 10:o=e.sent,t.$store.commit("setItems",o.data),t.$store.commit("setCount",o.count),t.$store.commit("setLoading"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),t.$store.commit("setError","Ha ocurrido un error");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()},closeDialog:function(){this.$store.commit("setDeleteDialog")}}}),c=o(49),l=o(52),d=o.n(l),v=o(205),m=o(185),f=o(156),h=o(410),_=o(186),x=o(424),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    ¿Deseas eliminar este "+t._s(t.title)+"?\n    "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[o("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),o("div",{staticClass:"ma-8"},[o("center",[o("h2",[t._v(t._s(t.editItem.name))])])],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"error"},on:{click:t.deleteItem}},[t._v(" Eliminar ")]),t._v(" "),o("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardTitle:f.c,VDivider:h.a,VIcon:_.a,VSpacer:x.a})},625:function(t,e,o){var content=o(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("ea377e62",content,!0,{sourceMap:!1})},626:function(t,e,o){var content=o(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5037e5c2",content,!0,{sourceMap:!1})},656:function(t,e,o){"use strict";o(625)},657:function(t,e,o){var r=o(15)(!1);r.push([t.i,".max-width{width:100%}",""]),t.exports=r},658:function(t,e,o){"use strict";o(626)},659:function(t,e,o){var r=o(15)(!1);r.push([t.i,".max-width{width:100%}",""]),t.exports=r},674:function(t,e,o){var content=o(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("699b8f8c",content,!0,{sourceMap:!1})},691:function(t,e,o){"use strict";o.r(e);var r=o(7),n=(o(73),o(41),{props:{title:{type:String,require:!0},hasSearchQuery:{type:Boolean,default:!1}},data:function(){return{searchText:"",loading:!1}},methods:{openCreateDialog:function(){this.$store.commit("setDialog")},getProviders:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,clearTimeout(t.debounce),t.debounce=setTimeout(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("searchProviders",t.searchText);case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)}))),600);case 3:case"end":return e.stop()}}),e)})))()}}}),c=o(49),l=o(52),d=o.n(l),v=o(205),m=o(186),f=o(579),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex flex-wrap"},[t._m(0),t._v(" "),o("div",{staticClass:"col-12 col-sm-9 col-md-4 col-lg-6"},[o("v-text-field",{attrs:{rounded:"","single-line":"",outlined:"",filled:"",dense:"",label:"Buscar "+t.title,"prepend-inner-icon":"mdi-magnify",loading:t.loading},on:{keyup:function(e){return t.getProviders(e)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),o("div",{staticClass:"col-6 col-md-3 col-lg-2"},[o("v-btn",{attrs:{color:"primary",width:"100%","max-width":"250"},on:{click:function(e){return t.openCreateDialog()}}},[o("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus")]),t._v("\n      Agregar\n    ")],1)],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 col-sm-3 col-md-2"},[o("h2",[t._v("Proveedores")])])}],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VIcon:m.a,VTextField:f.a})},692:function(t,e,o){"use strict";o.r(e);var r=o(7),n=(o(73),{data:function(){return{isValid:!0,rules:[function(t){return!!t||"Este campo es requerido"}],form:{name:"",address:"",contact:""}}},methods:{closeDialog:function(){this.$store.commit("setDialog"),this.resetForm()},save:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("setLoading"),e.next=3,t.$store.dispatch("saveProvider",t.form);case 3:return t.closeDialog(),e.next=6,t.$store.dispatch("getProviders",{page:1,itemsPerPage:10});case 6:t.$store.commit("setLoading");case 7:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.form={name:"",address:"",contact:""}}}}),c=(o(656),o(49)),l=o(52),d=o.n(l),v=o(205),m=o(185),f=o(156),h=o(746),_=o(410),x=o(572),w=o(186),D=o(747),y=o(424),$=o(579),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Agregar Proveedor\n    "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[o("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),o("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[o("v-row",{staticClass:"mt-5 max-width mb-5"},[o("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[o("h4",[t._v("Nombre")]),t._v(" "),o("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4"}},[o("h4",[t._v("Contacto")]),t._v(" "),o("v-text-field",{attrs:{color:"accent",label:"Contacto"},model:{value:t.form.contact,callback:function(e){t.$set(t.form,"contact",e)},expression:"form.contact"}})],1),t._v(" "),o("v-col",{attrs:{offset:"1",cols:"10",sm:"10"}},[o("h4",[t._v("Direccion")]),t._v(" "),o("v-text-field",{attrs:{color:"accent",label:"Direccion"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"primary",disabled:!t.isValid},on:{click:t.save}},[t._v("\n      Guardar\n    ")]),t._v(" "),o("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardTitle:f.c,VCol:h.a,VDivider:_.a,VForm:x.a,VIcon:w.a,VRow:D.a,VSpacer:y.a,VTextField:$.a})},693:function(t,e,o){"use strict";o.r(e);var r=o(7),n=(o(73),o(29),{props:{editItem:{type:Object,required:!0}},computed:{},data:function(){return{isValid:!0,rules:[function(t){return!!t||"Este campo es requerido"}],form:{_id:"",name:"",address:"",contact:""}}},methods:{closeDialog:function(){this.$store.commit("setEditDialog")},openDeleteDialog:function(){this.$store.commit("setDeleteDialog")},updateProvider:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form={_id:t.editItem._id,name:t.editItem.name,address:t.editItem.address,contact:t.editItem.contact},console.log(t.form),t.$store.commit("setLoading"),e.next=5,t.$store.dispatch("updateProvider",t.form);case 5:return e.next=7,t.$store.dispatch("getProviders",{page:1,itemsPerPage:10});case 7:t.closeDialog(),t.$store.commit("setLoading");case 9:case"end":return e.stop()}}),e)})))()}}}),c=(o(658),o(49)),l=o(52),d=o.n(l),v=o(205),m=o(185),f=o(156),h=o(746),_=o(410),x=o(572),w=o(186),D=o(747),y=o(424),$=o(579),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Editar Proveedor\n    "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[o("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),o("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[o("v-row",{staticClass:"mt-5 max-width mb-5"},[o("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[o("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.editItem.name,callback:function(e){t.$set(t.editItem,"name",e)},expression:"editItem.name"}})],1),t._v(" "),o("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4"}},[o("v-text-field",{attrs:{color:"accent",label:"Contacto"},model:{value:t.editItem.contact,callback:function(e){t.$set(t.editItem,"contact",e)},expression:"editItem.contact"}})],1),t._v(" "),o("v-col",{attrs:{offset:"1",cols:"10",sm:"10"}},[o("v-text-field",{attrs:{color:"accent",label:"Direccion"},model:{value:t.editItem.address,callback:function(e){t.$set(t.editItem,"address",e)},expression:"editItem.address"}})],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"error"},on:{click:t.openDeleteDialog}},[t._v("\n      Eliminar Proveedor\n    ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"primary",disabled:!t.isValid},on:{click:t.updateProvider}},[t._v("\n      Guardar\n    ")]),t._v(" "),o("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardTitle:f.c,VCol:h.a,VDivider:_.a,VForm:x.a,VIcon:w.a,VRow:D.a,VSpacer:y.a,VTextField:$.a})},737:function(t,e,o){"use strict";o(674)},738:function(t,e,o){var r=o(15)(!1);r.push([t.i,".header-color{color:#000!important;font-weight:700}.datatable-container{padding-top:20px;width:100%}",""]),t.exports=r},759:function(t,e,o){"use strict";o.r(e);var r=o(7),n=(o(73),o(29),o(691)),c=o(692),l=o(693),d=o(604),v={components:{ProvidersHeader:n.default,NewCategoryDialog:c.default,EditCategoryDialog:l.default,DeleteDialog:d.default},computed:{items:function(){return this.$store.state.items},dialog:{get:function(){return this.$store.state.dialog},set:function(){this.$store.commit("setDialog")}},editDialog:{get:function(){return this.$store.state.editDialog},set:function(){this.$store.commit("setEditDialog")}},deleteDialog:{get:function(){return this.$store.state.deleteDialog},set:function(){this.$store.commit("setDeleteDialog")}},count:function(){return this.$store.state.count}},data:function(){return{editedItem:{},loading:!1,datatableHeaders:[{text:"Nombre",value:"name",class:"header-color white--text"},{text:"Dirección",value:"address",class:"header-color white--text"},{text:"Contacto",value:"contact",class:"header-color white--text"},{text:"Acciones",value:"actions",class:"header-color white--text"}],page:1,itemsPerPage:10}},methods:{openEditDialog:function(t){this.editedItem={_id:t._id,name:t.name,address:t.address,contact:t.contact},this.$store.commit("setEditDialog")},openDeleteDialog:function(t){this.editedItem=t,this.$store.commit("setDeleteDialog")},openCreateDialog:function(){this.$store.commit("setDialog")},getProviders:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$store.commit("setLoading"),e.next=4,t.$store.dispatch("getProviders",{page:t.page,itemsPerPage:t.itemsPerPage});case 4:t.$store.commit("setLoading"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},nextPage:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.page=t,o.next=3,e.getProviders();case 3:case"end":return o.stop()}}),o)})))()},otherItemCount:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.itemsPerPage=t,o.next=3,e.getProviders();case 3:case"end":return o.stop()}}),o)})))()}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getProviders();case 1:case"end":return e.stop()}}),e)})))()}},m=(o(737),o(49)),f=o(52),h=o.n(f),_=o(205),x=o(185),w=o(746),D=o(749),y=o(421),$=o(186),V=o(747),P=o(602),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("providers-header",{staticClass:"mt-1",attrs:{title:"Proveedores"}}),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",md:"11"}},[o("v-card",[o("v-card",[o("v-data-table",{attrs:{headers:t.datatableHeaders,items:t.items,"server-items-length":t.count,page:t.page,"items-per-page":t.itemsPerPage,loading:t.loading,"footer-props":{itemsPerPageOptions:[5,10,15]}},on:{"update:page":t.nextPage,"update:items-per-page":t.otherItemCount},scopedSlots:t._u([{key:"item.actions",fn:function(e){var r=e.item;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openEditDialog(r)}}},"v-btn",c,!1),n),[o("v-icon",{attrs:{color:"primary",title:"editar"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v("Editar Proveedor")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDeleteDialog(r)}}},"v-btn",c,!1),n),[o("v-icon",{attrs:{color:"error",title:"eliminar"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v("Eliminar Proveedor")])])]}}],null,!0)})],1)],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("new-category-dialog")],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[o("edit-category-dialog",{attrs:{editItem:t.editedItem}})],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","min-width":"500",width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[o("delete-dialog",{attrs:{editItem:t.editedItem,title:"Proveedor",deleteUrl:"/api/provider/delete",getUrl:"/api/providers/"+(this.page-1)*this.itemsPerPage+"/"+this.itemsPerPage}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:_.a,VCard:x.a,VCol:w.a,VDataTable:D.a,VDialog:y.a,VIcon:$.a,VRow:V.a,VTooltip:P.a})}}]);