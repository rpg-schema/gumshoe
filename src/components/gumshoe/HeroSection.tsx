import { Search } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 bg-gradient-to-b from-noir-shadow via-background to-background" />
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8a960' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
    
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-6">
        <Search className="w-5 h-5 text-primary" />
        <span className="noir-section-title">rpg-schema.org — System Reference Document</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary noir-glow mb-6 leading-tight">
        GUMSHOE
      </h1>
      
      <p className="font-serif text-xl md:text-2xl text-secondary-foreground max-w-2xl mx-auto italic leading-relaxed mb-8">
        "The central question is not <em>will the heroes get the information?</em> but <em>what will they do with it once they've got it?</em>"
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
        <span>Robin D. Laws</span>
        <span className="text-primary">•</span>
        <span>Pelgrane Press</span>
        <span className="text-primary">•</span>
        <span>OGL</span>
      </div>
    </div>

    {/* Bottom fade line */}
    <div className="absolute bottom-0 left-0 right-0 h-px noir-divider" />
  </section>
);

export default HeroSection;
