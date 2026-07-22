import { FileText, Calendar, Users, BookOpen, Quote, Sparkles } from 'lucide-react';
import { researchPapers } from '../data';

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <BookOpen size={12} className="text-[#61A5FF]" />
            <span>Academic Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Research & Publications
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            Presented and peer-reviewed scientific contributions on Artificial Intelligence and Computer Vision at international conferences.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        {/* Paper Cards */}
        {researchPapers.map((paper, idx) => (
          <div 
            key={idx}
            className="bg-[#17141F] rounded-[24px] border border-[#2A2635] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch hover:border-[#6E3ED9]/50 transition-all duration-300"
          >
            {/* Visual Icon Column */}
            <div className="lg:col-span-4 bg-[#141218] p-8 sm:p-10 flex flex-col justify-between text-[#F8F8F8] relative overflow-hidden lg:border-r border-[#2A2635]">
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-[0.02] text-[#6E3ED9] pointer-events-none">
                <FileText size={200} />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF]">
                  <FileText size={22} />
                </div>
                
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#61A5FF] uppercase bg-[#1A1822] px-3 py-1.5 rounded-full border border-[#2A2635]">
                    CONFERENCE PAPER
                  </span>
                  <h3 className="text-base font-bold text-[#F8F8F8] mt-4.5 leading-snug uppercase tracking-wider font-mono">
                    ICRACS 2025 International Panel Presentation
                  </h3>
                </div>
              </div>

              <div className="text-[10px] text-[#888E9E] font-mono relative z-10 mt-8 pt-4 border-t border-[#2A2635] flex items-center gap-1 uppercase tracking-wider">
                <Sparkles size={12} className="text-[#6E3ED9]" />
                <span>Published in Conference Proceedings</span>
              </div>
            </div>

            {/* Paper Details Column */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-[#888E9E]">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#61A5FF]" />
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} className="text-[#61A5FF]" />
                    <span>No. of Authors: 6</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F8F8F8] leading-tight tracking-tight uppercase">
                  "{paper.title}"
                </h3>

                {/* Publisher quote info */}
                <div className="relative border-l-2 border-[#6E3ED9] pl-4 py-1 italic text-xs text-[#888E9E] font-light flex gap-2">
                  <Quote size={16} className="text-[#6E3ED9] shrink-0 mt-0.5" />
                  <p>
                    {paper.conference}
                  </p>
                </div>

                {/* Abstract or summary */}
                <p className="text-[#888E9E] text-sm leading-relaxed font-light pt-2 select-text">
                  {paper.description}
                </p>
              </div>

              {/* Tag domains */}
              <div className="space-y-2.5 pt-4">
                <h4 className="text-[10px] font-bold text-[#888E9E] uppercase tracking-widest font-mono">
                  Core Research Domains:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {paper.keySkills.map((domain) => (
                    <span 
                      key={domain}
                      className="px-2.5 py-1 bg-[#1A1822] border border-[#2A2635] text-[#F8F8F8] rounded-lg text-xs font-semibold font-mono"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
