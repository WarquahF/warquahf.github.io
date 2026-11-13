(()=>{var R,So,gr,ve,Bt,pt,Co,_t,ko,zt,Ht,xr,$e=Symbol.for("pv"),dt={},vt=[],yr=/^m(i|n|o|s|text|space)$/,gt=Array.isArray,Po=vt.slice,we=Object.assign;function be(e){e&&e.parentNode&&e.remove()}function ht(e,t,r,i,a){var u={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:$e,__v:a||++So,__i:-1,__u:0};return!a&&R.vnode&&R.vnode(u),u}function fe(e){return e.children}function ge(e,t){this.props=e,this.context=t,this.__g=0}function xe(e,t){if(t==null)return e.__&&xe(e.__,e.__i+1);for(var r;t<e.__k.length;t++)if((r=e.__k[t])&&r.__e)return r.__e;return typeof e.type!="function"||e.props.__P?null:xe(e)}function Er(e){var t,r=e.__v,i=r.__e,a=[],u=[],f=e.__P;f&&((t=we({constructor:$e},r)).__v=r.__v+1,R.vnode&&R.vnode(t),Xt(f,t,r,e.__n,f.namespaceURI,32&r.__u?[i]:null,a,i||xe(r),32&r.__u,u),t.__v=r.__v,t.__.__k[t.__i]=t,Io(a,t,u),r.__=r.__e=null,t.__e!=i&&Lo(t))}function Lo(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),Lo(e)}function Ro(e){(8&e.__g||(e.__g|=8,ve.push(e),pt++))&&Bt==R.debounceRendering||((Bt=R.debounceRendering)||queueMicrotask)(Do)}function Do(){try{for(var e,t=1;ve.length;)ve.length>t&&ve.sort(Co),e=ve.shift(),t=ve.length,8&e.__g&&Er(e)}finally{(pt=ve.length)&&(Bt||queueMicrotask)(Do)}}function Ao(e,t,r,i,a,u,f,_,m,d,h){var E,g,l,b,B,k,D=i.__k||vt,F=t.length;for(m=br(r,t,D,m,F),E=0;E<F;E++)(l=r.__k[E])!=null&&(g=~l.__i&&D[l.__i]||dt,l.__i=E,k=Xt(e,l,g,a,u,f,_,m,d,h),b=l.__e,(g.ref!=l.ref||8&g.__u)&&(g.ref&&Gt(g.ref,null,l,g),l.ref&&h.push(l.ref,l.__c||b,l)),B=B||b,4&l.__u?(m=No(l,m,e,!g.__v),g.__e&&(g.__e=null)):typeof l.type=="function"&&k!==void 0?m=k:b&&(m=b.nextSibling),l.__u&=-21);return r.__e=B,m}function br(e,t,r,i,a){var u,f,_,m,d,h,E,g,l,b=r.length,B=b,k=0,D=0,F=e.__k=Array(a);for(u=0;u<a;u++)(f=t[u])!=null&&typeof f!="boolean"&&typeof f!="function"?(typeof f!="object"||f.constructor===String?f=F[u]=ht(null,f):gt(f)?f=F[u]=ht(fe,{children:f}):f.constructor===$e&&f.__b?f=F[u]=ht(f.type,f.props,f.key,f.ref,f.__v):F[u]=f,m=u+k,f.__=e,f.__b=e.__b+1,_=null,~(d=f.__i=wr(f,r,m,B))&&(B--,(_=r[d])&&(_.__u|=2)),_&&_.__v?(f.__u|=16,d==m-1?k--:d==m+1?k++:d!=m&&(d>m?k--:k++,D=1)):(~d||(a>b?k--:a<b&&k++),typeof f.type!="function"&&(f.__u|=4))):F[u]=null;if(D){for(h=[],E=[],u=0;u<a;u++)if((f=F[u])&&16&f.__u){for(k=0,g=h.length;k<g;)h[l=k+g>>1]<f.__i?k=l+1:g=l;h[k]=f.__i,E[u]=k+1}for(k=h.length;u--;)E[u]&&(E[u]==k?k--:F[u].__u|=4)}if(B)for(u=0;u<b;u++)!(_=r[u])||2&_.__u||(_.__e==i&&(i=xe(_)),$t(_,_));return i}function No(e,t,r,i){var a,u,f,_;if(typeof e.type=="function"){if(e.props.__P)return t;if(a=e.__k)for(u=0;u<a.length;u++)a[u]&&(a[u].__=e,t=No(a[u],t,r,!1));return t}for(t&&!t.parentNode&&(t=xe(e))&&!t.parentNode&&(t=null),f=e.__e,_=t;_&&_.nodeType==8;)_=_.nextSibling;for(f!=_&&(!i&&r.moveBefore&&f.parentNode?r.moveBefore(f,t):r.insertBefore(f,t||null)),t=f;(t=t&&t.nextSibling)&&t.nodeType==8&&!t.data.startsWith("$s"););return t}function Vt(e,t){return t=t||[],e!=null&&typeof e!="boolean"&&(gt(e)?e.some(function(r){Vt(r,t)}):t.push(e)),t}function wr(e,t,r,i){var a,u=e.key,f=e.type,_=t[r],m=_&&!(2&_.__u);if(_===null&&u==null||m&&u==_.key&&f==_.type)return r;if(i>(m?1:0)){for(a=r-1;a>=0;a--)if((_=t[a])&&!(2&_.__u)&&u==_.key&&f==_.type)return a;for(a=r+1;a<t.length;a++)if((_=t[a])&&!(2&_.__u)&&u==_.key&&f==_.type)return a}return-1}function Mo(e,t,r){r==null&&(r=""),t[0]=="-"?e.setProperty(t,r):e[t]=r}function ft(e,t,r,i,a){var u,f;if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||Mo(e.style,t);if(r)for(t in r)i&&r[t]==i[t]||Mo(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")typeof r!="function"&&(r=null),typeof i!="function"&&(i=null),(e.__e||(e.__e={}))[t]=r,r&&i||(f=Ht[t]||(Ht[t]=Fr(t)),(e.__a||(e.__a={}))[t]=zt,u=t!=(t=t.replace(ko,"$1")),(t=t.slice(2))[0]<"a"&&(t=t.toLowerCase()),r?e.addEventListener(t,f,u):e.removeEventListener(t,f,u));else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{return void(e[t]=r??"")}catch{}if(typeof r=="function")return;r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r)}}function Fr(e){return function(t){var r=this.__e;if(r){if(r=r[e],t[_t]==null)t[_t]=zt++;else if(t[_t]<this.__a[e])return;return r(R.event?R.event(t):t)}}}function Xt(e,t,r,i,a,u,f,_,m,d){var h,E,g,l,b,B,k,D,F,H,N,Ne,Je,Se,ce,et,ie,le,oe=t.type;if(t.constructor!==$e)return null;128&r.__u&&(m=32&r.__u,h=r.__c.__z)&&(t.__u|=m,E=u=[],h.nodeType==8?_=mt(h,u):u.push(h),_=u[0]||_),(h=R.__b)&&h(t);e:if(typeof oe=="function"){g=f.length;try{if(D=t.props,F=(h=oe.prototype)&&h.render,H=(h=oe.contextType)&&i[h.__c],N=h?H?H.props.value:h.__:i,(l=r.__c)?(t.__c=l,2&l.__g&&(l.__g|=1)):(F?t.__c=l=new oe(D,N):(t.__c=l=new ge(D,N),l.constructor=oe,l.render=Rr),H&&H.sub(l),l.state||(l.state={}),l.__n=i,l.__g|=8,l.__h=[],l.__k=[]),F&&(l.__s||(l.__s=l.state),oe.getDerivedStateFromProps&&(l.__s==l.state&&(l.__s=we({},l.__s)),we(l.__s,oe.getDerivedStateFromProps(D,l.__s)))),b=l.props,B=l.state,l.__v=t,r.__c){if(D!==b&&F&&!oe.getDerivedStateFromProps&&l.componentWillReceiveProps&&l.componentWillReceiveProps(D,N),t.__v==r.__v&&!(8&l.__g)||!(4&l.__g)&&l.shouldComponentUpdate&&l.shouldComponentUpdate(D,l.__s,N)===!1){t.__v!=r.__v&&(l.props=D,l.state=l.__s,l.__g&=-9),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(K){K&&(K.__=t)}),vt.push.apply(l.__h,l.__k),l.__k=[],l.__h.length&&f.push(l),_=xe(r);break e}l.componentWillUpdate&&l.componentWillUpdate(D,l.__s,N),F&&l.componentDidUpdate&&l.__h.push(function(){l.componentDidUpdate(b,B,k)})}else F&&!oe.getDerivedStateFromProps&&l.componentWillMount&&l.componentWillMount(),F&&l.componentDidMount&&l.__h.push(l.componentDidMount);l.context=N,l.props=D,l.__P=e,l.__g&=-5,Ne=R.__r,Je=F?25:0;do l.__g&=-9,Ne&&Ne(t),h=l.render(l.props,l.state=l.__s,l.context);while(8&l.__g&&++Je<25);F&&(vt.push.apply(l.__h,l.__k),l.__k=[]),l.state=l.__s,l.getChildContext&&(i=we({},i,l.getChildContext())),F&&r.__c&&l.getSnapshotBeforeUpdate&&(k=l.getSnapshotBeforeUpdate(b,B)),Se=h&&h.type===fe&&h.key==null?h.props.children:h,D.__P&&(h=_,a=(e=D.__P).namespaceURI,m=u=null,r.props&&r.props.__P!=e&&(r.__k.some(function(K){K&&$t(K,K)}),r.__k=null),_=r.__k?xe(r,0):null),_=Ao(e,gt(Se)?Se:[Se],t,r,i,a,u,f,_,m,d),D.__P&&(t.__e=null,_=h),t.__u&=-161,E&&E.some(be),l.__h.length&&f.push(l),1&l.__g&&(l.__g&=-4)}catch(K){if(f.length=g,t.__v=null,m||u)if(K&&K.then){if(t.__u|=128|m,u){for(~(ie=u.indexOf(_||void 0))||(ie=u.length);(le=u[ie-1])&&le.nodeType==8;)ie--;for(;ie<u.length;ie++)if(le=u[ie])if(u[ie]=null,ce){if(le==et)break}else{if(le.nodeType!=8)break;le.data.startsWith("$s")&&(et=mt(ce=le))}}if(!ce){for(;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;ce=_}(h=mt(ce=t.__c.__z||(t.__c.__z=ce)))?(t.__e=ce,_=h):t.__e=_,_=_&&_.nextSibling}else u&&u.some(be);else t.__e=r.__e;t.__k||(t.__k=r.__k||[]),K&&K.then||Oo(t),R.__e(K,t,r)}}else _=t.__e=Tr(r.__e,t,r,i,a,u,f,m,d,e);return(h=R.diffed)&&h(t),_}function mt(e,t){if(e&&e.nodeType==8&&e.data.startsWith("$s"))for(var r=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith("$s"))r++;else if(e.data.startsWith("/$s")&&!--r)return e}t&&t.push(e)}}function Oo(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(Oo))}function Io(e,t,r){for(var i=0;i<r.length;)Gt(r[i++],r[i++],r[i++]);R.__c&&R.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(u){u.call(a)})}catch(u){R.__e(u,a.__v)}})}function Tr(e,t,r,i,a,u,f,_,m,d){var h,E,g,l,b,B,k,D,F=r.props||dt,H=t.props,N=t.type;if(N=="svg"?a="http://www.w3.org/2000/svg":N=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),u){for(h=0;h<u.length;h++)if((b=u[h])&&(N?b.localName==N:b.nodeType==3)){e=b,u[h]=null;break}}if(!e){if(D=d.ownerDocument||document,!N)return D.createTextNode(H);e=D.createElementNS(a,N,H.is?H:d),_&&(R.__m&&R.__m(t,u),_=!1),u=null}if(N){if(d=N=="template"&&e.content||e,u=N=="textarea"&&H.defaultValue!=null?null:u&&Po.call(d.childNodes),!_&&u)for(F={},h=0;h<e.attributes.length;h++)F[(b=e.attributes[h]).name]=b.value;for(h in F)b=F[h],h=="dangerouslySetInnerHTML"?g=b:h=="children"||h in H||h=="value"&&"defaultValue"in H||h=="checked"&&"defaultChecked"in H||ft(e,h,null,b,a);for(h in H)b=H[h],h=="children"?l=b:h=="dangerouslySetInnerHTML"?E=b:h=="value"?B=b:h=="checked"?k=b:_&&typeof b!="function"||F[h]===b||ft(e,h,b,F[h],a);E?(_||g&&(E.__html==g.__html||E.__html==e.innerHTML)||(e.innerHTML=E.__html),t.__k=[]):(g&&(e.textContent=""),(N=="foreignObject"||a=="http://www.w3.org/1998/Math/MathML"&&yr.test(N))&&(a="http://www.w3.org/1999/xhtml"),Ao(d,gt(l)?l:[l],t,r,i,a,u,f,u?u[0]:r.__k&&xe(r,0),_,m),u&&u.some(be)),_&&N!="textarea"||(h="value",N=="progress"&&B==null?e.removeAttribute(h):B==null||B===e[h]&&(N!="progress"||B)||ft(e,h,B,F[h],a),h="checked",k!=null&&k!=e[h]&&ft(e,h,k,F[h],a))}else F===H||_&&e.data==H||(e.data=H);return e}function Gt(e,t,r,i){try{typeof e=="function"?t?t.__x=e(t)||1:i&&(i=i.__c||i.__e)&&(t=i.__x)&&(i.__x=null,typeof t=="function"?t():e(null)):e.current=t}catch(a){R.__e(a,r)}}function $t(e,t,r){var i,a,u,f;if(R.unmount&&R.unmount(e),!(i=e.ref)||i.current&&i.current!=e.__e||Gt(i,null,t,e),i=e.__c){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(_){R.__e(_,t)}i.__P=i.__n=null}if(i=e.__k)for(f=0;f<i.length;f++)i[f]&&$t(i[f],t,typeof e.type!="function"||r&&!e.props.__P);!r&&(i=e.__c)&&(i=i.__z)&&(a=mt(i,u=[]))&&(i==e.__e&&u.some(be),be(a),be(i)),r||be(e.__e),e.__e=e.__c=e.__=null}function Rr(e,t,r){return this.constructor(e,r)}function jt(e,t){var r,i,a,u;R.__&&R.__(e,t),t.nodeType==9&&(t=t.documentElement),i=(r=e&&32&e.__u)?null:t.__k,t.__k=ht(fe,{children:[e]}),a=[],u=[],Xt(t,t.__k,i||dt,dt,t.namespaceURI,i?null:t.firstChild?Po.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,u),Io(a,t.__k,u),t.__k.props.children=null}R={__e:function(e,t,r,i){for(var a,u,f;t=t.__;)if((a=t.__c)&&!(1&a.__g)){a.__g|=4;try{if((f=(u=a.constructor)&&u.getDerivedStateFromError)&&a.setState(u.getDerivedStateFromError(e)),a.componentDidCatch&&(a.componentDidCatch(e,i||{}),f=1),f&&8&a.__g)return void(a.__g|=2)}catch(_){e=_}}throw pt=0,e}},So=0,gr=function(e){return e!=null&&e.constructor===$e},ge.prototype.setState=function(e,t){var r=this.__s;r&&r!=this.state||(r=this.__s=we({},this.state)),typeof e=="function"&&(e=e(we({},r),this.props)),e&&(we(r,e),this.__v&&(t&&this.__k.push(t),Ro(this)))},ge.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Ro(this))},ge.prototype.render=fe,ve=[],pt=0,Co=function(e,t){return e.__v.__b-t.__v.__b},_t=Symbol(),ko=/(PointerCapture)$|Capture$/i,zt=0,Ht={},xr=0;var We,G,Wt,Uo,qt=Object.is,xt=0,Wo=[],Zt=[],V=R,Bo=V.__b,Ho=V.__r,zo=V.diffed,Vo=V.__c,Xo=V.unmount,Go=V.__;function Yt(e,t){V.__h&&V.__h(G,e,xt||t),xt=0;var r=G.__H||(G.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Qt(e){return xt=1,qo(Yo,e)}function qo(e,t,r){var i=Yt(We++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):Yo(void 0,t),function(u){var f=(i.__N||i.__)[0],_=i.t(f,u);qt(f,_)||(i.__N=[_,i.__[1]],i.__c.setState({}))}],i.__c=G,!G.__f)){G.__f=!0;var a=G.shouldComponentUpdate;G.shouldComponentUpdate=function(u,f,_){var m=this.__H;if(!m)return!0;var d=!1,h=this.props!=u;if(m.__.some(function(g){g.__N&&(d=!0,qt(g.__[0],g.__N[0])||(h=!0))}),a){var E=a.call(this,u,f,_);return d?E||h:E}return!d||h}}return i.__}function yt(e,t){var r=Yt(We++,3);!V.__s&&Ko(r.__H,t)&&(r.__P=!0,r.__=e,r.u=t,G.__H.__h.push(r))}function Fe(e){return xt=5,Zo(function(){return{current:e}},[])}function Zo(e,t){var r=Yt(We++,7);return Ko(r.__H,t)&&(r.__=e(),r.__H=t),r.__}function Mr(){var e;do{for(;e=Zt.shift();)try{je(e)}catch(r){V.__e(r,{__:(e=e.__P)&&e.__v})}for(;e=Wo.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(je),t.__h.some(Kt),t.__h=[]}catch(r){t.__h=[],V.__e(r,e.__v)}}}while(Zt.length)}V.__b=function(e){G=null,Bo&&Bo(e)},V.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Go&&Go(e,t)},V.__r=function(e){Ho&&Ho(e),We=0;var t=(G=e.__c).__H;t&&(Wt==G?G.__h=[]:(t.__h.some(je),t.__h.some(Kt),We=0),t.__h=[],t.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})),Wt=G},V.diffed=function(e){zo&&zo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&jo(Wo.push(t)),t.__H.__.some(function(r){r.u&&(r.__H=r.u)})),Wt=G=null},V.__c=function(e,t){t.some(function(r){try{r.__h.some(je),r.__h=r.__h.filter(function(i){return!i.__||Kt(i)})}catch(i){r.__h=[function(){throw i}]}}),Vo&&Vo(e,t)},V.unmount=function(e){Xo&&Xo(e);var t,r,i=e.__c;i&&i.__H&&(i.__H.__.some(function(a){try{if(a.__P&&a.__c){if(r===void 0){for(r=e.__;r&&(!r.__c||!r.__c.__P);)r=r.__;r=r&&r.__c}a.__P=r,jo(Zt.push(a))}else je(a)}catch(u){t=u}}),i.__H=void 0,t&&V.__e(t,i.__v))};var $o=typeof requestAnimationFrame=="function";function Sr(e){var t,r=function(){clearTimeout(i),$o&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);$o&&(t=requestAnimationFrame(r))}function jo(e){e!=1&&Uo==V.requestAnimationFrame||((Uo=V.requestAnimationFrame)||Sr)(Mr)}function je(e){var t=G,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),G=t}function Kt(e){var t=G;e.__c=e.__(),G=t}function Ko(e,t){return!e||e.length!=t.length||t.some(function(r,i){return!qt(r,e[i])})}function Yo(e,t){return typeof t=="function"?t(e):t}var Qo=Object.assign;var Lr=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini|asp|fill|st)/;var Dr=Symbol.for("react.element"),Ar=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(?!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Nr=/[A-Z0-9]/g,Or=typeof document<"u";var Ir=function(e){return/fil|che|rad/.test(e)};ge.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ge.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Jo=R.event;R.event=function(e){return Jo&&(e=Jo(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Ur={configurable:!0,get:function(){return this.class}},er=R.vnode;R.vnode=function(e){if(typeof e.type=="string")(function(i){var a=i.props,u=i.type,f={},_=u.indexOf("-")==-1;for(var m in a){var d=a[m];if(!(m=="value"&&"defaultValue"in a&&d==null||Or&&m=="children"&&u=="noscript"||m=="class"||m=="className")){if(m=="style"&&d&&d.constructor==Object){var h=void 0;for(var E in d)typeof d[E]!="number"||Lr.test(E)||(h||(h=d=Qo({},d)),d[E]+="px")}else if(m=="defaultValue"&&"value"in a&&a.value==null)m="value";else if(m=="download"&&d===!0)d="";else if(m=="translate"&&d==="no")d=!1;else if(m[0]=="o"&&m[1]=="n"){var g=m.toLowerCase();g=="ondoubleclick"?m="ondblclick":g!="onchange"||u!="input"&&u!="textarea"||Ir(a.type)?g=="onfocus"?m="onfocusin":g=="onblur"&&(m="onfocusout"):g=m="oninput",g=="oninput"&&f[m=g]&&(m="oninputCapture")}else _&&Ar.test(m)?m=m.replace(Nr,"-$&").toLowerCase():d===null&&(d=void 0);f[m]=d}}if(u=="select"){var l=f.defaultValue!=null?f.defaultValue:f.multiple&&Array.isArray(f.value)?f.value:null;l!=null&&(f.value=Vt(a.children).forEach(function(b){b.props.selected=f.multiple?l.indexOf(b.props.value)!=-1:l==b.props.value}))}a.class&&!a.className?(f.class=a.class,Object.defineProperty(f,"className",Ur)):a.className&&(f.class=f.className=a.className),i.props=f})(e);else if(typeof e.type=="function"&&("ref"in e.props&&"prototype"in e.type&&e.type.prototype.render&&(e.ref=e.props.ref,delete e.props.ref),e.type.defaultProps)){var t=Qo({},e.props);for(var r in e.type.defaultProps)t[r]===void 0&&(t[r]=e.type.defaultProps[r]);e.props=t}e.ref&&!("ref"in e.props)&&Object.defineProperty(e.props,"ref",{value:e.ref,configurable:!0,writable:!0}),e.$$typeof=Dr,er&&er(e)};var Br=Symbol.for("pv"),Hr=0;function qe(e,t,r,i,a,u){t||(t={});var f,_,m=t;if("ref"in m&&typeof e!="function")for(_ in m={},t)_=="ref"?f=t[_]:m[_]=t[_];var d={type:e,props:m,key:r,ref:f,__k:null,__:null,__b:0,__e:null,__c:null,constructor:Br,__v:--Hr,__i:-1,__u:0};return(a||u)&&(d.__source=a,d.__self=u),R.vnode&&R.vnode(d),d}var zr=.32,tr=9,Ae=.05,bt=160,Ze=1.7,Ke=.45,Vr=2.8,Ft=4,or=4,Qe=256,wt=48,Jt=2e5,Xr=[-.81,.58,-.02],rr={forward:[0,1],backward:[0,-1],left:[-1,0],right:[1,0]},Gr=["lift","trace","light"],$r={plus:0,dots:1},jr=1.25,Tt=`
precision highp float;
precision highp int;

uniform float uFrequency;
uniform vec2 uMorph;
uniform sampler2D uSculpt;
uniform float uSculptOn;
uniform vec4 uPulses[${Ft}];
uniform vec3 uEye;
uniform vec3 uForward;
uniform vec3 uNear;

uint lattice(ivec2 p) {
  uvec2 q = uvec2(p + 1073741824);
  uint h = q.x * 2654435761u + q.y * 2246822519u;
  h = (h ^ (h >> 15u)) * 739982445u;
  h = (h ^ (h >> 12u)) * 695872825u;
  return h ^ (h >> 15u);
}

float corner(ivec2 c, vec2 f) {
  uint h = lattice(c);
  vec2 g = vec2(float(h & 65535u), float(h >> 16u)) / 32767.5 - 1.0;
  return dot(g, f);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  ivec2 c = ivec2(i);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = corner(c, f);
  float b = corner(c + ivec2(1, 0), f - vec2(1.0, 0.0));
  float d = corner(c + ivec2(0, 1), f - vec2(0.0, 1.0));
  float e = corner(c + ivec2(1, 1), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(d, e, u.x), u.y);
}

vec2 octave(vec2 p, vec2 shift) {
  return vec2(1.6 * p.x - 1.2 * p.y, 1.2 * p.x + 1.6 * p.y) + shift;
}

float relief(vec2 t) {
  vec2 p = t * uFrequency;
  vec2 w = vec2(noise(p * 0.42 + uMorph), noise(p * 0.42 - uMorph.yx + vec2(5.2, 1.3)));
  p += w * 0.8;
  float n = noise(p) * 0.55;
  p = octave(p, vec2(7.1, 3.7));
  n += noise(p) * 0.15;
  p = octave(p, vec2(1.9, 8.3));
  n += noise(p) * 0.04;
  float s = log(1.0 + exp(7.0 * (3.0 * n + 0.05))) / 7.0;
  return s * s * 1.4 + 0.1 * n;
}

float swell(vec2 t) {
  float lift = 0.0;
  for (int i = 0; i < ${Ft}; i++) {
    vec4 p = uPulses[i];
    if (p.w <= 0.0) continue;
    float x = (length(t - p.xy) - p.z) / (0.28 + p.z * 0.05);
    lift += exp(-x * x) * p.w;
  }
  return lift;
}

vec4 sculpted(vec2 t) {
  return uSculptOn > 0.5 ? textureLod(uSculpt, t / ${wt}.0, 0.0) : vec4(0.0);
}

float settle(vec2 world) {
  float depth = dot(vec3(world.x, 0.0, world.y) - uEye, uForward);
  float x = clamp((depth - uNear.x) / max(uNear.y - uNear.x, 1e-3), 0.0, 1.0);
  return mix(uNear.z, 1.0, x * x * x * (x * (x * 6.0 - 15.0) + 10.0));
}
`,Wr=`#version 300 es
${Tt}
uniform ivec2 uBase;
uniform float uCell;
uniform float uDetail;
layout(location = 0) out vec4 outField;
layout(location = 1) out vec4 outHeight;

void main() {
  vec2 t = vec2(uBase + ivec2(gl_FragCoord.xy)) * uCell;
  vec4 carved = sculpted(t);
  float ring = swell(t);
  float ground = relief(t) + carved.r + ring * 0.14;
  vec2 dp = t * uFrequency * 5.0 + vec2(13.1, 4.7);
  float fine = noise(dp) * 0.6 + noise(octave(dp, vec2(2.3, 6.1))) * 0.3;
  outField = vec4(carved.g, ring, ground, carved.r);
  outHeight = vec4(ground + uDetail * 0.1 * fine, 0.0, 0.0, 1.0);
}`,qr=e=>`#version 300 es
#define BAKED ${e?1:0}
${Tt}
uniform sampler2D uField;
uniform ivec2 uOrigin;
uniform ivec2 uCamCell;
uniform vec2 uCamFrac;
uniform float uCell;
uniform int uStride;
uniform float uHeight;
uniform mat4 uViewProj;
out vec2 vTexel;
out vec2 vTerrain;
out float vDepth;
out float vLift;
out vec3 vNormal;

float ground(vec2 t) {
  return relief(t) + swell(t) * 0.14;
}

void main() {
  ivec2 step = ivec2(gl_VertexID >> 1, gl_InstanceID + (gl_VertexID & 1)) * uStride;
  ivec2 local = uOrigin + step;
  vec2 terrain = vec2(local + uCamCell) * uCell;
  vec2 world = vec2(local) * uCell - uCamFrac;
  float k = settle(world);
#if BAKED
  ivec2 texel = step + 2;
  vec4 c = texelFetch(uField, texel, 0);
  vec4 l = texelFetch(uField, texel - ivec2(1, 0), 0);
  vec4 r = texelFetch(uField, texel + ivec2(1, 0), 0);
  vec4 d = texelFetch(uField, texel - ivec2(0, 1), 0);
  vec4 u = texelFetch(uField, texel + ivec2(0, 1), 0);
  float h = (c.b - c.a) * k + c.a;
  float dx = (l.b - l.a - r.b + r.a) * k + l.a - r.a;
  float dz = (d.b - d.a - u.b + u.a) * k + d.a - u.a;
  vNormal = vec3(dx * uHeight / (2.0 * uCell), 1.0, dz * uHeight / (2.0 * uCell));
  vTexel = vec2(texel) + 0.5;
#else
  float h = ground(terrain) * k;
  float hx = ground(terrain + vec2(0.04, 0.0)) * k;
  float hz = ground(terrain + vec2(0.0, 0.04)) * k;
  vNormal = vec3((h - hx) * uHeight / 0.04, 1.0, (h - hz) * uHeight / 0.04);
  vTexel = vec2(0.0);
#endif
  vec4 clip = uViewProj * vec4(world.x, h * uHeight, world.y, 1.0);
  gl_Position = clip;
  vTerrain = terrain;
  vDepth = clip.w;
  vLift = h * uHeight;
}`,Zr=e=>`#version 300 es
#define BAKED ${e?1:0}
${Tt}
uniform sampler2D uField;
uniform highp sampler2D uHeightField;
uniform float uDetail;
uniform float uLines;
uniform float uLineWidth;
uniform float uMajor;
uniform vec3 uColor;
uniform float uBrightness;
uniform vec2 uFade;
uniform vec3 uFocus;
uniform vec4 uHeat;
uniform vec4 uLamp;
uniform vec4 uTrace;
uniform vec3 uSun;
uniform float uRefDepth;
uniform float uReveal;
uniform float uLightMode;
uniform float uOpacity;
uniform vec4 uGlitch[3];
uniform float uGlitchSeed;
uniform float uPixel;
in vec2 vTexel;
in vec2 vTerrain;
in float vDepth;
in float vLift;
in vec3 vNormal;
out vec4 outColor;

float smoother(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

float stroke(float dist, float width, float soft, float density, float crowd) {
  float cover = max(0.0, min(min(width, soft), 0.5 * (width + soft) - dist)) / soft;
  return mix(cover, min(width * density, 1.0) * 0.6, crowd);
}

float sampleHeight(vec2 coord, out vec2 slope) {
  vec2 u = coord - 0.5;
  vec2 i = floor(u + 0.5);
  vec2 f = u - i;
  vec3 wx = vec3(0.5 * (0.5 - f.x) * (0.5 - f.x), 0.75 - f.x * f.x, 0.5 * (0.5 + f.x) * (0.5 + f.x));
  vec3 wy = vec3(0.5 * (0.5 - f.y) * (0.5 - f.y), 0.75 - f.y * f.y, 0.5 * (0.5 + f.y) * (0.5 + f.y));
  vec3 dx = vec3(f.x - 0.5, -2.0 * f.x, 0.5 + f.x);
  vec3 dy = vec3(f.y - 0.5, -2.0 * f.y, 0.5 + f.y);
  ivec2 base = ivec2(i) - 1;
  float total = 0.0;
  slope = vec2(0.0);
  for (int y = 0; y < 3; y++) {
    float a = texelFetch(uHeightField, base + ivec2(0, y), 0).r;
    float b = texelFetch(uHeightField, base + ivec2(1, y), 0).r;
    float c = texelFetch(uHeightField, base + ivec2(2, y), 0).r;
    float row = a * wx.x + b * wx.y + c * wx.z;
    total += row * wy[y];
    slope += vec2((a * dx.x + b * dx.y + c * dx.z) * wy[y], row * dy[y]);
  }
  return total;
}

void main() {
  float py = gl_FragCoord.y / uPixel;
  float shift = 0.0;
  float split = 0.0;
  for (int i = 0; i < 3; i++) {
    if (py >= uGlitch[i].x && py < uGlitch[i].y) {
      shift = uGlitch[i].z * uPixel;
      split = uGlitch[i].w * uPixel;
    }
  }
  vec2 spot = vTerrain - dFdx(vTerrain) * shift;
#if BAKED
  vec2 ex = dFdx(vTexel);
  vec2 ey = dFdy(vTexel);
  vec2 coord = vTexel - ex * shift;
  vec2 slope;
  float h = sampleHeight(coord, slope);
  vec4 field = texture(uField, coord / vec2(textureSize(uField, 0)));
  float trail = field.r;
  float ring = field.g;
  float gx = dot(slope, ex) * uLines;
  float gy = dot(slope, ey) * uLines;
#else
  vec2 dp = spot * uFrequency * 5.0 + vec2(13.1, 4.7);
  float ring = swell(spot);
  float h = relief(spot) + ring * 0.14 + uDetail * 0.1 * (noise(dp) * 0.6 + noise(octave(dp, vec2(2.3, 6.1))) * 0.3);
  float trail = 0.0;
  float gx = dFdx(h) * uLines;
  float gy = dFdy(h) * uLines;
#endif

  float lc = h * uLines + 0.5;
  float density = max(sqrt(gx * gx + gy * gy), 1e-5);
  float dist = abs(fract(lc + 0.5) - 0.5) / density;
  float major = uMajor * (1.0 - step(0.5, mod(floor(lc + 0.5), 5.0)));

  vec2 hd = spot - uHeat.xy;
  float heat = exp(-dot(hd, hd) / (uHeat.z * uHeat.z)) * uHeat.w + trail * 0.6;
  float energy = heat + ring;

  float depth = max(vDepth, 0.01);
  float persp = clamp(sqrt(uRefDepth / depth), 0.6, 1.6);
  float width = uLineWidth * persp * (1.0 + 0.6 * major) * (1.0 + 0.45 * min(energy, 1.5));
  float soft = 1.0 + min(uFocus.y * abs(1.0 - uFocus.x / depth), uFocus.z);
  float crowd = smoothstep(0.3, 0.75, density * max(width, soft));
  float cover = stroke(dist, width, soft, density, crowd);
  vec3 cover3 = vec3(cover);
  if (split > 0.0) {
    float offset = split * density;
    cover3.r = stroke(abs(fract(lc + offset + 0.5) - 0.5) / density, width, soft, density, crowd);
    cover3.b = stroke(abs(fract(lc - offset + 0.5) - 0.5) / density, width, soft, density, crowd);
    vec2 block = floor(vec2(gl_FragCoord.x / (uPixel * 26.0), py / 5.0)) + uGlitchSeed * 71.0;
    float drop = fract(sin(dot(block, vec2(12.9898, 78.233))) * 43758.5453);
    cover3 *= drop > 0.82 ? 0.1 : 1.2;
  }

  vec3 normal = normalize(vNormal);
  float sun = clamp(dot(normal, uSun), 0.0, 1.0);
  vec3 toLamp = uLamp.xyz - vec3(vTerrain.x, vLift, vTerrain.y);
  float lampDistance = length(toLamp);
  float lamp = clamp(dot(normal, toLamp / max(lampDistance, 1e-3)), 0.0, 1.0) * uLamp.w / (1.0 + lampDistance * lampDistance * 0.9);
  float level = mix(0.45, 1.05, smoothstep(0.0, 1.1, h)) * mix(0.35, 1.25, sun * sun) * (1.0 + 0.6 * major);
  level += heat * 1.4 + ring * 3.0 + lamp * 1.2;

  float fade = 1.0 - smoother((depth - uFade.x) / max(uFade.y - uFade.x, 1e-3));
  vec3 light = cover3 * level;

  if (uTrace.y > 0.0) {
    float traceWidth = uLineWidth * persp * 1.8;
    float trace = stroke(abs(h - uTrace.x) * uLines / density, traceWidth, soft, density, crowd);
    vec2 td = spot - uTrace.zw;
    light += trace * uTrace.y * mix(0.35, 1.0, exp(-dot(td, td) / 20.0)) * 2.6;
  }
  light *= fade * uBrightness * uReveal;

  if (uLightMode > 0.5) {
    float ink = (1.0 - exp(-max(max(light.r, light.g), light.b) * 1.8)) * 0.92 * uOpacity;
    outColor = vec4(uColor * ink, ink);
    return;
  }

  vec3 color = 1.0 - exp(-uColor * light * 1.8);
  float top = max(max(color.r, color.g), color.b);
  float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  color = max(color + dither / 255.0 * step(0.002, top), 0.0);
  outColor = vec4(color, max(max(color.r, color.g), color.b)) * uOpacity;
}`,Kr=`#version 300 es
${Tt}
uniform ivec2 uOrigin;
uniform ivec2 uCamCell;
uniform vec2 uCamFrac;
uniform float uSpacing;
uniform int uColumns;
uniform float uHeight;
uniform mat4 uViewProj;
uniform vec2 uView;
uniform float uSize;
uniform float uRefDepth;
uniform vec4 uHeat;
uniform float uTime;
uniform vec4 uGlitch[3];
uniform float uPixel;
out vec2 vCorner;
out float vSize;
out float vGlow;
out float vFrame;
out float vDepth;

void main() {
  ivec2 local = uOrigin + ivec2(gl_InstanceID % uColumns, gl_InstanceID / uColumns);
  ivec2 id = local + uCamCell;
  vec2 terrain = vec2(id) * uSpacing;
  vec2 world = vec2(local) * uSpacing - uCamFrac;
  float ring = swell(terrain);
  float h = (relief(terrain) + ring * 0.14) * settle(world) + sculpted(terrain).r;
  vec4 clip = uViewProj * vec4(world.x, h * uHeight + 0.05, world.y, 1.0);
  uint seed = lattice(id + ivec2(911, 377));
  float a = float(seed & 1023u) / 1023.0;
  float b = float((seed >> 10u) & 1023u) / 1023.0;
  vec2 hd = terrain - uHeat.xy;
  float heat = exp(-dot(hd, hd) / (uHeat.z * uHeat.z)) * uHeat.w;
  float blink = step(0.92, a) * (0.5 + 0.5 * sin(uTime * (1.4 + b * 2.2) + b * 40.0));
  float size = uSize * clamp(sqrt(uRefDepth / max(clip.w, 0.01)), 0.6, 1.3) * (1.0 + 0.4 * heat + 0.35 * blink);
  float frame = max(smoothstep(0.55, 0.95, blink), smoothstep(0.3, 0.8, heat));
  vec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1)) * 2.0 - 1.0;
  vec2 offset = corner * (size * (frame > 0.001 ? 2.6 : 1.0) + 1.5);
  float py = (clip.y / clip.w * 0.5 + 0.5) * uView.y / uPixel;
  float shift = 0.0;
  for (int i = 0; i < 3; i++) {
    if (py >= uGlitch[i].x && py < uGlitch[i].y) shift = uGlitch[i].z;
  }
  clip.xy += (offset + vec2(shift * uPixel, 0.0)) / uView * 2.0 * clip.w;
  gl_Position = clip;
  vCorner = offset;
  vSize = size;
  vFrame = frame;
  vGlow = 0.5 + 0.4 * b + blink * 0.9 + heat * 1.8 + ring * 3.0;
  vDepth = clip.w;
}`,Yr=`#version 300 es
precision highp float;
uniform vec3 uColor;
uniform vec2 uFade;
uniform float uReveal;
uniform float uBrightness;
uniform float uLightMode;
uniform float uOpacity;
uniform float uStyle;
uniform float uPixel;
in vec2 vCorner;
in float vSize;
in float vGlow;
in float vFrame;
in float vDepth;
out vec4 outColor;

float smoother(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

void main() {
  vec2 a = abs(vCorner);
  float cover;
  if (uStyle < 0.5) {
    float thick = max(0.6 * uPixel, 0.5);
    float across = clamp(vSize - a.x + 0.5, 0.0, 1.0) * clamp(thick - a.y + 0.5, 0.0, 1.0);
    float down = clamp(vSize - a.y + 0.5, 0.0, 1.0) * clamp(thick - a.x + 0.5, 0.0, 1.0);
    cover = max(across, down);
  } else {
    cover = clamp(vSize * 0.42 - length(vCorner) + 0.5, 0.0, 1.0);
  }
  if (vFrame > 0.001) {
    float edge = vSize * 2.3;
    float reach = edge * 0.45;
    float line = max(0.5 * uPixel, 0.5);
    float sides = clamp(line - abs(a.x - edge) + 0.5, 0.0, 1.0) * clamp(a.y - edge + reach + 0.5, 0.0, 1.0) * clamp(edge + line - a.y + 0.5, 0.0, 1.0);
    float caps = clamp(line - abs(a.y - edge) + 0.5, 0.0, 1.0) * clamp(a.x - edge + reach + 0.5, 0.0, 1.0) * clamp(edge + line - a.x + 0.5, 0.0, 1.0);
    cover = max(cover, max(sides, caps) * vFrame * 0.8);
  }
  float fade = 1.0 - smoother((vDepth - uFade.x) / max(uFade.y - uFade.x, 1e-3));
  float light = cover * vGlow * fade * fade * uReveal * uBrightness;
  if (uLightMode > 0.5) {
    float ink = (1.0 - exp(-light * 1.8)) * 0.92 * uOpacity;
    outColor = vec4(uColor * ink, ink);
    return;
  }
  vec3 color = 1.0 - exp(-uColor * light * 1.8);
  outColor = vec4(color, max(max(color.r, color.g), color.b)) * uOpacity;
}`,Ye=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Qr=`#version 300 es
precision highp float;
uniform sampler2D uPrevious;
uniform vec4 uSegment;
uniform vec4 uBrush;
uniform vec4 uBurst;
uniform vec2 uDecay;
out vec4 outColor;

vec2 wrapped(vec2 d) {
  return d - ${wt}.0 * floor(d / ${wt}.0 + 0.5);
}

void main() {
  vec4 previous = texelFetch(uPrevious, ivec2(gl_FragCoord.xy), 0);
  vec2 t = gl_FragCoord.xy / ${Qe}.0 * ${wt}.0;
  vec2 a = wrapped(t - uSegment.xy);
  vec2 ab = uSegment.zw - uSegment.xy;
  float k = clamp(dot(a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
  vec2 d = a - ab * k;
  float g = exp(-dot(d, d) / (uBrush.x * uBrush.x)) * uBrush.w;
  float height = previous.r * uDecay.x;
  height += (uBrush.y - height) * g * uBrush.z;
  float heat = previous.g * uDecay.y;
  heat += (1.0 - heat) * g * uBrush.z;
  vec2 b = wrapped(t - uBurst.xy);
  height += uBurst.w * exp(-dot(b, b) / (uBurst.z * uBurst.z));
  outColor = vec4(height, heat, 0.0, 1.0);
}`,Jr=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTarget;
uniform vec2 uTexel;
out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / uTarget;
  vec4 color = texture(uSource, uv - uTexel);
  color += texture(uSource, uv + uTexel);
  color += texture(uSource, uv + vec2(uTexel.x, -uTexel.y));
  color += texture(uSource, uv + vec2(-uTexel.x, uTexel.y));
  outColor = min(color * 0.25, vec4(1.0));
}`,en=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uTarget;
uniform vec2 uStep;
out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / uTarget;
  vec4 color = texture(uSource, uv) * 0.181862;
  color += (texture(uSource, uv + uStep * 1.423135) + texture(uSource, uv - uStep * 1.423135)) * 0.284316;
  color += (texture(uSource, uv + uStep * 3.326702) + texture(uSource, uv - uStep * 3.326702)) * 0.106598;
  color += (texture(uSource, uv + uStep * 5.242989) + texture(uSource, uv - uStep * 5.242989)) * 0.018156;
  outColor = color;
}`,tn=`#version 300 es
precision highp float;
uniform sampler2D uBloom0;
uniform sampler2D uBloom1;
uniform sampler2D uBloom2;
uniform sampler2D uBloom3;
uniform vec2 uView;
uniform float uGlow;
uniform float uLightMode;
out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / uView;
  vec4 halo = texture(uBloom0, uv) * 0.4;
  halo += texture(uBloom1, uv) * 0.3;
  halo += texture(uBloom2, uv) * 0.2;
  halo += texture(uBloom3, uv) * 0.1;
  if (uLightMode > 0.5) {
    outColor = halo * uGlow * 0.35;
    return;
  }
  vec3 color = halo.rgb * uGlow * 1.6;
  color = color / (1.0 + color);
  outColor = vec4(color, max(max(color.r, color.g), color.b));
}`,$=(e,t,r)=>Math.min(r,Math.max(t,e)),Te=e=>{let t=$(e,0,1);return t*t*t*(t*(t*6-15)+10)},on=(e,t)=>{let r=Math.imul(e+1073741824,2654435761)+Math.imul(t+1073741824,2246822519)>>>0;return r=Math.imul(r^r>>>15,739982445)>>>0,r=Math.imul(r^r>>>12,695872825)>>>0,(r^r>>>15)>>>0},Et=(e,t,r,i)=>{let a=on(e,t);return((a&65535)/32767.5-1)*r+((a>>>16)/32767.5-1)*i},Me=(e,t)=>{let r=Math.floor(e),i=Math.floor(t),a=e-r,u=t-i,f=a*a*a*(a*(a*6-15)+10),_=u*u*u*(u*(u*6-15)+10),m=Et(r,i,a,u),d=Et(r+1,i,a-1,u),h=Et(r,i+1,a,u-1),E=Et(r+1,i+1,a-1,u-1),g=m+(d-m)*f;return g+(h+(E-h)*f-g)*_},nr=(e,t,r,i,a)=>{let u=e*r,f=t*r,_=Me(u*.42+i,f*.42+a),m=Me(u*.42-a+5.2,f*.42-i+1.3);u+=_*.8,f+=m*.8;let d=Me(u,f)*.55,h=1.6*u-1.2*f+7.1,E=1.2*u+1.6*f+3.7;d+=Me(h,E)*.15,d+=Me(1.6*h-1.2*E+1.9,1.2*h+1.6*E+8.3)*.04;let g=Math.log(1+Math.exp(7*(3*d+.05)))/7;return g*g*1.4+.1*d},rn=(e,t,r)=>{let i=e*r*5+13.1,a=t*r*5+4.7;return Me(i,a)*.6+Me(1.6*i-1.2*a+2.3,1.2*i+1.6*a+6.1)*.3},ir=(e,t,r)=>{let i=e.createShader(t);return i?(e.shaderSource(i,r),e.compileShader(i),i):null},Re=(e,t,r)=>{let i=ir(e,e.VERTEX_SHADER,t),a=ir(e,e.FRAGMENT_SHADER,r),u=e.createProgram();return!i||!a||!u?null:(e.attachShader(u,i),e.attachShader(u,a),e.linkProgram(u),e.deleteShader(i),e.deleteShader(a),{program:u,uniforms:{}})},ur=(e,t)=>{if(!e.getProgramParameter(t.program,e.LINK_STATUS))return!1;let r=e.getProgramParameter(t.program,e.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let a=e.getActiveUniform(t.program,i);a&&(t.uniforms[a.name.replace(/\[0\]$/,"")]=e.getUniformLocation(t.program,a.name))}return!0},nn=e=>{let t=String(e||"#ffffff").replace("#","").trim();(t.length===3||t.length===4)&&(t=t.slice(0,3).split("").map(i=>i+i).join(""));let r=parseInt(t.slice(0,6),16);return Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]},un=(e,t)=>{let r=Math.cos(t),i=[Math.sin(e)*r,-Math.sin(t),Math.cos(e)*r],a=[Math.cos(e),0,-Math.sin(e)],u=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]];return{f:i,r:a,u}},eo=e=>$(.4877/e,zr,.6),an=({eye:e,f:t,r,u:i},a,u)=>{let f=1/eo(a),_=1/(Ae-bt),m=[r[0],i[0],-t[0],0,r[1],i[1],-t[1],0,r[2],i[2],-t[2],0,-(r[0]*e[0]+r[1]*e[1]+r[2]*e[2]),-(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]),t[0]*e[0]+t[1]*e[1]+t[2]*e[2],1],d=[f/a,0,0,0,0,f,0,0,0,0,(bt+Ae)*_,-1,0,0,2*bt*Ae*_,0];for(let h=0;h<4;h++)for(let E=0;E<4;E++){let g=0;for(let l=0;l<4;l++)g+=d[l*4+E]*m[h*4+l];u[h*4+E]=g}return u},cn=({color:e="#4f7cff",lineCount:t=22,lineWidth:r=1.2,majorLines:i=!0,elevation:a=1,foreground:u=.2,scale:f=1,detail:_=.35,tilt:m=32,speed:d=.25,direction:h="forward",morph:E=.2,glow:g=.6,depthOfField:l=.4,fog:b=.35,brightness:B=1,opacity:k=1,mouseInteraction:D=!0,hoverEffect:F="lift",mouseRadius:H=1,mouseStrength:N=.6,trail:Ne=.3,parallax:Je=.5,clickEffect:Se="pulse",markers:ce="none",glitch:et=0,intro:ie=!0,lightMode:le=!1,dpr:oe,className:K="",style:lr})=>{let to=Fe(null),oo=Fe(null),Rt=Fe(null),tt=Fe(0),[sr,fr]=Qt(0),ro={color:e,lineCount:$(t,2,80),lineWidth:Math.max(.2,r),majorLines:i,elevation:$(a,0,3),foreground:$(u,0,1),scale:$(f,.2,5),detail:$(_,0,1),tilt:$(m,12,90),speed:d,direction:rr[h]??rr.forward,morph:Math.max(0,E),glow:Math.max(0,g),depthOfField:$(l,0,1),fog:$(b,0,1),brightness:Math.max(0,B),opacity:$(k,0,1),mouseInteraction:D,hoverEffect:Gr.includes(F)?F:"lift",mouseRadius:Math.max(.1,H),mouseStrength:Math.max(0,N),trail:$(Ne,0,1),parallax:$(Je,0,1),clickEffect:Se,markers:$r[ce]??-1,glitch:$(et,0,1),intro:ie,lightMode:le,dpr:oe},re=Fe(ro);return re.current=ro,yt(()=>{let Ce=to.current,W=oo.current,_r=Math.min(re.current.dpr||window.devicePixelRatio||1,2),o=W?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:_r<1.5,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!Ce||!W||!o)return;cancelAnimationFrame(tt.current),tt.current=0;let ot=o.getExtension("KHR_parallel_shader_compile"),Oe=!!o.getExtension("EXT_color_buffer_float"),Ie=Re(o,qr(Oe),Zr(Oe)),_e=Oe?Re(o,Ye,Wr):null,he=Oe?Re(o,Ye,Qr):null,ye=Re(o,Ye,Jr),me=Re(o,Ye,en),Ue=Re(o,Ye,tn),Be=Re(o,Kr,Yr);if(!Ie||!ye||!me||!Ue||!Be)return;let Mt=()=>[Ie,_e,he,ye,me,Ue,Be].filter(Boolean),no=()=>!ot||Mt().every(n=>o.getProgramParameter(n.program,ot.COMPLETION_STATUS_KHR)),io=n=>!n||ur(o,n)?n:(o.deleteProgram(n.program),null),uo=()=>(_e=io(_e),he=io(he),[Ie,ye,me,Ue,Be].every(n=>ur(o,n)));if(!ot&&!uo()){Mt().forEach(n=>o.deleteProgram(n.program));return}let ao=n=>n.preventDefault(),co=()=>fr(n=>n+1);W.addEventListener("webglcontextlost",ao),W.addEventListener("webglcontextrestored",co);let lo=o.createVertexArray(),hr=Oe?o.RGBA16F:o.RGBA8,He=(n,s,p,x)=>{let v=o.createTexture();return o.bindTexture(o.TEXTURE_2D,v),o.texStorage2D(o.TEXTURE_2D,1,p,n,s),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,x),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,x),v},St=()=>({texture:null,framebuffer:o.createFramebuffer(),depth:null,width:0,height:0}),Ct=(n,s,p,x)=>{n.texture&&n.width===s&&n.height===p||(n.texture&&o.deleteTexture(n.texture),n.texture=He(s,p,hr,o.CLAMP_TO_EDGE),n.width=s,n.height=p,o.bindFramebuffer(o.FRAMEBUFFER,n.framebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,n.texture,0),x&&(n.depth||(n.depth=o.createRenderbuffer()),o.bindRenderbuffer(o.RENDERBUFFER,n.depth),o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_COMPONENT24,s,p),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,n.depth)))},rt=St(),nt=Array.from({length:or},()=>[St(),St()]),Y=he?[0,1].map(()=>{let n=He(Qe,Qe,o.RG16F,o.REPEAT),s=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,s),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,n,0),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),{texture:n,framebuffer:s}}):null,ze=He(1,1,o.RGBA8,o.REPEAT),P={texture:null,heights:null,framebuffer:o.createFramebuffer(),width:0,height:0},ke=0,mr=(n,s)=>{P.texture&&n<=P.width&&s<=P.height||(P.texture&&o.deleteTexture(P.texture),P.heights&&o.deleteTexture(P.heights),P.width=Math.max(n,Math.ceil(P.width*1.25),64),P.height=Math.max(s,Math.ceil(P.height*1.25),64),P.texture=He(P.width,P.height,o.RGBA16F,o.CLAMP_TO_EDGE),P.heights=He(P.width,P.height,o.R32F,o.CLAMP_TO_EDGE),o.bindTexture(o.TEXTURE_2D,P.heights),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.bindFramebuffer(o.FRAMEBUFFER,P.framebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,P.texture,0),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT1,o.TEXTURE_2D,P.heights,0),o.drawBuffers([o.COLOR_ATTACHMENT0,o.COLOR_ATTACHMENT1]))},ue=(n,s)=>{o.activeTexture(o.TEXTURE0+n),o.bindTexture(o.TEXTURE_2D,s)},pe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,kt=new Float32Array(16),Ve=new Float32Array(Ft*4),Pe=new Float32Array(12),Q={until:0,next:1.5,roll:0,seed:0},Pt=7919,ae=()=>(Pt=Pt*16807%2147483647,(Pt-1)/2147483646),se=[],J={x:0,y:0,inside:!1},w={width:1,height:1,ratio:1,cell:.05,cellKey:""},c={intro:re.current.intro&&!pe?0:1,rise:1,travelX:0,travelZ:0,morph:0,yaw:0,pitch:0,yawVelocity:0,pitchVelocity:0,presence:0,focus:tr,hit:null,brushFrom:null,sculptLife:0,burst:null,level:0,trace:0,clock:0,tilt:re.current.tilt,elevation:re.current.elevation,scale:re.current.scale};c.rise=Te(c.intro);let Le=0,it=0,ut=!0,at=0,ct=!ot,so=!1,Lt=()=>{let n=Math.min(c.tilt*Math.PI/180+c.pitch,Math.PI/2-1e-4),s=un(c.yaw,n),p=c.elevation*Ze*c.rise*.18,x=c.elevation*Ze*c.rise*1.3+.9,v=Math.max(tr,(x-p)/Math.sin(n));return{...s,distance:v,eye:[-s.f[0]*v,p-s.f[1]*v,-s.f[2]*v]}},Dt=(n,s,p)=>{let x=w.width/w.height,v=eo(x),M=[0,1,2].map(T=>n.f[T]+n.r[T]*s*v*x+n.u[T]*p*v),X=Math.hypot(M[0],M[1],M[2]);return M.map(T=>T/X)},At=(n,s)=>s[0]*n.f[0]+s[1]*n.f[1]+s[2]*n.f[2],Nt=(n,s)=>{let p=Dt(n,0,s);return p[1]>-.001?1/0:n.eye[1]/-p[1]*At(n,p)},fo=(n,s)=>[Nt(n,-1)*.9,n.distance,s.foreground],pr=(n,s,p,x)=>{let v=(p-n.eye[0])*n.f[0]-n.eye[1]*n.f[1]+(x-n.eye[2])*n.f[2];return s[2]+(1-s[2])*Te((v-s[0])/Math.max(s[1]-s[0],.001))},_o=(n,s,p,x)=>{let v=Dt(n,p,x),M=c.elevation*Ze*c.rise,X=Ke/c.scale,T=fo(n,s),A=C=>{let ee=n.eye[0]+v[0]*C,z=n.eye[2]+v[2]*C,Ee=nr(c.travelX+ee,c.travelZ+z,X,c.morph*.37,c.morph*.23);return n.eye[1]+v[1]*C-Ee*M*pr(n,T,ee,z)},U=Ae,q=A(U);for(let C=0;C<200&&U<bt*.5;C++){let ee=U+Math.max(.02,q*.4),z=A(ee);if(z<0){let Ee=U,te=ee;for(let Xe=0;Xe<10;Xe++){let I=(Ee+te)*.5;A(I)<0?te=I:Ee=I}return{x:c.travelX+n.eye[0]+v[0]*te,y:n.eye[1]+v[1]*te,z:c.travelZ+n.eye[2]+v[2]*te,depth:te*At(n,v)}}U=ee,q=z}return null},dr=(n,s,p)=>{let x=c.elevation*Ze*c.rise*1.7+.2+s.mouseStrength,v={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0,near:1/0},M=(X,T)=>{let A=n.eye[0]+X[0]*T,U=n.eye[2]+X[2]*T;v.minX=Math.min(v.minX,A),v.maxX=Math.max(v.maxX,A),v.minZ=Math.min(v.minZ,U),v.maxZ=Math.max(v.maxZ,U)};for(let X of[-1.08,0,1.08])for(let T of[-1.08,1.08]){let A=Dt(n,X,T),U=Math.max(At(n,A),.001),q=Ae,C=p*1.05/U;A[1]<-1e-4&&(q=Math.max(Ae,(n.eye[1]-x)/-A[1]),C=Math.min(C,n.eye[1]/-A[1])),q=Math.min(q,C),M(A,q),M(A,C),v.near=Math.min(v.near,q*U)}return v},ho=(n,s)=>{let p=Math.floor(c.travelX/s),x=Math.floor(c.travelZ/s),v=c.travelX-p*s,M=c.travelZ-x*s,X=Math.floor((n.minX+v)/s)-2,T=Math.floor((n.minZ+M)/s)-2,A=$(Math.ceil((n.maxX+v)/s)+2-X,1,4e3),U=$(Math.ceil((n.maxZ+M)/s)+2-T,1,Math.floor(Jt*1.5/A));return{cell:s,camX:p,camZ:x,fracX:v,fracZ:M,k0:X,m0:T,columns:A,rows:U}},Ot=()=>{if(!ct)return;let n=re.current,s=Lt();an(s,w.width/w.height,kt);let p=Nt(s,-1),x=Math.min(Nt(s,1),s.distance*3.2),v=Math.max(x,p*1.6,s.distance*1.4),M=v+(p*1.8-v)*n.fog,X=M*.7+(p*.7-M*.7)*n.fog,T=dr(s,n,M),A=`${w.width}x${w.height}@${w.ratio}|${Math.round(c.tilt/4)}|${Math.round(c.elevation*5)}|${n.fog}`;if(A!==w.cellKey){w.cellKey=A;let L=w.height*w.ratio*.5/eo(w.width/w.height),j=$(14*Math.max(T.near,.5)/L,.02,.4),O=(T.maxX-T.minX)*(T.maxZ-T.minZ)/(j*j);O>Jt&&(j*=Math.sqrt(O/Jt)),w.cell=j}let U=nn(n.color),q=c.elevation*Ze*c.rise,C=ho(T,w.cell),ee=fo(s,n),z=n.markers>=0?ho(T,jr):null,te=(c.hit&&n.mouseInteraction?c.presence:0)*(.35+.5*n.mouseStrength),Xe=n.depthOfField*w.height*.016,I=Te(c.intro/.35),ne=c.hit?c.hit.x:0,De=c.hit?c.hit.z:0;if(Ve.fill(0),se.forEach((L,j)=>{Ve.set([L.x,L.z,L.age*4.2,Math.exp(-L.age*1.1)*Te(L.age/.08)],j*4)}),o.bindVertexArray(lo),_e){let L=C.columns+7,j=C.rows+7;mr(L,j),o.bindFramebuffer(o.FRAMEBUFFER,P.framebuffer),o.viewport(0,0,L,j),o.useProgram(_e.program);let O=_e.uniforms;ue(0,Y?Y[ke].texture:ze),o.uniform1i(O.uSculpt,0),o.uniform1f(O.uSculptOn,Y?1:0),o.uniform1f(O.uFrequency,Ke/c.scale),o.uniform2f(O.uMorph,c.morph*.37,c.morph*.23),o.uniform4fv(O.uPulses,Ve),o.uniform2i(O.uBase,C.k0-2+C.camX,C.m0-2+C.camZ),o.uniform1f(O.uCell,C.cell),o.uniform1f(O.uDetail,n.detail),o.disable(o.DEPTH_TEST),o.disable(o.BLEND),o.drawArrays(o.TRIANGLES,0,3)}let Ge=(L,j,O,Z)=>{o.viewport(0,0,j,O),o.useProgram(Ie.program);let y=Ie.uniforms;if(ue(0,_e?P.texture:ze),o.uniform1i(y.uField,0),ue(1,_e?P.heights:ze),o.uniform1i(y.uHeightField,1),o.uniform1f(y.uFrequency,Ke/c.scale),o.uniform2f(y.uMorph,c.morph*.37,c.morph*.23),o.uniform4fv(y.uPulses,Ve),o.uniform2i(y.uOrigin,C.k0,C.m0),o.uniform2i(y.uCamCell,C.camX,C.camZ),o.uniform2f(y.uCamFrac,C.fracX,C.fracZ),o.uniform1f(y.uCell,C.cell),o.uniform1i(y.uStride,Z),o.uniform1f(y.uHeight,q),o.uniform3fv(y.uEye,s.eye),o.uniform3fv(y.uForward,s.f),o.uniform3fv(y.uNear,ee),o.uniform1f(y.uRefDepth,s.distance),o.uniformMatrix4fv(y.uViewProj,!1,kt),o.uniform1f(y.uDetail,n.detail),o.uniform1f(y.uLines,n.lineCount),o.uniform1f(y.uLineWidth,n.lineWidth*L),o.uniform1f(y.uMajor,n.majorLines?1:0),o.uniform3fv(y.uColor,U),o.uniform1f(y.uBrightness,n.brightness),o.uniform2f(y.uFade,X,M),o.uniform3f(y.uFocus,c.focus,Xe*L,w.height*.03*L),o.uniform4f(y.uHeat,ne,De,.9*n.mouseRadius,te),o.uniform4f(y.uLamp,ne,c.hit?c.hit.y+1.4:0,De,te),o.uniform4f(y.uTrace,c.level,c.trace,ne,De),o.uniform3fv(y.uSun,Xr),o.uniform1f(y.uReveal,I),o.uniform1f(y.uLightMode,n.lightMode?1:0),o.uniform1f(y.uOpacity,n.opacity),o.uniform4fv(y.uGlitch,Pe),o.uniform1f(y.uGlitchSeed,Q.seed),o.uniform1f(y.uPixel,L),o.enable(o.DEPTH_TEST),o.depthFunc(o.LESS),o.disable(o.BLEND),o.clearColor(0,0,0,0),o.clearDepth(1),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,2*(Math.ceil(C.columns/Z)+1),Math.ceil(C.rows/Z)),z){o.useProgram(Be.program);let S=Be.uniforms;ue(2,Y?Y[ke].texture:ze),o.uniform1i(S.uSculpt,2),o.uniform1f(S.uSculptOn,Y?1:0),o.uniform1f(S.uFrequency,Ke/c.scale),o.uniform2f(S.uMorph,c.morph*.37,c.morph*.23),o.uniform4fv(S.uPulses,Ve),o.uniform3fv(S.uEye,s.eye),o.uniform3fv(S.uForward,s.f),o.uniform3fv(S.uNear,ee),o.uniform2i(S.uOrigin,z.k0,z.m0),o.uniform2i(S.uCamCell,z.camX,z.camZ),o.uniform2f(S.uCamFrac,z.fracX,z.fracZ),o.uniform1f(S.uSpacing,z.cell),o.uniform1i(S.uColumns,z.columns+1),o.uniform1f(S.uHeight,q),o.uniformMatrix4fv(S.uViewProj,!1,kt),o.uniform2f(S.uView,j,O),o.uniform1f(S.uSize,4*L),o.uniform1f(S.uRefDepth,s.distance),o.uniform4f(S.uHeat,ne,De,1.2*n.mouseRadius,te),o.uniform1f(S.uTime,c.clock),o.uniform4fv(S.uGlitch,Pe),o.uniform1f(S.uPixel,L),o.uniform3fv(S.uColor,U),o.uniform2f(S.uFade,X,M),o.uniform1f(S.uReveal,I),o.uniform1f(S.uBrightness,n.brightness),o.uniform1f(S.uLightMode,n.lightMode?1:0),o.uniform1f(S.uOpacity,n.opacity),o.uniform1f(S.uStyle,n.markers),o.depthFunc(o.LEQUAL),o.depthMask(!1),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,(z.columns+1)*(z.rows+1)),o.disable(o.BLEND),o.depthMask(!0)}o.disable(o.DEPTH_TEST)},st=n.glow>.001;if(st){let L=Math.max(1,Math.round(w.width/2)),j=Math.max(1,Math.round(w.height/2));Ct(rt,L,j,!0),nt.forEach((Z,y)=>{let S=Math.max(1,Math.round(w.width/2**(y+2))),To=Math.max(1,Math.round(w.height/2**(y+2)));Ct(Z[0],S,To,!1),Ct(Z[1],S,To,!1)}),o.bindFramebuffer(o.FRAMEBUFFER,rt.framebuffer),Ge(.5,L,j,2);let O=rt;nt.forEach(([Z,y])=>{o.bindFramebuffer(o.FRAMEBUFFER,Z.framebuffer),o.viewport(0,0,Z.width,Z.height),o.useProgram(ye.program),ue(0,O.texture),o.uniform1i(ye.uniforms.uSource,0),o.uniform2f(ye.uniforms.uTarget,Z.width,Z.height),o.uniform2f(ye.uniforms.uTexel,1/O.width,1/O.height),o.drawArrays(o.TRIANGLES,0,3),o.useProgram(me.program),o.uniform1i(me.uniforms.uSource,0),o.uniform2f(me.uniforms.uTarget,y.width,y.height),o.bindFramebuffer(o.FRAMEBUFFER,y.framebuffer),ue(0,Z.texture),o.uniform2f(me.uniforms.uStep,1/Z.width,0),o.drawArrays(o.TRIANGLES,0,3),o.bindFramebuffer(o.FRAMEBUFFER,Z.framebuffer),ue(0,y.texture),o.uniform2f(me.uniforms.uStep,0,1/y.height),o.drawArrays(o.TRIANGLES,0,3),O=Z})}if(o.bindFramebuffer(o.FRAMEBUFFER,null),Ge(w.ratio,W.width,W.height,1),st){o.viewport(0,0,W.width,W.height),o.useProgram(Ue.program);let L=Ue.uniforms;nt.forEach(([j],O)=>{ue(O,j.texture),o.uniform1i(L[`uBloom${O}`],O)}),o.uniform2f(L.uView,W.width,W.height),o.uniform1f(L.uGlow,n.glow*I),o.uniform1f(L.uLightMode,n.lightMode?1:0),o.enable(o.BLEND),n.lightMode?o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA):o.blendFunc(o.ONE,o.ONE),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.BLEND)}for(let L=or;L>=0;L--)ue(L,null)},vr=(n,s)=>{if(!Y||!he)return!1;let p=n.mouseInteraction&&n.hoverEffect==="lift"&&c.presence>.001?c.hit:null,x=c.burst;if(!p&&!x&&c.sculptLife<=0)return!1;let v=c.brushFrom||p,M=Y[ke],X=Y[1-ke];o.bindFramebuffer(o.FRAMEBUFFER,X.framebuffer),o.viewport(0,0,Qe,Qe),o.useProgram(he.program);let T=he.uniforms;if(ue(0,M.texture),o.uniform1i(T.uPrevious,0),p&&v?o.uniform4f(T.uSegment,v.x,v.z,p.x,p.z):o.uniform4f(T.uSegment,0,0,0,0),o.uniform4f(T.uBrush,1.1*n.mouseRadius,.9*n.mouseStrength,1-Math.exp(-s*7),p?c.presence:0),x){let U=Te(x.age/.7);x.age+=s;let q=(Te(x.age/.7)-U)*.9*Math.max(n.mouseStrength,.3);o.uniform4f(T.uBurst,x.x,x.z,1.6*n.mouseRadius,q),x.age>=.7&&(c.burst=null)}else o.uniform4f(T.uBurst,0,0,1,0);let A=.25+3*n.trail*n.trail;return o.uniform2f(T.uDecay,Math.exp(-s/A),Math.exp(-s/.7)),o.disable(o.BLEND),o.drawArrays(o.TRIANGLES,0,3),ke=1-ke,c.brushFrom=p?{x:p.x,z:p.z}:null,p||x?c.sculptLife=A*6:c.sculptLife-=s,!0},mo=re.current.dpr,It=()=>{let n=re.current;mo=n.dpr,w.width=Math.max(1,Ce.clientWidth),w.height=Math.max(1,Ce.clientHeight),w.ratio=Math.min(n.dpr||window.devicePixelRatio||1,2),W.width=Math.max(1,Math.round(w.width*w.ratio)),W.height=Math.max(1,Math.round(w.height*w.ratio)),Ot(),de()},Ut=n=>{if(Le=0,!ut||document.hidden)return;if(!ct){if(o.isContextLost())return;if(!no()){Le=requestAnimationFrame(Ut);return}if(!uo()){Fo();return}!he&&Y&&(Y.forEach(I=>{o.deleteTexture(I.texture),o.deleteFramebuffer(I.framebuffer)}),Y=null),ct=!0,Ot()}let s=re.current;s.dpr!==mo&&It();let p=it?$((n-it)/1e3,0,1/20):1/60;it=n,!s.intro||pe?c.intro=1:c.intro<1&&(c.intro=Math.min(1,c.intro+p/Vr)),c.rise=Te(c.intro);let x=pe?1:1-Math.exp(-p/.4);c.tilt+=(s.tilt-c.tilt)*x,c.elevation+=(s.elevation-c.elevation)*x,c.scale=s.scale,c.clock+=p;let v=pe?0:s.glitch;if(v>0)if(c.clock>=Q.next&&c.clock>=Q.until&&(Q.until=c.clock+.1+ae()*.22*(.5+v),Q.next=Q.until+(9-7.4*v)*(.45+ae()*1.1),Q.roll=0),c.clock<Q.until){if(c.clock>=Q.roll){Pe.fill(0);let I=1+Math.floor(ae()*3);for(let ne=0;ne<I;ne++){let De=3+ae()*ae()*w.height*.14,Ge=ae()*w.height,st=(ae()-.5)*2*(10+46*v);Pe.set([Ge,Ge+De,st,1+ae()*3*v],ne*4)}Q.seed=ae(),Q.roll=c.clock+.04+ae()*.05}}else Pe.fill(0);else Pe.fill(0);pe||(c.travelX+=s.direction[0]*s.speed*.8*p,c.travelZ+=s.direction[1]*s.speed*.8*p,c.morph+=s.morph*.12*p);let M=J.inside&&s.mouseInteraction;c.presence+=((M?1:0)-c.presence)*(1-Math.exp(-p/(M?.18:.45)));let X=J.x/w.width*2-1,T=1-J.y/w.height*2,A=pe||!M?0:s.parallax,U=X*A*.09,q=-T*A*.045;c.yawVelocity+=(38*(U-c.yaw)-11*c.yawVelocity)*p,c.pitchVelocity+=(38*(q-c.pitch)-11*c.pitchVelocity)*p,c.yaw+=c.yawVelocity*p,c.pitch+=c.pitchVelocity*p;let C=Lt();M?(c.hit=_o(C,s,X,T),c.hit&&c.brushFrom&&Math.hypot(c.hit.x-c.brushFrom.x,c.hit.z-c.brushFrom.z)>3*s.mouseRadius&&(c.brushFrom=null)):c.presence<.002&&(c.hit=null,c.brushFrom=null);let ee=c.hit&&s.mouseInteraction&&s.hoverEffect==="trace"?c.presence:0;if(c.hit){let I=Ke/c.scale,ne=nr(c.hit.x,c.hit.z,I,c.morph*.37,c.morph*.23)+s.detail*.1*rn(c.hit.x,c.hit.z,I);c.level=c.trace<.01?ne:c.level+(ne-c.level)*(1-Math.exp(-p/.09))}c.trace+=(ee-c.trace)*(1-Math.exp(-p/.2));let z=c.hit&&s.depthOfField>0?c.hit.depth:C.distance;c.focus+=(z-c.focus)*(1-Math.exp(-p/.35));for(let I=se.length-1;I>=0;I--)se[I].age+=p,se[I].age>4&&se.splice(I,1);let Ee=vr(s,p);Ot();let te=Math.abs(s.tilt-c.tilt)>.01||Math.abs(s.elevation-c.elevation)>1e-4||Math.abs(c.yaw-U)>1e-4||Math.abs(c.pitch-q)>1e-4||Math.abs(c.yawVelocity)>1e-4||Math.abs(c.pitchVelocity)>1e-4||Math.abs(z-c.focus)>.001||Math.abs(ee-c.trace)>.001;at=!pe&&(s.speed!==0||s.morph!==0||s.glitch>0||s.markers>=0)||c.intro<1||se.length>0||Ee||te||c.presence>.001&&c.presence<.999?0:at+p,at<.5&&(Le=requestAnimationFrame(Ut))};function de(){at=0,!Le&&ut&&!document.hidden&&(it=0,Le=requestAnimationFrame(Ut))}let po=n=>{let s=Ce.getBoundingClientRect(),p=n.clientX-s.left,x=n.clientY-s.top;return{x:p,y:x,inside:p>=0&&x>=0&&p<=s.width&&x<=s.height}},vo=n=>{let{x:s,y:p,inside:x}=po(n),v=J.inside;J.inside=x,x&&(J.x=s,J.y=p),(x||v)&&de()},go=n=>{let s=re.current,{x:p,y:x,inside:v}=po(n);if(!v||(J.x=p,J.y=x,J.inside=!0,de(),s.glitch>0&&!pe&&(Q.until=c.clock+.16,Q.roll=0),!s.mouseInteraction||s.clickEffect!=="pulse"&&s.clickEffect!=="peak"))return;let M=_o(Lt(),s,p/w.width*2-1,1-x/w.height*2);M&&(s.clickEffect==="peak"&&Y?c.burst={x:M.x,z:M.z,age:0}:s.clickEffect==="pulse"&&(se.length>=Ft&&se.shift(),se.push({x:M.x,z:M.z,age:0})))},lt=n=>{n.pointerType==="touch"&&(J.inside=!1,de())},xo=()=>{J.inside=!1,de()},yo=()=>de(),Eo=new ResizeObserver(It);Eo.observe(Ce);let bo=new IntersectionObserver(n=>{ut=n.some(s=>s.isIntersecting),ut&&de()});bo.observe(Ce),window.addEventListener("pointermove",vo,{passive:!0}),window.addEventListener("pointerdown",go,{passive:!0}),window.addEventListener("pointerup",lt,{passive:!0}),window.addEventListener("pointercancel",lt,{passive:!0}),document.documentElement.addEventListener("pointerleave",xo),document.addEventListener("visibilitychange",yo);let wo=()=>{if(!o.isContextLost()){if(!ct&&!no()){requestAnimationFrame(wo);return}Mt().forEach(n=>o.deleteProgram(n.program))}},Fo=()=>{so||(so=!0,cancelAnimationFrame(Le),Rt.current=null,Eo.disconnect(),bo.disconnect(),window.removeEventListener("pointermove",vo),window.removeEventListener("pointerdown",go),window.removeEventListener("pointerup",lt),window.removeEventListener("pointercancel",lt),document.documentElement.removeEventListener("pointerleave",xo),document.removeEventListener("visibilitychange",yo),W.removeEventListener("webglcontextlost",ao),W.removeEventListener("webglcontextrestored",co),[rt,...nt.flat()].forEach(n=>{n.texture&&o.deleteTexture(n.texture),n.depth&&o.deleteRenderbuffer(n.depth),o.deleteFramebuffer(n.framebuffer)}),Y?.forEach(n=>{o.deleteTexture(n.texture),o.deleteFramebuffer(n.framebuffer)}),o.deleteTexture(ze),o.deleteVertexArray(lo),P.texture&&o.deleteTexture(P.texture),P.heights&&o.deleteTexture(P.heights),o.deleteFramebuffer(P.framebuffer),wo())};return It(),Rt.current=de,()=>{Fo();let n=()=>{tt.current=0,!W.isConnected&&!o.isContextLost()&&o.getExtension("WEBGL_lose_context")?.loseContext()};W.isConnected?tt.current=requestAnimationFrame(n):n()}},[sr]),yt(()=>{Rt.current?.()}),qe("div",{ref:to,className:`topography-container ${K}`.trim(),style:lr,children:qe("canvas",{ref:oo,className:"topography-canvas","aria-hidden":"true"})})},ar=cn;var cr=document.getElementById("topography");if(cr){let e=()=>document.documentElement.dataset.theme!=="dark",t=()=>jt(qe(ar,{color:"#4f7cff",lineCount:22,lineWidth:1.2,elevation:1,foreground:.2,tilt:32,speed:.25,direction:"forward",glow:.6,depthOfField:.4,fog:.35,hoverEffect:"lift",clickEffect:"pulse",majorLines:!0,scale:1,detail:.35,morph:.2,brightness:1,markers:"none",glitch:0,opacity:1,mouseInteraction:!0,mouseRadius:1,mouseStrength:.6,trail:.3,parallax:.5,intro:!0,lightMode:window.__topoLight?e():!1}),cr);t(),window.__topoLight&&new MutationObserver(t).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}})();
