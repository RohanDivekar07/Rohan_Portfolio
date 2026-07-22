import { personalInfo } from '../data';
import { Calendar, Languages, MapPin, Heart, Sparkles, User } from 'lucide-react';

export default function About() {
  const infoCards = [
    {
      icon: <MapPin className="text-[#61A5FF]" size={18} />,
      label: "Current Residence",
      value: "Pune, Maharashtra, India"
    },
    {
      icon: <Languages className="text-[#6E3ED9]" size={18} />,
      label: "Known Languages",
      value: personalInfo.languages.join(", ")
    },
    {
      icon: <Calendar className="text-[#7CB4FF]" size={18} />,
      label: "Date of Birth",
      value: personalInfo.birthDate
    },
    {
      icon: <Heart className="text-[#6E3ED9]" size={18} />,
      label: "Hobbies & Interests",
      value: "Music, AI Innovations"
    }
  ];

  return (
    <section id="about" className="py-24 bg-bg-premium border-t border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <User size={12} className="text-[#61A5FF]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            About Rohan Divekar
          </h2>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Detailed Narrative Column */}
          <div className="space-y-8 flex flex-col h-full">
            <div className="relative bg-[#17141F] rounded-[24px] p-6 sm:p-8 border border-[#2A2635] shadow-sm flex-1 flex flex-col justify-center">
              <div className="absolute top-4 right-4 text-[#6E3ED9]/10">
                <Sparkles size={48} />
              </div>
              <h3 className="text-xs font-bold text-[#61A5FF] uppercase tracking-widest mb-4 flex items-center gap-2 font-mono">
                <Sparkles className="text-[#6E3ED9]" size={14} />
                <span>Professional Statement</span>
              </h3>
              <p className="text-[#888E9E] text-sm sm:text-base leading-relaxed font-light italic select-text">
                "{personalInfo.aboutMe}"
              </p>
            </div>
          </div>

          {/* General Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-[#17141F] p-6 rounded-[24px] border border-[#2A2635] flex items-start gap-4 hover:scale-[1.02] hover:border-[#6E3ED9]/50 transition-all duration-300 h-full"
              >
                <div className="p-3 rounded-xl bg-[#1A1822] border border-[#2A2635] mt-0.5 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#888E9E] uppercase tracking-widest font-mono">
                    {card.label}
                  </h4>
                  <p className="text-sm font-semibold text-[#F8F8F8] mt-1 leading-snug">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
