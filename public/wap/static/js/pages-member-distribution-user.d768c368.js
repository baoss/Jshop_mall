(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-user"],{1168:function(t,e,i){"use strict";i.r(e);var n=i("b1ba"),o=i("c87b");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("30f4");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"45c329a0",null);e["default"]=r.exports},1186:function(t,e,i){"use strict";var n=i("3e08"),o=i.n(n);o.a},"1c9b":function(t,e,i){var n=i("3b37");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2d8bc77d",n,!0,{sourceMap:!1,shadowMode:!1})},"2f7c":function(t,e,i){},"30f4":function(t,e,i){"use strict";var n=i("1c9b"),o=i.n(n);o.a},"3b37":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".cpr[data-v-45c329a0]{text-align:center;font-size:%?24?%;margin:%?20?% 0}",""])},"3e08":function(t,e,i){var n=i("e04d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("16f226e6",n,!0,{sourceMap:!1,shadowMode:!1})},"3f6c":function(t,e,i){"use strict";i.r(e);var n=i("840a"),o=i("40c5");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("1186");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"8dc80600",null);e["default"]=r.exports},"40c5":function(t,e,i){"use strict";i.r(e);var n=i("f169"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"840a":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"member-top"},[i("v-uni-view",{staticClass:"member-top-c"},[i("v-uni-view",{staticClass:"fsz50 color-f"},[t._v(t._s(t.info.total_settlement_amount))]),i("v-uni-view",{staticClass:"fsz26 color-d"},[t._v("累计收入")])],1)],1),i("v-uni-view",{staticClass:"member-grid"},t._l(t.orderItems,function(e,n){return i("v-uni-view",{key:n,staticClass:"member-item"},[i("v-uni-text",{staticClass:"member-item-text"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"color-o fsz38"},[t._v(t._s(e.nums))])],1)}),1),i("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},[t._l(t.utilityMenus,function(e,n){return i("v-uni-view",{key:n,staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(i){i=t.$handleEvent(i),t.navigateToHandle(e.router)}}},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:e.icon}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)}),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(e){e=t.$handleEvent(e),t.createPoster()}}},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/extension.png"}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("我要推广")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],2),i("jihaiCopyright")],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},b1ba:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cpr"},[i("v-uni-view",{staticClass:"color-9"},[t._v("吉海科技 © jihainet.com")]),i("v-uni-view",{staticClass:"color-9"},[t._v("版权所有")])],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},c87b:function(t,e,i){"use strict";i.r(e);var n=i("2f7c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},ca75:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var o=n(i("a4bb")),a={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};e.orders=a;var s={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";(0,o.default)(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=s;var r={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};e.goBack=r;var c={methods:{handleBack:function(){var t=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=c;var u={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout(function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})},800)}})}}};e.checkLogin=u;var d={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=d},e04d:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".member-top[data-v-8dc80600]{position:relative;width:100%;height:%?340?%;background-color:#ff7159}.bg-img[data-v-8dc80600]{position:absolute;width:100%;height:100%}.member-top-c[data-v-8dc80600]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.user-head-img[data-v-8dc80600]{display:block;width:%?160?%;height:%?160?%;border-radius:50%;overflow:hidden;background-color:hsla(0,0%,100%,.7)}.user-name[data-v-8dc80600]{font-size:%?30?%;color:#fff}.member-grid[data-v-8dc80600]{background-color:#fff;border-top:%?2?% solid #eee;padding:%?20?% 0}.margin-cell-group[data-v-8dc80600]{margin:%?20?% 0;color:#666}.badge[data-v-8dc80600]{left:%?80?%;top:%?-6?%}uni-button.cell-item-hd[data-v-8dc80600]{background-color:#fff;padding:0;line-height:1.4;color:#333}uni-button.cell-item-hd[data-v-8dc80600]:after{border:none}.login-btn[data-v-8dc80600]{color:#fff;width:%?160?%;height:%?50?%;line-height:%?50?%;border-radius:%?25?%;background:#ff7159;font-size:12px;margin-top:%?16?%}",""])},f169:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("1168")),a=i("ca75"),s=i("a7b0"),r={components:{jihaiCopyright:o.default},mixins:[a.checkLogin],data:function(){return{orderItems:{freeze:{name:"冻结金额",nums:"0"},settlement:{name:"已结算金额",nums:"0"},current_month_order:{name:"本月订单数",nums:"0"}},utilityMenus:{invite:{name:"我的邀请",icon:"/static/image/ic-me-invite.png",router:"../invite/list"},order:{name:"推广订单",icon:"/static/image/extension_order.png",router:"./order"},balance:{name:"我的佣金",icon:"/static/image/ic-me-balance.png",router:"../balance/details?status=5"},my_store:{name:"我的店铺",icon:"/static/image/my_store.png",router:"./my_store"},store_setting:{name:"店铺设置",icon:"/static/image/me-ic-set.png",router:"./store_setting"}},info:{}}},onShow:function(){var t=this;"1"!=t.$store.state.config.distribution_store&&(delete this.utilityMenus.my_store,delete this.utilityMenus.store_setting),t.$api.getDistributioninfo({},function(e){e.status?(t.info=e.data,1!=e.data.verify&&t.$common.redirectTo("/pages/member/distribution/index"),t.orderItems.freeze.nums=t.info.freeze_amount,t.orderItems.settlement.nums=t.info.settlement_amount,t.orderItems.current_month_order.nums=t.info.current_month_order,"1"==t.$store.state.config.distribution_store&&(t.utilityMenus.my_store.router="./my_store?store="+t.info.store)):t.$common.errorToShow(e.msg)})},methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},orderNavigateHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.hasLogin)return this.checkIsLogin();this.$store.commit("orderTab",e),this.$common.navigateTo(t)},goAfterSaleList:function(){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo("../after_sale/list")},createPoster:function(){var t=this,e={type:4,id:this.info.store},i=getCurrentPages(),n=(i[i.length-1],"pages/share/jump");e.source=1,e.return_url=s.apiBaseUrl+"wap/"+n;var o=this.$db.get("userToken");o&&(e.token=o),this.$api.createPoster(e,function(e){e.status?t.$common.navigateTo("/pages/share?poster="+e.data):t.$common.errorToShow(e.msg)})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.$common.shareParameterDecode("type=3&invite="+t),i="/pages/share/jump?scene="+e;return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:i}}};e.default=r}}]);