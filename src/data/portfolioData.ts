import { PortfolioItem, ServiceType, SkillItem } from '../types';

// Importing embedded base64 images for 100% fail-proof instant rendering
import { profileImageBase64 } from '../assets/images/profileBase64';
import { logoImageBase64 } from '../assets/images/logoBase64';
import agencyFlyerImg from '../assets/images/flyer_sample_graphic_1786460518557.jpg';
import foodFlyerImg from '../assets/images/food_flyer_sample_1786460537825.jpg';
import videoAdImg from '../assets/images/video_ad_thumbnail_1786460549757.jpg';
import websiteImg from '../assets/images/website_design_sample_1786460564006.jpg';

export const profileImg = profileImageBase64;
export const logoImg = logoImageBase64;

export const SERVICES_DATA: Array<{
  id: ServiceType;
  title: ServiceType;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  inclusions: string[];
  idealFor: string;
  colorGradient: string;
}> = [
  {
    id: 'Flyer & Graphic Design',
    title: 'Flyer & Graphic Design',
    shortDescription: 'Professional promotional flyers, social media graphics, event posters, advertisements, and certificates that make your brand stand out.',
    longDescription: 'High-impact visual designs crafted specifically for local Ghanaian businesses, events, product launches, and social media campaigns. Every design is built with clean typography, balanced layouts, and eye-catching color harmony.',
    iconName: 'Palette',
    inclusions: [
      'Business Promotional Flyers & Posters',
      'Restaurant & Food Menus/Flyers',
      'Fashion & Retail Sales Posters',
      'Event & Social Gathering Invitations',
      'Professional Certificates & Diplomas',
      'Social Media Ads (Instagram/Facebook/WhatsApp)'
    ],
    idealFor: 'Shops, Restaurants, Event Organizers, Local Brands, & Services in Tamale',
    colorGradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'Social Media Content & Video Ads',
    title: 'Social Media Content & Video Ads',
    shortDescription: 'Engaging promotional content, short video advertisements, AI-assisted video generation, and visual assets built to drive customer action.',
    longDescription: 'Dynamic video and social content that captures attention within seconds. Combining modern video editing tools, AI generation, and crisp copywriting to highlight products, special offers, and brand stories.',
    iconName: 'Video',
    inclusions: [
      'Short Promo Video Advertisements (Reels/TikTok/Status)',
      'AI-Assisted Video Creation & Scripting',
      'Product Highlight & Offer Commercials',
      'Social Media Content Schedules & Graphics',
      'Motion Graphics & Animated Ad Banners',
      'Engaging Audio-Visual Brand Clips'
    ],
    idealFor: 'Businesses wanting higher engagement on WhatsApp, Instagram, TikTok & Facebook',
    colorGradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'Business Website Design',
    title: 'Business Website Design',
    shortDescription: 'Clean, modern, mobile-friendly websites for small businesses, entrepreneurs, local shops, personal brands, and organizations.',
    longDescription: 'Custom, fast-loading, responsive websites engineered to give your business an official, trustworthy online presence. Designed for seamless mobile viewing, easy customer contact, and clear service presentation.',
    iconName: 'Globe',
    inclusions: [
      'Responsive Mobile & Desktop Layouts',
      'Clean Services & About Showcase',
      'WhatsApp & One-Click Call Integration',
      'Fast Performance & Speed Optimization',
      'SEO-Friendly Meta & Search Structure',
      'Contact Form & Location Information'
    ],
    idealFor: 'Entrepreneurs, Local Businesses, Agencies, & Personal Brands in Ghana',
    colorGradient: 'from-emerald-500 to-teal-600'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Alolo Creative Studio Promo Flyer',
    category: 'Graphic Design',
    serviceType: 'Flyer & Graphic Design',
    description: 'A futuristic cyan-violet dark theme promotional flyer showcasing digital technology and creative visual services.',
    image: agencyFlyerImg,
    tags: ['Flyer Design', 'Branding', 'Photoshop/Canva', 'Social Media'],
    isSample: true,
    clientName: 'Alolo Studio (Demo)',
    aspectRatio: 'portrait',
    details: {
      objective: 'Create a high-tech promotional flyer to advertise creative digital services to local Tamale entrepreneurs.',
      deliverables: ['Print-ready HD PDF', 'WhatsApp Status Graphic (1080x1920)', 'Instagram Square Post (1080x1080)'],
      toolsUsed: ['Graphic Design Software', 'AI Image Enhancement', 'Typography Tools']
    }
  },
  {
    id: 'p2',
    title: 'Savannah Grill & Restaurant Promo Poster',
    category: 'Graphic Design',
    serviceType: 'Flyer & Graphic Design',
    description: 'Mouth-watering food promotional poster designed for a local food establishment, highlighting special combo offers.',
    image: foodFlyerImg,
    tags: ['Restaurant Flyer', 'Food Design', 'Promotional Poster'],
    isSample: true,
    clientName: 'Savannah Grill (Demo)',
    aspectRatio: 'portrait',
    details: {
      objective: 'Boost weekend lunch orders through a vibrant, appetite-appealing flyer optimized for WhatsApp broadcasting.',
      deliverables: ['High-Res Digital Poster', 'Menu Highlight Badge', 'Promo Copy Banner'],
      toolsUsed: ['Graphic Design Tools', 'Photo Color Grading']
    }
  },
  {
    id: 'p3',
    title: 'Kumbungu Fashion House Clearance Sale',
    category: 'Graphic Design',
    serviceType: 'Flyer & Graphic Design',
    description: 'Sleek fashion promotional flyer with bold discount tags and clean typography for a clothing store.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    tags: ['Fashion Flyer', 'Sales Poster', 'Social Media Graphic'],
    isSample: true,
    clientName: 'Kumbungu Styles (Demo)',
    aspectRatio: 'portrait',
    details: {
      objective: 'Promote a seasonal apparel discount drive with clear price points and call-to-action.',
      deliverables: ['Sales Promo Flyer', 'Story Format Graphic'],
      toolsUsed: ['Graphic Design Suite', 'Image Retouching']
    }
  },
  {
    id: 'p4',
    title: 'Tamale Tech Summit Certificate of Completion',
    category: 'Graphic Design',
    serviceType: 'Flyer & Graphic Design',
    description: 'Elegant, official certificate design with gold accents and security seals for workshop participants.',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80',
    tags: ['Certificate Design', 'Corporate Graphics', 'Print Ready'],
    isSample: true,
    clientName: 'Northern Digital Skills Initiative (Demo)',
    aspectRatio: 'landscape',
    details: {
      objective: 'Design a prestigious, print-ready completion certificate for ICT students.',
      deliverables: ['Print-Ready PDF Certificate', 'Editable Name Field Template'],
      toolsUsed: ['Vector Layout Tools', 'Typography Styling']
    }
  },
  {
    id: 'p5',
    title: 'AI-Powered Business Video Ad Promo',
    category: 'Video & Social Ads',
    serviceType: 'Social Media Content & Video Ads',
    description: 'Dynamic 30-second video advertisement combining energetic background beats, animated text, and AI visuals.',
    image: videoAdImg,
    tags: ['Video Editing', 'AI Video Ad', 'Motion Graphics', 'Reels/TikTok'],
    isSample: true,
    clientName: 'Tamale Express Delivery (Demo)',
    videoDuration: '0:30',
    aspectRatio: 'landscape',
    details: {
      objective: 'Create a fast-paced video ad for social media showcasing same-day package delivery services across Tamale.',
      deliverables: ['1080x1920 Vertical Video Ad', '16:9 Landscape Promo Video', 'Audio Voiceover Track'],
      toolsUsed: ['Video Editing Software', 'AI Voice & Script Generation', 'CapCut/Premiere']
    }
  },
  {
    id: 'p6',
    title: 'Dagbon Crafts Social Media Content Campaign',
    category: 'Video & Social Ads',
    serviceType: 'Social Media Content & Video Ads',
    description: 'Series of short promotional clips and static graphics showcasing traditional handcrafted leather & fabric goods.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Social Media Campaign', 'Product Commercial', 'Content Creation'],
    isSample: true,
    clientName: 'Dagbon Crafts (Demo)',
    videoDuration: '0:45',
    aspectRatio: 'landscape',
    details: {
      objective: 'Tell the artisan story through engaging short video clips and product highlight images.',
      deliverables: ['3 Short Video Clips', '5 Product Promo Graphics'],
      toolsUsed: ['Video Editing', 'AI Content Prompting']
    }
  },
  {
    id: 'p7',
    title: 'Modern Business Website Showcase',
    category: 'Business Website',
    serviceType: 'Business Website Design',
    description: 'Fast-loading, mobile-first business web portal with interactive service layout, WhatsApp chat, and contact form.',
    image: websiteImg,
    tags: ['Business Website', 'Responsive Design', 'Web Design', 'WhatsApp Integrated'],
    isSample: true,
    clientName: 'Alolo Tech Solutions (Demo)',
    demoUrl: 'https://alolo-studio-demo.example.com',
    aspectRatio: 'landscape',
    details: {
      objective: 'Build an ultra-modern one-page business website for a local service provider with instant customer contact.',
      deliverables: ['Responsive Web Application', 'Contact Form Integration', 'SEO Meta Configuration'],
      toolsUsed: ['React', 'Tailwind CSS', 'Vite', 'HTML5/CSS3']
    }
  },
  {
    id: 'p8',
    title: 'Sheba Food & Lounge Website Concept',
    category: 'Business Website',
    serviceType: 'Business Website Design',
    description: 'Sleek restaurant website featuring online menu showcase, table reservation inquiries, and location map.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    tags: ['Restaurant Website', 'Digital Menu', 'Mobile Friendly'],
    isSample: true,
    clientName: 'Sheba Lounge (Demo)',
    demoUrl: 'https://sheba-lounge-demo.example.com',
    aspectRatio: 'landscape',
    details: {
      objective: 'Give customers an easy way to view the food menu and place food orders via WhatsApp on their mobile phones.',
      deliverables: ['Digital Food Menu UI', 'Order via WhatsApp Button', 'Google Map Integration'],
      toolsUsed: ['Web Design Frameworks', 'Mobile UI Design']
    }
  },
  {
    id: 'p9',
    title: 'Dr. Fuseini Personal Brand & Consultancy Web',
    category: 'Business Website',
    serviceType: 'Business Website Design',
    description: 'Clean personal website for an educational consultant featuring bio, publication list, and consultation booking.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tags: ['Personal Brand', 'Consultant Portfolio', 'Clean UI'],
    isSample: true,
    clientName: 'Dr. Fuseini Consult (Demo)',
    demoUrl: 'https://fuseini-consult-demo.example.com',
    aspectRatio: 'landscape',
    details: {
      objective: 'Establish a credible online authority presence with clean typography and booking contact form.',
      deliverables: ['Personal Portfolio Web Page', 'Downloadable Resume PDF Link'],
      toolsUsed: ['Web Design', 'Content Formatting']
    }
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Creative & Modern Designs',
    description: 'Eye-catching visuals tailored to local audiences, making your brand look premium and modern.',
    iconName: 'Sparkles'
  },
  {
    title: 'Business-Focused Content',
    description: 'Every design and video is built with clear messaging aimed at attracting real paying customers.',
    iconName: 'Target'
  },
  {
    title: 'Affordable For Small Businesses',
    description: 'Fair, transparent pricing tailored for startups, shops, and entrepreneurs in Tamale & Ghana.',
    iconName: 'Tag'
  },
  {
    title: 'Mobile-Friendly Websites',
    description: 'Your website will look amazing on all smartphones, loading fast even on mobile data connections.',
    iconName: 'Smartphone'
  },
  {
    title: 'AI-Assisted Creative Workflow',
    description: 'Leveraging cutting-edge AI tools to speed up content creation and deliver high quality in record time.',
    iconName: 'Cpu'
  },
  {
    title: 'Continuous Learning & Growth',
    description: 'Always adopting the latest global technologies, trends, and productivity techniques to serve you better.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Local Business Understanding',
    description: 'Based in Tamale, I understand local customer preferences, cultural nuances, and market dynamics.',
    iconName: 'MapPin'
  }
];

