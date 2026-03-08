import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/8801922071552";

const services = [
  "Disabled Account Back",
  "Suspended Account Recovery",
  "Locked Account Unlock",
  "Hacked Account Recovery",
  "Facebook Page Access Back",
  "Page Unpublished / Restricted Fix",
  "Page Monetization Back",
  "Page Copyright / Policy Issue Fix",
  "Profile Monetization Back",
  "Reels Monetization Enable",
  "Bonus / Payout Issue Solve",
  "Business Manager Issue Fix",
  "Ad Account Disabled Back",
  "Business Verification Help",
  "Instagram Account Disabled Back",
  "Instagram Monetization Fix",
];

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <span className="text-lg font-bold text-foreground">Ibrahim Mahmud</span>
      <div className="flex items-center gap-6">
        <a href="#home" className="nav-link hidden sm:block">Home</a>
        <a href="#services" className="nav-link hidden sm:block">Services</a>
        <a href="#contact" className="nav-link hidden sm:block">Contact</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2 px-4">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="container mx-auto px-4 py-20 md:py-32">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
          Social Media<br />
          <span className="text-primary">Account Recovery</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Professional help to recover disabled, hacked, locked or restricted Facebook and Instagram accounts.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
          <MessageCircle size={20} /> Chat on WhatsApp
        </a>
      </div>
      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card border-2 border-border flex items-center justify-center text-muted-foreground text-sm">
          Your Photo Here
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s} className="service-card">
            <p className="text-sm font-medium text-foreground">{s}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4 max-w-xl text-center">
      <h2 className="section-title mb-10">Contact Me</h2>
      <div className="bg-card border border-border rounded-2xl p-8 space-y-4 text-left mb-8">
        <p className="text-foreground"><span className="text-muted-foreground">Name:</span> Ibrahim Mahmud</p>
        <p className="text-foreground"><span className="text-muted-foreground">WhatsApp:</span> +8801922071552</p>
        <p className="text-foreground"><span className="text-muted-foreground">Email:</span> ibmm923@gmail.com</p>
        <p className="text-foreground">
          <span className="text-muted-foreground">Facebook:</span>{" "}
          <a href="https://www.facebook.com/share/1angi9HKK8/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Profile</a>
        </p>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg py-4 px-10">
        <MessageCircle size={22} /> Chat on WhatsApp
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container mx-auto px-4 text-center space-y-4">
      <p className="text-foreground font-bold text-lg">Ibrahim Mahmud</p>
      <p className="text-muted-foreground text-sm">Social Media Account Recovery Service</p>
      <div className="flex justify-center gap-6 text-sm">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-link">WhatsApp</a>
        <a href="mailto:ibmm923@gmail.com" className="nav-link">Email</a>
        <a href="https://www.facebook.com/share/1angi9HKK8/" target="_blank" rel="noopener noreferrer" className="nav-link">Facebook</a>
      </div>
      <p className="text-muted-foreground text-xs">© 2026 Ibrahim Mahmud</p>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-[0_0_30px_hsl(145_65%_49%/0.5)] hover:scale-110 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
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
