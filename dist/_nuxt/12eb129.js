(window.webpackJsonp=window.webpackJsonp||[]).push([[57,17,35,45],{468:function(t,e,r){"use strict";r.r(e);r(19),r(30),r(59),r(21),r(58);var n={props:{amount:{type:Number,required:!0},currency:{type:String,default:"Gs."}},computed:{formattedAmount:function(){return this.formatMiles(parseInt(this.amount))}},methods:{formatMiles:function(t){return this.currency+" "+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}}},o=r(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedAmount)+"\n")])}),[],!1,null,null,null);e.default=component.exports},608:function(t,e,r){var content=r(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("dc0628f2",content,!0,{sourceMap:!1})},609:function(t,e,r){var n=r(14)(!1);n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=n},639:function(t,e,r){"use strict";var n=r(1),o=(r(19),r(608),r(216)),c=r(22),l=r(217),d=r(134),m=r(623),v=r(37),f=r(0),h=r(6),x=r(4);e.a=Object(x.a)(c.a,l.a,d.a,m.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||r?o=n+e.width/2-content.width/2:(this.left||this.right)&&(o=n+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=r+e.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.g)(this.maxWidth),minWidth:Object(f.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.t)(this,"activator",!0)&&Object(h.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n.a)(t,this.contentClass,!0),Object(n.a)(t,"menuable__content__active",this.isActive),Object(n.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},640:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(75),{props:{title:{type:String,required:!0},editItem:{type:Object,required:!0},deleteUrl:{type:String,required:!0},getUrl:{type:String,required:!0}},methods:{deleteItem:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("setLoading"),t.$store.commit("setDeleteDialog"),e.next=5,t.$axios.$delete("".concat(t.deleteUrl,"/")+t.editItem._id);case 5:return t.$store.commit("setSuccess",t.title+" Eliminado exitosamente"),e.next=8,t.$axios.$get("".concat(t.getUrl));case 8:r=e.sent,t.$store.commit("setItems",r.data),t.$store.commit("setCount",r.count),t.$store.commit("setLoading"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t.$store.commit("setError","Ha ocurrido un error");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},closeDialog:function(){this.$store.commit("setDeleteDialog")}}}),c=r(43),l=r(50),d=r.n(l),m=r(219),v=r(201),f=r(82),h=r(447),x=r(202),_=r(459),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    ¿Deseas eliminar este "+t._s(t.title)+"?\n    "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[r("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),r("div",{staticClass:"ma-8"},[r("center",[r("h2",[t._v(t._s(t.editItem.name))])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:t.deleteItem}},[t._v(" Eliminar ")]),t._v(" "),r("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardTitle:f.c,VDivider:h.a,VIcon:x.a,VSpacer:_.a})},641:function(t,e,r){var content=r(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("0d0256e5",content,!0,{sourceMap:!1})},656:function(t,e,r){"use strict";r(641)},657:function(t,e,r){var n=r(14)(!1);n.push([t.i,".max-width{width:100%}",""]),t.exports=n},668:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(75),{data:function(){return{isValid:!0,rules:[function(t){return!!t||"Este campo es requerido"}],quantityRule:[function(t){return t>=0||"Coloca un numero mayor a 0"},function(t){return!!t||"Este campo es requerido"}],form:{name:"",category:"",price:0,unitOfMeasure:"unidades",stock:0,type:"Product"},categories:["Especias","Hierbas","Semillas","Frutos Secos","Deshidratados"]}},methods:{closeDialog:function(){this.$store.commit("setDialog")},resetForm:function(){this.form={name:"",category:"",price:0,unitOfMeasure:"gs",stock:0,type:""}},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.price=parseInt(t.form.price),t.form.stock=parseInt(t.form.stock),t.closeDialog(),t.$store.commit("setLoading"),e.next=6,t.$store.dispatch("saveProduct",t.form);case 6:return e.next=8,t.$store.dispatch("getProducts",{page:1,itemsPerPage:10});case 8:t.resetForm(),t.$store.commit("setLoading");case 10:case"end":return e.stop()}}),e)})))()}}}),c=(r(656),r(43)),l=r(50),d=r.n(l),m=r(612),v=r(219),f=r(201),h=r(82),x=r(456),_=r(447),k=r(457),y=r(202),w=r(458),C=r(610),I=r(459),M=r(445),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Agregar Producto\n    "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[r("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),r("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[r("v-row",{staticClass:"mt-5 max-width mb-5"},[r("v-col",{attrs:{offset:"1",cols:"10",sm:"10"}},[r("h4",[t._v("Producto.")]),t._v(" "),r("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[r("h4",[t._v("Categoría.")]),t._v(" "),r("v-autocomplete",{attrs:{color:"accent",label:"Categoria",items:t.categories,rules:t.rules},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4"}},[r("h4",[t._v("\n          Precio. ("+t._s("gramos"==t.form.unitOfMeasure?"Kg":"unidades")+")\n        ")]),t._v(" "),r("v-text-field",{attrs:{type:"number",color:"accent",label:"Precio",rules:t.quantityRule},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"1",cols:"5",sm:"5"}},[r("h4",[t._v("Unidad de medida.")]),t._v(" "),r("v-select",{attrs:{label:"Unidad de medida",items:["unidades","gramos"],rules:t.rules},model:{value:t.form.unitOfMeasure,callback:function(e){t.$set(t.form,"unitOfMeasure",e)},expression:"form.unitOfMeasure"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5"}},[r("h4",[t._v("Cantidad en stock. ("+t._s(t.form.unitOfMeasure)+")")]),t._v(" "),r("v-text-field",{attrs:{type:"number",color:"accent",label:"Stock",rules:t.quantityRule},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:!t.isValid},on:{click:t.save}},[t._v("\n      Guardar\n    ")]),t._v(" "),r("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardTitle:h.c,VCol:x.a,VDivider:_.a,VForm:k.a,VIcon:y.a,VRow:w.a,VSelect:C.a,VSpacer:I.a,VTextField:M.a})},710:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(28),r(44),r(169),r(21),r(58),r(75),{props:{editItem:{type:Object,required:!0}},data:function(){return{isValid:!1,isValidProduct:!1,stock:0,customIngredientQuantity:0,selectedMode:"Formula",products:[],quantityRules:[function(t){return t>0||"Este campo debe ser mayor a 0"},function(t){return!!t||"Este campo es requerido"}],rules:[function(t){return!!t||"Este campo es requerido"}],addStockType:["Formula","Elegir Ingredientes"],customIngredients:[],selectedProduct:{},autocomplete:null,search:null}},watch:{search:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!=t){r.next=2;break}return r.abrupt("return");case 2:if(!(t.length<2)){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,e.$axios.$get("/api/allProducts/".concat(t));case 6:n=r.sent,e.products=n.data;case 8:case"end":return r.stop()}}),r)})))()}},methods:{closeDialog:function(){this.$emit("closeEditMixtureStock")},addCustomProduct:function(){this.selectedProduct.discountQuantity=parseInt(this.customIngredientQuantity),this.customIngredients.includes(this.selectedProduct)||this.customIngredients.push(this.selectedProduct)},removeCustomIngredient:function(t){var e=this.customIngredients.indexOf(t);this.customIngredients.splice(e,1)},selectProduct:function(t){null!=t&&(this.autocomplete=null,this.selectedProduct=t)},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$store,e.prev=1,r.commit("setLoading"),e.next=5,t.$axios.$patch("api/mixtures/updateStock/"+t.editItem._id,{stock:t.stock,customIngredients:t.customIngredients}).catch((function(t){if(t.response)return r.commit("setError",t.response.data.message+"\n Ingrediente: "+t.response.data.producto+"\n Stock:"+t.response.data.stock+"\n Reservado:"+t.response.data.inOrder),t.response.status}));case 5:if(400!=e.sent){e.next=8;break}return e.abrupt("return",r.commit("setLoading"));case 8:return t.closeDialog(),t.$store.commit("setSuccess","La mezcla ha sido añadida al stock"),e.next=12,r.dispatch("getMixtures",{page:1,itemsPerPage:10});case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),r.commit("setError",e.t0.toString());case 18:r.commit("setLoading");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})))()}}}),c=r(43),l=r(50),d=r.n(l),m=r(612),v=r(219),f=r(201),h=r(82),x=r(456),_=r(447),k=r(457),y=r(202),w=r(458),C=r(610),I=r(459),M=r(445),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{width:"600","max-width":"100%"}},[r("v-card-title",{staticClass:"text-h5 white--text primary header"},[t._v("\n    Añadir "+t._s(t.editItem.name)+"\n    "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(e){return t.closeDialog()}}},[r("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),r("v-form",{staticClass:"mt-5",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[r("v-row",{staticStyle:{width:"100%"}},[r("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[r("h3",[t._v("Cantidad a añadir ("+t._s(t.editItem.unitOfMeasure)+").")]),t._v(" "),r("v-text-field",{attrs:{type:"number",id:"stock",name:"stock",label:"Cantidad a añadir",rules:t.quantityRules},model:{value:t.stock,callback:function(e){t.stock=e},expression:"stock"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1",cols:"10","offset-sm":"0",sm:"4"}},[r("h3",[t._v("Modo.")]),t._v(" "),r("v-select",{attrs:{type:"number",items:t.addStockType,label:"Modo",rules:t.rules},model:{value:t.selectedMode,callback:function(e){t.selectedMode=e},expression:"selectedMode"}})],1),t._v(" "),r("v-col",{directives:[{name:"show",rawName:"v-show",value:"Formula"==t.selectedMode,expression:"selectedMode == 'Formula'"}],attrs:{offset:"1",cols:"10"}},[r("center",[r("h3",[t._v("Ingredientes.")]),t._v(" "),r("v-divider",{staticClass:"primary my-1"}),t._v(" "),r("div",{staticClass:"d-flex d-flex justify-space-around flex-wrap"},[r("div",{staticClass:"col-4 cols-4"},[r("h4",[t._v("Producto.")])]),t._v(" "),r("div",{staticClass:"col-4 cols-4"},[r("h4",[t._v("\n                Cantidad por "+t._s(t.editItem.quantityPerIngredients)+"\n                "+t._s(t.editItem.unitOfMeasure)+".\n              ")])]),t._v(" "),r("div",{staticClass:"col-4 cols-4"},[r("h4",[t._v("Cantidad a descontar.")])])]),t._v(" "),t._l(t.editItem.ingredients,(function(e,i){return r("div",{key:i},[r("div",{staticClass:"d-flex d-flex justify-space-around flex-wrap"},[r("div",{staticClass:"col-4 cols-4"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),r("div",{staticClass:"col-4 cols-4"},[t._v("\n                "+t._s(e.quantity)+" "+t._s(e.unitOfMeasure)+"\n              ")]),t._v(" "),r("div",{staticClass:"col-4 cols-4"},[t._v("\n                "+t._s(e.quantity*t.stock/t.editItem.quantityPerIngredients)+"\n                "+t._s(e.unitOfMeasure)+".\n              ")])])])}))],2)],1),t._v(" "),r("v-col",{directives:[{name:"show",rawName:"v-show",value:"Formula"!=t.selectedMode,expression:"selectedMode != 'Formula'"}],attrs:{offset:"1",cols:"10"}},[r("center",[r("h3",[t._v("Ingredientes.")]),t._v(" "),r("v-divider",{staticClass:"primary my-1"}),t._v(" "),r("v-form",{model:{value:t.isValidProduct,callback:function(e){t.isValidProduct=e},expression:"isValidProduct"}},[r("div",{staticClass:"\n                d-flex d-flex\n                justify-space-around\n                flex-wrap\n                align-center\n              "},[r("div",{staticClass:"col-10 col-sm-4"},[r("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-seed",rules:t.rules,items:t.products,"item-text":"name","search-input":t.search,"return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:function(e){return t.selectProduct(e)}},model:{value:t.autocomplete,callback:function(e){t.autocomplete=e},expression:"autocomplete"}})],1),t._v(" "),r("div",{staticClass:"col-10 col-sm-4"},[r("v-text-field",{attrs:{rules:t.quantityRules,label:"Cantidad",type:"number",name:"quantity"},model:{value:t.customIngredientQuantity,callback:function(e){t.customIngredientQuantity=e},expression:"customIngredientQuantity"}})],1),t._v(" "),r("div",{staticClass:"col-10 col-sm-4"},[r("v-btn",{attrs:{color:"primary",disabled:!t.isValidProduct},on:{click:function(e){return t.addCustomProduct()}}},[t._v("\n                  Agregar\n                ")])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.customIngredients.length>0,expression:"customIngredients.length > 0"}],staticClass:"col-5"},[r("h4",[t._v("Producto.")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.customIngredients.length>0,expression:"customIngredients.length > 0"}],staticClass:"col-5"},[r("h4",[t._v("Cantidad a descontar.")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.customIngredients.length>0,expression:"customIngredients.length > 0"}],staticClass:"col-2"})])]),t._v(" "),t._l(t.customIngredients,(function(e,i){return r("div",{key:i},[r("div",{staticClass:"d-flex d-flex justify-space-around flex-wrap"},[r("div",{staticClass:"col-5"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),r("div",{staticClass:"col-5"},[t._v("\n                "+t._s(e.discountQuantity)+"\n                "+t._s(e.unitOfMeasure)+".\n              ")]),t._v(" "),r("div",{staticClass:"col-2"},[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.removeCustomIngredient()}}},[r("v-icon",[t._v("mdi-close")])],1)],1)])])}))],2)],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"d-flex flex-wrap"},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:"Formula"==t.selectedMode&&0==t.editItem.ingredients.length||"Formula"!=t.selectedMode&&0==t.customIngredients.length||!t.isValid},on:{click:function(e){return t.save()}}},[t._v("Guardar")]),t._v(" "),r("v-btn",{on:{click:function(e){return t.closeDialog()}}},[t._v("Cancelar")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardTitle:h.c,VCol:x.a,VDivider:_.a,VForm:k.a,VIcon:y.a,VRow:w.a,VSelect:C.a,VSpacer:I.a,VTextField:M.a})},711:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(75),r(39),{props:{title:{type:String,require:!0},hasSearchQuery:{type:Boolean,default:!1}},data:function(){return{searchText:"",loading:!1}},methods:{openMixtureModal:function(){this.$emit("mixtureModal")},getMixtures:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,clearTimeout(t.debounce),t.debounce=setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("searchMixtures",t.searchText);case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)}))),600);case 3:case"end":return e.stop()}}),e)})))()}}}),c=r(43),l=r(50),d=r.n(l),m=r(219),v=r(202),f=r(445),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-wrap"},[t._m(0),t._v(" "),r("div",{staticClass:"col-12 col-sm-9 col-md-4 col-lg-6"},[r("v-text-field",{attrs:{rounded:"","single-line":"",outlined:"",filled:"",dense:"",label:"Buscar "+t.title,"prepend-inner-icon":"mdi-magnify",loading:t.loading},on:{keyup:function(e){return t.getMixtures(e)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),r("div",{staticClass:"col-6 col-md-3 col-lg-2"},[r("v-btn",{attrs:{color:"primary",width:"100%","max-width":"250"},on:{click:function(e){return t.openMixtureModal()}}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus")]),t._v("\n      Mezcla\n    ")],1)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-sm-3 col-md-2"},[r("h2",[t._v("Mezclas")])])}],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VIcon:v.a,VTextField:f.a})},712:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(169),r(11),r(32),r(21),r(58),r(75),{data:function(){return{form:{},product:"",products:[],productQuantity:"0",ingredients:[],searchProducts:null,categories:["Especias","Hierbas","Semillas","Frutos Secos","Deshidratados"],isValid:!1,rules:[function(t){return!!t||"Este campo es requerido"}],quantityRules:[function(t){return t>-1||"Este campo no puede ser negativo"},function(t){return!!t||"Este campo es requerido"}],nonZeroRules:[function(t){return t>0||"Este campo no puede ser negativo"},function(t){return!!t||"Este campo es requerido"}]}},watch:{searchProducts:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,null!=t){r.next=3;break}return r.abrupt("return");case 3:if(!(t.length<2)){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,e.$axios.$get("/api/products/".concat(t));case 7:n=r.sent,e.products=n.data,r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}},methods:{closeDialog:function(){this.$emit("mixtureModal")},removeIngredient:function(i){this.ingredients.splice(i,1)},validateStock:function(){var t=this;return this.productQuantity>this.product.stock?(alert("La cantidad ingresada supera al stock del producto ("+this.product.stock+")"),!1):!(this.ingredients.filter((function(e){return e.name==t.product.name})).length>0)||(alert("El producto ya se agrego a los ingredientes"),!1)},addToIngredients:function(){var t={_id:this.product._id,name:this.product.name,quantity:this.productQuantity,unitOfMeasure:this.product.unitOfMeasure,category:this.product.category};this.ingredients.push(t)},selectProduct:function(){},resetForm:function(){this.form={},this.ingredients=[]},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t.ingredients.length<2)){e.next=4;break}return alert("Coloca al menos dos ingredientes para crear la mezcla"),e.abrupt("return");case 4:return t.$store.commit("setLoading"),(r=t.form).ingredients=t.ingredients,r.price=parseInt(r.price),r.stock=parseInt(r.stock),r.quantityPerIngredients=parseInt(r.quantityPerIngredients),e.next=12,t.$axios.post("/api/mixture/create",r);case 12:return t.closeDialog(),t.resetForm(),t.$store.commit("setSuccess","Mezcla creada exitosamente"),e.next=17,t.$store.dispatch("getMixtures",{page:1,itemsPerPage:10});case 17:t.$store.commit("setLoading"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0),t.$store.commit("setError",e.t0.toString());case 24:case"end":return e.stop()}}),e,null,[[0,20]])})))()}}}),c=r(43),l=r(50),d=r.n(l),m=r(612),v=r(219),f=r(201),h=r(82),x=r(456),_=r(466),k=r(447),y=r(457),w=r(202),C=r(458),I=r(610),M=r(459),V=r(445),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{width:"800","max-width":"100%"}},[r("v-card-title",{staticClass:"text-h5 white--text primary header"},[t._v("\n    Agregar Mezcla\n    "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(e){return t.closeDialog()}}},[r("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),r("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[r("v-row",{staticClass:"pa-0 ma-4"},[r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"10",md:"4"}},[r("h4",[t._v("Producto.")]),t._v(" "),r("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"6",md:"4"}},[r("h4",[t._v("Categoría.")]),t._v(" "),r("v-autocomplete",{attrs:{color:"accent",label:"Categoria",items:t.categories,rules:t.rules},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4",md:"4"}},[r("h4",[t._v("Precio")]),t._v(" "),r("v-text-field",{attrs:{type:"number",color:"accent",label:"Precio",rules:t.rules},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[r("h4",[t._v("Unidad de medida.")]),t._v(" "),r("v-select",{attrs:{label:"Unidad de medida",items:["unidades","gramos"],rules:t.rules},model:{value:t.form.unitOfMeasure,callback:function(e){t.$set(t.form,"unitOfMeasure",e)},expression:"form.unitOfMeasure"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[r("h4",[t._v("Cantidad en stock. ("+t._s(t.form.unitOfMeasure)+")")]),t._v(" "),r("v-text-field",{attrs:{type:"number",color:"accent",label:"Stock",rules:t.quantityRules},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),t._v(" "),r("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[r("h4",[t._v("Cantidad por ingredientes. ("+t._s(t.form.unitOfMeasure)+")")]),t._v(" "),r("v-text-field",{attrs:{type:"number",color:"accent",label:"Cantidad por ingredientes",rules:t.nonZeroRules},model:{value:t.form.quantityPerIngredients,callback:function(e){t.$set(t.form,"quantityPerIngredients",e)},expression:"form.quantityPerIngredients"}})],1),t._v(" "),r("div",{staticStyle:{width:"100%"}},[r("center",[r("h3",[t._v("Añadir Ingrediente")])])],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-divider",{attrs:{color:"primary"}})],1)],1),t._v(" "),r("v-container",{staticClass:"pt-0 mt-0"},[r("div",{staticClass:"d-flex flex-wrap align-center"},[r("div",{staticClass:"col-12 col-sm-6 col-md-4"},[r("v-autocomplete",{attrs:{rules:t.rules,items:t.products,"item-text":"name",placeholder:"Producto","search-input":t.searchProducts,"return-object":""},on:{"update:searchInput":function(e){t.searchProducts=e},"update:search-input":function(e){t.searchProducts=e},change:function(e){return t.selectProduct(e)}},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-sm-6 col-md-4"},[r("v-text-field",{attrs:{type:"number",label:"Cantidad ("+t.product.unitOfMeasure+")",rules:t.nonZeroRules},model:{value:t.productQuantity,callback:function(e){t.productQuantity=e},expression:"productQuantity"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-sm-6 col-md-3"},[r("v-btn",{attrs:{color:"success",disabled:!t.isValid},on:{click:t.addToIngredients}},[t._v("Añadir ingrendiente")])],1),t._v(" "),r("div",{staticClass:"col-12"},[r("v-divider",{attrs:{color:"primary"}})],1)])])],1),t._v(" "),r("center",{directives:[{name:"show",rawName:"v-show",value:t.ingredients.length>0,expression:"ingredients.length > 0"}]},[r("h3",[t._v("Ingredientes:")])]),t._v(" "),t._l(t.ingredients,(function(e,i){return r("div",{key:i,staticClass:"d-flex justify-center"},[r("div",{staticClass:"black--text"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"mx-3"},[t._v("-")]),t._v(" "),r("div",{staticClass:"black--text"},[t._v("\n      "+t._s(e.quantity)+" "+t._s(e.unitOfMeasure)+" \n      "),r("v-btn",{attrs:{"x-small":"",icon:"",color:"red",title:"Borrar ingrediente"},on:{click:function(e){return t.removeIngredient(i)}}},[r("v-icon",[t._v("mdi-close")])],1)],1)])})),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:0==t.ingredients.length||!t.isValid},on:{click:function(e){return t.save()}}},[t._v("Guardar")]),t._v(" "),r("v-btn",{on:{click:function(e){return t.closeDialog()}}},[t._v("Cancelar")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardTitle:h.c,VCol:x.a,VContainer:_.a,VDivider:k.a,VForm:y.a,VIcon:w.a,VRow:C.a,VSelect:I.a,VSpacer:M.a,VTextField:V.a})},771:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(169),r(32),r(21),r(58),r(75),r(668)),c=r(757),l=r(710),d=r(640),m=r(711),v=r(712),f={components:{MixturesHeader:m.default,NewProductDialog:o.default,EditMixtureDialog:c.default,DeleteDialog:d.default,MixtureModal:v.default,AddMixtureStock:l.default},computed:{items:{get:function(){return this.$store.state.items},set:function(t){this.$store.commit("setItems",t)}},count:function(){return this.$store.state.count},dialog:{get:function(){return this.$store.state.dialog},set:function(){this.$store.commit("setDialog")}},editDialog:{get:function(){return this.$store.state.editDialog},set:function(){this.$store.commit("setEditDialog")}},deleteDialog:{get:function(){return this.$store.state.deleteDialog},set:function(){this.$store.commit("setDeleteDialog")}}},data:function(){return{loading:!0,editedItem:{id:"",name:"",unitOfMeasure:"",category:"",price:"",ingredients:[],stock:"",quantityPerIngredients:0},datatableHeaders:[{text:"Nombre",value:"name",class:"header-color white--text"},{text:"Categoría",value:"category",class:"header-color white--text"},{text:"Precio",value:"price",class:"header-color white--text"},{text:"Stock",value:"stock",class:"header-color white--text"},{text:"Reservado",value:"inOrder",class:"header-color white--text"},{text:"Acciones",value:"actions",class:"header-color white--text"}],mixtureDialog:!1,stockMixtureDialog:!1,page:1,itemsPerPage:10}},beforeMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMixtures();case 2:case"end":return e.stop()}}),e)})))()},methods:{openEditDialog:function(t){this.setEditedItem(t),this.$store.commit("setEditDialog")},removeIngredient:function(i){this.editedItem.ingredients.splice(i,1)},openMixtureModal:function(){this.mixtureDialog=!this.mixtureDialog},openEditMixtureStock:function(t){this.setEditedItem(t),this.stockMixtureDialog=!this.stockMixtureDialog},closeEditMixtureStock:function(){this.stockMixtureDialog=!this.stockMixtureDialog},openDeleteDialog:function(t){this.editedItem=t,this.$store.commit("setDeleteDialog")},setEditedItem:function(t){this.editedItem={_id:t._id,id:t.id,name:t.name,unitOfMeasure:t.unitOfMeasure,category:t.category,price:t.price.toString(),stock:t.stock.toString(),quantityPerIngredients:t.quantityPerIngredients},this.editedItem.ingredients=[];for(var i=0;i<t.ingredients.length;i++)this.editedItem.ingredients.push(t.ingredients[i])},nextPage:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page=t,r.next=3,e.getProducts();case 3:case"end":return r.stop()}}),r)})))()},otherItemCount:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.itemsPerPage=t,r.next=3,e.getProducts();case 3:case"end":return r.stop()}}),r)})))()},getMixtures:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$store.commit("setLoading"),e.next=4,t.$store.dispatch("getMixtures",{page:t.page,itemsPerPage:t.itemsPerPage});case 4:t.$store.commit("setLoading"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},h=r(43),x=r(50),_=r.n(x),k=r(219),y=r(201),w=r(456),C=r(763),I=r(462),M=r(202),V=r(458),D=r(639),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mixtures-header",{staticClass:"mt-1 mb-0 pb-0",attrs:{title:"Productos"},on:{mixtureModal:function(e){return t.openMixtureModal()}}}),t._v(" "),r("v-row",{staticClass:"pt-0"},[r("v-col",{attrs:{cols:"12",md:"11"}},[r("v-card",[r("v-data-table",{attrs:{headers:t.datatableHeaders,items:t.items,"server-items-length":t.count,page:t.page,"items-per-page":t.itemsPerPage,loading:t.loading,"footer-props":{itemsPerPageOptions:[5,10,15]}},on:{"update:page":t.nextPage,"update:items-per-page":t.otherItemCount},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openEditMixtureStock(n)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"primary"}},[t._v("mdi-plus")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Modificar stock")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openEditDialog(n)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Editar Mezcla")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",disabled:n.inOrder>0},on:{click:function(e){return t.openDeleteDialog(n)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"error"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Eliminar Producto")])])]}},{key:"item.price",fn:function(t){var e=t.item;return[r("shared-money",{attrs:{amount:e.price||0}})]}},{key:"item.stock",fn:function(e){var n=e.item;return[r("div",{staticClass:"d-flex"},[r("shared-money",{staticClass:"mr-1",attrs:{amount:n.stock||0,currency:""}}),t._v("\n              "+t._s(n.unitOfMeasure)+"\n            ")],1)]}},{key:"item.inOrder",fn:function(e){var n=e.item;return[r("div",{staticClass:"d-flex"},[r("shared-money",{staticClass:"mr-1",attrs:{amount:n.inOrder||0,currency:""}}),t._v("\n              "+t._s(n.unitOfMeasure)+"\n            ")],1)]}}],null,!0)})],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[r("edit-mixture-dialog",{attrs:{editItem:t.editedItem},on:{removeIngredient:t.removeIngredient}})],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.mixtureDialog,callback:function(e){t.mixtureDialog=e},expression:"mixtureDialog"}},[r("mixture-modal",{on:{mixtureModal:function(e){return t.openMixtureModal()}}})],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","min-width":"500",width:"600"},model:{value:t.stockMixtureDialog,callback:function(e){t.stockMixtureDialog=e},expression:"stockMixtureDialog"}},[r("add-mixture-stock",{attrs:{editItem:t.editedItem},on:{closeEditMixtureStock:function(e){return t.closeEditMixtureStock()}}})],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[r("delete-dialog",{attrs:{editItem:t.editedItem,title:"Producto",deleteUrl:"/api/product/delete",getUrl:"/api/products/"+(this.page-1)*this.itemsPerPage+"/"+this.itemsPerPage}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{SharedMoney:r(468).default}),_()(component,{VBtn:k.a,VCard:y.a,VCol:w.a,VDataTable:C.a,VDialog:I.a,VIcon:M.a,VRow:V.a,VTooltip:D.a})}}]);