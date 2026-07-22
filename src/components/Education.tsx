import { GraduationCap } from 'lucide-react';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <GraduationCap size={12} className="text-[#61A5FF]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Education Timeline
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            My academic journey, institutional credentials, and scholastic performance validation.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-[17px] sm:before:left-[24px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#2A2635]">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 items-start relative pl-1 sm:pl-2 group">
              {/* Timeline Marker */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#1A1822] border border-[#2A2635] text-[#61A5FF] flex items-center justify-center relative z-10 shrink-0 font-mono font-bold text-xs sm:text-sm shadow-md">
                0{idx + 1}
              </div>
              
              {/* Card content */}
              <div className="flex-1 bg-[#17141F] border border-[#2A2635] p-6 sm:p-8 rounded-[24px] hover:scale-[1.01] hover:border-[#6E3ED9]/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#61A5FF]">
                      {edu.duration}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#F8F8F8] uppercase tracking-wider">
                      {edu.degree}
                    </h3>
                  </div>
                  
                  <div className="self-start sm:self-center px-4.5 py-1.5 bg-[#1A1822] border border-[#2A2635] text-[#7CB4FF] text-[10px] sm:text-xs font-mono font-bold rounded-full">
                    {edu.grade}
                  </div>
                </div>

                <p className="text-[#F8F8F8] text-sm font-semibold mb-2">
                  {edu.institution}
                </p>

                {edu.details && (
                  <p className="text-[#888E9E] text-xs font-light leading-relaxed select-text">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
