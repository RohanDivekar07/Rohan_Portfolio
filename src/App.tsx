import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // High-performance custom mouse tracking coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-bg-premium text-text-primary selection:bg-purple-premium/35 selection:text-text-primary antialiased relative">
      
      {/* Premium cursor radial glow tracker */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 bg-[radial-gradient(600px_circle_at_var(--mouse-x,_0px)_var(--mouse-y,_0px),_rgba(110,_62,_217,_0.045),_transparent_80%)] hidden md:block" />

      {/* Top sticky Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main layout contents */}
      <main className="no-print">
        {/* Hero Banner Section with Radial Gradients */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 1. About Narrative */}
        <About />

        {/* 2. Timeline-based Internships Experience */}
        <Experience />

        {/* 3. Filterable Portfolio Academic Projects */}
        <Projects />

        {/* 4. Technical Skills & Capabilities Interactive Grid */}
        <Skills />

        {/* 5. Achievements, Copyrights & Honors */}
        <Certifications />

        {/* Research Papers & Publications */}
        <Publications />

        {/* 6. Education Timeline Section */}
        <Education />

        {/* Contact Form Mailroom & Details */}
        <Contact />
      </main>

      {/* Footer Branding & Copyright warning */}
      <Footer />

      {/* Interactive Printable Resume Sheet Overlay */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

    </div>
  );
}

