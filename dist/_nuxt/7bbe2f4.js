(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{433:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("50788f08",content,!0,{sourceMap:!1})},436:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},573:function(t,e,n){"use strict";var r=n(2),o=(n(32),n(50),n(200),n(11),n(10),n(41),n(102),n(9),n(8),n(13),n(14),n(4)),c=n(85),l=n(122);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},574:function(t,e,n){"use strict";n(9),n(8),n(13),n(10),n(14);var r=n(2),o=(n(63),n(11),n(57),n(102),n(32),n(50),n(433),n(432)),c=n(579),l=n(79),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.x.backspace&&t!==d.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.x.home,d.x.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},711:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(157),n(11),n(29),n(20),n(53),n(73),{data:function(){return{form:{},product:"",products:[],productQuantity:"0",ingredients:[],searchProducts:null,categories:["Especias","Hierbas","Semillas","Frutos Secos","Deshidratados"],isValid:!1,rules:[function(t){return!!t||"Este campo es requerido"}],quantityRules:[function(t){return t>-1||"Este campo no puede ser negativo"},function(t){return!!t||"Este campo es requerido"}],nonZeroRules:[function(t){return t>0||"Este campo no puede ser negativo"},function(t){return!!t||"Este campo es requerido"}]}},watch:{searchProducts:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,null!=t){n.next=3;break}return n.abrupt("return");case 3:if(!(t.length<2)){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,e.$axios.$get("/api/products/".concat(t));case 7:r=n.sent,e.products=r.data,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()}},methods:{closeDialog:function(){this.$emit("mixtureModal")},removeIngredient:function(i){this.ingredients.splice(i,1)},validateStock:function(){var t=this;return this.productQuantity>this.product.stock?(alert("La cantidad ingresada supera al stock del producto ("+this.product.stock+")"),!1):!(this.ingredients.filter((function(e){return e.name==t.product.name})).length>0)||(alert("El producto ya se agrego a los ingredientes"),!1)},addToIngredients:function(){var t={_id:this.product._id,name:this.product.name,quantity:this.productQuantity,unitOfMeasure:this.product.unitOfMeasure,category:this.product.category};this.ingredients.push(t)},selectProduct:function(){},resetForm:function(){this.form={},this.ingredients=[]},save:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t.ingredients.length<2)){e.next=4;break}return alert("Coloca al menos dos ingredientes para crear la mezcla"),e.abrupt("return");case 4:return t.$store.commit("setLoading"),(n=t.form).ingredients=t.ingredients,n.price=parseInt(n.price),n.stock=parseInt(n.stock),n.quantityPerIngredients=parseInt(n.quantityPerIngredients),e.next=12,t.$axios.post("/api/mixture/create",n);case 12:return t.closeDialog(),t.resetForm(),t.$store.commit("setSuccess","Mezcla creada exitosamente"),e.next=17,t.$store.dispatch("getMixtures",{page:1,itemsPerPage:10});case 17:t.$store.commit("setLoading"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0),t.$store.commit("setError",e.t0.toString());case 24:case"end":return e.stop()}}),e,null,[[0,20]])})))()}}}),c=n(49),l=n(52),d=n.n(l),h=n(574),f=n(201),m=n(186),v=n(156),x=n(756),I=n(426),y=n(410),_=n(573),S=n(187),w=n(757),O=n(432),C=n(424),k=n(579),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{width:"800","max-width":"100%"}},[n("v-card-title",{staticClass:"text-h5 white--text primary header"},[t._v("\n    Agregar Mezcla\n    "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(e){return t.closeDialog()}}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),n("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[n("v-row",{staticClass:"pa-0 ma-4"},[n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"10",md:"4"}},[n("h4",[t._v("Producto.")]),t._v(" "),n("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"6",md:"4"}},[n("h4",[t._v("Categoría.")]),t._v(" "),n("v-autocomplete",{attrs:{color:"accent",label:"Categoria",items:t.categories,rules:t.rules},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4",md:"4"}},[n("h4",[t._v("Precio")]),t._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Precio",rules:t.rules},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[n("h4",[t._v("Unidad de medida.")]),t._v(" "),n("v-select",{attrs:{label:"Unidad de medida",items:["unidades","gramos"],rules:t.rules},model:{value:t.form.unitOfMeasure,callback:function(e){t.$set(t.form,"unitOfMeasure",e)},expression:"form.unitOfMeasure"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[n("h4",[t._v("Cantidad en stock. ("+t._s(t.form.unitOfMeasure)+")")]),t._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Stock",rules:t.quantityRules},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[n("h4",[t._v("Cantidad por ingredientes. ("+t._s(t.form.unitOfMeasure)+")")]),t._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Cantidad por ingredientes",rules:t.nonZeroRules},model:{value:t.form.quantityPerIngredients,callback:function(e){t.$set(t.form,"quantityPerIngredients",e)},expression:"form.quantityPerIngredients"}})],1),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("center",[n("h3",[t._v("Añadir Ingrediente")])])],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-divider",{attrs:{color:"primary"}})],1)],1),t._v(" "),n("v-container",{staticClass:"pt-0 mt-0"},[n("div",{staticClass:"d-flex flex-wrap align-center"},[n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("v-autocomplete",{attrs:{rules:t.rules,items:t.products,"item-text":"name",placeholder:"Producto","search-input":t.searchProducts,"return-object":""},on:{"update:searchInput":function(e){t.searchProducts=e},"update:search-input":function(e){t.searchProducts=e},change:function(e){return t.selectProduct(e)}},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("v-text-field",{attrs:{type:"number",label:"Cantidad ("+t.product.unitOfMeasure+")",rules:t.nonZeroRules},model:{value:t.productQuantity,callback:function(e){t.productQuantity=e},expression:"productQuantity"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-6 col-md-3"},[n("v-btn",{attrs:{color:"success",disabled:!t.isValid},on:{click:t.addToIngredients}},[t._v("Añadir ingrendiente")])],1),t._v(" "),n("div",{staticClass:"col-12"},[n("v-divider",{attrs:{color:"primary"}})],1)])])],1),t._v(" "),n("center",{directives:[{name:"show",rawName:"v-show",value:t.ingredients.length>0,expression:"ingredients.length > 0"}]},[n("h3",[t._v("Ingredientes:")])]),t._v(" "),t._l(t.ingredients,(function(e,i){return n("div",{key:i,staticClass:"d-flex justify-center"},[n("div",{staticClass:"black--text"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"mx-3"},[t._v("-")]),t._v(" "),n("div",{staticClass:"black--text"},[t._v("\n      "+t._s(e.quantity)+" "+t._s(e.unitOfMeasure)+" \n      "),n("v-btn",{attrs:{"x-small":"",icon:"",color:"red",title:"Borrar ingrediente"},on:{click:function(e){return t.removeIngredient(i)}}},[n("v-icon",[t._v("mdi-close")])],1)],1)])})),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",disabled:0==t.ingredients.length||!t.isValid},on:{click:function(e){return t.save()}}},[t._v("Guardar")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.closeDialog()}}},[t._v("Cancelar")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:h.a,VBtn:f.a,VCard:m.a,VCardActions:v.a,VCardTitle:v.c,VCol:x.a,VContainer:I.a,VDivider:y.a,VForm:_.a,VIcon:S.a,VRow:w.a,VSelect:O.a,VSpacer:C.a,VTextField:k.a})}}]);