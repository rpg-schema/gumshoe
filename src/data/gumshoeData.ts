// Parsed GUMSHOE SRD data from TTL ontology

export interface Ability {
  id: string;
  name: string;
  description: string;
  llmText?: string;
  tags?: string[];
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  llmText?: string;
}

export interface Weapon {
  id: string;
  name: string;
  description: string;
  stats: string;
}

export interface SceneType {
  id: string;
  name: string;
  description: string;
  llmText?: string;
}

export interface ClueType {
  id: string;
  name: string;
  description: string;
  llmText?: string;
}

export const corePhilosophy = [
  { title: "Never Withhold Core Clues", text: "If a PC has the right ability and is in the right place, they get the clue. Period. No roll required." },
  { title: "Failure Is Not Interesting", text: "In source fiction, investigators don't fail to use their expertise. The drama comes AFTER the clues are found." },
  { title: "Spends Are Spotlight Moments", text: "When a player spends investigative pool points, they're buying a moment of cool competence." },
  { title: "General Tests Create Suspense", text: "Reserve tests for dramatically important moments. Most general ability uses should succeed automatically." },
  { title: "Never Reveal Difficulty Numbers", text: "Players must decide blind how many points to commit. This creates tension and meaningful resource management." },
  { title: "Follow the Players", text: "If players invest in a theory, consider adapting rather than negating. Make them half-right." },
];

export const resolutionTypes = [
  { name: "Simple Test", expression: "1d6 + pool spend ≥ Difficulty (default 4)", description: "A test against a fixed Difficulty with no active opposition." },
  { name: "Contest", expression: "Alternating 1d6 + pool spend ≥ Difficulty; first failure loses", description: "Two characters alternate tests. First to fail loses." },
  { name: "Toll Test", expression: "1d6 (no pre-spend); then decide to pay gap to DN 6+", description: "Success is assured if you pay the cost. Roll first, then decide." },
  { name: "Zero Sum Contest", expression: "All PCs roll 1d6 + secret spend; best/worst takes outcome", description: "Something bad or good will happen to one PC." },
  { name: "Continuing Challenge", expression: "Series of tests at DN 4; accumulate vs obstacle pool (8+)", description: "A prolonged effort against an obstacle with a total difficulty pool." },
];

export const rollModifiers = [
  { name: "Piggybacking", description: "Group action: leader rolls, others pay 1 pool point. Non-payers increase Difficulty by 2 each." },
  { name: "Cooperation", description: "Two characters: leader rolls + spends freely, assistant spends N points but only N-1 add to the roll." },
  { name: "Lucky Shot", description: "Once per episode, rating 0 character may attempt a test by spending up to 4 points from highest general pool. Requires unanimous player permission." },
];

