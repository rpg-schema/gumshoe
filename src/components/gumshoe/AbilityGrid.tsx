import { useState } from "react";
import type { Ability } from "@/data/gumshoeData";

interface AbilityGridProps {
  abilities: Ability[];
  category: string;
}

const AbilityGrid = ({ abilities, category }: AbilityGridProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="mb-8">
      <h3 className="noir-section-title mb-4">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {abilities.map((ability) => (
          <button
            key={ability.id}
            onClick={() => setExpanded(expanded === ability.id ? null : ability.id)}
            className="noir-card p-4 text-left transition-all duration-200 hover:border-primary/30 group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-serif text-foreground font-semibold group-hover:text-primary transition-colors">
                {ability.name}
              </h4>
              {ability.tags?.map((tag) => (
                <span key={tag} className="noir-badge-accent text-[10px]">{tag}</span>
              ))}
            </div>
            <p className={`text-sm text-muted-foreground mt-2 font-body leading-relaxed transition-all duration-200 ${
              expanded === ability.id ? '' : 'line-clamp-2'
            }`}>
              {ability.description}
            </p>
            {ability.llmText && expanded === ability.id && (
              <p className="text-xs text-accent mt-2 font-body italic border-t border-border pt-2">
                {ability.llmText}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AbilityGrid;
