import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // Height of sticky navbar + offset
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-premium/80 border-b border-border-premium/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Left Side: Logo Brand */}
        <div 
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-surface-premium text-white flex items-center justify-center font-extrabold text-xs sm:text-sm rounded-xl border border-border-premium transition-transform group-hover:scale-105 duration-300">
            RD
          </div>
          <div className="hidden xs:block">
            <h1 className="text-sm sm:text-base font-extrabold text-[#F8F8F8] tracking-tight leading-tight uppercase font-sans">
              Rohan Divekar
            </h1>
            <p className="text-[8px] sm:text-[9px] text-[#8E78FF] font-mono tracking-widest font-semibold uppercase">
              AI Engineer Portfolio
            </p>
          </div>
        </div>

        {/* Right Side: Horizontal Nav Items (Left to Right) */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
          <nav className="flex items-center gap-0.5 sm:gap-1 bg-surface-premium/60 p-1 rounded-full border border-border-premium overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth max-w-[calc(100vw-120px)] sm:max-w-none">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 sm:px-4 py-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all rounded-full shrink-0 ${
                  activeSection === item.id
                    ? 'bg-purple-premium text-[#F8F8F8] font-extrabold'
                    : 'text-[#C9CBD3] hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Interactive Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 bg-[#FFFFFF] hover:scale-103 text-[#111111] px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all group cursor-pointer shrink-0"
            title="Interactive Resume"
          >
            <FileText size={12} className="group-hover:translate-y-[-0.5px] transition-transform" />
            <span className="hidden md:inline">Resume</span>
          </button>
        </div>

      </div>
    </header>
  );
}