export const academicAbilities: Ability[] = [
  { id: "anthropology", name: "Anthropology", description: "Expert in human cultures from stone age to Internet age. Identify artifacts/rituals, describe customs, extrapolate unknown culture practices." },
  { id: "archaeology", name: "Archaeology", description: "Excavate and study structures/artifacts of historical cultures. Tell burial age, identify artifacts, distinguish fakes, navigate ruins." },
  { id: "architecture", name: "Architecture", description: "Know how buildings are planned and constructed. Guess what's around corners, judge material strength, identify age/style/history." },
  { id: "artHistory", name: "Art History", description: "Expert on works of art aesthetically and technically. Distinguish fakes, detect alterations, identify age by style." },
  { id: "botany", name: "Botany", description: "Study plants and fungi. Identify environment from samples, identify toxic/dangerous plants, spot plant-derived poisoning." },
  { id: "comparativeReligion", name: "Comparative Religion", description: "Study religions ancient and modern. Supply info on practices/beliefs, quote scriptures, recognize saints/gods." },
  { id: "forensicAccounting", name: "Forensic Accounting", description: "Follow the money. Distinguish legitimate from criminal enterprises, spot embezzlement, track payments to source." },
  { id: "forensicPsychology", name: "Forensic Psychology", description: "Apply psychological insight to criminal cases. Assemble perpetrator profiles from crime scene details." },
  { id: "geology", name: "Geology", description: "Expert on rocks, soils, minerals, primordial Earth history. Analyze samples, date strata, identify fossils." },
  { id: "history", name: "History", description: "Expert in recorded human history. Recognize historical allusions, recall biographies, date objects, identify period dress." },
  { id: "languages", name: "Languages", description: "Each rating point grants fluency and literacy in one additional language. May be chosen at creation or revealed during play." },
  { id: "law", name: "Law", description: "Familiar with criminal and civil law. At rating 2+, bar-certified attorney. Assess legal risks, understand jargon." },
  { id: "linguistics", name: "Linguistics", description: "Expert in language principles and structures. Decipher unknown languages, identify similar/artificial/alien languages." },
  { id: "naturalHistory", name: "Natural History", description: "Study evolution, behavior, biology of plants and animals. Detect strange behavior, identify species from samples." },
  { id: "occultStudies", name: "Occult Studies", description: "Historical study of magic, superstition, hermetic practice. Identify ritual traditions, supply occult facts. Does NOT allow working magic.", llmText: "Occult Studies is the knowledge of a detached outsider. It does NOT allow working magic or summoning supernatural entities." },
  { id: "pathology", name: "Pathology", description: "Medical examinations of living subjects. Diagnose sickness/injury causes, identify trauma extent, detect conditions." },
  { id: "research", name: "Research", description: "Find factual information from books, records, official sources. Card catalogs, Internet, contacts file." },
  { id: "textualAnalysis", name: "Textual Analysis", description: "Draw inferences about authorship by studying text content. Determine if text matches known author." },
  { id: "trivia", name: "Trivia", description: "Font of apparently useless information: celebrities, sports, geography, arts. Catch-all for obscure facts." },
];

export const interpersonalAbilities: Ability[] = [
  { id: "bullshitDetector", name: "Bullshit Detector", description: "Detect lies through interaction or close observation. Tells you THAT someone is lying, not WHAT about." },
  { id: "bureaucracy", name: "Bureaucracy", description: "Navigate bureaucratic organizations. Get sensitive info from officials, gain false credentials, find decision-makers." },
  { id: "copTalk", name: "Cop Talk", description: "Speak police lingo and make cops feel comfortable. Ply for confidential info, get excused for minor infractions." },
  { id: "flattery", name: "Flattery", description: "Get people to help by complimenting them. Reveal information, perform minor favors, regard you as trustworthy." },
  { id: "flirting", name: "Flirting", description: "Win cooperation from people who find you sexually attractive. High rating may mean physical allure or magnetism." },
  { id: "highSociety", name: "High Society", description: "Navigate rich and famous circles. Dress appropriately, get past velvet ropes, schmooze for introductions." },
  { id: "impersonate", name: "Impersonate", description: "Pose as another person. Brief voice mimicry costs 1+ spend. Face-to-face impersonation costs 2-3 points per 5 min." },
  { id: "inspiration", name: "Inspiration", description: "Convince reluctant witnesses by appealing to their better selves. Intuitively sense their positive values." },
  { id: "interrogation", name: "Interrogation", description: "Extract information in formal police-style interviews. Requires official setting where subject feels under threat." },
  { id: "intimidation", name: "Intimidation", description: "Elicit cooperation through physical imposing presence and psychological dominance." },
  { id: "negotiation", name: "Negotiation", description: "Make deals, convince others your best arrangement is also theirs. Haggle, mediate, swap favors." },
  { id: "oralHistory", name: "Oral History", description: "Find willing sources, win confidence, gather oral testimony about events, traditions, folklore, legends." },
  { id: "reassurance", name: "Reassurance", description: "Put people at ease. Elicit information and minor favors, allay fear or panic, instill calm." },
  { id: "respect", name: "Respect", description: "Gain information through culturally appropriate shows of respect for authority figures." },
  { id: "streetwise", name: "Streetwise", description: "Navigate the criminal underworld. Deploy criminal etiquette, identify unsafe locations, gather rumors." },
  { id: "tradecraft", name: "Tradecraft", description: "Conventional espionage techniques. Dead drops, brush passes, identify agencies, covert ops rumors." },
];

