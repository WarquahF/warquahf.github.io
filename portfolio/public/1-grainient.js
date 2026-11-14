/* React Bits Grainient (DavidHDev/react-bits), bundled with Preact; theme-aware natural palette */
(()=>{var s=document.createElement("style");s.textContent=".grainient-container{position:relative;width:100%;height:100%;overflow:hidden}.grainient-canvas{position:absolute;inset:0;display:block;width:100%;height:100%}\n";document.head.appendChild(s)})();
(()=>{var h,bt,nn,j,ze,Re,xt,Se,wt,qe,We,rn,he=Symbol.for("pv"),ke={},Ce=[],on=/^m(i|n|o|s|text|space)$/,Me=Array.isArray,Ve=Ce.slice,J=Object.assign;function Z(e){e&&e.parentNode&&e.remove()}function Pe(e,t,n){var o,i,r,_={},u=arguments.length;for(r in t)r=="key"?o=t[r]:r=="ref"&&typeof e!="function"?i=t[r]:_[r]=t[r];return u>2&&(_.children=u>3?Ve.call(arguments,2):n),de(e,_,o,i,null)}function de(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:he,__v:i||++bt,__i:-1,__u:0};return!i&&h.vnode&&h.vnode(r),r}function $(e){return e.children}function G(e,t){this.props=e,this.context=t,this.__g=0}function X(e,t){if(t==null)return e.__&&X(e.__,e.__i+1);for(var n;t<e.__k.length;t++)if((n=e.__k[t])&&n.__e)return n.__e;return typeof e.type!="function"||e.props.__P?null:X(e)}function an(e){var t,n=e.__v,o=n.__e,i=[],r=[],_=e.__P;_&&((t=J({constructor:he},n)).__v=n.__v+1,h.vnode&&h.vnode(t),Be(_,t,n,e.__n,_.namespaceURI,32&n.__u?[o]:null,i,o||X(n),32&n.__u,r),t.__v=n.__v,t.__.__k[t.__i]=t,Ct(i,t,r),n.__=n.__e=null,t.__e!=o&&Et(t))}function Et(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),Et(e)}function yt(e){(8&e.__g||(e.__g|=8,j.push(e),Re++))&&ze==h.debounceRendering||((ze=h.debounceRendering)||queueMicrotask)(St)}function St(){try{for(var e,t=1;j.length;)j.length>t&&j.sort(xt),e=j.shift(),t=j.length,8&e.__g&&an(e)}finally{(Re=j.length)&&(ze||queueMicrotask)(St)}}function Tt(e,t,n,o,i,r,_,u,l,f,c){var E,m,a,d,k,y,S=o.__k||Ce,v=t.length;for(l=_n(n,t,S,l,v),E=0;E<v;E++)(a=n.__k[E])!=null&&(m=~a.__i&&S[a.__i]||ke,a.__i=E,y=Be(e,a,m,i,r,_,u,l,f,c),d=a.__e,(m.ref!=a.ref||8&m.__u)&&(m.ref&&je(m.ref,null,a,m),a.ref&&c.push(a.ref,a.__c||d,a)),k=k||d,4&a.__u?(l=Rt(a,l,e,!m.__v),m.__e&&(m.__e=null)):typeof a.type=="function"&&y!==void 0?l=y:d&&(l=d.nextSibling),a.__u&=-21);return n.__e=k,l}function _n(e,t,n,o,i){var r,_,u,l,f,c,E,m,a,d=n.length,k=d,y=0,S=0,v=e.__k=Array(i);for(r=0;r<i;r++)(_=t[r])!=null&&typeof _!="boolean"&&typeof _!="function"?(typeof _!="object"||_.constructor===String?_=v[r]=de(null,_):Me(_)?_=v[r]=de($,{children:_}):_.constructor===he&&_.__b?_=v[r]=de(_.type,_.props,_.key,_.ref,_.__v):v[r]=_,l=r+y,_.__=e,_.__b=e.__b+1,u=null,~(f=_.__i=un(_,n,l,k))&&(k--,(u=n[f])&&(u.__u|=2)),u&&u.__v?(_.__u|=16,f==l-1?y--:f==l+1?y++:f!=l&&(f>l?y--:y++,S=1)):(~f||(i>d?y--:i<d&&y++),typeof _.type!="function"&&(_.__u|=4))):v[r]=null;if(S){for(c=[],E=[],r=0;r<i;r++)if((_=v[r])&&16&_.__u){for(y=0,m=c.length;y<m;)c[a=y+m>>1]<_.__i?y=a+1:m=a;c[y]=_.__i,E[r]=y+1}for(y=c.length;r--;)E[r]&&(E[r]==y?y--:v[r].__u|=4)}if(k)for(r=0;r<d;r++)!(u=n[r])||2&u.__u||(u.__e==o&&(o=X(u)),Ge(u,u));return o}function Rt(e,t,n,o){var i,r,_,u;if(typeof e.type=="function"){if(e.props.__P)return t;if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&(i[r].__=e,t=Rt(i[r],t,n,!1));return t}for(t&&!t.parentNode&&(t=X(e))&&!t.parentNode&&(t=null),_=e.__e,u=t;u&&u.nodeType==8;)u=u.nextSibling;for(_!=u&&(!o&&n.moveBefore&&_.parentNode?n.moveBefore(_,t):n.insertBefore(_,t||null)),t=_;(t=t&&t.nextSibling)&&t.nodeType==8&&!t.data.startsWith("$s"););return t}function $e(e,t){return t=t||[],e!=null&&typeof e!="boolean"&&(Me(e)?e.some(function(n){$e(n,t)}):t.push(e)),t}function un(e,t,n,o){var i,r=e.key,_=e.type,u=t[n],l=u&&!(2&u.__u);if(u===null&&r==null||l&&r==u.key&&_==u.type)return n;if(o>(l?1:0)){for(i=n-1;i>=0;i--)if((u=t[i])&&!(2&u.__u)&&r==u.key&&_==u.type)return i;for(i=n+1;i<t.length;i++)if((u=t[i])&&!(2&u.__u)&&r==u.key&&_==u.type)return i}return-1}function gt(e,t,n){n==null&&(n=""),t[0]=="-"?e.setProperty(t,n):e[t]=n}function Ee(e,t,n,o,i){var r,_;if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||gt(e.style,t);if(n)for(t in n)o&&n[t]==o[t]||gt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")typeof n!="function"&&(n=null),typeof o!="function"&&(o=null),(e.__e||(e.__e={}))[t]=n,n&&o||(_=We[t]||(We[t]=sn(t)),(e.__a||(e.__a={}))[t]=qe,r=t!=(t=t.replace(wt,"$1")),(t=t.slice(2))[0]<"a"&&(t=t.toLowerCase()),n?e.addEventListener(t,_,r):e.removeEventListener(t,_,r));else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{return void(e[t]=n??"")}catch{}if(typeof n=="function")return;n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n)}}function sn(e){return function(t){var n=this.__e;if(n){if(n=n[e],t[Se]==null)t[Se]=qe++;else if(t[Se]<this.__a[e])return;return n(h.event?h.event(t):t)}}}function Be(e,t,n,o,i,r,_,u,l,f){var c,E,m,a,d,k,y,S,v,C,T,Q,ve,ee,z,se,I,N,O=t.type;if(t.constructor!==he)return null;128&n.__u&&(l=32&n.__u,c=n.__c.__z)&&(t.__u|=l,E=r=[],c.nodeType==8?u=Te(c,r):r.push(c),u=r[0]||u),(c=h.__b)&&c(t);e:if(typeof O=="function"){m=_.length;try{if(S=t.props,v=(c=O.prototype)&&c.render,C=(c=O.contextType)&&o[c.__c],T=c?C?C.props.value:c.__:o,(a=n.__c)?(t.__c=a,2&a.__g&&(a.__g|=1)):(v?t.__c=a=new O(S,T):(t.__c=a=new G(S,T),a.constructor=O,a.render=ln),C&&C.sub(a),a.state||(a.state={}),a.__n=o,a.__g|=8,a.__h=[],a.__k=[]),v&&(a.__s||(a.__s=a.state),O.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=J({},a.__s)),J(a.__s,O.getDerivedStateFromProps(S,a.__s)))),d=a.props,k=a.state,a.__v=t,n.__c){if(S!==d&&v&&!O.getDerivedStateFromProps&&a.componentWillReceiveProps&&a.componentWillReceiveProps(S,T),t.__v==n.__v&&!(8&a.__g)||!(4&a.__g)&&a.shouldComponentUpdate&&a.shouldComponentUpdate(S,a.__s,T)===!1){t.__v!=n.__v&&(a.props=S,a.state=a.__s,a.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(R){R&&(R.__=t)}),Ce.push.apply(a.__h,a.__k),a.__k=[],a.__h.length&&_.push(a),u=X(n);break e}a.componentWillUpdate&&a.componentWillUpdate(S,a.__s,T),v&&a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(d,k,y)})}else v&&!O.getDerivedStateFromProps&&a.componentWillMount&&a.componentWillMount(),v&&a.componentDidMount&&a.__h.push(a.componentDidMount);a.context=T,a.props=S,a.__P=e,a.__g&=-5,Q=h.__r,ve=v?25:0;do a.__g&=-9,Q&&Q(t),c=a.render(a.props,a.state=a.__s,a.context);while(8&a.__g&&++ve<25);v&&(Ce.push.apply(a.__h,a.__k),a.__k=[]),a.state=a.__s,a.getChildContext&&(o=J({},o,a.getChildContext())),v&&n.__c&&a.getSnapshotBeforeUpdate&&(y=a.getSnapshotBeforeUpdate(d,k)),ee=c&&c.type===$&&c.key==null?c.props.children:c,S.__P&&(c=u,i=(e=S.__P).namespaceURI,l=r=null,n.props&&n.props.__P!=e&&(n.__k.some(function(R){R&&Ge(R,R)}),n.__k=null),u=n.__k?X(n,0):null),u=Tt(e,Me(ee)?ee:[ee],t,n,o,i,r,_,u,l,f),S.__P&&(t.__e=null,u=c),t.__u&=-161,E&&E.some(Z),a.__h.length&&_.push(a),1&a.__g&&(a.__g&=-4)}catch(R){if(_.length=m,t.__v=null,l||r)if(R&&R.then){if(t.__u|=128|l,r){for(~(I=r.indexOf(u||void 0))||(I=r.length);(N=r[I-1])&&N.nodeType==8;)I--;for(;I<r.length;I++)if(N=r[I])if(r[I]=null,z){if(N==se)break}else{if(N.nodeType!=8)break;N.data.startsWith("$s")&&(se=Te(z=N))}}if(!z){for(;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;z=u}(c=Te(z=t.__c.__z||(t.__c.__z=z)))?(t.__e=z,u=c):t.__e=u,u=u&&u.nextSibling}else r&&r.some(Z);else t.__e=n.__e;t.__k||(t.__k=n.__k||[]),R&&R.then||kt(t),h.__e(R,t,n)}}else u=t.__e=cn(n.__e,t,n,o,i,r,_,l,f,e);return(c=h.diffed)&&c(t),u}function Te(e,t){if(e&&e.nodeType==8&&e.data.startsWith("$s"))for(var n=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith("$s"))n++;else if(e.data.startsWith("/$s")&&!--n)return e}t&&t.push(e)}}function kt(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(kt))}function Ct(e,t,n){for(var o=0;o<n.length;)je(n[o++],n[o++],n[o++]);h.__c&&h.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function cn(e,t,n,o,i,r,_,u,l,f){var c,E,m,a,d,k,y,S,v=n.props||ke,C=t.props,T=t.type;if(T=="svg"?i="http://www.w3.org/2000/svg":T=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r){for(c=0;c<r.length;c++)if((d=r[c])&&(T?d.localName==T:d.nodeType==3)){e=d,r[c]=null;break}}if(!e){if(S=f.ownerDocument||document,!T)return S.createTextNode(C);e=S.createElementNS(i,T,C.is?C:f),u&&(h.__m&&h.__m(t,r),u=!1),r=null}if(T){if(f=T=="template"&&e.content||e,r=T=="textarea"&&C.defaultValue!=null?null:r&&Ve.call(f.childNodes),!u&&r)for(v={},c=0;c<e.attributes.length;c++)v[(d=e.attributes[c]).name]=d.value;for(c in v)d=v[c],c=="dangerouslySetInnerHTML"?m=d:c=="children"||c in C||c=="value"&&"defaultValue"in C||c=="checked"&&"defaultChecked"in C||Ee(e,c,null,d,i);for(c in C)d=C[c],c=="children"?a=d:c=="dangerouslySetInnerHTML"?E=d:c=="value"?k=d:c=="checked"?y=d:u&&typeof d!="function"||v[c]===d||Ee(e,c,d,v[c],i);E?(u||m&&(E.__html==m.__html||E.__html==e.innerHTML)||(e.innerHTML=E.__html),t.__k=[]):(m&&(e.textContent=""),(T=="foreignObject"||i=="http://www.w3.org/1998/Math/MathML"&&on.test(T))&&(i="http://www.w3.org/1999/xhtml"),Tt(f,Me(a)?a:[a],t,n,o,i,r,_,r?r[0]:n.__k&&X(n,0),u,l),r&&r.some(Z)),u&&T!="textarea"||(c="value",T=="progress"&&k==null?e.removeAttribute(c):k==null||k===e[c]&&(T!="progress"||k)||Ee(e,c,k,v[c],i),c="checked",y!=null&&y!=e[c]&&Ee(e,c,y,v[c],i))}else v===C||u&&e.data==C||(e.data=C);return e}function je(e,t,n,o){try{typeof e=="function"?t?t.__x=e(t)||1:o&&(o=o.__c||o.__e)&&(t=o.__x)&&(o.__x=null,typeof t=="function"?t():e(null)):e.current=t}catch(i){h.__e(i,n)}}function Ge(e,t,n){var o,i,r,_;if(h.unmount&&h.unmount(e),!(o=e.ref)||o.current&&o.current!=e.__e||je(o,null,t,e),o=e.__c){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(u){h.__e(u,t)}o.__P=o.__n=null}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&Ge(o[_],t,typeof e.type!="function"||n&&!e.props.__P);!n&&(o=e.__c)&&(o=o.__z)&&(i=Te(o,r=[]))&&(o==e.__e&&r.some(Z),Z(i),Z(o)),n||Z(e.__e),e.__e=e.__c=e.__=null}function ln(e,t,n){return this.constructor(e,n)}function Xe(e,t){var n,o,i,r;h.__&&h.__(e,t),t.nodeType==9&&(t=t.documentElement),o=(n=e&&32&e.__u)?null:t.__k,t.__k=de($,{children:[e]}),i=[],r=[],Be(t,t.__k,o||ke,ke,t.namespaceURI,o?null:t.firstChild?Ve.call(t.childNodes):null,i,o?o.__e:t.firstChild,n,r),Ct(i,t.__k,r),t.__k.props.children=null}h={__e:function(e,t,n,o){for(var i,r,_;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((_=(r=i.constructor)&&r.getDerivedStateFromError)&&i.setState(r.getDerivedStateFromError(e)),i.componentDidCatch&&(i.componentDidCatch(e,o||{}),_=1),_&&8&i.__g)return void(i.__g|=2)}catch(u){e=u}}throw Re=0,e}},bt=0,nn=function(e){return e!=null&&e.constructor===he},G.prototype.setState=function(e,t){var n=this.__s;n&&n!=this.state||(n=this.__s=J({},this.state)),typeof e=="function"&&(e=e(J({},n),this.props)),e&&(J(n,e),this.__v&&(t&&this.__k.push(t),yt(this)))},G.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),yt(this))},G.prototype.render=$,j=[],Re=0,xt=function(e,t){return e.__v.__b-t.__v.__b},Se=Symbol(),wt=/(PointerCapture)$|Capture$/i,qe=0,We={},rn=0;var Ae,U,Ye,Mt,fn=Object.is,Ke=0,Ot=[],Ze=[],P=h,Pt=P.__b,At=P.__r,Ft=P.diffed,Dt=P.__c,Ut=P.unmount,Lt=P.__;function Ht(e,t){P.__h&&P.__h(U,e,Ke||t),Ke=0;var n=U.__H||(U.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Fe(e,t){var n=Ht(Ae++,3);!P.__s&&Wt(n.__H,t)&&(n.__P=!0,n.__=e,n.u=t,U.__H.__h.push(n))}function ue(e){return Ke=5,zt(function(){return{current:e}},[])}function zt(e,t){var n=Ht(Ae++,7);return Wt(n.__H,t)&&(n.__=e(),n.__H=t),n.__}function pn(){var e;do{for(;e=Ze.shift();)try{me(e)}catch(n){P.__e(n,{__:(e=e.__P)&&e.__v})}for(;e=Ot.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(me),t.__h.some(Je),t.__h=[]}catch(n){t.__h=[],P.__e(n,e.__v)}}}while(Ze.length)}P.__b=function(e){U=null,Pt&&Pt(e)},P.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Lt&&Lt(e,t)},P.__r=function(e){At&&At(e),Ae=0;var t=(U=e.__c).__H;t&&(Ye==U?U.__h=[]:(t.__h.some(me),t.__h.some(Je),Ae=0),t.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})),Ye=U},P.diffed=function(e){Ft&&Ft(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&Nt(Ot.push(t)),t.__H.__.some(function(n){n.u&&(n.__H=n.u)})),Ye=U=null},P.__c=function(e,t){t.some(function(n){try{n.__h.some(me),n.__h=n.__h.filter(function(o){return!o.__||Je(o)})}catch(o){n.__h=[function(){throw o}]}}),Dt&&Dt(e,t)},P.unmount=function(e){Ut&&Ut(e);var t,n,o=e.__c;o&&o.__H&&(o.__H.__.some(function(i){try{if(i.__P&&i.__c){if(n===void 0){for(n=e.__;n&&(!n.__c||!n.__c.__P);)n=n.__;n=n&&n.__c}i.__P=n,Nt(Ze.push(i))}else me(i)}catch(r){t=r}}),o.__H=void 0,t&&P.__e(t,o.__v))};var It=typeof requestAnimationFrame=="function";function dn(e){var t,n=function(){clearTimeout(o),It&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);It&&(t=requestAnimationFrame(n))}function Nt(e){e!=1&&Mt==P.requestAnimationFrame||((Mt=P.requestAnimationFrame)||dn)(pn)}function me(e){var t=U,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),U=t}function Je(e){var t=U;e.__c=e.__(),U=t}function Wt(e,t){return!e||e.length!=t.length||t.some(function(n,o){return!fn(n,e[o])})}var qt=Object.assign;var vn=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini|asp|fill|st)/;var yn=Symbol.for("react.element"),gn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,bn=/[A-Z0-9]/g,xn=typeof document<"u";var wn=function(e){return/fil|che|rad/.test(e)};G.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(G.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Vt=h.event;h.event=function(e){return Vt&&(e=Vt(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var En={configurable:!0,get:function(){return this.class}},$t=h.vnode;h.vnode=function(e){if(typeof e.type=="string")(function(o){var i=o.props,r=o.type,_={},u=r.indexOf("-")==-1;for(var l in i){var f=i[l];if(!(l=="value"&&"defaultValue"in i&&f==null||xn&&l=="children"&&r=="noscript"||l=="class"||l=="className")){if(l=="style"&&f&&f.constructor==Object){var c=void 0;for(var E in f)typeof f[E]!="number"||vn.test(E)||(c||(c=f=qt({},f)),f[E]+="px")}else if(l=="defaultValue"&&"value"in i&&i.value==null)l="value";else if(l=="download"&&f===!0)f="";else if(l=="translate"&&f==="no")f=!1;else if(l[0]=="o"&&l[1]=="n"){var m=l.toLowerCase();m=="ondoubleclick"?l="ondblclick":m!="onchange"||r!="input"&&r!="textarea"||wn(i.type)?m=="onfocus"?l="onfocusin":m=="onblur"&&(l="onfocusout"):m=l="oninput",m=="oninput"&&_[l=m]&&(l="oninputCapture")}else u&&gn.test(l)?l=l.replace(bn,"-$&").toLowerCase():f===null&&(f=void 0);_[l]=f}}if(r=="select"){var a=_.defaultValue!=null?_.defaultValue:_.multiple&&Array.isArray(_.value)?_.value:null;a!=null&&(_.value=$e(i.children).forEach(function(d){d.props.selected=_.multiple?a.indexOf(d.props.value)!=-1:a==d.props.value}))}i.class&&!i.className?(_.class=i.class,Object.defineProperty(_,"className",En)):i.className&&(_.class=_.className=i.className),o.props=_})(e);else if(typeof e.type=="function"&&("ref"in e.props&&"prototype"in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=qt({},e.props);for(var n in e.type.defaultProps)t[n]===void 0&&(t[n]=e.type.defaultProps[n]);e.props=t}e.ref&&!("ref"in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=yn,$t&&$t(e)};var Sn=Symbol.for("pv"),Tn=0;function Qe(e,t,n,o,i,r){t||(t={});var _,u,l=t;if("ref"in l&&typeof e!="function")for(u in l={},t)u=="ref"?_=t[u]:l[u]=t[u];var f={type:e,props:l,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:Sn,__v:--Tn,__i:-1,__u:0};return(i||r)&&(f.__source=i,f.__self=r),h.vnode&&h.vnode(f),f}var Bt=8,De=24,et=4,jt=1.3,Rn=.06,Gt=2.6,kn=1.6,Xt=["#120f17","#2a0f0a","#9a3412","#f97316","#fed7aa"],Cn={linear:0,radial:1},tt=.2,Mn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Pn=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRamp[8];
uniform int uCount;
uniform int uType;
uniform vec2 uDir;
uniform float uExtent;
uniform float uBands;
uniform float uSoftness;
uniform float uFlow;
uniform float uScale;
uniform float uSilk;
uniform vec4 uStir[24];
uniform float uStirWeight[24];
uniform vec4 uTwirl[4];
uniform vec2 uSeed;
uniform float uContrast;
uniform float uSaturation;
uniform float uSettle;
uniform float uReveal;
in vec2 vUv;
out vec4 outColor;

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash2(i), f);
  float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 drift(vec2 p, float t) {
  vec2 w1 = vec2(
    noise(p * 0.85 + vec2(t * 0.11, t * 0.07)),
    noise(p * 0.85 + vec2(4.1, 1.7) - vec2(t * 0.08, t * 0.12))
  );
  vec2 w2 = vec2(
    noise(p * 1.55 + w1 * 1.8 + vec2(1.3, 7.1) + t * 0.05),
    noise(p * 1.55 + w1 * 1.8 + vec2(6.4, 2.2) - t * 0.06)
  );
  return (w1 - 0.5) * 1.1 + (w2 - 0.5) * 0.55;
}

