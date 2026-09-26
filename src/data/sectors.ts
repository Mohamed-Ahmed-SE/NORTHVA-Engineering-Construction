export interface SectorItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  deliveredArea: string;
  completedProjects: number;
  image: string;
  keyHighlights: string[];
}

export const SECTORS: SectorItem[] = [
  {
    id: "commercial",
    name: "Commercial & Mixed-Use",
    tagline: "Iconic commercial landmarks engineered for productivity and regional commerce.",
    description:
      "We deliver Class-A office towers, business parks, corporate headquarters, and vibrant mixed-use retail environments that redefine regional skylines and attract multinational tenants.",
    deliveredArea: "2,240,000 m²",
    completedProjects: 28,
    image: "/images/projects/meridian-corporate-headquarters-gallery-3.jpg",
    keyHighlights: [
      "Large-span column-free floor plates",
      "LEED Gold and Platinum certified designs",
      "Integrated subterranean transit & parking hubs",
    ],
  },
  {
    id: "residential",
    name: "Residential Communities",
    tagline: "High-density master developments and luxury residential sanctuaries.",
    description:
      "From high-rise residential towers in urban centers to expansive gated community compounds, NORTHVA delivers enduring living environments designed around longevity and wellbeing.",
    deliveredArea: "1,850,000 m²",
    completedProjects: 22,
    image: "/images/sectors/residential.jpg",
    keyHighlights: [
      "Over 6,500 residential units delivered",
      "Acoustic isolation & smart energy metering",
      "Integrated community recreation podiums",
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Leisure",
    tagline: "World-class beachfront resorts, five-star urban hotels, and leisure destinations.",
    description:
      "Delivering turnkey luxury hotel properties that balance complex back-of-house engineering with breathtaking guest-facing architectural craftsmanship.",
    deliveredArea: "680,000 m²",
    completedProjects: 14,
    image: "/images/sectors/hospitality.jpg",
    keyHighlights: [
      "Comprehensive international hotel brand compliance",
      "Seawater desalination and coastal stabilization",
      "Turnkey FF&E and bespoke architectural fit-out",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Clinical infrastructure engineered for life-saving resilience.",
    description:
      "Specialized tertiary hospitals, research centers, and diagnostic facilities demanding surgical cleanliness, triple power redundancy, and medical gas precision.",
    deliveredArea: "420,000 m²",
    completedProjects: 9,
    image: "/images/sectors/healthcare.jpg",
    keyHighlights: [
      "JCI hospital standards and ISO cleanroom ratings",
      "Heavy radiation concrete bunker construction",
      "Triple-redundant emergency power systems",
    ],
  },
  {
    id: "industrial",
    name: "Industrial & Logistics",
    tagline: "Massive scale, automated cross-docking, and high-tolerance facilities.",
    description:
      "Strategic distribution centers, cold storage complexes, and heavy manufacturing facilities built to withstand intensive operational throughput.",
    deliveredArea: "1,120,000 m²",
    completedProjects: 12,
    image: "/images/sectors/industrial.jpg",
    keyHighlights: [
      "TR34 FM2 superflat industrial floor slabs",
      "Multi-megawatt rooftop solar microgrids",
      "Automated high-bay structural racking integrations",
    ],
  },
  {
    id: "infrastructure",
    name: "Civil Infrastructure",
    tagline: "Foundational regional arteries, utility networks, and marine works.",
    description:
      "Heavy civil engineering supporting urban expansion: multi-tier highway interchanges, marine breakwaters, deep trunk sewers, and metropolitan utility networks.",
    deliveredArea: "530,000 m² footprint",
    completedProjects: 7,
    image: "/images/sectors/infrastructure.jpg",
    keyHighlights: [
      "Over 240 kilometers of utility networks",
      "Deep marine quay walls and revetments",
      "Major civil arterial roadway corridors",
    ],
  },
];
