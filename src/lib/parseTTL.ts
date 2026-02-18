import { Parser, Store, DataFactory } from "n3";
import type {
  Ability,
  Condition,
  Weapon,
  SceneType,
  ClueType,
} from "@/data/gumshoeData";

const { namedNode } = DataFactory;

// Prefix helpers
const RPG = (local: string) => `https://rpg-schema.org/rpg/${local}`;
const GUMSHOE = (local: string) => `https://rpg-schema.org/gumshoe/${local}`;
const RDFS = (local: string) => `http://www.w3.org/2000/01/rdf-schema#${local}`;
const SKOS = (local: string) => `http://www.w3.org/2004/02/skos/core#${local}`;

// Utility: get a single literal value for a subject + predicate
function getLiteral(store: Store, subject: string, predicate: string): string {
  const quads = store.getQuads(namedNode(subject), namedNode(predicate), null, null);
  if (quads.length === 0) return "";
  return quads[0].object.value;
}

// Utility: get the first object IRI for a subject + predicate
function getObject(store: Store, subject: string, predicate: string): string {
  const quads = store.getQuads(namedNode(subject), namedNode(predicate), null, null);
  if (quads.length === 0) return "";
  return quads[0].object.value;
}

// Utility: get all objects for a subject + predicate
function getObjects(store: Store, subject: string, predicate: string): string[] {
  return store
    .getQuads(namedNode(subject), namedNode(predicate), null, null)
    .map((q) => q.object.value);
}

// Utility: get all subjects of a given rdf:type
function getSubjectsOfType(store: Store, typeIRI: string): string[] {
  return store
    .getQuads(null, namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), namedNode(typeIRI), null)
    .map((q) => q.subject.value);
}

// Utility: get all subjects that have a specific rdfs:subClassOf chain
// i.e., subjects whose rdf:type is a subclass of the given class
function getSubjectsOfSubclass(store: Store, superclassIRI: string): string[] {
  // find all classes that are subclasses of superclassIRI
  const subclasses = store
    .getQuads(null, namedNode(RDFS("subClassOf")), namedNode(superclassIRI), null)
    .map((q) => q.subject.value);

  const results: string[] = [];
  for (const sc of subclasses) {
    const instances = getSubjectsOfType(store, sc);
    results.push(...instances);
  }
  return results;
}

// Get llmText for an ability: first LLMArtifact's artifactText
function getLLMText(store: Store, subjectIRI: string): string | undefined {
  const artifactIRIs = getObjects(store, subjectIRI, RPG("hasLLMArtifact"));
  for (const aIRI of artifactIRIs) {
    const text = getLiteral(store, aIRI, RPG("artifactText"));
    if (text) return text;
  }
  return undefined;
}

// Check if a subject has a specific tag
function hasTag(store: Store, subjectIRI: string, tagIRI: string): boolean {
  const tags = getObjects(store, subjectIRI, RPG("hasTag"));
  return tags.includes(tagIRI);
}

// Convert a fully-qualified IRI to a short camelCase ID
function iriToId(iri: string): string {
  const local = iri.split("/").pop() || iri.split("#").pop() || iri;
  // camelCase the first character
  return local.charAt(0).toLowerCase() + local.slice(1);
}

// Parse abilities of a given class IRI
function parseAbilitiesOfClass(store: Store, classIRI: string): Ability[] {
  const subjects = getSubjectsOfType(store, classIRI);
  return subjects.map((s) => ({
    id: iriToId(s),
    name: getLiteral(store, s, RPG("name")),
    description: getLiteral(store, s, RPG("description")),
    llmText: getLLMText(store, s),
    tags: hasTag(store, s, GUMSHOE("Tag_Exotic")) ? ["Exotic"] : undefined,
  })).filter((a) => a.name);
}

export interface ParsedGumshoeData {
  academicAbilities: Ability[];
  interpersonalAbilities: Ability[];
  technicalAbilities: Ability[];
  generalAbilities: Ability[];
  conditions: Condition[];
  mentalIllnesses: Condition[];
  weapons: Weapon[];
  sceneTypes: SceneType[];
  clueTypes: ClueType[];
  corePhilosophy: { title: string; text: string }[];
  resolutionTypes: { name: string; expression: string; description: string }[];
  rollModifiers: { name: string; description: string }[];
  cherries: { name: string; description: string }[];
}

