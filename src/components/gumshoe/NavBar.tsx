import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const sections = [
  { id: "philosophy", label: "Philosophy" },
  { id: "resolution", label: "Resolution" },
  { id: "investigative", label: "Investigative" },
  { id: "general", label: "General" },
  { id: "combat", label: "Combat" },
  { id: "conditions", label: "Conditions" },
  { id: "scenarios", label: "Scenarios" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-12">
        <span className="font-display text-primary text-sm tracking-wider">GUMSHOE SRD</span>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {s.label}
            </button>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          <a
            href="/gumshoe_srd.ttl"
            download="gumshoe_srd.ttl"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <Download className="w-3.5 h-3.5" />
            TTL
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-primary">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 transition-colors font-body"
            >
              {s.label}
            </button>
          ))}
          <div className="h-px bg-border mx-6 my-1" />
          <a
            href="/gumshoe_srd.ttl"
            download="gumshoe_srd.ttl"
            className="flex items-center gap-2 w-full px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 transition-colors font-body"
          >
            <Download className="w-4 h-4" />
            Download TTL
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
