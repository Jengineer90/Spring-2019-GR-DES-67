//v148 Copyright (c) 2008-2018 33Across Inc. All Rights Reserved

Tynt=window.Tynt||[];
(function(){var e=window,h=document,g={distro:"AFPR",id:"AFPR-"+(new Date).getTime()};Tynt.AFPRL=!0;Date.now||(Date.now=function(){return(new Date).getTime()});var d={_maxRef:600,_idMacro:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",init:function(){this._icUrl=g.protocol+(Tynt.e||"")+"ic.tynt.com";this._debUrl=g.protocol+(Tynt.e||"")+"de.tynt.com/deb/v2";this._sicUrl=g.protocol+(Tynt.e||"")+"cdn-sic.33across.com/1/javascripts/sic.js";this._apUrl=g.protocol+(Tynt.e||"")+"cdn-ap.33across.com/javascripts/ap.js"},
newEle:function(a,b,c,f){f=f||window;a=f.document.createElement(a);b&&this.extend(a,b);c&&this.extend(a.style,c);return a},injectScript:function(a,b,c){b=b||window;a=this.newEle("script",{async:"async",type:"text/javascript",src:a},null,b);this.insertEle(a,c||b.document.getElementsByTagName("script")[0])},injectSicScript:function(a){this.injectScript(this._sicUrl,window,a)},injectApolloScript:function(){this.injectScript(this._apUrl)},injectSicIframe:function(a,b,c){var f={width:a.width+"px",height:a.height+
"px",border:"0 none",margin:"0"};c&&this.extend(f,c);c=this.newEle("iframe",{src:"about:blank",frameBorder:"0",frameSpacing:"0",scrolling:"no"},f);this.insertEle(c,b);a.iframeId=this.eleId(c);a.sicWindow=c.contentWindow;a=c.contentWindow.document;a.open();a.write('<!DOCTYPE html><html><head><style type="text/css">*{margin:0;padding:0;}</style></head><body><script type="text/javascript">window.Tynt = window.parent.Tynt;\x3c/script><script type="text/javascript" src="'+this._sicUrl+'">\x3c/script></body></html>');
a.close()},insertEle:function(a,b){b?"script"==b.tagName.toLowerCase()?b.parentNode.insertBefore(a,b):b.appendChild(a):document.body.appendChild(a)},eleId:function(a){var b=a.id;b||(b="x33x"+Date.now(),a.id=b);return b},_imgs:[],injectPixel:function(a,b,c){var f;try{f=h.createElement("img")}catch(d){f=document.createElement("img")}f&&(this._imgs.push(f),b&&(f.onload=b),c&&(f.onerror=c),f.src=a)},docUrl:function(){var a=this.getLink("canonical");a||(a=this.getMeta("property","og:url","name","original-source"));
if(a){if(0!=a.indexOf("http")){var b=g.protocol+e.location.host+e.location.pathname,c=h.getElementsByTagName("base")[0];c&&(c=c.getAttribute("href"))&&(b=c);"/"==a.charAt(0)?(c=b.indexOf("/",9),-1<c&&(b=b.slice(0,c))):(c=b.lastIndexOf("/"),b=9<c?b.slice(0,c+1):b+"/");a=b+a}return a}return""},getMeta:function(a,b,c,f){var d,e=null,g=null,k=h.getElementsByTagName("meta");for(d=0;d<k.length;++d)e||k[d].getAttribute(a)!==b?c&&!g&&k[d].getAttribute(c)===f&&(g=k[d].getAttribute("content")||null):e=k[d].getAttribute("content")||
null;return e||g},getLink:function(a,b){var c,f,d=h.getElementsByTagName("link");for(c=0;c<d.length;++c)if(f=d[c].getAttribute("rel"),d[c].getAttribute("href")&&f&&(!b&&0<=f.indexOf(a)||b&&f==a))return d[c].href;return null},extend:function(a,b){var c,f;for(c=1;c<arguments.length;++c)for(f in arguments[c])arguments[c].hasOwnProperty(f)&&(a[f]=arguments[c][f]);return a},isArray:function(a){return"undefined"!=typeof a&&"[object Array]"===Object.prototype.toString.call(a)},inArray:function(a,b){return 0<=
this.indexOf(a,b)},toArray:function(a,b){return Array.prototype.slice.call(a,b||0)},indexOf:function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1},unique:function(a){var b,c={},f=[];for(b=0;b<a.length;++b)c[a[b]]||(c[a[b]]=!0,f.push(a[b]));return f},iframeType:function(){var a=this.iframeEle(),b=t,c=", iso:"+this.isolated();if(a)a.id&&0<=a.id.search(/google_ads?_i?frame/)?(b=6,d.clog("In same-origin iframe from DFP"+c)):(b=u,d.clog("In same-origin iframe"+
c));else try{window!=window.top?"undefined"!=typeof window.$sf?(b=v,d.clog("In SafeFrame")):(b=p,d.clog("In cross-origin iframe")):d.clog("In top window")}catch(f){b=p,d.clog("iframeType: "+f.message)}return b},iframeEle:function(a){var b=null;a=a||window;try{b=a.frameElement}catch(c){}return b},iframeTop:function(){var a=window,b=null;try{for(;a!=window.top;)b=a,a=a.parent}catch(c){return null}return b?this.iframeEle(b):null},getTopWin:function(){var a=window;try{for(;a.parent!==a&&a.parent.document;)a=
a.parent}catch(b){}return a},isolated:function(){var a=!0;try{"function"==typeof window.top.open&&(a=!1)}catch(b){}return a},tyntIds:function(){return this.unique(Tynt).join("~")},getPubId:function(){for(var a=null,b=0;b<Tynt.length;++b)if("string"==typeof Tynt[b]&&22==Tynt[b].length&&0>Tynt[b].indexOf("!")){a=Tynt[b];break}return a},countIds:function(a){var b,c=0;for(b=0;b<Tynt.length;++b)Tynt[b]===a&&++c;return c},_log:function(a){"undefined"==typeof Tynt.debug&&0<e.location.search.indexOf("__tcdebugmode=1")&&
e.console&&e.console.log&&(Tynt.debug=!0);if(!0===Tynt.debug||1===Tynt.debug)a.unshift("[TC]"),e.console.log.apply(e.console,a)},log:function(){g.inXOIframe()?this.clog.apply(this,arguments):this._log(this.toArray(arguments))},clog:function(){var a=this.toArray(arguments);a.unshift(g.id);this._log(a)},callIc:function(){var a,b,c,f,m,n,l,k;if(!e._33Across.state.icDone){e._33Across.state.icDone=w;b=this.getCookie(h.cookie,"tracertraffic");a=e.location.hash;a=/tynt=/.test(a)?a.match(/tynt=?([^?&$#]*)/)[1]:
!1;f=c=this._icUrl+"/b/p?id="+this.tyntIds()+(b?"&et="+b:"")+(a?"&a="+a:"")+("string"==typeof Tynt.b?"&b="+Tynt.b:"")+"&lm="+g.type+"&ts="+Date.now()+"&dn="+g.distro+"&iso="+(this.isolated()?"1":"0");(a=this.getMeta("property","og:image:url","property","og:image"))&&(f+="&img="+encodeURIComponent(this.trunc(a,250)));m=f;(a=this.getMeta("property","og:title"))&&a!=h.title&&(m+="&ct="+encodeURIComponent(this.trunc(a,200)));n=m;h.referrer&&(a=this.trunc(h.referrer,this._maxRef),n+="&r="+encodeURIComponent(a));
l=n;if(a=h.title||e.location.hostname)a=this.trim(this.trunc(a,200)),l+="&t="+encodeURIComponent(a);k=l;if(a=this.docUrl())a=this.trunc(a,400),k+="&cu="+encodeURIComponent(a);b=k;if(a=this.getLink("amphtml",!0))a=this.trunc(a,250),b+="&ah="+encodeURIComponent(a);d.callIc.rsp=function(){e._33Across.state.icDone=r};d.clog("Calling IC");this.injectPixel(b,d.callIc.rsp,function(){d.injectPixel(k,d.callIc.rsp,function(){d.injectPixel(l,d.callIc.rsp,function(){d.injectPixel(n,d.callIc.rsp,function(){d.injectPixel(m,
d.callIc.rsp,function(){d.injectPixel(f,d.callIc.rsp,function(){d.injectPixel(c,d.callIc.rsp)})})})})})})}},callDeb:function(a){function b(a,b){d.clog("Calling DEB "+b+(a?"":" on IC timeout"));var m=encodeURIComponent(d.trunc(h.referrer,d._maxRef));d.injectScript(d._debUrl+"?id="+d.tyntIds()+"&dn="+g.distro+"&cc="+b+"&r="+m,e)}"undefined"==typeof a&&(a=1);e._33Across.state.deDone>=a||(++e._33Across.state.deDone,this.when(function(){return e._33Across.state.icDone==r},b,{timeout:300,timeoutCallback:b,
callbackData:e._33Across.state.deDone},this))},callDebX:function(a,b){function c(a,c){d[b?"log":"clog"]("Calling DEBx "+c+(a?"":" on IC timeout"));var n=encodeURIComponent(d.trunc(h.referrer,d._maxRef));d.injectScript(d._debUrl+"?m=xch&id="+d.tyntIds()+"&dn="+g.distro+"&cc="+c+"&r="+n,e)}a||(a=10);e._33Across.state.dxDone>=a||(++e._33Across.state.dxDone,this.when(function(){return e._33Across.state.icDone==r},c,{timeout:300,timeoutCallback:c,callbackData:e._33Across.state.dxDone},this))},jsonDecode:function(a){if("function"!=
typeof Array.prototype.toJSON)return JSON.stringify(a);var b=Array.prototype.toJSON;delete Array.prototype.toJSON;a=JSON.stringify(a);Array.prototype.toJSON=b;return a},getCookie:function(a,b){for(var c=b+"=",d=a.split(";"),e=0;e<d.length;e++){for(var g=d[e];" "==g.charAt(0);)g=g.substring(1,g.length);if(0==g.indexOf(c))return g.substring(c.length,g.length)}return null},trim:function(a){return a.replace(/^\s+|\s+$/g,"")},trunc:function(a,b){var c,d;if(!a||a.length<=b)return a;c=a.substring(0,b);for(d=
1;3>=d;++d)if("%"==c.charAt(c.length-d))return c.substring(0,c.length-d);return c},when:function(a,b,c,d){var g,h,l,k=null,p=null,q=a();c=c||{};g=c.interval||50;h=c.timeout;l=c.timeoutCallback||function(){};if(q)return b.call(d,q,c.callbackData),!0;k=e.setInterval(function(){if(q=a())e.clearInterval(k),e.clearTimeout(p),b.call(d,q,c.callbackData)},g);h&&(p=e.setTimeout(function(){e.clearInterval(k);l.call(d,q,c.callbackData)},h));return!1},prob:function(a){a=parseFloat(a)||0;return Math.random()<
a}},w=1,r=2,t=0,p=3,v=4,u=5;g.type=0;g.inIframe=function(){return this.type>t};g.inSOIframe=function(){return this.type>=u&&6>=this.type};g.inXOIframe=function(){return this.type>=p&&this.type<=v};g.init=function(){this.type=d.iframeType();this.inSOIframe()&&(e=d.getTopWin(),h=e.document);e._33Across||(e._33Across={});e._33Across.state||(e._33Across.state={icDone:0,deDone:0,dxDone:0,ivDone:!1});"https:"===e.location.protocol?(this.isSecure=!0,this.protocol="https://"):(this.isSecure=!1,this.protocol=
"http://");d.init();this.isolated=d.isolated();e._33Across.pvTs||(e._33Across.pvTs=Date.now())};g.init();d.callIc();d.callDeb(1)})();
