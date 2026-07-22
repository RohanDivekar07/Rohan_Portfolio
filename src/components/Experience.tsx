import { Briefcase, Calendar, MapPin, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import { experience } from '../data';

export default function Experience() {
  const highlights = [
    "Collaborated on designing responsive multi-page layouts using HTML, CSS, and modern JavaScript.",
    "Gained hands-on exposure to database integrations, CRUD actions, and server environments with Python Django.",
    "Refactored code snippets, resolved template styling bugs, and practiced clean version control with Git & GitHub.",
    "Participated in agile discussions, received direct code reviews, and learned core software testing workflows."
  ];

  return (
    <section id="experience" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <Briefcase size={12} className="text-[#61A5FF]" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Internship Experience
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            Real-world industry exposure demonstrating team collaboration, code-review adoption, and active skill application.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Timeline Node Column */}
          <div className="lg:col-span-7 space-y-6">
            {experience.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-[#17141F] rounded-[24px] p-6 sm:p-8 border border-[#2A2635] relative overflow-hidden group hover:scale-[1.01] hover:border-[#6E3ED9]/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#1A1822] border border-[#2A2635] text-white flex items-center justify-center shadow-md">
                        <Briefcase size={20} className="text-[#61A5FF]" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-[#F8F8F8] transition-colors uppercase tracking-wider">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-[#61A5FF] font-mono">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <span className="self-start sm:self-center px-3.5 py-1 bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#888E9E] font-mono">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#6E3ED9]" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#7CB4FF]" />
                      <span>June 2023 - July 2023</span>
                    </div>
                  </div>

                  {/* Description Box */}
                  <p className="text-[#888E9E] text-sm leading-relaxed pt-2 font-light select-text">
                    {exp.description}
                  </p>

                  {/* Key Technologies used */}
                  <div className="pt-4 space-y-2.5">
                    <h4 className="text-[10px] font-bold text-[#888E9E] uppercase tracking-widest font-mono">
                      Core Stack Used:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.keySkills.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#1A1822] border border-[#2A2635] text-[#F8F8F8] rounded-lg text-xs font-semibold font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Professional Traits/Values Panel */}
          <div className="lg:col-span-5 flex h-full">
            <div className="bg-[#17141F] border border-[#2A2635] rounded-[24px] p-6 sm:p-8 shadow-sm relative overflow-hidden group flex-1 flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 text-[#6E3ED9]/5 opacity-40 pointer-events-none">
                <Sparkles size={160} />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF]">
                    <Star size={18} className="fill-[#61A5FF] stroke-none" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#F8F8F8] leading-tight font-mono">
                      Internship Contributions
                    </h3>
                    <p className="text-[10px] text-[#6E3ED9] font-mono tracking-wider">
                      Elite Softwares Web Development
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start group/item">
                      <div className="p-0.5 mt-0.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#61A5FF] shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-xs text-[#888E9E] leading-relaxed font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2A2635] text-[10px] text-[#888E9E] font-mono tracking-wider relative z-10">
                👨‍💻 Internship established a robust foundation for building cloud-connected REST APIs and MVC patterns.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
