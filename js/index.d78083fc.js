(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={index:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"42b1":function(e,t,n){"use strict";var r=n("f381"),i=n.n(r);i.a},"4ef0":function(e,t,n){},"93d2":function(e,t,n){},c034:function(e,t){
/*!
 * ====================================================
 * kityminder-editor - v1.0.67 - 2020-03-04
 * https://github.com/fex-team/kityminder-editor
 * GitHub: https://github.com/fex-team/kityminder-editor 
 * Copyright (c) 2020 ; Licensed 
 * ====================================================
 */
(function(){var e={r:function(t){if(e[t].inited)return e[t].value;if("function"!==typeof e[t].value)return e[t].inited=!0,e[t].value;var n={exports:{}},r=e[t].value(null,n.exports,n);if(e[t].inited=!0,e[t].value=r,void 0!==r)return r;for(var i in n.exports)if(n.exports.hasOwnProperty(i))return e[t].inited=!0,e[t].value=n.exports,n.exports}};e[0]={value:function(t,n,r){var i=[];function o(e){i.push(e)}function a(e){this.selector=e;for(var t=0;t<i.length;t++)"function"==typeof i[t]&&i[t].call(this,this)}return a.assemble=o,o(e.r(7)),o(e.r(9)),o(e.r(14)),o(e.r(18)),o(e.r(11)),o(e.r(12)),o(e.r(5)),o(e.r(6)),o(e.r(8)),o(e.r(15)),o(e.r(10)),o(e.r(13)),o(e.r(16)),o(e.r(17)),r.exports=a}},e[1]={value:function(t,n,r){return r.exports=kityminder.Editor=e.r(0)}},e[2]={value:function(e,t,n){return n.exports=window.HotBox}},e[3]={value:function(e,t,n){}},e[4]={value:function(e,t,n){return n.exports=window.kityminder.Minder}},e[5]={value:function(e,t,n){function r(){var e="\ufeff",t={"application/km":"￿"},n={"\ufeff":"SPLITOR","￿":"application/km"};function r(t,n){if(!this.isPureText(n)){var r=this.whichMimeType(n);if(!r)throw new Error("unknow mimetype!");n=this.getPureText(n)}return!1===t?n:t+e+n}this.registMimeTypeProtocol=function(e,r){if(r&&n[r])throw new Error("sing has registed!");if(e&&t[e])throw new Error("mimetype has registed!");n[r]=e,t[e]=r},this.getMimeTypeProtocol=function(e,n){var i=t[e]||!1;return void 0===n?r.bind(this,i):r(i,n)},this.getSpitor=function(){return e},this.getMimeType=function(e){return void 0!==e?n[e]||null:t}}function i(){this.minder.supportClipboardEvent&&!kity.Browser.gecko&&(this.MimeType=new r)}return r.prototype.isPureText=function(e){return!~e.indexOf(this.getSpitor())},r.prototype.getPureText=function(e){return this.isPureText(e)?e:e.split(this.getSpitor())[1]},r.prototype.whichMimeType=function(e){return this.isPureText(e)?null:this.getMimeType(e.split(this.getSpitor())[0])},n.exports=i}},e[6]={value:function(e,t,n){function r(){var e=this.minder,t=window.kityminder.data;if(e.supportClipboardEvent&&!kity.Browser.gecko){var n=this.fsm,r=this.receiver,i=this.MimeType,o=i.getMimeTypeProtocol("application/km"),a=t.getRegisterProtocol("json").decode,c=[],l=function(t){if(document.activeElement==r.element){var i=t,o=n.state();switch(o){case"input":break;case"normal":var a=[].concat(e.getSelectedNodes());if(a.length){var c;if(a.length>1)if(a.sort((function(e,t){return e.getLevel()-t.getLevel()})),c=a[0].getLevel(),c!==a[a.length-1].getLevel()){var l,s=0,u=a.length,f=u-1;l=a[f];while(l.getLevel()!==c){s=0;while(s<u&&a[s].getLevel()===c){if(a[s].isAncestorOf(l)){a.splice(f,1);break}s++}f--,l=a[f]}}var p=d(a);i.clipboardData.setData("text/plain",p)}t.preventDefault();break}}},s=function(t){if(document.activeElement==r.element){if("normal"!==e.getStatus())return void t.preventDefault();var i=t,o=n.state();switch(o){case"input":break;case"normal":var a=e.getSelectedNodes();a.length&&(i.clipboardData.setData("text/plain",d(a)),e.execCommand("removenode")),t.preventDefault();break}}},u=function(t){if(document.activeElement==r.element){if("normal"!==e.getStatus())return void t.preventDefault();var o=t,l=n.state(),s=o.clipboardData.getData("text/plain");switch(l){case"input":if(!i.isPureText(s))return void t.preventDefault();break;case"normal":var u=e.getSelectedNodes();if("application/km"===i.whichMimeType(s)){var d,f=a(i.getPureText(s));u.forEach((function(t){for(var n=f.length-1;n>=0;n--)d=e.createNode(null,t),e.importNode(d,f[n]),c.push(d),t.appendChild(d)})),e.select(c,!0),c=[],e.refresh()}else{if(o.clipboardData&&o.clipboardData.items[0].type.indexOf("image")>-1){var p=o.clipboardData.items[0].getAsFile(),h=angular.element(document.body).injector().get("server");return h.uploadImage(p).then((function(t){var n=t.data;0===n.errno&&e.execCommand("image",n.data.url)}))}u.forEach((function(t){e.Text2Children(t,s)}))}t.preventDefault();break}}};document.addEventListener("copy",l),document.addEventListener("cut",s),document.addEventListener("paste",u)}function d(n){for(var r=[],i=0,a=n.length;i<a;i++)r.push(e.exportNode(n[i]));return o(t.getRegisterProtocol("json").encode(r))}}return n.exports=r}},e[7]={value:function(e,t,n){function r(){var e;if(e="string"==typeof this.selector?document.querySelector(this.selector):this.selector,!e)throw new Error("Invalid selector: "+this.selector);e.classList.add("km-editor"),this.container=e}return n.exports=r}},e[8]={value:function(t,n,r){var i=e.r(2),o=e.r(19);new o("drag");function a(){var e,t,n=this.fsm,r=this.minder,o=this.hotbox,a=this.receiver;a.element;function c(){n.when("* -> drag",(function(){})),n.when("drag -> *",(function(e,t,n){}))}c();var l,s,u,d,f,p,h=0,m=1,v=20,g=m,b=!1,y=!1;function x(e,t){if(!e)return b=y=!1,p&&kity.releaseFrame(p),void(p=null);p||(p=kity.requestFrame(function(e,t,n){return function(r){switch(e){case"left":n._viewDragger.move({x:-t,y:0},0);break;case"top":n._viewDragger.move({x:0,y:-t},0);break;case"right":n._viewDragger.move({x:t,y:0},0);break;case"bottom":n._viewDragger.move({x:0,y:t},0);break;default:return}r.next()}}(e,t,r)))}r.on("mousedown",(function(n){g=h;var i=r.getPaper().container.getBoundingClientRect();e=n.originEvent.clientX,t=n.originEvent.clientY,f=i.top,l=i.width,s=i.height})),r.on("mousemove",(function(a){if("drag"===n.state()&&g==h&&r.getSelectedNode()&&(Math.abs(e-a.originEvent.clientX)>v||Math.abs(t-a.originEvent.clientY)>v)&&(u=a.originEvent.clientX,d=a.originEvent.clientY-f,u<v?x("right",v-u):u>l-v?x("left",v+u-l):b=!0,d<v?x("bottom",d):d>s-v?x("top",v+d-s):y=!0,b&&y&&x(!1)),"drag"!==n.state()&&g===h&&r.getSelectedNode()&&(Math.abs(e-a.originEvent.clientX)>v||Math.abs(t-a.originEvent.clientY)>v))return"hotbox"===n.state()&&o.active(i.STATE_IDLE),n.jump("drag","user-drag")})),window.addEventListener("mouseup",(function(){if(g=m,"drag"===n.state())return x(!1),n.jump("normal","drag-finish")}),!1)}return r.exports=a}},e[9]={value:function(t,n,r){var i=e.r(19),o=new i("fsm");function a(e,t,n,r){return e.when==t&&(("*"==e.enter||e.enter==r)&&("*"==e.exit||e.exit==n||void 0))}function c(e){var t=e,n=" - ",r=" -> ",i=[];this.jump=function(e,n){if(!n)throw new Error("Please tell fsm the reason to jump");var r,c,l=t,s=[l,e].concat([].slice.call(arguments,1));for(r=0;r<i.length;r++)if(c=i[r],a(c.condition,"before",l,e)&&c.apply(null,s))return;for(t=e,o.log("[{0}] {1} -> {2}",n,l,e),r=0;r<i.length;r++)c=i[r],a(c.condition,"after",l,e)&&c.apply(null,s);return t},this.state=function(){return t},this.when=function(e,t){var o,a,c,l;if(1==arguments.length&&(t=e,e="* -> *"),a=e.split(n),2==a.length?o="before":(a=e.split(r),2==a.length&&(o="after")),!o)throw new Error("Illegal fsm condition: "+e);c=a[0],l=a[1],t.condition={when:o,exit:c,enter:l},i.push(t)}}function l(){this.fsm=new c("normal")}return r.exports=l}},e[10]={value:function(t,n,r){var i=e.r(22);function o(){var e,t,n,r,o=this.minder,a=this.hotbox,c=100;function l(){n=[],r=[],e=o.exportJson()}function s(){var t=o.exportJson(),r=i(t,e);if(r.length){n.push(r);while(n.length>c)n.shift();return e=t,!0}}function u(){var t=o.exportJson();r.push(i(t,e)),e=t}function d(){t=!0;var e=n.pop();e&&(o.applyPatches(e),u()),t=!1}function f(){t=!0;var e=r.pop();e&&(o.applyPatches(e),s()),t=!1}function p(){t||s()&&(r=[])}function h(){return!!n.length}function m(){return!!r.length}function v(e){if(t){var n=e.patch;switch(n.express){case"node.add":o.select(n.node.getChild(n.index),!0);break;case"node.remove":case"data.replace":case"data.remove":case"data.add":o.select(n.node,!0);break}}}this.history={reset:l,undo:d,redo:f,hasUndo:h,hasRedo:m},l(),o.on("contentchange",p),o.on("import",l),o.on("patch",v);var g=a.state("main");g.button({position:"top",label:"撤销",key:"Ctrl + Z",enable:h,action:d,next:"idle"}),g.button({position:"top",label:"重做",key:"Ctrl + Y",enable:m,action:f,next:"idle"})}return window.diff=i,r.exports=o}},e[11]={value:function(t,n,r){var i=e.r(2);function o(){var e=this.fsm,t=this.minder,n=this.receiver,r=this.container,o=new i(r);o.setParentFSM(e),e.when("normal -> hotbox",(function(e,n,r){var i,a=t.getSelectedNode();if(a){var c=a.getRenderBox();i={x:c.cx,y:c.cy}}o.active("main",i)})),e.when("normal -> normal",(function(e,n,r,i){if("shortcut-handle"==r){var a=o.dispatch(i);a?i.preventDefault():t.dispatchKeyEvent(i)}})),e.when("modal -> normal",(function(e,t,r,i){"import-text-finish"==r&&n.element.focus()})),this.hotbox=o}return r.exports=o}},e[12]={value:function(t,n,r){e.r(21);var i=e.r(19),o=new i("input");function a(){var e=this.fsm,t=this.minder,n=this.hotbox,r=this.receiver,i=r.element,a=window.kity.Browser.gecko;function c(){e.when("* -> input",d),e.when("input -> *",(function(e,t,n){switch(n){case"input-cancel":return m();case"input-commit":default:return h()}})),r.onblur((function(t){"input"==e.state()&&e.jump("normal","input-commit")})),t.on("beforemousedown",(function(){"input"==e.state()&&e.jump("normal","input-commit")})),t.on("dblclick",(function(){t.getSelectedNode()&&"readonly"!==t._status&&u()}))}function l(){o.flaged&&i.classList.add("debug"),i.onmousedown=function(e){e.stopPropagation()},t.on("layoutallfinish viewchange viewchanged selectionchange",(function(t){"viewchange"==t.type&&"input"!=e.state()||v()})),v()}function s(){n.state("main").button({position:"center",label:"编辑",key:"F2",enable:function(){return-1!=t.queryCommandState("text")},action:u})}function u(){var n=t.getSelectedNode();if(n){var o=i;if(i.innerText="","bold"===n.getData("font-weight")){var c=document.createElement("b");o.appendChild(c),o=c}if("italic"===n.getData("font-style")){var l=document.createElement("i");o.appendChild(l),o=l}o.innerText=t.queryCommandValue("text"),a&&r.fixFFCaretDisappeared(),e.jump("input","input-request"),r.selectAll()}}function d(){var e=t.getSelectedNode();if(e){var n=e.getData("font-size")||e.getStyle("font-size");i.style.fontSize=n+"px",i.style.minWidth=0,i.style.minWidth=i.clientWidth+"px",i.style.fontWeight=e.getData("font-weight")||"",i.style.fontStyle=e.getData("font-style")||"",i.classList.add("input"),i.focus()}}function f(e){for(var n,r,i,o="",a="\t",c="\n",l=/\S/,s=" ",u=new RegExp("( |"+String.fromCharCode(160)+")"),d=document.createElement("br"),f=!1,p=!1,h=0,v=e.length;h<v;h++)switch(n=e[h],Object.prototype.toString.call(n)){case"[object HTMLBRElement]":o+=c;break;case"[object Text]":if(n=n.textContent.replace("&nbsp;"," "),l.test(n))o+=n;else{i=n.length;while(i--)u.test(n[i])?o+=s:n[i]===a&&(o+=a)}break;case"[object HTMLElement]":switch(n.nodeName){case"B":f=!0;break;case"I":p=!0;break;default:}[].splice.apply(e,[h,1].concat([].slice.call(n.childNodes))),v=e.length,h--;break;case"[object HTMLSpanElement]":[].splice.apply(e,[h,1].concat([].slice.call(n.childNodes))),v=e.length,h--;break;case"[object HTMLImageElement]":n.src&&/http(|s):\/\//.test(n.src)&&t.execCommand("Image",n.src,n.alt);break;case"[object HTMLDivElement]":r=[];var g=0;for(v=n.childNodes.length;g<v;g++)r.push(n.childNodes[g]);r.push(d),[].splice.apply(e,[h,1].concat(r)),v=e.length,h--;break;default:if(n&&n.childNodes.length){r=[];for(g=0,v=n.childNodes.length;g<v;g++)r.push(n.childNodes[g]);r.push(d),[].splice.apply(e,[h,1].concat(r)),v=e.length,h--}else n&&void 0!==n.textContent?o+=n.textContent:o+=""}return o=o.replace(/^\n*|\n*$/g,""),o=o.replace(new RegExp("(\n|\r|\n\r)( |"+String.fromCharCode(160)+"){4}","g"),"$1\t"),t.getSelectedNode().setText(o),f?t.queryCommandState("bold")||t.execCommand("bold"):t.queryCommandState("bold")&&t.execCommand("bold"),p?t.queryCommandState("italic")||t.execCommand("italic"):t.queryCommandState("italic")&&t.execCommand("italic"),m(),o}function p(e,n){try{t.decodeData("text",n).then((function(n){function r(e,t,n){var i=t.data;e.setText(i.text||"");for(var o=t.children||[],a=0;a<o.length;a++){var c=n.createNode(null,e);r(c,o[a],n)}return e}r(e,n,t),t.fire("contentchange"),t.getRoot().renderTree(),t.layout(300)}))}catch(r){if(t.fire("contentchange"),t.getRoot().renderTree(),"Error: Invalid local format"!==r.toString())throw r}}function h(){var e=[].slice.call(i.childNodes);setTimeout((function(){i.innerHTML=""}),0);var n=t.getSelectedNode();if(e=f(e),p(n,e),"root"==n.type){var r=t.getRoot().getText();t.fire("initChangeRoot",{text:r})}}function m(){i.classList.remove("input"),r.selectAll()}function v(){var e=v,n=t.getSelectedNode();n&&(e.timer||(e.timer=setTimeout((function(){var t=n.getRenderBox("TextRenderer");i.style.left=Math.round(t.x)+"px",i.style.top=(o.flaged?Math.round(t.bottom+30):Math.round(t.y))+"px",e.timer=0}))))}l(),c(),s(),this.editText=u}return r.exports=a}},e[13]={value:function(t,n,r){var i=e.r(2);function o(e){return!(e.ctrlKey||e.metaKey||e.altKey)&&(e.keyCode>=65&&e.keyCode<=90||(e.keyCode>=48&&e.keyCode<=57||(108!=e.keyCode&&e.keyCode>=96&&e.keyCode<=111||(108!=e.keyCode&&e.keyCode>=96&&e.keyCode<=111||(229==e.keyCode||0===e.keyCode)))))}function a(){var e,t,n=this.fsm,r=this.minder,a=this.receiver,c=this.container,l=a.element,s=this.hotbox,u=!1;a.listen("normal",(function(e){if(a.enable(),e.is("Space"))return e.preventDefault(),kity.Browser.safari&&(l.innerHTML=""),n.jump("hotbox","space-trigger");switch(e.type){case"keydown":if(r.getSelectedNode()){if(o(e))return n.jump("input","user-input")}else l.innerHTML="";n.jump("normal","shortcut-handle",e);break;case"keyup":break;default:}})),a.listen("hotbox",(function(e){a.disable(),e.preventDefault();s.dispatch(e);if(s.state()==i.STATE_IDLE&&"hotbox"==n.state())return n.jump("normal","hotbox-idle")})),a.listen("input",(function(e){if(a.enable(),"keydown"==e.type){if(e.is("Enter"))return e.preventDefault(),n.jump("normal","input-commit");if(e.is("Esc"))return e.preventDefault(),n.jump("normal","input-cancel");(e.is("Tab")||e.is("Shift + Tab"))&&e.preventDefault()}else if("keyup"==e.type&&e.is("Esc")){if(e.preventDefault(),!u)return n.jump("normal","input-cancel")}else"compositionstart"==e.type?u=!0:"compositionend"==e.type&&setTimeout((function(){u=!1}))}));var d=2;c.addEventListener("mousedown",(function(r){r.button==d&&r.preventDefault(),"hotbox"==n.state()?(s.active(i.STATE_IDLE),n.jump("normal","blur")):"normal"==n.state()&&r.button==d&&(e=r.clientX,t=r.clientY)}),!1),c.addEventListener("mousewheel",(function(e){"hotbox"==n.state()&&(s.active(i.STATE_IDLE),n.jump("normal","mousemove-blur"))}),!1),c.addEventListener("contextmenu",(function(e){e.preventDefault()})),c.addEventListener("mouseup",(function(i){"normal"==n.state()&&i.button==d&&i.clientX==e&&i.clientY==t&&r.getSelectedNode()&&n.jump("hotbox","content-menu")}),!1),s.$element.addEventListener("mousedown",(function(e){e.stopPropagation()}))}return r.exports=a}},e[14]={value:function(t,n,r){var i=e.r(4);function o(){var e=new i({enableKeyReceiver:!1,enableAnimation:!0});e.renderTo(this.selector),e.setTheme(null),e.select(e.getRoot(),!0),e.execCommand("text","中心主题"),this.minder=e}return r.exports=o}},e[15]={value:function(e,t,n){function r(){var e=this,t=this.minder,n=this.hotbox,r=this.fsm,i=n.state("main"),o=["前移:Alt+Up:ArrangeUp","下级:Tab|Insert:AppendChildNode","同级:Enter:AppendSiblingNode","后移:Alt+Down:ArrangeDown","删除:Delete|Backspace:RemoveNode","上级:Shift+Tab|Shift+Insert:AppendParentNode"],a=0;function c(){t.fire("importNodeData")}function l(){t.fire("exportNodeData")}o.forEach((function(n){var o=n.split(":"),c=o.shift(),l=o.shift(),s=o.shift();i.button({position:"ring",label:c,key:l,action:function(){if(0===s.indexOf("Append")){function n(){--a||e.editText(),t.off("layoutallfinish",n)}a++,t.execCommand(s,"分支主题"),t.on("layoutallfinish",n)}else t.execCommand(s),r.jump("normal","command-executed")},enable:function(){return-1!=t.queryCommandState(s)}})})),i.button({position:"bottom",label:"导入节点",key:"Alt + V",enable:function(){var e=t.getSelectedNodes();return 1==e.length},action:c,next:"idle"}),i.button({position:"bottom",label:"导出节点",key:"Alt + C",enable:function(){var e=t.getSelectedNodes();return 1==e.length},action:l,next:"idle"})}return n.exports=r}},e[16]={value:function(e,t,n){function r(){var e=this.minder,t=this.hotbox,n=t.state("main");n.button({position:"top",label:"优先级",key:"P",next:"priority",enable:function(){return-1!=e.queryCommandState("priority")}});var r=t.state("priority");"123456789".replace(/./g,(function(t){r.button({position:"ring",label:"P"+t,key:t,action:function(){e.execCommand("Priority",t)}})})),r.button({position:"center",label:"移除",key:"Del",action:function(){e.execCommand("Priority",0)}}),r.button({position:"top",label:"返回",key:"esc",next:"back"})}return n.exports=r}},e[17]={value:function(e,t,n){function r(){var e=this.minder,t=this.hotbox,n=t.state("main");n.button({position:"top",label:"进度",key:"G",next:"progress",enable:function(){return-1!=e.queryCommandState("progress")}});var r=t.state("progress");"012345678".replace(/./g,(function(t){r.button({position:"ring",label:"G"+t,key:t,action:function(){e.execCommand("Progress",parseInt(t)+1)}})})),r.button({position:"center",label:"移除",key:"Del",action:function(){e.execCommand("Progress",0)}}),r.button({position:"top",label:"返回",key:"esc",next:"back"})}return n.exports=r}},e[18]={value:function(t,n,r){var i=e.r(23);e.r(2);function o(){var e=this.fsm,t=this.minder,n=document.createElement("div");n.contentEditable=!0,n.setAttribute("tabindex",-1),n.classList.add("receiver"),n.onkeydown=n.onkeypress=n.onkeyup=a,n.addEventListener("compositionstart",a),this.container.appendChild(n);var r={element:n,selectAll:function(){n.innerHTML||(n.innerHTML="&nbsp;");var e=document.createRange(),t=window.getSelection();e.selectNodeContents(n),t.removeAllRanges(),t.addRange(e),n.focus()},enable:function(){n.setAttribute("contenteditable",!0)},disable:function(){n.setAttribute("contenteditable",!1)},fixFFCaretDisappeared:function(){n.removeAttribute("contenteditable"),n.setAttribute("contenteditable","true"),n.blur(),n.focus()},onblur:function(e){n.onblur=e}};r.selectAll(),t.on("beforemousedown",r.selectAll),t.on("receiverfocus",r.selectAll),t.on("readonly",(function(){t.disable(),editor.receiver.element.parentElement.removeChild(editor.receiver.element),editor.hotbox.$container.removeChild(editor.hotbox.$element)}));var o=[];function a(t){var n;t.is=function(e){for(var t=e.split("|"),n=0;n<t.length;n++)if(i.is(this,t[n]))return!0;return!1};for(var r=0;r<o.length;r++)if(n=o[r],("*"==n.notifyState||n.notifyState==e.state())&&n.call(null,t))return}r.listen=function(e,t){1==arguments.length&&(t=e,e="*"),t.notifyState=e,o.push(t)},this.receiver=r}return r.exports=o}},e[19]={value:function(t,n,r){var i=e.r(20);function o(){}function a(e){for(var t=0,n=0;n<e.length;n++)t+=e.charCodeAt(n);return t}function c(e){var t=this.flaged=-1!=window.location.search.indexOf(e);if(t){var n=a(e)%360,r=i("background: hsl({0}, 50%, 80%); color: hsl({0}, 100%, 30%); padding: 2px 3px; margin: 1px 3px 0 0;border-radius: 2px;",n),c="background: none; color: black;";this.log=function(){var t=i.apply(null,arguments);console.log(i("%c{0}%c{1}",e,t),r,c)}}else this.log=o}return r.exports=c}},e[20]={value:function(e,t,n){function r(e,t){return"object"!=typeof t&&(t=[].slice.call(arguments,1)),String(e).replace(/\{(\w+)\}/gi,(function(e,n){return t[n]||n}))}return n.exports=r}},e[21]={value:function(e,t,n){!("innerText"in document.createElement("a"))&&"getSelection"in window&&(HTMLElement.prototype.__defineGetter__("innerText",(function(){var e,t,n=window.getSelection(),r=[];for(t=0;t<n.rangeCount;t++)r[t]=n.getRangeAt(t);for(n.removeAllRanges(),n.selectAllChildren(this),e=n.toString(),n.removeAllRanges(),t=0;t<r.length;t++)n.addRange(r[t]);return e})),HTMLElement.prototype.__defineSetter__("innerText",(function(e){this.innerHTML=(e||"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")})))}},e[22]={value:function(e,t,n){
/*!
    * https://github.com/Starcounter-Jack/Fast-JSON-Patch
    * json-patch-duplex.js 0.5.0
    * (c) 2013 Joachim Wester
    * MIT license
    */
var r=function(){return Object.keys?Object.keys:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}}();function i(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function o(e){return"object"===typeof e?JSON.parse(JSON.stringify(e)):e}function a(e,t,n,c){for(var l=r(t),s=r(e),u=!1,d=s.length-1;d>=0;d--){var f=s[d],p=e[f];if(t.hasOwnProperty(f)){var h=t[f];"object"==typeof p&&null!=p&&"object"==typeof h&&null!=h?a(p,h,n,c+"/"+i(f)):p!=h&&(!0,n.push({op:"replace",path:c+"/"+i(f),value:o(h)}))}else n.push({op:"remove",path:c+"/"+i(f)}),u=!0}if(u||l.length!=s.length)for(d=0;d<l.length;d++){f=l[d];e.hasOwnProperty(f)||n.push({op:"add",path:c+"/"+i(f),value:o(t[f])})}}function c(e,t){var n=[];return a(e,t,n,""),n}return n.exports=c}},e[23]={value:function(t,n,r){var i=e.r(24),o=4096,a=8192,c=16384;function l(e){return"string"==typeof e?d(e):u(e)}function s(e,t){return e&&t&&l(e)==l(t)}function u(e){var t=0;if((e.ctrlKey||e.metaKey)&&(t|=o),e.altKey&&(t|=a),e.shiftKey&&(t|=c),-1===[16,17,18,91].indexOf(e.keyCode)){if(229===e.keyCode&&e.keyIdentifier)return t|parseInt(e.keyIdentifier.substr(2),16);t|=e.keyCode}return t}function d(e){var t=0;return e.toLowerCase().split(/\s*\+\s*/).forEach((function(e){switch(e){case"ctrl":case"cmd":t|=o;break;case"alt":t|=a;break;case"shift":t|=c;break;default:t|=i[e]}})),t}n.hash=l,n.is=s}},e[24]={value:function(e,t,n){var r={Shift:16,Control:17,Alt:18,CapsLock:20,BackSpace:8,Tab:9,Enter:13,Esc:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,Insert:45,Left:37,Up:38,Right:39,Down:40,Direction:{37:1,38:1,39:1,40:1},Del:46,NumLock:144,Cmd:91,CmdFF:224,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"`":192,"=":187,"-":189,"/":191,".":190};for(var i in r)r.hasOwnProperty(i)&&(r[i.toLowerCase()]=r[i]);var o=65,a="a".charCodeAt(0);"abcdefghijklmnopqrstuvwxyz".split("").forEach((function(e){r[e]=o+(e.charCodeAt(0)-a)}));var c=9;do{r[c.toString()]=c+48}while(--c);n.exports=r}};var t={"expose-editor":1};function n(n){e.r([t[n]])}n("expose-editor")})()},c31f:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("kityMinder",{attrs:{importJson:e.importJson},on:{minder:e.minderHandle}})],1)},o=[],a={name:"app",data(){return{importJson:{data:{id:2,text:"Design project",image:"http://image.namedq.com/uploads/20191011/18/1570789062-WiOwJhGFDp.jpg",imageSize:{width:200,height:200}},children:[{data:{text:"Designsy",priority:1,id:3},children:[{data:{text:"Designsy",id:4},children:[{data:{text:"Designsy",id:5}},{data:{text:"Designsy",id:5}},{data:{text:"Designsy",id:5}}]},{data:{text:"Designsy",id:5}},{data:{text:"Designsy",id:62}},{data:{text:"Designsy",id:73}},{data:{text:"Designsy",id:84}}]},{data:{text:"Designsy",priority:2,id:9}},{data:{text:"Designsy",priority:3,id:102}},{data:{text:"Designsy",priority:4,id:113}},{data:{text:"Designsy",priority:5,id:124}}]}}},mounted(){},methods:{minderHandle(e){console.log(e)}}},c=a,l=(n("42b1"),n("2877")),s=Object(l["a"])(c,i,o,!1,null,null,null),u=s.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"minder"},[n("div",{attrs:{id:"minder-container"}})])}],p=(n("f0e2"),n("93d2"),n("48bb"),n("2257"),n("8b98"),n("7101"),n("c034"),{name:"kityMinder",data(){return{minder:{}}},props:{importJson:{type:Object,default:()=>[]}},mounted(){this.KMEditor=new window.kityminder.Editor(document.querySelector("#minder-container")),this.minder=this.KMEditor.minder,this.minder.importJson(this.importJson),this.$emit("minder",this.minder)}}),h=p,m=(n("d788"),Object(l["a"])(h,d,f,!1,null,null,null)),v=m.exports;v.install=function(e){e.component(v.name,v)};var g=v;r["a"].use(g),r["a"].config.productionTip=!1,new r["a"]({render:e=>e(u)}).$mount("#app")},d788:function(e,t,n){"use strict";var r=n("4ef0"),i=n.n(r);i.a},f381:function(e,t,n){}});
//# sourceMappingURL=index.d78083fc.js.map