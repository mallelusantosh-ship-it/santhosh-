// =========================================================
// 1. DATA: BIKE TYPES
// =========================================================
const bikeTypes = [
  {
    id: "commuter",
    name: "Commuter",
    tagline: "Light, affordable, and effortless for everyday city riding",
    posture: "Completely upright and natural—feels just like sitting on a standard chair.",
    bestFor: "First-time riders, daily office/college travel, and heavy city traffic.",
    rating: "5/5 — Best Starting Point",
    description:
      "Commuter bikes prioritize fuel efficiency, light weight (115–130 kg), and low seat heights. Because they are light and forgiving, balancing in slow traffic or making U-turns is easy for beginners."
  },
  {
    id: "naked",
    name: "Naked / Street",
    tagline: "Sporty performance without heavy plastic body panels",
    posture: "Upright with a slight forward lean for confident steering.",
    bestFor: "Riders who want modern looks, nimble handling, and weekend fun.",
    rating: "4.5/5 — Great All-Rounder",
    description:
      "Called 'naked' because the engine is visible rather than covered by plastic fairings. Wide handlebars give you great leverage and control at both low and highway speeds."
  },
  {
    id: "cruiser",
    name: "Cruiser",
    tagline: "Low seats, relaxed ergonomics, and classic timeless style",
    posture: "Laid-back shoulders with feet positioned forward.",
    bestFor: "Shorter riders (easy to plant both feet flat) and relaxed highway cruising.",
    rating: "4/5 — Confidence Inspiring",
    description:
      "Cruisers deliver smooth pulling power at low speeds rather than high racing speed. Their low seat height makes balancing at traffic lights very reassuring."
  },
  {
    id: "sport",
    name: "Sportbike",
    tagline: "Aerodynamic bodywork built for cornering and precision",
    posture: "Leaned forward over the fuel tank with higher footpegs.",
    bestFor: "Riders drawn to race-inspired styling and sharp handling on open roads.",
    rating: "3.5/5 — Start With 150cc–200cc",
    description:
      "Full wind-cutting fairings give sportbikes their signature look. Entry-level models offer manageable power, though the leaned-forward posture can tire your wrists in heavy traffic."
  },
  {
    id: "adventure",
    name: "Adventure (ADV)",
    tagline: "Tall suspension built to handle potholes, gravel, and long tours",
    posture: "Tall, commanding upright stance with wide handlebars.",
    bestFor: "Touring lovers and riders dealing with broken roads or rough terrain.",
    rating: "3.5/5 — Check Seat Height First",
    description:
      "Think of Adventure bikes as the SUVs of the motorcycle world. Long-travel suspension absorbs bumps effortlessly, though their taller seats require balance practice at stops."
  }
];

// =========================================================
// 2. DATA: POPULAR BEGINNER MODELS
// =========================================================
const bikeModels = [
  {
    name: "Honda SP 125",
    category: "Commuter",
    engine: "124 cc",
    weight: "117 kg",
    power: "10.7 bhp",
    beginnerReason:
      "Ultra-lightweight at 117 kg with a smooth engine and high fuel mileage—ideal for mastering clutch control and balance.",
    highlights: ["Lightest handling in traffic", "Digital gear-position indicator", "Very low maintenance cost"]
  },
  {
    name: "TVS Raider 125",
    category: "Commuter",
    engine: "124.8 cc",
    weight: "123 kg",
    power: "11.2 bhp",
    beginnerReason:
      "Combines easy 125cc manageability with sporty styling, a comfortable low seat, and crisp throttle response.",
    highlights: ["780 mm accessible seat height", "Under-seat storage space", "Smooth city acceleration"]
  },
  {
    name: "Yamaha MT-15 V2",
    category: "Naked / Street",
    engine: "155 cc",
    weight: "141 kg",
    power: "18.1 bhp",
    beginnerReason:
      "Agile chassis, upright handlebars, and a Slipper Clutch that prevents rear-wheel lockups if you downshift abruptly.",
    highlights: ["Assist & Slipper Clutch", "Traction Control & ABS", "Nimble city maneuverability"]
  },
  {
    name: "Royal Enfield Hunter 350",
    category: "Cruiser",
    engine: "349 cc",
    weight: "181 kg",
    power: "20.2 bhp",
    beginnerReason:
      "More compact and nimble than traditional 350cc cruisers, offering gentle low-speed torque without sudden power surges.",
    highlights: ["Easy, non-intimidating torque", "Compact turning radius", "Dual-channel ABS option"]
  },
  {
    name: "Yamaha R15 V4",
    category: "Sportbike",
    engine: "155 cc",
    weight: "141 kg",
    power: "18.1 bhp",
    beginnerReason:
      "Gives beginners genuine supersport looks and razor-sharp cornering stability without overwhelming horsepower.",
    highlights: ["Dual-channel ABS & Traction Control", "Predictable linear power", "Upside-down front forks"]
  },
  {
    name: "Bajaj Pulsar N160",
    category: "Naked / Street",
    engine: "164.8 cc",
    weight: "152 kg",
    power: "15.7 bhp",
    beginnerReason:
      "Well-balanced weight distribution and standard dual-channel ABS make emergency braking safe and predictable.",
    highlights: ["Dual-channel ABS safety", "Strong mid-range city pull", "Comfortable split seats"]
  }
];

