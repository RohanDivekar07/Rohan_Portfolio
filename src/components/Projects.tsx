import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { Code2, Github, ExternalLink, Calendar, Users, Award, X, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'backend' | 'core-programming' | 'fullstack' | 'ai-cv'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterItems = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend APIs' },
    { id: 'core-programming', label: 'Java/OOP' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai-cv', label: 'Computer Vision / AI' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'backend':
        return 'bg-[#1A1822] text-[#61A5FF] border-[#2A2635]';
      case 'core-programming':
        return 'bg-[#1A1822] text-[#7CB4FF] border-[#2A2635]';
      case 'fullstack':
        return 'bg-[#1A1822] text-[#8E78FF] border-[#2A2635]';
      case 'ai-cv':
        return 'bg-[#1A1822] text-[#B56EFF] border-[#2A2635]';
      default:
        return 'bg-[#1A1822] text-[#888E9E] border-[#2A2635]';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'backend': return 'Backend REST API';
      case 'core-programming': return 'Core Java / OOP';
      case 'fullstack': return 'Full Stack Web';
      case 'ai-cv': return 'Computer Vision / GUI';
      default: return 'Software Project';
    }
  };

  return (
    <section id="projects" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <Code2 size={12} className="text-[#61A5FF]" />
            <span>Practical Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Academic & Software Projects
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            Hands-on software systems engineered to solve real-world problems, specializing in AI automation, backend Rest APIs, and local memory engines.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filterItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer border ${
                filter === item.id
                  ? 'bg-[#FFFFFF] text-[#111111] border-transparent font-extrabold shadow-md'
                  : 'bg-[#1A1822] border-[#2A2635] text-[#888E9E] hover:text-[#F8F8F8]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#17141F] rounded-[24px] border border-[#2A2635] flex flex-col justify-between overflow-hidden group hover:scale-[1.01] hover:border-[#6E3ED9]/50 transition-all duration-300 relative"
            >
              <div className="p-6 sm:p-8 space-y-5">
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className={`px-3 py-1 text-[9px] font-mono font-bold uppercase rounded-full border ${getCategoryTheme(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-[#888E9E] font-mono text-[10px]">
                    <Calendar size={12} className="text-[#61A5FF]" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#F8F8F8] tracking-tight flex items-center justify-between uppercase">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#61A5FF]" />
                  </h3>
                  <p className="text-[#888E9E] text-sm font-light leading-relaxed select-text">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-[#1A1822] border border-[#2A2635] text-[#F8F8F8] rounded-lg text-[10px] font-semibold font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-[#1A1822] border border-[#2A2635] text-[#8E78FF] rounded-lg text-[10px] font-semibold font-mono">
                      +{project.technologies.length - 4} More
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4.5 bg-[#141218] border-t border-[#2A2635] flex items-center justify-between gap-4 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-[10px] font-bold text-[#61A5FF] hover:text-[#7CB4FF] flex items-center gap-1 cursor-pointer font-mono tracking-wider uppercase"
                >
                  <span>TECHNICAL SPECS & DETAILS</span>
                </button>

                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[10px] text-[#888E9E] hover:text-[#F8F8F8] font-mono font-bold tracking-wider uppercase group"
                  >
                    <Github size={14} className="text-[#6E3ED9] group-hover:scale-110 transition-transform" />
                    <span>CODEBASE</span>
                    <ExternalLink size={10} className="opacity-60" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Dialog */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative bg-[#17141F] w-full max-w-2xl rounded-[24px] border border-[#2A2635] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in">
              
              {/* Modal Header */}
              <div className="bg-[#141218] px-6 py-4 border-b border-[#2A2635] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-[9px] font-mono font-bold rounded-full border ${getCategoryTheme(selectedProject.category)}`}>
                    {getCategoryLabel(selectedProject.category)}
                  </span>
                  <span className="text-[#888E9E] font-mono text-[9px] uppercase tracking-widest hidden sm:inline">
                    Project File Deep-Dive
                  </span>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full text-[#888E9E] hover:text-[#F8F8F8] hover:bg-[#1A1822] transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#F8F8F8] tracking-tight uppercase">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#888E9E] leading-relaxed font-light select-text">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Academic Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 bg-[#141218] p-4.5 border border-[#2A2635] rounded-xl">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#888E9E] uppercase font-bold tracking-wider">Academic Mentor</span>
                    <p className="text-xs font-bold text-[#F8F8F8] flex items-center gap-1 font-mono">
                      <Users size={12} className="text-[#61A5FF]" />
                      <span>{selectedProject.mentor}</span>
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#888E9E] uppercase font-bold tracking-wider">Project Team Size</span>
                    <p className="text-xs font-bold text-[#F8F8F8] font-mono">
                      {selectedProject.teamSize} Developer(s)
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#888E9E] uppercase font-bold tracking-wider">Timeline Duration</span>
                    <p className="text-xs font-bold text-[#F8F8F8] font-mono">
                      {selectedProject.duration}
                    </p>
                  </div>
                </div>

                {/* Key Architectural Highlights */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-[#61A5FF] uppercase tracking-widest font-mono flex items-center gap-1.5">
                    <Award size={14} className="text-[#6E3ED9]" />
                    <span>Technical Architecture & Accomplishments</span>
                  </h4>
                  <ul className="space-y-2.5 pl-1">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-[#888E9E] leading-relaxed font-light items-start select-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6E3ED9] to-[#61A5FF] mt-2 shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extended Technology Stack tags */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-[10px] font-bold text-[#888E9E] uppercase tracking-widest font-mono">
                    All Technologies & Environment Tools:
                    </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
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

              {/* Modal Footer */}
              <div className="bg-[#141218] px-6 py-4 border-t border-[#2A2635] flex sm:items-center justify-between gap-4 flex-col sm:flex-row shrink-0 rounded-none">
                {selectedProject.projectLink ? (
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FFFFFF] hover:scale-103 text-[#111111] font-bold px-5 py-2.5 rounded-full text-xs transition-all font-mono tracking-widest uppercase cursor-pointer"
                  >
                    <Github size={14} />
                    <span>OPEN GITHUB CODEBASE</span>
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className="text-[10px] text-[#888E9E] font-mono italic tracking-wider">
                    Local Environment Codebase
                  </span>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-[#1A1822] border border-[#2A2635] hover:bg-[#141218] text-[#F8F8F8] text-xs font-bold rounded-full transition-all font-mono tracking-widest uppercase cursor-pointer"
                >
                  CLOSE PREVIEW
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
