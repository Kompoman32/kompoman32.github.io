(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},24:function(e,t,n){e.exports=n(43)},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/\u043a\u0430\u0440\u0442\u0430.a649f862.png"},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),i=n(4),c=n(3),l=n(5),u=n(0),s=n.n(u),o=n(16),g=n(10),m="REDUCE_HP",d=function(e,t){return{type:m,payload:{i:e,j:t}}},h=n(7),p={mountains:"mountains",swamp:"swamp",tank:"tank",_3hp:"3hp",_2hp:"2hp",_1hp:"1hp",empty:""};function v(e){switch(e.toLowerCase()){case p.mountains:return{backgroundImage:"url('images/game/gametiles.svg')",backgroundPosition:"-50px 0px",left:0,height:50,width:50};case p.swamp:return{backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-100px 0px",left:0,height:50,width:50};case p.tank:return{backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-150px 0px",left:0,height:50,width:50};case p._3hp:return{backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"0px -50px",left:0,height:50,width:50};case p._2hp:return{backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-50px -50px",left:0,height:50,width:50};case p._1hp:return{backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-100px -50px",left:0,height:50,width:50};default:return{backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"0px 0px",left:0,height:50,width:50}}}var f={size:5,map:[[v(p.empty),v(p.mountains),v(p.mountains),v(p.empty),v(p.tank)],[v(p._1hp),v(p.empty),v(p.mountains),v(p.empty),v(p.empty)],[v(p._3hp),v(p.empty),v(p.swamp),v(p.empty),v(p.empty)],[v(p.empty),v(p.mountains),v(p.empty),v(p.empty),v(p.empty)],[v(p.empty),v(p.mountains),v(p.empty),v(p._2hp),v(p.empty)]]},b=Object(h.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REDUCE_HP":var n=e.map.slice(),a=t.payload,r=a.i,i=a.j;console.log("".concat(r," ").concat(i));var c=n[r][i];switch(JSON.stringify(c)){case JSON.stringify(v(p._3hp)):return n[r][i]=v(p._2hp),Object(g.a)({},e,{map:n});case JSON.stringify(v(p._2hp)):return n[r][i]=v(p._1hp),Object(g.a)({},e,{map:n});case JSON.stringify(v(p._1hp)):return n[r][i]=v(p.empty),Object(g.a)({},e,{map:n})}return e}return e}),k=(n(19),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"mapCont",className:"overflow-visible"},s.a.createElement(o.a,{store:b},s.a.createElement(O,null)))}}]),t}(u.Component)),x=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderTable",value:function(){for(var e=this.props,t=e.map,n=e.size,a=e.reduceHP,r=[],i=function(e){for(var i=[],c=function(n){i.push(s.a.createElement(E,{key:e+"-"+n,value:t[e][n],onClick:function(){return a(e,n)}}))},l=0;l<n;l++)c(l);r.push(s.a.createElement("div",{className:"flex-row"},i))},c=0;c<n;c++)i(c);return r}},{key:"render",value:function(){return s.a.createElement("div",{id:"map",style:{marginTop:10,marginLeft:10}},this.renderTable())}}]),t}(u.Component);function E(e){return s.a.createElement("div",{className:"mapTile",style:e.value,onClickCapture:function(){return e.onClick()}})}var O=Object(o.b)(function(e){return{map:e.map,size:e.size}},function(e){return{reduceHP:Object(h.a)(d,e)}})(x),C=k,w=n(23),y=n.n(w),j=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(I,null),s.a.createElement(N,null))}}]),t}(u.Component),I=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"flex-row margin-5"},s.a.createElement("div",{className:"flex-column flex-justify-start widthAll"},s.a.createElement("div",{className:"flex-column"},s.a.createElement("span",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),s.a.createElement("div",null,"/*",s.a.createElement("input",{type:"range",id:"speedInput",onInput:"document.getElementById('speedVal').innerText = document.getElementById('speedInput').value"}),s.a.createElement("span",{id:"speedVal"},"50"),"*/"),s.a.createElement(D,null)),s.a.createElement("div",{id:"moveBtnDiv",className:"flex-row"},s.a.createElement("div",{className:"flex-row"},s.a.createElement(S,{image:"images/menu/startbtn.svg",OnClick:function(){return alert("1")}}),s.a.createElement(S,{image:"images/menu/pausebtn.svg",OnClick:function(){return alert("2")}}),s.a.createElement(S,{image:"images/menu/stopbtn.svg",OnClick:function(){return alert("3")}}),s.a.createElement(S,{image:"images/menu/skipbtn.svg",OnClick:function(){return alert("4")}}),s.a.createElement(S,{image:"images/menu/nextstepbtn.svg",OnClick:function(){return alert("5")}})),s.a.createElement("div",{style:{width:50}}," "),s.a.createElement("div",{className:"flex-row"},s.a.createElement(S,{image:"images/menu/savebtn.svg",OnClick:function(){return alert("6")}}),s.a.createElement(S,{image:"images/menu/loadbtn.svg",OnClick:function(){return alert("7")}})),s.a.createElement(S,{image:"",OnClick:function(){return alert("8")}})),s.a.createElement("div",{style:{textAlign:"right"}},s.a.createElement("span",null,"\u0414\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u044b: "),s.a.createElement("span",null,"10")),s.a.createElement("div",{id:"saveBtnDiv"})),s.a.createElement("div",{className:"flex-column flex-justify-evenly"},s.a.createElement(B,null),s.a.createElement(P,null)))}}]),t}(u.Component);function S(e){return s.a.createElement("button",{onClick:e.OnClick},s.a.createElement("img",{src:e.image,alt:""}))}var B=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={isOpen:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{id:"infoButton",className:"flex-row",onClick:function(){return e.setState({isOpen:!0})}},s.a.createElement("span",null,"INFO"),s.a.createElement("img",{src:"../images/menu/infobtn.svg",alt:""})),s.a.createElement(y.a,{isOpen:this.state.isOpen,onRequestClose:function(){return e.setState({isOpen:!1})}},s.a.createElement(_,{onClick:function(){return e.setState({isOpen:!1})}})))}}]),t}(u.Component);function _(e){return s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){return e.OnClick}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),"/*TODO*/")}var P=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"tankDiv"},s.a.createElement("img",{src:"../images/game/tank.png",alt:""}))}}]),t}(u.Component),D=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"/*TODO*/")}}]),t}(u.Component),N=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={gunnerSelectedIndex:0,driverSelectedIndex:0,chargerSelectedIndex:0},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChangeButton",value:function(e,t){this.setState({gunnerSelectedIndex:"gunner"===t?e:this.state.gunnerSelectedIndex,driverSelectedIndex:"driver"===t?e:this.state.driverSelectedIndex,chargerSelectedIndex:"charger"===t?e:this.state.chargerSelectedIndex})}},{key:"render",value:function(){return s.a.createElement("div",{className:"flex-row flex-align-start "},s.a.createElement("div",{id:"commandsDiv",className:"overflow overflow-y-visible margin-10"},s.a.createElement(T,{gunnerSelectedIndex:this.state.gunnerSelectedIndex,driverSelectedIndex:this.state.driverSelectedIndex,chargerSelectedIndex:this.state.chargerSelectedIndex})),s.a.createElement("div",null,s.a.createElement(z,{onClick:this.handleChangeButton.bind(this)})))}}]),t}(u.Component),T=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={rows:[{gunner:null,driver:null,charger:null}]},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleAddTD",value:function(){var e=this.state.rows.slice();this.setState({rows:e.concat([{gunner:null,driver:null,charger:null}])})}},{key:"handleClickTD_LMB",value:function(e,t){var n=this.state.rows.slice();for(n[t]={gunner:"gunner"===e?A("gunner",this.props.gunnerSelectedIndex):n[t].gunner,driver:"driver"===e?A("driver",this.props.driverSelectedIndex):n[t].driver,charger:"charger"===e?A("charger",this.props.chargerSelectedIndex):n[t].charger};null==n[n.length-1].gunner&&null==n[n.length-1].driver&&null==n[n.length-1].charger;)n.pop();n=n.concat([{gunner:null,driver:null,charger:null}]),this.setState({rows:n})}},{key:"handleClickTD_RMB",value:function(e,t){var n=this.state.rows.slice();for(n[t]={gunner:"gunner"===e?null:n[t].gunner,driver:"driver"===e?null:n[t].driver,charger:"charger"===e?null:n[t].charger};0!==n.length&&null==n[n.length-1].gunner&&null==n[n.length-1].driver&&null==n[n.length-1].charger;)n.pop();n=n.concat([{gunner:null,driver:null,charger:null}]),this.setState({rows:n})}},{key:"renderRows",value:function(){for(var e=this,t=[],n=function(n){t.push(s.a.createElement(M,{index:n,value:e.state.rows[n],onClickTD_LMB:function(t){return e.handleClickTD_LMB(t,n)},onClickTD_RMB:function(t){return e.handleClickTD_RMB(t,n)}}))},a=0;a<this.state.rows.length;a++)n(a);return t}},{key:"render",value:function(){return s.a.createElement("table",{id:"commands"},s.a.createElement("tr",null,s.a.createElement("th",null,"#"),s.a.createElement("th",null,"\u041d\u0430\u0432\u043e\u0434\u0447\u0438\u043a"),s.a.createElement("th",null,"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),s.a.createElement("th",null,"\u0417\u0430\u0440\u044f\u0436\u0430\u044e\u0449\u0438\u0439")),this.renderRows())}}]),t}(u.Component),M=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).index=0,n.index=e.index,n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("tr",null,s.a.createElement("td",{style:{width:20}},this.index+1),s.a.createElement(R,{value:this.props.value.gunner,onClickTD_LMB:function(){return e.props.onClickTD_LMB("gunner")},onClickTD_RMB:function(){return e.props.onClickTD_RMB("gunner")}}),s.a.createElement(R,{value:this.props.value.driver,onClickTD_LMB:function(){return e.props.onClickTD_LMB("driver")},onClickTD_RMB:function(){return e.props.onClickTD_RMB("driver")}}),s.a.createElement(R,{value:this.props.value.charger,onClickTD_LMB:function(){return e.props.onClickTD_LMB("charger")},onClickTD_RMB:function(){return e.props.onClickTD_RMB("charger")}}))}}]),t}(u.Component);function R(e){return s.a.createElement("td",{className:"gameTD",onClick:function(){return e.onClickTD_LMB()},onContextMenu:function(t){t.preventDefault(),e.onClickTD_RMB()}},s.a.createElement("div",{style:e.value}))}var L=8,J=11,z=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).onClickButton=null,n.onClickButton=e.onClick,n.state={gunnerSelectedIndex:0,driverSelectedIndex:0,chargerSelectedIndex:0},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderButtons",value:function(e){var t=this,n=[];switch(e){case"gunner":for(var a=this.state.gunnerSelectedIndex,r=function(r){n.push(s.a.createElement(H,{index:r,class:e,selected:a===r,onClick:function(){return t.handleClick(r,e)}}))},i=0;i<L;i++)r(i);break;case"driver":var c=this.state.driverSelectedIndex,l=function(a){n.push(s.a.createElement(H,{index:a,class:e,selected:c===a,onClick:function(){return t.handleClick(a,e)}}))};for(i=0;i<J;i++)l(i);break;case"charger":var u=this.state.chargerSelectedIndex,o=function(a){n.push(s.a.createElement(H,{index:a,class:e,selected:u===a,onClick:function(){return t.handleClick(a,e)}}))};for(i=0;i<2;i++)o(i)}return n}},{key:"handleClick",value:function(e,t){this.onClickButton(e,t),this.setState({gunnerSelectedIndex:"gunner"===t?e:this.state.gunnerSelectedIndex,driverSelectedIndex:"driver"===t?e:this.state.driverSelectedIndex,chargerSelectedIndex:"charger"===t?e:this.state.chargerSelectedIndex})}},{key:"render",value:function(){return s.a.createElement("div",{className:"flex-row flex-align-start overflow"},s.a.createElement("div",{className:"flex-column"},s.a.createElement("div",{style:{height:20},className:"padding-5"},"\u041d\u0430\u0432\u043e\u0434\u0447\u0438\u043a"),s.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButtons("gunner"))),s.a.createElement("div",{className:"flex-column"},s.a.createElement("div",{style:{height:20},className:"padding-5"},"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),s.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButtons("driver"))),s.a.createElement("div",{className:"flex-column"},s.a.createElement("div",{style:{height:20},className:"padding-5"},"\u0417\u0430\u0440\u044f\u0436\u0430\u044e\u0449\u0438\u0439"),s.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButtons("charger"))))}}]),t}(u.Component);function H(e){return s.a.createElement("button",{className:e.class+(e.selected?" selected":"")+" margin-1",style:A(e.class,e.index),onClick:e.onClick})}function A(e,t){return[{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -150px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -150px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -150px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -200px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -200px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -200px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-150px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-200px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-150px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-200px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-150px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-200px -100px",left:0,height:50,width:50}][t+("driver"===e?L:0)+("charger"===e?L+J:0)]}var U=j,V=n(13),q=n.n(V),F=(n(41),n(42),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"snavigator"},"\u0422\u0430\u043d\u043a\u043e\u0432\u044b\u0439 \u042d\u043a\u0438\u043f\u0430\u0436"),s.a.createElement("div",{id:"gridMain"},s.a.createElement(C,null),s.a.createElement(U,null)))}}]),t}(u.Component));q.a.render(s.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4a1326eb.chunk.js.map