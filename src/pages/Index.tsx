import { useState, useEffect, useRef } from "react";
import { ArrowDown, Lock, ShieldAlert, Unlock, ShieldCheck, FileText, Ban, DollarSign, Scale, TrendingUp, Film, CreditCard, Building2, Megaphone, BadgeCheck, Smartphone, BarChart3, Mail, Facebook, Search, Wrench, Zap, Shield, Target, Clock, LockKeyhole, HelpCircle, ChevronDown, ChevronUp, Menu, X, Send } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import profileImg from "@/assets/profile.png";

const FB = "https://www.facebook.com/share/1EDcLHbrgn/";

const mainServices = [
  { name: "Disabled Account Back", icon: Lock },
  { name: "Suspended Account Recovery", icon: ShieldAlert },
  { name: "Instagram Account Disabled Back", icon: Smartphone },
  { name: "Locked Account Unlock", icon: Unlock },
];

const moreServices = [
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
  { name: "Instagram Monetization Fix", icon: BarChart3 },
];

/* ── Animated Background Particles ── */
const CyberParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
};

/* ── Fade-in on scroll wrapper ── */
const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
};

/* ── Navbar ── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center relative overflow-hidden group-hover:border-primary/60 transition-all duration-300" style={{ boxShadow: '0 0 12px hsl(168 100% 50% / 0.25)' }}>
            <div className="w-2.5 h-2.5 rounded-sm bg-primary" style={{ boxShadow: '0 0 8px hsl(168 100% 50% / 0.8)' }} />
          </div>
          <span className="font-cyber text-sm font-bold tracking-[0.15em] uppercase neon-text">
            Ibrahim Mahmud
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="btn-neon !text-[10px] !py-2 !px-4">
            <Mail size={13} /> Contact Me
          </a>
        </div>
        <button className="sm:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-primary/10 px-4 pb-4 pt-2 flex flex-col gap-3 animate-fade-in">
          <a href="#home" className="nav-link" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" className="nav-link" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className="btn-neon !text-[10px] !py-2 !px-4 w-fit" onClick={() => setOpen(false)}>
            <Mail size={13} /> Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};
/* ── Hero ── */
const Hero = () => {
  return (
    <section id="home" className="animated-bg relative overflow-hidden scan-overlay">
      <div className="cyber-grid-bg absolute inset-0" />
      <CyberParticles />
      <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 rounded-full blur-[120px] opacity-[0.08]" style={{ background: 'hsl(168 100% 50%)' }} />
      <div className="absolute bottom-20 right-10 w-52 md:w-80 h-52 md:h-80 rounded-full blur-[100px] opacity-[0.06]" style={{ background: 'hsl(190 100% 50%)' }} />

      <div className="container mx-auto px-4 py-16 md:py-36 lg:py-52 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center text-center md:text-left">
          <div className="space-y-6 md:space-y-10 order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/40 border border-primary/20 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-semibold text-primary/80 backdrop-blur-sm font-cyber uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                System Online
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter heading-cyber">
                <span className="text-foreground">Social Media</span><br />
                <span className="gradient-text">Account Recovery</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Professional help to recover disabled, hacked, locked or restricted Facebook and Instagram accounts.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#contact" className="btn-neon !text-[10px] !px-6 !py-3 md:!px-10 md:!py-4">
                <Mail size={16} /> Contact Me
              </a>
              <a href="#services" className="btn-ghost-neon !text-[10px] !px-6 !py-3 md:!px-10 md:!py-4">
                <ArrowDown size={16} /> View Services
              </a>
            </div>
          </div>

          <div className="flex justify-center relative order-2">
            <div className="absolute w-60 h-60 md:w-[28rem] md:h-[28rem] rounded-full blur-[120px] md:blur-[160px] opacity-20" style={{ background: 'hsl(168 100% 50%)' }} />
            <div className="profile-neon w-48 h-48 md:w-72 md:h-72 lg:w-[22rem] lg:h-[22rem] relative z-10" style={{ animation: 'pulse-glow 3s ease-in-out infinite, float 6s ease-in-out infinite' }}>
              <img src={profileImg} alt="Ibrahim Mahmud" className="rounded-full w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Section Divider ── */
const SectionDivider = () => (
  <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, hsl(168 100% 50% / 0.15), hsl(190 100% 50% / 0.1), transparent)' }} />
);

/* ── Services ── */
const Services = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="py-16 md:py-36 relative overflow-hidden bg-background">
      <div className="cyber-grid-bg absolute inset-0 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.05]" style={{ background: 'hsl(168 100% 50%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-10 md:mb-20 space-y-2 md:space-y-4">
            <p className="text-primary font-cyber font-semibold text-[10px] uppercase tracking-[0.25em]">// Services</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground heading-cyber tracking-tight">My Services</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">End-to-end solutions for all your social media recovery needs</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {mainServices.map(({ name, icon: Icon }, i) => (
            <FadeIn key={name} className={`delay-${i * 100}`}>
              <div className="cyber-card-compact group">
                <div className="mb-3 flex justify-center">
                  <div className="icon-glow !w-10 !h-10 md:!w-12 md:!h-12">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>
                <p className="text-xs md:text-sm font-semibold text-foreground/90 leading-snug">{name}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {showAll && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-3 md:mt-5 animate-fade-in">
            {moreServices.map(({ name, icon: Icon }) => (
              <div key={name} className="cyber-card-compact group">
                <div className="mb-3 flex justify-center">
                  <div className="icon-glow !w-10 !h-10 md:!w-12 md:!h-12">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>
                <p className="text-xs md:text-sm font-semibold text-foreground/90 leading-snug">{name}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button onClick={() => setShowAll(!showAll)} className="btn-ghost-neon !text-[10px] !py-2.5 !px-6 flex items-center gap-2">
            {showAll ? <><ChevronUp size={16} /> Show Less</> : <><ChevronDown size={16} /> View All Services</>}
          </button>
        </div>
      </div>
    </section>
  );
};

/* ── Process ── */
const steps = [
  { number: "01", title: "Explain Your Issue", description: "Describe your account problem clearly.", icon: FileText },
  { number: "02", title: "Issue Analysis", description: "We review the problem and check possible solutions.", icon: Search },
  { number: "03", title: "Recovery Process", description: "We start working to recover or fix the account issue.", icon: Wrench },
];

const Process = () => (
  <section className="py-16 md:py-36 relative overflow-hidden" style={{ background: 'hsl(224 55% 4%)' }}>
    <div className="cyber-grid-bg absolute inset-0 opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <FadeIn>
        <div className="text-center mb-10 md:mb-20 space-y-2 md:space-y-4">
          <p className="text-primary font-cyber font-semibold text-[10px] uppercase tracking-[0.25em]">// Process</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground heading-cyber tracking-tight">How It Works</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">Three simple steps to get your account back</p>
        </div>
      </FadeIn>
      <div className="relative max-w-5xl mx-auto">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-[2px] -translate-y-1/2 z-0" style={{ background: 'linear-gradient(90deg, hsl(168 100% 50% / 0.3), hsl(190 100% 50% / 0.2), hsl(168 100% 50% / 0.3))', boxShadow: '0 0 10px hsl(168 100% 50% / 0.2)' }} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 relative z-10">
          {steps.map(({ number, title, description, icon: Icon }, i) => (
            <FadeIn key={number} className={i === 2 ? 'col-span-2 md:col-span-1 max-w-[50%] md:max-w-none mx-auto md:mx-0' : ''}>
              <div className="cyber-card-compact group text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-glow !w-10 !h-10 shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-xl md:text-2xl font-black neon-text-cyan font-cyber opacity-40">{number}</span>
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── Why Choose ── */
const whyChoose = [
  { title: "Fast Service", description: "Quick and efficient help for account recovery issues.", icon: Zap },
  { title: "Secure Process", description: "Your account information stays private and protected.", icon: Shield },
  { title: "Focused Expertise", description: "Specialized in Facebook and Instagram account issues.", icon: Target },
];

const WhyChoose = () => (
  <section className="py-16 md:py-36 relative overflow-hidden bg-background">
    <div className="cyber-grid-bg absolute inset-0 opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <FadeIn>
        <div className="text-center mb-10 md:mb-20 space-y-2 md:space-y-4">
          <p className="text-primary font-cyber font-semibold text-[10px] uppercase tracking-[0.25em]">// Why Us</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground heading-cyber tracking-tight">Why Choose My Service</h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
        {whyChoose.map(({ title, description, icon: Icon }, i) => (
          <FadeIn key={title} className={i === 2 ? 'col-span-2 md:col-span-1 max-w-[50%] md:max-w-none mx-auto md:mx-0' : ''}>
            <div className="cyber-card-compact group text-left">
              <div className="mb-3">
                <div className="icon-glow !w-10 !h-10">
                  <Icon size={18} className="text-primary" />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-foreground mb-1 flex items-center gap-1.5">
                <span className="neon-text text-xs">✔</span> {title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ── FAQ ── */
const faqs = [
  { question: "How long does the recovery process take?", answer: "The time depends on the type of issue.", icon: Clock },
  { question: "Is my account information safe?", answer: "Yes, your information is kept private and secure.", icon: LockKeyhole },
  { question: "How do I contact you?", answer: "You can contact directly through WhatsApp.", icon: HelpCircle },
];

const FAQ = () => (
  <section className="py-16 md:py-36 relative overflow-hidden" style={{ background: 'hsl(224 55% 4%)' }}>
    <div className="cyber-grid-bg absolute inset-0 opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <FadeIn>
        <div className="text-center mb-10 md:mb-20 space-y-2 md:space-y-4">
          <p className="text-primary font-cyber font-semibold text-[10px] uppercase tracking-[0.25em]">// FAQ</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground heading-cyber tracking-tight">Frequently Asked Questions</h2>
        </div>
      </FadeIn>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ question, answer, icon: Icon }, i) => (
            <FadeIn key={i}>
              <AccordionItem value={`faq-${i}`} className="border-none">
                <div className="faq-card">
                  <AccordionTrigger className="hover:no-underline py-0 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="icon-glow !w-9 !h-9 shrink-0">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-bold text-foreground text-left">{question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12 pt-2 pb-0">
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{answer}</p>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

/* ── Contact ── */
const Contact = () => (
  <section id="contact" className="relative overflow-hidden bg-background" style={{ padding: '40px 20px' }}>
    <div className="cyber-grid-bg absolute inset-0 opacity-30" />
    <div className="container mx-auto max-w-xl relative z-10">
      <FadeIn>
        <div className="text-center space-y-1 mb-6">
          <p className="text-primary font-cyber font-semibold text-[10px] uppercase tracking-[0.25em]">// Contact</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground heading-cyber tracking-tight">Get In Touch</h2>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-2.5 max-w-sm mx-auto">
        {/* Email */}
        <FadeIn>
          <a href="mailto:ibmm923@gmail.com" className="group flex items-center gap-3 rounded-lg border border-primary/10 bg-secondary/30 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300" style={{ padding: '12px 16px' }}>
            <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_12px_hsl(168_100%_50%_/_0.2)] transition-shadow">
              <Mail size={18} className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-[9px] uppercase tracking-wider font-cyber">Email</span>
              <span className="text-primary text-xs font-semibold">ibmm923@gmail.com</span>
            </div>
          </a>
        </FadeIn>

        {/* Facebook */}
        <FadeIn>
          <a href={FB} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-lg border border-primary/10 bg-secondary/30 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300" style={{ padding: '12px 16px' }}>
            <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_12px_hsl(168_100%_50%_/_0.2)] transition-shadow">
              <Facebook size={18} className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-[9px] uppercase tracking-wider font-cyber">Facebook</span>
              <span className="text-primary text-xs font-semibold">Facebook Profile</span>
            </div>
          </a>
        </FadeIn>

        {/* Telegram */}
        <FadeIn>
          <a href="https://t.me/ibrahimbd10" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-lg border border-primary/10 bg-secondary/30 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300" style={{ padding: '12px 16px' }}>
            <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_12px_hsl(168_100%_50%_/_0.2)] transition-shadow">
              <Send size={18} className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-[9px] uppercase tracking-wider font-cyber">Telegram</span>
              <span className="text-primary text-xs font-semibold">Message on Telegram</span>
            </div>
          </a>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="flex justify-center mt-5">
          <a href="mailto:ibmm923@gmail.com" className="btn-neon !text-[10px] !px-6 !py-2.5" style={{ height: '42px' }}>
            <ShieldCheck size={14} /> Start Recovery Now
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ── Tools Section ── */
const ToolsSection = () => (
  <section className="py-16 md:py-28 relative overflow-hidden bg-background">
    <div className="cyber-grid-bg absolute inset-0 opacity-20" />
    <CyberParticles />
    <div className="container mx-auto px-4 max-w-2xl relative z-10">
      <FadeIn>
        <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-12">
          <p className="text-primary font-cyber font-semibold text-[10px] uppercase tracking-[0.25em]">// Tools</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground heading-cyber tracking-tight">
            <span className="gradient-text">🔥 Tools Hub</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto">Fun & useful online tools — stylish text, fake chat, bio generator and more.</p>
        </div>
      </FadeIn>

      <FadeIn>
        <a
          href="/tools/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block cyber-card hover:!border-primary/50 transition-all duration-500 !p-6 md:!p-8"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="icon-glow !w-16 !h-16 group-hover:!shadow-[0_0_30px_hsl(168_100%_50%_/_0.4)] transition-all duration-500">
              <Flame size={28} className="text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-foreground heading-cyber">Try My Tools</h3>
              <p className="text-muted-foreground text-xs md:text-sm">10+ free online tools — Name Styler, Fake Chat, Bio Generator, Love Calculator & more!</p>
            </div>
            <span className="btn-neon !text-[10px] !px-8 !py-3 md:!px-10 md:!py-3.5 group-hover:scale-105 transition-transform">
              <ExternalLink size={14} /> Open Tools Hub
            </span>
          </div>
        </a>
      </FadeIn>
    </div>
  </section>
);
/* ── Footer ── */
const Footer = () => (
  <footer className="border-t border-primary/10 py-8 md:py-14 bg-background">
    <div className="container mx-auto px-4 text-center space-y-3 md:space-y-5">
      <p className="text-foreground font-cyber font-bold text-sm tracking-[0.15em] uppercase neon-text">Ibrahim Mahmud</p>
      <p className="text-muted-foreground text-xs">Social Media Account Recovery Service</p>
      <div className="flex justify-center gap-6 text-xs">
        <a href="mailto:ibmm923@gmail.com" className="footer-link">Email</a>
        <a href={FB} target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
      </div>
      <p className="text-muted-foreground/30 text-[10px] pt-2 font-cyber">© 2026 Ibrahim Mahmud</p>
    </div>
  </footer>
);



/* ── Page ── */
const Index = () => (
  <>
    <Navbar />
    <Hero />
    <SectionDivider />
    <Services />
    <SectionDivider />
    <Process />
    <SectionDivider />
    <WhyChoose />
    <SectionDivider />
    <FAQ />
    <SectionDivider />
    <Contact />
    <SectionDivider />
    <ToolsSection />
    <Footer />
  </>
);

export default Index;
