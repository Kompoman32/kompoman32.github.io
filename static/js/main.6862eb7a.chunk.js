(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),l=n(4),i=n(3),c=n(5),s=n(0),u=n.n(s),d=n(12),o=n.n(d),m=n(7),h=n.n(m),v=(n(30),n(31),n(32),n(33),function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{id:"snavigator"},"\u0422\u0430\u043d\u043a\u043e\u0432\u044b\u0439 \u042d\u043a\u0438\u043f\u0430\u0436"),u.a.createElement("div",{id:"gridMain"},u.a.createElement(p,null),u.a.createElement(x,null)))}}]),t}(s.Component)),p=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"map",className:"overflow-visible",style:{flex:2}},u.a.createElement("img",{src:"images/game/\u043a\u0430\u0440\u0442\u0430.png",alt:""}))}}]),t}(s.Component),x=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(f,null),u.a.createElement(k,null))}}]),t}(s.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"flex-row margin-5"},u.a.createElement("div",{className:"flex-column flex-justify-start widthAll"},u.a.createElement("div",{className:"flex-column"},u.a.createElement("span",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),u.a.createElement("div",null,u.a.createElement("input",{type:"range",id:"speedInput",onInput:"document.getElementById('speedVal').innerText = document.getElementById('speedInput').value"}),u.a.createElement("span",{id:"speedVal"},"50")),u.a.createElement(j,null)),u.a.createElement("div",{id:"moveBtnDiv",className:"flex-row"},u.a.createElement("div",{className:"flex-row"},u.a.createElement(g,{image:"images/menu/startbtn.svg",OnClick:function(){return alert("1")}}),u.a.createElement(g,{image:"images/menu/pausebtn.svg",OnClick:function(){return alert("2")}}),u.a.createElement(g,{image:"images/menu/stopbtn.svg",OnClick:function(){return alert("3")}}),u.a.createElement(g,{image:"images/menu/skipbtn.svg",OnClick:function(){return alert("4")}}),u.a.createElement(g,{image:"images/menu/nextstepbtn.svg",OnClick:function(){return alert("5")}})),u.a.createElement("div",{style:{width:50}}," "),u.a.createElement("div",{className:"flex-row"},u.a.createElement(g,{image:"images/menu/savebtn.svg",OnClick:function(){return alert("6")}}),u.a.createElement(g,{image:"images/menu/loadbtn.svg",OnClick:function(){return alert("7")}})),u.a.createElement(g,{image:"",OnClick:function(){return alert("8")}})),u.a.createElement("div",{style:{textAlign:"right"}},u.a.createElement("span",null,"\u0414\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u044b: "),u.a.createElement("span",null,"10")),u.a.createElement("div",{id:"saveBtnDiv"})),u.a.createElement("div",{className:"flex-column flex-justify-evenly"},u.a.createElement(E,null),u.a.createElement(O,null)))}}]),t}(s.Component);function g(e){return u.a.createElement("button",{onClick:e.OnClick},u.a.createElement("img",{src:e.image,alt:""}))}var E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={isOpen:!1},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("button",{id:"infoButton",className:"flex-row",onClick:function(){return e.setState({isOpen:!0})}},u.a.createElement("span",null,"INFO"),u.a.createElement("img",{src:"images/menu/infobtn.svg",alt:""})),u.a.createElement(o.a,{isOpen:this.state.isOpen,onRequestClose:function(){return e.setState({isOpen:!1})}},u.a.createElement(b,{onClick:function(){return e.setState({isOpen:!1})}})))}}]),t}(s.Component);function b(e){return u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return e.OnClick}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),"/*TODO*/")}var O=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"tankDiv"},u.a.createElement("img",{src:"images/game/tank.png",alt:""}))}}]),t}(s.Component),j=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"/*TODO*/")}}]),t}(s.Component),k=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"flex-row flex-align-start "},u.a.createElement("div",{id:"commandsDiv",className:"overflow overflow-y-visible margin-10"},u.a.createElement(C,null)),u.a.createElement("div",null,u.a.createElement(S,null)))}}]),t}(s.Component),C=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={rows:[u.a.createElement(y,{index:1,onClick:function(){return n.handleClick()}})]},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){var e=this,t=this.state.rows.slice();this.setState({rows:t.concat([u.a.createElement(y,{index:t.length+1,onClick:function(){return e.handleClick()}})])})}},{key:"render",value:function(){return u.a.createElement("table",{id:"commands"},u.a.createElement("tr",null,u.a.createElement("th",null,"#"),u.a.createElement("th",null,"\u041d\u0430\u0432\u043e\u0434\u0447\u0438\u043a"),u.a.createElement("th",null,"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),u.a.createElement("th",null,"\u0417\u0430\u0440\u044f\u0436\u0430\u044e\u0449\u0438\u0439")),this.state.rows)}}]),t}(s.Component),y=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={index:e.index,onClick:e.onClick},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("tr",null,u.a.createElement("td",{style:{width:20}},u.a.createElement("button",{onClick:function(){return e.state.onClick()}},this.state.index," ")),u.a.createElement(I,null),u.a.createElement(I,null),u.a.createElement(I,null))}}]),t}(s.Component),I=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={value:null},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("td",{className:"gameTD"},this.state.value)}}]),t}(s.Component),S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={gunnerSelectedIndex:0,driverSelectedIndex:0,chargerSelectedIndex:0},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderButton",value:function(e,t,n,a){var r=this;return u.a.createElement(w,{index:n,class:e,selected:t,onClick:function(){return r.handleClick(n,e)},position:a})}},{key:"handleClick",value:function(e,t){this.setState({gunnerSelectedIndex:"gunner"===t?e:this.state.gunnerSelectedIndex,driverSelectedIndex:"driver"===t?e:this.state.driverSelectedIndex,chargerSelectedIndex:"charger"===t?e:this.state.chargerSelectedIndex})}},{key:"render",value:function(){return u.a.createElement("div",{className:"flex-row flex-align-start overflow"},u.a.createElement("div",{className:"flex-column"},u.a.createElement("div",{style:{height:20},className:"padding-5"},"\u041d\u0430\u0432\u043e\u0434\u0447\u0438\u043a"),u.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButton("gunner",0===this.state.gunnerSelectedIndex,0,"0px -150px"),this.renderButton("gunner",1===this.state.gunnerSelectedIndex,1,"-50px 0px"),this.renderButton("gunner",2===this.state.gunnerSelectedIndex,2,"-100px 0px"),this.renderButton("gunner",3===this.state.gunnerSelectedIndex,3,"0px -50px"),this.renderButton("gunner",4===this.state.gunnerSelectedIndex,4,"-50px -50px"),this.renderButton("gunner",5===this.state.gunnerSelectedIndex,5,"-100px -50px"),this.renderButton("gunner",6===this.state.gunnerSelectedIndex,6,"0px -100px"),this.renderButton("gunner",7===this.state.gunnerSelectedIndex,7,"-100px -100px"))),u.a.createElement("div",{className:"flex-column"},u.a.createElement("div",{style:{height:20},className:"padding-5"},"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),u.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButton("driver",0===this.state.driverSelectedIndex,0,"0px 0px"),this.renderButton("driver",1===this.state.driverSelectedIndex,1,"-50px -150px"),this.renderButton("driver",2===this.state.driverSelectedIndex,2,"-100px -150px"),this.renderButton("driver",3===this.state.driverSelectedIndex,3,"0px -200px"),this.renderButton("driver",4===this.state.driverSelectedIndex,4,"-50px -200px"),this.renderButton("driver",5===this.state.driverSelectedIndex,5,"-100px -200px"),this.renderButton("driver",6===this.state.driverSelectedIndex,6,"-50px -100px"),this.renderButton("driver",7===this.state.driverSelectedIndex,7,"-150px 0px"),this.renderButton("driver",8===this.state.driverSelectedIndex,8,"-150px 0px"),this.renderButton("driver",9===this.state.driverSelectedIndex,9,"-150px 0px"),this.renderButton("driver",10===this.state.driverSelectedIndex,10,"-150px 0px"))),u.a.createElement("div",{className:"flex-column"},u.a.createElement("div",{style:{height:20},className:"padding-5"},"\u0417\u0430\u0440\u044f\u0436\u0430\u044e\u0449\u0438\u0439"),u.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButton("charger",0===this.state.chargerSelectedIndex,0,"-150px -100px"),this.renderButton("charger",1===this.state.chargerSelectedIndex,1,"-200px -100px"))))}}]),t}(s.Component);function w(e){return u.a.createElement("button",{className:e.class+(e.selected?" selected":"")+" margin-1",style:{backgroundImage:"url('images/game/actionbtns.svg')",backgroundPosition:e.position,left:0,height:50,width:50},onClick:e.onClick})}h.a.render(u.a.createElement(v,null),document.getElementById("root"))},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/\u043a\u0430\u0440\u0442\u0430.a649f862.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.6862eb7a.chunk.js.map