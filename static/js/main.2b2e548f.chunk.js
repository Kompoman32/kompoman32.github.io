(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){e.exports=n(44)},42:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/\u043a\u0430\u0440\u0442\u0430.a649f862.png"},44:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),i=n(5),c=n(4),l=n(6),o=n(0),u=n.n(o),s=n(22),m=n.n(s),g=n(9),d=n(1),p=n(7),h=n(24),b={CHANGE_SELECTED_BUTTON:"CHANGE_SELECTED_BUTTON",ADD_PICTURE_IN_TD:"ADD_PICTURE_IN_TD",REMOVE_PICTURE_IN_TD:"REMOVE_PICTURE_IN_TD"},v={REDUCE_HP:"REDUCE_HP",LOAD_MAP:"LOAD_MAP",ZOOM:"ZOOM"},f=v,k=b,E=function(e,t){return{type:b.CHANGE_SELECTED_BUTTON,payload:{index:e,className:t}}},x=function(e,t){return{type:b.ADD_PICTURE_IN_TD,payload:{className:e,indexRow:t}}},O=function(e,t){return{type:b.REMOVE_PICTURE_IN_TD,payload:{className:e,indexRow:t}}},y=function(e,t){return{type:v.REDUCE_HP,payload:{i:e,j:t}}};function w(e){switch(e){case"North":return 0;case"East":return 900;case"South":return 180;case"West":return-90;case"NorthWest":return-45;case"NorthEast":return 45;case"SouthWest":return-135;case"SouthEast":return 135}return 0}var j=function(e){var t=null;try{if(window.DOMParser)t=(new DOMParser).parseFromString(e,"text/xml");else(t=new ActiveXObject("Microsoft.XMLDOM")).async=!1,t.loadXML(e);for(var n=t.getElementsByTagName("World")[0],a=Number(n.getAttribute("Width")),r=Number(n.getAttribute("Height")),i=Number(n.getAttribute("ShellDistance")),c=n.getElementsByTagName("Tank")[0],l={X:Number(c.getAttribute("X")),Y:Number(c.getAttribute("Y")),TankDirection:w(c.getElementsByTagName("TankDirection")[0].innerHTML),TurretDirection:w(c.getElementsByTagName("TurretDirection")[0].innerHTML),TurretStatus:w(c.getElementsByTagName("TurretStatus")[0].innerHTML)},o=n.getElementsByTagName("Units")[0].children,u=[],s=0;s<r;s++){for(var m=[],g=0;g<a;g++)m.push([]);u.push(m)}for(var d=0;d<o.length;d++){var p=Number(o[d].getAttribute("X")),h=Number(o[d].getAttribute("Y")),b=o[d].getAttribute("XShift");b&&(b=Number(o[d].getAttribute("XShift")));var f=o[d].getAttribute("YShift");f&&(f=Number(o[d].getAttribute("YShift")));var k=_.empty;switch(o[d].tagName){case"Swamp":k=_.swamp;break;case"Rock":k=_.mountains;break;case"LittleRock":k=_.littleMountains;break;case"LittleSwamp":k=_.littleSwamp;break;case"LittlePillbox":k=_._1hp;break;case"MediumPillbox":k=_._2hp;break;case"BigPillbox":k=_._3hp}u[h][p].push({XShift:b,YShift:f,tile:k})}return{type:v.LOAD_MAP,payload:{shellDistance:i,tank:l,mapWidth:a,mapHeight:r,map:u}}}catch(E){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0444\u0430\u0439\u043b \u043a\u0430\u0440\u0442\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d")}return{type:""}},S=function(e){return{type:v.ZOOM,payload:e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.CHANGE_SELECTED_BUTTON:var n=t.payload,a=n.index,r=n.className;return"gunner"===r?Object(d.a)({},e,{gunnerSelectedIndex:a}):"driver"===r?Object(d.a)({},e,{driverSelectedIndex:a}):"charger"===r?Object(d.a)({},e,{chargerSelectedIndex:a}):e;case b.ADD_PICTURE_IN_TD:var i=e.rows.slice(),c=t.payload,l=c.indexRow,o=c.className;for(i[l]={gunner:"gunner"===o?ee("gunner",e.gunnerSelectedIndex):i[l].gunner,driver:"driver"===o?ee("driver",e.driverSelectedIndex):i[l].driver,charger:"charger"===o?ee("charger",e.chargerSelectedIndex):i[l].charger};null!=i[i.length-1].gunner||null!=i[i.length-1].driver||null!=i[i.length-1].charger;)i.push({gunner:null,driver:null,charger:null});return Object(d.a)({},e,{rows:i});case b.REMOVE_PICTURE_IN_TD:var u=Object(h.a)(e.rows),s=t.payload,m=s.indexRow,g=s.className;for(console.log(e),console.log(u.length),console.log(JSON.stringify(u)),u[m]={gunner:"gunner"===g?null:u[m].gunner,driver:"driver"===g?null:u[m].driver,charger:"charger"===g?null:u[m].charger},console.log(u);u.length>0&&null==u[u.length-1].gunner&&null==u[u.length-1].driver&&null==u[u.length-1].charger;)u.pop();return u.push({gunner:null,driver:null,charger:null}),Object(d.a)({},e,{rows:u})}return e},T=function(e){return{gunnerSelectedIndex:e.codeState.gunnerSelectedIndex,driverSelectedIndex:e.codeState.driverSelectedIndex,chargerSelectedIndex:e.codeState.chargerSelectedIndex,rows:e.codeState.rows}},N=function(e){return{changeSelectedButton:Object(p.a)(E,e),addPictureInTD:Object(p.a)(x,e),removePictureInTD:Object(p.a)(O,e)}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.REDUCE_HP:var n=e.map.slice(),a=t.payload,r=a.i,i=a.j;switch(console.log("".concat(r," ").concat(i)),n[r][i].tag){case _._3hp:return n[r][i]=D(_._2hp),Object(d.a)({},e,{map:n});case _._2hp:return n[r][i]=D(_._1hp),Object(d.a)({},e,{map:n});case _._1hp:return n[r][i]=D(_.empty),Object(d.a)({},e,{map:n})}return e;case v.LOAD_MAP:return Object(d.a)({},e,t.payload);case v.ZOOM:var c=e.tileSize;return(c+=t.payload)<10&&(c=10),c>260&&(c=260),Object(d.a)({},e,{tileSize:c})}return e},_={mountains:"mountains",littleMountains:"littleMountains",littleSwamp:"littleSwamp",swamp:"swamp",tankBody:"tankBody",tankHead:"tankHead",_3hp:"3hp",_2hp:"2hp",_1hp:"1hp",empty:"empty"},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(R+""==="undefined")return{};var n=R.getState().mapState.tileSize||60,a={};switch(e){case _.mountains:case _.littleMountains:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-".concat(n,"px 0px"),height:n,width:n};break;case _.swamp:case _.littleSwamp:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-".concat(2*n,"px 0px"),height:n,width:n};break;case _.tankBody:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-".concat(3*n,"px 0px"),height:n,width:n};break;case _.tankHead:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-".concat(4*n,"px 0px"),height:n,width:n};break;case _._3hp:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"0px -".concat(n,"px"),height:n,width:n};break;case _._2hp:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-".concat(n,"px -").concat(n,"px"),height:n,width:n};break;case _._1hp:a={tag:e,backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"-".concat(2*n,"px -").concat(n,"px"),height:n,width:n};break;default:a={tag:"empty",backgroundImage:"url('../images/game/gametiles.svg')",backgroundPosition:"0px 0px",height:n,width:n}}if(t){var r=a.backgroundPosition.split(" "),i=Number(r[0].slice(0,r[0].length-2))/3,c=Number(r[1].slice(0,r[1].length-2))/3;a=Object(d.a)({},a,{backgroundPosition:"".concat(Math.floor(i),"px ").concat(Math.floor(c),"px"),backgroundSize:"".concat(5*n/3+2,"px ").concat(5*n/3+2,"px"),height:a.height/3,width:a.width/3,border:"none"})}else a=Object(d.a)({},a,{backgroundSize:"".concat(5*n,"px ").concat(5*n,"px")});return a},P={gunnerSelectedIndex:0,driverSelectedIndex:0,chargerSelectedIndex:0,rows:[{gunner:null,driver:null,charger:null}]},M={tileSize:60,map:[[D(_.empty),D(_.mountains),D(_.mountains),D(_.empty),D(_.tank)],[D(_._1hp),D(_.empty),D(_.mountains),D(_.empty),D(_.empty)],[D(_._3hp),D(_.empty),D(_.swamp),D(_.empty),D(_.empty)],[D(_.empty),D(_.mountains),D(_.empty),D(_.empty),D(_.empty)],[D(_.empty),D(_.mountains),D(_.empty),D(_._2hp),D(_.empty)]]},B={codeState:P,mapState:M},R=Object(p.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return f["".concat(t.type)]+""!=="undefined"?Object(d.a)({},e,{mapState:I(e.mapState,t)}):k["".concat(t.type)]+""!=="undefined"?Object(d.a)({},e,{codeState:C(e.codeState,t)}):e},B),A=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(L,null),u.a.createElement(W,null))}}]),t}(o.Component),L=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"flex-row margin-5"},u.a.createElement("div",{className:"flex-column flex-justify-start widthAll"},u.a.createElement("div",{className:"flex-column"},u.a.createElement("span",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),u.a.createElement("div",null),u.a.createElement(Y,null)),u.a.createElement("div",{id:"moveBtnDiv",className:"flex-row"},u.a.createElement("div",{className:"flex-row"},u.a.createElement(H,{image:"images/menu/startbtn.svg",OnClick:function(){return alert("1")}}),u.a.createElement(H,{image:"images/menu/pausebtn.svg",OnClick:function(){return alert("2")}}),u.a.createElement(H,{image:"images/menu/stopbtn.svg",OnClick:function(){return alert("3")}}),u.a.createElement(H,{image:"images/menu/skipbtn.svg",OnClick:function(){return alert("4")}}),u.a.createElement(H,{image:"images/menu/nextstepbtn.svg",OnClick:function(){return alert("5")}})),u.a.createElement("div",{style:{width:50}}," "),u.a.createElement("div",{className:"flex-row"},u.a.createElement(H,{image:"images/menu/savebtn.svg",OnClick:function(){return alert("6")}}),u.a.createElement(H,{image:"images/menu/loadbtn.svg",OnClick:function(){return alert("7")}})),u.a.createElement(H,{image:"",OnClick:function(){return alert("8")}})),u.a.createElement("div",{style:{textAlign:"right"}},u.a.createElement("span",null,"\u0414\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u044b: "),u.a.createElement("span",null,"10")),u.a.createElement("div",{id:"saveBtnDiv"})),u.a.createElement("div",{className:"flex-column flex-justify-evenly"},u.a.createElement(z,null),u.a.createElement(X,null)))}}]),t}(o.Component);function H(e){return u.a.createElement("button",{onClick:e.OnClick},u.a.createElement("img",{src:e.image,alt:""}))}var z=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={isOpen:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("button",{id:"infoButton",className:"flex-row",onClick:function(){return e.setState({isOpen:!0})}},u.a.createElement("span",null,"INFO"),u.a.createElement("img",{src:"../images/menu/infobtn.svg",alt:""})),u.a.createElement(m.a,{isOpen:this.state.isOpen,onRequestClose:function(){return e.setState({isOpen:!1})}},u.a.createElement(U,{onClick:function(){return e.setState({isOpen:!1})}})))}}]),t}(o.Component);function U(e){return u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return e.OnClick}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),"/*TODO*/")}var X=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"tankDiv"},u.a.createElement("img",{src:"../images/game/tank.png",alt:""}))}}]),t}(o.Component),Y=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"/*TODO*/")}}]),t}(o.Component),W=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"flex-row flex-align-start "},u.a.createElement("div",{id:"commandsDiv",className:"overflow overflow-y-visible margin-10"},u.a.createElement(g.a,{store:R},u.a.createElement(V,null))),u.a.createElement("div",null,u.a.createElement(g.a,{store:R},u.a.createElement(Q,null))))}}]),t}(o.Component),G=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderRows",value:function(){for(var e=this,t=[],n=this.props.rows,a=function(a){t.push(u.a.createElement(Z,{index:a,value:n[a],onClickTD_LMB:function(t){return e.props.addPictureInTD(t,a)},onClickTD_RMB:function(t){return e.props.removePictureInTD(t,a)}}))},r=0;r<n.length;r++)a(r);return t}},{key:"render",value:function(){return console.log("11"),u.a.createElement("table",{id:"commands"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"#"),u.a.createElement("th",null,"\u041d\u0430\u0432\u043e\u0434\u0447\u0438\u043a"),u.a.createElement("th",null,"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),u.a.createElement("th",null,"\u0417\u0430\u0440\u044f\u0436\u0430\u044e\u0449\u0438\u0439")),this.renderRows()))}}]),t}(o.Component),V=Object(g.b)(T,N)(G),Z=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("tr",null,u.a.createElement("td",{style:{width:20}},this.props.index+1),u.a.createElement(F,{value:this.props.value.gunner,onClickTD_LMB:function(){return e.props.onClickTD_LMB("gunner")},onClickTD_RMB:function(){return e.props.onClickTD_RMB("gunner")}}),u.a.createElement(F,{value:this.props.value.driver,onClickTD_LMB:function(){return e.props.onClickTD_LMB("driver")},onClickTD_RMB:function(){return e.props.onClickTD_RMB("driver")}}),u.a.createElement(F,{value:this.props.value.charger,onClickTD_LMB:function(){return e.props.onClickTD_LMB("charger")},onClickTD_RMB:function(){return e.props.onClickTD_RMB("charger")}}))}}]),t}(o.Component);function F(e){return u.a.createElement("td",{className:"gameTD",onClick:function(){return e.onClickTD_LMB()},onContextMenu:function(t){t.preventDefault(),e.onClickTD_RMB()}},u.a.createElement("div",{style:e.value}))}var J=8,q=11,K=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderButtons",value:function(e){var t=[],n=this.props,a=n.gunnerSelectedIndex,r=n.driverSelectedIndex,i=n.chargerSelectedIndex,c=n.changeSelectedButton;switch(e){case"gunner":for(var l=function(n){t.push(u.a.createElement($,{key:"".concat(e," - ").concat(n),index:n,class:e,selected:a===n,onClick:function(){return c(n,e)}}))},o=0;o<J;o++)l(o);break;case"driver":var s=function(n){t.push(u.a.createElement($,{key:"".concat(e," - ").concat(n),index:n,class:e,selected:r===n,onClick:function(){return c(n,e)}}))};for(o=0;o<q;o++)s(o);break;case"charger":var m=function(n){t.push(u.a.createElement($,{key:"".concat(e," - ").concat(n),index:n,class:e,selected:i===n,onClick:function(){return c(n,e)}}))};for(o=0;o<2;o++)m(o)}return t}},{key:"render",value:function(){return u.a.createElement("div",{className:"flex-row flex-align-start overflow"},u.a.createElement("div",{className:"flex-column"},u.a.createElement("div",{style:{height:20},className:"padding-5"},"\u041d\u0430\u0432\u043e\u0434\u0447\u0438\u043a"),u.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButtons("gunner"))),u.a.createElement("div",{className:"flex-column"},u.a.createElement("div",{style:{height:20},className:"padding-5"},"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),u.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButtons("driver"))),u.a.createElement("div",{className:"flex-column"},u.a.createElement("div",{style:{height:20},className:"padding-5"},"\u0417\u0430\u0440\u044f\u0436\u0430\u044e\u0449\u0438\u0439"),u.a.createElement("div",{className:"gameButtonsColumn flex-row flex-wrap"},this.renderButtons("charger"))))}}]),t}(o.Component),Q=Object(g.b)(T,N)(K);function $(e){return u.a.createElement("button",{className:e.class+(e.selected?" selected":"")+" margin-1",style:ee(e.class,e.index),onClick:e.onClick})}function ee(e,t){return[{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -150px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -150px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -150px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"0px -200px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -200px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-100px -200px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-50px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-150px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-200px 0px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-150px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-200px -50px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-150px -100px",left:0,height:50,width:50},{backgroundImage:"url('../images/game/actionbtns.svg')",backgroundPosition:"-200px -100px",left:0,height:50,width:50}][t+("driver"===e?J:0)+("charger"===e?J+q:0)]}var te=A,ne=(n(21),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(g.a,{store:R},u.a.createElement(ie,null)))}}]),t}(o.Component)),ae=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderTable",value:function(){for(var e=this.props.tileSize||60,t=this.props,n=t.map,a=t.mapWidth,r=t.mapHeight,i=(t.reduceHP,[]),c=0;c<r;c++){for(var l=[],o=0;o<a;o++){if(console.log(n[c][o]),n[c][o].length>0&&(n[c][o][0].tile===_.littleMountains||n[c][o][0].tile===_.littleSwamp)&&null!==n[c][o][0].XShift&&null!==n[c][o][0].YShift){for(var s=[[null,null,null],[null,null,null],[null,null,null]],m=0;m<n[c][o].length;m++)s[n[c][o][m].YShift+1][n[c][o][m].XShift+1]=u.a.createElement(re,{key:"tile ".concat(c," - ").concat(o,": ").concat(n[c][o][m].YShift+1," - ").concat(n[c][o][m].XShift+1),value:D(n[c][o][m].tile,!0)});for(var g=0;g<9;g++)s[Math.floor(g/3)][g%3]||(s[Math.floor(g/3)][g%3]=u.a.createElement(re,{key:"tile ".concat(c," - ").concat(o,": ").concat(Math.floor(g/3)," - ").concat(g%3),value:D(_.empty,!0)}));for(var d=[],p=0;p<3;p++){for(var h=[],b=0;b<3;b++)h.push(s[p][b]);d.push(u.a.createElement("div",{className:"flex-row"},h))}l.push(u.a.createElement("div",{key:"div ".concat(c," - ").concat(o),className:"mapTile flex-column",style:{height:e,width:e}},d))}else for(var v=0;v<n[c][o].length;v++)l.push(u.a.createElement(re,{key:"tile ".concat(c," - ").concat(o),value:D(n[c][o][v].tile)}));if(0===n[c][o].length){var f=D(_.empty);l.push(u.a.createElement(re,{key:"tile ".concat(c," - ").concat(o),value:f}))}}i.push(u.a.createElement("div",{className:"flex-row"},l))}return u.a.createElement("div",{className:"flex-column flex-align-start",style:{position:"relative"}},this.loadTank(),i)}},{key:"loadTank",value:function(){var e=this.props.tileSize||60,t=this.props.tank;if(!t)return null;var n=Object(d.a)({},D(_.tankBody),{position:"absolute",zIndex:9998,left:t.X*(e+2),top:t.Y*(e+2),transform:"rotate(".concat(t.TankDirection,"deg)")}),a=Object(d.a)({},D(_.tankHead),{position:"absolute",zIndex:9999,left:t.X*(e+2),top:t.Y*(e+2),transform:"rotate(".concat(t.TurretDirection,"deg)")});return[u.a.createElement("div",{style:n}),u.a.createElement("div",{style:a})]}},{key:"fileLoad",value:function(e){var t=e.target.files,n=new FileReader,a=this.props.loadMap;n.onload=function(e){a(e.target.result)},n.readAsText(t[0].slice())}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{id:"mapCont",className:"overflow-visible"},u.a.createElement("div",{style:{positon:"sticky",top:0}},u.a.createElement("div",{className:"flex-row"},u.a.createElement("input",{type:"file",onChange:function(t){return e.fileLoad(t)}}),u.a.createElement("button",{style:{width:20},onClick:function(){return e.props.zoom(50)}},"+"),u.a.createElement("button",{style:{width:20},onClick:function(){return e.props.zoom(-50)}},"-"),u.a.createElement("div",null,this.props.tileSize))),this.renderTable())}}]),t}(o.Component);function re(e){var t={backgroundImage:e.value.backgroundImage,backgroundPosition:e.value.backgroundPosition,border:e.value.border,height:e.value.height,width:e.value.width,backgroundSize:e.value.backgroundSize};return u.a.createElement("div",{className:"mapTile",style:t,onClickCapture:function(){return e.onClick()}})}var ie=Object(g.b)(function(e){return{shellDistance:e.mapState.shellDistance,tank:e.mapState.tank,mapWidth:e.mapState.mapWidth,mapHeight:e.mapState.mapHeight,map:e.mapState.map,tileSize:e.mapState.tileSize}},function(e){return{reduceHP:Object(p.a)(y,e),loadMap:Object(p.a)(j,e),zoom:Object(p.a)(S,e)}})(ae),ce=ne,le=n(13),oe=n.n(le),ue=(n(42),n(43),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{id:"snavigator"},"\u0422\u0430\u043d\u043a\u043e\u0432\u044b\u0439 \u042d\u043a\u0438\u043f\u0430\u0436"),u.a.createElement("div",{id:"gridMain"},u.a.createElement(ce,null),u.a.createElement(te,null)))}}]),t}(o.Component));oe.a.render(u.a.createElement(ue,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2b2e548f.chunk.js.map