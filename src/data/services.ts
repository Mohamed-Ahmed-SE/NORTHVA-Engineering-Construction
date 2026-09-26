export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  capabilities: string[];
  keyMetric: string;
  metricLabel: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "general-contracting",
    number: "01",
    title: "General Contracting",
    shortDesc:
      "Complete construction delivery across commercial, residential, hospitality, industrial and mixed-use developments with disciplined project execution.",
    fullDesc:
      "From deep foundation excavations to final architectural envelope handover, NORTHVA operates as the principal general contractor for complex mega-projects. We direct site operations, subcontracted specialties, heavy equipment fleets, and rigorous safety protocols with uncompromising engineering oversight.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    capabilities: [
      "Subterranean excavation, piling & retention works",
      "Reinforced concrete frames & post-tensioned slabs",
      "Structural steel fabrication & heavy erection",
      "Façade engineering & unitized curtain wall installation",
      "Comprehensive site logistics & multi-crane coordination",
      "Turnkey civil handover & local authority approvals",
    ],
    keyMetric: "6.8M+ m²",
    metricLabel: "Total Gross Area Delivered",
  },
  {
    id: "infrastructure",
    number: "02",
    title: "Infrastructure",
    shortDesc:
      "Road networks, utility systems, drainage, water infrastructure and large-scale site development moving modern regional cities forward.",
    fullDesc:
      "Our civil infrastructure division engineers the foundational lifelines of modern metropolitan developments. We execute large-scale earthmoving, deep sewer trunk mains, potable water distribution grids, storm surge attenuation systems, and multi-lane arterial roadway corridors across demanding terrains.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
    capabilities: [
      "Highway interchanges, arterial roads & bridges",
      "Deep stormwater drainage & culvert networks",
      "High-pressure potable & fire water networks",
      "Underground electrical substations & MV/LV cabling",
      "Wastewater treatment plants & pump stations",
      "Geotechnical ground improvement & slope stabilization",
    ],
    keyMetric: "240+ km",
    metricLabel: "Underground Infrastructure Executed",
  },
  {
    id: "design-build",
    number: "03",
    title: "Design & Build",
    shortDesc:
      "Integrated engineering and construction delivery under one coordinated team, accelerating timelines and eliminating procurement friction.",
    fullDesc:
      "By unifying architectural engineering, structural calculations, MEP systems, and on-site construction under a single point of accountability, our Design & Build model reduces delivery schedules by up to 25% while giving clients absolute cost certainty from day one.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
    capabilities: [
      "Early contractor involvement (ECI) & value engineering",
      "Unified architectural & structural engineering",
      "Integrated 3D / 4D / 5D BIM model authoring",
      "Constructability reviews & material substitution analysis",
      "Guaranteed Maximum Price (GMP) contracting",
      "Streamlined permitting & regulatory compliance",
    ],
    keyMetric: "25%",
    metricLabel: "Average Schedule Reduction",
  },
  {
    id: "mep-engineering",
    number: "04",
    title: "MEP Engineering",
    shortDesc:
      "Mechanical, electrical, plumbing, fire protection and building management systems built to extreme tolerance and mission-critical standards.",
    fullDesc:
      "Modern structures are living ecosystems powered by intricate mechanical, electrical, and plumbing engineering. NORTHVA designs, installs, and commissions mission-critical MEP infrastructure for high-rises, hospitals, data centers, and advanced manufacturing plants with zero tolerance for failure.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85",
    capabilities: [
      "HVAC central chiller plants & air handling systems",
      "High-voltage substations, generators & emergency power",
      "Life safety, smoke evacuation & automatic fire suppression",
      "Complex medical gas piping & cleanroom ventilation",
      "Intelligent Building Management Systems (BMS / SCADA)",
      "Acoustic vibration dampening & seismic bracing",
    ],
    keyMetric: "99.98%",
    metricLabel: "Critical Systems Uptime Reliability",
  },
  {
    id: "fit-out",
    number: "05",
    title: "Fit-Out",
    shortDesc:
      "Premium interior construction for corporate, hospitality, commercial and luxury residential environments with master craftsmanship.",
    fullDesc:
      "Our specialized fit-out division transforms structural shells into world-class interior spaces. Combining bespoke architectural millwork, precision stone masonry, integrated acoustic panelling, and subtle ambient illumination, we deliver spaces that define corporate prestige and hospitality elegance.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
    capabilities: [
      "Turnkey corporate office headquarters fit-outs",
      "Luxury 5-star hotel public realms & bespoke suites",
      "Architectural joinery, metalwork & custom glass systems",
      "High-performance acoustic wall and ceiling assemblies",
      "Imported marble, granite & terrazzo floor installations",
      "Smart conference room audiovisual integration",
    ],
    keyMetric: "100%",
    metricLabel: "Architectural Specification Compliance",
  },
  {
    id: "project-management",
    number: "06",
    title: "Project Management",
    shortDesc:
      "Planning, procurement, scheduling, quality management, cost control and project delivery backed by real-time digital transparency.",
    fullDesc:
      "NORTHVA’s project controls team utilizes enterprise-grade planning frameworks to govern critical paths across multi-million dollar investments. Through real-time cloud reporting, Earned Value Management (EVM), and drone surveys, we ensure clients maintain absolute visibility over every dollar and milestone.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    capabilities: [
      "Critical Path Method (CPM) & 4D timeline scheduling",
      "Earned Value Management (EVM) cost control",
      "Strategic regional procurement & supply chain logistics",
      "Drone photogrammetry & weekly 3D volumetric audits",
      "Rigorous ISO 9001 quality audits & testing regimes",
      "Dispute prevention & transparent contract administration",
    ],
    keyMetric: "98.4%",
    metricLabel: "On-Time Milestone Delivery Rate",
  },
];
