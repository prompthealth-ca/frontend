/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(g,e){"use strict";var t=[],v=g.document,r=Object.getPrototypeOf,s=t.slice,y=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,m=n.hasOwnProperty,a=m.toString,l=a.call(Object),b={},x=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},w=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function C(e,t,n){var r,i,o=(n=n||v).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",E=function(e,t){return new E.fn.init(e,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=T(e);return!x(e)&&!w(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||x(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=m.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){C(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(d,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return y.apply([],a)},guid:1,support:b}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,p,x,o,i,h,f,g,w,u,l,C,T,a,E,v,s,c,y,N="sizzle"+1*new Date,m=n.document,A=0,r=0,d=ue(),b=ue(),k=ue(),S=ue(),D=function(e,t){return e===t&&(l=!0),0},L={}.hasOwnProperty,t=[],j=t.pop,q=t.push,O=t.push,P=t.slice,H=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+R+"*("+B+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+R+"*\\]",W=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",$=new RegExp(R+"+","g"),F=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=new RegExp("^"+R+"*,"+R+"*"),_=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp(R+"|>"),V=new RegExp(W),X=new RegExp("^"+B+"$"),Q={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,G=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){C()},ae=xe(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{O.apply(t=P.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){O={apply:t.length?function(e,t){q.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,d=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==d&&9!==d&&11!==d)return n;if(!r&&((e?e.ownerDocument||e:m)!==T&&C(e),e=e||T,E)){if(11!==d&&(u=Z.exec(t)))if(i=u[1]){if(9===d){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return O.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&p.getElementsByClassName&&e.getElementsByClassName)return O.apply(n,e.getElementsByClassName(i)),n}if(p.qsa&&!S[t+" "]&&(!v||!v.test(t))&&(1!==d||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===d&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=N),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+be(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return O.apply(n,f.querySelectorAll(c)),n}catch(e){S(t,!0)}finally{s===N&&e.removeAttribute("id")}}}return g(t.replace(F,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>x.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[N]=!0,e}function ce(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)x.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in p=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},C=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==T&&9===r.nodeType&&r.documentElement&&(a=(T=r).documentElement,E=!i(T),m!==T&&(n=T.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),p.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),p.getElementsByTagName=ce(function(e){return e.appendChild(T.createComment("")),!e.getElementsByTagName("*").length}),p.getElementsByClassName=J.test(T.getElementsByClassName),p.getById=ce(function(e){return a.appendChild(e).id=N,!T.getElementsByName||!T.getElementsByName(N).length}),p.getById?(x.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=p.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=p.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(p.qsa=J.test(T.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+R+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+N+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+N+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=T.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+R+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(p.matchesSelector=J.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){p.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=J.test(a.compareDocumentPosition),y=t||J.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument===m&&y(m,e)?-1:t===T||t.ownerDocument===m&&y(m,t)?1:u?H(u,e)-H(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===T?-1:t===T?1:i?-1:o?1:u?H(u,e)-H(u,t):0;if(i===o)return de(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?de(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),T},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&C(e),p.matchesSelector&&E&&!S[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){S(t,!0)}return 0<se(t,T,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==T&&C(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==T&&C(e);var n=x.attrHandle[t.toLowerCase()],r=n&&L.call(x.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:p.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!p.detectDuplicates,u=!p.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(x=se.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=d[e+" "];return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&d(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),b="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&d){p=(s=(r=(i=(o=(a=c)[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if(1===a.nodeType&&++p&&a===e){i[h]=[A,s,p];break}}else if(d&&(p=s=(r=(i=(o=(a=e)[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1]),!1===p)while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if((b?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++p&&(d&&((i=(o=a[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[A,p]),a===e))break;return(p-=v)===g||p%g==0&&0<=p/g}}},PSEUDO:function(e,o){var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[N]?a(o):1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=H(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(F,"$1"));return s[N]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return X.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=pe(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=he(e);function me(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function xe(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,d=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[A,d];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[N]||(e[N]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===A&&r[1]===d)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Ce(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(p,h,g,v,y,e){return v&&!v[N]&&(v=Te(v)),y&&!y[N]&&(y=Te(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!p||!e&&h?c:Ce(c,s,p,n,r),d=g?y||(e?p:l||v)?[]:t:f;if(g&&g(f,d,n,r),v){i=Ce(d,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(d[u[o]]=!(f[u[o]]=a))}if(e){if(y||p){if(y){i=[],o=d.length;while(o--)(a=d[o])&&i.push(f[o]=a);y(null,d=[],i,r)}o=d.length;while(o--)(a=d[o])&&-1<(i=y?H(e,a):s[o])&&(e[i]=!(t[i]=a))}}else d=Ce(d===t?d.splice(l,d.length):d),y?y(null,t,d,r):O.apply(t,d)})}function Ee(e){for(var i,t,n,r=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=xe(function(e){return e===i},a,!0),l=xe(function(e){return-1<H(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=x.relative[e[s].type])c=[xe(we(c),t)];else{if((t=x.filter[e[s].type].apply(null,e[s].matches))[N]){for(n=++s;n<r;n++)if(x.relative[e[n].type])break;return Te(1<s&&we(c),1<s&&be(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(F,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&be(e))}c.push(t)}return we(c)}return me.prototype=x.filters=x.pseudos,x.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=b[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=x.preFilter;while(a){for(o in n&&!(r=z.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=_.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),x.filter)!(r=Q[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):b(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,b,r,i=[],o=[],a=k[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[N]?i.push(a):o.push(a);(a=k(e,(v=o,m=0<(y=i).length,b=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],d=w,p=e||b&&x.find.TAG("*",i),h=A+=null==d?1:Math.random()||.1,g=p.length;for(i&&(w=t===T||t||i);l!==g&&null!=(o=p[l]);l++){if(b&&o){a=0,t||o.ownerDocument===T||(C(o),n=!E);while(s=v[a++])if(s(o,t||T,n)){r.push(o);break}i&&(A=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=j.call(r));f=Ce(f)}O.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(A=h,w=d),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=Q.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],x.relative[s=a.type])break;if((u=x.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&be(o)))return O.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},p.sortStable=N.split("").sort(D).join("")===N,p.detectDuplicates=!!l,C(),p.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),p.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(I,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(g);E.find=h,E.expr=h.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=h.uniqueSort,E.text=h.getText,E.isXMLDoc=h.isXML,E.contains=h.contains,E.escapeSelector=h.escape;var N=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,n,r){return x(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),D.test(r[1])&&E.isPlainObject(t))for(r in t)x(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=v.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):x(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,j=E(v);var O=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function H(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return N(e,"parentNode")},parentsUntil:function(e,t,n){return N(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return N(e,"nextSibling")},prevAll:function(e){return N(e,"previousSibling")},nextUntil:function(e,t,n){return N(e,"nextSibling",n)},prevUntil:function(e,t,n){return N(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(S(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(P[r]||E.uniqueSort(n),O.test(r)&&n.reverse()),this.pushStack(n)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){return e}function B(e){throw e}function M(e,t,n,r){var i;try{e&&x(i=e.promise)?i.call(e).done(t).fail(n):e&&x(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(I)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){x(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==T(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=x(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&x(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,x(t)?s?t.call(e,l(u,o,R,s),l(u,o,B,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,B,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==B&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),g.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,x(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,x(t)?t:R)),o[2][3].add(l(0,e,x(n)?n:B))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(M(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||x(i[t]&&i[t].then)))return o.then();while(t--)M(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){g.console&&g.console.warn&&e&&W.test(e.name)&&g.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){g.setTimeout(function(){throw e})};var $=E.Deferred();function F(){v.removeEventListener("DOMContentLoaded",F),g.removeEventListener("load",F),E.ready()}E.fn.ready=function(e){return $.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||$.resolveWith(v,[E])}}),E.ready.then=$.then,"complete"===v.readyState||"loading"!==v.readyState&&!v.documentElement.doScroll?g.setTimeout(E.ready):(v.addEventListener("DOMContentLoaded",F),g.addEventListener("load",F));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===T(n))for(s in i=!0,n)z(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,x(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(U,V)}var Q=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=E.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Q(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(I)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var G=new Y,K=new Y,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}K.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return K.hasData(e)||G.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=K.get(o),1===o.nodeType&&!G.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),ee(o,r,i[r]));G.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){K.set(this,n)}):z(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=K.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){K.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=G.get(e,t),n&&(!r||Array.isArray(n)?r=G.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return G.get(e,n)||G.access(e,n,{empty:E.Callbacks("once memory").add(function(){G.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=G.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=v.documentElement,oe=function(e){return E.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===E.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};var le={};function ce(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=G.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=le[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),le[s]=u)))):"none"!==n&&(l[c]="none",G.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return ce(this,!0)},hide:function(){return ce(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?E(this).show():E(this).hide()})}});var fe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,he={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)G.set(e[n],"globalEval",!t||G.get(t[n],"globalEval"))}he.optgroup=he.option,he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td;var ye,me,be=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===T(o))E.merge(d,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=he[s]||he._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ge(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])pe.test(o.type||"")&&n.push(o)}return f}ye=v.createDocumentFragment().appendChild(v.createElement("div")),(me=v.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),ye.appendChild(me),b.checkClone=ye.cloneNode(!0).cloneNode(!0).lastChild.checked,ye.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!ye.cloneNode(!0).lastChild.defaultValue;var we=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ne(){return!1}function Ae(e,t){return e===function(){try{return v.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ne;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(G.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=G.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),G.set(this,i,r),t=o(this,i),this[i](),r!==(n=G.get(this,i))||t?G.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(G.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===G.get(e,i)&&E.event.add(e,i,Ee)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=G.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(ie,i),n.guid||(n.guid=E.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(I)||[""]).length;while(l--)p=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(f=E.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=E.event.special[p]||{},c=E.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||((d=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(p,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),E.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=G.hasData(e)&&G.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(p=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){f=E.event.special[p]||{},d=u[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||E.removeEvent(e,p,v.handle),delete u[p])}else for(p in u)E.event.remove(e,p+t[l],n,r,!0);E.isEmptyObject(u)&&G.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=E.event.fix(e),u=new Array(arguments.length),l=(G.get(this,"events")||{})[s.type]||[],c=E.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=E.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:x(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Se(t,"click",Ee),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&S(t,"input")&&G.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){E.event.special[e]={setup:function(){return Se(this,e,Ae),!1},trigger:function(){return Se(this,e),!0},delegateType:t}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each(function(){E.event.remove(this,e,n,t)})}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Le=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ie(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(G.hasData(e)&&(o=G.access(e),a=G.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)E.event.add(t,i,l[i][n]);K.hasData(e)&&(s=K.access(e),u=E.extend({},s),K.set(t,u))}}function Re(n,r,i,o){r=y.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,d=f-1,p=r[0],h=x(p);if(h||1<f&&"string"==typeof p&&!b.checkClone&&je.test(p))return n.each(function(e){var t=n.eq(e);h&&(r[0]=p.call(this,e,t.html())),Re(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ge(e,"script"),Pe)).length;c<f;c++)u=e,c!==d&&(u=E.clone(u,!0,!0),s&&E.merge(a,ge(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,He),c=0;c<s;c++)u=a[c],pe.test(u.type||"")&&!G.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):C(u.textContent.replace(qe,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ge(r)),r.parentNode&&(n&&oe(r)&&ve(ge(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(b.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ge(c),r=0,i=(o=ge(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&fe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(c),r=0,i=o.length;r<i;r++)Ie(o[r],a[r]);else Ie(e,c);return 0<(a=ge(c,"script")).length&&ve(a,!f&&ge(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(Q(n)){if(t=n[G.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[G.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return z(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Le.test(e)&&!he[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Re(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ge(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),We=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=g),t.getComputedStyle(e)},$e=new RegExp(re.join("|"),"i");function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=E.style(e,t)),!b.pixelBoxStyles()&&Me.test(a)&&$e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=g.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=v.createElement("div"),u=v.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===u.style.backgroundClip,E.extend(b,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var _e=["Webkit","Moz","ms"],Ue=v.createElement("div").style,Ve={};function Xe(e){var t=E.cssProps[e]||Ve[e];return t||(e in Ue?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in Ue)return e}(e)||e)}var Qe,Ye,Ge=/^(none|table(?!-c[ea]).+)/,Ke=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"};function et(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function tt(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+re[a]+"Width",!0,i))):(u+=E.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=E.css(e,"border"+re[a]+"Width",!0,i):s+=E.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function nt(e,t,n){var r=We(e),i=(!b.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Fe(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!b.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+tt(e,t,n||(i?"border":"content"),o,r,a)+"px"}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ke.test(t),l=e.style;if(u||(t=Xe(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=function(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&ne.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),b.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ke.test(t)||(t=Xe(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ze&&(i=Ze[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?nt(e,u,n):ue(e,Je,function(){return nt(e,u,n)})},set:function(e,t,n){var r,i=We(e),o=!b.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?tt(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-tt(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),et(0,t,s)}}}),E.cssHooks.marginLeft=ze(b.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=et)}),E.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=g.setTimeout(e,r);t.stop=function(){g.clearTimeout(n)}})},Qe=v.createElement("input"),Ye=v.createElement("select").appendChild(v.createElement("option")),Qe.type="checkbox",b.checkOn=""!==Qe.value,b.optSelected=Ye.selected,(Qe=v.createElement("input")).value="t",Qe.type="radio",b.radioValue="t"===Qe.value;var rt,it=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return z(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?rt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!b.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),rt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=it[t]||E.find.attr;it[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=it[o],it[o]=r,r=null!=a(e,t,n)?o:null,it[o]=i),r}});var ot=/^(?:input|select|textarea|button)$/i,at=/^(?:a|area)$/i;function st(e){return(e.match(I)||[]).join(" ")}function ut(e){return e.getAttribute&&e.getAttribute("class")||""}function lt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}E.fn.extend({prop:function(e,t){return z(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ot.test(e.nodeName)||at.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),b.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(x(t))return this.each(function(e){E(this).addClass(t.call(this,e,ut(this)))});if((e=lt(t)).length)while(n=this[u++])if(i=ut(n),r=1===n.nodeType&&" "+st(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=st(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(x(t))return this.each(function(e){E(this).removeClass(t.call(this,e,ut(this)))});if(!arguments.length)return this.attr("class","");if((e=lt(t)).length)while(n=this[u++])if(i=ut(n),r=1===n.nodeType&&" "+st(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=st(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):x(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,ut(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=E(this),r=lt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=ut(this))&&G.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":G.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+st(ut(n))+" ").indexOf(t))return!0;return!1}});var ct=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=x(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(ct,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:st(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},b.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),b.focusin="onfocusin"in g;var ft=/^(?:focusinfocus|focusoutblur)$/,dt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,d=[n||v],p=m.call(e,"type")?e.type:e,h=m.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||v,3!==n.nodeType&&8!==n.nodeType&&!ft.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(p=(h=p.split(".")).shift(),h.sort()),u=p.indexOf(":")<0&&"on"+p,(e=e[E.expando]?e:new E.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[p]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!w(n)){for(s=c.delegateType||p,ft.test(s+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o;a===(n.ownerDocument||v)&&d.push(a.defaultView||a.parentWindow||g)}i=0;while((o=d[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||p,(l=(G.get(o,"events")||{})[e.type]&&G.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&Q(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(d.pop(),t)||!Q(n)||u&&x(n[p])&&!w(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=p,e.isPropagationStopped()&&f.addEventListener(p,dt),n[p](),e.isPropagationStopped()&&f.removeEventListener(p,dt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),b.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=G.access(e,r);t||e.addEventListener(n,i,!0),G.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=G.access(e,r)-1;t?G.access(e,r,t):(e.removeEventListener(n,i,!0),G.remove(e,r))}}});var pt,ht=/\[\]$/,gt=/\r?\n/g,vt=/^(?:submit|button|image|reset|file)$/i,yt=/^(?:input|select|textarea|keygen)/i;function mt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||ht.test(n)?i(n,t):mt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==T(e))i(n,e);else for(t in e)mt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=x(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)mt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&yt.test(this.nodeName)&&!vt.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(gt,"\r\n")}}):{name:t.name,value:n.replace(gt,"\r\n")}}).get()}}),E.fn.extend({wrapAll:function(e){var t;return this[0]&&(x(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return x(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=x(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},b.createHTMLDocument=((pt=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===pt.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(b.createHTMLDocument?((r=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(r)):t=v),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),x(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||ie})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return z(this,function(e,t,n){var r;if(w(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=ze(b.pixelPosition,function(e,t){if(t)return t=Fe(e,n),Me.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return z(this,function(e,t,n){var r;return w(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),x(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=S,E.isFunction=x,E.isWindow=w,E.camelCase=X,E.type=T,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var bt=g.jQuery,xt=g.$;return E.noConflict=function(e){return g.$===E&&(g.$=xt),e&&g.jQuery===E&&(g.jQuery=bt),E},e||(g.jQuery=g.$=E),E});

;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

;/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;jQuery(document).ready(function() {
  jQuery(".logo-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  // steps
  $(".btn-circle").on("click", function() {
    $(".btn-circle.btn-primary")
      .removeClass("btn-primary")
      .addClass("btn-secondary");
    $(this)
      .addClass("btn-primary")
      .removeClass("btn-secondary")
      .blur();
  });

  $(".next-step, .prev-step").on("click", function(e) {
    var $activeTab = $(".tab-pane.active");

    $(".btn-circle.btn-primary")
      .removeClass("btn-primary")
      .addClass("btn-secondary");

    if ($(e.target).hasClass("next-step")) {
      var nextTab = $activeTab.next(".tab-pane").attr("id");
      $('[href="#' + nextTab + '"]')
        .addClass("btn-primary")
        .removeClass("btn-secondary");
      $('[href="#' + nextTab + '"]').tab("show");
    } else {
      var prevTab = $activeTab.prev(".tab-pane").attr("id");
      $('[href="#' + prevTab + '"]')
        .addClass("btn-primary")
        .removeClass("btn-secondary");
      $('[href="#' + prevTab + '"]').tab("show");
    }
  });
});

;function registerEvent(eventId, action) {
  const button = document.createElement("button");
  button.setAttribute("id", "example-widget-trigger");
  button.setAttribute("type", "button");
  document.body.appendChild(button);
  button.style.display = "none";
  setTimeout(() => {
    document.body.removeChild(button);
  }, 200);

  window.EBWidgets.createWidget({
    widgetType: "checkout",
    eventId: eventId,
    modal: true,
    modalTriggerElementId: "example-widget-trigger",
    onOrderComplete: action,
  });

  button.click();
}
;/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Quill=e():t.Quill=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=45)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n(18),i=n(19),l=n(48),a=n(49),s=n(50),u=n(51),c=n(52),f=n(11),h=n(29),p=n(30),d=n(28),y=n(1),v={Scope:y.Scope,create:y.create,find:y.find,query:y.query,register:y.register,Container:r.default,Format:o.default,Leaf:i.default,Embed:u.default,Scroll:l.default,Block:s.default,Inline:a.default,Text:c.default,Attributor:{Attribute:f.default,Class:h.default,Style:p.default,Store:d.default}};e.default=v},function(t,e,n){"use strict";function r(t,e){var n=i(t);if(null==n)throw new s("Unable to create "+t+" blot");var r=n;return new r(t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(e),e)}function o(t,n){return void 0===n&&(n=!1),null==t?null:null!=t[e.DATA_KEY]?t[e.DATA_KEY].blot:n?o(t.parentNode,n):null}function i(t,e){void 0===e&&(e=p.ANY);var n;if("string"==typeof t)n=h[t]||u[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)n=h.text;else if("number"==typeof t)t&p.LEVEL&p.BLOCK?n=h.block:t&p.LEVEL&p.INLINE&&(n=h.inline);else if(t instanceof HTMLElement){var r=(t.getAttribute("class")||"").split(/\s+/);for(var o in r)if(n=c[r[o]])break;n=n||f[t.tagName]}return null==n?null:e&p.LEVEL&n.scope&&e&p.TYPE&n.scope?n:null}function l(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length>1)return t.map(function(t){return l(t)});var n=t[0];if("string"!=typeof n.blotName&&"string"!=typeof n.attrName)throw new s("Invalid definition");if("abstract"===n.blotName)throw new s("Cannot register abstract class");if(h[n.blotName||n.attrName]=n,"string"==typeof n.keyName)u[n.keyName]=n;else if(null!=n.className&&(c[n.className]=n),null!=n.tagName){Array.isArray(n.tagName)?n.tagName=n.tagName.map(function(t){return t.toUpperCase()}):n.tagName=n.tagName.toUpperCase();var r=Array.isArray(n.tagName)?n.tagName:[n.tagName];r.forEach(function(t){null!=f[t]&&null!=n.className||(f[t]=n)})}return n}var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var n=this;return e="[Parchment] "+e,n=t.call(this,e)||this,n.message=e,n.name=n.constructor.name,n}return a(e,t),e}(Error);e.ParchmentError=s;var u={},c={},f={},h={};e.DATA_KEY="__blot";var p;!function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(p=e.Scope||(e.Scope={})),e.create=r,e.find=o,e.query=i,e.register=l},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},a=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var e=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!o)return!1;var i;for(i in t);return void 0===i||n.call(t,i)},s=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},u=function(t,e){if("__proto__"===e){if(!n.call(t,e))return;if(i)return i(t,e).value}return t[e]};t.exports=function t(){var e,n,r,o,i,c,f=arguments[0],h=1,p=arguments.length,d=!1;for("boolean"==typeof f&&(d=f,f=arguments[1]||{},h=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});h<p;++h)if(null!=(e=arguments[h]))for(n in e)r=u(f,n),o=u(e,n),f!==o&&(d&&o&&(a(o)||(i=l(o)))?(i?(i=!1,c=r&&l(r)?r:[]):c=r&&a(r)?r:{},s(f,{name:n,newValue:t(d,c,o)})):void 0!==o&&s(f,{name:n,newValue:o}));return f}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return null==t?e:("function"==typeof t.formats&&(e=(0,f.default)(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:a(t.parent,e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(2),f=r(c),h=n(4),p=r(h),d=n(0),y=r(d),v=n(14),b=r(v),g=n(5),m=r(g),_=n(8),O=r(_),w=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"attach",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attach",this).call(this),this.attributes=new y.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return(new p.default).insert(this.value(),(0,f.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(t,e){var n=y.default.query(t,y.default.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}},{key:"formatAt",value:function(t,e,n,r){this.format(n,r)}},{key:"insertAt",value:function(t,n,r){if("string"==typeof n&&n.endsWith("\n")){var o=y.default.create(x.blotName);this.parent.insertBefore(o,0===t?this:this.next),o.insertAt(0,n.slice(0,-1))}else u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r)}}]),e}(y.default.Embed);w.scope=y.default.Scope.BLOCK_BLOT;var x=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.cache={},n}return l(e,t),s(e,[{key:"delta",value:function(){return null==this.cache.delta&&(this.cache.delta=this.descendants(y.default.Leaf).reduce(function(t,e){return 0===e.length()?t:t.insert(e.value(),a(e))},new p.default).insert("\n",a(this))),this.cache.delta}},{key:"deleteAt",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),this.cache={}}},{key:"formatAt",value:function(t,n,r,o){n<=0||(y.default.query(r,y.default.Scope.BLOCK)?t+n===this.length()&&this.format(r,o):u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,Math.min(n,this.length()-t-1),r,o),this.cache={})}},{key:"insertAt",value:function(t,n,r){if(null!=r)return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);if(0!==n.length){var o=n.split("\n"),i=o.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});var l=this;o.reduce(function(t,e){return l=l.split(t,!0),l.insertAt(0,e),e.length},t+i.length)}}},{key:"insertBefore",value:function(t,n){var r=this.children.head;u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n),r instanceof b.default&&r.remove(),this.cache={}}},{key:"length",value:function(){return null==this.cache.length&&(this.cache.length=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveChildren",this).call(this,t,n),this.cache={}}},{key:"optimize",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.cache={}}},{key:"path",value:function(t){return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t,!0)}},{key:"removeChild",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeChild",this).call(this,t),this.cache={}}},{key:"split",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n&&(0===t||t>=this.length()-1)){var r=this.clone();return 0===t?(this.parent.insertBefore(r,this),this):(this.parent.insertBefore(r,this.next),r)}var o=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"split",this).call(this,t,n);return this.cache={},o}}]),e}(y.default.Block);x.blotName="block",x.tagName="P",x.defaultChild="break",x.allowedChildren=[m.default,y.default.Embed,O.default],e.bubbleFormats=a,e.BlockEmbed=w,e.default=x},function(t,e,n){var r=n(54),o=n(12),i=n(2),l=n(20),a=String.fromCharCode(0),s=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};s.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},s.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},s.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},s.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=i(!0,{},t),"object"==typeof n){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,"object"!=typeof(n=this.ops[e-1])))return this.ops.unshift(t),this;if(o(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},s.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},s.prototype.filter=function(t){return this.ops.filter(t)},s.prototype.forEach=function(t){this.ops.forEach(t)},s.prototype.map=function(t){return this.ops.map(t)},s.prototype.partition=function(t){var e=[],n=[];return this.forEach(function(r){(t(r)?e:n).push(r)}),[e,n]},s.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},s.prototype.changeLength=function(){return this.reduce(function(t,e){return e.insert?t+l.length(e):e.delete?t-e.delete:t},0)},s.prototype.length=function(){return this.reduce(function(t,e){return t+l.length(e)},0)},s.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var n=[],r=l.iterator(this.ops),o=0;o<e&&r.hasNext();){var i;o<t?i=r.next(t-o):(i=r.next(e-o),n.push(i)),o+=l.length(i)}return new s(n)},s.prototype.compose=function(t){var e=l.iterator(this.ops),n=l.iterator(t.ops),r=[],i=n.peek();if(null!=i&&"number"==typeof i.retain&&null==i.attributes){for(var a=i.retain;"insert"===e.peekType()&&e.peekLength()<=a;)a-=e.peekLength(),r.push(e.next());i.retain-a>0&&n.next(i.retain-a)}for(var u=new s(r);e.hasNext()||n.hasNext();)if("insert"===n.peekType())u.push(n.next());else if("delete"===e.peekType())u.push(e.next());else{var c=Math.min(e.peekLength(),n.peekLength()),f=e.next(c),h=n.next(c);if("number"==typeof h.retain){var p={};"number"==typeof f.retain?p.retain=c:p.insert=f.insert;var d=l.attributes.compose(f.attributes,h.attributes,"number"==typeof f.retain);if(d&&(p.attributes=d),u.push(p),!n.hasNext()&&o(u.ops[u.ops.length-1],p)){var y=new s(e.rest());return u.concat(y).chop()}}else"number"==typeof h.delete&&"number"==typeof f.retain&&u.push(h)}return u.chop()},s.prototype.concat=function(t){var e=new s(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},s.prototype.diff=function(t,e){if(this.ops===t.ops)return new s;var n=[this,t].map(function(e){return e.map(function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:a;var r=e===t?"on":"with";throw new Error("diff() called "+r+" non-document")}).join("")}),i=new s,u=r(n[0],n[1],e),c=l.iterator(this.ops),f=l.iterator(t.ops);return u.forEach(function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case r.INSERT:n=Math.min(f.peekLength(),e),i.push(f.next(n));break;case r.DELETE:n=Math.min(e,c.peekLength()),c.next(n),i.delete(n);break;case r.EQUAL:n=Math.min(c.peekLength(),f.peekLength(),e);var a=c.next(n),s=f.next(n);o(a.insert,s.insert)?i.retain(n,l.attributes.diff(a.attributes,s.attributes)):i.push(s).delete(n)}e-=n}}),i.chop()},s.prototype.eachLine=function(t,e){e=e||"\n";for(var n=l.iterator(this.ops),r=new s,o=0;n.hasNext();){if("insert"!==n.peekType())return;var i=n.peek(),a=l.length(i)-n.peekLength(),u="string"==typeof i.insert?i.insert.indexOf(e,a)-a:-1;if(u<0)r.push(n.next());else if(u>0)r.push(n.next(u));else{if(!1===t(r,n.next(1).attributes||{},o))return;o+=1,r=new s}}r.length()>0&&t(r,{},o)},s.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var n=l.iterator(this.ops),r=l.iterator(t.ops),o=new s;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())o.push(r.next());else{var i=Math.min(n.peekLength(),r.peekLength()),a=n.next(i),u=r.next(i);if(a.delete)continue;u.delete?o.push(u):o.retain(i,l.attributes.transform(a.attributes,u.attributes,e))}else o.retain(l.length(n.next()));return o.chop()},s.prototype.transformPosition=function(t,e){e=!!e;for(var n=l.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var o=n.peekLength(),i=n.peekType();n.next(),"delete"!==i?("insert"===i&&(r<t||!e)&&(t+=o),r+=o):t-=Math.min(o,t-r)}return t},t.exports=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(8),c=r(u),f=n(0),h=r(f),p=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"formatAt",value:function(t,n,r,o){if(e.compare(this.statics.blotName,r)<0&&h.default.query(r,h.default.Scope.BLOT)){var i=this.isolate(t,n);o&&i.wrap(r,o)}else s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o)}},{key:"optimize",value:function(t){if(s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.parent instanceof e&&e.compare(this.statics.blotName,this.parent.statics.blotName)>0){var n=this.parent.isolate(this.offset(),this.length());this.moveChildren(n),n.wrap(this)}}}],[{key:"compare",value:function(t,n){var r=e.order.indexOf(t),o=e.order.indexOf(n);return r>=0||o>=0?r-o:t===n?0:t<n?-1:1}}]),e}(h.default.Inline);p.allowedChildren=[p,h.default.Embed,c.default],p.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(e=(0,N.default)(!0,{container:t,modules:{clipboard:!0,keyboard:!0,history:!0}},e),e.theme&&e.theme!==S.DEFAULTS.theme){if(e.theme=S.import("themes/"+e.theme),null==e.theme)throw new Error("Invalid theme "+e.theme+". Did you register it?")}else e.theme=T.default;var n=(0,N.default)(!0,{},e.theme.DEFAULTS);[n,e].forEach(function(t){t.modules=t.modules||{},Object.keys(t.modules).forEach(function(e){!0===t.modules[e]&&(t.modules[e]={})})});var r=Object.keys(n.modules).concat(Object.keys(e.modules)),o=r.reduce(function(t,e){var n=S.import("modules/"+e);return null==n?P.error("Cannot load "+e+" module. Are you sure you registered it?"):t[e]=n.DEFAULTS||{},t},{});return null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={container:e.modules.toolbar}),e=(0,N.default)(!0,{},S.DEFAULTS,{modules:o},n,e),["bounds","container","scrollingContainer"].forEach(function(t){"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),e.modules=Object.keys(e.modules).reduce(function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),t},{}),e}function a(t,e,n,r){if(this.options.strict&&!this.isEnabled()&&e===g.default.sources.USER)return new d.default;var o=null==n?null:this.getSelection(),i=this.editor.delta,l=t();if(null!=o&&(!0===n&&(n=o.index),null==r?o=u(o,l,e):0!==r&&(o=u(o,n,r,e)),this.setSelection(o,g.default.sources.SILENT)),l.length()>0){var a,s=[g.default.events.TEXT_CHANGE,l,i,e];if((a=this.emitter).emit.apply(a,[g.default.events.EDITOR_CHANGE].concat(s)),e!==g.default.sources.SILENT){var c;(c=this.emitter).emit.apply(c,s)}}return l}function s(t,e,n,r,o){var i={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(o=r,r=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(o=r,r=n,n=e,e=0),"object"===(void 0===n?"undefined":c(n))?(i=n,o=r):"string"==typeof n&&(null!=r?i[n]=r:o=n),o=o||g.default.sources.API,[t,e,i,o]}function u(t,e,n,r){if(null==t)return null;var o=void 0,i=void 0;if(e instanceof d.default){var l=[t.index,t.index+t.length].map(function(t){return e.transformPosition(t,r!==g.default.sources.USER)}),a=f(l,2);o=a[0],i=a[1]}else{var s=[t.index,t.index+t.length].map(function(t){return t<e||t===e&&r===g.default.sources.USER?t:n>=0?t+n:Math.max(e,t+n)}),u=f(s,2);o=u[0],i=u[1]}return new x.Range(o,i-o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(53);var p=n(4),d=r(p),y=n(57),v=r(y),b=n(9),g=r(b),m=n(7),_=r(m),O=n(0),w=r(O),x=n(22),k=r(x),E=n(2),N=r(E),j=n(10),A=r(j),q=n(32),T=r(q),P=(0,A.default)("quill"),S=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),this.options=l(e,r),this.container=this.options.container,null==this.container)return P.error("Invalid Quill container",e);this.options.debug&&t.debug(this.options.debug);var o=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new g.default,this.scroll=w.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new v.default(this.scroll),this.selection=new k.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(g.default.events.EDITOR_CHANGE,function(t){t===g.default.events.TEXT_CHANGE&&n.root.classList.toggle("ql-blank",n.editor.isBlank())}),this.emitter.on(g.default.events.SCROLL_UPDATE,function(t,e){var r=n.selection.lastRange,o=r&&0===r.length?r.index:void 0;a.call(n,function(){return n.editor.update(null,e,o)},t)});var s=this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">"+o+"<p><br></p></div>");this.setContents(s),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return h(t,null,[{key:"debug",value:function(t){!0===t&&(t="log"),A.default.level(t)}},{key:"find",value:function(t){return t.__quill||w.default.find(t)}},{key:"import",value:function(t){return null==this.imports[t]&&P.error("Cannot import "+t+". Are you sure it was registered?"),this.imports[t]}},{key:"register",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){var o=t.attrName||t.blotName;"string"==typeof o?this.register("formats/"+o,t,e):Object.keys(t).forEach(function(r){n.register(r,t[r],e)})}else null==this.imports[t]||r||P.warn("Overwriting "+t+" with",e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName?w.default.register(e):t.startsWith("modules")&&"function"==typeof e.register&&e.register()}}]),h(t,[{key:"addContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){var n=t;t=document.createElement("div"),t.classList.add(n)}return this.container.insertBefore(t,e),t}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.deleteText(t,e)},n,t,-1*e)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}},{key:"focus",value:function(){var t=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=t,this.scrollIntoView()}},{key:"format",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.default.sources.API;return a.call(this,function(){var r=n.getSelection(!0),i=new d.default;if(null==r)return i;if(w.default.query(t,w.default.Scope.BLOCK))i=n.editor.formatLine(r.index,r.length,o({},t,e));else{if(0===r.length)return n.selection.format(t,e),i;i=n.editor.formatText(r.index,r.length,o({},t,e))}return n.setSelection(r,g.default.sources.SILENT),i},r)}},{key:"formatLine",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatLine(t,e,l)},o,t,0)}},{key:"formatText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatText(t,e,l)},o,t,0)}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=void 0;n="number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length);var r=this.container.getBoundingClientRect();return{bottom:n.bottom-r.top,height:n.height,left:n.left-r.left,right:n.right-r.left,top:n.top-r.top,width:n.width}}},{key:"getContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getContents(t,e)}},{key:"getFormat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}},{key:"getIndex",value:function(t){return t.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(t){return this.scroll.leaf(t)}},{key:"getLine",value:function(t){return this.scroll.line(t)}},{key:"getLines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}},{key:"getModule",value:function(t){return this.theme.modules[t]}},{key:"getSelection",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getText(t,e)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.sources.API;return a.call(this,function(){return o.editor.insertEmbed(e,n,r)},i,e)}},{key:"insertText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,0,n,r,o),c=f(u,4);return t=c[0],l=c[2],o=c[3],a.call(this,function(){return i.editor.insertText(t,e,l)},o,t,e.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}},{key:"removeFormat",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.removeFormat(t,e)},n,t)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API;return a.call(this,function(){t=new d.default(t);var n=e.getLength(),r=e.editor.deleteText(0,n),o=e.editor.applyDelta(t),i=o.ops[o.ops.length-1];return null!=i&&"string"==typeof i.insert&&"\n"===i.insert[i.insert.length-1]&&(e.editor.deleteText(e.getLength()-1,1),o.delete(1)),r.compose(o)},n)}},{key:"setSelection",value:function(e,n,r){if(null==e)this.selection.setRange(null,n||t.sources.API);else{var o=s(e,n,r),i=f(o,4);e=i[0],n=i[1],r=i[3],this.selection.setRange(new x.Range(e,n),r),r!==g.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API,n=(new d.default).insert(t);return this.setContents(n,e)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.default.sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}},{key:"updateContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API;return a.call(this,function(){return t=new d.default(t),e.editor.applyDelta(t,n)},n,!0)}}]),t}();S.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},S.events=g.default.events,S.sources=g.default.sources,S.version="1.3.7",S.imports={delta:d.default,parchment:w.default,"core/module":_.default,"core/theme":T.default},e.expandConfig=l,e.overload=s,e.default=S},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.quill=e,this.options=n};o.DEFAULTS={},e.default=o},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default.Text);e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(58),c=r(u),f=n(10),h=r(f),p=(0,h.default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(t){document.addEventListener(t,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t){if(t.__quill&&t.__quill.emitter){var n;(n=t.__quill.emitter).handleDOM.apply(n,e)}})})});var d=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.listeners={},t.on("error",p.error),t}return l(e,t),a(e,[{key:"emit",value:function(){p.log.apply(p,arguments),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(this.listeners[t.type]||[]).forEach(function(e){var r=e.node,o=e.handler;(t.target===r||r.contains(t.target))&&o.apply(void 0,[t].concat(n))})}},{key:"listenDOM",value:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}]),e}(c.default);d.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},d.sources={API:"api",SILENT:"silent",USER:"user"},e.default=d},function(t,e,n){"use strict";function r(t){if(i.indexOf(t)<=i.indexOf(l)){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=console)[t].apply(e,r)}}function o(t){return i.reduce(function(e,n){return e[n]=r.bind(console,n,t),e},{})}Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],l="warn";r.level=o.level=function(t){l=t},e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t,e,n){void 0===n&&(n={}),this.attrName=t,this.keyName=e;var o=r.Scope.TYPE&r.Scope.ATTRIBUTE;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|o:this.scope=r.Scope.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,function(t){return t.name})},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){return null!=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE))&&(null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1))},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){var e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""},t}();e.default=o},function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,c;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(s(t))return!!s(e)&&(t=l.call(t),e=l.call(e),u(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var f=a(t),h=a(e)}catch(t){return!1}if(f.length!=h.length)return!1;for(f.sort(),h.sort(),i=f.length-1;i>=0;i--)if(f[i]!=h[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!u(t[c],e[c],n))return!1;return typeof t==typeof e}var l=Array.prototype.slice,a=n(55),s=n(56),u=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(4),f=r(c),h=n(0),p=r(h),d=n(3),y=r(d),v=n(5),b=r(v),g=n(8),m=r(g),_=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(b.default);_.blotName="code",_.tagName="CODE";var O=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"delta",value:function(){var t=this,e=this.domNode.textContent;return e.endsWith("\n")&&(e=e.slice(0,-1)),e.split("\n").reduce(function(e,n){return e.insert(n).insert("\n",t.formats())},new f.default)}},{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n){var r=this.descendant(m.default,this.length()-1),o=a(r,1),i=o[0];null!=i&&i.deleteAt(i.length()-1,1),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}},{key:"formatAt",value:function(t,n,r,o){if(0!==n&&null!=p.default.query(r,p.default.Scope.BLOCK)&&(r!==this.statics.blotName||o!==this.statics.formats(this.domNode))){var i=this.newlineIndex(t);if(!(i<0||i>=t+n)){var l=this.newlineIndex(t,!0)+1,a=i-l+1,s=this.isolate(l,a),u=s.next;s.format(r,o),u instanceof e&&u.formatAt(0,t-l+n-a,r,o)}}}},{key:"insertAt",value:function(t,e,n){if(null==n){var r=this.descendant(m.default,t),o=a(r,2),i=o[0],l=o[1];i.insertAt(l,e)}}},{key:"length",value:function(){var t=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?t:t+1}},{key:"newlineIndex",value:function(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return this.domNode.textContent.slice(0,t).lastIndexOf("\n");var e=this.domNode.textContent.slice(t).indexOf("\n");return e>-1?t+e:-1}},{key:"optimize",value:function(t){this.domNode.textContent.endsWith("\n")||this.appendChild(p.default.create("text","\n")),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===n.statics.formats(n.domNode)&&(n.optimize(t),n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t){var e=p.default.find(t);null==e?t.parentNode.removeChild(t):e instanceof p.default.Embed?e.remove():e.unwrap()})}}],[{key:"create",value:function(t){var n=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("spellcheck",!1),n}},{key:"formats",value:function(){return!0}}]),e}(y.default);O.blotName="code-block",O.tagName="PRE",O.TAB="  ",e.Code=_,e.default=O},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"insertInto",value:function(t,n){0===t.children.length?a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertInto",this).call(this,t,n):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),e}(u.default.Embed);c.blotName="break",c.tagName="BR",e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n=document.createElement("a");n.href=t;var r=n.href.slice(0,n.href.indexOf(":"));return e.indexOf(r)>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(5),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);n=this.constructor.sanitize(n),this.domNode.setAttribute("href",n)}}],[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return t=this.sanitize(t),n.setAttribute("href",t),n.setAttribute("rel","noopener noreferrer"),n.setAttribute("target","_blank"),n}},{key:"formats",value:function(t){return t.getAttribute("href")}},{key:"sanitize",value:function(t){return l(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}}]),e}(c.default);f.blotName="link",f.tagName="A",f.SANITIZED_URL="about:blank",f.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=f,e.sanitize=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){t.setAttribute(e,!("true"===t.getAttribute(e)))}Object.defineProperty(e,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(25),u=r(s),c=n(106),f=r(c),h=0,p=function(){function t(e){var n=this;o(this,t),this.select=e,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){n.togglePicker()}),this.label.addEventListener("keydown",function(t){switch(t.keyCode){case u.default.keys.ENTER:n.togglePicker();break;case u.default.keys.ESCAPE:n.escape(),t.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}return a(t,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),i(this.label,"aria-expanded"),i(this.options,"aria-hidden")}},{key:"buildItem",value:function(t){var e=this,n=document.createElement("span");return n.tabIndex="0",n.setAttribute("role","button"),n.classList.add("ql-picker-item"),t.hasAttribute("value")&&n.setAttribute("data-value",t.getAttribute("value")),t.textContent&&n.setAttribute("data-label",t.textContent),n.addEventListener("click",function(){e.selectItem(n,!0)}),n.addEventListener("keydown",function(t){switch(t.keyCode){case u.default.keys.ENTER:e.selectItem(n,!0),t.preventDefault();break;case u.default.keys.ESCAPE:e.escape(),t.preventDefault()}}),n}},{key:"buildLabel",value:function(){var t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=f.default,t.tabIndex="0",t.setAttribute("role","button"),t.setAttribute("aria-expanded","false"),this.container.appendChild(t),t}},{key:"buildOptions",value:function(){var t=this,e=document.createElement("span");e.classList.add("ql-picker-options"),e.setAttribute("aria-hidden","true"),e.tabIndex="-1",e.id="ql-picker-options-"+h,h+=1,this.label.setAttribute("aria-controls",e.id),this.options=e,[].slice.call(this.select.options).forEach(function(n){var r=t.buildItem(n);e.appendChild(r),!0===n.selected&&t.selectItem(r)}),this.container.appendChild(e)}},{key:"buildPicker",value:function(){var t=this;[].slice.call(this.select.attributes).forEach(function(e){t.container.setAttribute(e.name,e.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var t=this;this.close(),setTimeout(function(){return t.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.container.querySelector(".ql-selected");if(t!==n&&(null!=n&&n.classList.remove("ql-selected"),null!=t&&(t.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(t.parentNode.children,t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e))){if("function"==typeof Event)this.select.dispatchEvent(new Event("change"));else if("object"===("undefined"==typeof Event?"undefined":l(Event))){var r=document.createEvent("Event");r.initEvent("change",!0,!0),this.select.dispatchEvent(r)}this.close()}}},{key:"update",value:function(){var t=void 0;if(this.select.selectedIndex>-1){var e=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(e)}else this.selectItem(null);var n=null!=t&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",n)}}]),t}();e.default=p},function(t,e,n){"use strict";function r(t){var e=a.find(t);if(null==e)try{e=a.create(t)}catch(n){e=a.create(a.Scope.INLINE),[].slice.call(t.childNodes).forEach(function(t){e.domNode.appendChild(t)}),t.parentNode&&t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(47),l=n(27),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.build(),n}return o(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){t.prototype.attach.call(this),this.children.forEach(function(t){t.attach()})},e.prototype.build=function(){var t=this;this.children=new i.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(e){try{var n=r(e);t.insertBefore(n,t.children.head||void 0)}catch(t){if(t instanceof a.ParchmentError)return;throw t}})},e.prototype.deleteAt=function(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,function(t,e,n){t.deleteAt(e,n)})},e.prototype.descendant=function(t,n){var r=this.children.find(n),o=r[0],i=r[1];return null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t?[o,i]:o instanceof e?o.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_VALUE);var o=[],i=r;return this.children.forEachAt(n,r,function(n,r,l){(null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t)&&o.push(n),n instanceof e&&(o=o.concat(n.descendants(t,r,i))),i-=l}),o},e.prototype.detach=function(){this.children.forEach(function(t){t.detach()}),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,n,r){this.children.forEachAt(t,e,function(t,e,o){t.formatAt(e,o,n,r)})},e.prototype.insertAt=function(t,e,n){var r=this.children.find(t),o=r[0],i=r[1];if(o)o.insertAt(i,e,n);else{var l=null==n?a.create("text",e):a.create(e,n);this.appendChild(l)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some(function(e){return t instanceof e}))throw new a.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce(function(t,e){return t+e.length()},0)},e.prototype.moveChildren=function(t,e){this.children.forEach(function(n){t.insertBefore(n,e)})},e.prototype.optimize=function(e){if(t.prototype.optimize.call(this,e),0===this.children.length)if(null!=this.statics.defaultChild){var n=a.create(this.statics.defaultChild);this.appendChild(n),n.optimize(e)}else this.remove()},e.prototype.path=function(t,n){void 0===n&&(n=!1);var r=this.children.find(t,n),o=r[0],i=r[1],l=[[this,t]];return o instanceof e?l.concat(o.path(i,n)):(null!=o&&l.push([o,i]),l)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),t.prototype.replace.call(this,n)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=this.clone();return this.parent.insertBefore(n,this.next),this.children.forEachAt(t,this.length(),function(t,r,o){t=t.split(r,e),n.appendChild(t)}),n},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t,e){var n=this,o=[],i=[];t.forEach(function(t){t.target===n.domNode&&"childList"===t.type&&(o.push.apply(o,t.addedNodes),i.push.apply(i,t.removedNodes))}),i.forEach(function(t){if(!(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var e=a.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==n.domNode||e.detach())}}),o.filter(function(t){return t.parentNode==n.domNode}).sort(function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(t){var e=null;null!=t.nextSibling&&(e=a.find(t.nextSibling));var o=r(t);o.next==e&&null!=o.next||(null!=o.parent&&o.parent.removeChild(n),n.insertBefore(o,e||void 0))})},e}(l.default);e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(28),l=n(17),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.attributes=new i.default(n.domNode),n}return r(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.format=function(t,e){var n=a.query(t);n instanceof o.default?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,n){var r=t.prototype.replaceWith.call(this,e,n);return this.attributes.copy(r),r},e.prototype.update=function(e,n){var r=this;t.prototype.update.call(this,e,n),e.some(function(t){return t.target===r.domNode&&"attributes"===t.type})&&this.attributes.build()},e.prototype.wrap=function(n,r){var o=t.prototype.wrap.call(this,n,r);return o instanceof e&&o.statics.scope===this.statics.scope&&this.attributes.move(o),o},e}(l.default);e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),i=n(1),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},e.prototype.position=function(t,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]},e.prototype.value=function(){var t;return t={},t[this.statics.blotName]=this.statics.value(this.domNode)||!0,t},e.scope=i.Scope.INLINE_BLOT,e}(o.default);e.default=l},function(t,e,n){function r(t){this.ops=t,this.index=0,this.offset=0}var o=n(12),i=n(2),l={attributes:{compose:function(t,e,n){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=i(!0,{},e);n||(r=Object.keys(r).reduce(function(t,e){return null!=r[e]&&(t[e]=r[e]),t},{}));for(var o in t)void 0!==t[o]&&void 0===e[o]&&(r[o]=t[o]);return Object.keys(r).length>0?r:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=Object.keys(t).concat(Object.keys(e)).reduce(function(n,r){return o(t[r],e[r])||(n[r]=void 0===e[r]?null:e[r]),n},{});return Object.keys(n).length>0?n:void 0},transform:function(t,e,n){if("object"!=typeof t)return e;if("object"==typeof e){if(!n)return e;var r=Object.keys(e).reduce(function(n,r){return void 0===t[r]&&(n[r]=e[r]),n},{});return Object.keys(r).length>0?r:void 0}}},iterator:function(t){return new r(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};r.prototype.hasNext=function(){return this.peekLength()<1/0},r.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,r=l.length(e);if(t>=r-n?(t=r-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},r.prototype.peek=function(){return this.ops[this.index]},r.prototype.peekLength=function(){return this.ops[this.index]?l.length(this.ops[this.index])-this.offset:1/0},r.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},r.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,n=this.next(),r=this.ops.slice(this.index);return this.offset=t,this.index=e,[n].concat(r)}return[]},t.exports=l},function(t,e){var n=function(){"use strict";function t(t,e){return null!=e&&t instanceof e}function e(n,r,o,i,c){function f(n,o){if(null===n)return null;if(0===o)return n;var y,v;if("object"!=typeof n)return n;if(t(n,a))y=new a;else if(t(n,s))y=new s;else if(t(n,u))y=new u(function(t,e){n.then(function(e){t(f(e,o-1))},function(t){e(f(t,o-1))})});else if(e.__isArray(n))y=[];else if(e.__isRegExp(n))y=new RegExp(n.source,l(n)),n.lastIndex&&(y.lastIndex=n.lastIndex);else if(e.__isDate(n))y=new Date(n.getTime());else{if(d&&Buffer.isBuffer(n))return y=Buffer.allocUnsafe?Buffer.allocUnsafe(n.length):new Buffer(n.length),n.copy(y),y;t(n,Error)?y=Object.create(n):void 0===i?(v=Object.getPrototypeOf(n),y=Object.create(v)):(y=Object.create(i),v=i)}if(r){var b=h.indexOf(n);if(-1!=b)return p[b];h.push(n),p.push(y)}t(n,a)&&n.forEach(function(t,e){var n=f(e,o-1),r=f(t,o-1);y.set(n,r)}),t(n,s)&&n.forEach(function(t){var e=f(t,o-1);y.add(e)});for(var g in n){var m;v&&(m=Object.getOwnPropertyDescriptor(v,g)),m&&null==m.set||(y[g]=f(n[g],o-1))}if(Object.getOwnPropertySymbols)for(var _=Object.getOwnPropertySymbols(n),g=0;g<_.length;g++){var O=_[g],w=Object.getOwnPropertyDescriptor(n,O);(!w||w.enumerable||c)&&(y[O]=f(n[O],o-1),w.enumerable||Object.defineProperty(y,O,{enumerable:!1}))}if(c)for(var x=Object.getOwnPropertyNames(n),g=0;g<x.length;g++){var k=x[g],w=Object.getOwnPropertyDescriptor(n,k);w&&w.enumerable||(y[k]=f(n[k],o-1),Object.defineProperty(y,k,{enumerable:!1}))}return y}"object"==typeof r&&(o=r.depth,i=r.prototype,c=r.includeNonEnumerable,r=r.circular);var h=[],p=[],d="undefined"!=typeof Buffer;return void 0===r&&(r=!0),void 0===o&&(o=1/0),f(n,o)}function n(t){return Object.prototype.toString.call(t)}function r(t){return"object"==typeof t&&"[object Date]"===n(t)}function o(t){return"object"==typeof t&&"[object Array]"===n(t)}function i(t){return"object"==typeof t&&"[object RegExp]"===n(t)}function l(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}var a;try{a=Map}catch(t){a=function(){}}var s;try{s=Set}catch(t){s=function(){}}var u;try{u=Promise}catch(t){u=function(){}}return e.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},e.__objToStr=n,e.__isDate=r,e.__isArray=o,e.__isRegExp=i,e.__getRegExpFlags=l,e}();"object"==typeof t&&t.exports&&(t.exports=n)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){try{e.parentNode}catch(t){return!1}return e instanceof Text&&(e=e.parentNode),t.contains(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),c=r(u),f=n(21),h=r(f),p=n(12),d=r(p),y=n(9),v=r(y),b=n(10),g=r(b),m=(0,g.default)("quill:selection"),_=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,t),this.index=e,this.length=n},O=function(){function t(e,n){var r=this;i(this,t),this.emitter=n,this.scroll=e,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=c.default.create("cursor",this),this.lastRange=this.savedRange=new _(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){r.mouseDown||setTimeout(r.update.bind(r,v.default.sources.USER),1)}),this.emitter.on(v.default.events.EDITOR_CHANGE,function(t,e){t===v.default.events.TEXT_CHANGE&&e.length()>0&&r.update(v.default.sources.SILENT)}),this.emitter.on(v.default.events.SCROLL_BEFORE_UPDATE,function(){if(r.hasFocus()){var t=r.getNativeRange();null!=t&&t.start.node!==r.cursor.textNode&&r.emitter.once(v.default.events.SCROLL_UPDATE,function(){try{r.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(t){}})}}),this.emitter.on(v.default.events.SCROLL_OPTIMIZE,function(t,e){if(e.range){var n=e.range,o=n.startNode,i=n.startOffset,l=n.endNode,a=n.endOffset;r.setNativeRange(o,i,l,a)}}),this.update(v.default.sources.SILENT)}return s(t,[{key:"handleComposition",value:function(){var t=this;this.root.addEventListener("compositionstart",function(){t.composing=!0}),this.root.addEventListener("compositionend",function(){if(t.composing=!1,t.cursor.parent){var e=t.cursor.restore();if(!e)return;setTimeout(function(){t.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)},1)}})}},{key:"handleDragging",value:function(){var t=this;this.emitter.listenDOM("mousedown",document.body,function(){t.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){t.mouseDown=!1,t.update(v.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(t,e){if(null==this.scroll.whitelist||this.scroll.whitelist[t]){this.scroll.update();var n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!c.default.query(t,c.default.Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){var r=c.default.find(n.start.node,!1);if(null==r)return;if(r instanceof c.default.Leaf){var o=r.split(n.start.offset);r.parent.insertBefore(this.cursor,o)}else r.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;var r=void 0,o=this.scroll.leaf(t),i=a(o,2),l=i[0],s=i[1];if(null==l)return null;var u=l.position(s,!0),c=a(u,2);r=c[0],s=c[1];var f=document.createRange();if(e>0){f.setStart(r,s);var h=this.scroll.leaf(t+e),p=a(h,2);if(l=p[0],s=p[1],null==l)return null;var d=l.position(s,!0),y=a(d,2);return r=y[0],s=y[1],f.setEnd(r,s),f.getBoundingClientRect()}var v="left",b=void 0;return r instanceof Text?(s<r.data.length?(f.setStart(r,s),f.setEnd(r,s+1)):(f.setStart(r,s-1),f.setEnd(r,s),v="right"),b=f.getBoundingClientRect()):(b=l.domNode.getBoundingClientRect(),s>0&&(v="right")),{bottom:b.top+b.height,height:b.height,left:b[v],right:b[v],top:b.top,width:0}}},{key:"getNativeRange",value:function(){var t=document.getSelection();if(null==t||t.rangeCount<=0)return null;var e=t.getRangeAt(0);if(null==e)return null;var n=this.normalizeNative(e);return m.info("getNativeRange",n),n}},{key:"getRange",value:function(){var t=this.getNativeRange();return null==t?[null,null]:[this.normalizedToRange(t),t]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(t){var e=this,n=[[t.start.node,t.start.offset]];t.native.collapsed||n.push([t.end.node,t.end.offset]);var r=n.map(function(t){var n=a(t,2),r=n[0],o=n[1],i=c.default.find(r,!0),l=i.offset(e.scroll);return 0===o?l:i instanceof c.default.Container?l+i.length():l+i.index(r,o)}),i=Math.min(Math.max.apply(Math,o(r)),this.scroll.length()-1),l=Math.min.apply(Math,[i].concat(o(r)));return new _(l,i-l)}},{key:"normalizeNative",value:function(t){if(!l(this.root,t.startContainer)||!t.collapsed&&!l(this.root,t.endContainer))return null;var e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach(function(t){for(var e=t.node,n=t.offset;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;e=e.lastChild,n=e instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n}),e}},{key:"rangeToNative",value:function(t){var e=this,n=t.collapsed?[t.index]:[t.index,t.index+t.length],r=[],o=this.scroll.length();return n.forEach(function(t,n){t=Math.min(o-1,t);var i=void 0,l=e.scroll.leaf(t),s=a(l,2),u=s[0],c=s[1],f=u.position(c,0!==n),h=a(f,2);i=h[0],c=h[1],r.push(i,c)}),r.length<2&&(r=r.concat(r)),r}},{key:"scrollIntoView",value:function(t){var e=this.lastRange;if(null!=e){var n=this.getBounds(e.index,e.length);if(null!=n){var r=this.scroll.length()-1,o=this.scroll.line(Math.min(e.index,r)),i=a(o,1),l=i[0],s=l;if(e.length>0){var u=this.scroll.line(Math.min(e.index+e.length,r));s=a(u,1)[0]}if(null!=l&&null!=s){var c=t.getBoundingClientRect();n.top<c.top?t.scrollTop-=c.top-n.top:n.bottom>c.bottom&&(t.scrollTop+=n.bottom-c.bottom)}}}}},{key:"setNativeRange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m.info("setNativeRange",t,e,n,r),null==t||null!=this.root.parentNode&&null!=t.parentNode&&null!=n.parentNode){var i=document.getSelection();if(null!=i)if(null!=t){this.hasFocus()||this.root.focus();var l=(this.getNativeRange()||{}).native;if(null==l||o||t!==l.startContainer||e!==l.startOffset||n!==l.endContainer||r!==l.endOffset){"BR"==t.tagName&&(e=[].indexOf.call(t.parentNode.childNodes,t),t=t.parentNode),"BR"==n.tagName&&(r=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode);var a=document.createRange();a.setStart(t,e),a.setEnd(n,r),i.removeAllRanges(),i.addRange(a)}}else i.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.default.sources.API;if("string"==typeof e&&(n=e,e=!1),m.info("setRange",t),null!=t){var r=this.rangeToNative(t);this.setNativeRange.apply(this,o(r).concat([e]))}else this.setNativeRange(null);this.update(n)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.default.sources.USER,e=this.lastRange,n=this.getRange(),r=a(n,2),o=r[0],i=r[1];if(this.lastRange=o,null!=this.lastRange&&(this.savedRange=this.lastRange),!(0,d.default)(e,this.lastRange)){var l;!this.composing&&null!=i&&i.native.collapsed&&i.start.node!==this.cursor.textNode&&this.cursor.restore();var s=[v.default.events.SELECTION_CHANGE,(0,h.default)(this.lastRange),(0,h.default)(e),t];if((l=this.emitter).emit.apply(l,[v.default.events.EDITOR_CHANGE].concat(s)),t!==v.default.sources.SILENT){var u;(u=this.emitter).emit.apply(u,s)}}}}]),t}();e.Range=_,e.default=O},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=r(a),u=n(3),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s.default.Container);f.allowedChildren=[c.default,u.BlockEmbed,f],e.default=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"value",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t);return n.startsWith("rgb(")?(n=n.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+n.split(",").map(function(t){return("00"+parseInt(t).toString(16)).slice(-2)}).join("")):n}}]),e}(u.default.Attributor.Style),f=new u.default.Attributor.Class("color","ql-color",{scope:u.default.Scope.INLINE}),h=new c("color","color",{scope:u.default.Scope.INLINE});e.ColorAttributor=c,e.ColorClass=f,e.ColorStyle=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n,r=t===D.keys.LEFT?"prefix":"suffix";return n={key:t,shiftKey:e,altKey:null},o(n,r,/^$/),o(n,"handler",function(n){var r=n.index;t===D.keys.RIGHT&&(r+=n.length+1);var o=this.quill.getLeaf(r);return!(b(o,1)[0]instanceof T.default.Embed)||(t===D.keys.LEFT?e?this.quill.setSelection(n.index-1,n.length+1,S.default.sources.USER):this.quill.setSelection(n.index-1,S.default.sources.USER):e?this.quill.setSelection(n.index,n.length+1,S.default.sources.USER):this.quill.setSelection(n.index+n.length+1,S.default.sources.USER),!1)}),n}function u(t,e){if(!(0===t.index||this.quill.getLength()<=1)){var n=this.quill.getLine(t.index),r=b(n,1),o=r[0],i={};if(0===e.offset){var l=this.quill.getLine(t.index-1),a=b(l,1),s=a[0];if(null!=s&&s.length()>1){var u=o.formats(),c=this.quill.getFormat(t.index-1,1);i=A.default.attributes.diff(u,c)||{}}}var f=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;this.quill.deleteText(t.index-f,f,S.default.sources.USER),Object.keys(i).length>0&&this.quill.formatLine(t.index-f,f,i,S.default.sources.USER),this.quill.focus()}}function c(t,e){var n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(!(t.index>=this.quill.getLength()-n)){var r={},o=0,i=this.quill.getLine(t.index),l=b(i,1),a=l[0];if(e.offset>=a.length()-1){var s=this.quill.getLine(t.index+1),u=b(s,1),c=u[0];if(c){var f=a.formats(),h=this.quill.getFormat(t.index,1);r=A.default.attributes.diff(f,h)||{},o=c.length()}}this.quill.deleteText(t.index,n,S.default.sources.USER),Object.keys(r).length>0&&this.quill.formatLine(t.index+o-1,n,r,S.default.sources.USER)}}function f(t){var e=this.quill.getLines(t),n={};if(e.length>1){var r=e[0].formats(),o=e[e.length-1].formats();n=A.default.attributes.diff(o,r)||{}}this.quill.deleteText(t,S.default.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(t.index,1,n,S.default.sources.USER),this.quill.setSelection(t.index,S.default.sources.SILENT),this.quill.focus()}function h(t,e){var n=this;t.length>0&&this.quill.scroll.deleteAt(t.index,t.length);var r=Object.keys(e.format).reduce(function(t,n){return T.default.query(n,T.default.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t},{});this.quill.insertText(t.index,"\n",r,S.default.sources.USER),this.quill.setSelection(t.index+1,S.default.sources.SILENT),this.quill.focus(),Object.keys(e.format).forEach(function(t){null==r[t]&&(Array.isArray(e.format[t])||"link"!==t&&n.quill.format(t,e.format[t],S.default.sources.USER))})}function p(t){return{key:D.keys.TAB,shiftKey:!t,format:{"code-block":!0},handler:function(e){var n=T.default.query("code-block"),r=e.index,o=e.length,i=this.quill.scroll.descendant(n,r),l=b(i,2),a=l[0],s=l[1];if(null!=a){var u=this.quill.getIndex(a),c=a.newlineIndex(s,!0)+1,f=a.newlineIndex(u+s+o),h=a.domNode.textContent.slice(c,f).split("\n");s=0,h.forEach(function(e,i){t?(a.insertAt(c+s,n.TAB),s+=n.TAB.length,0===i?r+=n.TAB.length:o+=n.TAB.length):e.startsWith(n.TAB)&&(a.deleteAt(c+s,n.TAB.length),s-=n.TAB.length,0===i?r-=n.TAB.length:o-=n.TAB.length),s+=e.length+1}),this.quill.update(S.default.sources.USER),this.quill.setSelection(r,o,S.default.sources.SILENT)}}}}function d(t){return{key:t[0].toUpperCase(),shortKey:!0,handler:function(e,n){this.quill.format(t,!n.format[t],S.default.sources.USER)}}}function y(t){if("string"==typeof t||"number"==typeof t)return y({key:t});if("object"===(void 0===t?"undefined":v(t))&&(t=(0,_.default)(t,!1)),"string"==typeof t.key)if(null!=D.keys[t.key.toUpperCase()])t.key=D.keys[t.key.toUpperCase()];else{if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}return t.shortKey&&(t[B]=t.shortKey,delete t.shortKey),t}Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),m=n(21),_=r(m),O=n(12),w=r(O),x=n(2),k=r(x),E=n(4),N=r(E),j=n(20),A=r(j),q=n(0),T=r(q),P=n(6),S=r(P),C=n(10),L=r(C),M=n(7),R=r(M),I=(0,L.default)("quill:keyboard"),B=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",D=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.bindings={},Object.keys(r.options.bindings).forEach(function(e){("list autofill"!==e||null==t.scroll.whitelist||t.scroll.whitelist.list)&&r.options.bindings[e]&&r.addBinding(r.options.bindings[e])}),r.addBinding({key:e.keys.ENTER,shiftKey:null},h),r.addBinding({key:e.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0},u),r.addBinding({key:e.keys.DELETE},{collapsed:!0},c)):(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},u),r.addBinding({key:e.keys.DELETE},{collapsed:!0,suffix:/^.?$/},c)),r.addBinding({key:e.keys.BACKSPACE},{collapsed:!1},f),r.addBinding({key:e.keys.DELETE},{collapsed:!1},f),r.addBinding({key:e.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},u),r.listen(),r}return a(e,t),g(e,null,[{key:"match",value:function(t,e){return e=y(e),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(n){return!!e[n]!==t[n]&&null!==e[n]})&&e.key===(t.which||t.keyCode)}}]),g(e,[{key:"addBinding",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=y(t);if(null==r||null==r.key)return I.warn("Attempted to add invalid keyboard binding",r);"function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=(0,k.default)(r,e,n),this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}},{key:"listen",value:function(){var t=this;this.quill.root.addEventListener("keydown",function(n){if(!n.defaultPrevented){var r=n.which||n.keyCode,o=(t.bindings[r]||[]).filter(function(t){return e.match(n,t)});if(0!==o.length){var i=t.quill.getSelection();if(null!=i&&t.quill.hasFocus()){var l=t.quill.getLine(i.index),a=b(l,2),s=a[0],u=a[1],c=t.quill.getLeaf(i.index),f=b(c,2),h=f[0],p=f[1],d=0===i.length?[h,p]:t.quill.getLeaf(i.index+i.length),y=b(d,2),g=y[0],m=y[1],_=h instanceof T.default.Text?h.value().slice(0,p):"",O=g instanceof T.default.Text?g.value().slice(m):"",x={collapsed:0===i.length,empty:0===i.length&&s.length()<=1,format:t.quill.getFormat(i),offset:u,prefix:_,suffix:O};o.some(function(e){if(null!=e.collapsed&&e.collapsed!==x.collapsed)return!1;if(null!=e.empty&&e.empty!==x.empty)return!1;if(null!=e.offset&&e.offset!==x.offset)return!1;if(Array.isArray(e.format)){if(e.format.every(function(t){return null==x.format[t]}))return!1}else if("object"===v(e.format)&&!Object.keys(e.format).every(function(t){return!0===e.format[t]?null!=x.format[t]:!1===e.format[t]?null==x.format[t]:(0,w.default)(e.format[t],x.format[t])}))return!1;return!(null!=e.prefix&&!e.prefix.test(x.prefix))&&(!(null!=e.suffix&&!e.suffix.test(x.suffix))&&!0!==e.handler.call(t,i,x))})&&n.preventDefault()}}}})}}]),e}(R.default);D.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},D.DEFAULTS={bindings:{bold:d("bold"),italic:d("italic"),underline:d("underline"),indent:{key:D.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","+1",S.default.sources.USER)}},outdent:{key:D.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","-1",S.default.sources.USER)}},"outdent backspace":{key:D.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(t,e){null!=e.format.indent?this.quill.format("indent","-1",S.default.sources.USER):null!=e.format.list&&this.quill.format("list",!1,S.default.sources.USER)}},"indent code-block":p(!0),"outdent code-block":p(!1),"remove tab":{key:D.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(t){this.quill.deleteText(t.index-1,1,S.default.sources.USER)}},tab:{key:D.keys.TAB,handler:function(t){this.quill.history.cutoff();var e=(new N.default).retain(t.index).delete(t.length).insert("\t");this.quill.updateContents(e,S.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index+1,S.default.sources.SILENT)}},"list empty enter":{key:D.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){this.quill.format("list",!1,S.default.sources.USER),e.format.indent&&this.quill.format("indent",!1,S.default.sources.USER)}},"checklist enter":{key:D.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(t){var e=this.quill.getLine(t.index),n=b(e,2),r=n[0],o=n[1],i=(0,k.default)({},r.formats(),{list:"checked"}),l=(new N.default).retain(t.index).insert("\n",i).retain(r.length()-o-1).retain(1,{list:"unchecked"});this.quill.updateContents(l,S.default.sources.USER),this.quill.setSelection(t.index+1,S.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:D.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(t,e){var n=this.quill.getLine(t.index),r=b(n,2),o=r[0],i=r[1],l=(new N.default).retain(t.index).insert("\n",e.format).retain(o.length()-i-1).retain(1,{header:null});this.quill.updateContents(l,S.default.sources.USER),this.quill.setSelection(t.index+1,S.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(t,e){var n=e.prefix.length,r=this.quill.getLine(t.index),o=b(r,2),i=o[0],l=o[1];if(l>n)return!0;var a=void 0;switch(e.prefix.trim()){case"[]":case"[ ]":a="unchecked";break;case"[x]":a="checked";break;case"-":case"*":a="bullet";break;default:a="ordered"}this.quill.insertText(t.index," ",S.default.sources.USER),this.quill.history.cutoff();var s=(new N.default).retain(t.index-l).delete(n+1).retain(i.length()-2-l).retain(1,{list:a});this.quill.updateContents(s,S.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index-n,S.default.sources.SILENT)}},"code exit":{key:D.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(t){var e=this.quill.getLine(t.index),n=b(e,2),r=n[0],o=n[1],i=(new N.default).retain(t.index+r.length()-o-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(i,S.default.sources.USER)}},"embed left":s(D.keys.LEFT,!1),"embed left shift":s(D.keys.LEFT,!0),"embed right":s(D.keys.RIGHT,!1),"embed right shift":s(D.keys.RIGHT,!0)}},e.default=D,e.SHORTKEY=B},function(t,e,n){"use strict";t.exports={align:{"":n(75),center:n(76),right:n(77),justify:n(78)},background:n(79),blockquote:n(80),bold:n(81),clean:n(82),code:n(40),"code-block":n(40),color:n(83),direction:{"":n(84),rtl:n(85)},float:{center:n(86),full:n(87),left:n(88),right:n(89)},formula:n(90),header:{1:n(91),2:n(92)},italic:n(93),image:n(94),indent:{"+1":n(95),"-1":n(96)},link:n(97),list:{ordered:n(98),bullet:n(99),check:n(100)},script:{sub:n(101),super:n(102)},strike:n(103),underline:n(104),video:n(105)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t){this.domNode=t,this.domNode[r.DATA_KEY]={blot:this}}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){null!=this.parent&&(this.scroll=this.parent.scroll)},t.prototype.clone=function(){var t=this.domNode.cloneNode(!1);return r.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]},t.prototype.deleteAt=function(t,e){this.isolate(t,e).remove()},t.prototype.formatAt=function(t,e,n,o){var i=this.isolate(t,e);if(null!=r.query(n,r.Scope.BLOT)&&o)i.wrap(n,o);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){var l=r.create(this.statics.scope);i.wrap(l),l.format(n,o)}},t.prototype.insertAt=function(t,e,n){var o=null==n?r.create("text",e):r.create(e,n),i=this.split(t);this.parent.insertBefore(o,i)},t.prototype.insertInto=function(t,e){void 0===e&&(e=null),null!=this.parent&&this.parent.children.remove(this);var n=null;t.children.insertBefore(this,e),null!=e&&(n=e.domNode),this.domNode.parentNode==t.domNode&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,n),this.parent=t,this.attach()},t.prototype.isolate=function(t,e){var n=this.split(t);return n.split(e),n},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(t){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var n="string"==typeof t?r.create(t,e):t;return n.replace(this),n},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t,e){},t.prototype.wrap=function(t,e){var n="string"==typeof t?r.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n},t.blotName="abstract",t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n(29),i=n(30),l=n(1),a=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=r.default.keys(this.domNode),n=o.default.keys(this.domNode),a=i.default.keys(this.domNode);e.concat(n).concat(a).forEach(function(e){var n=l.query(e,l.Scope.ATTRIBUTE);n instanceof r.default&&(t.attributes[n.attrName]=n)})},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach(function(n){var r=e.attributes[n].value(e.domNode);t.format(n,r)})},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach(function(t){e.attributes[t].remove(e.domNode)}),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce(function(e,n){return e[n]=t.attributes[n].value(t.domNode),e},{})},t}();e.default=a},function(t,e,n){"use strict";function r(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter(function(t){return 0===t.indexOf(e+"-")})}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map(function(t){return t.split("-").slice(0,-1).join("-")})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){r(t,this.keyName).forEach(function(e){t.classList.remove(e)}),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=r(t,this.keyName)[0]||"",n=e.slice(this.keyName.length+1);return this.canAdd(t,n)?n:""},e}(i.default);e.default=l},function(t,e,n){"use strict";function r(t){var e=t.split("-"),n=e.slice(1).map(function(t){return t[0].toUpperCase()+t.slice(1)}).join("");return e[0]+n}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map(function(t){return t.split(":")[0].trim()})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[r(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[r(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){var e=t.style[r(this.keyName)];return this.canAdd(t,e)?e:""},e}(i.default);e.default=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),h=n(8),p=r(h),d=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.selection=n,r.textNode=document.createTextNode(e.CONTENTS),r.domNode.appendChild(r.textNode),r._length=0,r}return l(e,t),u(e,null,[{key:"value",value:function(){}}]),u(e,[{key:"detach",value:function(){null!=this.parent&&this.parent.removeChild(this)}},{key:"format",value:function(t,n){if(0!==this._length)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);for(var r=this,o=0;null!=r&&r.statics.scope!==f.default.Scope.BLOCK_BLOT;)o+=r.offset(r.parent),r=r.parent;null!=r&&(this._length=e.CONTENTS.length,r.optimize(),r.formatAt(o,e.CONTENTS.length,t,n),this._length=0)}},{key:"index",value:function(t,n){return t===this.textNode?0:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&null!=this.parent){var t=this.textNode,n=this.selection.getNativeRange(),r=void 0,o=void 0,i=void 0;if(null!=n&&n.start.node===t&&n.end.node===t){var l=[t,n.start.offset,n.end.offset];r=l[0],o=l[1],i=l[2]}for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==e.CONTENTS){var s=this.textNode.data.split(e.CONTENTS).join("");this.next instanceof p.default?(r=this.next.domNode,this.next.insertAt(0,s),this.textNode.data=e.CONTENTS):(this.textNode.data=s,this.parent.insertBefore(f.default.create(this.textNode),this),this.textNode=document.createTextNode(e.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),null!=o){var u=[o,i].map(function(t){return Math.max(0,Math.min(r.data.length,t-1))}),c=a(u,2);return o=c[0],i=c[1],{startNode:r,startOffset:o,endNode:r,endOffset:i}}}}},{key:"update",value:function(t,e){var n=this;if(t.some(function(t){return"characterData"===t.type&&t.target===n.textNode})){var r=this.restore();r&&(e.range=r)}}},{key:"value",value:function(){return""}}]),e}(f.default.Embed);d.blotName="cursor",d.className="ql-cursor",d.tagName="span",d.CONTENTS="\ufeff",e.default=d},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){r(this,t),this.quill=e,this.options=n,this.modules={}}return o(t,[{key:"init",value:function(){var t=this;Object.keys(this.options.modules).forEach(function(e){null==t.modules[e]&&t.addModule(e)})}},{key:"addModule",value:function(t){var e=this.quill.constructor.import("modules/"+t);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}]),t}();i.DEFAULTS={modules:{}},i.themes={default:i},e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(0),c=r(u),f=n(8),h=r(f),p="\ufeff",d=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.contentNode=document.createElement("span"),n.contentNode.setAttribute("contenteditable",!1),[].slice.call(n.domNode.childNodes).forEach(function(t){n.contentNode.appendChild(t)}),n.leftGuard=document.createTextNode(p),n.rightGuard=document.createTextNode(p),n.domNode.appendChild(n.leftGuard),n.domNode.appendChild(n.contentNode),n.domNode.appendChild(n.rightGuard),n}return l(e,t),a(e,[{key:"index",value:function(t,n){return t===this.leftGuard?0:t===this.rightGuard?1:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"restore",value:function(t){var e=void 0,n=void 0,r=t.data.split(p).join("");if(t===this.leftGuard)if(this.prev instanceof h.default){var o=this.prev.length();this.prev.insertAt(o,r),e={startNode:this.prev.domNode,startOffset:o+r.length}}else n=document.createTextNode(r),this.parent.insertBefore(c.default.create(n),this),e={startNode:n,startOffset:r.length};else t===this.rightGuard&&(this.next instanceof h.default?(this.next.insertAt(0,r),e={startNode:this.next.domNode,startOffset:r.length}):(n=document.createTextNode(r),this.parent.insertBefore(c.default.create(n),this.next),e={startNode:n,startOffset:r.length}));return t.data=p,e}},{key:"update",value:function(t,e){var n=this;t.forEach(function(t){if("characterData"===t.type&&(t.target===n.leftGuard||t.target===n.rightGuard)){var r=n.restore(t.target);r&&(e.range=r)}})}}]),e}(c.default.Embed);e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={scope:o.default.Scope.BLOCK,whitelist:["right","center","justify"]},l=new o.default.Attributor.Attribute("align","align",i),a=new o.default.Attributor.Class("align","ql-align",i),s=new o.default.Attributor.Style("align","text-align",i);e.AlignAttribute=l,e.AlignClass=a,e.AlignStyle=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(24),l=new o.default.Attributor.Class("background","ql-bg",{scope:o.default.Scope.INLINE}),a=new i.ColorAttributor("background","background-color",{scope:o.default.Scope.INLINE});e.BackgroundClass=l,e.BackgroundStyle=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={scope:o.default.Scope.BLOCK,whitelist:["rtl"]},l=new o.default.Attributor.Attribute("direction","dir",i),a=new o.default.Attributor.Class("direction","ql-direction",i),s=new o.default.Attributor.Style("direction","direction",i);e.DirectionAttribute=l,e.DirectionClass=a,e.DirectionStyle=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c={scope:u.default.Scope.INLINE,whitelist:["serif","monospace"]},f=new u.default.Attributor.Class("font","ql-font",c),h=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"value",value:function(t){return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t).replace(/["']/g,"")}}]),e}(u.default.Attributor.Style),p=new h("font","font-family",c);e.FontStyle=p,e.FontClass=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=new o.default.Attributor.Class("size","ql-size",{scope:o.default.Scope.INLINE,whitelist:["small","large","huge"]}),l=new o.default.Attributor.Style("size","font-size",{scope:o.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=i,e.SizeStyle=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(5),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"optimize",value:function(t){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),e}(u.default);c.blotName="bold",c.tagName=["STRONG","B"],e.default=c},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(16),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.label.innerHTML=n,i.container.classList.add("ql-color-picker"),[].slice.call(i.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(t){t.classList.add("ql-primary")}),i}return i(e,t),l(e,[{key:"buildItem",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"buildItem",this).call(this,t);return n.style.backgroundColor=t.getAttribute("value")||"",n}},{key:"selectItem",value:function(t,n){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n);var r=this.label.querySelector(".ql-color-label"),o=t?t.getAttribute("data-value")||"":"";r&&("line"===r.tagName?r.style.stroke=o:r.style.fill=o)}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(16),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.container.classList.add("ql-icon-picker"),[].forEach.call(i.container.querySelectorAll(".ql-picker-item"),function(t){t.innerHTML=n[t.getAttribute("data-value")||""]}),i.defaultItem=i.container.querySelector(".ql-selected"),i.selectItem(i.defaultItem),i}return i(e,t),l(e,[{key:"selectItem",value:function(t,n){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n),t=t||this.defaultItem,this.label.innerHTML=t.innerHTML}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){var o=this;r(this,t),this.quill=e,this.boundsContainer=n||document.body,this.root=e.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){o.root.style.marginTop=-1*o.quill.root.scrollTop+"px"}),this.hide()}return o(t,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(t){var e=t.left+t.width/2-this.root.offsetWidth/2,n=t.bottom+this.quill.root.scrollTop;this.root.style.left=e+"px",this.root.style.top=n+"px",this.root.classList.remove("ql-flip");var r=this.boundsContainer.getBoundingClientRect(),o=this.root.getBoundingClientRect(),i=0;if(o.right>r.right&&(i=r.right-o.right,this.root.style.left=e+i+"px"),o.left<r.left&&(i=r.left-o.left,this.root.style.left=e+i+"px"),o.bottom>r.bottom){var l=o.bottom-o.top,a=t.bottom-t.top+l;this.root.style.top=n-a+"px",this.root.classList.add("ql-flip")}return i}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),t}();e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return e?(e[1]||"https")+"://www.youtube.com/embed/"+e[2]+"?showinfo=0":(e=t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(e[1]||"https")+"://player.vimeo.com/video/"+e[2]+"/":t}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.forEach(function(e){var r=document.createElement("option");e===n?r.setAttribute("selected","selected"):r.setAttribute("value",e),t.appendChild(r)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},f=n(2),h=r(f),p=n(4),d=r(p),y=n(9),v=r(y),b=n(25),g=r(b),m=n(32),_=r(m),O=n(41),w=r(O),x=n(42),k=r(x),E=n(16),N=r(E),j=n(43),A=r(j),q=[!1,"center","right","justify"],T=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],P=[!1,"serif","monospace"],S=["1","2","3",!1],C=["small",!1,"large","huge"],L=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=function e(n){if(!document.body.contains(t.root))return document.body.removeEventListener("click",e);null==r.tooltip||r.tooltip.root.contains(n.target)||document.activeElement===r.tooltip.textbox||r.quill.hasFocus()||r.tooltip.hide(),null!=r.pickers&&r.pickers.forEach(function(t){t.container.contains(n.target)||t.close()})};return t.emitter.listenDOM("click",document.body,l),r}return l(e,t),u(e,[{key:"addModule",value:function(t){var n=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addModule",this).call(this,t);return"toolbar"===t&&this.extendToolbar(n),n}},{key:"buildButtons",value:function(t,e){t.forEach(function(t){(t.getAttribute("class")||"").split(/\s+/).forEach(function(n){if(n.startsWith("ql-")&&(n=n.slice("ql-".length),null!=e[n]))if("direction"===n)t.innerHTML=e[n][""]+e[n].rtl;else if("string"==typeof e[n])t.innerHTML=e[n];else{var r=t.value||"";null!=r&&e[n][r]&&(t.innerHTML=e[n][r])}})})}},{key:"buildPickers",value:function(t,e){var n=this;this.pickers=t.map(function(t){if(t.classList.contains("ql-align"))return null==t.querySelector("option")&&s(t,q),new k.default(t,e.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var n=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&s(t,T,"background"===n?"#ffffff":"#000000"),new w.default(t,e[n])}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?s(t,P):t.classList.contains("ql-header")?s(t,S):t.classList.contains("ql-size")&&s(t,C)),new N.default(t)});var r=function(){n.pickers.forEach(function(t){t.update()})};this.quill.on(v.default.events.EDITOR_CHANGE,r)}}]),e}(_.default);L.DEFAULTS=(0,h.default)(!0,{},_.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var t=this,e=this.container.querySelector("input.ql-image[type=file]");null==e&&(e=document.createElement("input"),e.setAttribute("type","file"),e.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),e.classList.add("ql-image"),e.addEventListener("change",function(){if(null!=e.files&&null!=e.files[0]){var n=new FileReader;n.onload=function(n){var r=t.quill.getSelection(!0);t.quill.updateContents((new d.default).retain(r.index).delete(r.length).insert({image:n.target.result}),v.default.sources.USER),t.quill.setSelection(r.index+1,v.default.sources.SILENT),e.value=""},n.readAsDataURL(e.files[0])}}),this.container.appendChild(e)),e.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var M=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.textbox=r.root.querySelector('input[type="text"]'),r.listen(),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;this.textbox.addEventListener("keydown",function(e){g.default.match(e,"enter")?(t.save(),e.preventDefault()):g.default.match(e,"escape")&&(t.cancel(),e.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"link",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=e?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+t)||""),this.root.setAttribute("data-mode",t)}},{key:"restoreFocus",value:function(){var t=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=t}},{key:"save",value:function(){var t=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var e=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",t,v.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",t,v.default.sources.USER)),this.quill.root.scrollTop=e;break;case"video":t=a(t);case"formula":if(!t)break;var n=this.quill.getSelection(!0);if(null!=n){var r=n.index+n.length;this.quill.insertEmbed(r,this.root.getAttribute("data-mode"),t,v.default.sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(r+1," ",v.default.sources.USER),this.quill.setSelection(r+2,v.default.sources.USER)}}this.textbox.value="",this.hide()}}]),e}(A.default);e.BaseTooltip=M,e.default=L},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(46),i=r(o),l=n(34),a=n(36),s=n(62),u=n(63),c=r(u),f=n(64),h=r(f),p=n(65),d=r(p),y=n(35),v=n(24),b=n(37),g=n(38),m=n(39),_=r(m),O=n(66),w=r(O),x=n(15),k=r(x),E=n(67),N=r(E),j=n(68),A=r(j),q=n(69),T=r(q),P=n(70),S=r(P),C=n(71),L=r(C),M=n(13),R=r(M),I=n(72),B=r(I),D=n(73),U=r(D),F=n(74),H=r(F),K=n(26),z=r(K),V=n(16),Z=r(V),W=n(41),G=r(W),Y=n(42),X=r(Y),$=n(43),Q=r($),J=n(107),tt=r(J),et=n(108),nt=r(et);i.default.register({"attributors/attribute/direction":a.DirectionAttribute,"attributors/class/align":l.AlignClass,"attributors/class/background":y.BackgroundClass,"attributors/class/color":v.ColorClass,"attributors/class/direction":a.DirectionClass,"attributors/class/font":b.FontClass,"attributors/class/size":g.SizeClass,"attributors/style/align":l.AlignStyle,"attributors/style/background":y.BackgroundStyle,"attributors/style/color":v.ColorStyle,"attributors/style/direction":a.DirectionStyle,"attributors/style/font":b.FontStyle,"attributors/style/size":g.SizeStyle},!0),i.default.register({"formats/align":l.AlignClass,"formats/direction":a.DirectionClass,"formats/indent":s.IndentClass,"formats/background":y.BackgroundStyle,"formats/color":v.ColorStyle,"formats/font":b.FontClass,"formats/size":g.SizeClass,"formats/blockquote":c.default,"formats/code-block":R.default,"formats/header":h.default,"formats/list":d.default,"formats/bold":_.default,"formats/code":M.Code,"formats/italic":w.default,"formats/link":k.default,"formats/script":N.default,"formats/strike":A.default,"formats/underline":T.default,"formats/image":S.default,"formats/video":L.default,"formats/list/item":p.ListItem,"modules/formula":B.default,"modules/syntax":U.default,"modules/toolbar":H.default,"themes/bubble":tt.default,"themes/snow":nt.default,"ui/icons":z.default,"ui/picker":Z.default,"ui/icon-picker":X.default,"ui/color-picker":G.default,"ui/tooltip":Q.default},!0),e.default=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=r(o),l=n(6),a=r(l),s=n(3),u=r(s),c=n(14),f=r(c),h=n(23),p=r(h),d=n(31),y=r(d),v=n(33),b=r(v),g=n(5),m=r(g),_=n(59),O=r(_),w=n(8),x=r(w),k=n(60),E=r(k),N=n(61),j=r(N),A=n(25),q=r(A);a.default.register({"blots/block":u.default,"blots/block/embed":s.BlockEmbed,"blots/break":f.default,"blots/container":p.default,"blots/cursor":y.default,"blots/embed":b.default,"blots/inline":m.default,"blots/scroll":O.default,"blots/text":x.default,"modules/clipboard":E.default,"modules/history":j.default,"modules/keyboard":q.default}),i.default.register(u.default,f.default,y.default,m.default,O.default,x.default),e.default=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.head=this.tail=null,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,n=this.iterator();e=n();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t&&(t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)},t.prototype.offset=function(t){for(var e=0,n=this.head;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var n,r=this.iterator();n=r();){var o=n.length();if(t<o||e&&t===o&&(null==n.next||0!==n.next.length()))return[n,t];t-=o}return[null,0]},t.prototype.forEach=function(t){for(var e,n=this.iterator();e=n();)t(e)},t.prototype.forEachAt=function(t,e,n){if(!(e<=0))for(var r,o=this.find(t),i=o[0],l=o[1],a=t-l,s=this.iterator(i);(r=s())&&a<t+e;){var u=r.length();t>a?n(r,t-a,Math.min(e,a+u-t)):n(r,0,Math.min(u,t+e-a)),a+=u}},t.prototype.map=function(t){return this.reduce(function(e,n){return e.push(t(n)),e},[])},t.prototype.reduce=function(t,e){for(var n,r=this.iterator();n=r();)e=t(e,n);return e},t}();e.default=r},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n(1),l={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},a=function(t){function e(e){var n=t.call(this,e)||this;return n.scroll=n,n.observer=new MutationObserver(function(t){n.update(t)}),n.observer.observe(n.domNode,l),n.attach(),n}return r(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,n){this.update(),0===e&&n===this.length()?this.children.forEach(function(t){t.remove()}):t.prototype.deleteAt.call(this,e,n)},e.prototype.formatAt=function(e,n,r,o){this.update(),t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){this.update(),t.prototype.insertAt.call(this,e,n,r)},e.prototype.optimize=function(e,n){var r=this;void 0===e&&(e=[]),void 0===n&&(n={}),t.prototype.optimize.call(this,n);for(var l=[].slice.call(this.observer.takeRecords());l.length>0;)e.push(l.pop());for(var a=function(t,e){void 0===e&&(e=!0),null!=t&&t!==r&&null!=t.domNode.parentNode&&(null==t.domNode[i.DATA_KEY].mutations&&(t.domNode[i.DATA_KEY].mutations=[]),e&&a(t.parent))},s=function(t){null!=t.domNode[i.DATA_KEY]&&null!=t.domNode[i.DATA_KEY].mutations&&(t instanceof o.default&&t.children.forEach(s),t.optimize(n))},u=e,c=0;u.length>0;c+=1){if(c>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(u.forEach(function(t){var e=i.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(a(i.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,function(t){var e=i.find(t,!1);a(e,!1),e instanceof o.default&&e.children.forEach(function(t){a(t,!1)})})):"attributes"===t.type&&a(e.prev)),a(e))}),this.children.forEach(s),u=[].slice.call(this.observer.takeRecords()),l=u.slice();l.length>0;)e.push(l.pop())}},e.prototype.update=function(e,n){var r=this;void 0===n&&(n={}),e=e||this.observer.takeRecords(),e.map(function(t){var e=i.find(t.target,!0);return null==e?null:null==e.domNode[i.DATA_KEY].mutations?(e.domNode[i.DATA_KEY].mutations=[t],e):(e.domNode[i.DATA_KEY].mutations.push(t),null)}).forEach(function(t){null!=t&&t!==r&&null!=t.domNode[i.DATA_KEY]&&t.update(t.domNode[i.DATA_KEY].mutations||[],n)}),null!=this.domNode[i.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[i.DATA_KEY].mutations,n),this.optimize(e,n)},e.blotName="scroll",e.defaultChild="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="DIV",e}(o.default);e.default=a},function(t,e,n){"use strict";function r(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(18),l=n(1),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){if(n.tagName!==e.tagName)return t.formats.call(this,n)},e.prototype.format=function(n,r){var o=this;n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):(this.children.forEach(function(t){t instanceof i.default||(t=t.wrap(e.blotName,!0)),o.attributes.copy(t)}),this.unwrap())},e.prototype.formatAt=function(e,n,r,o){if(null!=this.formats()[r]||l.query(r,l.Scope.ATTRIBUTE)){this.isolate(e,n).format(r,o)}else t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n);var o=this.formats();if(0===Object.keys(o).length)return this.unwrap();var i=this.next;i instanceof e&&i.prev===this&&r(o,i.formats())&&(i.moveChildren(this),i.remove())},e.blotName="inline",e.scope=l.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i.default);e.default=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=n(1),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(n){var r=i.query(e.blotName).tagName;if(n.tagName!==r)return t.formats.call(this,n)},e.prototype.format=function(n,r){null!=i.query(n,i.Scope.BLOCK)&&(n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,n,r,o){null!=i.query(r,i.Scope.BLOCK)?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){if(null==r||null!=i.query(n,i.Scope.INLINE))t.prototype.insertAt.call(this,e,n,r);else{var o=this.split(e),l=i.create(n,r);o.parent.insertBefore(l,o)}},e.prototype.update=function(e,n){navigator.userAgent.match(/Trident/)?this.build():t.prototype.update.call(this,e,n)},e.blotName="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="P",e}(o.default);e.default=l},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(t){},e.prototype.format=function(e,n){t.prototype.formatAt.call(this,0,this.length(),e,n)},e.prototype.formatAt=function(e,n,r,o){0===e&&n===this.length()?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(o.default);e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=n(1),l=function(t){function e(e){var n=t.call(this,e)||this;return n.text=n.statics.value(n.domNode),n}return r(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){var e=t.data;return e.normalize&&(e=e.normalize()),e},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,n,r){null==r?(this.text=this.text.slice(0,e)+n+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,n,r)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=i.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},e.prototype.update=function(t,e){var n=this;t.some(function(t){return"characterData"===t.type&&t.target===n.domNode})&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=i.Scope.INLINE_BLOT,e}(o.default);e.default=l},function(t,e,n){"use strict";var r=document.createElement("div");if(r.classList.toggle("test-class",!1),r.classList.contains("test-class")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return arguments.length>1&&!this.contains(t)==!e?e:o.call(this,t)}}String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.indexOf(t,e);return-1!==r&&r===e}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++)if(e=n[i],t.call(o,e,i,n))return e}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,e){function n(t,e,n){if(t==e)return t?[[v,t]]:[];(n<0||t.length<n)&&(n=null);var o=l(t,e),i=t.substring(0,o);t=t.substring(o),e=e.substring(o),o=a(t,e);var s=t.substring(t.length-o);t=t.substring(0,t.length-o),e=e.substring(0,e.length-o);var c=r(t,e);return i&&c.unshift([v,i]),s&&c.push([v,s]),u(c),null!=n&&(c=f(c,n)),c=h(c)}function r(t,e){var r;if(!t)return[[y,e]];if(!e)return[[d,t]];var i=t.length>e.length?t:e,l=t.length>e.length?e:t,a=i.indexOf(l);if(-1!=a)return r=[[y,i.substring(0,a)],[v,l],[y,i.substring(a+l.length)]],t.length>e.length&&(r[0][0]=r[2][0]=d),r;if(1==l.length)return[[d,t],[y,e]];var u=s(t,e);if(u){var c=u[0],f=u[1],h=u[2],p=u[3],b=u[4],g=n(c,h),m=n(f,p);return g.concat([[v,b]],m)}return o(t,e)}function o(t,e){for(var n=t.length,r=e.length,o=Math.ceil((n+r)/2),l=o,a=2*o,s=new Array(a),u=new Array(a),c=0;c<a;c++)s[c]=-1,u[c]=-1;s[l+1]=0,u[l+1]=0;for(var f=n-r,h=f%2!=0,p=0,v=0,b=0,g=0,m=0;m<o;m++){for(var _=-m+p;_<=m-v;_+=2){var O,w=l+_;O=_==-m||_!=m&&s[w-1]<s[w+1]?s[w+1]:s[w-1]+1;for(var x=O-_;O<n&&x<r&&t.charAt(O)==e.charAt(x);)O++,x++;if(s[w]=O,O>n)v+=2;else if(x>r)p+=2;else if(h){var k=l+f-_;if(k>=0&&k<a&&-1!=u[k]){var E=n-u[k];if(O>=E)return i(t,e,O,x)}}}for(var N=-m+b;N<=m-g;N+=2){var E,k=l+N;E=N==-m||N!=m&&u[k-1]<u[k+1]?u[k+1]:u[k-1]+1;for(var j=E-N;E<n&&j<r&&t.charAt(n-E-1)==e.charAt(r-j-1);)E++,j++;if(u[k]=E,E>n)g+=2;else if(j>r)b+=2;else if(!h){var w=l+f-N;if(w>=0&&w<a&&-1!=s[w]){var O=s[w],x=l+O-w;if(E=n-E,O>=E)return i(t,e,O,x)}}}}return[[d,t],[y,e]]}function i(t,e,r,o){var i=t.substring(0,r),l=e.substring(0,o),a=t.substring(r),s=e.substring(o),u=n(i,l),c=n(a,s);return u.concat(c)}function l(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(i,o)==e.substring(i,o)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function a(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function s(t,e){function n(t,e,n){for(var r,o,i,s,u=t.substring(n,n+Math.floor(t.length/4)),c=-1,f="";-1!=(c=e.indexOf(u,c+1));){var h=l(t.substring(n),e.substring(c)),p=a(t.substring(0,n),e.substring(0,c));f.length<p+h&&(f=e.substring(c-p,c)+e.substring(c,c+h),r=t.substring(0,n-p),o=t.substring(n+h),i=e.substring(0,c-p),s=e.substring(c+h))}return 2*f.length>=t.length?[r,o,i,s,f]:null}var r=t.length>e.length?t:e,o=t.length>e.length?e:t;if(r.length<4||2*o.length<r.length)return null;var i,s=n(r,o,Math.ceil(r.length/4)),u=n(r,o,Math.ceil(r.length/2));if(!s&&!u)return null;i=u?s&&s[4].length>u[4].length?s:u:s;var c,f,h,p;return t.length>e.length?(c=i[0],f=i[1],h=i[2],p=i[3]):(h=i[0],p=i[1],c=i[2],f=i[3]),[c,f,h,p,i[4]]}function u(t){t.push([v,""]);for(var e,n=0,r=0,o=0,i="",s="";n<t.length;)switch(t[n][0]){case y:o++,s+=t[n][1],n++;break;case d:r++,i+=t[n][1],n++;break;case v:r+o>1?(0!==r&&0!==o&&(e=l(s,i),0!==e&&(n-r-o>0&&t[n-r-o-1][0]==v?t[n-r-o-1][1]+=s.substring(0,e):(t.splice(0,0,[v,s.substring(0,e)]),n++),s=s.substring(e),i=i.substring(e)),0!==(e=a(s,i))&&(t[n][1]=s.substring(s.length-e)+t[n][1],s=s.substring(0,s.length-e),i=i.substring(0,i.length-e))),0===r?t.splice(n-o,r+o,[y,s]):0===o?t.splice(n-r,r+o,[d,i]):t.splice(n-r-o,r+o,[d,i],[y,s]),n=n-r-o+(r?1:0)+(o?1:0)+1):0!==n&&t[n-1][0]==v?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,o=0,r=0,i="",s=""}""===t[t.length-1][1]&&t.pop();var c=!1;for(n=1;n<t.length-1;)t[n-1][0]==v&&t[n+1][0]==v&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),c=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),c=!0)),n++;c&&u(t)}function c(t,e){if(0===e)return[v,t];for(var n=0,r=0;r<t.length;r++){var o=t[r];if(o[0]===d||o[0]===v){var i=n+o[1].length;if(e===i)return[r+1,t];if(e<i){t=t.slice();var l=e-n,a=[o[0],o[1].slice(0,l)],s=[o[0],o[1].slice(l)];return t.splice(r,1,a,s),[r+1,t]}n=i}}throw new Error("cursor_pos is out of bounds!")}function f(t,e){var n=c(t,e),r=n[1],o=n[0],i=r[o],l=r[o+1];if(null==i)return t;if(i[0]!==v)return t;if(null!=l&&i[1]+l[1]===l[1]+i[1])return r.splice(o,2,l,i),p(r,o,2);if(null!=l&&0===l[1].indexOf(i[1])){r.splice(o,2,[l[0],i[1]],[0,i[1]]);var a=l[1].slice(i[1].length);return a.length>0&&r.splice(o+2,0,[l[0],a]),p(r,o,3)}return t}function h(t){for(var e=!1,n=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},r=2;r<t.length;r+=1)t[r-2][0]===v&&function(t){return t.charCodeAt(t.length-1)>=55296&&t.charCodeAt(t.length-1)<=56319}(t[r-2][1])&&t[r-1][0]===d&&n(t[r-1][1])&&t[r][0]===y&&n(t[r][1])&&(e=!0,t[r-1][1]=t[r-2][1].slice(-1)+t[r-1][1],t[r][1]=t[r-2][1].slice(-1)+t[r][1],t[r-2][1]=t[r-2][1].slice(0,-1));if(!e)return t;for(var o=[],r=0;r<t.length;r+=1)t[r][1].length>0&&o.push(t[r]);return o}function p(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var o=t[r],i=t[r+1];o[0]===i[1]&&t.splice(r,2,[o[0],o[1]+i[1]])}return t}var d=-1,y=1,v=0,b=n;b.INSERT=y,b.DELETE=d,b.EQUAL=v,t.exports=b},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return Object.keys(e).reduce(function(n,r){return null==t[r]?n:(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]],n)},{})}function a(t){return t.reduce(function(t,e){if(1===e.insert){var n=(0,N.default)(e.attributes);return delete n.image,t.insert({image:e.attributes.image},n)}if(null==e.attributes||!0!==e.attributes.list&&!0!==e.attributes.bullet||(e=(0,N.default)(e),e.attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",delete e.attributes.bullet)),"string"==typeof e.insert){var r=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(r,e.attributes)}return t.push(e)},new h.default)}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(4),h=r(f),p=n(20),d=r(p),y=n(0),v=r(y),b=n(13),g=r(b),m=n(31),_=r(m),O=n(3),w=r(O),x=n(14),k=r(x),E=n(21),N=r(E),j=n(12),A=r(j),q=n(2),T=r(q),P=/^[ -~]*$/,S=function(){function t(e){i(this,t),this.scroll=e,this.delta=this.getDelta()}return c(t,[{key:"applyDelta",value:function(t){var e=this,n=!1;this.scroll.update();var r=this.scroll.length();return this.scroll.batchStart(),t=a(t),t.reduce(function(t,o){var i=o.retain||o.delete||o.insert.length||1,l=o.attributes||{};if(null!=o.insert){if("string"==typeof o.insert){var a=o.insert;a.endsWith("\n")&&n&&(n=!1,a=a.slice(0,-1)),t>=r&&!a.endsWith("\n")&&(n=!0),e.scroll.insertAt(t,a);var c=e.scroll.line(t),f=u(c,2),h=f[0],p=f[1],y=(0,T.default)({},(0,O.bubbleFormats)(h));if(h instanceof w.default){var b=h.descendant(v.default.Leaf,p),g=u(b,1),m=g[0];y=(0,T.default)(y,(0,O.bubbleFormats)(m))}l=d.default.attributes.diff(y,l)||{}}else if("object"===s(o.insert)){var _=Object.keys(o.insert)[0];if(null==_)return t;e.scroll.insertAt(t,_,o.insert[_])}r+=i}return Object.keys(l).forEach(function(n){e.scroll.formatAt(t,i,n,l[n])}),t+i},0),t.reduce(function(t,n){return"number"==typeof n.delete?(e.scroll.deleteAt(t,n.delete),t):t+(n.retain||n.insert.length||1)},0),this.scroll.batchEnd(),this.update(t)}},{key:"deleteText",value:function(t,e){return this.scroll.deleteAt(t,e),this.update((new h.default).retain(t).delete(e))}},{key:"formatLine",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.scroll.update(),Object.keys(r).forEach(function(o){if(null==n.scroll.whitelist||n.scroll.whitelist[o]){var i=n.scroll.lines(t,Math.max(e,1)),l=e;i.forEach(function(e){var i=e.length();if(e instanceof g.default){var a=t-e.offset(n.scroll),s=e.newlineIndex(a+l)-a+1;e.formatAt(a,s,o,r[o])}else e.format(o,r[o]);l-=i})}}),this.scroll.optimize(),this.update((new h.default).retain(t).retain(e,(0,N.default)(r)))}},{key:"formatText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e,o,r[o])}),this.update((new h.default).retain(t).retain(e,(0,N.default)(r)))}},{key:"getContents",value:function(t,e){return this.delta.slice(t,t+e)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(t,e){return t.concat(e.delta())},new h.default)}},{key:"getFormat",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach(function(t){var e=u(t,1),o=e[0];o instanceof w.default?n.push(o):o instanceof v.default.Leaf&&r.push(o)}):(n=this.scroll.lines(t,e),r=this.scroll.descendants(v.default.Leaf,t,e));var o=[n,r].map(function(t){if(0===t.length)return{};for(var e=(0,O.bubbleFormats)(t.shift());Object.keys(e).length>0;){var n=t.shift();if(null==n)return e;e=l((0,O.bubbleFormats)(n),e)}return e});return T.default.apply(T.default,o)}},{key:"getText",value:function(t,e){return this.getContents(t,e).filter(function(t){return"string"==typeof t.insert}).map(function(t){return t.insert}).join("")}},{key:"insertEmbed",value:function(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new h.default).retain(t).insert(o({},e,n)))}},{key:"insertText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e.length,o,r[o])}),this.update((new h.default).retain(t).insert(e,(0,N.default)(r)))}},{key:"isBlank",value:function(){if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;var t=this.scroll.children.head;return t.statics.blotName===w.default.blotName&&(!(t.children.length>1)&&t.children.head instanceof k.default)}},{key:"removeFormat",value:function(t,e){var n=this.getText(t,e),r=this.scroll.line(t+e),o=u(r,2),i=o[0],l=o[1],a=0,s=new h.default;null!=i&&(a=i instanceof g.default?i.newlineIndex(l)-l+1:i.length()-l,s=i.delta().slice(l,l+a-1).insert("\n"));var c=this.getContents(t,e+a),f=c.diff((new h.default).insert(n).concat(s)),p=(new h.default).retain(t).concat(f);return this.applyDelta(p)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=this.delta;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(P)&&v.default.find(e[0].target)){var o=v.default.find(e[0].target),i=(0,O.bubbleFormats)(o),l=o.offset(this.scroll),a=e[0].oldValue.replace(_.default.CONTENTS,""),s=(new h.default).insert(a),u=(new h.default).insert(o.value());t=(new h.default).retain(l).concat(s.diff(u,n)).reduce(function(t,e){return e.insert?t.insert(e.insert,i):t.push(e)},new h.default),this.delta=r.compose(t)}else this.delta=this.getDelta(),t&&(0,A.default)(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}}]),t}();e.default=S},function(t,e){"use strict";function n(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){this._events=new n,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,l="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(l=!1)),o.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)i.call(t,e)&&n.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},o.prototype.listeners=function(t,e){var n=l?l+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},o.prototype.emit=function(t,e,n,r,o,i){var a=l?l+t:t;if(!this._events[a])return!1;var s,u,c=this._events[a],f=arguments.length;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),f){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,r),!0;case 5:return c.fn.call(c.context,e,n,r,o),!0;case 6:return c.fn.call(c.context,e,n,r,o,i),!0}for(u=1,s=new Array(f-1);u<f;u++)s[u-1]=arguments[u];c.fn.apply(c.context,s)}else{var h,p=c.length;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),f){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,r);break;default:if(!s)for(h=1,s=new Array(f-1);h<f;h++)s[h-1]=arguments[h];c[u].fn.apply(c[u].context,s)}}return!0},o.prototype.on=function(t,e,n){var o=new r(e,n||this),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.once=function(t,e,n){var o=new r(e,n||this,!0),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,o){var i=l?l+t:t;if(!this._events[i])return this;if(!e)return 0==--this._eventsCount?this._events=new n:delete this._events[i],this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||(0==--this._eventsCount?this._events=new n:delete this._events[i]);else{for(var s=0,u=[],c=a.length;s<c;s++)(a[s].fn!==e||o&&!a[s].once||r&&a[s].context!==r)&&u.push(a[s]);u.length?this._events[i]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new n:delete this._events[i]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=l,o.EventEmitter=o,void 0!==t&&(t.exports=o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t instanceof v.default||t instanceof y.BlockEmbed}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},f=n(0),h=r(f),p=n(9),d=r(p),y=n(3),v=r(y),b=n(14),g=r(b),m=n(13),_=r(m),O=n(23),w=r(O),x=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.emitter=n.emitter,Array.isArray(n.whitelist)&&(r.whitelist=n.whitelist.reduce(function(t,e){return t[e]=!0,t},{})),r.domNode.addEventListener("DOMNodeInserted",function(){}),r.optimize(),r.enable(),r}return l(e,t),u(e,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(t,n){var r=this.line(t),o=s(r,2),i=o[0],l=o[1],a=this.line(t+n),u=s(a,1),f=u[0];if(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),null!=f&&i!==f&&l>0){if(i instanceof y.BlockEmbed||f instanceof y.BlockEmbed)return void this.optimize();if(i instanceof _.default){var h=i.newlineIndex(i.length(),!0);if(h>-1&&(i=i.split(h+1))===f)return void this.optimize()}else if(f instanceof _.default){var p=f.newlineIndex(0);p>-1&&f.split(p+1)}var d=f.children.head instanceof g.default?null:f.children.head;i.moveChildren(f,d),i.remove()}this.optimize()}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t)}},{key:"formatAt",value:function(t,n,r,o){(null==this.whitelist||this.whitelist[r])&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o),this.optimize())}},{key:"insertAt",value:function(t,n,r){if(null==r||null==this.whitelist||this.whitelist[n]){if(t>=this.length())if(null==r||null==h.default.query(n,h.default.Scope.BLOCK)){var o=h.default.create(this.statics.defaultChild);this.appendChild(o),null==r&&n.endsWith("\n")&&(n=n.slice(0,-1)),o.insertAt(0,n,r)}else{var i=h.default.create(n,r);this.appendChild(i)}else c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);this.optimize()}}},{key:"insertBefore",value:function(t,n){if(t.statics.scope===h.default.Scope.INLINE_BLOT){var r=h.default.create(this.statics.defaultChild);r.appendChild(t),t=r}c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n)}},{key:"leaf",value:function(t){return this.path(t).pop()||[null,-1]}},{key:"line",value:function(t){return t===this.length()?this.line(t-1):this.descendant(a,t)}},{key:"lines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return function t(e,n,r){var o=[],i=r;return e.children.forEachAt(n,r,function(e,n,r){a(e)?o.push(e):e instanceof h.default.Container&&(o=o.concat(t(e,n,i))),i-=r}),o}(this,t,e)}},{key:"optimize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!0!==this.batch&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t,n),t.length>0&&this.emitter.emit(d.default.events.SCROLL_OPTIMIZE,t,n))}},{key:"path",value:function(t){return c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t).slice(1)}},{key:"update",value:function(t){if(!0!==this.batch){var n=d.default.sources.USER;"string"==typeof t&&(n=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(d.default.events.SCROLL_BEFORE_UPDATE,n,t),c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this,t.concat([])),t.length>0&&this.emitter.emit(d.default.events.SCROLL_UPDATE,n,t)}}}]),e}(h.default.Scroll);x.blotName="scroll",x.className="ql-editor",x.tagName="DIV",x.defaultChild="block",x.allowedChildren=[v.default,y.BlockEmbed,w.default],e.default=x},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){return"object"===(void 0===e?"undefined":x(e))?Object.keys(e).reduce(function(t,n){return s(t,n,e[n])},t):t.reduce(function(t,r){return r.attributes&&r.attributes[e]?t.push(r):t.insert(r.insert,(0,j.default)({},o({},e,n),r.attributes))},new q.default)}function u(t){if(t.nodeType!==Node.ELEMENT_NODE)return{};return t["__ql-computed-style"]||(t["__ql-computed-style"]=window.getComputedStyle(t))}function c(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;--r){var o=t.ops[r];if("string"!=typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e}function f(t){return 0!==t.childNodes.length&&["block","list-item"].indexOf(u(t).display)>-1}function h(t,e,n){return t.nodeType===t.TEXT_NODE?n.reduce(function(e,n){return n(t,e)},new q.default):t.nodeType===t.ELEMENT_NODE?[].reduce.call(t.childNodes||[],function(r,o){var i=h(o,e,n);return o.nodeType===t.ELEMENT_NODE&&(i=e.reduce(function(t,e){return e(o,t)},i),i=(o[W]||[]).reduce(function(t,e){return e(o,t)},i)),r.concat(i)},new q.default):new q.default}function p(t,e,n){return s(n,t,!0)}function d(t,e){var n=P.default.Attributor.Attribute.keys(t),r=P.default.Attributor.Class.keys(t),o=P.default.Attributor.Style.keys(t),i={};return n.concat(r).concat(o).forEach(function(e){var n=P.default.query(e,P.default.Scope.ATTRIBUTE);null!=n&&(i[n.attrName]=n.value(t),i[n.attrName])||(n=Y[e],null==n||n.attrName!==e&&n.keyName!==e||(i[n.attrName]=n.value(t)||void 0),null==(n=X[e])||n.attrName!==e&&n.keyName!==e||(n=X[e],i[n.attrName]=n.value(t)||void 0))}),Object.keys(i).length>0&&(e=s(e,i)),e}function y(t,e){var n=P.default.query(t);if(null==n)return e;if(n.prototype instanceof P.default.Embed){var r={},o=n.value(t);null!=o&&(r[n.blotName]=o,e=(new q.default).insert(r,n.formats(t)))}else"function"==typeof n.formats&&(e=s(e,n.blotName,n.formats(t)));return e}function v(t,e){return c(e,"\n")||e.insert("\n"),e}function b(){return new q.default}function g(t,e){var n=P.default.query(t);if(null==n||"list-item"!==n.blotName||!c(e,"\n"))return e;for(var r=-1,o=t.parentNode;!o.classList.contains("ql-clipboard");)"list"===(P.default.query(o)||{}).blotName&&(r+=1),o=o.parentNode;return r<=0?e:e.compose((new q.default).retain(e.length()-1).retain(1,{indent:r}))}function m(t,e){return c(e,"\n")||(f(t)||e.length()>0&&t.nextSibling&&f(t.nextSibling))&&e.insert("\n"),e}function _(t,e){if(f(t)&&null!=t.nextElementSibling&&!c(e,"\n\n")){var n=t.offsetHeight+parseFloat(u(t).marginTop)+parseFloat(u(t).marginBottom);t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}function O(t,e){var n={},r=t.style||{};return r.fontStyle&&"italic"===u(t).fontStyle&&(n.italic=!0),r.fontWeight&&(u(t).fontWeight.startsWith("bold")||parseInt(u(t).fontWeight)>=700)&&(n.bold=!0),Object.keys(n).length>0&&(e=s(e,n)),parseFloat(r.textIndent||0)>0&&(e=(new q.default).insert("\t").concat(e)),e}function w(t,e){var n=t.data;if("O:P"===t.parentNode.tagName)return e.insert(n.trim());if(0===n.trim().length&&t.parentNode.classList.contains("ql-clipboard"))return e;if(!u(t.parentNode).whiteSpace.startsWith("pre")){var r=function(t,e){return e=e.replace(/[^\u00a0]/g,""),e.length<1&&t?" ":e};n=n.replace(/\r\n/g," ").replace(/\n/g," "),n=n.replace(/\s\s+/g,r.bind(r,!0)),(null==t.previousSibling&&f(t.parentNode)||null!=t.previousSibling&&f(t.previousSibling))&&(n=n.replace(/^\s+/,r.bind(r,!1))),(null==t.nextSibling&&f(t.parentNode)||null!=t.nextSibling&&f(t.nextSibling))&&(n=n.replace(/\s+$/,r.bind(r,!1)))}return e.insert(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),N=n(2),j=r(N),A=n(4),q=r(A),T=n(0),P=r(T),S=n(6),C=r(S),L=n(10),M=r(L),R=n(7),I=r(R),B=n(34),D=n(35),U=n(13),F=r(U),H=n(24),K=n(36),z=n(37),V=n(38),Z=(0,M.default)("quill:clipboard"),W="__ql-matcher",G=[[Node.TEXT_NODE,w],[Node.TEXT_NODE,m],["br",v],[Node.ELEMENT_NODE,m],[Node.ELEMENT_NODE,y],[Node.ELEMENT_NODE,_],[Node.ELEMENT_NODE,d],[Node.ELEMENT_NODE,O],["li",g],["b",p.bind(p,"bold")],["i",p.bind(p,"italic")],["style",b]],Y=[B.AlignAttribute,K.DirectionAttribute].reduce(function(t,e){return t[e.keyName]=e,t},{}),X=[B.AlignStyle,D.BackgroundStyle,H.ColorStyle,K.DirectionStyle,z.FontStyle,V.SizeStyle].reduce(function(t,e){return t[e.keyName]=e,t},{}),$=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.root.addEventListener("paste",r.onPaste.bind(r)),r.container=r.quill.addContainer("ql-clipboard"),r.container.setAttribute("contenteditable",!0),r.container.setAttribute("tabindex",-1),r.matchers=[],G.concat(r.options.matchers).forEach(function(t){var e=k(t,2),o=e[0],i=e[1];(n.matchVisual||i!==_)&&r.addMatcher(o,i)}),r}return a(e,t),E(e,[{key:"addMatcher",value:function(t,e){this.matchers.push([t,e])}},{key:"convert",value:function(t){if("string"==typeof t)return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),this.convert();var e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[F.default.blotName]){var n=this.container.innerText;return this.container.innerHTML="",(new q.default).insert(n,o({},F.default.blotName,e[F.default.blotName]))}var r=this.prepareMatching(),i=k(r,2),l=i[0],a=i[1],s=h(this.container,l,a);return c(s,"\n")&&null==s.ops[s.ops.length-1].attributes&&(s=s.compose((new q.default).retain(s.length()-1).delete(1))),Z.log("convert",this.container.innerHTML,s),this.container.innerHTML="",s}},{key:"dangerouslyPasteHTML",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C.default.sources.API;if("string"==typeof t)this.quill.setContents(this.convert(t),e),this.quill.setSelection(0,C.default.sources.SILENT);else{var r=this.convert(e);this.quill.updateContents((new q.default).retain(t).concat(r),n),this.quill.setSelection(t+r.length(),C.default.sources.SILENT)}}},{key:"onPaste",value:function(t){var e=this;if(!t.defaultPrevented&&this.quill.isEnabled()){var n=this.quill.getSelection(),r=(new q.default).retain(n.index),o=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(C.default.sources.SILENT),setTimeout(function(){r=r.concat(e.convert()).delete(n.length),e.quill.updateContents(r,C.default.sources.USER),e.quill.setSelection(r.length()-n.length,C.default.sources.SILENT),e.quill.scrollingContainer.scrollTop=o,e.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var t=this,e=[],n=[];return this.matchers.forEach(function(r){var o=k(r,2),i=o[0],l=o[1];switch(i){case Node.TEXT_NODE:n.push(l);break;case Node.ELEMENT_NODE:e.push(l);break;default:[].forEach.call(t.container.querySelectorAll(i),function(t){t[W]=t[W]||[],t[W].push(l)})}}),[e,n]}}]),e}(I.default);$.DEFAULTS={matchers:[],matchVisual:!0},e.default=$,e.matchAttributor=d,e.matchBlot=y,e.matchNewline=m,e.matchSpacing=_,e.matchText=w},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.ops[t.ops.length-1];return null!=e&&(null!=e.insert?"string"==typeof e.insert&&e.insert.endsWith("\n"):null!=e.attributes&&Object.keys(e.attributes).some(function(t){return null!=f.default.query(t,f.default.Scope.BLOCK)}))}function s(t){var e=t.reduce(function(t,e){return t+=e.delete||0},0),n=t.length()-e;return a(t)&&(n-=1),n}Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),h=n(6),p=r(h),d=n(7),y=r(d),v=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.lastRecorded=0,r.ignoreChange=!1,r.clear(),r.quill.on(p.default.events.EDITOR_CHANGE,function(t,e,n,o){t!==p.default.events.TEXT_CHANGE||r.ignoreChange||(r.options.userOnly&&o!==p.default.sources.USER?r.transform(e):r.record(e,n))}),r.quill.keyboard.addBinding({key:"Z",shortKey:!0},r.undo.bind(r)),r.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},r.redo.bind(r)),/Win/i.test(navigator.platform)&&r.quill.keyboard.addBinding({key:"Y",shortKey:!0},r.redo.bind(r)),r}return l(e,t),u(e,[{key:"change",value:function(t,e){if(0!==this.stack[t].length){var n=this.stack[t].pop();this.stack[e].push(n),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],p.default.sources.USER),this.ignoreChange=!1;var r=s(n[t]);this.quill.setSelection(r)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(t,e){if(0!==t.ops.length){this.stack.redo=[];var n=this.quill.getContents().diff(e),r=Date.now();if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){var o=this.stack.undo.pop();n=n.compose(o.undo),t=o.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(t){this.stack.undo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}),this.stack.redo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),e}(y.default);v.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=v,e.getLastChangeIndex=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"add",value:function(t,n){if("+1"===n||"-1"===n){var r=this.value(t)||0;n="+1"===n?r+1:r-1}return 0===n?(this.remove(t),!0):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"add",this).call(this,t,n)}},{key:"canAdd",value:function(t,n){return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,n)||a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,parseInt(n))}},{key:"value",value:function(t){return parseInt(a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t))||void 0}}]),e}(u.default.Attributor.Class),f=new c("indent","ql-indent",{scope:u.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(3),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="blockquote",s.tagName="blockquote",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,null,[{key:"formats",value:function(t){return this.tagName.indexOf(t.tagName)+1}}]),e}(s.default);u.blotName="header",u.tagName=["H1","H2","H3","H4","H5","H6"],e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(0),f=r(c),h=n(3),p=r(h),d=n(23),y=r(d),v=function(t){function e(){return i(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"format",value:function(t,n){t!==b.blotName||n?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n):this.replaceWith(f.default.create(this.statics.scope))}},{key:"remove",value:function(){null==this.prev&&null==this.next?this.parent.remove():u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(t,n){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,n),this):(this.parent.unwrap(),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t,n))}}],[{key:"formats",value:function(t){return t.tagName===this.tagName?void 0:u(e.__proto__||Object.getPrototypeOf(e),"formats",this).call(this,t)}}]),e}(p.default);v.blotName="list-item",v.tagName="LI";var b=function(t){function e(t){i(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),r=function(e){if(e.target.parentNode===t){var r=n.statics.formats(t),o=f.default.find(e.target);"checked"===r?o.format("list","unchecked"):"unchecked"===r&&o.format("list","checked")}};return t.addEventListener("touchstart",r),t.addEventListener("mousedown",r),n}return a(e,t),s(e,null,[{key:"create",value:function(t){var n="ordered"===t?"OL":"UL",r=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,n);return"checked"!==t&&"unchecked"!==t||r.setAttribute("data-checked","checked"===t),r}},{key:"formats",value:function(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}}]),s(e,[{key:"format",value:function(t,e){this.children.length>0&&this.children.tail.format(t,e)}},{key:"formats",value:function(){return o({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(t,n){if(t instanceof v)u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n);else{var r=null==n?this.length():n.offset(this),o=this.split(r);o.parent.insertBefore(t,o)}}},{key:"optimize",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&n.domNode.tagName===this.domNode.tagName&&n.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){if(t.statics.blotName!==this.statics.blotName){var n=f.default.create(this.statics.defaultChild);t.moveChildren(n),this.appendChild(n)}u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t)}}]),e}(y.default);b.blotName="list",b.scope=f.default.Scope.BLOCK_BLOT,b.tagName=["OL","UL"],b.defaultChild="list-item",b.allowedChildren=[v],e.ListItem=v,e.default=b},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(39),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="italic",s.tagName=["EM","I"],e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(5),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,null,[{key:"create",value:function(t){return"super"===t?document.createElement("sup"):"sub"===t?document.createElement("sub"):a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t)}},{key:"formats",value:function(t){return"SUB"===t.tagName?"sub":"SUP"===t.tagName?"super":void 0}}]),e}(u.default);c.blotName="script",c.tagName=["SUB","SUP"],e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(5),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="strike",s.tagName="S",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(5),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="underline",s.tagName="U",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=n(15),f=["alt","height","width"],h=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"format",value:function(t,n){f.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return f.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"match",value:function(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}},{key:"sanitize",value:function(t){return(0,c.sanitize)(t,["http","https","data"])?t:"//:0"}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(u.default.Embed);h.blotName="image",h.tagName="IMG",e.default=h},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(3),u=n(15),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=["height","width"],h=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"format",value:function(t,n){f.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("frameborder","0"),n.setAttribute("allowfullscreen",!0),n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return f.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"sanitize",value:function(t){return c.default.sanitize(t)}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(s.BlockEmbed);h.blotName="video",h.className="ql-video",h.tagName="IFRAME",e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(33),c=r(u),f=n(6),h=r(f),p=n(7),d=r(p),y=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,null,[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&(window.katex.render(t,n,{throwOnError:!1,errorColor:"#f00"}),n.setAttribute("data-value",t)),n}},{key:"value",value:function(t){return t.getAttribute("data-value")}}]),e}(c.default);y.blotName="formula",y.className="ql-formula",y.tagName="SPAN";var v=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(null==window.katex)throw new Error("Formula module requires KaTeX.");return t}return l(e,t),a(e,null,[{key:"register",value:function(){h.default.register(y,!0)}}]),e}(d.default);e.FormulaBlot=y,e.default=v},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(0),c=r(u),f=n(6),h=r(f),p=n(7),d=r(p),y=n(13),v=r(y),b=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"replaceWith",value:function(t){this.domNode.textContent=this.domNode.textContent,this.attach(),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t)}},{key:"highlight",value:function(t){var e=this.domNode.textContent;this.cachedText!==e&&((e.trim().length>0||null==this.cachedText)&&(this.domNode.innerHTML=t(e),this.domNode.normalize(),this.attach()),this.cachedText=e)}}]),e}(v.default);b.className="ql-syntax";var g=new c.default.Attributor.Class("token","hljs",{scope:c.default.Scope.INLINE}),m=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if("function"!=typeof r.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var l=null;return r.quill.on(h.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(l),l=setTimeout(function(){r.highlight(),l=null},r.options.interval)}),r.highlight(),r}return l(e,t),a(e,null,[{key:"register",value:function(){h.default.register(g,!0),h.default.register(b,!0)}}]),a(e,[{key:"highlight",value:function(){var t=this;if(!this.quill.selection.composing){this.quill.update(h.default.sources.USER);var e=this.quill.getSelection();this.quill.scroll.descendants(b).forEach(function(e){e.highlight(t.options.highlight)}),this.quill.update(h.default.sources.SILENT),null!=e&&this.quill.setSelection(e,h.default.sources.SILENT)}}}]),e}(d.default);m.DEFAULTS={highlight:function(){return null==window.hljs?null:function(t){return window.hljs.highlightAuto(t).value}}(),interval:1e3},e.CodeBlock=b,e.CodeToken=g,e.default=m},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("ql-"+e),null!=n&&(r.value=n),t.appendChild(r)}function u(t,e){Array.isArray(e[0])||(e=[e]),e.forEach(function(e){var n=document.createElement("span");n.classList.add("ql-formats"),e.forEach(function(t){if("string"==typeof t)s(n,t);else{var e=Object.keys(t)[0],r=t[e];Array.isArray(r)?c(n,e,r):s(n,e,r)}}),t.appendChild(n)})}function c(t,e,n){var r=document.createElement("select");r.classList.add("ql-"+e),n.forEach(function(t){var e=document.createElement("option");!1!==t?e.setAttribute("value",t):e.setAttribute("selected","selected"),r.appendChild(e)}),t.appendChild(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=n(4),d=r(p),y=n(0),v=r(y),b=n(6),g=r(b),m=n(10),_=r(m),O=n(7),w=r(O),x=(0,_.default)("quill:toolbar"),k=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if(Array.isArray(r.options.container)){var o=document.createElement("div");u(o,r.options.container),t.container.parentNode.insertBefore(o,t.container),r.container=o}else"string"==typeof r.options.container?r.container=document.querySelector(r.options.container):r.container=r.options.container;if(!(r.container instanceof HTMLElement)){var a;return a=x.error("Container required for toolbar",r.options),l(r,a)}return r.container.classList.add("ql-toolbar"),r.controls=[],r.handlers={},Object.keys(r.options.handlers).forEach(function(t){r.addHandler(t,r.options.handlers[t])}),[].forEach.call(r.container.querySelectorAll("button, select"),function(t){r.attach(t)}),r.quill.on(g.default.events.EDITOR_CHANGE,function(t,e){t===g.default.events.SELECTION_CHANGE&&r.update(e)}),r.quill.on(g.default.events.SCROLL_OPTIMIZE,function(){var t=r.quill.selection.getRange(),e=f(t,1),n=e[0];r.update(n)}),r}return a(e,t),h(e,[{key:"addHandler",value:function(t,e){this.handlers[t]=e}},{key:"attach",value:function(t){var e=this,n=[].find.call(t.classList,function(t){return 0===t.indexOf("ql-")});if(n){if(n=n.slice("ql-".length),"BUTTON"===t.tagName&&t.setAttribute("type","button"),null==this.handlers[n]){if(null!=this.quill.scroll.whitelist&&null==this.quill.scroll.whitelist[n])return void x.warn("ignoring attaching to disabled format",n,t);if(null==v.default.query(n))return void x.warn("ignoring attaching to nonexistent format",n,t)}var r="SELECT"===t.tagName?"change":"click";t.addEventListener(r,function(r){var i=void 0;if("SELECT"===t.tagName){if(t.selectedIndex<0)return;var l=t.options[t.selectedIndex];i=!l.hasAttribute("selected")&&(l.value||!1)}else i=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),r.preventDefault();e.quill.focus();var a=e.quill.selection.getRange(),s=f(a,1),u=s[0];if(null!=e.handlers[n])e.handlers[n].call(e,i);else if(v.default.query(n).prototype instanceof v.default.Embed){if(!(i=prompt("Enter "+n)))return;e.quill.updateContents((new d.default).retain(u.index).delete(u.length).insert(o({},n,i)),g.default.sources.USER)}else e.quill.format(n,i,g.default.sources.USER);e.update(u)}),this.controls.push([n,t])}}},{key:"update",value:function(t){var e=null==t?{}:this.quill.getFormat(t);this.controls.forEach(function(n){var r=f(n,2),o=r[0],i=r[1];if("SELECT"===i.tagName){var l=void 0;if(null==t)l=null;else if(null==e[o])l=i.querySelector("option[selected]");else if(!Array.isArray(e[o])){var a=e[o];"string"==typeof a&&(a=a.replace(/\"/g,'\\"')),l=i.querySelector('option[value="'+a+'"]')}null==l?(i.value="",i.selectedIndex=-1):l.selected=!0}else if(null==t)i.classList.remove("ql-active");else if(i.hasAttribute("value")){var s=e[o]===i.getAttribute("value")||null!=e[o]&&e[o].toString()===i.getAttribute("value")||null==e[o]&&!i.getAttribute("value");i.classList.toggle("ql-active",s)}else i.classList.toggle("ql-active",null!=e[o])})}}]),e}(w.default);k.DEFAULTS={},k.DEFAULTS={container:null,handlers:{clean:function(){var t=this,e=this.quill.getSelection();if(null!=e)if(0==e.length){var n=this.quill.getFormat();Object.keys(n).forEach(function(e){null!=v.default.query(e,v.default.Scope.INLINE)&&t.quill.format(e,!1)})}else this.quill.removeFormat(e,g.default.sources.USER)},direction:function(t){var e=this.quill.getFormat().align;"rtl"===t&&null==e?this.quill.format("align","right",g.default.sources.USER):t||"right"!==e||this.quill.format("align",!1,g.default.sources.USER),this.quill.format("direction",t,g.default.sources.USER)},indent:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e),r=parseInt(n.indent||0);if("+1"===t||"-1"===t){var o="+1"===t?1:-1;"rtl"===n.direction&&(o*=-1),this.quill.format("indent",r+o,g.default.sources.USER)}},link:function(t){!0===t&&(t=prompt("Enter link URL:")),this.quill.format("link",t,g.default.sources.USER)},list:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e);"check"===t?"checked"===n.list||"unchecked"===n.list?this.quill.format("list",!1,g.default.sources.USER):this.quill.format("list","unchecked",g.default.sources.USER):this.quill.format("list",t,g.default.sources.USER)}}},e.default=k,e.addControls=u},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),c=r(u),f=n(9),h=r(f),p=n(44),d=r(p),y=n(22),v=n(26),b=r(v),g=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],m=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=g);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-bubble"),r}return l(e,t),s(e,[{key:"extendToolbar",value:function(t){this.tooltip=new _(this.quill,this.options.bounds),this.tooltip.root.appendChild(t.container),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),b.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),b.default)}}]),e}(d.default);m.DEFAULTS=(0,c.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){t?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var _=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.on(h.default.events.EDITOR_CHANGE,function(t,e,n,o){if(t===h.default.events.SELECTION_CHANGE)if(null!=e&&e.length>0&&o===h.default.sources.USER){r.show(),r.root.style.left="0px",r.root.style.width="",r.root.style.width=r.root.offsetWidth+"px";var i=r.quill.getLines(e.index,e.length);if(1===i.length)r.position(r.quill.getBounds(e));else{var l=i[i.length-1],a=r.quill.getIndex(l),s=Math.min(l.length()-1,e.index+e.length-a),u=r.quill.getBounds(new y.Range(a,s));r.position(u)}}else document.activeElement!==r.textbox&&r.quill.hasFocus()&&r.hide()}),r}return l(e,t),s(e,[{key:"listen",value:function(){var t=this;a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){t.root.classList.remove("ql-editing")}),this.quill.on(h.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!t.root.classList.contains("ql-hidden")){var e=t.quill.getSelection();null!=e&&t.position(t.quill.getBounds(e))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"position",this).call(this,t),r=this.root.querySelector(".ql-tooltip-arrow");if(r.style.marginLeft="",0===n)return n;r.style.marginLeft=-1*n-r.offsetWidth/2+"px"}}]),e}(p.BaseTooltip);_.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=_,e.default=m},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),f=r(c),h=n(9),p=r(h),d=n(44),y=r(d),v=n(15),b=r(v),g=n(22),m=n(26),_=r(m),O=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],w=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=O);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-snow"),r}return l(e,t),u(e,[{key:"extendToolbar",value:function(t){t.container.classList.add("ql-snow"),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),_.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),_.default),this.tooltip=new x(this.quill,this.options.bounds),t.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(e,n){t.handlers.link.call(t,!n.format.link)})}}]),e}(y.default);w.DEFAULTS=(0,f.default)(!0,{},y.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){if(t){var e=this.quill.getSelection();if(null==e||0==e.length)return;var n=this.quill.getText(e);/^\S+@\S+\.\S+$/.test(n)&&0!==n.indexOf("mailto:")&&(n="mailto:"+n);this.quill.theme.tooltip.edit("link",n)}else this.quill.format("link",!1)}}}}});var x=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.preview=r.root.querySelector("a.ql-preview"),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(e){t.root.classList.contains("ql-editing")?t.save():t.edit("link",t.preview.textContent),e.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(e){if(null!=t.linkRange){var n=t.linkRange;t.restoreFocus(),t.quill.formatText(n,"link",!1,p.default.sources.USER),delete t.linkRange}e.preventDefault(),t.hide()}),this.quill.on(p.default.events.SELECTION_CHANGE,function(e,n,r){if(null!=e){if(0===e.length&&r===p.default.sources.USER){var o=t.quill.scroll.descendant(b.default,e.index),i=a(o,2),l=i[0],s=i[1];if(null!=l){t.linkRange=new g.Range(e.index-s,l.length());var u=b.default.formats(l.domNode);return t.preview.textContent=u,t.preview.setAttribute("href",u),t.show(),void t.position(t.quill.getBounds(t.linkRange))}}else delete t.linkRange;t.hide()}})}},{key:"show",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),e}(d.BaseTooltip);x.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=w}]).default});
//# sourceMappingURL=quill.min.js.map
;
//# sourceMappingURL=scripts.js.map