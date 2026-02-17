import HeroSection from "@/components/gumshoe/HeroSection";
import NavBar from "@/components/gumshoe/NavBar";
import SectionHeader from "@/components/gumshoe/SectionHeader";
import PhilosophyCards from "@/components/gumshoe/PhilosophyCards";
import ResolutionSection from "@/components/gumshoe/ResolutionSection";
import AbilityGrid from "@/components/gumshoe/AbilityGrid";
import CombatSection from "@/components/gumshoe/CombatSection";
import ConditionsSection from "@/components/gumshoe/ConditionsSection";
import ScenarioSection from "@/components/gumshoe/ScenarioSection";
import {
  academicAbilities,
  interpersonalAbilities,
  technicalAbilities,
  generalAbilities,
} from "@/data/gumshoeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Philosophy */}
        <section id="philosophy">
          <SectionHeader
            number="01"
            title="Core Philosophy"
            subtitle="The foundational principles that make GUMSHOE tick"
          />
          <PhilosophyCards />
        </section>

        {/* Resolution */}
        <section id="resolution">
          <SectionHeader
            number="02"
            title="Resolution System"
            subtitle="How dice and pool spends determine uncertain outcomes"
          />
          <ResolutionSection />
        </section>

        {/* Investigative Abilities */}
        <section id="investigative">
          <SectionHeader
            number="03"
            title="Investigative Abilities"
            subtitle="No die roll ever — if you have the skill, you get the clue"
          />
          <AbilityGrid abilities={academicAbilities} category="Academic" />
          <AbilityGrid abilities={interpersonalAbilities} category="Interpersonal" />
          <AbilityGrid abilities={technicalAbilities} category="Technical" />
        </section>

        {/* General Abilities */}
        <section id="general">
          <SectionHeader
            number="04"
            title="General Abilities"
            subtitle="1d6 + pool spend vs Difficulty — these keep you alive"
          />
          <AbilityGrid abilities={generalAbilities} category="All General Abilities" />
        </section>

        {/* Combat */}
        <section id="combat">
          <SectionHeader
            number="05"
            title="Combat & Equipment"
            subtitle="Weapons, armor, hit thresholds, and cherries"
          />
          <CombatSection />
        </section>

        {/* Conditions */}
        <section id="conditions">
          <SectionHeader
            number="06"
            title="Conditions & States"
            subtitle="What happens when your pools run dry"
          />
          <ConditionsSection />
        </section>

        {/* Scenarios */}
        <section id="scenarios">
          <SectionHeader
            number="07"
            title="Scenario Design"
            subtitle="Scenes, clues, and the trail of investigation"
          />
          <ScenarioSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground font-body">
          GUMSHOE SRD by Robin D. Laws · Published by Pelgrane Press · Encoded as{" "}
          <a href="/gumshoe_srd.ttl" className="text-primary hover:underline">rpg-schema TTL</a>
          {" "}· OGL
        </p>
      </footer>
    </div>
  );
};

export default Index;
