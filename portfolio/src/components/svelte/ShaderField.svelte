<script lang="ts">
  import { onMount } from 'svelte';

  // Micro-shader hero field: hand-written raw WebGL (~130 lines, zero
  // dependencies) instead of ShaderGradient's React + three.js chain.
  // Slow warm fbm noise, alpha-composited over the section background so it
  // works in both themes. Progressive enhancement: any failure (no WebGL,
  // bad compile, weak device, reduced motion, mobile) leaves the CSS
  // atmosphere underneath untouched.

  let canvas: HTMLCanvasElement;

  const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

  const FRAG = `precision mediump float;
uniform vec2 u_res;uniform float u_time;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p*=2.03;a*=.5;}return v;}
void main(){
vec2 uv=gl_FragCoord.xy/u_res;
vec2 p=uv*vec2(u_res.x/u_res.y,1.)*1.6;
float t=u_time;
float n=fbm(p*1.4+vec2(t*.05,-t*.03)+fbm(p*2.2+t*.04)*.6);
float m=smoothstep(.35,.95,n);
float edge=smoothstep(0.,.22,uv.y)*smoothstep(1.,.62,uv.y);
gl_FragColor=vec4(vec3(.59,.41,.06),m*.10*edge);}`;

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 640px)').matches) return; // mobile: CSS field

    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        canvas.getContext('webgl', {
          alpha: true,
          antialias: false,
          depth: false,
          stencil: false,
          powerPreference: 'low-power',
        }) ??
        (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    } catch {
      return;
    }
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl!.createShader(type);
      if (!sh) return null;
      gl!.shaderSource(sh, src);
      gl!.compileShader(sh);
      if (!gl!.getShaderParameter(sh, gl!.COMPILE_STATUS)) return null;
      return sh;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');

    // Signal the hero to retire its CSS drift — one field at a time.
    canvas.closest('[data-hero]')?.setAttribute('data-shader', 'true');

    const weak = (navigator.hardwareConcurrency ?? 8) <= 4;
    const dprCap = weak ? 1 : 1.5;
    const fit = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      const w = Math.max(1, Math.floor(r.width * dpr));
      const h = Math.max(1, Math.floor(r.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl!.viewport(0, 0, w, h);
      }
    };
    fit();
    window.addEventListener('resize', fit);

    let raf = 0;
    let visible = true;
    let t = Math.random() * 100;
    let last = performance.now();
    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      t += dt * 0.06; // barely-moving material
      gl!.uniform2f(uRes, canvas.width, canvas.height);
      gl!.uniform1f(uTime, t);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf && visible) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
          if (visible) {
            fit();
            kick();
          } else if (raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        });
      },
      { threshold: 0 }
    );
    io.observe(canvas);
    kick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', fit);
    };
  });
</script>

<span class="shader-field" aria-hidden="true"><canvas bind:this={canvas}></canvas></span>

<style>
  .shader-field {
    position: absolute;
    inset: 0;
    display: block;
    pointer-events: none;
  }

  .shader-field canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
