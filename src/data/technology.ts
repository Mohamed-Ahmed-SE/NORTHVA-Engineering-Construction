export interface TechItem {
  id: string;
  code: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: string;
  specs: string[];
}

export const TECHNOLOGIES: TechItem[] = [
  {
    id: "bim",
    code: "BIM-LOD500",
    title: "Building Information Modeling",
    category: "Virtual Design & Construction",
    tagline: "Federated 3D coordinate intelligence eliminating site rework before concrete is cast.",
    description:
      "All structural, architectural, and MEP systems are modeled in unified cloud environments up to Level of Development 500. Automated clash detection identifies interferences weeks ahead of physical field installation.",
    metrics: "94% Clash Pre-Resolution",
    specs: ["Revit & Navisworks Coordination", "LOD 350 to LOD 500 As-Builts", "IFC Open Standards Compliant"],
  },
  {
    id: "scheduling-4d",
    code: "4D-SYNCHRO",
    title: "4D Construction Scheduling",
    category: "Time & Space Simulation",
    tagline: "Dynamic visual sequencing connecting CPM milestones directly to 3D geometry.",
    description:
      "By binding time parameters to structural components, project managers simulate logistical choke-points, crane radii, and material drop zones, ensuring seamless transitions between concrete and façade crews.",
    metrics: "22% Schedule Acceleration",
    specs: ["Primavera P6 Live Integration", "Spatial Hazard Detection", "Logistics Staging Optimization"],
  },
  {
    id: "drone-monitoring",
    code: "UAV-SCAN",
    title: "Drone Progress Monitoring",
    category: "Reality Capture",
    tagline: "High-resolution autonomous photogrammetry generating millimeter-accurate site twins.",
    description:
      "Autonomous RTK-equipped UAVs fly scheduled bi-weekly survey missions across active job sites, creating georeferenced orthomosaics and 3D point clouds to verify earthwork volumes and structural alignment.",
    metrics: "±12mm Volumetric Accuracy",
    specs: ["RTK GPS Aerial Photogrammetry", "Cut & Fill Volumetric Auditing", "Thermal Envelope Diagnostics"],
  },
  {
    id: "digital-inspections",
    code: "QA-QC-DIGITAL",
    title: "Digital Quality Inspections",
    category: "Field Operations",
    tagline: "Instant mobile inspection sign-offs replacing paper punch lists with verifiable audit trails.",
    description:
      "Site engineers and third-party consultants execute standardized QA/QC inspection check-sheets via tablet interfaces tagged directly to spatial drawings, drastically curtailing handover rectification cycles.",
    metrics: "60% Faster Inspection Cycles",
    specs: ["Geolocation-Stamped Checklists", "Instant Non-Conformance Reports (NCR)", "Automated Consultant Sign-Offs"],
  },
  {
    id: "cloud-pm",
    code: "CLOUD-CDE",
    title: "Cloud Project Management",
    category: "Common Data Environment",
    tagline: "Single source of truth uniting owners, architects, and field supervisors in real-time.",
    description:
      "Enterprise CDE connects design documents, RFIs, submittals, and contract variations into an instantaneous collaborative spine, removing communication silos across regional offices.",
    metrics: "100% Document Transparency",
    specs: ["ISO 19650 Common Data Protocol", "Real-Time RFI Turnaround", "Granular Access Permissions"],
  },
  {
    id: "digital-document-control",
    code: "DOC-VERIFY",
    title: "Digital Document Control",
    category: "Compliance & Traceability",
    tagline: "Immutable revision tracking preventing costly errors from superseded drawings.",
    description:
      "QR-code authenticated construction drawings guarantee that site crews always build according to the latest approved revision, preventing outdated prints from reaching the field.",
    metrics: "Zero Outdated Print Discrepancies",
    specs: ["Automated Dynamic QR Watermarking", "Submittal Status Workflow", "Regulatory Submission Tracking"],
  },
  {
    id: "realtime-reporting",
    code: "TELEMETRY-AI",
    title: "Real-Time Telemetry & Reporting",
    category: "Executive Intelligence",
    tagline: "Comprehensive telemetry dashboards displaying earned value, labor curves, and supply metrics.",
    description:
      "Automated data pipelines aggregate field biometric turnstiles, batching plant concrete deliveries, and CPM schedule progression into unified executive leadership cockpits.",
    metrics: "24/7 Live Executive Cockpit",
    specs: ["Biometric Man-Hour Tracking", "Concrete Batch Telemetry", "Earned Value Metric Synthesis"],
  },
];
