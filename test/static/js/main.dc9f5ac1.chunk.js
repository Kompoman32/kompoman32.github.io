(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{25:function(t,e,s){},26:function(t,e,s){},27:function(t,e,s){},47:function(t,e,s){},48:function(t,e,s){},49:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(2),i=s.n(n),r=s(17),c=s.n(r),d=(s(25),s(3)),o=s(4),l=s(6),j=s(5),u=(s(26),s(27),s(18)),h=s.n(u),b=s(19),g="\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c",O="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",f=function(t){Object(l.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(d.a)(this,s),(a=e.call(this,t)).state={isLoading:t.isLoading,errorMessage:"",login:"",pass:""},a.setIsLoading=t.setIsLoading,a.setData=t.setData,a}return Object(o.a)(s,[{key:"onLoginChange",value:function(t){this.setState({login:t.target.value,errorMessage:""})}},{key:"onPassChange",value:function(t){this.setState({pass:t.target.value,errorMessage:""})}},{key:"getData",value:function(){var t=this,e=this.state.login,s=this.state.pass;if(e&&s){this.setIsLoading(!0);var a=Object(b.sha256)(s);h.a.get("https://68652f92-a080-4012-aad7-20ff13355f4e.mock.pstmn.io/auth",{params:{login:e,password_hash:a}}).then((function(e){t.setData(e.data)})).catch((function(e){e&&e.response&&401===e.response.status&&t.setState({errorMessage:O})})).then((function(){t.setIsLoading(!1)}))}else this.setState({errorMessage:g})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("form",{className:"auth",onSubmit:function(e){e.preventDefault(),t.getData()},children:[Object(a.jsx)("label",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(a.jsx)("input",{"data-testid":"login",value:this.state.login,onChange:function(e){return t.onLoginChange(e)}}),Object(a.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("input",{"data-testid":"password",type:"password",value:this.state.pass,onChange:function(e){return t.onPassChange(e)}}),Object(a.jsx)("button",{"data-testid":"submit",type:"submit",disabled:this.state.isLoading,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsx)("label",{"data-testid":"error",children:this.state.errorMessage})]})}}]),s}(i.a.Component);s(47);var p=function(t){var e=t.data,s=e.name,n=e.department,i=e.role,r=e.products;return r=Array.isArray(r)?r:[],Object(a.jsx)("table",{className:"profile",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"\u0418\u043c\u044f"}),Object(a.jsx)("td",{"data-testid":"name",children:s})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435"}),Object(a.jsx)("td",{"data-testid":"department",children:n})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"\u0420\u043e\u043b\u044c"}),Object(a.jsx)("td",{"data-testid":"role",children:i})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{verticalAlign:"top"},children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"}),Object(a.jsx)("td",{children:Object(a.jsx)("table",{"data-testid":"products",children:Object(a.jsx)("tbody",{children:r.map((function(t,e){return Object(a.jsx)("tr",{"data-testid":"product",children:Object(a.jsx)("td",{children:t})},e.toString())}))})})})]})]})})};s(48);function x(){return Object(a.jsx)("div",{className:"loadingWrapper",children:Object(a.jsx)("div",{"data-testid":"loading",className:"loading"})})}var v=function(t){Object(l.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(d.a)(this,s),(a=e.call(this,t)).state={data:null,isLoading:!1,isLoginError:!1},a}return Object(o.a)(s,[{key:"setIsLoading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({isLoading:t})}},{key:"render",value:function(){var t=this,e=this.state.data?Object(a.jsx)(p,{data:this.state.data}):Object(a.jsx)(f,{isLoading:this.state.isLoading,setIsLoading:function(e){return t.setIsLoading(e)},setData:function(e){return t.setState({data:e})}});return Object(a.jsxs)("div",{className:"app",children:[this.state.isLoading&&Object(a.jsx)(x,{}),Object(a.jsx)("div",{className:"page",children:e})]})}}]),s}(i.a.Component),m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;s(t),a(t),n(t),i(t),r(t)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),m(console.log)}},[[49,1,2]]]);
//# sourceMappingURL=main.dc9f5ac1.chunk.js.map