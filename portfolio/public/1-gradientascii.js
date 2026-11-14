(()=>{var y,kt,xn,W,$e,ke,Ft,Se,Mt,Ve,Be,gn,de=Symbol.for("pv"),Fe={},Me=[],En=/^m(i|n|o|s|text|space)$/,Pe=Array.isArray,We=Me.slice,ee=Object.assign;function Q(e){e&&e.parentNode&&e.remove()}function Ue(e,t,n){var o,i,r,s={},c=arguments.length;for(r in t)r=="key"?o=t[r]:r=="ref"&&typeof e!="function"?i=t[r]:s[r]=t[r];return c>2&&(s.children=c>3?We.call(arguments,2):n),me(e,s,o,i,null)}function me(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:de,__v:i||++kt,__i:-1,__u:0};return!i&&y.vnode&&y.vnode(r),r}function B(e){return e.children}function j(e,t){this.props=e,this.context=t,this.__g=0}function K(e,t){if(t==null)return e.__&&K(e.__,e.__i+1);for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!="function"||e.props.__P?null:K(e)}function bn(e){var t,n=e.__v,o=n.__e,i=[],r=[],s=e.__P;s&&((t=ee({constructor:de},n)).__v=n.__v+1,y.vnode&&y.vnode(t),Ke(s,t,n,e.__n,s.namespaceURI,32&n.__u?[o]:null,i,o||K(n),32&n.__u,r),t.__v=n.__v,t.__.__k[t.__i]=t,Ot(i,t,r),n.__=n.__e=null,t.__e!=o&&Pt(t))}function Pt(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),Pt(e)}function St(e){(8&e.__g||(e.__g|=8,W.push(e),ke++))&&$e==y.debounceRendering||(($e=y.debounceRendering)||queueMicrotask)(Ut)}function Ut(){try{for(var e,t=1;W.length;)W.length>t&&W.sort(Ft),e=W.shift(),t=W.length,8&e.__g&&bn(e)}finally{(ke=W.length)&&($e||queueMicrotask)(Ut)}}function Lt(e,t,n,o,i,r,s,c,l,d,_){var T,v,u,h,A,E,R=o.__k||Me,x=t.length;for(l=Tn(n,t,R,l,x),T=0;T<x;T++)(u=n.__k[T])!=null&&(v=~u.__i&&R[u.__i]||Fe,u.__i=T,E=Ke(e,u,v,i,r,s,c,l,d,_),h=u.__e,(v.ref!=u.ref||8&v.__u)&&(v.ref&&Ye(v.ref,null,u,v),u.ref&&_.push(u.ref,u.__c||h,u)),A=A||h,4&u.__u?(l=Dt(u,l,e,!v.__v),v.__e&&(v.__e=null)):typeof u.type=="function"&&E!==void 0?l=E:h&&(l=h.nextSibling),u.__u&=-21);return n.__e=A,l}function Tn(e,t,n,o,i){var r,s,c,l,d,_,T,v,u,h=n.length,A=h,E=0,R=0,x=e.__k=Array(i);for(r=0;r<i;r++)(s=t[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s!="object"||s.constructor===String?s=x[r]=me(null,s):Pe(s)?s=x[r]=me(B,{children:s}):s.constructor===de&&s.__b?s=x[r]=me(s.type,s.props,s.key,s.ref,s.__v):x[r]=s,l=r+E,s.__=e,s.__b=e.__b+1,c=null,~(d=s.__i=Rn(s,n,l,A))&&(A--,(c=n[d])&&(c.__u|=2)),c&&c.__v?(s.__u|=16,d==l-1?E--:d==l+1?E++:d!=l&&(d>l?E--:E++,R=1)):(~d||(i>h?E--:i<h&&E++),typeof s.type!="function"&&(s.__u|=4))):x[r]=null;if(R){for(_=[],T=[],r=0;r<i;r++)if((s=x[r])&&16&s.__u){for(E=0,v=_.length;E<v;)_[u=E+v>>1]<s.__i?E=u+1:v=u;_[E]=s.__i,T[r]=E+1}for(E=_.length;r--;)T[r]&&(T[r]==E?E--:x[r].__u|=4)}if(A)for(r=0;r<h;r++)!(c=n[r])||2&c.__u||(c.__e==o&&(o=K(c)),Ze(c,c));return o}function Dt(e,t,n,o){var i,r,s,c;if(typeof e.type=="function"){if(e.props.__P)return t;if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&(i[r].__=e,t=Dt(i[r],t,n,!1));return t}for(t&&!t.parentNode&&(t=K(e))&&!t.parentNode&&(t=null),s=e.__e,c=t;c&&c.nodeType==8;)c=c.nextSibling;for(s!=c&&(!o&&n.moveBefore&&s.parentNode?n.moveBefore(s,t):n.insertBefore(s,t||null)),t=s;(t=t&&t.nextSibling)&&t.nodeType==8&&!t.data.startsWith("$s"););return t}function je(e,t){return t=t||[],e!=null&&typeof e!="boolean"&&(Pe(e)?e.some(function(n){je(n,t)}):t.push(e)),t}function Rn(e,t,n,o){var i,r=e.key,s=e.type,c=t[n],l=c&&!(2&c.__u);if(c===null&&r==null||l&&r==c.key&&s==c.type)return n;if(o>(l?1:0)){for(i=n-1;i>=0;i--)if((c=t[i])&&!(2&c.__u)&&r==c.key&&s==c.type)return i;for(i=n+1;i<t.length;i++)if((c=t[i])&&!(2&c.__u)&&r==c.key&&s==c.type)return i}return-1}function Ct(e,t,n){n==null&&(n=""),t[0]=="-"?e.setProperty(t,n):e[t]=n}function Ae(e,t,n,o,i){var r,s;if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Ct(e.style,t);if(n)for(t in n)o&&n[t]==o[t]||Ct(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")typeof n!="function"&&(n=null),typeof o!="function"&&(o=null),(e.__e||(e.__e={}))[t]=n,n&&o||(s=Be[t]||(Be[t]=wn(t)),(e.__a||(e.__a={}))[t]=Ve,r=t!=(t=t.replace(Mt,"$1")),(t=t.slice(2))[0]<"a"&&(t=t.toLowerCase()),n?e.addEventListener(t,s,r):e.removeEventListener(t,s,r));else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{return void(e[t]=n??"")}catch{}if(typeof n=="function")return;n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n)}}function wn(e){return function(t){var n=this.__e;if(n){if(n=n[e],t[Se]==null)t[Se]=Ve++;else if(t[Se]<this.__a[e])return;return n(y.event?y.event(t):t)}}}function Ke(e,t,n,o,i,r,s,c,l,d){var _,T,v,u,h,A,E,R,x,S,w,ce,ye,Y,$,xe,O,H,U=t.type;if(t.constructor!==de)return null;128&n.__u&&(l=32&n.__u,_=n.__c.__z)&&(t.__u|=l,T=r=[],_.nodeType==8?c=Ce(_,r):r.push(_),c=r[0]||c),(_=y.__b)&&_(t);e:if(typeof U=="function"){v=s.length;try{if(R=t.props,x=(_=U.prototype)&&_.render,S=(_=U.contextType)&&o[_.__c],w=_?S?S.props.value:_.__:o,(u=n.__c)?(t.__c=u,2&u.__g&&(u.__g|=1)):(x?t.__c=u=new U(R,w):(t.__c=u=new j(R,w),u.constructor=U,u.render=Sn),S&&S.sub(u),u.state||(u.state={}),u.__n=o,u.__g|=8,u.__h=[],u.__k=[]),x&&(u.__s||(u.__s=u.state),U.getDerivedStateFromProps&&(u.__s==u.state&&(u.__s=ee({},u.__s)),ee(u.__s,U.getDerivedStateFromProps(R,u.__s)))),h=u.props,A=u.state,u.__v=t,n.__c){if(R!==h&&x&&!U.getDerivedStateFromProps&&u.componentWillReceiveProps&&u.componentWillReceiveProps(R,w),t.__v==n.__v&&!(8&u.__g)||!(4&u.__g)&&u.shouldComponentUpdate&&u.shouldComponentUpdate(R,u.__s,w)===!1){t.__v!=n.__v&&(u.props=R,u.state=u.__s,u.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(k){k&&(k.__=t)}),Me.push.apply(u.__h,u.__k),u.__k=[],u.__h.length&&s.push(u),c=K(n);break e}u.componentWillUpdate&&u.componentWillUpdate(R,u.__s,w),x&&u.componentDidUpdate&&u.__h.push(function(){u.componentDidUpdate(h,A,E)})}else x&&!U.getDerivedStateFromProps&&u.componentWillMount&&u.componentWillMount(),x&&u.componentDidMount&&u.__h.push(u.componentDidMount);u.context=w,u.props=R,u.__P=e,u.__g&=-5,ce=y.__r,ye=x?25:0;do u.__g&=-9,ce&&ce(t),_=u.render(u.props,u.state=u.__s,u.context);while(8&u.__g&&++ye<25);x&&(Me.push.apply(u.__h,u.__k),u.__k=[]),u.state=u.__s,u.getChildContext&&(o=ee({},o,u.getChildContext())),x&&n.__c&&u.getSnapshotBeforeUpdate&&(E=u.getSnapshotBeforeUpdate(h,A)),Y=_&&_.type===B&&_.key==null?_.props.children:_,R.__P&&(_=c,i=(e=R.__P).namespaceURI,l=r=null,n.props&&n.props.__P!=e&&(n.__k.some(function(k){k&&Ze(k,k)}),n.__k=null),c=n.__k?K(n,0):null),c=Lt(e,Pe(Y)?Y:[Y],t,n,o,i,r,s,c,l,d),R.__P&&(t.__e=null,c=_),t.__u&=-161,T&&T.some(Q),u.__h.length&&s.push(u),1&u.__g&&(u.__g&=-4)}catch(k){if(s.length=v,t.__v=null,l||r)if(k&&k.then){if(t.__u|=128|l,r){for(~(O=r.indexOf(c||void 0))||(O=r.length);(H=r[O-1])&&H.nodeType==8;)O--;for(;O<r.length;O++)if(H=r[O])if(r[O]=null,$){if(H==xe)break}else{if(H.nodeType!=8)break;H.data.startsWith("$s")&&(xe=Ce($=H))}}if(!$){for(;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;$=c}(_=Ce($=t.__c.__z||(t.__c.__z=$)))?(t.__e=$,c=_):t.__e=c,c=c&&c.nextSibling}else r&&r.some(Q);else t.__e=n.__e;t.__k||(t.__k=n.__k||[]),k&&k.then||It(t),y.__e(k,t,n)}}else c=t.__e=An(n.__e,t,n,o,i,r,s,l,d,e);return(_=y.diffed)&&_(t),c}function Ce(e,t){if(e&&e.nodeType==8&&e.data.startsWith("$s"))for(var n=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith("$s"))n++;else if(e.data.startsWith("/$s")&&!--n)return e}t&&t.push(e)}}function It(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(It))}function Ot(e,t,n){for(var o=0;o<n.length;)Ye(n[o++],n[o++],n[o++]);y.__c&&y.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){y.__e(r,i.__v)}})}function An(e,t,n,o,i,r,s,c,l,d){var _,T,v,u,h,A,E,R,x=n.props||Fe,S=t.props,w=t.type;if(w=="svg"?i="http://www.w3.org/2000/svg":w=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r){for(_=0;_<r.length;_++)if((h=r[_])&&(w?h.localName==w:h.nodeType==3)){e=h,r[_]=null;break}}if(!e){if(R=d.ownerDocument||document,!w)return R.createTextNode(S);e=R.createElementNS(i,w,S.is?S:d),c&&(y.__m&&y.__m(t,r),c=!1),r=null}if(w){if(d=w=="template"&&e.content||e,r=w=="textarea"&&S.defaultValue!=null?null:r&&We.call(d.childNodes),!c&&r)for(x={},_=0;_<e.attributes.length;_++)x[(h=e.attributes[_]).name]=h.value;for(_ in x)h=x[_],_=="dangerouslySetInnerHTML"?v=h:_=="children"||_ in S||_=="value"&&"defaultValue"in S||_=="checked"&&"defaultChecked"in S||Ae(e,_,null,h,i);for(_ in S)h=S[_],_=="children"?u=h:_=="dangerouslySetInnerHTML"?T=h:_=="value"?A=h:_=="checked"?E=h:c&&typeof h!="function"||x[_]===h||Ae(e,_,h,x[_],i);T?(c||v&&(T.__html==v.__html||T.__html==e.innerHTML)||(e.innerHTML=T.__html),t.__k=[]):(v&&(e.textContent=""),(w=="foreignObject"||i=="http://www.w3.org/1998/Math/MathML"&&En.test(w))&&(i="http://www.w3.org/1999/xhtml"),Lt(d,Pe(u)?u:[u],t,n,o,i,r,s,r?r[0]:n.__k&&K(n,0),c,l),r&&r.some(Q)),c&&w!="textarea"||(_="value",w=="progress"&&A==null?e.removeAttribute(_):A==null||A===e[_]&&(w!="progress"||A)||Ae(e,_,A,x[_],i),_="checked",E!=null&&E!=e[_]&&Ae(e,_,E,x[_],i))}else x===S||c&&e.data==S||(e.data=S);return e}function Ye(e,t,n,o){try{typeof e=="function"?t?t.__x=e(t)||1:o&&(o=o.__c||o.__e)&&(t=o.__x)&&(o.__x=null,typeof t=="function"?t():e(null)):e.current=t}catch(i){y.__e(i,n)}}function Ze(e,t,n){var o,i,r,s;if(y.unmount&&y.unmount(e),!(o=e.ref)||o.current&&o.current!=e.__e||Ye(o,null,t,e),o=e.__c){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(c){y.__e(c,t)}o.__P=o.__n=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&Ze(o[s],t,typeof e.type!="function"||n&&!e.props.__P);!n&&(o=e.__c)&&(o=o.__z)&&(i=Ce(o,r=[]))&&(o==e.__e&&r.some(Q),Q(i),Q(o)),n||Q(e.__e),e.__e=e.__c=e.__=null}function Sn(e,t,n){return this.constructor(e,n)}function Je(e,t){var n,o,i,r;y.__&&y.__(e,t),t.nodeType==9&&(t=t.documentElement),o=(n=e&&32&e.__u)?null:t.__k,t.__k=me(B,{children:[e]}),i=[],r=[],Ke(t,t.__k,o||Fe,Fe,t.namespaceURI,o?null:t.firstChild?We.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,r),Ot(i,t.__k,r),t.__k.props.children=null}y={__e:function(e,t,n,o){for(var i,r,s;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((s=(r=i.constructor)&&r.getDerivedStateFromError)&&i.setState(r.getDerivedStateFromError(e)),i.componentDidCatch&&(i.componentDidCatch(e,o||{}),s=1),s&&8&i.__g)return void(i.__g|=2)}catch(c){e=c}}throw ke=0,e}},kt=0,xn=function(e){return e!=null&&e.constructor===de},j.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=ee({},this.state)),typeof e=="function"&&(e=e(ee({},n),this.props)),e&&(ee(n,e),this.__v&&(t&&this.__k.push(t),St(this)))},j.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),St(this))},j.prototype.render=B,W=[],ke=0,Ft=function(e,t){return e.__v.__b-t.__v.__b},Se=Symbol(),Mt=/(PointerCapture)$|Capture$/i,Ve=0,Be={},gn=0;var Le,P,Qe,Nt,Cn=Object.is,et=0,Wt=[],tt=[],C=y,Ht=C.__b,Gt=C.__r,Xt=C.diffed,zt=C.__c,qt=C.unmount,$t=C.__;function jt(e,t){C.__h&&C.__h(P,e,et||t),et=0;var n=P.__H||(P.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function De(e,t){var n=jt(Le++,3);!C.__s&&Yt(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,P.__H.__h.push(n))}function se(e){return et=5,Kt(function(){return{current:e}},[])}function Kt(e,t){var n=jt(Le++,7);return Yt(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function kn(){var e;do{for(;e=tt.shift();)try{he(e)}catch(n){C.__e(n,{__:(e=e.__P)&&e.__v})}for(;e=Wt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(he),t.__h.some(nt),t.__h=[]}catch(n){t.__h=[],C.__e(n,e.__v)}}}while(tt.length)}C.__b=function(e){P=null,Ht&&Ht(e)},C.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),$t&&$t(e,t)},C.__r=function(e){Gt&&Gt(e),Le=0;var t=(P=e.__c).__H;t&&(Qe==P?P.__h=[]:(t.__h.some(he),t.__h.some(nt),Le=0),t.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})),Qe=P},C.diffed=function(e){Xt&&Xt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&Vt(Wt.push(t)),t.__H.__.some(function(n){n.u&&(n.__H=n.u)})),Qe=P=null},C.__c=function(e,t){t.some(function(n){try{n.__h.some(he),n.__h=n.__h.filter(function(o){return!o.__||nt(o)})}catch(o){n.__h=[function(){throw o}]}}),zt&&zt(e,t)},C.unmount=function(e){qt&&qt(e);var t,n,o=e.__c;o&&o.__H&&(o.__H.__.some(function(i){try{if(i.__P&&i.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n=n&&n.__c}i.__P=n,Vt(tt.push(i))}else he(i)}catch(r){t=r}}),o.__H=void 0,t&&C.__e(t,o.__v))};var Bt=typeof requestAnimationFrame=="function";function Fn(e){var t,n=function(){clearTimeout(o),Bt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);Bt&&(t=requestAnimationFrame(n))}function Vt(e){e!=1&&Nt==C.requestAnimationFrame||((Nt=C.requestAnimationFrame)||Fn)(kn)}function he(e){var t=P,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),P=t}function nt(e){var t=P;e.__c=e.__(),P=t}function Yt(e,t){return!e||e.length!=t.length||t.some(function(n,o){return!Cn(n,e[o])})}var Zt=Object.assign;var Un=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini|asp|fill|st)/;var Ln=Symbol.for("react.element"),Dn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,In=/[A-Z0-9]/g,On=typeof document<"u";var Nn=function(e){return/fil|che|rad/.test(e)};j.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(j.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Jt=y.event;y.event=function(e){return Jt&&(e=Jt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Hn={configurable:!0,get:function(){return this.class}},Qt=y.vnode;y.vnode=function(e){if(typeof e.type=="string")(function(o){var i=o.props,r=o.type,s={},c=r.indexOf("-")==-1;for(var l in i){var d=i[l];if(!(l=="value"&&"defaultValue"in i&&d==null||On&&l=="children"&&r=="noscript"||l=="class"||l=="className")){if(l=="style"&&d&&d.constructor==Object){var _=void 0;for(var T in d)typeof d[T]!="number"||Un.test(T)||(_||(_=d=Zt({},d)),d[T]+="px")}else if(l=="defaultValue"&&"value"in i&&i.value==null)l="value";else if(l=="download"&&d===!0)d="";else if(l=="translate"&&d==="no")d=!1;else if(l[0]=="o"&&l[1]=="n"){var v=l.toLowerCase();v=="ondoubleclick"?l="ondblclick":v!="onchange"||r!="input"&&r!="textarea"||Nn(i.type)?v=="onfocus"?l="onfocusin":v=="onblur"&&(l="onfocusout"):v=l="oninput",v=="oninput"&&s[l=v]&&(l="oninputCapture")}else c&&Dn.test(l)?l=l.replace(In,"-$&").toLowerCase():d===null&&(d=void 0);s[l]=d}}if(r=="select"){var u=s.defaultValue!=null?s.defaultValue:s.multiple&&Array.isArray(s.value)?s.value:null;u!=null&&(s.value=je(i.children).forEach(function(h){h.props.selected=s.multiple?u.indexOf(h.props.value)!=-1:u==h.props.value}))}i.class&&!i.className?(s.class=i.class,Object.defineProperty(s,"className",Hn)):i.className&&(s.class=s.className=i.className),o.props=s})(e);else if(typeof e.type=="function"&&("ref"in e.props&&"prototype"in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=Zt({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!("ref"in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=Ln,Qt&&Qt(e)};var Gn=Symbol.for("pv"),Xn=0;function ot(e,t,n,o,i,r){t||(t={});var s,c,l=t;if("ref"in l&&typeof e!="function")for(c in l={},t)c=="ref"?s=t[c]:l[c]=t[c];var d={type:e,props:l,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:Gn,__v:--Xn,__i:-1,__u:0};return(i||r)&&(d.__source=i,d.__self=r),y.vnode&&y.vnode(d),d}var en=8,rt=4,at=24,tn=1.2,nn=.7,on=.015,zn=2.4,Oe=60,ve=100,qn=16,$n=.78,rn=["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],an=" =+xX0S8#@",un='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',Bn={horizon:0,pinch:1,rise:2,eclipse:3},Vn={none:0,wave:1,burst:2},Wn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ln=`
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
`,jn=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform int uShape;
uniform vec3 uRamp[8];
uniform int uCount;
uniform float uScale;
uniform float uSoftness;
uniform float uFlow;
uniform vec2 uSeed;
uniform vec4 uTrail[24];
uniform float uRadius;
uniform vec4 uClicks[4];
uniform int uClickEffect;
uniform float uIntro;
uniform float uFrame;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
layout(location = 1) out vec4 outAux;
${ln}
vec2 hash22(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash22(i), f);
  float b = dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 labToRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 horizon(vec2 p, float time, out float order) {
  float span = 0.5 * max(uAspect, 1.0);
  float x = p.x / span;
  float arch = -0.17 - 0.2 * x * x + 0.02 * sin(time * 0.6);
  float soft = mix(0.05, 0.22, uSoftness);
  float edge = p.y - arch;
  float rim = 0.38 * smoothstep(-soft, 0.42, edge);
  vec2 sun = vec2(0.08 * sin(time * 0.31) * span, 0.58);
  float spread = length((p - sun) / vec2(0.95 * span, 0.75));
  float sky = mix(0.55, 1.0, smoothstep(0.2, 0.95, spread));
  order = clamp(edge * 1.3, 0.0, 1.0);
  return vec3(rim, sky, smoothstep(0.18, 0.62, edge));
}

vec3 pinch(vec2 p, float time, out float order) {
  float span = 0.5 * max(uAspect, 0.75);
  float x = p.x / span;
  float sway = 0.02 * sin(x * 1.7 + time * 0.55);
  float breathe = 1.0 + 0.06 * sin(time * 0.8);
  float width = (0.13 + 0.22 * x * x) * breathe * mix(0.85, 1.2, uSoftness);
  float y = abs(p.y - sway) / width;
  float t = exp(-pow(y, 2.2)) * (0.42 + 0.58 * exp(-x * x * 1.8));
  order = clamp(abs(p.y - sway) * 2.4 + abs(x) * 0.3, 0.0, 1.0);
  return vec3(t, t, 0.0);
}

vec3 rise(vec2 p, float time, out float order) {
  float wide = max(uAspect, 0.9);
  vec2 center = vec2(0.05 * sin(time * 0.45) * wide, -0.7);
  vec2 radius = vec2(0.82 * wide, 0.64 * (1.0 + 0.04 * sin(time * 0.8)));
  float d = length((p - center) / radius);
  float soft = mix(0.6, 1.15, uSoftness);
  float t = clamp(pow(clamp(1.0 - d, 0.0, 1.0), soft) * 1.35, 0.0, 1.0);
  order = clamp((d - 0.2) * 1.3, 0.0, 1.0);
  return vec3(t, t, 0.0);
}

vec3 eclipse(vec2 p, float time, out float order) {
  float fit = min(1.0, uAspect * 1.25);
  float r = 0.23 * fit * (1.0 + 0.015 * sin(time * 0.9));
  float angle = atan(p.y, p.x);
  float rays = noise(vec2(cos(angle), sin(angle)) * 2.2 + time * 0.08) * 0.8 + 0.6;
  float d = length(p) - r;
  float reach = mix(0.07, 0.15, uSoftness) * rays * fit;
  float t = smoothstep(-0.006, 0.006 + 0.02 * uSoftness, d) * exp(-max(d, 0.0) / reach);
  order = clamp(d * 2.0, 0.0, 1.0);
  return vec3(t, t, 0.0);
}

vec4 tone(float t) {
  float x = smoothstep(0.3, 1.0, t) * float(uCount - 1);
  int index = int(floor(x));
  return vec4(mix(uRamp[index], uRamp[min(index + 1, uCount - 1)], fract(x)), smoothstep(0.0, 0.38, t));
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  float time = uTime;
  vec2 q = p / uScale;
  vec2 warp = vec2(
    noise(q * 1.6 + uSeed + vec2(0.0, time * 0.3)),
    noise(q * 1.6 + uSeed.yx + vec2(4.3, -time * 0.24))
  ) - 0.5;
  q += warp * uFlow * (uShape == 3 ? 0.04 : 0.18);
  float order = 0.0;
  vec3 shape;
  if (uShape == 0) shape = horizon(q, time, order);
  else if (uShape == 1) shape = pinch(q, time, order);
  else if (uShape == 2) shape = rise(q, time, order);
  else shape = eclipse(q, time, order);

  float reveal = clamp((uIntro * 1.45 - order) / 0.45, 0.0, 1.0);
  reveal = reveal * reveal * (3.0 - 2.0 * reveal);

  float scramble = 0.0;
  for (int i = 0; i < 24; i++) {
    vec4 point = uTrail[i];
    if (point.z <= 0.0) continue;
    vec2 d = p - point.xy;
    scramble = max(scramble, point.z * exp(-dot(d, d) / (uRadius * uRadius)));
  }
  for (int i = 0; i < 4; i++) {
    vec4 c = uClicks[i];
    if (c.w <= 0.0) continue;
    float d = length(p - c.xy);
    if (uClickEffect == 1) {
      scramble = max(scramble, exp(-pow((d - c.z * 0.75) / 0.06, 2.0)) * c.w);
    } else if (uClickEffect == 2) {
      float size = 0.08 + 0.22 * (1.0 - exp(-c.z * 5.0));
      scramble = max(scramble, (1.0 - smoothstep(size * 0.6, size, d)) * c.w);
    }
  }
  vec2 t = clamp(shape.xy * mix(0.7, 1.0, reveal), 0.0, 1.0);
  vec4 mixed = mix(tone(t.x), tone(t.y), shape.z);
  vec3 color = encode(labToRgb(mixed.rgb));
  float alpha = mixed.a * reveal;
  float dither = (hash12(gl_FragCoord.xy + uFrame * 13.7) - 0.5) / 255.0;
  outColor = clamp(vec4(color * alpha + dither, alpha + dither), 0.0, 1.0);
  outAux = vec4(reveal, scramble, 0.0, 1.0);
}`,fn=`
uniform sampler2D uField;
uniform sampler2D uAux;
uniform sampler2D uAtlas;
uniform vec2 uResolution;
uniform vec2 uCell;
uniform vec2 uOffset;
uniform vec2 uAtlasGrid;
uniform float uCount;
uniform float uDensity;
uniform float uOpacity;
uniform float uFlicker;
uniform float uDepth;
uniform float uGlyphTime;
uniform float uSeedValue;
uniform float uLight;
${ln}
float sampleGlyph(float index, vec2 local, vec2 coord, float soft) {
  float column = mod(index, uAtlasGrid.x);
  float row = floor(index / uAtlasGrid.x);
  vec2 atlasUv = vec2((column + local.x) / uAtlasGrid.x, (row + 1.0 - local.y) / uAtlasGrid.y);
  vec2 continuous = coord / uAtlasGrid;
  float scale = exp2(soft);
  return textureGrad(uAtlas, atlasUv, dFdx(continuous) * scale, dFdy(continuous) * scale).a;
}

vec4 glyphAt(vec2 px) {
  vec2 coord = (px - uOffset) / uCell;
  vec2 cell = floor(coord);
  vec2 local = coord - cell;
  vec2 uv = clamp(((cell + 0.5) * uCell + uOffset) / uResolution, vec2(0.0), vec2(1.0));
  vec4 field = texture(uField, uv);
  vec4 aux = texture(uAux, uv);
  vec3 visible = uLight > 0.5 ? field.rgb + (1.0 - field.a) : field.rgb;
  float luma = dot(visible, vec3(0.2126, 0.7152, 0.0722));
  float value = uLight > 0.5 ? clamp((1.0 - luma) * 1.5, 0.0, 1.0) : luma;
  float pick = hash12(cell + uSeedValue * 7.31);
  float level = hash12(cell * 1.73 + 4.1 + uSeedValue);
  float tick = floor(uGlyphTime * 9.0 + level * 9.0);
  float wobble = (hash12(cell * 2.31 + tick * 17.7) - 0.5) * uFlicker * 0.4 + (level - 0.5) * 0.1;
  float tone = clamp(pow(value, 0.75) + wobble, 0.0, 1.0);
  float index = floor(tone * (uCount - 1.0) + 0.5);
  float decode = max(aux.g, 1.0 - aux.r);
  if (decode > 0.02) {
    float frame = floor(uGlyphTime * 20.0);
    if (hash12(cell * 3.7 + frame * 5.3) < decode * 1.25) index = 1.0 + floor(hash12(cell + frame * 1.37) * (uCount - 1.0));
  }
  float present = step(pick, uDensity * mix(1.0, 0.3 + tone * 1.1, 0.55));
  float cutoff = smoothstep(0.03, 0.1, value);
  float focus = step(hash12(cell * 0.71 + 9.2 + uSeedValue), uDepth);
  float coverage = sampleGlyph(index, local, coord, focus * 1.2);
  float alpha = uOpacity * present * cutoff * coverage * mix(1.0, 0.35 + 0.65 * level, 0.55) * (1.0 - focus * 0.5);
  if (uLight < 0.5) {
    vec3 light = field.rgb * 0.55 + vec3(0.03) * field.a;
    return vec4(light * alpha, 0.6 * field.a * alpha);
  }
  vec3 ink = visible * 0.8;
  return vec4(ink * alpha, alpha);
}
`,Kn=`#version 300 es
precision highp float;
uniform float uDownscale;
in vec2 vUv;
out vec4 outColor;
${fn}
void main() {
  outColor = glyphAt(gl_FragCoord.xy * uDownscale);
}`,Yn=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uStep;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec4 sum = texture(uSource, vUv) * 0.2270270270;
  sum += texture(uSource, vUv + uStep * 1.3846153846) * 0.3162162162;
  sum += texture(uSource, vUv - uStep * 1.3846153846) * 0.3162162162;
  sum += texture(uSource, vUv + uStep * 3.2307692308) * 0.0702702703;
  sum += texture(uSource, vUv - uStep * 3.2307692308) * 0.0702702703;
  outColor = sum;
}`,Zn=`#version 300 es
precision highp float;
uniform sampler2D uHalo;
uniform float uGlow;
uniform float uGradient;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${fn}
void main() {
  vec4 base = texture(uField, vUv) * uGradient;
  vec4 glyph = glyphAt(gl_FragCoord.xy);
  vec4 halo = texture(uHalo, vUv) * uGlow;
  vec4 color;
  if (uLight < 0.5) {
    color = base + glyph + halo;
  } else {
    color = glyph + base * (1.0 - glyph.a);
    color += halo * 0.6 * (1.0 - color.a);
  }
  float grain = (hash12(gl_FragCoord.xy + uFrame * vec2(17.0, 59.0)) + hash12(gl_FragCoord.xy * 1.31 + uFrame * 7.0) - 1.0) * uGrain;
  float body = clamp(color.a, 0.0, 1.0);
  color.rgb += grain * (0.25 + body) * 0.5;
  color.a = clamp(color.a, 0.0, 1.0);
  color.rgb = clamp(color.rgb, 0.0, color.a);
  outColor = color;
}`,D=(e,t,n)=>Math.min(n,Math.max(t,e)),it=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Jn=([e,t,n])=>{let o=it(e),i=it(t),r=it(n),s=Math.cbrt(.4122214708*o+.5363325363*i+.0514459929*r),c=Math.cbrt(.2119034982*o+.6806995451*i+.1073969566*r),l=Math.cbrt(.0883024619*o+.2817188376*i+.6299787005*r);return[.2104542553*s+.793617785*c-.0040720468*l,1.9779984951*s-2.428592205*c+.4505937099*l,.0259040371*s+.7827717662*c-.808675766*l]},sn=(e,t,n)=>{let o=e.createShader(t);return o?(e.shaderSource(o,n),e.compileShader(o),o):null},Ie=(e,t)=>{let n=sn(e,e.VERTEX_SHADER,Wn),o=sn(e,e.FRAGMENT_SHADER,t),i=e.createProgram();return!n||!o||!i?null:(e.attachShader(i,n),e.attachShader(i,o),e.linkProgram(i),e.deleteShader(n),e.deleteShader(o),{program:i,uniforms:{}})},cn=(e,t)=>{if(!e.getProgramParameter(t.program,e.LINK_STATUS))return!1;let n=e.getProgramParameter(t.program,e.ACTIVE_UNIFORMS);for(let o=0;o<n;o++){let i=e.getActiveUniform(t.program,o);if(!i)continue;let r=i.name.replace(/\[0\]$/,"");t.uniforms[r]=e.getUniformLocation(t.program,r)}return!0},ut=(e,t)=>({textures:Array.from({length:t},()=>{let o=e.createTexture();return e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),o}),framebuffer:e.createFramebuffer(),width:0,height:0}),st=(e,t,n,o)=>{t.width===n&&t.height===o||(t.width=n,t.height=o,e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),t.textures.forEach((i,r)=>{e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,n,o,0,e.RGBA,e.UNSIGNED_BYTE,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+r,e.TEXTURE_2D,i,0)}),e.bindFramebuffer(e.FRAMEBUFFER,null))},_n=(e,t,n)=>{let o=[...new Set([...t].filter(_=>_!==`
`&&_!=="\r"))];o.length||o.push(" ");let i=`300 ${Math.round(ve*$n)}px ${n}`,r=Math.min(qn,o.length),s=Math.ceil(o.length/r),c=document.createElement("canvas");c.width=Oe*r,c.height=ve*s;let l=c.getContext("2d");l&&(l.font=i,l.textAlign="center",l.textBaseline="middle",l.fillStyle="#fff",o.forEach((_,T)=>{let v=T%r,u=Math.floor(T/r);l.fillText(_,v*Oe+Oe/2,u*ve+ve/2+3)}));let d=e.createTexture();return e.bindTexture(e.TEXTURE_2D,d),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,c),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),{texture:d,count:o.length,grid:[r,s]}},Qn=({colors:e=rn,shape:t="horizon",characters:n=an,cellSize:o=18,density:i=.8,glyphOpacity:r=.85,glow:s=.2,depthOfField:c=0,flicker:l=.2,softness:d=.5,scale:_=1,flow:T=.5,speed:v=1,gradientOpacity:u=.9,grain:h=.08,variation:A=0,mouseInteraction:E=!0,scrambleRadius:R=.1,clickEffect:x="wave",intro:S=!0,lightMode:w=!1,fontFamily:ce=un,dpr:ye,className:Y="",style:$,...xe})=>{let O=se(null),H=se(null),U=se(null),k=(Array.isArray(e)&&e.length?e:rn).slice(0,en),ct={colors:k.length>1?k:[k[0],k[0]],shape:Bn[t]??0,characters:n||an,cellSize:D(o,6,64),density:D(i,0,1),glyphOpacity:D(r,0,1),glow:D(s,0,2),depthOfField:D(c,0,1),flicker:D(l,0,1),softness:D(d,0,1),scale:D(_,.4,2.5),flow:D(T,0,2),speed:Math.max(0,v),gradientOpacity:D(u,0,1),grain:D(h,0,.4),variation:Math.max(0,A),mouseInteraction:E,scrambleRadius:D(R,.02,.4),clickEffect:Vn[x]??1,intro:S,lightMode:w,fontFamily:ce||un,dpr:ye},G=se(ct);return G.current=ct,De(()=>{let te=O.current,F=H.current,a=F?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!te||!F||!a)return;let ge=a.getExtension("KHR_parallel_shader_compile"),Ee=Ie(a,jn),_e=Ie(a,Kn),ne=Ie(a,Yn),le=Ie(a,Zn);if(!Ee||!_e||!ne||!le)return;let oe=[Ee,_e,ne,le];if(!ge&&!oe.every(f=>cn(a,f))){oe.forEach(f=>a.deleteProgram(f.program));return}let _t=a.createVertexArray(),Z=ut(a,2),N=ut(a,1),be=ut(a,1),re=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),lt=new Map,dn=f=>{let m=String(f),p=lt.get(m);if(p)return p;let b=[0,0,0];if(re){re.clearRect(0,0,1,1),re.fillStyle="#000000",re.fillStyle=m,re.fillRect(0,0,1,1);let[g,q,V]=re.getImageData(0,0,1,1).data;b=[g/255,q/255,V/255]}return lt.set(m,b),b},J=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,X={width:1,height:1,ratio:1},ft=new Float32Array(en*3),Ne=new Float32Array(rt*4),z=[],He=new Float32Array(at*4),I=[],L={x:0,y:0,inside:!1},M=null,Ge="",pt="",mt=0,dt=0,fe=G.current.intro&&!J?0:1,Te=0,Xe=0,ae=0,ie=0,Re=!0,pe=!1,we=!ge,ht=()=>!ge||oe.every(f=>a.getProgramParameter(f.program,ge.COMPLETION_STATUS_KHR)),vt=()=>{if(!a.isContextLost()){if(!we&&!ht()){requestAnimationFrame(vt);return}oe.forEach(f=>a.deleteProgram(f.program))}},hn=()=>{let f=G.current,m=`${f.fontFamily}|${f.characters}`;m===Ge&&M||(Ge=m,M&&a.deleteTexture(M.texture),M=_n(a,f.characters,f.fontFamily),document.fonts?.load?.(`300 64px ${f.fontFamily}`,f.characters).then(()=>{pe||Ge!==m||(M&&a.deleteTexture(M.texture),M=_n(a,f.characters,f.fontFamily),ze())},()=>{}))},vn=()=>{let f=G.current,m=f.colors.join(",");m!==pt&&(pt=m,f.colors.forEach((p,b)=>ft.set(Jn(dn(p)),b*3)))},yt=(f,m,p)=>{if(!M)return;let b=G.current,g=f.uniforms,q=b.cellSize*X.ratio,V=q*(Oe/ve);a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,Z.textures[0]),a.uniform1i(g.uField,0),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,Z.textures[1]),a.uniform1i(g.uAux,1),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,M.texture),a.uniform1i(g.uAtlas,2),a.uniform2f(g.uResolution,m,p),a.uniform2f(g.uCell,V,q),a.uniform2f(g.uOffset,(m-Math.ceil(m/V)*V)/2,(p-Math.ceil(p/q)*q)/2),a.uniform2f(g.uAtlasGrid,M.grid[0],M.grid[1]),a.uniform1f(g.uCount,M.count),a.uniform1f(g.uDensity,b.density),a.uniform1f(g.uOpacity,b.glyphOpacity),a.uniform1f(g.uFlicker,J?0:b.flicker),a.uniform1f(g.uDepth,b.depthOfField),a.uniform1f(g.uGlyphTime,dt),a.uniform1f(g.uSeedValue,b.variation),a.uniform1f(g.uLight,b.lightMode?1:0)},ze=()=>{if(!we)return;let f=G.current,m=X.width/X.height;hn(),vn(),a.bindVertexArray(_t),a.disable(a.BLEND),a.bindFramebuffer(a.FRAMEBUFFER,Z.framebuffer),a.drawBuffers([a.COLOR_ATTACHMENT0,a.COLOR_ATTACHMENT1]),a.viewport(0,0,Z.width,Z.height),a.useProgram(Ee.program);let p=Ee.uniforms;a.uniform1f(p.uAspect,m),a.uniform1f(p.uTime,mt),a.uniform1i(p.uShape,f.shape),a.uniform3fv(p.uRamp,ft),a.uniform1i(p.uCount,f.colors.length),a.uniform1f(p.uScale,f.scale),a.uniform1f(p.uSoftness,f.softness),a.uniform1f(p.uFlow,f.flow),a.uniform2f(p.uSeed,f.variation*3.17,f.variation*1.91),a.uniform4fv(p.uTrail,He),a.uniform1f(p.uRadius,f.scrambleRadius),a.uniform4fv(p.uClicks,Ne),a.uniform1i(p.uClickEffect,f.clickEffect),a.uniform1f(p.uIntro,fe),a.uniform1f(p.uFrame,Te),a.drawArrays(a.TRIANGLES,0,3);let b=f.glow>.001;b&&(a.bindFramebuffer(a.FRAMEBUFFER,N.framebuffer),a.drawBuffers([a.COLOR_ATTACHMENT0]),a.viewport(0,0,N.width,N.height),a.useProgram(_e.program),yt(_e,F.width,F.height),a.uniform1f(_e.uniforms.uDownscale,F.width/N.width),a.drawArrays(a.TRIANGLES,0,3),a.useProgram(ne.program),a.activeTexture(a.TEXTURE0),a.uniform1i(ne.uniforms.uSource,0),a.bindFramebuffer(a.FRAMEBUFFER,be.framebuffer),a.bindTexture(a.TEXTURE_2D,N.textures[0]),a.uniform2f(ne.uniforms.uStep,1/N.width,0),a.drawArrays(a.TRIANGLES,0,3),a.bindFramebuffer(a.FRAMEBUFFER,N.framebuffer),a.bindTexture(a.TEXTURE_2D,be.textures[0]),a.uniform2f(ne.uniforms.uStep,0,1/N.height),a.drawArrays(a.TRIANGLES,0,3)),a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,F.width,F.height),a.useProgram(le.program),yt(le,F.width,F.height);let g=le.uniforms;a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,N.textures[0]),a.uniform1i(g.uHalo,3),a.uniform1f(g.uGlow,b?f.glow:0),a.uniform1f(g.uGradient,f.gradientOpacity),a.uniform1f(g.uGrain,f.grain),a.uniform1f(g.uFrame,Te),a.drawArrays(a.TRIANGLES,0,3)},xt=()=>{let f=G.current;X.width=Math.max(1,te.clientWidth),X.height=Math.max(1,te.clientHeight),X.ratio=Math.min(f.dpr||window.devicePixelRatio||1,2),F.width=Math.max(1,Math.round(X.width*X.ratio)),F.height=Math.max(1,Math.round(X.height*X.ratio)),st(a,Z,Math.max(1,Math.round(F.width/2)),Math.max(1,Math.round(F.height/2)));let m=Math.max(1,Math.round(F.width/4)),p=Math.max(1,Math.round(F.height/4));st(a,N,m,p),st(a,be,m,p),ze(),ue()},yn=f=>{for(I.forEach(m=>{m.age+=f});I.length&&I[I.length-1].age>nn;)I.pop();for(let m=0;m<at;m++){let p=I[m];if(!p){He[m*4+2]=0;continue}let b=1-p.age/nn;He.set([p.x,p.y,b*b,0],m*4)}for(z.forEach(m=>{m.age+=f});z.length&&z[z.length-1].age>tn;)z.pop();for(let m=0;m<rt;m++){let p=z[m];if(!p){Ne[m*4+3]=0;continue}let b=p.age/tn,g=Math.min(1,p.age/.08)*(1-b)*(1-b);Ne.set([p.x,p.y,p.age,g],m*4)}},qe=f=>{if(ae=0,pe||!Re||document.hidden)return;if(!we){if(!a.isContextLost()&&!ht()){ae=requestAnimationFrame(qe);return}if(!oe.every(g=>cn(a,g))){At();return}we=!0}let m=G.current,p=ie?D((f-ie)/1e3,.001,.05):1/60;ie=f,J||(mt+=p*m.speed*.5,dt+=p*Math.max(m.speed,.15)),fe<1&&(fe=Math.min(1,fe+p/zn)),Xe+=p,!J&&Xe>1/24&&(Xe=0,Te=(Te+1)%97),yn(p),ze(),!J||fe<1||z.length>0||I.length>0?ae=requestAnimationFrame(qe):ie=0};function ue(){!ae&&!pe&&Re&&!document.hidden&&(ae=requestAnimationFrame(qe))}let gt=f=>{let m=te.getBoundingClientRect(),p=(f.clientX-m.left)/Math.max(1,m.width),b=1-(f.clientY-m.top)/Math.max(1,m.height),g=m.width/Math.max(1,m.height);L.inside=p>=0&&p<=1&&b>=0&&b<=1,L.x=(p-.5)*g,L.y=b-.5},Et=f=>{gt(f);let m=G.current;if(!L.inside||!m.mouseInteraction||J)return;let p=I[0],b=p?Math.hypot(L.x-p.x,L.y-p.y):1/0;if(!(b<on)){if(p&&p.age<.1){let g=Math.min(6,Math.floor(b/(on*2)));for(let q=1;q<=g;q++){let V=q/(g+1);I.unshift({x:p.x+(L.x-p.x)*V,y:p.y+(L.y-p.y)*V,age:0})}}I.unshift({x:L.x,y:L.y,age:0}),I.length=Math.min(I.length,at),ue()}},bt=f=>{gt(f);let m=G.current;!L.inside||!m.clickEffect||J||(z.unshift({x:L.x,y:L.y,age:0}),z.length>rt&&z.pop(),ue())},Tt=()=>{ie=0,ue()},Rt=new ResizeObserver(xt);Rt.observe(te);let wt=new IntersectionObserver(f=>{Re=f.some(m=>m.isIntersecting),Re&&(ie=0,ue())});wt.observe(te),window.addEventListener("pointermove",Et,{passive:!0}),window.addEventListener("pointerdown",bt,{passive:!0}),document.addEventListener("visibilitychange",Tt),xt(),U.current=ue;let At=()=>{pe||(pe=!0,cancelAnimationFrame(ae),U.current=null,Rt.disconnect(),wt.disconnect(),window.removeEventListener("pointermove",Et),window.removeEventListener("pointerdown",bt),document.removeEventListener("visibilitychange",Tt),[Z,N,be].forEach(f=>{f.textures.forEach(m=>a.deleteTexture(m)),a.deleteFramebuffer(f.framebuffer)}),M&&a.deleteTexture(M.texture),a.deleteVertexArray(_t),F.isConnected?vt():(oe.forEach(f=>a.deleteProgram(f.program)),a.getExtension("WEBGL_lose_context")?.loseContext()))};return At},[]),De(()=>{U.current?.()}),ot("div",{ref:O,className:`gradient-ascii-container${Y?` ${Y}`:""}`,style:$,...xe,children:ot("canvas",{ref:H,className:"gradient-ascii-canvas","aria-hidden":"true"})})},pn=Qn;var mn=document.getElementById("gradientascii");if(mn){let e=()=>document.documentElement.dataset.theme!=="dark",t=()=>Je(Ue(pn,{colors:["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],shape:"horizon",characters:" =+xX0S8#@",cellSize:18,density:.8,glyphOpacity:.85,glow:.2,depthOfField:0,flicker:.2,softness:.5,scale:1,flow:.5,speed:1,gradientOpacity:.9,grain:.08,variation:0,mouseInteraction:!0,scrambleRadius:.1,clickEffect:"wave",intro:!0,lightMode:window.__gaLight?e():!1}),mn);t(),window.__gaLight&&new MutationObserver(t).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}})();
