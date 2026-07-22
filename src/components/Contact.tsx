import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, MessageSquare, Send, User } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 1200);
  };

  const detailRows = [
    { label: "Gender", value: "Male" },
    { label: "Marital Status", value: "Single" },
    { label: "Birth Date", value: "16 October, 2005" },
    { label: "Languages", value: "English, Hindi, Marathi" },
    { label: "Current Address", value: "Hadapsar, Pune, India - 411028" },
    { label: "Permanent Address", value: "Warvand, Tal-Daund, Dist: Pune - 412215" }
  ];

  return (
    <section id="contact" className="py-24 bg-bg-premium border-b border-border-premium overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1822] border border-[#2A2635] text-[#888E9E] text-[10px] font-mono font-bold tracking-widest uppercase mb-4">
            <MessageSquare size={12} className="text-[#61A5FF]" />
            <span>Inquiries & Relations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F8] tracking-tight uppercase">
            Contact & Personal Details
          </h2>
          <p className="text-[#888E9E] text-sm mt-2 max-w-lg mx-auto leading-relaxed font-light">
            Get in touch to discuss internships, junior software engineer roles, or academic collaborations Rohan can add value to.
          </p>
          <div className="w-12 h-[2px] bg-[#6E3ED9] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info blocks & Personal Metadata */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick cards */}
            <div className="space-y-4">
              
              {/* Email block */}
              <div className="bg-[#17141F] p-4.5 rounded-[24px] border border-[#2A2635] flex items-center justify-between gap-4 group hover:border-[#6E3ED9]/50 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Email Address</span>
                    <p className="text-sm font-semibold text-[#F8F8F8] truncate select-all">{personalInfo.email}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2.5 text-[#888E9E] hover:text-[#F8F8F8] hover:bg-[#1A1822] rounded-xl border border-[#2A2635] transition-colors shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check size={16} className="text-[#61A5FF] font-bold" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone block */}
              <div className="bg-[#17141F] p-4.5 rounded-[24px] border border-[#2A2635] flex items-center justify-between gap-4 group hover:border-[#6E3ED9]/50 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Contact Number</span>
                    <p className="text-sm font-semibold text-[#F8F8F8] select-all">{personalInfo.phone}</p>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2.5 text-[#888E9E] hover:text-[#F8F8F8] hover:bg-[#1A1822] rounded-xl border border-[#2A2635] transition-colors shrink-0 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={16} className="text-[#61A5FF] font-bold" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location block */}
              <div className="bg-[#17141F] p-4.5 rounded-[24px] border border-[#2A2635] flex items-center justify-between gap-4 group hover:border-[#6E3ED9]/50 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1822] border border-[#2A2635] flex items-center justify-center text-[#61A5FF] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Geographic Base</span>
                    <p className="text-sm font-semibold text-[#F8F8F8]">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Anchors panel */}
            <div className="flex gap-3">
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#FFFFFF] hover:scale-102 text-[#111111] font-bold py-3.5 px-4 rounded-xl text-xs transition-all uppercase tracking-widest font-mono"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={personalInfo.github}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#1A1822] hover:bg-[#141218] text-[#F8F8F8] border border-[#2A2635] font-bold py-3.5 px-4 rounded-xl text-xs transition-all uppercase tracking-widest font-mono"
              >
                <Github size={16} className="text-[#6E3ED9]" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Personal parameters details list */}
            <div className="bg-[#17141F] rounded-[24px] p-6 border border-[#2A2635] space-y-4">
              <h4 className="text-[10px] font-bold text-[#61A5FF] uppercase tracking-widest font-mono flex items-center gap-1.5">
                <User size={14} className="text-[#6E3ED9]" />
                <span>Official Bio Details</span>
              </h4>
              <div className="space-y-3 pt-1 text-xs">
                {detailRows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 pb-2.5 border-b border-[#2A2635] last:border-0 last:pb-0">
                    <span className="text-[#888E9E] font-medium font-mono uppercase shrink-0 tracking-wider text-[10px]">{row.label}</span>
                    <span className="font-bold text-[#F8F8F8] text-right select-text">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Elegant form simulator */}
          <div className="lg:col-span-7">
            <div className="bg-[#17141F] rounded-[24px] p-6 sm:p-10 border border-[#2A2635] space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#F8F8F8] tracking-tight flex items-center gap-2 uppercase">
                  <Send className="text-[#61A5FF]" size={16} />
                  <span>Interactive Mailroom Box</span>
                </h3>
                <p className="text-xs text-[#888E9E] font-light leading-relaxed">
                  Submit a message directly. The interactive mock router is fully validated client-side.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-[#141218] border border-[#2A2635] rounded-[24px] p-6 sm:p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-xl bg-[#1A1822] border border-[#2A2635] text-white flex items-center justify-center mx-auto shadow-md">
                    <Check size={28} className="stroke-[2.5] text-[#61A5FF]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#F8F8F8] uppercase tracking-wide">
                      Message Dispatched!
                    </h4>
                    <p className="text-xs text-[#888E9E] font-light max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Rohan. The simulated mock router completed the packet handshake correctly.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-5 py-3 bg-[#FFFFFF] text-[#111111] font-bold text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer font-mono"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Rohan Divekar"
                        className="w-full bg-[#141218] border border-[#2A2635] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#6E3ED9] text-[#F8F8F8] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Your Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="rohan@example.com"
                        className="w-full bg-[#141218] border border-[#2A2635] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#6E3ED9] text-[#F8F8F8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Subject Inquiry</label>
                    <input 
                      type="text"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="Opportunity / Internship Proposal"
                      className="w-full bg-[#141218] border border-[#2A2635] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#6E3ED9] text-[#F8F8F8] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#888E9E] font-mono uppercase tracking-widest">Inquiry Content Message *</label>
                    <textarea 
                      required
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Write your message details here..."
                      className="w-full bg-[#141218] border border-[#2A2635] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#6E3ED9] text-[#F8F8F8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#FFFFFF] hover:scale-102 disabled:opacity-70 text-[#111111] font-bold py-3.5 px-4 rounded-xl text-xs transition-all uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer font-mono"
                  >
                    <span>{formStatus === 'submitting' ? 'DISPATCHING DATA...' : 'SEND INQUIRY'}</span>
                    <Send size={12} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
