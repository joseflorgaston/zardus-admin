(window.webpackJsonp=window.webpackJsonp||[]).push([[57,15,24,26,35,42],{468:function(t,e,n){"use strict";n.r(e);n(19),n(30),n(59),n(21),n(58);var o={props:{amount:{type:Number,required:!0},currency:{type:String,default:"Gs."}},computed:{formattedAmount:function(){return this.formatMiles(parseInt(this.amount))}},methods:{formatMiles:function(t){return this.currency+" "+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedAmount)+"\n")])}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("50788f08",content,!0,{sourceMap:!1})},606:function(t,e,n){var o=n(14)(!1);o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=o},608:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("dc0628f2",content,!0,{sourceMap:!1})},609:function(t,e,n){var o=n(14)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},612:function(t,e,n){"use strict";n(8),n(7),n(12),n(9),n(13);var o=n(1),r=(n(61),n(10),n(67),n(97),n(28),n(44),n(470),n(610)),c=n(445),l=n(51),d=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=h(h({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.x.backspace&&t!==d.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.x.home,d.x.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})},626:function(t,e,n){"use strict";var o=n(1),r=(n(19),n(608),n(215)),c=n(22),l=n(217),d=n(134),m=n(622),h=n(37),f=n(0),v=n(6),x=n(4);e.a=Object(x.a)(c.a,l.a,d.a,m.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.g)(this.maxWidth),minWidth:Object(f.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.t)(this,"activator",!0)&&Object(v.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},640:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(75),{props:{title:{type:String,required:!0},editItem:{type:Object,required:!0},deleteUrl:{type:String,required:!0},getUrl:{type:String,required:!0}},methods:{deleteItem:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("setLoading"),t.$store.commit("setDeleteDialog"),e.next=5,t.$axios.$delete("".concat(t.deleteUrl,"/")+t.editItem._id);case 5:return console.log("setSuccess"),t.$store.commit("setSuccess",t.title+" Eliminado exitosamente"),console.log(t.getUrl),e.next=10,t.$axios.$get("".concat(t.getUrl));case 10:n=e.sent,t.$store.commit("setItems",n.data),t.$store.commit("setCount",n.count),t.$store.commit("setLoading"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),t.$store.commit("setError","Ha ocurrido un error");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()},closeDialog:function(){this.$store.commit("setDeleteDialog")}}}),c=n(43),l=n(50),d=n.n(l),m=n(219),h=n(201),f=n(82),v=n(447),x=n(202),_=n(459),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    ¿Deseas eliminar este "+t._s(t.title)+"?\n    "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),n("div",{staticClass:"ma-8"},[n("center",[n("h2",[t._v(t._s(t.editItem.name))])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"error"},on:{click:t.deleteItem}},[t._v(" Eliminar ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:h.a,VCardActions:f.a,VCardTitle:f.c,VDivider:v.a,VIcon:x.a,VSpacer:_.a})},641:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0d0256e5",content,!0,{sourceMap:!1})},655:function(t,e,n){"use strict";n(641)},656:function(t,e,n){var o=n(14)(!1);o.push([t.i,".max-width{width:100%}",""]),t.exports=o},657:function(t,e,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("19aa2cf7",content,!0,{sourceMap:!1})},667:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(75),{data:function(){return{isValid:!0,rules:[function(t){return!!t||"Este campo es requerido"}],quantityRule:[function(t){return t>=0||"Coloca un numero mayor a 0"},function(t){return!!t||"Este campo es requerido"}],form:{name:"",category:"",price:0,unitOfMeasure:"unidades",stock:0,type:"Product"},categories:["Especias","Hierbas","Semillas","Frutos Secos","Deshidratados"]}},methods:{closeDialog:function(){this.$store.commit("setDialog")},resetForm:function(){this.form={name:"",category:"",price:0,unitOfMeasure:"gs",stock:0,type:""}},save:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.price=parseInt(t.form.price),t.form.stock=parseInt(t.form.stock),t.closeDialog(),t.$store.commit("setLoading"),e.next=6,t.$store.dispatch("saveProduct",t.form);case 6:return e.next=8,t.$store.dispatch("getProducts",{page:1,itemsPerPage:10});case 8:t.resetForm(),t.$store.commit("setLoading");case 10:case"end":return e.stop()}}),e)})))()}}}),c=(n(655),n(43)),l=n(50),d=n.n(l),m=n(612),h=n(219),f=n(201),v=n(82),x=n(456),_=n(447),I=n(457),y=n(202),D=n(458),S=n(610),k=n(459),w=n(445),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Agregar Producto\n    "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),n("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[n("v-row",{staticClass:"mt-5 max-width mb-5"},[n("v-col",{attrs:{offset:"1",cols:"10",sm:"10"}},[n("h4",[t._v("Producto.")]),t._v(" "),n("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[n("h4",[t._v("Categoría.")]),t._v(" "),n("v-autocomplete",{attrs:{color:"accent",label:"Categoria",items:t.categories,rules:t.rules},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4"}},[n("h4",[t._v("\n          Precio. ("+t._s("gramos"==t.form.unitOfMeasure?"Kg":"unidades")+")\n        ")]),t._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Precio",rules:t.quantityRule},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"1",cols:"5",sm:"5"}},[n("h4",[t._v("Unidad de medida.")]),t._v(" "),n("v-select",{attrs:{label:"Unidad de medida",items:["unidades","gramos"],rules:t.rules},model:{value:t.form.unitOfMeasure,callback:function(e){t.$set(t.form,"unitOfMeasure",e)},expression:"form.unitOfMeasure"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5"}},[n("h4",[t._v("Cantidad en stock. ("+t._s(t.form.unitOfMeasure)+")")]),t._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Stock",rules:t.quantityRule},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",disabled:!t.isValid},on:{click:t.save}},[t._v("\n      Guardar\n    ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.closeDialog}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:h.a,VCard:f.a,VCardActions:v.a,VCardTitle:v.c,VCol:x.a,VDivider:_.a,VForm:I.a,VIcon:y.a,VRow:D.a,VSelect:S.a,VSpacer:k.a,VTextField:w.a})},678:function(t,e,n){"use strict";n(657)},679:function(t,e,n){var o=n(14)(!1);o.push([t.i,".max-width{width:100%}",""]),t.exports=o},711:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(75),n(32),n(304),{props:{editItem:{type:Object,required:!0}},computed:{},data:function(){return{isValid:!0,rules:[function(t){return!!t||"Este campo es requerido"}],priceRules:[function(t){return!!t||"Este campo es requerido"},function(t){return t>=0||"Este campo debe ser mayor a 0"}],form:{name:"",category:"",price:"",unitOfMeasure:null,stock:null},categories:["Especias","Hierbas","Semillas","Frutos Secos","Deshidratados"]}},methods:{save:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form={_id:t.editItem._id,name:t.editItem.name,stock:t.editItem.stock,price:parseInt(t.editItem.price),category:t.editItem.category,unitOfMeasure:t.editItem.unitOfMeasure},"gramos"!=t.form.unitOfMeasure?t.form.stock=parseInt(t.form.stock):t.form.stock=parseFloat(t.form.stock).toFixed(3),t.$store.commit("setLoading"),e.next=5,t.$store.dispatch("updateProduct",t.form);case 5:return e.next=7,t.$store.dispatch("getProducts",{page:1,itemsPerPage:10});case 7:t.closeDialog(),t.$store.commit("setLoading");case 9:case"end":return e.stop()}}),e)})))()},closeDialog:function(){this.$store.commit("setEditDialog")},openDeleteDialog:function(){this.$store.commit("setDeleteDialog")}}}),c=(n(678),n(43)),l=n(50),d=n.n(l),m=n(612),h=n(219),f=n(201),v=n(82),x=n(456),_=n(447),I=n(457),y=n(202),D=n(458),S=n(610),k=n(459),w=n(445),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"text-h5 white--text primary"},[t._v("\n    Editar Producto\n    "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:t.closeDialog}},[n("v-icon",{attrs:{color:"white"}},[t._v(" mdi-close ")])],1)],1),t._v(" "),n("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[n("v-row",{staticClass:"mt-5 max-width mb-5"},[n("v-col",{attrs:{offset:"1",cols:"10",sm:"10"}},[n("h4",[t._v("Nombre.")]),t._v(" "),n("v-text-field",{attrs:{color:"accent",label:"Nombre",rules:t.rules},model:{value:t.editItem.name,callback:function(e){t.$set(t.editItem,"name",e)},expression:"editItem.name"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1",cols:"10",sm:"6"}},[n("h4",[t._v("Categoría.")]),t._v(" "),n("v-autocomplete",{attrs:{color:"accent",label:"Categoria",items:t.categories,rules:t.rules},model:{value:t.editItem.category,callback:function(e){t.$set(t.editItem,"category",e)},expression:"editItem.category"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"10",sm:"4"}},[n("h4",[t._v("Precio. ("+t._s(t.editItem.unitOfMeasure)+")")]),t._v(" "),n("v-text-field",{attrs:{color:"accent",type:"number",label:"Precio",rules:t.priceRules},model:{value:t.editItem.price,callback:function(e){t.$set(t.editItem,"price",e)},expression:"editItem.price"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1",cols:"10",sm:"5"}},[n("h4",[t._v("Unidad de medida.")]),t._v(" "),n("v-select",{attrs:{label:"Unidad de medida",items:["unidades","gramos"],rules:t.rules},model:{value:t.editItem.unitOfMeasure,callback:function(e){t.$set(t.editItem,"unitOfMeasure",e)},expression:"editItem.unitOfMeasure"}})],1),t._v(" "),n("v-col",{attrs:{offset:"1","offset-sm":"0",cols:"5",sm:"5"}},[n("h4",[t._v("Cantidad en stock. ("+t._s(t.editItem.unitOfMeasure)+")")]),t._v(" "),n("v-text-field",{attrs:{type:"number",color:"accent",label:"Stock",rules:t.priceRules},model:{value:t.editItem.stock,callback:function(e){t.$set(t.editItem,"stock",e)},expression:"editItem.stock"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"d-flex flex-wrap"},[n("v-btn",{attrs:{color:"error"},on:{click:t.openDeleteDialog}},[t._v("\n      Eliminar Producto\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",disabled:!t.isValid},on:{click:function(e){return t.save()}}},[t._v(" Guardar ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.closeDialog()}}},[t._v(" Cancelar ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:h.a,VCard:f.a,VCardActions:v.a,VCardTitle:v.c,VCol:x.a,VDivider:_.a,VForm:I.a,VIcon:y.a,VRow:D.a,VSelect:S.a,VSpacer:k.a,VTextField:w.a})},712:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(75),n(39),{props:{title:{type:String,require:!0},hasSearchQuery:{type:Boolean,default:!1}},data:function(){return{searchText:"",loading:!1}},methods:{openCreateDialog:function(){this.$store.commit("setDialog")},getProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,clearTimeout(t.debounce),t.debounce=setTimeout(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("searchProducts",t.searchText);case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)}))),600);case 3:case"end":return e.stop()}}),e)})))()}}}),c=n(43),l=n(50),d=n.n(l),m=n(219),h=n(202),f=n(445),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-wrap"},[t._m(0),t._v(" "),n("div",{staticClass:"col-12 col-sm-9 col-md-4 col-lg-6"},[n("v-text-field",{attrs:{rounded:"","single-line":"",outlined:"",filled:"",dense:"",label:"Buscar "+t.title,"prepend-inner-icon":"mdi-magnify",loading:t.loading},on:{keyup:function(e){return t.getProducts(e)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),n("div",{staticClass:"col-6 col-md-3 col-lg-2"},[n("v-btn",{attrs:{color:"primary",width:"100%","max-width":"250"},on:{click:function(e){return t.openCreateDialog()}}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus")]),t._v("\n      Agregar\n    ")],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-3 col-md-2"},[n("h2",[t._v("Productos")])])}],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VIcon:h.a,VTextField:f.a})},769:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(32),n(21),n(58),n(75),n(667)),c=n(711),l=n(640),d={auth:!0,components:{ProductHeader:n(712).default,NewProductDialog:r.default,EditProductDialog:c.default,DeleteDialog:l.default},computed:{items:{get:function(){return this.$store.state.items},set:function(t){this.$store.commit("setItems",t)}},count:function(){return this.$store.state.count},dialog:{get:function(){return this.$store.state.dialog},set:function(){this.$store.commit("setDialog")}},editDialog:{get:function(){return this.$store.state.editDialog},set:function(){this.$store.commit("setEditDialog")}},deleteDialog:{get:function(){return this.$store.state.deleteDialog},set:function(){this.$store.commit("setDeleteDialog")}}},data:function(){return{loading:!0,editedItem:{id:"",name:"",unitOfMeasure:"",category:"",price:"",stock:""},datatableHeaders:[{text:"Nombre",value:"name",class:"header-color white--text"},{text:"Categoría",value:"category",class:"header-color white--text"},{text:"Precio",value:"price",class:"header-color white--text"},{text:"Stock",value:"stock",class:"header-color white--text"},{text:"Reservado",value:"inOrder",class:"header-color white--text"},{text:"Acciones",value:"actions",class:"header-color white--text"}],mixtureDialog:!1,page:1,itemsPerPage:10}},beforeMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$auth.loggedIn){e.next=2;break}return e.abrupt("return",t.$router.push("/login"));case 2:return e.next=4,t.getProducts();case 4:case"end":return e.stop()}}),e)})))()},methods:{openEditDialog:function(t){this.editedItem={_id:t._id,name:t.name,unitOfMeasure:t.unitOfMeasure,category:t.category,price:t.price.toString(),stock:t.stock.toString()},this.$store.commit("setEditDialog")},openMixtureModal:function(){console.log(this.mixtureDialog),this.mixtureDialog=!this.mixtureDialog},openDeleteDialog:function(t){this.editedItem=t,this.$store.commit("setDeleteDialog")},openCreateDialog:function(){this.$store.commit("setDialog")},nextPage:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page=t,n.next=3,e.getProducts();case 3:case"end":return n.stop()}}),n)})))()},otherItemCount:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.itemsPerPage=t,n.next=3,e.getProducts();case 3:case"end":return n.stop()}}),n)})))()},getProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$store.commit("setLoading"),e.next=4,t.$store.dispatch("getProducts",{page:t.page,itemsPerPage:t.itemsPerPage});case 4:t.$store.commit("setLoading"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},m=n(43),h=n(50),f=n.n(h),v=n(219),x=n(201),_=n(456),I=n(760),y=n(462),D=n(202),S=n(458),k=n(626),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("product-header",{staticClass:"mt-1 mb-0 pb-0",attrs:{title:"Productos"},on:{mixtureModal:function(e){return t.openMixtureModal()}}}),t._v(" "),n("v-row",{staticClass:"pt-0"},[n("v-col",{attrs:{cols:"12",md:"11"}},[n("v-card",[n("v-data-table",{attrs:{headers:t.datatableHeaders,items:t.items,"server-items-length":t.count,page:t.page,"items-per-page":t.itemsPerPage,loading:t.loading,"footer-props":{itemsPerPageOptions:[5,10,15]}},on:{"update:page":t.nextPage,"update:items-per-page":t.otherItemCount},scopedSlots:t._u([{key:"item.actions",fn:function(e){var o=e.item;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openEditDialog(o)}}},"v-btn",c,!1),r),[n("v-icon",{attrs:{color:"primary",title:"editar"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Editar Producto")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",disabled:o.inOrder>0},on:{click:function(e){return t.openDeleteDialog(o)}}},"v-btn",c,!1),r),[n("v-icon",{attrs:{color:"error",title:"eliminar"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Eliminar Producto")])])]}},{key:"item.price",fn:function(t){var e=t.item;return[n("shared-money",{attrs:{amount:e.price||0}})]}},{key:"item.stock",fn:function(e){var o=e.item;return[n("div",{staticClass:"d-flex"},[n("shared-money",{staticClass:"mr-1",attrs:{amount:o.stock||0,currency:""}}),t._v("\n              "+t._s(o.unitOfMeasure)+"\n            ")],1)]}},{key:"item.inOrder",fn:function(e){var o=e.item;return[n("div",{staticClass:"d-flex"},[n("shared-money",{staticClass:"mr-1",attrs:{amount:o.inOrder||0,currency:""}}),t._v("\n              "+t._s(o.unitOfMeasure)+"\n            ")],1)]}}],null,!0)})],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("new-product-dialog")],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","min-width":"500",width:"700"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[n("edit-product-dialog",{attrs:{editItem:t.editedItem}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[n("delete-dialog",{attrs:{editItem:t.editedItem,title:"Producto",deleteUrl:"/api/product/delete",getUrl:"/api/products/"+(this.page-1)*this.itemsPerPage+"/"+this.itemsPerPage}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{SharedMoney:n(468).default}),f()(component,{VBtn:v.a,VCard:x.a,VCol:_.a,VDataTable:I.a,VDialog:y.a,VIcon:D.a,VRow:S.a,VTooltip:k.a})}}]);