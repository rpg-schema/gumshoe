import React, { createContext, useContext, useEffect, useState } from "react";
import { parseGumshoeData, type ParsedGumshoeData } from "@/lib/parseTTL";
import {
  corePhilosophy as fallbackPhilosophy,
  resolutionTypes as fallbackResolution,
  rollModifiers as fallbackModifiers,
  academicAbilities as fallbackAcademic,
  interpersonalAbilities as fallbackInterpersonal,
  technicalAbilities as fallbackTechnical,
  generalAbilities as fallbackGeneral,
  conditions as fallbackConditions,
  mentalIllnesses as fallbackMentalIllnesses,
  weapons as fallbackWeapons,
  sceneTypes as fallbackSceneTypes,
  clueTypes as fallbackClueTypes,
  cherries as fallbackCherries,
} from "@/data/gumshoeData";

interface GumshoeContextValue {
  data: ParsedGumshoeData;
  loading: boolean;
  error: string | null;
  source: "ttl" | "static";
}

const defaultData: ParsedGumshoeData = {
  corePhilosophy: fallbackPhilosophy,
  resolutionTypes: fallbackResolution,
  rollModifiers: fallbackModifiers,
  academicAbilities: fallbackAcademic,
  interpersonalAbilities: fallbackInterpersonal,
  technicalAbilities: fallbackTechnical,
  generalAbilities: fallbackGeneral,
  conditions: fallbackConditions,
  mentalIllnesses: fallbackMentalIllnesses,
  weapons: fallbackWeapons,
  sceneTypes: fallbackSceneTypes,
  clueTypes: fallbackClueTypes,
  cherries: fallbackCherries,
};

const GumshoeContext = createContext<GumshoeContextValue>({
  data: defaultData,
  loading: true,
  error: null,
  source: "static",
});

export const GumshoeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ParsedGumshoeData>(defaultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"ttl" | "static">("static");

  useEffect(() => {
    parseGumshoeData("/gumshoe_srd.ttl")
      .then((parsed) => {
        // Merge with fallback for any empty arrays (e.g., if TTL parsing yields nothing)
        setData({
          corePhilosophy: parsed.corePhilosophy.length ? parsed.corePhilosophy : fallbackPhilosophy,
          resolutionTypes: parsed.resolutionTypes.length ? parsed.resolutionTypes : fallbackResolution,
          rollModifiers: parsed.rollModifiers.length ? parsed.rollModifiers : fallbackModifiers,
          academicAbilities: parsed.academicAbilities.length ? parsed.academicAbilities : fallbackAcademic,
          interpersonalAbilities: parsed.interpersonalAbilities.length ? parsed.interpersonalAbilities : fallbackInterpersonal,
          technicalAbilities: parsed.technicalAbilities.length ? parsed.technicalAbilities : fallbackTechnical,
          generalAbilities: parsed.generalAbilities.length ? parsed.generalAbilities : fallbackGeneral,
          conditions: parsed.conditions.length ? parsed.conditions : fallbackConditions,
          mentalIllnesses: parsed.mentalIllnesses.length ? parsed.mentalIllnesses : fallbackMentalIllnesses,
          weapons: parsed.weapons.length ? parsed.weapons : fallbackWeapons,
          sceneTypes: parsed.sceneTypes.length ? parsed.sceneTypes : fallbackSceneTypes,
          clueTypes: parsed.clueTypes.length ? parsed.clueTypes : fallbackClueTypes,
          cherries: parsed.cherries.length ? parsed.cherries : fallbackCherries,
        });
        setSource("ttl");
      })
      .catch((err) => {
        console.error("Failed to parse TTL, using static fallback:", err);
        setError(err?.message ?? "TTL parse failed");
        setSource("static");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <GumshoeContext.Provider value={{ data, loading, error, source }}>
      {children}
    </GumshoeContext.Provider>
  );
};

export const useGumshoeData = () => useContext(GumshoeContext);
