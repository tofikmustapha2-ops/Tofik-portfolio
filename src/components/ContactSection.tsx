import React, { useState } from 'react';
import { ContactFormData, ServiceType } from '../types';
import { 
  Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, 
  AlertCircle, Sparkles 
} from 'lucide-react';

interface ContactSectionProps {
  selectedServiceNeeded: ServiceType;
  onServiceNeededChange: (service: ServiceType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceNeeded,
  onServiceNeededChange: _onServiceNeededChange,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    businessName: '',
    serviceNeeded: selectedServiceNeeded || 'Flyer & Graphic Design',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Clear any legacy cached messages on initial mount to guarantee privacy
  React.useEffect(() => {
    try {
      localStorage.removeItem('alolo_studio_messages');
      localStorage.removeItem('alolo_formspree_id');
    } catch (e) {
      // Ignore
    }
  }, []);

  // Synchronize when parent changes service choice
  React.useEffect(() => {
    if (selectedServiceNeeded) {
      setFormData((prev) => ({ ...prev, serviceNeeded: selectedServiceNeeded }));
    }
  }, [selectedServiceNeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your Name, Email Address, and Project Details.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // 1. Send inquiry directly to Mustapha's Gmail (tofikmustapha2@gmail.com) via FormSubmit
    try {
      await fetch('https://formsubmit.co/ajax/tofikmustapha2@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Client Name': formData.fullName,
          'Client Email': formData.email,
          'Business Name': formData.businessName || 'Not specified',
          'Service Requested': formData.serviceNeeded,
          'Project Requirements / Message': formData.message,
          _subject: `New Portfolio Inquiry: ${formData.fullName} (${formData.serviceNeeded})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (fsErr) {
      console.warn('Direct email forwarding notice:', fsErr);
    }

    // 2. Post to Express backend endpoint for logging
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn('API contact endpoint warning:', err);
    }

    // 3. Mark submission as success
    setStatus('success');
  };

  // Social Links with correct user WhatsApp & Call numbers
  const socialLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/233533580326', label: '0533580326 (Instant Chat)' },
    { name: 'Phone Call', url: 'tel:+233203530939', label: '0203530939 (Direct Call)' },
    { name: 'Instagram', url: 'https://instagram.com/alolostudio.gh', label: '@alolostudio.gh' },
    { name: 'TikTok', url: 'https://tiktok.com/@alolostudio.gh', label: '@alolostudio.gh' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mustapha-abdul-tofik', label: 'Mustapha Abdul-Tofik' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/40 text-xs font-extrabold text-amber-300 uppercase tracking-widest shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" /> Start A Project
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Have a project in mind? Let's build something exceptional.
          </h2>
          <p className="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed">
            Send your project details or service inquiry directly below or connect via WhatsApp at <span className="text-emerald-400 font-extrabold">0533580326</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">
                Contact Information
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Reach out directly for graphic flyer design, video ads, or website development for your business in Tamale or anywhere in Ghana.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Identity & Studio</h4>
                    <p className="text-sm font-bold text-white">MUSTAPHA ABDUL-TOFIK / ALOLO STUDIO</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Location</h4>
                    <p className="text-sm font-bold text-white">Tamale, Northern Region, Ghana 🇬🇭</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">WhatsApp & Phone Lines</h4>
                    <div className="flex flex-col text-xs font-bold gap-0.5 mt-0.5">
                      <a href="https://wa.me/233533580326" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">
                        <span>WhatsApp: 0533580326</span>
                      </a>
                      <a href="tel:+233203530939" className="text-cyan-400 hover:underline flex items-center gap-1">
                        <span>Phone Call: 0203530939</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Email Inbox</h4>
                    <a href="mailto:tofikmustapha2@gmail.com" className="text-sm font-bold text-cyan-400 hover:underline">
                      tofikmustapha2@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Direct Messaging & Channels
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {socialLinks.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{s.name}</span>
                      </span>
                      <span className="text-slate-400 text-[11px] truncate max-w-[180px]">
                        {s.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 relative">
              
              {status === 'success' ? (
                <div className="py-12 px-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-400 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed">
                      Thank you, <span className="text-white font-bold">{formData.fullName}</span>! Your project details have been sent directly to Mustapha's email (<span className="text-cyan-400 font-bold">tofikmustapha2@gmail.com</span>).
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/233533580326?text=${encodeURIComponent(
                        `Hello Mustapha! I just submitted an inquiry on your website.\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Service:* ${formData.serviceNeeded}\n\n*Message:* ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Chat Instantly on WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:tofikmustapha2@gmail.com?subject=${encodeURIComponent(
                        `Project Inquiry from ${formData.fullName} - ${formData.serviceNeeded}`
                      )}&body=${encodeURIComponent(
                        `Hello Mustapha,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nBusiness: ${formData.businessName || 'N/A'}\nService Needed: ${formData.serviceNeeded}\n\nMessage:\n${formData.message}\n\nSent from Alolo Studio Website`
                      )}`}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-xs flex items-center justify-center gap-2 border border-cyan-500/30 transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          businessName: '',
                          serviceNeeded: 'Flyer & Graphic Design',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {status === 'error' && (
                    <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Submission Notice:</span> {errorMessage}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ibrahim Mahama"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                        id="contact-input-fullname"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ibrahim@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                        id="contact-input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Business/Company Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Tamale Tech Ventures"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                        id="contact-input-company"
                      />
                    </div>

                    {/* Service Needed DROPDOWN */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        Service Needed <span className="text-rose-400">*</span>
                      </label>
                      <select
                        name="serviceNeeded"
                        required
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors cursor-pointer"
                        id="contact-select-service"
                      >
                        <option value="Flyer & Graphic Design">Flyer & Graphic Design</option>
                        <option value="Social Media Content & Video Ads">Social Media Content & Video Ads</option>
                        <option value="Business Website Design">Business Website Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Project Details / Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project requirements (e.g. I need a promotional flyer and a 30-second video ad for my business in Tamale)..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors resize-none"
                      id="contact-textarea-message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                      id="contact-submit-btn"
                    >
                      {status === 'submitting' ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

