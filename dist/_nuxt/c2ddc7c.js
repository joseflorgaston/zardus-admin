(window.webpackJsonp=window.webpackJsonp||[]).push([[48,45],{519:function(t,e,n){"use strict";n.r(e);n(23),n(29),n(64),n(3),n(69);var r={props:{amount:{type:Number,required:!0},currency:{type:String,default:"Gs."}},computed:{formattedAmount:function(){return this.formatMiles(parseInt(this.amount))}},methods:{formatMiles:function(t){return this.currency+" "+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}}},o=n(51),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedAmount)+"\n")])}),[],!1,null,null,null);e.default=component.exports},521:function(t,e,n){var content=n(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("50788f08",content,!0,{sourceMap:!1})},658:function(t,e,n){var r=n(18)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},659:function(t,e,n){var content=n(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("dc0628f2",content,!0,{sourceMap:!1})},660:function(t,e,n){var r=n(18)(!1);r.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=r},663:function(t,e,n){"use strict";n(10),n(9),n(16),n(11),n(17);var r=n(1),o=(n(68),n(3),n(13),n(74),n(105),n(236),n(31),n(52),n(521),n(661)),c=n(495),l=n(57),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},668:function(t,e,n){var map={"./af":522,"./af.js":522,"./ar":523,"./ar-dz":524,"./ar-dz.js":524,"./ar-kw":525,"./ar-kw.js":525,"./ar-ly":526,"./ar-ly.js":526,"./ar-ma":527,"./ar-ma.js":527,"./ar-sa":528,"./ar-sa.js":528,"./ar-tn":529,"./ar-tn.js":529,"./ar.js":523,"./az":530,"./az.js":530,"./be":531,"./be.js":531,"./bg":532,"./bg.js":532,"./bm":533,"./bm.js":533,"./bn":534,"./bn-bd":535,"./bn-bd.js":535,"./bn.js":534,"./bo":536,"./bo.js":536,"./br":537,"./br.js":537,"./bs":538,"./bs.js":538,"./ca":539,"./ca.js":539,"./cs":540,"./cs.js":540,"./cv":541,"./cv.js":541,"./cy":542,"./cy.js":542,"./da":543,"./da.js":543,"./de":544,"./de-at":545,"./de-at.js":545,"./de-ch":546,"./de-ch.js":546,"./de.js":544,"./dv":547,"./dv.js":547,"./el":548,"./el.js":548,"./en-au":549,"./en-au.js":549,"./en-ca":550,"./en-ca.js":550,"./en-gb":551,"./en-gb.js":551,"./en-ie":552,"./en-ie.js":552,"./en-il":553,"./en-il.js":553,"./en-in":554,"./en-in.js":554,"./en-nz":555,"./en-nz.js":555,"./en-sg":556,"./en-sg.js":556,"./eo":557,"./eo.js":557,"./es":558,"./es-do":559,"./es-do.js":559,"./es-mx":560,"./es-mx.js":560,"./es-us":561,"./es-us.js":561,"./es.js":558,"./et":562,"./et.js":562,"./eu":563,"./eu.js":563,"./fa":564,"./fa.js":564,"./fi":565,"./fi.js":565,"./fil":566,"./fil.js":566,"./fo":567,"./fo.js":567,"./fr":568,"./fr-ca":569,"./fr-ca.js":569,"./fr-ch":570,"./fr-ch.js":570,"./fr.js":568,"./fy":571,"./fy.js":571,"./ga":572,"./ga.js":572,"./gd":573,"./gd.js":573,"./gl":574,"./gl.js":574,"./gom-deva":575,"./gom-deva.js":575,"./gom-latn":576,"./gom-latn.js":576,"./gu":577,"./gu.js":577,"./he":578,"./he.js":578,"./hi":579,"./hi.js":579,"./hr":580,"./hr.js":580,"./hu":581,"./hu.js":581,"./hy-am":582,"./hy-am.js":582,"./id":583,"./id.js":583,"./is":584,"./is.js":584,"./it":585,"./it-ch":586,"./it-ch.js":586,"./it.js":585,"./ja":587,"./ja.js":587,"./jv":588,"./jv.js":588,"./ka":589,"./ka.js":589,"./kk":590,"./kk.js":590,"./km":591,"./km.js":591,"./kn":592,"./kn.js":592,"./ko":593,"./ko.js":593,"./ku":594,"./ku.js":594,"./ky":595,"./ky.js":595,"./lb":596,"./lb.js":596,"./lo":597,"./lo.js":597,"./lt":598,"./lt.js":598,"./lv":599,"./lv.js":599,"./me":600,"./me.js":600,"./mi":601,"./mi.js":601,"./mk":602,"./mk.js":602,"./ml":603,"./ml.js":603,"./mn":604,"./mn.js":604,"./mr":605,"./mr.js":605,"./ms":606,"./ms-my":607,"./ms-my.js":607,"./ms.js":606,"./mt":608,"./mt.js":608,"./my":609,"./my.js":609,"./nb":610,"./nb.js":610,"./ne":611,"./ne.js":611,"./nl":612,"./nl-be":613,"./nl-be.js":613,"./nl.js":612,"./nn":614,"./nn.js":614,"./oc-lnc":615,"./oc-lnc.js":615,"./pa-in":616,"./pa-in.js":616,"./pl":617,"./pl.js":617,"./pt":618,"./pt-br":619,"./pt-br.js":619,"./pt.js":618,"./ro":620,"./ro.js":620,"./ru":621,"./ru.js":621,"./sd":622,"./sd.js":622,"./se":623,"./se.js":623,"./si":624,"./si.js":624,"./sk":625,"./sk.js":625,"./sl":626,"./sl.js":626,"./sq":627,"./sq.js":627,"./sr":628,"./sr-cyrl":629,"./sr-cyrl.js":629,"./sr.js":628,"./ss":630,"./ss.js":630,"./sv":631,"./sv.js":631,"./sw":632,"./sw.js":632,"./ta":633,"./ta.js":633,"./te":634,"./te.js":634,"./tet":635,"./tet.js":635,"./tg":636,"./tg.js":636,"./th":637,"./th.js":637,"./tk":638,"./tk.js":638,"./tl-ph":639,"./tl-ph.js":639,"./tlh":640,"./tlh.js":640,"./tr":641,"./tr.js":641,"./tzl":642,"./tzl.js":642,"./tzm":643,"./tzm-latn":644,"./tzm-latn.js":644,"./tzm.js":643,"./ug-cn":645,"./ug-cn.js":645,"./uk":646,"./uk.js":646,"./ur":647,"./ur.js":647,"./uz":648,"./uz-latn":649,"./uz-latn.js":649,"./uz.js":648,"./vi":650,"./vi.js":650,"./x-pseudo":651,"./x-pseudo.js":651,"./yo":652,"./yo.js":652,"./zh-cn":653,"./zh-cn.js":653,"./zh-hk":654,"./zh-hk.js":654,"./zh-mo":655,"./zh-mo.js":655,"./zh-tw":656,"./zh-tw.js":656};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=668},690:function(t,e,n){"use strict";var r=n(1),o=(n(23),n(659),n(238)),c=n(26),l=n(239),d=n(156),h=n(674),m=n(0),f=n(8),v=n(7);e.a=Object(v.a)(c.a,l.a,d.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(m.h)(this.maxWidth),minWidth:Object(m.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(m.u)(this,"activator",!0)&&Object(f.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===m.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},828:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(194),n(29),n(243),n(13),n(3),n(39),n(80),n(518)),c=n.n(o),l=n(812),d=n(835),h=(n(519),{data:function(){return{isValid:!0,isEdit:!1,hasItem:!1,rules:[function(t){return!!t||"Este campo es requerido"}],quantityRules:[function(t){return t>0||"Coloca un numero mayor a 0"},function(t){return!!t||"Este campo es requerido"}],products:[],providers:[],autocomplete:null,provider:null,subTotal:0,total:0,selectedProduct:{},formHeader:{deliveryDate:Object(l.a)(Object(d.a)((new Date).toISOString()),"yyyy-MM-dd"),paymentMethod:"Contado",provider:"",deliveryAddress:"",invoiceNumber:""},search:null,searchProvider:null,formDetails:{product:"",quantity:0,price:0},editItem:[],dataItems:[],dataHeaders:[{text:"Producto",value:"product",class:"header-color white--text"},{text:"Precio",value:"price",class:"header-color white--text"},{text:"Cantidad",value:"quantity",class:"header-color white--text"},{text:"Total",value:"subTotal",class:"header-color white--text"},{text:"Acciones",value:"actions",class:"header-color white--text"}],menu:!1,today:c()(new Date).locale("es_py").format("dddd, DD MMMM, yyyy"),paymentMethod:["Contado","Crédito"]}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.commit("setLoading"),null==t.$route.query._id){e.next=7;break}return t.isEdit=!0,e.next=5,t.$axios.$get("/api/supplyOrder/"+t.$route.query._id);case 5:n=e.sent,t.setItem(n);case 7:t.$store.commit("setLoading");case 8:case"end":return e.stop()}}),e)})))()},methods:{setItem:function(t){this.dataItems=t.details,this.hasItem=!0,this.formHeader.paymentMethod=t.paymentMethod,this.formHeader.provider=t.provider,this.formHeader.invoiceNumber=t.invoiceNumber,this.total=t.totalAmount;for(var i=0;i<t.details.length;i++){var element=t.details[i];this.editItem.push(element)}},setSubTotal:function(){this.formDetails.price&&this.formDetails.quantity&&(this.subTotal=parseInt(this.formDetails.price*(this.formDetails.quantity/1e3)))},cleanTable:function(){this.total=0,this.dataItems=[]},cleanHeader:function(){this.formHeader={deliveryDate:Object(l.a)(Object(d.a)((new Date).toISOString()),"yyyy-MM-dd"),paymentMethod:"Contado",provider:"",deliveryAddress:""},this.formDetails={product:"",quantity:0,price:0},this.subTotal=0},saveOrder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.commit("setLoading"),r={deliveryDate:t.formHeader.deliveryDate,totalAmount:t.total,provider:t.formHeader.provider,lowerCaseProvider:t.formHeader.provider.toLowerCase(),paymentMethod:t.formHeader.paymentMethod,total:t.total,details:t.dataItems,deliveryAddress:"N/A",totalPayed:"Contado"==t.formHeader.paymentMethod?t.total:0,userName:null!==(n=t.$auth.$storage.getLocalStorage("user").userName)&&void 0!==n?n:"",invoiceNumber:t.formHeader.invoiceNumber},e.prev=2,!t.isEdit){e.next=9;break}return e.next=6,t.$axios.put("/api/supplyOrder/update/"+t.$route.query._id,{oldItem:t.editItem,editedItem:r});case 6:t.$store.commit("setSuccess","Compra editada exitosamente"),e.next=12;break;case 9:return e.next=11,t.$axios.post("/api/supplyOrder/create",r);case 11:t.$store.commit("setSuccess","Compra creada exitosamente");case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),t.$store.commit("setError","Ha ocurrido un error");case 18:t.$store.commit("setLoading"),t.$router.push("/buy_products");case 20:case"end":return e.stop()}}),e,null,[[2,14]])})))()},removeItem:function(t,e){var n=this.dataItems.indexOf(t);this.total=this.total-t.subTotal,this.dataItems.splice(n,1),0==this.dataItems.length&&(this.hasItem=!1)},clearDetailsForm:function(){this.formDetails={product:"",quantity:0,price:0},this.subTotal=0,this.search=null},addProduct:function(){var t=this;if(this.dataItems.length>0){var filter=this.dataItems.filter((function(e){return e.product.name==t.selectedProduct.name}));if(filter.length>0)return this.autocomplete=null,this.$store.commit("setError","Este producto ya se agrego en la tabla"),!1}this.formDetails.subTotal=this.subTotal,this.formDetails.product=this.selectedProduct;var e={subTotal:parseInt(this.formDetails.subTotal),product:this.selectedProduct,quantity:parseInt(this.formDetails.quantity),price:parseInt(this.formDetails.price)};this.dataItems.push(e),this.total=this.total+this.subTotal,this.hasItem=!0,document.getElementById("autocomplete").focus()},selectProduct:function(t){null!=t&&(this.autocomplete=null,this.formDetails.price=t.price,this.formDetails.quantity=0,this.subTotal=0,this.selectedProduct=t)},selectProvider:function(t){null!=t&&(this.provider=t,this.formHeader.provider=this.provider.name)}},watch:{search:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=t){n.next=3;break}return e.formDetails.price=0,n.abrupt("return");case 3:if(!(t.length<2)){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,e.$axios.$get("/api/allProducts/".concat(t));case 7:r=n.sent,e.products=r.data;case 9:case"end":return n.stop()}}),n)})))()},searchProvider:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=t){n.next=2;break}return n.abrupt("return");case 2:if(!(t.length<2)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,e.$axios.$get("/api/providers/".concat(t));case 6:r=n.sent,e.providers=r.data;case 8:case"end":return n.stop()}}),n)})))()}}}),m=n(51),f=n(56),v=n.n(f),y=n(663),j=n(240),x=n(222),I=n(813),_=n(497),S=n(508),C=n(223),k=n(661),w=n(495),D=n(690),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-form",{model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div"),t._v(" "),n("div",{staticClass:"col-12 mt-3 d-flex flex-wrap"},[n("h2",[t._v("Nueva Compra")]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mx-6",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"primary",large:""},on:{click:function(e){return t.cleanHeader()}}},[t._v("mdi-broom")])],1)]}}])},[t._v(" "),n("span",[t._v("Limpiar Formulario")])])],1),t._v(" "),n("div",{staticClass:"col-12"},[n("v-divider")],1)]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12 col-sm-4"},[n("h4",[t._v("Proveedor")]),t._v(" "),n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-truck",placeholder:"Proveedor",rules:t.rules,items:t.providers,"item-text":"name","search-input":t.searchProvider,"return-object":"",outlined:"",dense:""},on:{"update:searchInput":function(e){t.searchProvider=e},"update:search-input":function(e){t.searchProvider=e},change:function(e){return t.selectProvider(e)}},model:{value:t.provider,callback:function(e){t.provider=e},expression:"provider"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("h4",[t._v("Método de pago")]),t._v(" "),n("v-select",{attrs:{items:["Contado","Credito"],rules:t.rules,"prepend-inner-icon":"mdi-account-cash-outline",dense:"",outlined:""},model:{value:t.formHeader.paymentMethod,callback:function(e){t.$set(t.formHeader,"paymentMethod",e)},expression:"formHeader.paymentMethod"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("h4",[t._v("Nro. de comprobante.")]),t._v(" "),n("v-text-field",{attrs:{placeholder:"Nro de comprobante","prepend-inner-icon":"mdi-receipt",rules:t.rules,name:"invoiceNumber",outlined:"",dense:""},model:{value:t.formHeader.invoiceNumber,callback:function(e){t.$set(t.formHeader,"invoiceNumber",e)},expression:"formHeader.invoiceNumber"}})],1),t._v(" "),n("div",{staticClass:"col-12",staticStyle:{"padding-top":"0px"}},[n("v-divider")],1)]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12"},[n("h2",[t._v("Agregar Producto.")])])]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("h4",[t._v("Producto")]),t._v(" "),n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-seed",rules:t.rules,items:t.products,"item-text":"name",id:"autocomplete","search-input":t.search,"return-object":"",dense:"",outlined:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:function(e){return t.selectProduct(e)}},model:{value:t.autocomplete,callback:function(e){t.autocomplete=e},expression:"autocomplete"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("h4",[t._v("Precio Gs.")]),t._v(" "),n("v-text-field",{attrs:{type:"number","prepend-inner-icon":"mdi-currency-usd",rules:t.quantityRules,name:"price",outlined:"",dense:""},on:{keyup:function(e){return t.setSubTotal()},change:function(e){return t.setSubTotal()}},model:{value:t.formDetails.price,callback:function(e){t.$set(t.formDetails,"price",e)},expression:"formDetails.price"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-6 col-md-4"},[n("h4",[t._v("Cantidad ("+t._s(this.selectedProduct.unitOfMeasure)+")")]),t._v(" "),n("v-text-field",{attrs:{type:"number","prepend-inner-icon":"mdi-numeric-2-box-multiple-outline ",disabled:null==t.selectedProduct,rules:t.quantityRules,name:"quantity",dense:"",outlined:""},on:{keyup:function(e){return t.setSubTotal()},change:function(e){return t.setSubTotal()}},model:{value:t.formDetails.quantity,callback:function(e){t.$set(t.formDetails,"quantity",e)},expression:"formDetails.quantity"}})],1)])]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12 col-md-10"},[n("div",{staticClass:"d-flex justify-space-between flex-wrap"},[n("v-btn",{attrs:{color:"primary",disabled:!t.isValid},on:{click:function(e){return t.addProduct()}}},[t._v("Agregar")]),t._v(" "),n("div",{staticClass:"d-flex"},[n("h3",[t._v("SubTotal:\n            "),n("shared-money",{attrs:{amount:parseInt(t.subTotal)}})],1)])],1)]),t._v(" "),n("div",{staticClass:"col-12"},[n("v-divider")],1)]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-flex justify-space-between"},[n("div",{staticClass:"d-flex flex-wrap"},[n("h2",[t._v("Productos seleccionados")]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mx-6",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"primary",large:""},on:{click:t.cleanTable}},[t._v("mdi-broom")])],1)]}}])},[t._v(" "),n("span",[t._v("Limpiar Tabla")])])],1),t._v(" "),n("span",{staticClass:"caption pt-3"},[n("v-icon",{staticClass:"mb-1",attrs:{color:"blue",small:""}},[t._v("mdi-alert-circle-outline\n          ")]),t._v(" "),n("span",{staticClass:"subtitle-2"},[t._v("\n            Para crear el pedido clickea el boton guardar")])],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12"},[n("v-card",{staticClass:"mt-5",attrs:{outlined:""}},[n("v-data-table",{attrs:{items:t.dataItems,headers:t.dataHeaders},scopedSlots:t._u([{key:"item.product",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.product.name)+"\n          ")]}},{key:"item.subTotal",fn:function(t){var e=t.item;return[n("shared-money",{attrs:{amount:parseInt(e.subTotal)}})]}},{key:"item.price",fn:function(t){var e=t.item;return[n("div",{staticClass:"d-flex"},[n("shared-money",{attrs:{amount:parseInt(e.price)}})],1)]}},{key:"item.quantity",fn:function(e){var r=e.item;return[n("div",{staticClass:"d-flex"},[t._v("\n              "+t._s(r.quantity)+" "+t._s(r.product.unitOfMeasure)+"\n            ")])]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"error",title:"Remover item"},on:{click:function(e){return t.removeItem(r)}}},[t._v("mdi-close")])],1)]}}],null,!0)})],1)],1)]),t._v(" "),n("div",{staticClass:"container-fluid d-flex flex-wrap px-sm-4 align-center"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-flex justify-space-between"},[n("v-btn",{staticClass:"my-4",attrs:{color:"primary",disabled:!t.hasItem},on:{click:t.saveOrder}},[t._v("Guardar")]),t._v(" "),n("div",{staticClass:"d-flex mt-2 mr-5"},[n("h3",[t._v("\n            Total: "),n("shared-money",{attrs:{amount:parseInt(t.total)}})],1)])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{SharedMoney:n(519).default}),v()(component,{VAutocomplete:y.a,VBtn:j.a,VCard:x.a,VDataTable:I.a,VDivider:_.a,VForm:S.a,VIcon:C.a,VSelect:k.a,VTextField:w.a,VTooltip:D.a})}}]);