export async function parseGumshoeData(ttlUrl: string): Promise<ParsedGumshoeData> {
  const response = await fetch(ttlUrl);
  const ttlText = await response.text();

  const store = new Store();
  const parser = new Parser({ baseIRI: "https://rpg-schema.org/gumshoe/" });

  await new Promise<void>((resolve, reject) => {
    parser.parse(ttlText, (error, quad) => {
      if (error) reject(error);
      else if (quad) store.addQuad(quad);
      else resolve();
    });
  });

  // --- Abilities ---
  const academicAbilities = parseAbilitiesOfClass(store, GUMSHOE("AcademicAbility"));
  const interpersonalAbilities = parseAbilitiesOfClass(store, GUMSHOE("InterpersonalAbility"));
  const technicalAbilities = parseAbilitiesOfClass(store, GUMSHOE("TechnicalAbility"));
  const generalAbilities = parseAbilitiesOfClass(store, GUMSHOE("GeneralAbility"));

  // --- Conditions ---
  const conditionSubjects = getSubjectsOfType(store, RPG("Condition"));

  const healthConditionIDs = ["Hurt", "SeriouslyWounded", "Dead", "Surprised"];
  const mentalIllnessIDs = ["PTSD", "Delusion", "HomicidalMania", "Megalomania", "MultiplePersonality", "Paranoia", "SelectiveAmnesia"];

  const conditions: Condition[] = conditionSubjects
    .map((s) => ({
      id: iriToId(s),
      name: getLiteral(store, s, RPG("name")),
      description: getLiteral(store, s, RPG("description")),
      llmText: getLLMText(store, s),
    }))
    .filter((c) => c.name && (
      healthConditionIDs.some(id => c.name.replace(/\s/g, "") === id || 
        c.id.toLowerCase().includes(id.toLowerCase()))
    ));

  const mentalIllnesses: Condition[] = conditionSubjects
    .map((s) => ({
      id: iriToId(s),
      name: getLiteral(store, s, RPG("name")),
      description: getLiteral(store, s, RPG("description")),
      llmText: getLLMText(store, s),
    }))
    .filter((c) => c.name && (
      mentalIllnessIDs.some(id => c.id.toLowerCase().includes(id.toLowerCase()) ||
        c.name.replace(/\s/g, "").toLowerCase() === id.toLowerCase())
    ));

  // --- Weapons ---
  const weaponSubjects = getSubjectsOfType(store, RPG("Item"));
  const weapons: Weapon[] = weaponSubjects.map((s) => {
    const llmDesc = getLiteral(store, s, RPG("llmDescriptor"));
    return {
      id: iriToId(s),
      name: getLiteral(store, s, RPG("name")),
      description: getLiteral(store, s, RPG("description")),
      stats: llmDesc,
    };
  }).filter((w) => w.name);

  // --- Scene Types ---
  const sceneTypeSubjects = store
    .getQuads(null, namedNode(SKOS("inScheme")), namedNode(GUMSHOE("SceneTypeScheme")), null)
    .map((q) => q.subject.value);

  const sceneTypes: SceneType[] = sceneTypeSubjects.map((s) => ({
    id: iriToId(s),
    name: getLiteral(store, s, SKOS("prefLabel")),
    description: getLiteral(store, s, RPG("description")),
    llmText: getLLMText(store, s),
  })).filter((st) => st.name);

  // --- Clue Types ---
  const clueTypeSubjects = store
    .getQuads(null, namedNode(SKOS("inScheme")), namedNode(GUMSHOE("ClueTypeScheme")), null)
    .map((q) => q.subject.value);

  const clueTypes: ClueType[] = clueTypeSubjects.map((s) => ({
    id: iriToId(s),
    name: getLiteral(store, s, SKOS("prefLabel")),
    description: getLiteral(store, s, RPG("description")),
    llmText: getLLMText(store, s),
  })).filter((ct) => ct.name);

  // --- Core Philosophy (from LLM_CorePhilosophy artifact text, parse markdown headings) ---
  const philoArtifactIRI = GUMSHOE("LLM_CorePhilosophy");
  const philoText = getLiteral(store, philoArtifactIRI, RPG("artifactText"));

  const corePhilosophy: { title: string; text: string }[] = [];
  const philoLines = philoText.split("\n");
  for (let i = 0; i < philoLines.length; i++) {
    const line = philoLines[i].trim();
    if (line.startsWith("## ")) {
      const title = line.replace("## ", "").trim();
      const textLines: string[] = [];
      let j = i + 1;
      while (j < philoLines.length && !philoLines[j].trim().startsWith("## ")) {
        if (philoLines[j].trim()) textLines.push(philoLines[j].trim());
        j++;
      }
      if (title && textLines.length > 0) {
        corePhilosophy.push({ title, text: textLines.join(" ") });
      }
    }
  }

  // --- Resolution Types (from Roll subjects) ---
  const rollSubjects = getSubjectsOfType(store, RPG("Roll"));
  const resolutionTypes = rollSubjects.map((s) => ({
    name: getLiteral(store, s, RPG("name")),
    expression: getLiteral(store, s, RPG("rollExpression")),
    description: getLiteral(store, s, RPG("description")),
  })).filter((r) => r.name);

  // --- Roll Modifiers (from FictionKnob/Modifier subjects) ---
  const modifierSubjects = getSubjectsOfType(store, RPG("RollModifier"));
  const rollModifiers = modifierSubjects.map((s) => ({
    name: getLiteral(store, s, RPG("name")),
    description: getLiteral(store, s, RPG("description")),
  })).filter((m) => m.name);

  // --- Cherries (from Feature subjects) ---
  const featureSubjects = getSubjectsOfType(store, RPG("Feature"));
  const cherries = featureSubjects.map((s) => ({
    name: getLiteral(store, s, RPG("name")),
    description: getLiteral(store, s, RPG("description")),
  })).filter((c) => c.name);

  return {
    academicAbilities,
    interpersonalAbilities,
    technicalAbilities,
    generalAbilities,
    conditions,
    mentalIllnesses,
    weapons,
    sceneTypes,
    clueTypes,
    corePhilosophy,
    resolutionTypes,
    rollModifiers,
    cherries,
  };
}