// =========================================================
// 3. DATA: VEHICLE FEATURES GLOSSARY
// =========================================================
const vehicleFeatures = [
  {
    term: "CC (Cubic Capacity)",
    short: "Measures the size of the engine's cylinders.",
    analogy: "Think of it like lung capacity: bigger lungs take in more air and fuel, creating more power. Beginners usually start between 110cc and 250cc.",
    tag: "Engine Basics"
  },
  {
    term: "ABS (Anti-Lock Braking System)",
    short: "Prevents wheels from locking up during sudden hard braking.",
    analogy: "If you panic-grab the brakes on a wet or sandy road, ABS pulses the brake automatically so your tires keep gripping instead of skidding.",
    tag: "Must-Have Safety"
  },
  {
    term: "Torque vs. Horsepower",
    short: "Torque is pulling strength; Horsepower is top-end speed.",
    analogy: "Torque is how quickly a sprinter launches off the starting line in traffic; Horsepower is how fast they run at full sprint on a highway.",
    tag: "Performance"
  },
  {
    term: "Disc vs. Drum Brakes",
    short: "Two ways a motorcycle slows down its wheels.",
    analogy: "Disc brakes cool faster and give stronger stopping power—great for front wheels. Drum brakes are sealed and simple, often used on rear wheels of budget commuters.",
    tag: "Braking"
  },
  {
    term: "Slipper Clutch",
    short: "Softens the jolt when you shift to a lower gear too quickly.",
    analogy: "Acts like a shock absorber inside your gearbox so the rear tire doesn't hop or skid if a beginner downshifts at high speed.",
    tag: "Beginner Helper"
  },
  {
    term: "Suspension (Telescopic & Monoshock)",
    short: "Springs and dampers that absorb bumps in the road.",
    analogy: "Like running shoes for your bike—keeps your tires planted on uneven pavement so you stay comfortable and in control.",
    tag: "Comfort & Control"
  }
];

// =========================================================
// 4. INTERACTIVE BIKE TYPES TABS
// =========================================================
const typeTabs = document.getElementById("typeTabs");
const typeDisplay = document.getElementById("typeDisplay");
let activeTypeId = bikeTypes[0].id;

function renderBikeTypes() {
  typeTabs.innerHTML = bikeTypes
    .map(
      (type) => `
      <button
        class="tab-btn ${type.id === activeTypeId ? "active" : ""}"
        onclick="selectBikeType('${type.id}')"
      >
        ${type.name}
      </button>
    `
    )
    .join("");

  const current = bikeTypes.find((t) => t.id === activeTypeId);
  typeDisplay.innerHTML = `
    <div class="type-top">
      <div>
        <h3>${current.name}</h3>
        <div class="type-tagline">${current.tagline}</div>
      </div>
      <span class="score-pill">Beginner Score: ${current.rating}</span>
    </div>
    <p>${current.description}</p>
    <div class="type-specs">
      <div class="spec-box">
        <div class="spec-label">Riding Posture</div>
        <p>${current.posture}</p>
      </div>
      <div class="spec-box">
        <div class="spec-label">Best Suited For</div>
        <p>${current.bestFor}</p>
      </div>
    </div>
  `;
}

function selectBikeType(id) {
  activeTypeId = id;
  renderBikeTypes();
}

// =========================================================
// 5. POPULAR MODELS SEARCH, FILTER & MODAL
// =========================================================
const modelsGrid = document.getElementById("modelsGrid");
const modelSearch = document.getElementById("modelSearch");
const modelFilter = document.getElementById("modelFilter");

