const jargonEl = document.getElementById("jargon");
const generateBtn = document.getElementById("generate-btn");

const buzzwords = [
  "Synergize",
  "Leverage",
  "Streamline",
  "Facilitate",
  "Optimize",
  "Empower",
  "Innovate",
  "Transform",
  "Monetize",
  "Disrupt",
  "Scale",
  "Pivot",
  "Enable",
  "Drive",
  "Harness",
];

const buzzphrases = [
  "frictionless KPIs",
  "cross-platform ecosystems",
  "value-added solutions",
  "customer-centric paradigms",
  "agile frameworks",
  "best-of-breed architectures",
  "scalable infrastructures",
  "robust deliverables",
  "vertical integration",
  "proactive workflows",
  "dynamic synergies",
  "mission-critical assets",
  "seamless integration",
  "core competencies",
  "cutting-edge platforms",
];

function generateJargon() {
  const word1 = buzzwords[Math.floor(Math.random() * buzzwords.length)];
  const phrase1 = buzzphrases[Math.floor(Math.random() * buzzphrases.length)];
  const word2 = buzzwords[Math.floor(Math.random() * buzzwords.length)];
  const phrase2 = buzzphrases[Math.floor(Math.random() * buzzphrases.length)];

  const jargon = `${word1} ${phrase1} and ${word2.toLowerCase()} ${phrase2}.`;
  jargonEl.innerText = jargon;
}

generateBtn.addEventListener("click", generateJargon);
