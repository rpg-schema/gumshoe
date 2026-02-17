import { conditions, mentalIllnesses } from "@/data/gumshoeData";
import { Heart, Brain } from "lucide-react";

const ConditionsSection = () => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Physical */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-4 h-4 text-noir-blood" />
          <h3 className="noir-section-title !text-noir-blood">Health Thresholds</h3>
        </div>
        <div className="space-y-2">
          {conditions.filter(c => ["hurt", "seriouslyWounded", "dead", "surprised"].includes(c.id)).map(c => (
            <div key={c.id} className="noir-card p-3">
              <div className="flex items-center gap-2">
                <span className={`noir-badge-blood text-[10px]`}>{c.name}</span>
              </div>
              <p className="text-sm text-muted-foreground font-body mt-1">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mental */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-4 h-4 text-accent" />
          <h3 className="noir-section-title !text-accent">Stability Thresholds</h3>
        </div>
        <div className="space-y-2">
          {conditions.filter(c => ["shaken", "mentallyIll", "incurablyInsane"].includes(c.id)).map(c => (
            <div key={c.id} className="noir-card p-3">
              <span className="noir-badge-accent text-[10px]">{c.name}</span>
              <p className="text-sm text-muted-foreground font-body mt-1">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Mental Illnesses */}
    <h3 className="noir-section-title mb-4">Supernatural Mental Illnesses</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {mentalIllnesses.map(mi => (
        <div key={mi.id} className="noir-card p-3">
          <h4 className="font-serif text-foreground font-semibold text-sm">{mi.name}</h4>
          <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{mi.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ConditionsSection;
