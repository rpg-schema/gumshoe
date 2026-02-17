import { sceneTypes, clueTypes } from "@/data/gumshoeData";
import { Map, Fingerprint } from "lucide-react";

const ScenarioSection = () => (
  <div>
    {/* Scene Types */}
    <div className="flex items-center gap-2 mb-4">
      <Map className="w-4 h-4 text-primary" />
      <h3 className="noir-section-title">Scene Types</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
      {sceneTypes.map(st => (
        <div key={st.id} className="noir-card p-4 hover:border-primary/30 transition-all duration-200">
          <h4 className="font-serif text-foreground font-semibold mb-1">{st.name}</h4>
          <p className="text-xs text-muted-foreground font-body leading-relaxed">{st.description}</p>
        </div>
      ))}
    </div>

    {/* Clue Types */}
    <div className="flex items-center gap-2 mb-4">
      <Fingerprint className="w-4 h-4 text-primary" />
      <h3 className="noir-section-title">Clue Types</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {clueTypes.map(ct => (
        <div key={ct.id} className="noir-card p-4 hover:border-primary/30 transition-all duration-200">
          <h4 className="font-serif text-foreground font-semibold mb-1">{ct.name}</h4>
          <p className="text-xs text-muted-foreground font-body leading-relaxed">{ct.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ScenarioSection;
