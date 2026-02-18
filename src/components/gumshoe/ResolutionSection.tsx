import { useGumshoeData } from "@/context/GumshoeContext";
import { Dice1 } from "lucide-react";

const ResolutionSection = () => {
  const { data } = useGumshoeData();
  return (
    <div>
      {/* Two systems callout */}
      <div className="noir-card p-6 mb-6 border-primary/20">
        <div className="flex items-start gap-3">
          <Dice1 className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div>
            <p className="font-serif text-foreground text-lg mb-1">Two Ability Systems</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              <strong className="text-primary">Investigative</strong> abilities never require a die roll — if you have the skill, you get the clue.{" "}
              <strong className="text-primary">General</strong> abilities use 1d6 + pool spend vs Difficulty Number for uncertain outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Roll types */}
      <div className="space-y-3 mb-8">
        {data.resolutionTypes.map((rt, i) => (
          <div key={i} className="noir-card p-4 flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="shrink-0">
              <h4 className="font-serif text-foreground font-semibold">{rt.name}</h4>
              <code className="text-xs text-primary font-body mt-1 block">{rt.expression}</code>
            </div>
            <p className="text-sm text-muted-foreground font-body sm:border-l sm:border-border sm:pl-3">
              {rt.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modifiers */}
      <h3 className="noir-section-title mb-4">Roll Modifiers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.rollModifiers.map((rm, i) => (
          <div key={i} className="noir-card p-4">
            <h4 className="font-serif text-foreground font-semibold mb-1">{rm.name}</h4>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{rm.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResolutionSection;
