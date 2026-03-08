import { MessageCircle, ArrowDown, Mail, Facebook, Lock, ShieldAlert, Unlock, ShieldCheck, FileText, Ban, DollarSign, Scale, TrendingUp, Film, CreditCard, Building2, Megaphone, BadgeCheck, Smartphone, BarChart3 } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const WHATSAPP_URL = "https://wa.me/8801922071552";

const services = [
  { name: "Disabled Account Back", icon: Lock },
  { name: "Suspended Account Recovery", icon: ShieldAlert },
  { name: "Locked Account Unlock", icon: Unlock },
  { name: "Hacked Account Recovery", icon: ShieldCheck },
  { name: "Facebook Page Access Back", icon: FileText },
  { name: "Page Unpublished / Restricted Fix", icon: Ban },
  { name: "Page Monetization Back", icon: DollarSign },
  { name: "Page Copyright / Policy Issue Fix", icon: Scale },
  { name: "Profile Monetization Back", icon: TrendingUp },
  { name: "Reels Monetization Enable", icon: Film },
  { name: "Bonus / Payout Issue Solve", icon: CreditCard },
  { name: "Business Manager Issue Fix", icon: Building2 },
  { name: "Ad Account Disabled Back", icon: Megaphone },
  { name: "Business Verification Help", icon: BadgeCheck },
  { name: "Instagram Account Disabled Back", icon: Smartphone },
  { name: "Instagram Monetization Fix", icon: BarChart3 },
];

const Navbar = () => (
  <nav className="glass-nav sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
      <span className="text-lg font-bold text-foreground tracking-tight">Ibrahim Mahmud</span>
      <div className="flex items-center gap-5 md:gap-7">
        <a href="#home" className="nav-link hidden sm:block">Home</a>
        <a href="#services" className="nav-link hidden sm:block">My Services</a>
        <a href="#contact" className="nav-link hidden sm:block">Contact</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm !py-2.5 !px-5">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="hero-gradient relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 py-24 md:py-36 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">Professional Recovery Service</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              Social Media<br />
              <span className="text-primary">Account Recovery</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Professional help to recover disabled, hacked, locked or restricted Facebook and Instagram accounts.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <a href="#services" className="btn-outline-primary">
              <ArrowDown size={20} /> View My Services
            </a>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="glow-circle w-80 h-80 -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 relative z-10 shadow-2xl">
            <img src={profileImg} alt="Ibrahim Mahmud" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 space-y-3">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">Comprehensive solutions for all your social media account issues</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {services.map(({ name, icon: Icon }) => (
          <div key={name} className="service-card group">
            <div className="mb-4 flex justify-center">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={20} className="text-primary" />
              </div>
            </div>
            <p className="text-sm font-medium text-foreground leading-snug">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 hero-gradient">
    <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
      <div className="space-y-3 mb-12">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in touch for professional account recovery help</p>
      </div>
      <div className="contact-card space-y-5 text-left mb-10">
        {[
          { label: "Name", value: "Ibrahim Mahmud" },
          { label: "WhatsApp", value: "+8801922071552" },
          { label: "Email", value: "ibmm923@gmail.com", href: "mailto:ibmm923@gmail.com" },
          { label: "Facebook", value: "Facebook Profile", href: "https://www.facebook.com/share/1angi9HKK8/" },
        ].map(({ label, value, href }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm w-24 shrink-0">{label}</span>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">{value}</a>
            ) : (
              <span className="text-foreground text-sm font-medium">{value}</span>
            )}
          </div>
        ))}
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
        <MessageCircle size={22} /> Chat on WhatsApp
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border/50 py-12 bg-background">
    <div className="container mx-auto px-4 md:px-6 text-center space-y-5">
      <p className="text-foreground font-bold text-lg tracking-tight">Ibrahim Mahmud</p>
      <p className="text-muted-foreground text-sm">Social Media Account Recovery Service</p>
      <div className="flex justify-center gap-8 text-sm">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
        <a href="mailto:ibmm923@gmail.com" className="footer-link">Email</a>
        <a href="https://www.facebook.com/share/1angi9HKK8/" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
      </div>
      <p className="text-muted-foreground/60 text-xs pt-2">© 2026 Ibrahim Mahmud</p>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="floating-wa" aria-label="Chat on WhatsApp">
    <MessageCircle size={28} />
  </a>
);

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <Contact />
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
