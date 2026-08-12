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

  // Social Links with correct user WhatsApp & Call numbers
  const socialLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/233533580326', label: '0533580326 (Instant Chat)' },
    { name: 'Phone Call', url: 'tel:+233203530939', label: '0203530939 (Direct Call)' },
    { name: 'Instagram', url: 'https://instagram.com/alolostudio.gh', label: '@alolostudio.gh' },
    { name: 'TikTok', url: 'https://tiktok.com/@alolostudio.gh', label: '@alolostudio.gh' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mustapha-abdul-tofik', label: 'Mustapha Abdul-Tofik' },
  ];

  // State for Viewing Received Messages Inbox
  const [showInbox, setShowInbox] = useState<boolean>(false);
  const [receivedMessages, setReceivedMessages] = useState<any[]>([]);
  const [loadingMessages, setLoadingMessages] = useState<boolean>(false);

  const fetchInboxMessages = async () => {
    setLoadingMessages(true);
    try {
      const res = await fetch('/api/messages');
      const data = await res.json();
      if (data.success && Array.isArray(data.messages)) {
        setReceivedMessages(data.messages);
      }
    } catch (e) {
      console.error('Error fetching inbox messages:', e);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleToggleInbox = () => {
    if (!showInbox) {
      fetchInboxMessages();
    }
    setShowInbox(!showInbox);
  };

  // Direct Send via WhatsApp function
  const handleSendViaWhatsApp = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your Name and Project Details before sending via WhatsApp.');
      return;
    }

    const formattedMessage = `Hello Mustapha (Alolo Studio)!\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email || 'N/A'}\n*Business:* ${formData.businessName || 'N/A'}\n*Service:* ${formData.serviceNeeded}\n\n*Project Details:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/233533580326?text=${encodeURIComponent(formattedMessage)}`;

    // Save to inbox API silently in background
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      // Ignore background post error if opening WhatsApp
    }

    window.open(whatsappUrl, '_blank');
    setStatus('success');
  };

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

                  {/* Action Buttons: Instant WhatsApp OR Direct Server Inbox */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer"
                      id="contact-whatsapp-instant-btn"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Send via WhatsApp (Instant)</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                      id="contact-submit-btn"
                    >
                      {status === 'submitting' ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send via Website Inbox</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-[11px] text-slate-400">
                      ⚡ For fastest reply, use <span className="text-emerald-400 font-bold">WhatsApp (0533580326)</span>. Both options deliver your message instantly to Mustapha.
                    </p>
                  </div>

                </form>
              )}

            </div>

            {/* RECEIVED MESSAGES INBOX VIEW (For Mustapha / Studio Admin) */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={handleToggleInbox}
                className="w-full py-3 px-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Received Messages & Inquiries Inbox</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-mono">
                  {showInbox ? 'Close Inbox' : 'View Received Messages'}
                </span>
              </button>

              {showInbox && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <span>Received Inbox</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                        {receivedMessages.length} Messages
                      </span>
                    </h4>
                    <button
                      onClick={fetchInboxMessages}
                      className="text-[11px] text-cyan-400 hover:underline cursor-pointer"
                    >
                      Refresh
                    </button>
                  </div>

                  {loadingMessages ? (
                    <div className="text-center py-6 text-xs text-slate-400">Loading messages...</div>
                  ) : receivedMessages.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-400">
                      No messages received yet. Messages submitted through the form will appear here.
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                      {receivedMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-white text-sm">{msg.fullName}</span>
                            <span className="text-[10px] text-slate-500">
                              {new Date(msg.createdAt).toLocaleString()}
                            </span>
                          </div>

                          <div className="text-slate-400 text-[11px] flex flex-wrap gap-x-3 gap-y-1">
                            <span>📧 {msg.email}</span>
                            {msg.businessName && <span>🏢 {msg.businessName}</span>}
                            <span className="text-cyan-400 font-semibold">🛠️ {msg.serviceNeeded}</span>
                          </div>

                          <p className="text-slate-200 pt-1 text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60 leading-relaxed">
                            "{msg.message}"
                          </p>

                          <div className="pt-2 flex items-center gap-2">
                            <a
                              href={`https://wa.me/233533580326?text=${encodeURIComponent(
                                `Hello ${msg.fullName}, this is Mustapha from Alolo Studio replying to your inquiry about ${msg.serviceNeeded}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-[11px] flex items-center gap-1 transition-colors"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>Reply on WhatsApp</span>
                            </a>

                            <a
                              href={`mailto:${msg.email}?subject=Re: Alolo Studio Inquiry - ${msg.serviceNeeded}&body=Hello ${msg.fullName},%0D%0A%0D%0AThank you for reaching out to Alolo Studio!`}
                              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-[11px] flex items-center gap-1 transition-colors"
                            >
                              <Mail className="w-3 h-3" />
                              <span>Reply via Email</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
