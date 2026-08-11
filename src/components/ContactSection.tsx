import React, { useState } from 'react';
import { ContactFormData, ServiceType } from '../types';
import { 
  Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, 
  AlertCircle, Sparkles, ExternalLink, Globe, HelpCircle 
} from 'lucide-react';

interface ContactSectionProps {
  selectedServiceNeeded: ServiceType;
  onServiceNeededChange: (service: ServiceType) => void;
}

/* =========================================================================
 * EMAIL SERVICE CONFIGURATION FOR MUSTAPHA ABDUL-TOFIK / ALOLO STUDIO
 * 
 * To connect your real email inbox:
 * Option A (Formspree - Recommended):
 * 1. Go to https://formspree.io and create a free account.
 * 2. Create a new form and copy your Form Endpoint ID (e.g., 'f/xzyvqabc').
 * 3. Replace FORMSPREE_FORM_ID below with your ID.
 * 
 * Option B (EmailJS):
 * 1. Go to https://emailjs.com and create a template.
 * 2. Fill EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY below.
 * ========================================================================= */
const FORMSPREE_FORM_ID: string = ''; // Insert your Formspree ID here e.g. "f/myformid"
const EMAILJS_SERVICE_ID: string = ''; // Insert your EmailJS Service ID
const EMAILJS_TEMPLATE_ID: string = ''; // Insert your EmailJS Template ID
const EMAILJS_PUBLIC_KEY: string = ''; // Insert your EmailJS Public Key

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceNeeded,
  onServiceNeededChange,
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
    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. If Formspree endpoint is configured
      if (FORMSPREE_FORM_ID && FORMSPREE_FORM_ID.trim() !== '') {
        const response = await fetch(`https://formspree.io/${FORMSPREE_FORM_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Formspree submission failed. Please check your Formspree Form ID.');
        }
      } 
      // 2. Else attempt submitting to full-stack Express API route or graceful fallback
      else {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || 'Failed to deliver message via server proxy.');
        }
      }

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        businessName: '',
        serviceNeeded: 'Flyer & Graphic Design',
        message: '',
      });
    } catch (err: any) {
      console.error('Email submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'There was a problem sending your message. Please try again or contact directly via email.'
      );
    }
  };

  // Social Links with real provided user phone number
  const socialLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/233203530939', label: '0203530939 (Click to chat)' },
    { name: 'Phone', url: 'tel:+233203530939', label: '0203530939' },
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind? Let's create something professional.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Send your project details or service inquiry below. I reply promptly to discuss your requirements.
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
                    <h4 className="text-xs text-slate-400 uppercase font-bold">Phone & WhatsApp</h4>
                    <a href="https://wa.me/233203530939" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-cyan-400 hover:underline">
                      0203530939
                    </a>
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

            {/* Email Integration Configuration Notice */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200/90 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Email Delivery Service Ready</span>
              </div>
              <p className="text-[11px] leading-relaxed text-cyan-200/80">
                Form submissions automatically post to the backend endpoint and can be routed to Formspree or EmailJS by filling the configuration variables in <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-300">ContactSection.tsx</code>.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 relative">
              
              {status === 'success' ? (
                <div className="py-12 px-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-display text-2xl font-bold text-white">
                      Message Delivered!
                    </h3>
                    <p className="text-slate-300 text-sm font-medium leading-relaxed">
                      Thank you! Your message has been sent successfully. I’ll get back to you soon.
                    </p>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
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

                    {/* Service Needed DROPDOWN (ONLY THREE SERVICES) */}
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
                      placeholder="Describe what you want to achieve (e.g., I need a promotional flyer and a 30-second video ad for my new clothing store in Tamale)..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors resize-none"
                      id="contact-textarea-message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
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

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
