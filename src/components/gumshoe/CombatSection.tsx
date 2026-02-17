import { weapons, cherries } from "@/data/gumshoeData";
import { Crosshair, Star } from "lucide-react";

const CombatSection = () => (
  <div>
    {/* Weapons table */}
    <h3 className="noir-section-title mb-4">Weapons & Armor</h3>
    <div className="noir-card overflow-hidden mb-8">
      <table className="w-full text-sm font-body">
        <thead>
          <tr className="border-b border-border bg-secondary/50">
            <th className="text-left p-3 text-primary font-semibold text-xs uppercase tracking-wider">Item</th>
            <th className="text-left p-3 text-primary font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Type</th>
            <th className="text-left p-3 text-primary font-semibold text-xs uppercase tracking-wider">Stats</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map((w, i) => (
            <tr key={w.id} className={`border-b border-border/50 ${i % 2 === 0 ? '' : 'bg-secondary/20'}`}>
              <td className="p-3 font-serif text-foreground font-semibold">{w.name}</td>
              <td className="p-3 text-muted-foreground hidden sm:table-cell">{w.description}</td>
              <td className="p-3">
                <code className="text-xs text-primary">{w.stats}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Combat quick rules */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="noir-card p-4">
        <div className="flex items-center gap-2 mb-2">
          <Crosshair className="w-4 h-4 text-primary" />
          <h4 className="font-serif text-foreground font-semibold">Hit Threshold</h4>
        </div>
        <p className="text-sm text-muted-foreground font-body">Default: 3. Athletics 8+: 4. Exposed: -1. Full Cover: +1.</p>
      </div>
      <div className="noir-card p-4">
        <h4 className="font-serif text-foreground font-semibold mb-2">Damage</h4>
        <p className="text-sm text-muted-foreground font-body">Roll 1d6 + weapon modifier. Point blank firearms: +2 additional. Characters may never spend combat pool points to increase damage.</p>
      </div>
    </div>

    {/* Cherries */}
    <h3 className="noir-section-title mb-4">
      <Star className="w-4 h-4 inline mr-2 text-primary" />
      Cherries — Rating 8+ Bonuses
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {cherries.map((c, i) => (
        <div key={i} className="noir-card p-3 flex items-start gap-3">
          <span className="noir-badge text-[10px] shrink-0 mt-0.5">{c.name}</span>
          <p className="text-sm text-muted-foreground font-body">{c.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CombatSection;
