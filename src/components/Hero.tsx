import { useState } from 'react';
import { personalInfo } from '../data';
import { ArrowRight, FileDown, Eye, Circle, Code, Database, Layers } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'java'>('python');

  const pythonCode = `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Rohan's AI Engine API")

class AIModel(BaseModel):
    name: str = "Computer Vision Trial Room"
    infrastructure: str = "FastAPI & Supabase"
    capabilities: list = ["Real-time Overlay", "2D Projection"]

@app.get("/api/v1/models")
async def get_ai_models():
    return AIModel()`;

  const javaCode = `public class StudyTracker {
    public static void main(String[] args) {
        AIModel cvSystem = new AIModel("Insulator Damage Detection");
        cvSystem.setFramework("OpenCV & Drone AI");
        cvSystem.deploy();
        
        System.out.println("Handshake complete. Live inspection active.");
    }
}`;

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, rgba(110,62,217,0.18) 0%, rgba(97,165,255,0.10) 45%, #030303 85%)',
      }}
    >
      {/* Soft blue secondary glow to accent the screen edge */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-[#61A5FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#61A5FF] animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#888E9E] uppercase">
                Seeking AI & SDE Internships / Entry-Level Roles
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#61A5FF] font-mono">
                {personalInfo.fullName}
              </h2>
              <h1 className="text-4xl sm:text-6xl xl:text-[72px] font-black text-[#F8F8F8] tracking-[-1px] lg:tracking-[-3px] leading-[1.05] uppercase">
                SOFTWARE <br />
                DEVELOPER <br />
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #B56EFF 0%, #8E78FF 30%, #61A5FF 70%, #7CB4FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  className="font-black drop-shadow-[0_0_15px_rgba(97,165,255,0.15)] text-2xl sm:text-4xl xl:text-[44px]"
                >
                  FINAL YEAR B.TECH STUDENT
                </span>
              </h1>
              <p className="text-[#888E9E] text-base leading-relaxed max-w-xl font-light">
                Pursuing a B.Tech in Information Technology with hands-on experience in Data Analytics, scalable FastAPI backend development, and relational database design.
              </p>
            </div>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg pt-2">
              <div className="bg-[#17141F] p-4.5 rounded-[24px] border border-[#2A2635] flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1A1822] flex items-center justify-center text-[#61A5FF] rounded-xl border border-[#2A2635]">
                  <Code size={16} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F8F8F8]">4+ Core</div>
                  <div className="text-[9px] font-mono text-[#888E9E] uppercase">SDE Projects</div>
                </div>
              </div>
              <div className="bg-[#17141F] p-4.5 rounded-[24px] border border-[#2A2635] flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1A1822] flex items-center justify-center text-[#6E3ED9] rounded-xl border border-[#2A2635]">
                  <Layers size={16} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F8F8F8]">1 Research</div>
                  <div className="text-[9px] font-mono text-[#888E9E] uppercase">Paper</div>
                </div>
              </div>
              <div className="bg-[#17141F] p-4.5 rounded-[24px] border border-[#2A2635] flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1A1822] flex items-center justify-center text-[#7CB4FF] rounded-xl border border-[#2A2635]">
                  <Database size={16} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F8F8F8]">2 Patents</div>
                  <div className="text-[9px] font-mono text-[#888E9E] uppercase">Copyrights</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={() => handleScrollToSection('projects')}
                className="flex items-center justify-center gap-2 bg-[#FFFFFF] hover:scale-103 text-[#111111] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all group cursor-pointer shadow-lg shadow-[#FFFFFF]/5"
              >
                <span>Explore Work</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 bg-[#1A1822] border border-[#2A2635] hover:scale-103 text-[#F8F8F8] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all group cursor-pointer"
              >
                <FileDown size={14} className="text-[#61A5FF] group-hover:translate-y-[1px] transition-transform" />
                <span>Interactive Resume</span>
              </button>

              <button
                onClick={() => handleScrollToSection('contact')}
                className="flex items-center justify-center gap-2 bg-transparent text-[#888E9E] hover:text-[#FFFFFF] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                <Eye size={14} className="text-[#61A5FF]" />
                <span>Reach Out</span>
              </button>
            </div>
          </div>

          {/* Interactive Code Container */}
          <div className="lg:col-span-5 relative w-full">
            {/* Underlying purplish glow behind the terminal card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6E3ED9]/20 to-[#61A5FF]/10 rounded-[24px] blur-2xl pointer-events-none" />
            
            <div className="relative rounded-[24px] bg-[#17141F] border border-[#2A2635] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Header */}
              <div className="bg-[#141218] px-5 py-4 flex items-center justify-between border-b border-[#2A2635]">
                <div className="flex items-center gap-1.5">
                  <Circle size={8} className="fill-rose-500/80 stroke-none" />
                  <Circle size={8} className="fill-amber-500/80 stroke-none" />
                  <Circle size={8} className="fill-emerald-500/80 stroke-none" />
                </div>
                <div className="flex bg-[#1A1822] rounded-full p-1 border border-[#2A2635]">
                  <button
                    onClick={() => setActiveCodeTab('python')}
                    className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      activeCodeTab === 'python'
                        ? 'bg-[#FFFFFF] text-[#111111] shadow-sm font-extrabold'
                        : 'text-[#888E9E] hover:text-[#F8F8F8]'
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('java')}
                    className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      activeCodeTab === 'java'
                        ? 'bg-[#FFFFFF] text-[#111111] shadow-sm font-extrabold'
                        : 'text-[#888E9E] hover:text-[#F8F8F8]'
                    }`}
                  >
                    Java
                  </button>
                </div>
              </div>

              {/* Code Display Area */}
              <div className="p-6 overflow-x-auto h-80 select-text leading-relaxed text-[#888E9E] bg-[#17141F]">
                <pre className="whitespace-pre">
                  {activeCodeTab === 'python' ? (
                    <code>
                      <span className="text-[#6E3ED9] font-bold">from</span> fastapi <span className="text-[#6E3ED9] font-bold">import</span> FastAPI<br />
                      <span className="text-[#6E3ED9] font-bold">from</span> pydantic <span className="text-[#6E3ED9] font-bold">import</span> BaseModel<br /><br />
                      app = <span className="text-[#61A5FF] font-semibold">FastAPI</span>(title=<span className="text-[#7CB4FF]">"Rohan's AI Engine API"</span>)<br /><br />
                      <span className="text-[#6E3ED9] font-bold">class</span> <span className="text-[#7CB4FF] font-bold">AIModel</span>(BaseModel):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-[#61A5FF]">str</span> = <span className="text-[#7CB4FF]">"Computer Vision Trial Room"</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;infrastructure: <span className="text-[#61A5FF]">str</span> = <span className="text-[#7CB4FF]">"FastAPI & Supabase"</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;capabilities: <span className="text-[#61A5FF]">list</span> = [<span className="text-[#7CB4FF]">"Real-time Overlay"</span>, <span className="text-[#7CB4FF]">"2D Projection"</span>]<br /><br />
                      <span className="text-[#6E3ED9] font-bold">@app.get</span>(<span className="text-[#7CB4FF]">"/api/v1/models"</span>)<br />
                      <span className="text-[#6E3ED9] font-bold">async def</span> <span className="text-[#61A5FF]">get_ai_models</span>():<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6E3ED9] font-bold">return</span> <span className="text-[#7CB4FF]">AIModel</span>()
                    </code>
                  ) : (
                    <code>
                      <span className="text-[#6E3ED9] font-bold">public class</span> <span className="text-[#7CB4FF] font-bold">StudyTracker</span> &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6E3ED9] font-bold">public static void</span> <span className="text-[#61A5FF]">main</span>(String[] args) &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AIModel cvSystem = <span className="text-[#6E3ED9] font-bold">new</span> <span className="text-[#7CB4FF]">AIModel</span>(<span className="text-[#7CB4FF]">"Insulator Damage Detection"</span>);<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cvSystem.setFramework(<span className="text-[#7CB4FF]">"OpenCV & Drone AI"</span>);<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cvSystem.deploy();<br /><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-[#7CB4FF]">"Handshake complete. Live inspection active."</span>);<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                      &#125;
                    </code>
                  )}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