export const technicalAbilities: Ability[] = [
  { id: "astronomy", name: "Astronomy", description: "Study celestial objects. Decipher astrological texts, plot constellation movement." },
  { id: "ballistics", name: "Ballistics", description: "Process firearm evidence. Identify caliber/type of bullets/casings, match guns to bullets." },
  { id: "camping", name: "Camping", description: "Working and living outdoors. Detect strange animal behavior, find edible plants, track people/animals." },
  { id: "chemistry", name: "Chemistry", description: "Analysis of chemical substances. Identify drugs, toxins, viruses. Match samples to scenes." },
  { id: "craft", name: "Craft", description: "Create useful physical objects. Focus is utility not art. May discover secret compartments." },
  { id: "cryptography", name: "Cryptography", description: "Making and breaking codes, from old-school ciphers to supercomputer algorithms." },
  { id: "dataRetrieval", name: "Data Retrieval", description: "Use technology to recover hidden/erased files, enhance audio recordings, find high-res images." },
  { id: "documentAnalysis", name: "Document Analysis", description: "Study physical documents. Determine age, identify paper, detect forgeries, identify handwriting." },
  { id: "electronicSurveillance", name: "Electronic Surveillance", description: "Use sound recording equipment. Trace calls, plant/locate listening devices, enhance recordings." },
  { id: "evidenceCollection", name: "Evidence Collection", description: "Find, bag, and tag clues. Spot objects of interest, reconstruct event sequences." },
  { id: "explosiveDevices", name: "Explosive Devices", description: "Expert in bombs and booby-traps. Defuse, reconstruct, determine materials and sophistication." },
  { id: "fingerprinting", name: "Fingerprinting", description: "Find, transfer, and match fingerprints. Includes computer database comparison." },
  { id: "forensicAnthropology", name: "Forensic Anthropology", description: "Autopsies to determine cause of death. Identify weapons, detect intoxicants, DNA analysis." },
  { id: "forensicEntomology", name: "Forensic Entomology", description: "Study insect activity on corpses. Determine time of death and identify crime scene." },
  { id: "locksmith", name: "Locksmith", description: "Open doors/locks and disarm alarms. Locks holding clues should never be impassable." },
  { id: "photography", name: "Photography", description: "Proficient with cameras. Take visual records, spot manipulation, realistically retouch." },
  { id: "trafficAnalysis", name: "Traffic Analysis", description: "Extract meaning from mass data. Analyze records, find patterns/anomalies, map networks." },
  { id: "analyticTaste", name: "Analytic Taste", description: "Superhuman sense of taste functioning as a walking chemical lab. Not poison-immune.", tags: ["Exotic"] },
  { id: "auraReading", name: "Aura Reading", description: "See energy nimbus around living organisms. Read emotional state or detect health/supernatural influence.", tags: ["Exotic"] },
];