function renderModels() {
  const query = modelSearch.value.toLowerCase();
  const category = modelFilter.value;

  const filtered = bikeModels.filter((bike) => {
    const matchesText = bike.name.toLowerCase().includes(query);
    const matchesCat = category === "All" || bike.category === category;
    return matchesText && matchesCat;
  });

  if (filtered.length === 0) {
    modelsGrid.innerHTML = `<p>No motorcycles match your search. Try clearing the filter.</p>`;
    return;
  }

  modelsGrid.innerHTML = filtered
    .map(
      (bike) => `
      <div class="card">
        <div>
          <div class="card-meta">
            <span class="tag">${bike.category}</span>
            <small>${bike.engine} • ${bike.weight}</small>
          </div>
          <h3>${bike.name}</h3>
          <p>${bike.beginnerReason}</p>
        </div>
        <button class="card-btn" onclick="openBikeModal('${bike.name}')">
          View Specs & Highlights
        </button>
      </div>
    `
    )
    .join("");
}

modelSearch.addEventListener("input", renderModels);
modelFilter.addEventListener("change", renderModels);

// Modal Controls
const modelModal = document.getElementById("modelModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function openBikeModal(bikeName) {
  const bike = bikeModels.find((b) => b.name === bikeName);
  modalContent.innerHTML = `
    <span class="tag">${bike.category}</span>
    <h2 style="margin-top: 10px;">${bike.name}</h2>
    <div class="modal-stats">
      <div class="stat-item"><small>Engine</small><div><strong>${bike.engine}</strong></div></div>
      <div class="stat-item"><small>Weight</small><div><strong>${bike.weight}</strong></div></div>
      <div class="stat-item"><small>Power</small><div><strong>${bike.power}</strong></div></div>
    </div>
    <h4>Why Beginners Like It:</h4>
    <p style="margin: 8px 0 16px; color: #475569;">${bike.beginnerReason}</p>
    <h4>Key Highlights:</h4>
    <ul class="highlight-list">
      ${bike.highlights.map((item) => `<li>✓ ${item}</li>`).join("")}
    </ul>
  `;
  modelModal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => modelModal.classList.add("hidden"));
modelModal.addEventListener("click", (e) => {
  if (e.target === modelModal) modelModal.classList.add("hidden");
});

// =========================================================
// 6. FEATURES GLOSSARY RENDER
// =========================================================
function renderFeatures() {
  const featuresGrid = document.getElementById("featuresGrid");
  featuresGrid.innerHTML = vehicleFeatures
    .map(
      (feat) => `
      <div class="card">
        <div>
          <div class="card-meta">
            <span class="tag tag-gray">${feat.tag}</span>
          </div>
          <h3>${feat.term}</h3>
          <strong style="color: #ea580c; font-size: 0.9rem;">${feat.short}</strong>
          <div class="analogy-box">
            <strong>In Simple Words:</strong> ${feat.analogy}
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// =========================================================
// 7. INTERACTIVE QUIZ & MOBILE MENU
// =========================================================
document.getElementById("quizBtn").addEventListener("click", () => {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;

  let recommended = "Commuter (110cc – 125cc)";
  let explanation =
    "A lightweight Commuter bike gives you effortless balance, upright comfort, and stress-free control while learning.";

  if (q1 === "rough") {
    recommended = "Adventure / Dual-Sport (150cc – 250cc)";
    explanation =
      "Long-travel suspension and upright handlebars will soak up potholes and rough roads with ease.";
  } else if (q1 === "weekend" || q2 === "laidback" || q3 === "style") {
    recommended = "Cruiser (200cc – 350cc)";
    explanation =
      "A low seat height lets you plant both feet firmly at stops while enjoying relaxed, smooth low-speed power.";
  } else if (q1 === "sporty" || q2 === "lean" || q3 === "agility") {
    recommended = "Naked / Entry Sportbike (150cc – 200cc)";
    explanation =
      "Sharp steering, dual-channel ABS, and lively yet controllable power make learning genuinely exciting.";
  }

  const resultBox = document.getElementById("quizResult");
  resultBox.innerHTML = `
    <h4>Your Best Match</h4>
    <h3>${recommended}</h3>
    <p>${explanation}</p>
  `;
  resultBox.classList.remove("hidden");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// Run initial render when page loads
renderBikeTypes();
renderModels();
renderFeatures();