"use strict";(self["webpackChunkcrossfit"]=self["webpackChunkcrossfit"]||[]).push([[52],{3052:function(s,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(3396),n=t(9242);const a={class:"container mt-5"},o={class:"col-md-6"},i=(0,r._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},u={for:"inputEmail",class:"sr-only"},d=(0,r.Uk)(" Email address "),c={class:"mb-2"},p={for:"inputPassword",class:"sr-only"},m=(0,r.Uk)(" Password "),h=(0,r._)("div",{class:"text-end mt-4"},[(0,r._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function b(s,e,t,b,f,w){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,n.iM)(((...s)=>w.signIn&&w.signIn(...s)),["prevent"]))},[(0,r._)("div",o,[i,(0,r._)("div",l,[(0,r._)("label",u,[d,(0,r.wy)((0,r._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>f.user.username=s)},null,512),[[n.nr,f.user.username]])])]),(0,r._)("div",c,[(0,r._)("label",p,[m,(0,r.wy)((0,r._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>f.user.password=s)},null,512),[[n.nr,f.user.password]])])]),h])],32)])}var f={data(){return{user:{userame:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(t)}`,this.$router.push("/dashboard/products")}}))}}},w=t(89);const _=(0,w.Z)(f,[["render",b]]);var k=_}}]);
//# sourceMappingURL=52.d64e4bc1.js.map