import { useState } from 'react';
import { skills } from '../data';
import { Award, Code, Database, Globe, Wrench, BrainCircuit, Sparkles, Star } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'secondary'>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getSkillCategoryIcon = (category: string) => {
    switch (category) {
      case 'programming':
        return <Code size={16} className="text-[#61A5FF]" />;
      case 'backend':
        return <Globe size={16} className="text-[#6E3ED9]" />;
      case 'frontend':
        return <Globe size={16} className="text-[#7CB4FF]" />;
      case 'databases':
        return <Database size={16} className="text-[#61A5FF]" />;
      case 'tools':
        return <Wrench size={16} className="text-[#8E78FF]" />;
      case 'concepts':
        return <BrainCircuit size={16} className="text-[#B56EFF]" />;
      default:
        return <Code size={16} className="text-[#61A5FF]" />;
    }
  };

  const getSkillCategoryLabel = (category: string) => {
    switch (category) {
      case 'programming': return 'Programming Languages';
      case 'backend': return 'Backend Development';
      case 'frontend': return 'Frontend Development';
      case 'databases': return 'Databases & Management';
      case 'tools': return 'Tools & Environments';
      case 'concepts': return 'Core SDE Concepts';
      default: return 'Other';
    }
  };

  const getSkillUsageDetails = (skillName: string): string => {
    switch (skillName) {
      case 'Core Python':
        return "Applied extensively in building real-time pipelines, OpenCV trial rooms, and backend logic across academic courses and projects.";
      case 'Core Java':
        return "Used to develop the console-based 'Student Study Tracker' using robust Object-Oriented patterns, Collections Framework, and LocalDate API.";
      case 'SQL':
        return "Applied to write relational queries, design database schemas, and integrate tables for various database assignments and backend projects.";
      case 'Object-Oriented Programming (OOP)':
        return "Constructed deep class architectures, interface abstractions, inheritance, and encapsulation states in Python and Java environments.";
      case 'Data Structures & Algorithms (Basic)':
        return "Possesses strong foundational knowledge of core structures (Arrays, Lists, Maps, Queues) and basic sorting/searching algorithms.";
      case 'Problem Solving':
        return "Maintains an active logical thinking mindset; regularly practices clean refactoring, debugging, and mock technical assessments.";
      case 'FastAPI':
        return "Integrated for high-performance REST APIs in 'Medical Store System' with asynchronous handlers, JWT auth, and Supabase client routers.";
      case 'REST API Development':
        return "Constructed standard CRUD endpoints, HTTP status validations, query structures, and authentication guards for backend systems.";
      case 'MySQL':
        return "Created relational databases, structured indexing, foreign keys, and PHP-integrated catalog schemas for 'Organic Vegetables Portal'.";
      case 'PostgreSQL (Supabase)':
        return "Utilized for remote cloud storage, serverless relational schema definitions, and secure auth systems in the 'Medical Store System'.";
      case 'HTML5':
      case 'CSS3':
      case 'JavaScript':
        return "Leveraged together to create smooth, responsive, user-friendly, and interactive client UI mockups and web portals.";
      case 'Django':
        return "Used during internship at Elite Softwares to integrate Python backend structures with database schemas and HTML views.";
      case 'PHP':
        return "Implemented to write dynamic full-stack page routes and catalog endpoints for the local 'Organic Vegetables Portal'.";
      case 'Git':
      case 'GitHub':
        return "Employed for persistent version tracking, commits history management, collaborative workflows, and code hosting across all core projects.";
      case 'Postman':
        return "Used extensively for testing, validating response structures, modeling authentication headers, and inspecting FastAPI backend routes.";
      case 'OpenCV':
        return "Applied within Python algorithms to capture live frames, resize templates, and align coordinate frames in the 'Virtual Trial Room' system.";
      default:
        return "Strengthened through academic curriculums, practical lab assignments, and continuous self-guided hands-on development.";
    }
  };

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const filteredSkills = skills.filter(skill => {
    if (activeTab === 'primary') return skill.isPrimary;
    if (activeTab === 'secondary') return !skill.isPrimary;
    return true;
  });

  return (
    <section id="skills" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <Award size={12} className="text-[#61A5FF]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Skillsets & Expertise
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            A comprehensive breakdown of primary programming pillars, backend structures, and tooling foundations Rohan has mastered.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        {/* Tab Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#141218] p-1.5 rounded-full border border-[#2A2635] shadow-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#FFFFFF] text-[#111111] font-extrabold shadow-md'
                  : 'text-[#888E9E] hover:text-[#F8F8F8]'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('primary')}
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'primary'
                  ? 'bg-[#FFFFFF] text-[#111111] font-extrabold shadow-md'
                  : 'text-[#888E9E] hover:text-[#F8F8F8]'
              }`}
            >
              <Star size={10} className={activeTab === 'primary' ? 'fill-[#111111] text-[#111111]' : 'text-[#61A5FF]'} />
              <span>Primary Core</span>
            </button>
            <button
              onClick={() => setActiveTab('secondary')}
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'secondary'
                  ? 'bg-[#FFFFFF] text-[#111111] font-extrabold shadow-md'
                  : 'text-[#888E9E] hover:text-[#F8F8F8]'
              }`}
            >
              Secondary & Tools
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Skills Matrix */}
          <div className={`${selectedSkill ? 'lg:col-span-8' : 'lg:col-span-12'} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-300`}>
            {categories.map((category) => {
              const categorySkills = filteredSkills.filter(s => s.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div 
                  key={category} 
                  className="bg-[#17141F] rounded-[24px] p-6 border border-[#2A2635] hover:border-[#6E3ED9]/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#2A2635]">
                    <div className="p-2.5 bg-[#141218] rounded-xl border border-[#2A2635]">
                      {getSkillCategoryIcon(category)}
                    </div>
                    <h3 className="text-xs font-bold text-[#F8F8F8] uppercase tracking-widest font-mono">
                      {getSkillCategoryLabel(category)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-250 flex items-center gap-1.5 cursor-pointer text-left border ${
                          selectedSkill === skill.name
                            ? 'bg-[#FFFFFF] text-[#111111] border-transparent font-extrabold shadow-md'
                            : skill.isPrimary
                            ? 'bg-[#1A1822] border-[#2A2635] text-[#F8F8F8] hover:border-[#61A5FF]/50 font-semibold'
                            : 'bg-[#1A1822]/40 border-[#2A2635]/60 text-[#888E9E] hover:border-[#2A2635]'
                        }`}
                      >
                        {skill.isPrimary && (
                          <Star 
                            size={10} 
                            className={selectedSkill === skill.name ? 'fill-[#111111] text-[#111111]' : 'fill-[#6E3ED9] text-[#6E3ED9]'} 
                          />
                        )}
                        <span>{skill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Deep Dive Detail Sidebar */}
          {selectedSkill && (
            <div className="lg:col-span-4 bg-[#17141F] border border-[#2A2635] rounded-[24px] p-6 shadow-2xl relative overflow-hidden animate-fade-in">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 pointer-events-none text-[#6E3ED9]">
                <Sparkles size={160} />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1822] border border-[#2A2635] rounded-full text-[9px] font-mono font-bold tracking-widest text-[#888E9E] uppercase">
                    Interactive Detail
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-[#888E9E] hover:text-[#F8F8F8] text-[10px] font-bold font-mono px-3 py-1.5 bg-[#1A1822] border border-[#2A2635] rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-[#F8F8F8] tracking-tight flex items-center gap-2 uppercase">
                    {selectedSkill}
                    {skills.find(s => s.name === selectedSkill)?.isPrimary && (
                      <Star size={14} className="fill-[#61A5FF] text-[#61A5FF] stroke-none" />
                    )}
                  </h4>
                  <p className="text-[10px] text-[#888E9E] font-mono tracking-wider uppercase">
                    Category: {getSkillCategoryLabel(skills.find(s => s.name === selectedSkill)?.category || '')}
                  </p>
                </div>

                <div className="bg-[#141218] rounded-xl p-4.5 border border-[#2A2635] shadow-inner space-y-3">
                  <p className="text-xs text-[#888E9E] leading-relaxed font-light">
                    {getSkillUsageDetails(selectedSkill)}
                  </p>
                </div>

                <div className="text-[9px] text-[#888E9E]/60 font-mono tracking-wider">
                  💡 Hint: Select other skills in the dashboard to see their corresponding implementation context.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
