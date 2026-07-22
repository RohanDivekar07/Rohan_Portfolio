import { Award, ShieldCheck, Bookmark, Sparkles, Building, BookmarkCheck } from 'lucide-react';
import { achievements, certifications } from '../data';

export default function Certifications() {
  return (
    <section id="achievements" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <Award size={12} className="text-[#61A5FF]" />
            <span>Honors & Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Achievements & Certifications
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            National recognitions, government copyright records, and professional industry-certified courses validation.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        {/* 1. Achievements Grid Section */}
        <div className="mb-16">
          <h3 className="text-xs font-bold text-[#61A5FF] uppercase tracking-widest font-mono mb-8 flex items-center gap-2">
            <Sparkles className="text-[#6E3ED9]" size={14} />
            <span>Pinnacle Accomplishments</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <div 
                key={idx}
                className="bg-[#17141F] rounded-[24px] p-6 border border-[#2A2635] flex flex-col justify-between hover:scale-[1.02] hover:border-[#6E3ED9]/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF]">
                    {ach.category === 'copyright' ? (
                      <ShieldCheck size={18} className="text-[#7CB4FF]" />
                    ) : (
                      <Award size={18} className="text-[#61A5FF]" />
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-[#F8F8F8] transition-colors uppercase tracking-wider">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[#888E9E] leading-relaxed font-light select-text">
                      {ach.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#2A2635] text-[9px] text-[#61A5FF] font-mono uppercase tracking-wider">
                  {ach.category === 'copyright' ? '✓ Registered Copy' : ach.category === 'hackathon' ? '✓ National Participant' : '✓ Research Presentation'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Industry Certifications Grid Section */}
        <div>
          <h3 className="text-xs font-bold text-[#61A5FF] uppercase tracking-widest font-mono mb-8 flex items-center gap-2">
            <Bookmark className="text-[#6E3ED9]" size={14} />
            <span>Professional Credentials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-[#17141F] rounded-[24px] p-6 sm:p-8 border border-[#2A2635] flex flex-col justify-between hover:scale-[1.01] hover:border-[#6E3ED9]/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#F8F8F8] tracking-tight leading-snug uppercase">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-bold text-[#61A5FF] flex items-center gap-1 font-mono uppercase tracking-wider">
                        <Building size={12} className="text-[#6E3ED9]" />
                        <span>{cert.provider}</span>
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF] shrink-0">
                      <BookmarkCheck size={18} className="text-[#7CB4FF]" />
                    </div>
                  </div>

                  <p className="text-[#888E9E] text-xs font-light leading-relaxed select-text">
                    {cert.description}
                  </p>

                  {/* Skills tagged inside Certifications */}
                  <div className="pt-2 space-y-2">
                    <h5 className="text-[10px] font-bold text-[#888E9E] uppercase tracking-widest font-mono">
                      Validated Skill Targets:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.keySkills.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 bg-[#1A1822] border border-[#2A2635] text-[#F8F8F8] rounded-lg text-[10px] font-semibold font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
