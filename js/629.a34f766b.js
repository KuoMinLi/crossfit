"use strict";(self["webpackChunkcrossfit"]=self["webpackChunkcrossfit"]||[]).push([[629],{5629:function(t,s,i){i.r(s),i.d(s,{default:function(){return R}});var o=i(3396),a=i(7139),l=i(9242);const e=(0,o._)("div",{class:"loadingio-spinner-cube-50evvftsk7p"},[(0,o._)("div",{class:"ldio-a1obro97w5l"},[(0,o._)("div"),(0,o._)("div"),(0,o._)("div"),(0,o._)("div")])],-1),n={class:"container"},d={class:"row mt-4"},c={class:"col-md-7"},u={class:"table align-middle"},r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"圖片"),(0,o._)("th",null,"商品名稱"),(0,o._)("th",null,"價格"),(0,o._)("th")])],-1),p={style:{width:"200px"}},_={href:"#",class:"text-dark"},g={key:0,class:"h5"},h={key:1,class:"h6"},b={key:2,class:"h5"},k={class:"btn-group btn-group-sm"},m=["onClick"],v=["disabled","onClick"],y={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},w=(0,o._)("span",{class:"visually-hidden"},"Loading...",-1),f=[w],C=(0,o.Uk)(" 加到購物車 "),x={class:"col-md-5"},q={class:"sticky-top"},D={class:"table align-middle"},I=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th",null,"品名"),(0,o._)("th",{style:{width:"110px"}},"數量"),(0,o._)("th",null,"單價")])],-1),$=["disabled","onClick"],z=(0,o._)("i",{class:"bi bi-x"},null,-1),L=[z],U={key:0,class:"text-success"},P={class:"input-group input-group-sm"},V={for:"qty"},H=["disabled","onChange","onUpdate:modelValue"],Y={class:"input-group-text"},K={class:"text-end"},W={key:0,class:"text-success"},j=(0,o._)("td",{colspan:"3",class:"text-end"},"總計",-1),Z={class:"text-end"},A={key:0},B=(0,o._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),E={class:"text-end text-success"},F={class:"input-group mb-3 input-group-sm"},G={for:"coupon"},J={class:"input-group-append"};function M(t,s,i,w,z,M){const N=(0,o.up)("LoadingView"),O=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(N,{active:t.isLoading},{default:(0,o.w5)((()=>[e])),_:1},8,["active"]),(0,o.Wm)(O,{active:t.isLoading},null,8,["active"]),(0,o._)("div",n,[(0,o._)("div",d,[(0,o._)("div",c,[(0,o._)("table",u,[r,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(z.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",p,[(0,o._)("div",{style:(0,a.j5)([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.imageUrl})`}])},null,4)]),(0,o._)("td",null,[(0,o._)("a",_,(0,a.zw)(t.title),1)]),(0,o._)("td",null,[t.price?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",g,(0,a.zw)(t.origin_price)+" 元",1)),t.price?((0,o.wg)(),(0,o.iD)("del",h,"原價 "+(0,a.zw)(t.origin_price)+" 元",1)):(0,o.kq)("",!0),t.price?((0,o.wg)(),(0,o.iD)("div",b,"現在只要 "+(0,a.zw)(t.price)+" 元",1)):(0,o.kq)("",!0)]),(0,o._)("td",null,[(0,o._)("div",k,[(0,o._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:s=>M.getProduct(t.id)}," 查看更多 ",8,m),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",disabled:this.status.loadingItem===t.id,onClick:s=>M.addCart(t.id)},[this.status.loadingItem===t.id?((0,o.wg)(),(0,o.iD)("div",y,f)):(0,o.kq)("",!0),C],8,v)])])])))),128))])])]),(0,o._)("div",x,[(0,o._)("div",q,[(0,o._)("table",D,[I,(0,o._)("tbody",null,[z.cart.carts?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(z.cart.carts,(s=>((0,o.wg)(),(0,o.iD)("tr",{key:s.id},[(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:z.status.loadingItem===s.id,onClick:i=>t.removeCartItem(s.id)},L,8,$)]),(0,o._)("td",null,[(0,o.Uk)((0,a.zw)(s.product.title)+" ",1),s.coupon?((0,o.wg)(),(0,o.iD)("div",U," 已套用優惠券 ")):(0,o.kq)("",!0)]),(0,o._)("td",null,[(0,o._)("div",P,[(0,o._)("label",V,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",min:"1",disabled:s.id===z.status.loadingItem,onChange:t=>M.updateCart(s),"onUpdate:modelValue":t=>s.qty=t},null,40,H),[[l.nr,s.qty,void 0,{number:!0}]])]),(0,o._)("div",Y,"/ "+(0,a.zw)(s.product.unit),1)])]),(0,o._)("td",K,[z.cart.final_total!==z.cart.total?((0,o.wg)(),(0,o.iD)("small",W,"折扣價：")):(0,o.kq)("",!0),(0,o.Uk)(" "+(0,a.zw)(t.$filters.currency(s.final_total)),1)])])))),128)):(0,o.kq)("",!0)]),(0,o._)("tfoot",null,[(0,o._)("tr",null,[j,(0,o._)("td",Z,(0,a.zw)(t.$filters.currency(z.cart.total)),1)]),z.cart.final_total!==z.cart.total?((0,o.wg)(),(0,o.iD)("tr",A,[B,(0,o._)("td",E,(0,a.zw)(t.$filters.currency(z.cart.final_total)),1)])):(0,o.kq)("",!0)])]),(0,o._)("div",F,[(0,o._)("label",G,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>z.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[l.nr,z.coupon_code]])]),(0,o._)("div",J,[(0,o._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[1]||(s[1]=(...s)=>t.addCouponCode&&t.addCouponCode(...s))}," 套用優惠碼 ")])])])])])])],64)}var N={data(){return{products:[],product:{},status:{loadingItem:""},cart:{},coupon_code:""}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/kuomin-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,console.log("products:",t),this.isLoading=!1}))},getProduct(t){this.$router.push(`/user/product/${t}`)},addCart(t){const s="https://vue3-course-api.hexschool.io/api/kuomin-api/cart";this.status.loadingItem=t;const i={product_id:t,qty:1};this.$http.post(s,{data:i}).then((t=>{this.status.loadingItem="",console.log(t)}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/kuomin-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t),this.cart=t.data.data,this.isLoading=!1}))},updateCart(t){const s=`https://vue3-course-api.hexschool.io/api/kuomin-api/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const i={product_id:t.product_id,qty:t.qty};this.$http.put(s,{data:i}).then((t=>{console.log(t),this.status.loadingItem="",this.getCart()}))}},created(){this.getProducts(),this.getCart()}},O=i(89);const Q=(0,O.Z)(N,[["render",M]]);var R=Q}}]);
//# sourceMappingURL=629.a34f766b.js.map