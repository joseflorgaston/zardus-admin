(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{470:function(e,t,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("50788f08",content,!0,{sourceMap:!1})},607:function(e,t,n){var r=n(14)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},612:function(e,t,n){"use strict";n(8),n(7),n(12),n(9),n(13);var r=n(1),o=(n(61),n(11),n(67),n(97),n(28),n(44),n(470),n(610)),c=n(445),l=n(51),d=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.r)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},v),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.x.backspace&&e!==d.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.x.home,d.x.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},757:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(169),n(11),n(32),n(21),n(58),n(75),{props:{editItem:{type:Object,required:!0}},data:function(){return{form:{},product:"",validIngredient:!1,products:[],productQuantity:"0",ingredients:[],searchProducts:null,categories:["Especias","Hierbas","Semillas","Frutos Secos","Deshidratados","Aditivos","Legumbres","Harinas","Empaquetados"],isValid:!0,rules:[function(e){return!!e||"Este campo es requerido"}],quantityRules:[function(e){return e>-1||"Este campo no puede ser negativo"},function(e){return!!e||"Este campo es requerido"}]}},watch:{searchProducts:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,null!=e){n.next=3;break}return n.abrupt("return");case 3:if(!(e.length<2)){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,t.$axios.$get("/api/allProducts/".concat(e));case 7:r=n.sent,t.products=r.data,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()}},methods:{closeDialog:function(){this.$store.commit("setEditDialog")},removeIngredient:function(i){this.editItem.ingredients.splice(i,1);var e=this.editItem;this.editItem={},this.editItem=e},validateStock:function(){var e=this;return!(this.editItem.ingredients.filter((function(t){return t.name==e.product.name})).length>0)||(alert("El producto ya se agrego a los ingredientes"),!1)},addToIngredients:function(){if(this.validateStock()){var e={_id:this.product._id,name:this.product.name,quantity:this.productQuantity,unitOfMeasure:this.product.unitOfMeasure,category:this.product.category};this.editItem.ingredients.push(e);var t=this.editItem;this.editItem={},this.editItem=t}},save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e.editItem.ingredients.length<2)){t.next=4;break}return alert("Coloca al menos dos ingredientes para editar la mezcla"),t.abrupt("return");case 4:return e.$store.commit("setLoading"),(n=e.form).ingredients=e.editItem.ingredients,n.price=parseInt(n.price),n.stock=parseInt(n.stock),n.quantityPerIngredients=parseInt(n.quantityPerIngredients),t.next=12,e.$axios.put("/api/mixture/update/"+e.editItem._id,e.editItem);case 12:return e.$store.commit("setEditDialog"),e.$store.commit("setSuccess","Mezcla editada exitosamente"),t.next=16,e.$store.dispatch("getMixtures",{page:1,itemsPerPage:10});case 16:e.$store.commit("setLoading"),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),console.log(t.t0),e.$store.commit("setError",t.t0.toString());case 23:case"end":return t.stop()}}),t,null,[[0,19]])})))()}}}),c=n(43),l=n(50),d=n.n(l),h=n(612),m=n(219),v=n(201),f=n(82),I=n(456),x=n(466),y=n(447),_=n(457),S=n(202),C=n(458),k=n(610),D=n(459),w=n(445),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"text-h5 white--text primary header"},[e._v("\n    Editar Mezcla\n    "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(t){return e.closeDialog()}}},[n("v-icon",{attrs:{color:"white"}},[e._v(" mdi-close ")])],1)],1),e._v(" "),n("v-form",{model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[n("v-row",{staticClass:"pa-0 ma-4"},[n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"10",md:"4"}},[n("h4",[e._v("Producto.")]),e._v(" "),n("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:e.rules,name:"name"},model:{value:e.editItem.name,callback:function(t){e.$set(e.editItem,"name",t)},expression:"editItem.name"}})],1),e._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"6",md:"4"}},[n("h4",[e._v("Categoría.")]),e._v(" "),n("v-autocomplete",{attrs:{color:"accent",label:"Categoria",items:e.categories,rules:e.rules},model:{value:e.editItem.category,callback:function(t){e.$set(e.editItem,"category",t)},expression:"editItem.category"}})],1),e._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4",md:"4"}},[n("h4",[e._v("Precio")]),e._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Precio",rules:e.rules,name:"price"},model:{value:e.editItem.price,callback:function(t){e.$set(e.editItem,"price",t)},expression:"editItem.price"}})],1),e._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[n("h4",[e._v("Unidad de medida.")]),e._v(" "),n("v-select",{attrs:{label:"Unidad de medida",items:["unidades","gramos"],rules:e.rules},model:{value:e.editItem.unitOfMeasure,callback:function(t){e.$set(e.editItem,"unitOfMeasure",t)},expression:"editItem.unitOfMeasure"}})],1),e._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[n("h4",[e._v("Cantidad en stock. ("+e._s(e.editItem.unitOfMeasure)+")")]),e._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Stock",rules:e.quantityRules,name:"stock"},model:{value:e.editItem.stock,callback:function(t){e.$set(e.editItem,"stock",t)},expression:"editItem.stock"}})],1),e._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5",md:"4"}},[n("h4",[e._v("Cantidad por ingredientes. ("+e._s(e.editItem.unitOfMeasure)+")")]),e._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Cantidad por ingredientes",rules:e.quantityRules,name:"quantity"},model:{value:e.editItem.quantityPerIngredients,callback:function(t){e.$set(e.editItem,"quantityPerIngredients",t)},expression:"editItem.quantityPerIngredients"}})],1),e._v(" "),n("div",{staticStyle:{width:"100%"}},[n("center",[n("h3",[e._v("Añadir Ingrediente")])])],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-divider",{attrs:{color:"primary"}})],1)],1)],1),e._v(" "),n("v-form",{model:{value:e.validIngredient,callback:function(t){e.validIngredient=t},expression:"validIngredient"}},[n("v-container",{staticClass:"pt-0 mt-0"},[n("div",{staticClass:"d-flex flex-wrap align-center"},[n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("v-autocomplete",{attrs:{rules:e.rules,items:e.products,"item-text":"name",placeholder:"Producto","search-input":e.searchProducts,"return-object":""},on:{"update:searchInput":function(t){e.searchProducts=t},"update:search-input":function(t){e.searchProducts=t}},model:{value:e.product,callback:function(t){e.product=t},expression:"product"}})],1),e._v(" "),n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("v-text-field",{attrs:{type:"number",label:"Cantidad ("+e.product.unitOfMeasure+")",rules:e.quantityRules,name:"productQuantity"},model:{value:e.productQuantity,callback:function(t){e.productQuantity=t},expression:"productQuantity"}})],1),e._v(" "),n("div",{staticClass:"col-12 col-sm-6 col-md-3"},[n("v-btn",{attrs:{color:"success",disabled:!e.validIngredient},on:{click:function(t){return e.addToIngredients()}}},[e._v("Añadir ingrendiente.")])],1),e._v(" "),n("div",{staticClass:"col-12"},[n("v-divider",{attrs:{color:"primary"}})],1)])])],1),e._v(" "),n("center",[n("h3",[e._v("Ingredientes:")])]),e._v(" "),e._l(e.editItem.ingredients,(function(t,i){return n("div",{key:i,staticClass:"d-flex justify-center"},[n("div",{staticClass:"black--text"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"mx-3"},[e._v("-")]),e._v(" "),n("div",{staticClass:"black--text"},[e._v("\n      "+e._s(t.quantity)+" "+e._s(t.unitOfMeasure)+"\n      "),n("v-btn",{attrs:{"x-small":"",icon:"",color:"red",title:"Borrar ingrediente"},on:{click:function(t){return e.removeIngredient(i)}}},[n("v-icon",[e._v("mdi-close")])],1)],1)])})),e._v(" "),n("v-card-actions",{staticClass:"d-flex flex-wrap"},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",disabled:0==e.editItem.ingredients.length||!e.isValid},on:{click:function(t){return e.save()}}},[e._v("Guardar")]),e._v(" "),n("v-btn",{on:{click:function(t){return e.closeDialog()}}},[e._v("Cancelar")])],1)],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAutocomplete:h.a,VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardTitle:f.c,VCol:I.a,VContainer:x.a,VDivider:y.a,VForm:_.a,VIcon:S.a,VRow:C.a,VSelect:k.a,VSpacer:D.a,VTextField:w.a})}}]);