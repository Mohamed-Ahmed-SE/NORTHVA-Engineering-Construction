export interface ProjectTechnicalSpec {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  location: string;
  country: string;
  client: string;
  sector: "Commercial" | "Residential" | "Hospitality" | "Healthcare" | "Industrial" | "Infrastructure";
  year: number;
  status: "Completed" | "In Progress";
  builtUpArea: string;
  contractValue: string;
  heroImage: string;
  galleryImages: string[];
  services: string[];
  summary: string;
  description: string;
  challenges: string;
  engineeringHighlights: string[];
  technicalSpecs: ProjectTechnicalSpec[];
  coordinates: string;
  featured: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "aura-business-district",
    slug: "aura-business-district",
    title: "AURA Business District",
    tagline: "A benchmark corporate ecosystem setting new regional standards in architectural engineering.",
    location: "New Cairo, Egypt",
    country: "Egypt",
    client: "AURA Developments",
    sector: "Commercial",
    year: 2025,
    status: "Completed",
    builtUpArea: "186,000 m²",
    contractValue: "EGP 4.2 Billion",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "General Contracting",
      "MEP Systems",
      "Civil Infrastructure",
      "Landscape & Public Realm",
      "BIM 4D Management",
    ],
    summary:
      "A flagship mixed-use business district combining five commercial office towers, integrated pedestrian plazas, subterranean parking for 3,400 vehicles, and sustainable building systems.",
    description:
      "A premium mixed-use business district combining corporate offices, retail spaces, landscaped public areas, underground parking, and modern workplace environments. Delivered under an accelerated 32-month timeline, NORTHVA executed structural concrete, unitized architectural façades, and deep basement retention works directly adjacent to critical arterial roadways.",
    challenges:
      "Managing complex 4-level deep excavation within sand and limestone geological formations while maintaining zero settlement impact on adjacent high-voltage utility corridors.",
    engineeringHighlights: [
      "186,000 m² total built-up area executed across 5 interconnected mid-rise towers",
      "4-level contiguous bored pile shoring system with multi-tier tieback anchors",
      "High-efficiency unitized double-glazed low-E curtain wall reducing thermal loads by 34%",
      "Fully integrated SCADA and central building management system overseeing 45,000 telemetry points",
    ],
    technicalSpecs: [
      { label: "Site Area", value: "64,000 m²" },
      { label: "Concrete Volume", value: "98,500 m³" },
      { label: "Structural Steel", value: "7,800 Tons" },
      { label: "Façade Glazing", value: "42,000 m²" },
      { label: "Basement Levels", value: "4 Levels (Subterranean)" },
      { label: "Sustainability", value: "LEED Gold Certified" },
    ],
    coordinates: "30.0242° N, 31.4721° E",
    featured: true,
  },
  {
    id: "azure-bay-resort",
    slug: "azure-bay-resort",
    title: "Azure Bay Resort",
    tagline: "Ultra-luxury coastal architecture forged with marine engineering precision.",
    location: "North Coast, Egypt",
    country: "Egypt",
    client: "Azure Hospitality Group",
    sector: "Hospitality",
    year: 2024,
    status: "Completed",
    builtUpArea: "114,000 m²",
    contractValue: "EGP 3.6 Billion",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "Turnkey General Contracting",
      "Coastal Marine Engineering",
      "Luxury Interior Fit-Out",
      "Desalination & Reverse Osmosis",
      "Landscape Architecture",
    ],
    summary:
      "A coastal luxury resort masterwork comprising 320 five-star hotel suites, 85 cliffside beachfront villas, an artificial saltwater lagoon, and comprehensive marine breakwaters.",
    description:
      "Stretching across 800 meters of Mediterranean beachfront, Azure Bay Resort represents an exceptional feat in luxury hospitality construction and coastal stabilization. NORTHVA delivered the entire development from raw site earthworks to turnkey FF&E fit-out, incorporating specialized sulfate-resistant concrete formulations engineered specifically for high-salinity maritime exposure.",
    challenges:
      "Aggressive coastal humidity, saline groundwater tables, and high seasonal temperature variance requiring specialized curing compounds and waterproofing membranes.",
    engineeringHighlights: [
      "Self-contained reverse osmosis seawater desalination plant supplying 2,500 m³/day",
      "Marine breakwater engineering stabilizing 800 linear meters of sandy beach",
      "Acoustically isolated private villa suites with cantilevered infinity pools",
      "Turnkey millwork, natural Italian travertine stonework, and custom bespoke glazing",
    ],
    technicalSpecs: [
      { label: "Keys / Units", value: "320 Keys + 85 Private Villas" },
      { label: "Lagoon Volume", value: "35,000 m³" },
      { label: "Desalination Output", value: "2,500 m³ / Day" },
      { label: "Beachfront Length", value: "800 Linear Meters" },
      { label: "Concrete Type", value: "High-Durability Microsilica Marine Grade" },
      { label: "Timeline", value: "28 Months from Notice to Proceed" },
    ],
    coordinates: "30.9854° N, 28.7412° E",
    featured: true,
  },
  {
    id: "riyadh-logistics-hub",
    slug: "riyadh-logistics-hub",
    title: "Riyadh Logistics Hub",
    tagline: "Industrial scale engineered for automated supply chain supremacy.",
    location: "Riyadh, Saudi Arabia",
    country: "Saudi Arabia",
    client: "Axis Logistics",
    sector: "Industrial",
    year: 2025,
    status: "Completed",
    builtUpArea: "310,000 m² site area",
    contractValue: "SAR 850 Million",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "Industrial EPC Contracting",
      "Heavy Pre-Engineered Steel",
      "Laser-Guided Superflat Slabs",
      "Cold-Storage Refrigeration MEP",
      "Solar Microgrid Installation",
    ],
    summary:
      "A strategic high-capacity automated regional logistics and distribution hub engineered for rapid cross-docking, deep temperature cold-storage, and autonomous guided vehicle (AGV) operations.",
    description:
      "Commissioned to support the rapid logistics expansion in Riyadh, this 310,000 m² industrial facility incorporates Class-A superflat floors (FM2 tolerance), high-bay racking up to 18 meters, and a 4.2 MW rooftop solar microgrid. NORTHVA executed the project utilizing accelerated precast structural columns and long-span trusses spanning 48 meters without intermediate columns.",
    challenges:
      "Extreme ambient desert temperatures exceeding 48°C during summer concrete casting, necessitating night-shift pours and liquid nitrogen cooling systems.",
    engineeringHighlights: [
      "310,000 m² total site footprint with 145,000 m² of covered climate-controlled logistics space",
      "High-precision laser-screeded jointless concrete floor slabs compliant with DIN 18202 standards",
      "4.2 MWp rooftop photovoltaic installation providing 62% of daytime operational energy",
      "120 automated hydraulic dock levellers with integrated vehicle restraint systems",
    ],
    technicalSpecs: [
      { label: "Site Area", value: "310,000 m²" },
      { label: "Covered Warehouse Area", value: "145,000 m²" },
      { label: "Clear Eaves Height", value: "18.5 Meters" },
      { label: "Slab Floor Tolerance", value: "DIN 18202 / TR34 FM2 Superflat" },
      { label: "Solar Generation", value: "4.2 MWp Rooftop Array" },
      { label: "Loading Docks", value: "120 Automated Bays" },
    ],
    coordinates: "24.5821° N, 46.8839° E",
    featured: true,
  },
  {
    id: "nova-residences",
    slug: "nova-residences",
    title: "NOVA Residences",
    tagline: "Architectural purity and contemporary community living at immense scale.",
    location: "New Capital, Egypt",
    country: "Egypt",
    client: "Horizon Properties",
    sector: "Residential",
    year: 2023,
    status: "Completed",
    builtUpArea: "245,000 m²",
    contractValue: "EGP 2.9 Billion",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "Structural Concrete Framing",
      "Precast Architectural Facades",
      "Post-Tensioned Slabs",
      "Central Smart Living MEP",
      "Subsurface Infrastructure",
    ],
    summary:
      "A master-planned residential community comprising 740 luxury residential apartments, interconnected garden podiums, club facilities, and comprehensive smart utility grids.",
    description:
      "Developed in Egypt's New Administrative Capital, NOVA Residences balances striking modernist aesthetics with functional engineering efficiency. The project features eleven residential buildings arranged around a central pedestrian green corridor, utilizing post-tensioned slab technology to achieve expansive column-free living spaces and panoramic floor-to-ceiling glass envelopes.",
    challenges:
      "Coordinating parallel construction across 11 multi-story residential blocks while deploying shared tower crane paths and maintaining just-in-time material logistics.",
    engineeringHighlights: [
      "740 luxury residential units delivered across 11 contemporary residential mid-rise blocks",
      "Post-tensioned unbonded tendon slabs reducing concrete consumption by 18%",
      "Custom GFRC (Glass Fiber Reinforced Concrete) architectural louvers for shading",
      "Centralized district cooling heat-exchanger station serving all 11 buildings",
    ],
    technicalSpecs: [
      { label: "Residential Units", value: "740 Luxury Apartments" },
      { label: "Number of Buildings", value: "11 Mid-Rise Blocks (G+8)" },
      { label: "Post-Tension Tendons", value: "420 Tons" },
      { label: "Podium Garden Area", value: "32,000 m²" },
      { label: "Underground Parking", value: "1,100 Vehicles" },
      { label: "Acoustic Rating", value: "STC 55 Sound Attenuation" },
    ],
    coordinates: "30.0089° N, 31.7254° E",
    featured: true,
  },
  {
    id: "capital-medical-center",
    slug: "capital-medical-center",
    title: "Capital Medical Center",
    tagline: "Uncompromising clinical precision and life-critical MEP engineering.",
    location: "New Cairo, Egypt",
    country: "Egypt",
    client: "Capital Healthcare Group",
    sector: "Healthcare",
    year: 2022,
    status: "Completed",
    builtUpArea: "62,500 m²",
    contractValue: "EGP 2.1 Billion",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "Healthcare EPC Contracting",
      "Class-100 Cleanroom Construction",
      "Medical Gas Distribution Grids",
      "Radiation Oncology Shielding",
      "Emergency Power Tri-Redundancy",
    ],
    summary:
      "A specialized 280-bed tertiary acute care hospital encompassing 14 modular digital operating theaters, cardiac catheterization labs, oncology bunkers, and intensive care wings.",
    description:
      "Capital Medical Center demanded the highest degree of MEP coordination and contamination control ever engineered by NORTHVA. Constructed according to strict JCI (Joint Commission International) hospital standards, the facility incorporates laminar airflow systems, barite concrete radiation bunkers, and triple-redundant emergency power substations guaranteeing uninterrupted clinical uptime.",
    challenges:
      "Installing 2.2-meter-thick heavy-aggregate barite concrete radiation shielding walls without thermal cracking, verified through non-destructive ultrasound testing.",
    engineeringHighlights: [
      "280 in-patient beds including 48 specialized critical care (ICU/CCU/NICU) suites",
      "14 modular operating suites featuring ISO Class 5 laminar airflow ceilings",
      "Medical gas vacuum and piping network spanning over 24,000 linear meters",
      "N+2 generator power backup switching online in less than 8 seconds",
    ],
    technicalSpecs: [
      { label: "Capacity", value: "280 In-Patient Beds" },
      { label: "Operating Theaters", value: "14 Digital Modular ORs" },
      { label: "Radiation Bunkers", value: "2 Linear Accelerator Vaults (Barite Concrete)" },
      { label: "Backup Generation", value: "3 x 2,000 kVA N+2 Redundancy" },
      { label: "Air Exchanges", value: "25 Air Changes/Hr in Surgical Suites" },
      { label: "Compliance", value: "JCI & NFPA 99 Healthcare Guidelines" },
    ],
    coordinates: "30.0412° N, 31.4589° E",
    featured: true,
  },
  {
    id: "meridian-corporate-headquarters",
    slug: "meridian-corporate-headquarters",
    title: "Meridian Corporate Headquarters",
    tagline: "Sculptural corporate icon combining high-performance facades with biophilic atriums.",
    location: "Cairo, Egypt",
    country: "Egypt",
    client: "Meridian Group",
    sector: "Commercial",
    year: 2021,
    status: "Completed",
    builtUpArea: "48,000 m²",
    contractValue: "EGP 1.4 Billion",
    heroImage: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "Headquarters Construction",
      "Custom Double-Skin Curtain Wall",
      "Acoustic Atrium Engineering",
      "LEED Platinum Commissioning",
      "Executive Tier Fit-Out",
    ],
    summary:
      "A 16-story bespoke corporate headquarters tower designed with an iconic curved façade, full-height naturally illuminated central atrium, and cantilevered executive boardroom bridges.",
    description:
      "Serving as the flagship headquarters for Meridian Group, this structure stands as a prime example of high-performance architectural engineering. NORTHVA engineered a customized double-skin ventilated façade system that dramatically diminishes solar heat transmission while maximizing daylight autonomy throughout the central open-plan workspaces.",
    challenges:
      "Erecting a 24-meter clear-span steel and glass bridge spanning the internal atrium at Level 12 without interfering with ongoing interior stone installation below.",
    engineeringHighlights: [
      "16 above-ground levels featuring column-free floor plates up to 2,800 m²",
      "Double-skin ventilated façade achieving an overall U-value of 1.1 W/m²K",
      "Central 14-story skylit atrium with smoke exhaust evacuation velocity of 40 m³/s",
      "LEED Platinum certification achieved with 38% energy reduction against ASHRAE baseline",
    ],
    technicalSpecs: [
      { label: "Height", value: "76.5 Meters (16 Floors)" },
      { label: "Gross Floor Area", value: "48,000 m²" },
      { label: "Curtain Wall Façade", value: "16,400 m² High-Performance Low-E" },
      { label: "Atrium Steel Tonnage", value: "620 Tons" },
      { label: "Elevators", value: "8 High-Speed Destination Dispatch Elevators" },
      { label: "Green Standard", value: "LEED Platinum Certified" },
    ],
    coordinates: "30.0521° N, 31.3412° E",
    featured: true,
  },
  {
    id: "red-sea-marina-promenade",
    slug: "red-sea-marina-promenade",
    title: "Red Sea Marina & Waterfront",
    tagline: "Large-scale coastal infrastructure reshaping maritime urban connectivity.",
    location: "Jeddah, Saudi Arabia",
    country: "Saudi Arabia",
    client: "UrbanGate Developments",
    sector: "Infrastructure",
    year: 2025,
    status: "Completed",
    builtUpArea: "190,000 m² waterfront",
    contractValue: "SAR 1.1 Billion",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "Civil Infrastructure",
      "Marine Sheet Piling & Quay Walls",
      "Geotechnical Ground Improvement",
      "Stormwater Outfall Systems",
      "Pedestrian Pier Engineering",
    ],
    summary:
      "A 3.4-kilometer coastal reclamation, deep-draft marina basin for 180 yachts, and pedestrian boardwalk infrastructure built along the Red Sea coastline.",
    description:
      "NORTHVA’s civil infrastructure division engineered the land reclamation, rock armor revetment, and precast concrete quay walls for this landmark maritime project. Incorporating specialized cathodic protection for all subterranean structural steel, the project guarantees a 100-year design life against severe marine corrosion.",
    challenges:
      "Executing subsea stone column vibro-replacement ground improvement in high-silt marine seabeds without creating sediment plumes.",
    engineeringHighlights: [
      "3.4 km engineered coastal revetment with 4-to-6 ton protective rock armor",
      "180-berth marina basin with floating pontoon systems and automated fuelling",
      "High-durability precast concrete quay walls using fly-ash blended cement",
      "Integrated smart lighting, pedestrian bridges, and subterranean service trenches",
    ],
    technicalSpecs: [
      { label: "Waterfront Length", value: "3.4 Kilometers" },
      { label: "Reclaimed Land", value: "480,000 m³ Engineered Fill" },
      { label: "Berth Capacity", value: "180 Yachts up to 60m LOA" },
      { label: "Quay Wall Length", value: "1,200 Linear Meters" },
      { label: "Cathodic Protection", value: "Impressed Current Cathodic Protection (ICCP)" },
      { label: "Design Lifespan", value: "100-Year Structural Durability" },
    ],
    coordinates: "21.5433° N, 39.1728° E",
    featured: false,
  },
  {
    id: "al-wasl-innovation-tower",
    slug: "al-wasl-innovation-tower",
    title: "Al Wasl Innovation Tower",
    tagline: "Parametric diagrid structural engineering in the heart of Dubai.",
    location: "Dubai, UAE",
    country: "UAE",
    client: "Vertex Industries",
    sector: "Commercial",
    year: 2026,
    status: "Completed",
    builtUpArea: "92,000 m²",
    contractValue: "AED 920 Million",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1508873696983-2df5703bc20b?auto=format&fit=crop&w=1600&q=85",
    ],
    services: [
      "High-Rise Construction",
      "Parametric Steel Diagrid",
      "Integrated Smart Façade",
      "High-Efficiency MEP",
      "LEED Platinum Delivery",
    ],
    summary:
      "A 42-story commercial tower featuring an external parametric steel diagrid exoskeleton, eliminating interior structural columns to deliver unprecedented open floor flexibility.",
    description:
      "Designed as a regional hub for technology and innovation, Al Wasl Tower combines bold structural expression with high thermal efficiency. NORTHVA managed the fabrication and geometric surveying of node-welded diagrid joints, achieving dimensional tolerances within ±3mm across a 190-meter vertical rise.",
    challenges:
      "Complex geometric erection of node joints weighing up to 22 tons each, lifted at night under stringent aviation and city traffic corridor regulations.",
    engineeringHighlights: [
      "42-story tower reaching 192 meters height in Dubai's prime business district",
      "Parametric steel diagrid exoskeleton bearing both gravity and lateral wind loads",
      "100% column-free perimeter office floors maximizing spatial flexibility",
      "Kinetic solar tracking louvers reducing peak mechanical cooling demand by 28%",
    ],
    technicalSpecs: [
      { label: "Height", value: "192 Meters (42 Floors)" },
      { label: "Gross Floor Area", value: "92,000 m²" },
      { label: "Diagrid Steel", value: "11,400 Tons High-Yield Steel" },
      { label: "Core Slipform", value: "Executed via Automated Hydraulic Slipform" },
      { label: "Wind Engineering", value: "Tested at Boundary Layer Wind Tunnel (BLWT)" },
      { label: "Smart Score", value: "WiredScore Platinum & SmartScore Platinum" },
    ],
    coordinates: "25.1972° N, 55.2744° E",
    featured: false,
  },
];
