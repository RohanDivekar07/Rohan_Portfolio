import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-bg-premium text-[#888E9E] py-16 border-t border-border-premium no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2A2635]">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF] font-bold">
              <Code2 size={16} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8F8F8] tracking-widest uppercase font-mono">
                Rohan Divekar
              </h4>
              <p className="text-[9px] text-[#888E9E] font-mono tracking-widest font-bold uppercase">
                ASPIRING SOFTWARE DEVELOPER
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className="p-2.5 bg-[#1A1822] hover:bg-[#141218] hover:text-[#61A5FF] border border-[#2A2635] text-[#888E9E] rounded-xl transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className="p-2.5 bg-[#1A1822] hover:bg-[#141218] hover:text-[#61A5FF] border border-[#2A2635] text-[#888E9E] rounded-xl transition-all"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 bg-[#1A1822] hover:bg-[#141218] hover:text-[#61A5FF] border border-[#2A2635] text-[#888E9E] rounded-xl transition-all"
              title="Send Mail"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Technical copyright warning */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono leading-relaxed uppercase tracking-wider">
          <div className="text-center md:text-left space-y-1">
            <p className="text-[#888E9E]">
              © {new Date().getFullYear()} Rohan Vijay Divekar. All rights reserved.
            </p>
            <p className="text-[#888E9E]/60 text-[10px]">
              🔒 Protected under 2 official Software Copyright & Patent Registrations (Copyright Office, Gov of India).
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-[#1A1822] hover:bg-[#141218] text-[#888E9E] text-[10px] font-bold hover:text-[#F8F8F8] transition-all cursor-pointer font-mono tracking-widest uppercase border border-[#2A2635]"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