export const generalAbilities: Ability[] = [
  { id: "athletics", name: "Athletics", description: "Physical derring-do: running, jumping, dodging. Cherry: Hit Threshold becomes 4 at rating 8+." },
  { id: "businessAffairs", name: "Business Affairs", description: "Run a profitable business." },
  { id: "conceal", name: "Conceal", description: "Hide things from view and search. Camouflage, secret compartments, alter visual signature." },
  { id: "disguise", name: "Disguise", description: "Alter your appearance, posture, and voice. Voice mimicry DN 4. Face-to-face DN 7 per 5 min." },
  { id: "driving", name: "Driving", description: "Skilled defensive driver. Pursue/evade, avoid collisions, spot tampering, emergency repairs." },
  { id: "explosives", name: "Explosives", description: "Bombs and booby-traps. Defuse, handle unstable materials, blow safes, mix compounds." },
  { id: "filch", name: "Filch", description: "Unobtrusively manipulate small objects. Pilfer clues, pick pockets, plant objects." },
  { id: "fleeing", name: "Fleeing", description: "Run like hell when chased. Half-price if Fleeing rating > 2× Athletics." },
  { id: "gambling", name: "Gambling", description: "All forms of gambling. Win/lose strategically, spot/perform cheating." },
  { id: "health", name: "Health", description: "Sustain injuries, resist infection, survive toxins. Start with 1 free point." },
  { id: "hypnosis", name: "Hypnosis", description: "Medical hypnosis (not mind control). Willing subjects only. Trance DN 3, memories DN 4." },
  { id: "infiltration", name: "Infiltration", description: "Get into and out of places undetected. Pick locks, evade security, move silently." },
  { id: "mechanics", name: "Mechanics", description: "Build, repair, disable devices. Jury-rig from scrap." },
  { id: "medic", name: "Medic", description: "First aid. Spend Medic points to restore Health (2:1 ratio). Cherry: Medic 8+ grants Pathology 1." },
  { id: "piloting", name: "Piloting", description: "Fly airborne vehicles. Pursue/evade, anticipate weather, navigate." },
  { id: "preparedness", name: "Preparedness", description: "Produce needed gear from your kit on a successful test. Obvious items require no test." },
  { id: "publicRelations", name: "Public Relations", description: "Manage public image. Unruffle feathers, burnish reputations, downplay failures." },
  { id: "riding", name: "Riding", description: "Gifted equestrian. Mounted pursuit, care for mounts, wield weapons while riding." },
  { id: "scuffling", name: "Scuffling", description: "Hand-to-hand fighting: kill, knock out, restrain, or evade opponents." },
  { id: "senseTrouble", name: "Sense Trouble", description: "Spot signs of danger. Only one PC attempts per source. Difficulty never revealed." },
  { id: "shooting", name: "Shooting", description: "Adept with firearms." },
  { id: "shrink", name: "Shrink", description: "Provide comfort to the mentally troubled. Spend Shrink points to restore Stability (2:1 ratio)." },
  { id: "stability", name: "Stability", description: "Resistance to psychological trauma. Start with 1 free point." },
  { id: "surveillance", name: "Surveillance", description: "Follow suspects undetected. Cherry: 8+ grants Electronic Surveillance 1 free." },
  { id: "bloodSpray", name: "Blood Spray", description: "Mutant ranged attack: high-pressure blood spray. Costs 3 Health per use.", tags: ["Exotic"] },
  { id: "pathwayAmplification", name: "Pathway Amplification", description: "Heighten another mind's recall. Once per episode, add your rating to a PC's investigative pool.", tags: ["Exotic"] },
];

export const conditions: Condition[] = [
  { id: "hurt", name: "Hurt", description: "Health 0 to -5. Superficial injuries. Cannot spend on Investigative abilities. All Difficulties +1." },
  { id: "seriouslyWounded", name: "Seriously Wounded", description: "Health -6 to -11. Consciousness roll required. Cannot fight. Loses 1 Health/30min without first aid." },
  { id: "dead", name: "Dead", description: "Health -12 or below. Character is dead. Create replacement." },
  { id: "shaken", name: "Shaken", description: "Stability 0 to -5. All general Difficulties +1. Investigative spends require a Stability test." },
  { id: "mentallyIll", name: "Mentally Ill", description: "Stability -6 to -11. Acquire a mental illness. Permanently lose 1 Stability rating." },
  { id: "incurablyInsane", name: "Incurably Insane", description: "Stability -12 or below. One last crazy act, then character is retired." },
  { id: "surprised", name: "Surprised", description: "+2 to all general ability Difficulties for the immediately subsequent action." },
];

export const mentalIllnesses: Condition[] = [
  { id: "ptsd", name: "PTSD", description: "From mundane trauma. Haunted by dreams, constant anxiety. DN 4 on reminder stimuli." },
  { id: "delusion", name: "Delusion", description: "A mundane detail of reality is erased. Other PCs and NPCs deny its existence." },
  { id: "homicidalMania", name: "Homicidal Mania", description: "Believes one other PC is a supernatural creature and knows how to kill them." },
  { id: "megalomania", name: "Megalomania", description: "Failures are perceived as successes. GM describes reality to other players separately." },
  { id: "multiplePersonality", name: "Multiple Personality", description: "At moments of stress, another player takes control as a different personality." },
  { id: "paranoia", name: "Paranoia", description: "Other players act suspiciously, exchange notes and signals, use meaningless code words." },
  { id: "selectiveAmnesia", name: "Selective Amnesia", description: "The character has forgotten a significant true event. Everyone else references it as fact." },
];

