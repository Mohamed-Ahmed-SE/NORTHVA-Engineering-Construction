export interface SustainabilityPillar {
  number: string;
  title: string;
  description: string;
  metric: string;
}

export const SUSTAINABILITY_INFO = {
  heading: "BUILDING RESPONSIBLY.",
  subheading: "Constructing enduring assets with measurable ecological stewardship.",
  statement:
    "Construction has a lasting impact on cities and communities. NORTHVA integrates sustainability into planning, procurement, construction and building performance.",
  targetHighlight: {
    percentage: "35%",
    label: "Target reduction in operational carbon emissions by 2030 across all delivered assets.",
    baseline: "Measured against standard regional benchmark performance data.",
  },
  image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=85",
  focusAreas: [
    {
      number: "01",
      title: "Efficient Energy Systems",
      description:
        "Engineered thermal envelopes, smart variable refrigerant flow (VRF) HVAC, and rooftop solar arrays maximizing energy autonomy.",
      metric: "Up to 38% energy load reduction",
    },
    {
      number: "02",
      title: "Responsible Material Sourcing",
      description:
        "Prioritizing regional low-carbon cements, recycled structural rebar, FSC-certified timber, and non-toxic low-VOC interior coatings.",
      metric: "85% regionally sourced materials",
    },
    {
      number: "03",
      title: "Construction Waste Reduction",
      description:
        "On-site concrete crushing, scrap metal recycling, and prefabrication protocols diverting tons of jobsite refuse from regional landfills.",
      metric: "72% waste diversion rate",
    },
    {
      number: "04",
      title: "Water Efficiency & Conservation",
      description:
        "Greywater recycling systems, atmospheric moisture condensation harvesting, and ultra-low-flow sanitary infrastructure.",
      metric: "40% potable water savings",
    },
    {
      number: "05",
      title: "Sustainable Site Planning",
      description:
        "Topographical preservation, heat island reduction through high-albedo paving, and native drought-resistant xeriscaping.",
      metric: "Zero urban run-off impact",
    },
    {
      number: "06",
      title: "Low-Impact Construction Methods",
      description:
        "Electric machinery transition, dust suppression misting systems, and acoustic barrier baffles safeguarding adjacent communities.",
      metric: "Strict Tier-4 emission protocols",
    },
  ],
};
