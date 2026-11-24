/* Original pixel-art hero scene, drawn procedurally (seeded, no assets). */
(function(){
var c=document.getElementById('scene');if(!c)return;
var x=c.getContext('2d'),W=240,H=135;
function draw(){
 var s=7;function r(){s=(s*16807)%2147483647;return s/2147483647;}
 var g=x.createLinearGradient(0,0,0,H*.6);g.addColorStop(0,'#1f7ae0');g.addColorStop(1,'#7cc4f5');x.fillStyle=g;x.fillRect(0,0,W,H);
 function cloud(cx,cy,w){for(var i=0;i<w*3;i++){var px=cx+(r()-.5)*w*2,py=cy+(r()-.5)*w*.5-Math.abs(px-cx)*.12,rad=2+r()*w*.25;x.fillStyle=r()<.35?'#cfe3f5':'#fff';x.fillRect(px|0,py|0,rad|0,(rad*.7)|0);}}
 [[222,16,12],[95,58,12],[40,40,9]].forEach(function(a){cloud(a[0],a[1],a[2]);});
 for(var i=0;i<18;i++){var bx=70+i*6+r()*3,bh=8+r()*16;x.fillStyle='#4a7fa8';x.fillRect(bx|0,(88-bh)|0,4,bh|0);}
 for(var px=0;px<W;px++){var h=84+Math.sin(px/22)*3+Math.sin(px/7)*1.2;for(var py=h|0;py<H;py++){var d=(py-h)/(H-h),n=r();x.fillStyle=d<.1?'#6fbf4a':d<.5?(n<.3?'#3f9a3a':'#4aa83f'):(n<.4?'#2a7a30':'#35903a');x.fillRect(px,py,1,1);}}
 for(var py2=96;py2<H;py2++){var w=(py2-90)*1.2;for(var q=0;q<w+30;q++){if(r()<.9){x.fillStyle=r()<.3?'#c9a56a':'#d9b97c';x.fillRect((q+Math.sin(py2/9)*10)|0,py2,1,1);}}}
 function tree(cx,by,sz){x.fillStyle='#5b3b22';x.fillRect(cx-2,(by-sz*.5)|0,4,(sz*.5)|0);for(var i=0;i<sz*14;i++){var a=r()*6.28,d=Math.sqrt(r())*sz;x.fillStyle=['#2a7a30','#3a9a3c','#58b94a','#1f6428'][(r()*4)|0];x.fillRect((cx+Math.cos(a)*d)|0,(by-sz*.9+Math.sin(a)*d*.7)|0,2,2);}}
 tree(210,70,26);tree(22,98,16);tree(58,92,12);tree(165,88,10);
 function R(a,b,w,h,col){x.fillStyle=col;x.fillRect(a,b,w,h);}
 R(150,104,38,3,'#9aa0a6');R(153,82,32,22,'#444');R(155,84,28,18,'#5ab0f0');R(157,88,10,3,'#fff');R(172,92,8,3,'#fff');R(148,107,42,3,'#777');
 R(192,108,22,8,'#8a5a2b');R(194,109,18,6,'#a87036');
 R(108,108,1,10,'#2a7a30');R(106,104,5,4,'#f5d442');R(120,124,5,3,'#d2332b');
 var paper=(getComputedStyle(document.body).getPropertyValue('--paper')||'#f4f5f1').trim()||'#f4f5f1';
 for(var e=0;e<W;e++){var hh=H-2-((r()*2)|0);x.fillStyle=paper;x.fillRect(e,hh,1,H-hh);}
}
draw();
new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
})();