export const weapons: Weapon[] = [
  { id: "fist", name: "Fist/Kick", description: "Unarmed attack", stats: "Damage: -2 · Melee · Scuffling" },
  { id: "small", name: "Small Weapon", description: "Baton, knife, improvised", stats: "Damage: -1 · Melee · Scuffling" },
  { id: "medium", name: "Medium Weapon", description: "Machete, heavy club, handgun", stats: "Damage: +0 · Shooting/Scuffling" },
  { id: "heavy", name: "Heavy Weapon", description: "Sword, rifle", stats: "Damage: +1 · Point blank: +2 additional" },
  { id: "lightArmor", name: "Light Body Armor", description: "Police-grade", stats: "Bullets: -2 · Cutting: -1" },
  { id: "militaryArmor", name: "Military Armor", description: "Military-grade", stats: "Bullets: -3 · All drawbacks doubled" },
];

export const sceneTypes: SceneType[] = [
  { id: "introductory", name: "Introductory", description: "First scene. Establishes the premise. Characters rendezvous and receive their briefing." },
  { id: "core", name: "Core", description: "Contains at least one core clue necessary to complete the investigation. Avoid hard-sequencing." },
  { id: "alternate", name: "Alternate", description: "Provides useful but non-essential information. Context, detail, or elimination of red herrings." },
  { id: "antagonistReaction", name: "Antagonist Reaction", description: "Danger scene where opposition acts. May be fight, political hassle, sabotage." },
  { id: "hazard", name: "Hazard", description: "Impersonal obstacle to safety or progress. Overcome through tests or contests." },
  { id: "subPlot", name: "Sub-Plot", description: "Character interaction without direct investigation impact. Often what players remember most." },
  { id: "conclusion", name: "Conclusion", description: "Final scene: moral dilemma, physical obstacle, or both. Often a big fight." },
  { id: "hybrid", name: "Hybrid", description: "Combines types. Core clues in hybrids MUST also be available by other means." },
];

export const clueTypes: ClueType[] = [
  { id: "core", name: "Core Clue", description: "Essential to move to the next scene. Costs nothing. ALWAYS available if PC has relevant ability." },
  { id: "floatingCore", name: "Floating Core", description: "A core clue not fixed to one scene. GM decides during play when it appears for pacing control." },
  { id: "leveraged", name: "Leveraged", description: "Available only by combining an interpersonal ability with a previously gathered clue." },
  { id: "pipe", name: "Pipe", description: "Important but becomes significant much later. Creates 'eureka' moments." },
  { id: "restricted", name: "Restricted", description: "Secret/esoteric facts known only to one group member. Comes as news to all others." },
  { id: "timedResult", name: "Timed Result", description: "Lab results arriving after a delay. Can redirect or cut short a stalled scene." },
  { id: "passive", name: "Passive", description: "Obvious to a trained investigator upon entering a scene. GM provides without prompting." },
  { id: "active", name: "Active", description: "Requires player to declare use of a specific ability." },
  { id: "inconspicuous", name: "Inconspicuous", description: "Noticed instinctively in transitional scenes. Goes to highest current pool." },
  { id: "simpleSearch", name: "Simple Search", description: "Findable by any ordinary person looking in the right place. No ability required." },
];

export const cherries = [
  { name: "Athletics 8+", description: "Hit Threshold becomes 4 instead of 3." },
  { name: "Medic 8+", description: "Grants Pathology 1 for free." },
  { name: "Surveillance 8+", description: "Grants Electronic Surveillance 1 for free." },
  { name: "Scuffling 8+", description: "Once per fight, gain 4-point Scuffling refresh by narrating a martial arts move." },
];
