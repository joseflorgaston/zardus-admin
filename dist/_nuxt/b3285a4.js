(window.webpackJsonp=window.webpackJsonp||[]).push([[10,45],{468:function(t,e,r){"use strict";r.r(e);r(19),r(30),r(59),r(21),r(58);var n={props:{amount:{type:Number,required:!0},currency:{type:String,default:"Gs."}},computed:{formattedAmount:function(){return this.formatMiles(parseInt(this.amount))}},methods:{formatMiles:function(t){return this.currency+" "+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}}},o=r(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    "+t._s(t.formattedAmount)+"\n")])}),[],!1,null,null,null);e.default=component.exports},702:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(75),r(32),r(21),r(41),r(2)),c=r(724),l=r(611),d=r.n(l),h=(r(694),o.a.extend({components:{Vue:o.a,Chart:c.a},props:{},data:function(){return{barChart:{},totalProfits:0,totalExpenses:0,range:"Mes",ranges:["Hoy","Semana","Mes","Total"],title:"Total Transacciones",chartId:"balanceStatistic",text:"Ultimos 30 dias",loading:!0}},watch:{},computed:{height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 220;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 800}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMonthlyStatistic();case 2:case"end":return e.stop()}}),e)})))()},methods:{setDataSets:function(t,label,data,e,r){for(var n=document.getElementById(this.chartId).getContext("2d"),o=[],l=0;l<t;l++)o.push({label:"".concat(label[l]),data:data[l],backgroundColor:e[l],borderColor:["#0C2334"],borderWidth:0});this.barChart=new c.a(n,{type:"bar",scale:"scale",data:{labels:r,datasets:o},options:{scales:{y:{beginAtZero:!0}}}}),this.barChart.update()},getStatistics:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.barChart.destroy(),t.loading=!0,t.range!=t.ranges[0]){e.next=6;break}return e.next=5,t.getDailyStatistic();case 5:return e.abrupt("return",e.sent);case 6:if(t.range!=t.ranges[1]){e.next=10;break}return e.next=9,t.getWeeklyStatistic();case 9:return e.abrupt("return",e.sent);case 10:if(t.range!=t.ranges[2]){e.next=14;break}return e.next=13,t.getMonthlyStatistic();case 13:return e.abrupt("return",e.sent);case 14:return e.abrupt("return",t.getTotalStatistic());case 15:case"end":return e.stop()}}),e)})))()},getDailyStatistic:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date,t.text=d()(r).locale("es").format("dddd/DD/MM").toUpperCase(),e.next=5,t.$axios.$get("/api/balance/statistics",{params:{type:"Daily"}});case 5:n=e.sent,t.totalExpenses=n.expenses,t.totalProfits=n.profits,t.setDataSets(2,["Ganancias","Gastos"],[[n.profits],[n.expenses]],["#00E676","#DD2C00"],[t.text]),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})))()},getTotalStatistic:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.text="Total",e.next=4,t.$axios.$get("/api/balance/statistics",{params:{type:"Total"}});case 4:r=e.sent,t.totalExpenses=r.expenses,t.totalProfits=r.profits,t.setDataSets(2,["Ganancias","Gastos"],[[r.profits],[r.expenses]],["#00E676","#DD2C00"],["Total"]),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()},getWeeklyStatistic:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/balance/statistics",{params:{type:"Weekly"}});case 3:r=e.sent,t.text="En la semana",t.totalExpenses=r.expenses.total,t.totalProfits=r.profits.total,t.setDataSets(2,["Ganancias","Gastos"],[r.profits.values,r.expenses.values],["#00E676","#DD2C00"],["Dia 1","Dia 2","Dia 3","Dia 4","Dia 5","Dia 6","Dia 7"]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},getMonthlyStatistic:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/balance/statistics",{params:{type:"Monthly"}});case 3:r=e.sent,t.text="Ultimos 30 dias",t.totalExpenses=r.expenses.total,t.totalProfits=r.profits.total,t.setDataSets(2,["Ganancias","Gastos"],[r.profits.values,r.expenses.values],["#00E676","#DD2C00"],["Sem 1","Sem 2","Sem 3","Sem 4"]),t.loading=!1,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})))()}}})),f=r(43),x=r(50),m=r.n(x),v=r(201),w=r(82),y=r(200),S=r(610),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{width:"400px",height:"350px"}},[r("div",{staticClass:"d-flex flex-wrap align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[r("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"50"}})],1)]),t._v(" "),r("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{width:"400px",height:"350px"}},[r("v-card-text",{staticClass:"text-center d-flex justify-space-between"},[t._v("\n      "+t._s(t.title)+"\n      "),r("div",{staticStyle:{width:"40%",height:"40px"}},[r("v-select",{attrs:{items:t.ranges,label:"Cambiar rango",dense:""},on:{change:t.getStatistics},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)]),t._v(" "),r("div",{staticClass:"text-center"},[r("h3",[t._v(t._s(t.text))])]),t._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center"},[r("shared-money",{staticClass:"pr-1 subtitle-2 success--text",attrs:{amount:t.totalProfits}}),t._v("\n      /\n      "),r("shared-money",{staticClass:"pl-1 subtitle-2 error--text",attrs:{amount:t.totalExpenses}})],1),t._v(" "),r("div",{staticClass:"pl-5 ma-3",staticStyle:{width:"83%",height:"55%"}},[r("canvas",{staticStyle:{width:"100%",height:"100% !important"},attrs:{id:t.chartId},on:{change:function(e){return t.putNewValues()}}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{SharedMoney:r(468).default}),m()(component,{VCard:v.a,VCardText:w.b,VProgressCircular:y.a,VSelect:S.a})}}]);