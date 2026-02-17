import { corePhilosophy } from "@/data/gumshoeData";

const PhilosophyCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {corePhilosophy.map((item, i) => (
      <div key={i} className="noir-card p-5 group hover:border-primary/30 transition-all duration-200">
        <h3 className="font-serif text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {item.text}
        </p>
      </div>
    ))}
  </div>
);

export default PhilosophyCards;