export const SKILLS_LIST: SkillItem[] = [
  // Design & Visuals
  { name: 'Graphic Design', category: 'Design & Visuals', iconName: 'Palette' },
  { name: 'Flyer & Poster Design', category: 'Design & Visuals', iconName: 'FileImage' },
  { name: 'Image Generation', category: 'Design & Visuals', iconName: 'Image' },
  { name: 'Social Media Visuals', category: 'Design & Visuals', iconName: 'Layout' },

  // Video & AI
  { name: 'Video Generation & Editing', category: 'Video & AI', iconName: 'Video' },
  { name: 'AI Tools & Prompting', category: 'Video & AI', iconName: 'Bot' },
  { name: 'Prompt Engineering', category: 'Video & AI', iconName: 'Terminal' },
  { name: 'Content Creation', category: 'Video & AI', iconName: 'PenTool' },

  // Web & Tech
  { name: 'Website Creation', category: 'Web & Tech', iconName: 'Globe' },
  { name: 'Blogging & Web Skills', category: 'Web & Tech', iconName: 'Code' },
  { name: 'Internet Safety', category: 'Web & Tech', iconName: 'ShieldCheck' },
  { name: 'ICT Technical Skills', category: 'Web & Tech', iconName: 'Monitor' },

  // Productivity & Office
  { name: 'Google Workspace (Gmail, Drive)', category: 'Productivity & Office', iconName: 'Mail' },
  { name: 'Microsoft PowerPoint', category: 'Productivity & Office', iconName: 'Presentation' },
  { name: 'Microsoft Excel & Data', category: 'Productivity & Office', iconName: 'Table' },
  { name: 'Fast Typing & Office Tools', category: 'Productivity & Office', iconName: 'Keyboard' }
];

export const LEARNING_JOURNEY = [
  {
    year: 'Present',
    title: 'Digital Skills & Creative Technology Student',
    description: 'Actively advancing expertise in modern ICT tools, AI prompt engineering, full-stack web basics, graphic design, and video production to empower local enterprises.',
    highlights: ['AI-Assisted Content Workflows', 'Responsive Web Design', 'Advanced Visual Branding']
  },
  {
    year: 'Practical Experience',
    title: 'Founder & Lead Creator at Alolo Studio',
    description: 'Providing practical digital solutions including business flyers, social media ads, and custom mobile websites for local shops, food businesses, and entrepreneurs in Tamale.',
    highlights: ['Client Satisfaction Focus', 'On-time Project Delivery', 'Local Market Insights']
  },
  {
    year: 'Foundations',
    title: 'ICT, Productivity & Computer Literacy Training',
    description: 'Mastered core office productivity suites (PowerPoint, Excel, Google Workspace), internet safety protocols, typing proficiency, and foundational computer science concepts.',
    highlights: ['Google Workspace Mastery', 'Data Organization', 'Digital Communication']
  }
];
