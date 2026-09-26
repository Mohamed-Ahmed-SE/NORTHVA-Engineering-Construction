export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface RegionalOffice {
  id: string;
  country: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  sector: string;
}

export const COMPANY_INFO = {
  name: "NORTHVA Engineering & Construction",
  shortName: "NORTHVA",
  tagline: "Engineering What Comes Next.",
  taglineArabic: "هندسة ما يأتي غداً",
  founded: 2008,
  headquarters: "New Cairo, Egypt",
  markets: ["Egypt", "Saudi Arabia", "UAE"],
  description:
    "NORTHVA is an integrated engineering and construction company delivering complex projects across commercial development, infrastructure, industrial facilities, hospitality, healthcare, and residential construction.",
  extendedDescription:
    "From initial planning to final delivery, NORTHVA combines engineering expertise, disciplined execution, and modern construction technology to create spaces built for the future.",
  mission:
    "To deliver reliable, sustainable and technically advanced construction solutions while creating long-term value for clients and communities.",
  vision:
    "To become one of the region's most trusted engineering and construction partners by combining technical excellence with smarter ways of building.",
  values: [
    {
      title: "Integrity",
      description:
        "Transparent governance, rigorous contractual compliance, and uncompromising ethical conduct across every engagement.",
    },
    {
      title: "Engineering Excellence",
      description:
        "Unwavering technical standards, precision engineering calculations, and innovative structural methodologies.",
    },
    {
      title: "Safety",
      description:
        "Zero-compromise safety culture prioritizing human life with over 11.2 million safe working hours achieved.",
    },
    {
      title: "Innovation",
      description:
        "Digital transformation via 4D BIM, reality capture drones, and real-time field data orchestration.",
    },
    {
      title: "Sustainability",
      description:
        "Targeted carbon mitigation, circular resource usage, and progressive green building standards (LEED / Mostadam).",
    },
  ],
};

export const KEY_STATISTICS: StatisticItem[] = [
  {
    id: "experience",
    value: 18,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Founded in 2008 in Cairo",
  },
  {
    id: "projects",
    value: 92,
    suffix: "+",
    label: "Completed Projects",
    sublabel: "Delivered on schedule and budget",
  },
  {
    id: "delivered_area",
    value: 6.8,
    suffix: "M+",
    label: "m² Delivered",
    sublabel: "Gross built-up area across 3 countries",
  },
  {
    id: "workforce",
    value: 2400,
    suffix: "+",
    label: "Professionals",
    sublabel: "Engineers, architects, and specialists",
  },
  {
    id: "safe_hours",
    value: 11.2,
    suffix: "M",
    label: "Safe Working Hours",
    sublabel: "Rigorous ISO-45001 safety compliance",
  },
  {
    id: "countries",
    value: 3,
    suffix: "",
    label: "Core Regional Markets",
    sublabel: "Egypt · Saudi Arabia · UAE",
  },
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    id: "omar-el-naggar",
    name: "Omar El-Naggar",
    role: "Chief Executive Officer",
    bio: "Over 25 years of civil engineering and construction management experience across major MENA infrastructure and mega-developments.",
    image: "/images/leadership/omar-el-naggar.jpg",
  },
  {
    id: "karim-mansour",
    name: "Karim Mansour",
    role: "Chief Operating Officer",
    bio: "Leads NORTHVA's regional operations, supply chain logistics, and multi-site project execution teams across Egypt and the GCC.",
    image: "/images/leadership/karim-mansour.jpg",
  },
  {
    id: "sarah-khalil",
    name: "Sarah Khalil",
    role: "Engineering Director",
    bio: "Pioneered NORTHVA's BIM and computational structural engineering workflows, spearheading high-complexity engineering design.",
    image: "/images/leadership/sarah-khalil.jpg",
  },
  {
    id: "ahmed-nassar",
    name: "Ahmed Nassar",
    role: "Commercial Director",
    bio: "Oversees contractual frameworks, commercial risk, strategic procurement, and value engineering for projects surpassing $2B in total value.",
    image: "/images/leadership/ahmed-nassar.jpg",
  },
];

export const REGIONAL_OFFICES: RegionalOffice[] = [
  {
    id: "egypt-hq",
    country: "Egypt",
    city: "New Cairo",
    name: "Egypt Headquarters",
    address: "District 5 Business Park, Building B3, Road 90 South, New Cairo, Egypt",
    phone: "+20 (2) 2813 4900",
    email: "cairo@northva-eng.com",
    coordinates: "30.0131° N, 31.4913° E",
  },
  {
    id: "saudi-arabia",
    country: "Saudi Arabia",
    city: "Riyadh",
    name: "Saudi Arabia Regional Office",
    address: "King Fahd Road, Al Olaya District, Tower 2, Level 18, Riyadh 12214, KSA",
    phone: "+966 (11) 489 7720",
    email: "riyadh@northva-eng.com",
    coordinates: "24.7136° N, 46.6753° E",
  },
  {
    id: "uae",
    country: "UAE",
    city: "Dubai",
    name: "UAE Regional Office",
    address: "The Opus by Omniyat, Tower A, Level 14, Business Bay, Dubai, UAE",
    phone: "+971 (4) 392 6100",
    email: "dubai@northva-eng.com",
    coordinates: "25.1887° N, 55.2678° E",
  },
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { id: "aura", name: "AURA Developments", sector: "Commercial & Mixed-Use" },
  { id: "horizon", name: "Horizon Properties", sector: "Luxury Residential" },
  { id: "meridian", name: "Meridian Group", sector: "Corporate Developments" },
  { id: "capital-health", name: "Capital Healthcare", sector: "Medical & Research" },
  { id: "azure", name: "Azure Hospitality", sector: "Resorts & Leisure" },
  { id: "axis", name: "Axis Logistics", sector: "Industrial & Freight" },
  { id: "vertex", name: "Vertex Industries", sector: "Advanced Manufacturing" },
  { id: "urbangate", name: "UrbanGate Developments", sector: "Urban Infrastructure" },
];

export const TIMELINE_MILESTONES = [
  {
    year: "2008",
    title: "Founding in Cairo",
    description: "NORTHVA founded in Cairo with a focus on high-precision structural contracting.",
  },
  {
    year: "2011",
    title: "First Commercial Complex",
    description: "Completed first landmark commercial development in New Cairo.",
  },
  {
    year: "2014",
    title: "Infrastructure Division",
    description: "Established specialized civil infrastructure division for urban roadways and utility grids.",
  },
  {
    year: "2017",
    title: "1,000,000 m² Milestone",
    description: "Surpassed one million square meters of cumulative delivered gross floor area.",
  },
  {
    year: "2019",
    title: "Saudi Arabia Expansion",
    description: "Opened Riyadh regional office to support major commercial and logistics investments.",
  },
  {
    year: "2021",
    title: "Digital Construction & BIM Lab",
    description: "Pioneered integrated 4D BIM, automated clash detection, and drone reality capture.",
  },
  {
    year: "2023",
    title: "75+ Delivered Projects",
    description: "Exceeded 75 major delivered projects across commercial, residential, and healthcare sectors.",
  },
  {
    year: "2025",
    title: "2,400+ Professionals",
    description: "Workforce surpassed 2,400 engineers, project leaders, and construction specialists.",
  },
  {
    year: "2026",
    title: "UAE Regional Expansion",
    description: "Established Dubai office in Business Bay to drive prime commercial and hospitality developments.",
  },
];
