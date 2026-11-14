/* Natural background: slow, soft dappled light drifting over sage paper.
   A small WebGL fragment shader in the spirit of React Bits' Aurora / Silk / Grainient
   backgrounds (domain-warped noise + grain). Kept low contrast on purpose so text always reads.
   Falls back to a static CSS gradient when WebGL is missing or motion is reduced. */
(()=>{
var host=document.getElementById('gradientascii');if(!host)return;
var root=document.documentElement;
var mql=window.matchMedia('(prefers-reduced-motion: reduce)');
var cv=document.createElement('canvas');cv.setAttribute('aria-hidden','true');
cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block';
host.appendChild(cv);
function fallback(){
  var dark=root.dataset.theme==='dark';
  host.style.background=dark
   ?'radial-gradient(60% 50% at 20% 10%,#1b2b22 0%,transparent 70%),radial-gradient(50% 50% at 85% 70%,#18262a 0%,transparent 70%)'
   :'radial-gradient(60% 50% at 20% 10%,#e3ecdd 0%,transparent 70%),radial-gradient(50% 50% at 85% 70%,#dce8ea 0%,transparent 70%)';
}
var gl=cv.getContext('webgl',{antialias:false,alpha:true,powerPreference:'low-power'});
if(!gl){fallback();new MutationObserver(fallback).observe(root,{attributes:true,attributeFilter:['data-theme']});return;}
var vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
var fs=`precision mediump float;
uniform vec2 R;uniform float T;uniform float D;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(7.1,3.7);a*=.5;}return v;}
void main(){
 vec2 uv=gl_FragCoord.xy/R.y;
 float t=T*.035;
 vec2 q=vec2(fbm(uv*1.4+vec2(t,-t*.7)),fbm(uv*1.4+vec2(5.2-t*.8,1.3+t)));
 float f=fbm(uv*1.6+2.2*q);
 /* dappled light: soft bright patches that drift slowly */
 float d=fbm(uv*2.6+vec2(t*1.6,t*.9)+1.5*q);
 float dap=smoothstep(.52,.78,d);
 vec3 base,mossA,sky,sun;
 if(D<.5){
  base=vec3(.961,.965,.973);mossA=vec3(.855,.906,.835);sky=vec3(.851,.906,.918);sun=vec3(1.,.985,.93);
 }else{
  base=vec3(.063,.067,.078);mossA=vec3(.082,.133,.102);sky=vec3(.075,.118,.129);sun=vec3(.13,.18,.14);
 }
 vec3 c=mix(base,mossA,smoothstep(.25,.75,f)*.9);
 c=mix(c,sky,smoothstep(.45,.9,q.x)*.55);
 c=mix(c,sun,dap*(D<.5?.6:.35));
 /* paper grain */
 float g=h(gl_FragCoord.xy+fract(T)*13.)-.5;
 c+=g*(D<.5?.025:.03);
 gl_FragColor=vec4(c,1.);
}`;
function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;}
var pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){fallback();return;}
gl.useProgram(pr);
var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
var loc=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
var uR=gl.getUniformLocation(pr,'R'),uT=gl.getUniformLocation(pr,'T'),uD=gl.getUniformLocation(pr,'D');
var scale=.5,raf=0,t0=performance.now(),vis=true;
function size(){var w=Math.max(1,Math.round(innerWidth*scale)),hh=Math.max(1,Math.round(innerHeight*scale));cv.width=w;cv.height=hh;gl.viewport(0,0,w,hh);}
function draw(now){
 gl.uniform2f(uR,cv.width,cv.height);
 gl.uniform1f(uT,((now||performance.now())-t0)/1000);
 gl.uniform1f(uD,root.dataset.theme==='dark'?1:0);
 gl.drawArrays(gl.TRIANGLES,0,3);
}
function loop(now){raf=0;draw(now);if(vis&&!mql.matches)raf=requestAnimationFrame(loop);}
function start(){if(!raf)raf=requestAnimationFrame(loop);}
size();draw();
if(!mql.matches)start();
addEventListener('resize',()=>{size();draw();});
document.addEventListener('visibilitychange',()=>{vis=!document.hidden;if(vis&&!mql.matches)start();});
new MutationObserver(()=>draw()).observe(root,{attributes:true,attributeFilter:['data-theme']});
mql.addEventListener&&mql.addEventListener('change',()=>{if(mql.matches){cancelAnimationFrame(raf);raf=0;draw();}else start();});
})();
