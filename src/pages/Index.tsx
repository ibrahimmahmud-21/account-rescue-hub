import { MessageCircle, ArrowDown, Lock, ShieldAlert, Unlock, ShieldCheck, FileText, Ban, DollarSign, Scale, TrendingUp, Film, CreditCard, Building2, Megaphone, BadgeCheck, Smartphone, BarChart3, ChevronRight, User, Mail, Facebook } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const WA = "https://wa.me/8801922071552";

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
      <span className="text-lg font-bold text-foreground tracking-tight">
        <span className="neon-text">⟐</span> Ibrahim Mahmud
      </span>
      <div className="flex items-center gap-5 md:gap-8">
        <a href="#home" className="nav-link hidden sm:block">Home</a>
        <a href="#services" className="nav-link hidden sm:block">My Services</a>
        <a href="#contact" className="nav-link hidden sm:block">Contact</a>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-neon !text-sm !py-2.5 !px-5">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="animated-bg relative overflow-hidden">
    <div className="grid-bg absolute inset-0 opacity-40" />
    {/* Ambient orbs */}
    <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] opacity-[0.07]" style={{ background: 'hsl(145 65% 49%)' }} />
    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-[100px] opacity-[0.05]" style={{ background: 'hsl(200 80% 50%)' }} />

    <div className="container mx-auto px-4 md:px-6 py-36 md:py-52 relative z-10">
      <div className="grid md:grid-cols-2 gap-20 lg:gap-28 items-center">
        <div className="space-y-12">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-secondary/60 border border-border/50 rounded-full px-5 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Professional Recovery Service
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.02] tracking-tighter">
              Social Media<br />
              <span className="neon-text">Account Recovery</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md">
            Professional help to recover disabled, hacked, locked or restricted Facebook and Instagram accounts.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-neon">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <a href="#services" className="btn-ghost-neon">
              <ArrowDown size={20} /> View My Services
            </a>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="absolute w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem] rounded-full blur-[140px] opacity-25" style={{ background: 'hsl(145 65% 49%)' }} />
          <div className="absolute w-72 h-72 rounded-full blur-[80px] opacity-15" style={{ background: 'hsl(200 80% 50%)' }} />
          <div className="profile-neon w-72 h-72 md:w-[22rem] md:h-[22rem] relative z-10">
            <img src={profileImg} alt="Ibrahim Mahmud" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-36 md:py-48 relative overflow-hidden">
    <div className="grid-bg absolute inset-0 opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.04]" style={{ background: 'hsl(145 65% 49%)' }} />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-20 space-y-4">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">What I Offer</p>
        <h2 className="section-title">My Services</h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">End-to-end solutions for all your social media recovery needs</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {services.map(({ name, icon: Icon }) => (
          <div key={name} className="cyber-card group">
            <div className="mb-5 flex justify-center">
              <div className="icon-glow">
                <Icon size={22} className="text-primary" />
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground/90 leading-snug">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-28 md:py-36 animated-bg relative overflow-hidden">
    <div className="grid-bg absolute inset-0 opacity-20" />
    <div className="container mx-auto px-4 md:px-6 max-w-xl text-center relative z-10">
      <div className="space-y-4 mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="contact-card space-y-0 text-left mb-12">
        {[
          { label: "Name", value: "Ibrahim Mahmud", icon: User },
          { label: "WhatsApp", value: "+8801922071552", icon: MessageCircle },
          { label: "Email", value: "ibmm923@gmail.com", href: "mailto:ibmm923@gmail.com", icon: Mail },
          { label: "Facebook Page", value: "Facebook Page", href: "https://www.facebook.com/share/1angi9HKK8/", icon: Facebook },
        ].map(({ label, value, href, icon: Icon }, i, arr) => (
          <div key={label}>
            <div className="flex items-center gap-5 py-5 group">
              <div className="icon-glow w-11 h-11 shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">{label}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-semibold">{value}</a>
                ) : (
                  <span className="text-foreground text-sm font-semibold">{value}</span>
                )}
              </div>
            </div>
            {i < arr.length - 1 && <div className="h-px bg-border/40" />}
          </div>
        ))}
      </div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-neon text-base">
        <MessageCircle size={22} /> Chat on WhatsApp
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border/30 py-14" style={{ background: 'hsl(228 60% 5%)' }}>
    <div className="container mx-auto px-4 md:px-6 text-center space-y-5">
      <p className="text-foreground font-bold text-lg tracking-tight"><span className="neon-text">⟐</span> Ibrahim Mahmud</p>
      <p className="text-muted-foreground text-sm">Social Media Account Recovery Service</p>
      <div className="flex justify-center gap-8 text-sm">
        <a href={WA} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
        <a href="mailto:ibmm923@gmail.com" className="footer-link">Email</a>
        <a href="https://www.facebook.com/share/1angi9HKK8/" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
      </div>
      <p className="text-muted-foreground/40 text-xs pt-3">© 2026 Ibrahim Mahmud</p>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a href={WA} target="_blank" rel="noopener noreferrer" className="floating-wa" aria-label="Chat on WhatsApp">
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
