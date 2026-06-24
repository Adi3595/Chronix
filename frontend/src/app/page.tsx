"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background WebGL Shader
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    function syncSize() {
      if(!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    syncSize();

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;
    
    // Soft organic movement for the background
    float noise = sin(uv.x * 10.0 + u_time * 0.5) * cos(uv.y * 8.0 - u_time * 0.3) * 0.05;
    
    // Background color: #F4F5EF (244, 245, 239)
    vec3 color = vec3(0.957, 0.961, 0.937);
    
    // Subtle gradient shift using primary green: #2E7D32 (46, 125, 50)
    vec3 green = vec3(0.18, 0.49, 0.20);
    float glow = smoothstep(0.8, 1.0, 1.0 - distance(uv, vec2(0.5 + sin(u_time*0.2)*0.1, 0.5)));
    
    color = mix(color, color + green * 0.03, glow);
    
    gl_FragColor = vec4(color, 1.0);
}`;

    function cs(type: number, src: string) {
      if(!gl) return null;
      const s = gl.createShader(type);
      if(!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    
    const prog = gl.createProgram();
    const vShader = cs(gl.VERTEX_SHADER, vs);
    const fShader = cs(gl.FRAGMENT_SHADER, fs);
    if(prog && vShader && fShader) {
      gl.attachShader(prog, vShader);
      gl.attachShader(prog, fShader);
      gl.linkProgram(prog);
      gl.useProgram(prog);
      
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const pos = gl.getAttribLocation(prog, "a_position");
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
      
      const uTime = gl.getUniformLocation(prog, "u_time");
      const uRes = gl.getUniformLocation(prog, "u_resolution");
      
      let animationFrameId: number;
      function render(t: number) {
        syncSize();
        if(!canvas || !gl || !prog) return;
        gl.viewport(0, 0, canvas.width, canvas.height);
        if (uTime) gl.uniform1f(uTime, t * 0.001);
        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        animationFrameId = requestAnimationFrame(render);
      }
      render(0);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <div className="text-on-surface antialiased selection:bg-primary-container selection:text-on-primary bg-background min-h-screen">
      <Script 
        src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js" 
        onLoad={() => {
          const container = threeRef.current;
          if(!container) return;
          // @ts-ignore
          if(typeof window.THREE === 'undefined') return;
          // @ts-ignore
          const THREE = window.THREE;
          
          const width = container.clientWidth || window.innerWidth;
          const height = container.clientHeight || window.innerHeight;

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

          renderer.setSize(width, height);
          container.appendChild(renderer.domElement);

          const group = new THREE.Group();
          scene.add(group);

          const material = new THREE.MeshPhongMaterial({ 
              color: 0x2E7D32, 
              transparent: true, 
              opacity: 0.6,
              shininess: 100
          });

          for (let i = 0; i < 3; i++) {
              const geometry = new THREE.TorusGeometry(2 + i * 0.5, 0.02, 16, 100);
              const ring = new THREE.Mesh(geometry, material);
              ring.rotation.x = Math.random() * Math.PI;
              ring.rotation.y = Math.random() * Math.PI;
              group.add(ring);
          }

          const coreGeo = new THREE.SphereGeometry(0.8, 32, 32);
          const coreMat = new THREE.MeshPhongMaterial({ color: 0x2E7D32, emissive: 0x2E7D32, emissiveIntensity: 0.5 });
          const core = new THREE.Mesh(coreGeo, coreMat);
          group.add(core);

          const light = new THREE.PointLight(0xffffff, 1, 100);
          light.position.set(10, 10, 10);
          scene.add(light);
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          scene.add(ambientLight);

          camera.position.z = 8;

          const animate = () => {
              requestAnimationFrame(animate);
              group.rotation.y += 0.005;
              group.rotation.x += 0.002;
              const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
              core.scale.set(scale, scale, scale);
              renderer.render(scene, camera);
          };

          animate();
        }}
      />

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md transition-all duration-200 ease-out">
        <div className="flex justify-between items-center px-4 md:px-[40px] py-6 max-w-[1440px] mx-auto">
          <div className="font-display-lg font-serif text-[24px] md:text-[32px] font-semibold text-primary tracking-tight">
            Chronix OS
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#" className="text-primary border-b-2 border-primary pb-1 font-mono-label text-[13px] font-mono">Philosophy</Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-mono-label text-[13px] font-mono">Ecosystem</Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-mono-label text-[13px] font-mono">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:block font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-primary transition-colors">Login</Link>
            <Link href="/dashboard" className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-mono-label text-[13px] font-mono hover:bg-opacity-90 transition-opacity">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* WebGL Background */}
        <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-multiply" style={{ display: "block" }}>
          <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Typography & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in-up">
            <h1 className="font-display-lg font-serif text-[48px] md:text-[64px] leading-[1.1] font-semibold text-on-surface mb-6 tracking-tight">
              Execution<br />
              <span className="text-primary">Without Chaos</span>
            </h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-10 max-w-lg">
              Chronix transforms goals, deadlines, and responsibilities into clear execution paths. Predict risks. Maintain momentum. Finish what matters.
            </p>
            <div className="flex items-center gap-4 mb-12">
              <Link href="/dashboard" className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-mono-label text-[13px] font-mono hover:bg-opacity-90 transition-opacity">Start Planning</Link>
              <button className="bg-transparent border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-mono-label text-[13px] font-mono hover:bg-surface-container transition-colors">Watch Demo</button>
            </div>
            <div className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest border-l-2 border-primary pl-4">
              Built for students, professionals, creators, and builders.
            </div>
          </div>

          {/* Visuals & Overlays */}
          <div className="lg:col-span-6 relative flex justify-end items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* ThreeJS Container */}
            <div className="absolute inset-0 w-[120%] h-[120%] -right-[10%] -top-[10%] pointer-events-none" style={{ display: "block" }}>
              <div ref={threeRef} style={{ width: "100%", height: "100%" }}></div>
            </div>

            <div className="relative z-20 w-full max-w-md flex flex-col gap-4">
              {/* Overlay Card 1 */}
              <div className="bg-white/85 backdrop-blur-md rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-high transition-transform hover:-translate-y-1 duration-200">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono-label text-[13px] font-mono text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span> Momentum Score
                  </span>
                  <span className="text-primary font-mono-label text-[13px] font-mono bg-primary-fixed/20 px-2 py-1 rounded">+12 This Week</span>
                </div>
                <div className="font-headline-md font-serif text-[32px] font-semibold text-on-surface flex items-baseline gap-2">
                  <span>87</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant font-normal">/ 100</span>
                </div>
              </div>

              {/* Overlay Card 2 */}
              <div className="bg-white/85 backdrop-blur-md rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-high transition-transform hover:-translate-y-1 duration-200">
                <div className="font-mono-label text-[13px] font-mono text-on-surface-variant mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span> Future Self Simulator
                </div>
                <div className="font-body-md text-[15px] font-medium text-on-surface mb-4">Goal: Learn DSA in 60 Days</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between font-mono-label text-[11px] font-mono mb-1 text-on-surface-variant">
                      <span>Current Path</span>
                      <span>120 Days</span>
                    </div>
                    <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                      <div className="bg-outline h-full w-[100%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono-label text-[11px] font-mono mb-1 text-primary">
                      <span>Recommended Path</span>
                      <span>58 Days</span>
                    </div>
                    <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[48%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay Card 3 */}
              <div className="bg-error-container/10 backdrop-blur-md rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-error/20 transition-transform hover:-translate-y-1 duration-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono-label text-[13px] font-mono text-error flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">warning</span> Sentinel Alert
                  </span>
                  <span className="font-mono-label text-[13px] font-mono text-error font-bold">82% Risk</span>
                </div>
                <div className="font-body-md text-[15px] text-on-surface mt-2">
                  Deadline approaching. <span className="text-error underline cursor-pointer">Activate Rescue Mode</span> to compress tasks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Ecosystem */}
      <section className="py-[80px] bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display-lg font-serif text-[32px] font-semibold text-on-surface mb-4">The Agent Ecosystem</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto">Specialized intelligence actively managing your execution surface.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container hover:border-outline-variant transition-colors animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="material-symbols-outlined text-[32px] text-primary mb-4">explore</span>
              <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-2">Atlas</h3>
              <p className="font-body-md text-[15px] text-on-surface-variant">Strategic mapping and macro-goal planning.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container hover:border-outline-variant transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="material-symbols-outlined text-[32px] text-primary mb-4">sync</span>
              <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-2">Orbit</h3>
              <p className="font-body-md text-[15px] text-on-surface-variant">Autonomous scheduling and momentum tracking.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container hover:border-outline-variant transition-colors animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="material-symbols-outlined text-[32px] text-primary mb-4">visibility</span>
              <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-2">Sentinel</h3>
              <p className="font-body-md text-[15px] text-on-surface-variant">Proactive deadline risk detection and alerts.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container hover:border-outline-variant transition-colors animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="material-symbols-outlined text-[32px] text-primary mb-4">favorite</span>
              <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-2">Pulse</h3>
              <p className="font-body-md text-[15px] text-on-surface-variant">Continuous monitoring of your productivity vitals.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container hover:border-outline-variant transition-colors animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="material-symbols-outlined text-[32px] text-primary mb-4">medical_services</span>
              <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-2">Rescue</h3>
              <p className="font-body-md text-[15px] text-on-surface-variant">Emergency intervention and schedule compression.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container hover:border-outline-variant transition-colors animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="material-symbols-outlined text-[32px] text-primary mb-4">monitoring</span>
              <h3 className="font-headline-md font-serif text-[24px] font-semibold mb-2">Echo</h3>
              <p className="font-body-md text-[15px] text-on-surface-variant">Deep analytics and execution feedback loops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container w-full py-12 border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-lg font-serif text-[24px] text-primary mb-6 md:mb-0">
            Chronix OS
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-opacity ease-out duration-200 font-mono-label text-[13px] font-mono">Privacy Policy</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-opacity ease-out duration-200 font-mono-label text-[13px] font-mono">Terms of Service</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-opacity ease-out duration-200 font-mono-label text-[13px] font-mono">Contact Support</Link>
            </div>
            <div className="font-body-md text-[15px] text-on-surface-variant">
              © 2026 Chronix Productivity OS. Swiss Engineered Focus.
            </div>
          </div>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}
