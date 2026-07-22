import { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, FileText, CheckCircle2, BookmarkCheck, ShieldCheck, User } from 'lucide-react';
import { personalInfo, education, experience, projects, certifications, researchPapers } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [includePersonalDetails, setIncludePersonalDetails] = useState(true);
  const [includeAchievements, setIncludeAchievements] = useState(true);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/45 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 no-print animate-fade-in">
      <div className="relative bg-slate-100 w-full max-w-5xl rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-h-[95vh] flex flex-col">
        
        {/* Header Controls */}
        <div className="bg-white px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest font-mono leading-tight">
                Interactive Resume Sheet
              </h3>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">
                A4 Printable Layout • Customize Options Below
              </p>
            </div>
          </div>

          {/* Interactive Customize Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 text-xs text-slate-650 cursor-pointer font-mono uppercase tracking-wider">
              <input 
                type="checkbox"
                checked={includePersonalDetails}
                onChange={(e) => setIncludePersonalDetails(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 bg-white"
              />
              <span>Include Bio Details</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-655 cursor-pointer font-mono uppercase tracking-wider">
              <input 
                type="checkbox"
                checked={includeAchievements}
                onChange={(e) => setIncludeAchievements(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 bg-white"
              />
              <span>Include Certifications</span>
            </label>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all font-mono tracking-widest uppercase cursor-pointer shadow-sm shadow-indigo-500/10"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                title="Close Sheet"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Resume Canvas Container */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-200/50 flex-1 flex justify-center rounded-b-2xl">
          
          {/* Printable Document Sheet */}
          <div id="printable-resume-area" className="bg-white text-slate-850 w-full max-w-[210mm] min-h-[297mm] shadow-md rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-8 select-text font-sans text-xs">
            
            {/* 1. Header Banner */}
            <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <h1 className="text-2xl font-bold text-slate-900 tracking-wider uppercase">
                  {personalInfo.fullName}
                </h1>
                <p className="text-xs font-bold text-indigo-600 uppercase font-mono tracking-widest">
                  {personalInfo.role}
                </p>
                <p className="text-slate-500 font-light max-w-xl text-[11px] leading-relaxed">
                  {personalInfo.aboutMe}
                </p>
              </div>

              {/* Right Side Info Contacts */}
              <div className="space-y-1.5 text-slate-500 font-mono text-[10px] shrink-0">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-slate-500 shrink-0" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-slate-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-slate-500 shrink-0" />
                  <span className="truncate max-w-[200px]">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={12} className="text-slate-500 shrink-0" />
                  <span>rohandivekar57</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={12} className="text-slate-500 shrink-0" />
                  <span>RohanDivekar07</span>
                </div>
              </div>
            </div>

            {/* 2. Core Body Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (8 cols) - Main Content */}
              <div className="md:col-span-8 space-y-6">
                
                {/* 2a. Education */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-indigo-600" />
                    <span>Education Timeline</span>
                  </h3>

                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div key={idx} className="space-y-1 pl-1">
                        <div className="flex items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
                          <span>{edu.duration}</span>
                          <span className="font-bold text-white bg-gradient-to-r from-indigo-600 to-teal-500 px-2 py-0.5 rounded-full text-[9px]">{edu.grade}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">{edu.degree}</h4>
                        <p className="text-xs text-slate-550 font-light">{edu.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2b. Experience */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                    <Briefcase size={14} className="text-indigo-600" />
                    <span>Internship Experience</span>
                  </h3>

                  {experience.map((exp, idx) => (
                    <div key={idx} className="space-y-2 pl-1">
                      <div className="flex items-center justify-between gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        <span>{exp.company} • {exp.location}</span>
                        <span>{exp.duration}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">{exp.role}</h4>
                      <p className="text-xs text-slate-650 font-light leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {exp.keySkills.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-[9px] font-semibold font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2c. Projects */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                    <FileText size={14} className="text-indigo-600" />
                    <span>Academic & Software Projects</span>
                  </h3>

                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="space-y-1.5 pl-1">
                        <div className="flex items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
                          <span>Mentor: {project.mentor} • Team Size: {project.teamSize}</span>
                          <span>{project.duration}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 flex items-center justify-between uppercase tracking-wider">
                          <span>{project.title}</span>
                          {project.projectLink && (
                            <span className="text-[9px] font-mono text-slate-500 font-semibold lowercase">github.com/...</span>
                          )}
                        </h4>
                        <p className="text-xs text-slate-550 font-light leading-relaxed">
                          {project.description}
                        </p>
                        <ul className="space-y-1 pl-3 list-disc text-[10px] text-slate-600 font-light">
                          {project.details.slice(0, 3).map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (4 cols) - Metadata / Skills */}
              <div className="md:col-span-4 space-y-6 border-l border-slate-150 pl-4 md:pl-6">
                
                {/* 2d. Core Expertise */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                    <Award size={14} className="text-indigo-600" />
                    <span>Technical Skills</span>
                  </h3>

                  <div className="space-y-3.5 pl-1">
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-widest">Primary Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {['Core Python', 'Core Java', 'SQL', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms (Basic)', 'Problem Solving'].map((sk) => (
                          <span key={sk} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-[9px] font-bold border border-indigo-100/50 font-mono">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-widest">Secondary & Tools</h4>
                      <div className="flex flex-wrap gap-1">
                        {['FastAPI', 'REST API', 'MySQL', 'PostgreSQL (Supabase)', 'Git', 'GitHub', 'Postman', 'XAMPP', 'HTML5/CSS3', 'PHP'].map((sk) => (
                          <span key={sk} className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded-full text-[9px] font-semibold border border-slate-200 font-mono">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2e. Research Publication */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                    <BookmarkCheck size={14} className="text-indigo-600" />
                    <span>Research Paper</span>
                  </h3>

                  {researchPapers.map((paper, idx) => (
                    <div key={idx} className="space-y-1 pl-1">
                      <span className="text-[9px] font-mono text-slate-400">{paper.date}</span>
                      <h4 className="text-[11px] font-bold text-slate-800 leading-tight uppercase tracking-wider">
                        {paper.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono leading-tight uppercase tracking-wider">
                        ICRACS-2025 Conference
                      </p>
                    </div>
                  ))}
                </div>

                {/* Patents & Copyrights */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-indigo-600" />
                    <span>Patents & Copyrights</span>
                  </h3>

                  <div className="space-y-2 pl-1">
                    <div className="space-y-0.5">
                      <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                        Software Copyright & Patent (Smart Drone AI)
                      </h4>
                      <p className="text-[9px] text-slate-500 font-mono">
                        Copyright Office, Gov of India • Active Registration
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                        Software Copyright (Virtual Trial Room)
                      </h4>
                      <p className="text-[9px] text-slate-500 font-mono">
                        Copyright Office, Gov of India • Active Registration
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2f. Interactive / Personal Details */}
                {includePersonalDetails && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-indigo-600" />
                      <span>Bio Metadata</span>
                    </h3>

                    <div className="space-y-1.5 pl-1 text-[10px] font-mono text-slate-500">
                      <div><strong className="text-slate-700">Languages:</strong> English, Hindi, Marathi</div>
                      <div><strong className="text-slate-700">Birth Date:</strong> 16 Oct, 2005</div>
                      <div><strong className="text-slate-700">Marital Status:</strong> Single</div>
                      <div className="leading-snug">
                        <strong className="text-slate-700">Address:</strong> Flat 07, Monal Park, Hadapsar, Pune-411028
                      </div>
                    </div>
                  </div>
                )}

                {/* 2g. Certifications validation */}
                {includeAchievements && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1 font-mono flex items-center gap-1.5">
                      <Award size={14} className="text-indigo-600" />
                      <span>Certifications</span>
                    </h3>

                    <ul className="space-y-2 pl-1 text-[10px] text-slate-650 font-light">
                      {certifications.slice(0, 3).map((cert, cIdx) => (
                        <li key={cIdx} className="leading-tight">
                          <strong className="text-slate-700">{cert.title}</strong>
                          <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">{cert.provider}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

            </div>

            {/* A4 Footer note */}
            <div className="border-t border-slate-200 pt-4 text-center text-[10px] text-slate-400 font-mono flex justify-between items-center uppercase tracking-wider">
              <span>Rohan Vijay Divekar • Resume</span>
              <span>MIT ADT University • IT Student</span>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded printable only style clone (hidden on screens, takes over during print) */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume-area, #printable-resume-area * {
            visibility: visible;
          }
          #printable-resume-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            height: 297mm;
            padding: 1.5cm;
            box-shadow: none;
            border: none;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
