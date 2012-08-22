/**
 Head JS     The only script in your <HEAD>
 Copyright   Tero Piirainen (tipiirai)
 License     MIT / http://bit.ly/mit-license
 Version     0.96

 https://github.com/itechnology/headjs
 */
(function(a,b){function j(a){g[g.length]=a}function k(a){var b=new RegExp("\\b"+a+"\\b");f.className=f.className.replace(b,"")}function l(a,b){for(var c=0,d=a.length;c<d;c++){b.call(a,a[c],c)}}function v(){f.className=f.className.replace("js-false","");f.className=f.className.replace(/ (w|w-eq|w-gte|w-lte|h|h-eq|h-gte|h-lte)\d+/g,"");var b=a.innerWidth||f.clientWidth,c=a.outerWidth||a.screen.width;m.screen["innerWidth"]=b;m.screen["outerWidth"]=c;j("w"+b);l(h.width,function(a){if(b>=a){j("w-gte"+a)}if(b<=a){j("w-lte"+a)}if(b===a){j("w-eq"+a)}});var d=a.innerHeight||f.clientHeight,e=a.outerHeight||a.screen.height;m.screen["innerHeight"]=d;m.screen["outerHeight"]=e;j("h"+d);l(h.height,function(a){if(d>=a){j("h-gte"+a)}if(d<=a){j("h-lte"+a)}if(d===a){j("h-eq"+a)}});m.feature("portrait",d>b);m.feature("landscape",d<b)}function x(){clearTimeout(w);w=setTimeout(v,100)}"use strict";var c=a.document,d=a.navigator,e=a.location,f=c.documentElement,g=[],h={width:[240,320,480,640,768,800,1024,1280,1440,1680,1920],height:[240,320,480,600,768,800,900,1080],section:"section-",page:"page-",head:"head"};if(a.head_conf){for(var i in a.head_conf){if(a.head_conf[i]!==b){h[i]=a.head_conf[i]}}}var m=a[h.head]=function(){m.ready.apply(null,arguments)};m.features={};m.feature=function(a,b,c){if(!a){f.className+=" "+g.join(" ");g=[];return m}if(Object.prototype.toString.call(b)==="[object Function]"){b=b.call()}var d=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});j(d+"-"+b);m.features[a]=!!b;if(!c){k(d+"-false");k(d+"-true");m.feature()}return m};m.feature("js",true,true);var n=d.userAgent.toLowerCase(),o=/mobile/.test(n);m.feature("mobile",o,true);m.feature("desktop",!o,true);n=/(chrome|firefox)[ \/]([\w.]+)/.exec(n)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(n)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(n)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||[];var p=n[1],q=parseFloat(n[2]),r=0,s=0;switch(p){case"msie":p="ie";q=c.documentMode||q;r=6;s=10;break;case"chrome":r=13;s=18;break;case"firefox":p="ff";r=3;s=11;break;case"ipod":case"ipad":case"iphone":p="ios";r=3;s=5;break;case"android":r=2;s=4;break;case"webkit":p="safari";r=9;s=12;break;case"opera":r=9;s=12;break}m.browser={name:p,version:q};m.browser[p]=true;var t=["ie","chrome","ff","ios","android","safari","opera"];l(t,function(a){if(a===p){j(a)}else{j(a+"-false")}});for(var u=r;u<=s;u++){if(q>=u){j(p+"-gte"+u)}if(q<=u){j(p+"-lte"+u)}if(q===u){j(p+"-eq"+u)}}if(p==="ie"&&q<9){l("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(a){c.createElement(a)})}l(e.pathname.split("/"),function(a,c){if(this.length>2&&this[c+1]!==b){if(c){j(h.section+this.slice(1,c+1).join("-").toLowerCase())}}else{var d=a||"index",e=d.indexOf(".");if(e>0){d=d.substring(0,e)}f.id=h.page+d.toLowerCase();if(!c){j(h.section+"root")}}});m.screen={height:a.screen.height,width:a.screen.width};v();var w=0;if(a.addEventListener){a.addEventListener("resize",x,false)}else{a.attachEvent("onresize",x)}})(window);(function(a,b){function k(a){for(var c in a){if(f[a[c]]!==b){return true}}}function l(a){var b=a.charAt(0).toUpperCase()+a.substr(1),c=(a+" "+h.join(b+" ")+b).split(" ");return!!k(c)}"use strict";var c=a.document,d=a.navigator,e=c.createElement("i"),f=e.style,g=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),h="Webkit Moz O ms Khtml".split(" "),i=a.head_conf&&a.head_conf.head||"head",j=a[i];a.test=f;var m={gradient:function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",c="linear-gradient(left top,#eee,#fff);";f.cssText=(a+g.join(b+a)+g.join(c+a)).slice(0,-a.length);return!!f.backgroundImage},rgba:function(){f.cssText="background-color:rgba(0,0,0,0.5)";return!!f.backgroundColor},opacity:function(){return e.style.opacity===""},textShadow:function(){return f.textShadow===""},multipleBackground:function(){f.cssText="background:url(//:),url(//:),red url(//:)";return(new RegExp("(url\\s*\\(.*?){3}")).test(f.background)},boxShadow:function(){return l("boxShadow")},borderImage:function(){return l("borderImage")},borderRadius:function(){return l("borderRadius")},boxReflect:function(){return l("boxReflect")},transform:function(){return l("transform")},transition:function(){return l("transition")},fontFace:function(){var a=j.browser.name,b=j.browser.version;switch(a){case"ie":return b>=9;case"chrome":return b>=13;case"ff":return b>=6;case"ios":return b>=5;case"android":return false;case"safari":return b>=5.1;case"opera":return b>=10;default:return false}return false}};for(var n in m){if(m[n]){j.feature(n,m[n].call(),true)}}j.feature()})(window);(function(a,b){function s(a){if(a._done){return}a();a._done=1}function t(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function u(a){var b;if(typeof a=="object"){for(var c in a){if(a[c]){b={name:c,url:a[c]}}}}else{b={name:t(a),url:a}}var d=k[b.name];if(d&&d.url===b.url){return d}k[b.name]=b;return b}function v(a,b){if(!a){return}if(typeof a=="object"){a=[].slice.call(a)}for(var c=0;c<a.length;c++){b.call(a,a[c],c)}}function w(a){return Object.prototype.toString.call(a)=="[object Function]"}function x(a){a=a||k;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=r){return false}b=true}return b}function y(a){a.state=o;v(a.onpreload,function(a){a.call()})}function z(a,c){if(a.state===b){a.state=p;a.onpreload=[];B({src:a.url,type:"cache"},function(){y(a)})}}function A(a,b){if(a.state==r){return b&&b()}if(a.state==q){return n.ready(a.name,b)}if(a.state==p){return a.onpreload.push(function(){A(a,b)})}a.state=q;B(a.url,function(){a.state=r;if(b){b()}v(j[a.name],function(a){s(a)});if(x()&&g){v(j.ALL,function(a){s(a)})}})}function B(a,b){var d=c.createElement("script");d.type="text/"+(a.type||"javascript");d.src=a.src||a;d.async=false;d.onreadystatechange=d.onload=function(){var a=d.readyState;if(!b.done&&(!a||/loaded|complete/.test(a))){b.done=true;b()}};(c.body||e).appendChild(d)}function C(){if(!g){g=true;v(h,function(a){s(a)})}}"use strict";var c=a.document,d=a.navigator,e=c.documentElement,f,g,h=[],i=[],j={},k={},l=c.createElement("script").async===true||"MozAppearance"in c.documentElement.style||a.opera,m=a.head_conf&&a.head_conf.head||"head",n=a[m]=a[m]||function(){n.ready.apply(null,arguments)},o=1,p=2,q=3,r=4;if(l){n.js=function(){var a=arguments,b=a[a.length-1],c={};if(!w(b)){b=null}v(a,function(d,e){if(d!=b){d=u(d);c[d.name]=d;A(d,b&&e==a.length-2?function(){if(x(c)){s(b)}}:null)}});return n}}else{n.js=function(){var a=arguments,b=[].slice.call(a,1),c=b[0];if(!f){i.push(function(){n.js.apply(null,a)});return n}if(c){v(b,function(a){if(!w(a)){z(u(a))}});A(u(a[0]),w(c)?c:function(){n.js.apply(null,b)})}else{A(u(a[0]))}return n}}n.ready=function(a,b){if(a==c){if(g){s(b)}else{h.push(b)}return n}if(w(a)){b=a;a="ALL"}if(typeof a!="string"||!w(b)){return n}var d=k[a];if(d&&d.state==r||a=="ALL"&&x()&&g){s(b);return n}var e=j[a];if(!e){e=j[a]=[b]}else{e.push(b)}return n};n.ready(c,function(){if(x()){v(j.ALL,function(a){s(a)})}if(n.feature){n.feature("domloaded",true)}});if(a.addEventListener){c.addEventListener("DOMContentLoaded",C,false);a.addEventListener("load",C,false)}else if(a.attachEvent){c.attachEvent("onreadystatechange",function(){if(c.readyState==="complete"){C()}});var D=1;try{D=a.frameElement}catch(E){}if(!D&&e.doScroll){(function(){try{e.doScroll("left");C()}catch(a){setTimeout(arguments.callee,1);return}})()}a.attachEvent("onload",C)}if(!c.readyState&&c.addEventListener){c.readyState="loading";c.addEventListener("DOMContentLoaded",handler=function(){c.removeEventListener("DOMContentLoaded",handler,false);c.readyState="complete"},false)}setTimeout(function(){f=true;v(i,function(a){a()})},300)})(window)