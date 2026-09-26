export interface JobPosition {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const CAREER_POSITIONS: JobPosition[] = [
  {
    id: "senior-site-engineer",
    title: "Senior Site Engineer",
    location: "Cairo, Egypt",
    department: "Civil & Structural",
    type: "Full-Time",
    experience: "7 - 10 Years",
    description:
      "Oversee day-to-day structural civil site operations on large-scale mixed-use developments, ensuring absolute adherence to structural drawings, subcontractor timelines, and strict quality control benchmarks.",
    responsibilities: [
      "Direct on-site engineering crews, subcontractors, and heavy plant operations.",
      "Review structural reinforcement, formwork inspection reports, and concrete pour staging.",
      "Coordinate with client consultants, municipal authorities, and independent inspection labs.",
      "Enforce stringent site safety and zero-incident occupational health compliance.",
    ],
    qualifications: [
      "B.Sc. in Civil Engineering from an accredited university.",
      "Minimum 7 years of on-site experience on high-rise or commercial developments exceeding 50,000 m².",
      "Proficient in AutoCAD, Primavera P6, and BIM model viewers (Navisworks / BIM 360).",
      "Demonstrated team leadership and rigorous site safety command.",
    ],
  },
  {
    id: "bim-coordinator",
    title: "BIM Coordinator",
    location: "New Cairo, Egypt",
    department: "Digital Construction",
    type: "Full-Time",
    experience: "4 - 7 Years",
    description:
      "Manage federated 3D / 4D digital models across structural, architectural, and MEP disciplines. Lead inter-disciplinary clash detection workshops and oversee fabrication-ready shop drawing generation.",
    responsibilities: [
      "Federate multi-disciplinary models inside Autodesk Navisworks and BIM 360.",
      "Conduct weekly clash identification and coordination workshops with design teams.",
      "Verify model Level of Development (LOD 350 to LOD 500) compliance with project BIM execution plans.",
      "Extract accurate bill of quantities (BOQ) and 4D construction sequencing simulations.",
    ],
    qualifications: [
      "B.Sc. in Architecture, Civil Engineering, or MEP Engineering.",
      "Extensive proficiency in Revit, Navisworks Manage, Synchro 4D, and Dynamo scripting.",
      "Proven track record coordinating complex healthcare, high-rise, or airport projects.",
      "Knowledge of ISO 19650 BIM information management standards.",
    ],
  },
  {
    id: "mep-project-manager",
    title: "MEP Project Manager",
    location: "Riyadh, Saudi Arabia",
    department: "MEP Engineering",
    type: "Full-Time",
    experience: "10 - 15 Years",
    description:
      "Lead the complete mechanical, electrical, and plumbing engineering scope for major commercial, logistics, and healthcare projects in Saudi Arabia from procurement through testing and commissioning.",
    responsibilities: [
      "Manage all MEP subcontractors, suppliers, and specialist testing and balancing (TAB) agencies.",
      "Supervise installation of central chiller plants, MV substations, and automated fire suppression.",
      "Direct factory acceptance tests (FAT) and site commissioning regimes in coordination with consultants.",
      "Govern project MEP budget, variation orders, and claims mitigation.",
    ],
    qualifications: [
      "B.Sc. in Mechanical or Electrical Engineering.",
      "10+ years of comprehensive MEP contracting experience across the GCC region.",
      "Familiarity with Saudi Building Code (SBC), NFPA, ASHRAE, and SEC regulations.",
      "PMP certification or equivalent construction management credential preferred.",
    ],
  },
  {
    id: "quantity-surveyor",
    title: "Quantity Surveyor",
    location: "Cairo, Egypt",
    department: "Commercial & Procurement",
    type: "Full-Time",
    experience: "5 - 8 Years",
    description:
      "Govern post-contract commercial administration, subcontractor payment certifications, measurement verifications, material reconciliation, and variation pricing.",
    responsibilities: [
      "Perform detailed quantity takeoffs from architectural and structural drawings.",
      "Evaluate and certify monthly interim payment applications from major subcontractors.",
      "Prepare variation claims, substantiated rate breakdowns, and delay cost assessments.",
      "Conduct continuous material reconciliation against site deliveries and structural models.",
    ],
    qualifications: [
      "B.Sc. in Civil Engineering, Quantity Surveying, or Construction Management.",
      "RICS membership or progression toward APC is a distinct advantage.",
      "Strong understanding of FIDIC contracts and Egyptian construction commercial law.",
      "High proficiency in CostX, Planswift, and advanced Excel modeling.",
    ],
  },
  {
    id: "planning-engineer",
    title: "Planning Engineer",
    location: "New Cairo, Egypt",
    department: "Project Controls",
    type: "Full-Time",
    experience: "4 - 7 Years",
    description:
      "Author, update, and baseline critical-path construction schedules in Primavera P6. Monitor physical site progress, calculate Earned Value metrics, and prepare executive delay analysis narratives.",
    responsibilities: [
      "Develop comprehensive baseline schedules including resource and cost loading.",
      "Conduct weekly site progress audits and calculate SPI (Schedule Performance Index) and CPI.",
      "Produce Time Impact Analyses (TIA) for client review and contractual extensions.",
      "Prepare monthly executive project control dashboards and recovery schedules.",
    ],
    qualifications: [
      "B.Sc. in Civil Engineering or Construction Management.",
      "Mastery of Primavera P6 Professional, Microsoft Project, and Power BI dashboards.",
      "In-depth comprehension of CPM scheduling logic, float path analysis, and resource levelling.",
      "Strong analytical mind and concise written reporting skills.",
    ],
  },
];