vec2 warp(vec2 p) {
  vec2 q = p / uScale;
  if (uType == 1) {
    float turn = uTime * 0.35;
    q = mat2(cos(turn), sin(turn), -sin(turn), cos(turn)) * q;
  } else {
    q += vec2(-uDir.y, uDir.x) * uTime * 0.45;
  }
  return p + drift(q + uSeed, uTime) * uFlow * uScale * uSettle;
}

float coord(vec2 p) {
  vec2 w = warp(p);
  return uType == 1 ? 1.0 - length(w) * 1.1 : dot(w, uDir) / uExtent + 0.5;
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

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  for (int i = 0; i < 24; i++) {
    float w = uStirWeight[i];
    if (w <= 0.0) continue;
    vec2 d = p - uStir[i].xy;
    p -= uStir[i].zw * w * exp(-dot(d, d) / 0.045);
  }
  for (int i = 0; i < 4; i++) {
    float angle = uTwirl[i].z;
    if (angle == 0.0) continue;
    vec2 d = p - uTwirl[i].xy;
    float a = angle * exp(-dot(d, d) / (uTwirl[i].w * uTwirl[i].w));
    float c = cos(a);
    float s = sin(a);
    p = uTwirl[i].xy + mat2(c, -s, s, c) * d;
  }
  float raw = coord(p);
  float s = raw;
  if (uBands > 1.0) {
    s *= uBands;
    float cycle = floor(s);
    s = fract(s);
    if (mod(cycle, 2.0) > 0.5) s = 1.0 - s;
  }
  s = clamp(s, 0.0, 1.0);
  float scaled = s * float(uCount - 1);
  int index = int(min(floor(scaled), float(uCount - 2)));
  float f = scaled - float(index);
  float edge = max(uSoftness * 0.5, fwidth(scaled) * 0.75);
  float shaped = smoothstep(0.5 - edge, 0.5 + edge, f);
  vec3 from = uRamp[0];
  vec3 to = uRamp[1];
  for (int i = 0; i < 7; i++) {
    if (i == index) {
      from = uRamp[i];
      to = uRamp[i + 1];
    }
  }
  vec3 lab = mix(from, to, shaped);
  if (uSilk > 0.0) {
    vec2 grad = vec2(coord(p + vec2(0.004, 0.0)) - raw, coord(p + vec2(0.0, 0.004)) - raw) / 0.004;
    vec2 slope = grad * sin(3.14159265 * clamp(raw, 0.0, 1.0) * uBands) * uSilk * 4.0;
    vec3 normal = normalize(vec3(-slope, 1.0));
    vec3 light = normalize(vec3(-uDir.y, uDir.x, 1.2));
    float diffuse = dot(normal, light) - light.z;
    lab = uRamp[0] + (lab - uRamp[0]) * (1.0 + (diffuse * 0.35 + max(diffuse, 0.0) * diffuse * 0.6) * uSilk);
  }
  lab = mix(uRamp[0], lab, smoothstep(0.0, 1.0, uReveal * 1.5 - length(vUv - 0.5) * 0.6));
  lab.x = (lab.x - 0.55) * uContrast + 0.55;
  lab.yz *= uSaturation;
  outColor = vec4(encode(labToRgb(lab)), 1.0);
}`,An=`#version 300 es
precision highp float;
uniform sampler2D uField;
uniform float uGrain;
uniform float uGrainSize;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float clump(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec3 color = texture(uField, vUv).rgb;
  vec2 pixel = gl_FragCoord.xy + uFrame * vec2(17.0, 59.0);
  float fine = hash(pixel) + hash(pixel + 7.13) - 1.0;
  float coarse = (clump(pixel / max(uGrainSize, 1.0)) - 0.5) * 2.0;
  float grain = mix(fine, coarse, clamp(uGrainSize - 1.0, 0.0, 1.0) * 0.8);
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color += grain * uGrain * (0.45 + 2.2 * luma * (1.0 - luma));
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`,H=(e,t,n)=>Math.min(n,Math.max(t,e)),nt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Fn=([e,t,n])=>{let o=nt(e),i=nt(t),r=nt(n),_=Math.cbrt(.4122214708*o+.5363325363*i+.0514459929*r),u=Math.cbrt(.2119034982*o+.6806995451*i+.1073969566*r),l=Math.cbrt(.0883024619*o+.2817188376*i+.6299787005*r);return[.2104542553*_+.793617785*u-.0040720468*l,1.9779984951*_-2.428592205*u+.4505937099*l,.0259040371*_+.7827717662*u-.808675766*l]},Yt=(e,t,n)=>{let o=e.createShader(t);return o?(e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(e.deleteShader(o),null)):null},Kt=(e,t)=>{let n=Yt(e,e.VERTEX_SHADER,Mn),o=Yt(e,e.FRAGMENT_SHADER,t),i=e.createProgram();if(!n||!o||!i)return null;if(e.attachShader(i,n),e.attachShader(i,o),e.linkProgram(i),e.deleteShader(n),e.deleteShader(o),!e.getProgramParameter(i,e.LINK_STATUS))return e.deleteProgram(i),null;let r={},_=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<_;u++){let l=e.getActiveUniform(i,u);if(!l)continue;let f=l.name.replace(/\[0\]$/,"");r[f]=e.getUniformLocation(i,f)}return{program:i,uniforms:r}},Dn=({colors:e=Xt,type:t="linear",angle:n=55,bands:o=1,speed:i=1,flow:r=.8,scale:_=1,softness:u=1,silk:l=.35,grainAmount:f=.08,grainSize:c=1.2,grainAnimated:E=!0,contrast:m=1,saturation:a=1,variation:d=0,interactive:k=!0,stir:y=1,clickSwirl:S=!0,intro:v=!0,lightMode:C=!1,dpr:T,className:Q="",style:ve,...ee})=>{let z=ue(null),se=ue(null),I=ue(null),N=(Array.isArray(e)&&e.length?e:Xt).slice(0,Bt),O={colors:N.length>1?N:[N[0],N[0]],type:Cn[t]??0,angle:n,bands:H(o,1,8),speed:Math.max(0,i),flow:H(r,0,3),scale:H(_,.25,3),softness:H(u,0,1),silk:H(l,0,1),grainAmount:H(f,0,.5),grainSize:H(c,.5,4),grainAnimated:E,contrast:H(m,.2,2),saturation:H(a,0,2),variation:Math.max(0,d),interactive:k,stir:H(y,0,2),clickSwirl:S,intro:v,lightMode:C,dpr:T},R=ue(O);return R.current=O,Fe(()=>{let te=z.current,V=se.current,s=V?.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!te||!V||!s)return;let ye=Kt(s,Pn),ge=Kt(s,An);if(!ye||!ge)return;let M=ye.uniforms,be=ge.uniforms,rt=s.createVertexArray(),ce=s.createTexture();s.bindTexture(s.TEXTURE_2D,ce),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);let Ue=s.createFramebuffer(),ne={width:0,height:0},re=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ot=new Map,Qt=p=>{let g=String(p),b=ot.get(g);if(b)return b;let A=[0,0,0];if(re){re.clearRect(0,0,1,1),re.fillStyle="#000000",re.fillStyle=g,re.fillRect(0,0,1,1);let[Y,K,q]=re.getImageData(0,0,1,1).data;A=[Y/255,K/255,q/255]}return ot.set(g,A),A},oe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,D={width:1,height:1,ratio:1},Le=new Float32Array(Bt*3),it=new Float32Array(De*4),Ie=new Float32Array(De),Ne=new Float32Array(et*4),L=[],W=[],x={x:.5,y:.5,sx:.5,sy:.5,vx:0,inside:!1,fresh:!0},at="",_t=0,B=R.current.intro&&!oe?0:1,Oe=0,He=0,le=0,ie=0,xe=!0,en=()=>{let p=R.current,g=`${p.colors.join(",")}|${p.lightMode}`;if(g===at)return;at=g;let b=p.colors.map(A=>Fn(Qt(A)));if(!p.lightMode)b.forEach((A,Y)=>Le.set(A,Y*3));else{let A=b.map(([K])=>Math.abs(K-b[0][0])<.1),Y=b.filter((K,q)=>!A[q]).reverse();b.forEach((K,q)=>{let[fe,_e,w]=A[q]?[1,0,0]:Y.shift();Le.set([fe+(1-fe)*tt,_e*(1-tt),w*(1-tt)],q*3)})}},ut=()=>{let p=R.current,g=D.width/D.height;en(),s.bindVertexArray(rt),s.disable(s.BLEND),s.bindFramebuffer(s.FRAMEBUFFER,Ue),s.viewport(0,0,ne.width,ne.height),s.useProgram(ye.program),s.uniform1f(M.uAspect,g),s.uniform1f(M.uTime,_t),s.uniform3fv(M.uRamp,Le),s.uniform1i(M.uCount,p.colors.length);let b=p.angle*Math.PI/180;s.uniform1i(M.uType,p.type),s.uniform2f(M.uDir,Math.sin(b),Math.cos(b)),s.uniform1f(M.uExtent,g*Math.abs(Math.sin(b))+Math.abs(Math.cos(b))),s.uniform1f(M.uBands,p.bands),s.uniform1f(M.uSoftness,p.softness),s.uniform1f(M.uFlow,p.flow),s.uniform1f(M.uScale,p.scale),s.uniform1f(M.uSilk,p.silk),s.uniform4fv(M.uStir,it),s.uniform1fv(M.uStirWeight,Ie),s.uniform4fv(M.uTwirl,Ne),s.uniform2f(M.uSeed,p.variation*3.17,p.variation*1.91),s.uniform1f(M.uContrast,p.contrast),s.uniform1f(M.uSaturation,p.saturation),s.uniform1f(M.uSettle,B*B*(3-2*B)),s.uniform1f(M.uReveal,B),s.drawArrays(s.TRIANGLES,0,3),s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,V.width,V.height),s.useProgram(ge.program),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,ce),s.uniform1i(be.uField,0),s.uniform1f(be.uGrain,p.grainAmount),s.uniform1f(be.uGrainSize,p.grainSize*D.ratio),s.uniform1f(be.uFrame,Oe),s.drawArrays(s.TRIANGLES,0,3)},st=()=>{let p=R.current;D.width=Math.max(1,te.clientWidth),D.height=Math.max(1,te.clientHeight),D.ratio=Math.min(p.dpr||window.devicePixelRatio||1,2),V.width=Math.max(1,Math.round(D.width*D.ratio)),V.height=Math.max(1,Math.round(D.height*D.ratio));let g=Math.max(1,Math.round(V.width/2)),b=Math.max(1,Math.round(V.height/2));(g!==ne.width||b!==ne.height)&&(ne.width=g,ne.height=b,s.bindTexture(s.TEXTURE_2D,ce),s.texImage2D(s.TEXTURE_2D,0,s.RGBA8,g,b,0,s.RGBA,s.UNSIGNED_BYTE,null),s.bindFramebuffer(s.FRAMEBUFFER,Ue),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ce,0),s.bindFramebuffer(s.FRAMEBUFFER,null)),ut(),ae()},tn=(p,g)=>{let b=R.current,A=1-Math.exp(-p/.06),Y=x.sx,K=x.sy;x.sx+=(x.x-x.sx)*A,x.sy+=(x.y-x.sy)*A;let q=(x.sx-Y)/p*g,fe=(x.sy-K)/p;x.vx=q;let _e=L[0];if(L.forEach(w=>{w.done&&(w.age+=p)}),b.interactive&&x.inside&&Math.hypot(q,fe)>.02&&!oe){(!_e||_e.done)&&(L.unshift({x:0,y:0,vx:0,vy:0,age:0,grow:0,done:!1}),L.length>De&&L.pop());let w=L[0];w.x=(x.sx-.5)*g,w.y=x.sy-.5,w.vx=q,w.vy=fe,w.grow=Math.min(1,w.grow+p/Rn),w.done=w.grow>=1}else _e&&(_e.done=!0);for(;L.length&&L[L.length-1].age>jt;)L.pop();for(let w=0;w<De;w++){let F=L[w];if(!F){Ie[w]=0;continue}let pe=1-F.age/jt,we=Math.min(1,2.2/Math.max(Math.hypot(F.vx,F.vy),.001));it.set([F.x,F.y,F.vx*we,F.vy*we],w*4),Ie[w]=pe*pe*F.grow*b.stir*.05}for(W.forEach(w=>{w.age+=p});W.length&&W[W.length-1].age>Gt;)W.pop();for(let w=0;w<et;w++){let F=W[w];if(!F){Ne[w*4+2]=0;continue}let pe=F.age/Gt,we=Math.min(1,F.age/.18)*(1-pe)*(1-pe);Ne.set([F.x,F.y,F.direction*2.4*we,.16+.1*Math.min(1,F.age/.5)],w*4)}},ct=p=>{if(le=0,!xe||document.hidden)return;let g=R.current,b=ie?H((p-ie)/1e3,.001,.05):1/60;ie=p,oe||(_t+=b*g.speed*.16),B<1&&(B=Math.min(1,B+b/kn)),He+=b,g.grainAnimated&&!oe&&He>1/24&&(He=0,Oe=(Oe+1)%97),tn(b,D.width/D.height),ut(),!oe&&(g.speed>0||g.grainAnimated)||B<1||L.length>0||W.length>0?le=requestAnimationFrame(ct):ie=0};function ae(){!le&&xe&&!document.hidden&&(le=requestAnimationFrame(ct))}let lt=p=>{let g=te.getBoundingClientRect(),b=(p.clientX-g.left)/Math.max(1,g.width),A=1-(p.clientY-g.top)/Math.max(1,g.height);x.inside=b>=0&&b<=1&&A>=0&&A<=1,x.x=b,x.y=A,(x.fresh||!x.inside)&&(x.sx=b,x.sy=A,x.fresh=!1)},ft=p=>{lt(p),(x.inside||L.length)&&ae()},pt=p=>{lt(p);let g=R.current;!x.inside||!g.clickSwirl||oe||(W.unshift({x:(x.x-.5)*(D.width/D.height),y:x.y-.5,age:0,direction:x.vx<0?1:-1}),W.length>et&&W.pop(),ae())},dt=()=>{x.inside=!1},ht=()=>{ie=0,ae()},mt=new ResizeObserver(st);mt.observe(te);let vt=new IntersectionObserver(p=>{xe=p.some(g=>g.isIntersecting),xe&&(ie=0,ae())});return vt.observe(te),window.addEventListener("pointermove",ft,{passive:!0}),window.addEventListener("pointerdown",pt,{passive:!0}),document.documentElement.addEventListener("pointerleave",dt),document.addEventListener("visibilitychange",ht),st(),I.current=ae,()=>{cancelAnimationFrame(le),I.current=null,mt.disconnect(),vt.disconnect(),window.removeEventListener("pointermove",ft),window.removeEventListener("pointerdown",pt),document.documentElement.removeEventListener("pointerleave",dt),document.removeEventListener("visibilitychange",ht),s.deleteTexture(ce),s.deleteFramebuffer(Ue),s.deleteVertexArray(rt),s.deleteProgram(ye.program),s.deleteProgram(ge.program),V.isConnected||s.getExtension("WEBGL_lose_context")?.loseContext()}},[]),Fe(()=>{I.current?.()}),Qe("div",{ref:z,className:`grainient-container${Q?` ${Q}`:""}`,style:ve,...ee,children:Qe("canvas",{ref:se,className:"grainient-canvas","aria-hidden":"true"})})},Zt=Dn;var Jt=document.getElementById("gradientascii");if(Jt){let e=["#eaf1e1","#d9e8d2","#c9ddcb","#d6e6e7","#f2f4e4"],t=["#0c120f","#122019","#1a2d23","#15252a","#0e1512"],n=()=>{let o=document.documentElement.dataset.theme==="dark";Xe(Pe(Zt,{colors:o?t:e,type:"linear",angle:62,bands:1,speed:.5,flow:.7,scale:1,softness:1.2,silk:.3,grainAmount:o?.07:.05,grainSize:1.4,grainAnimated:!1,contrast:1,saturation:1,interactive:!1,clickSwirl:!1,intro:!0,lightMode:!1}),Jt)};n(),new MutationObserver(n).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}})();
