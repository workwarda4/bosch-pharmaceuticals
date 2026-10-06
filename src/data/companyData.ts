export interface ProductItem {
  id: string;
  category: 'Pharmaceutical Products' | 'Healthcare Solutions' | 'Therapeutic Products' | 'Quality Healthcare';
  title: string;
  dosageForm: string;
  description: string;
  focusArea: string;
  features: string[];
}

export const COMPANY_INFO = {
  name: "Bosch Pharmaceuticals",
  tagline: "Committed to Quality Healthcare",
  subheadline: "Delivering trusted pharmaceutical solutions with a commitment to quality, reliability, and better healthcare.",
  address: {
    plot: "Plot No. 209, Shah Muhammad Rd",
    sector: "Sector 23, Korangi Industrial Area",
    city: "Karachi",
    postalCode: "74900",
    country: "Pakistan",
    full: "Plot No. 209, Shah Muhammad Rd, Sector 23, Korangi Industrial Area, Karachi, 74900, Pakistan",
  },
  phone: "021-38704301",
  phoneRaw: "02138704301",
  phoneInternational: "+922138704301",
  mapCoordinates: {
    lat: 24.8358,
    lng: 67.1352,
  },
};

export const PRODUCT_CATEGORIES = [
  'All Solutions',
  'Pharmaceutical Products',
  'Healthcare Solutions',
  'Therapeutic Products',
  'Quality Healthcare',
] as const;

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-01",
    category: "Pharmaceutical Products",
    title: "Solid Oral Dosage Portfolio",
    dosageForm: "Tablets & Capsules",
    description: "Standardized oral formulations developed under strict quality assurance protocols to maintain chemical stability and batch-to-batch consistency.",
    focusArea: "Essential Therapeutics",
    features: [
      "Rigorous dissolution profiling",
      "Humidity-controlled protective blister packaging",
      "Precision weight and uniformity checks",
      "Documented batch release validation"
    ]
  },
  {
    id: "prod-02",
    category: "Pharmaceutical Products",
    title: "Liquid Oral Preparations",
    dosageForm: "Syrups & Suspensions",
    description: "Carefully formulated liquid medications ensuring homogeneous active ingredient dispersion, palatability, and volumetric accuracy.",
    focusArea: "General Healthcare",
    features: [
      "Homogeneous viscosity and suspension control",
      "Amber glass and HDPE tamper-evident containment",
      "Microbiological purity testing",
      "Consistent dosing pipettes and volumetric measures"
    ]
  },
  {
    id: "prod-03",
    category: "Healthcare Solutions",
    title: "Preventive & Maintenance Healthcare Range",
    dosageForm: "Daily Care Formulations",
    description: "Essential healthcare solutions aimed at supporting community well-being, recovery maintenance, and preventive therapeutic care.",
    focusArea: "Community Health Support",
    features: [
      "Formulated for broad therapeutic adherence",
      "Clear patient-friendly packaging labeling",
      "Stable shelf-life under standard storage conditions",
      "Stringent raw material screening"
    ]
  },
  {
    id: "prod-04",
    category: "Therapeutic Products",
    title: "Targeted Therapeutic Formulations",
    dosageForm: "Specialized Formulations",
    description: "Dedicated therapeutic product category developed to address widespread clinical requirements with reliable efficacy and safety.",
    focusArea: "Targeted Therapy",
    features: [
      "Validated formulation stability assays",
      "Controlled raw material procurement channels",
      "Analytical quality verification at all stages",
      "Complete regulatory batch documentation"
    ]
  },
  {
    id: "prod-05",
    category: "Therapeutic Products",
    title: "Specialty Clinical Portfolio",
    dosageForm: "Prescription Formulations",
    description: "Specialized therapeutic options prepared following exacting pharmaceutical methodologies to assist healthcare providers and patients.",
    focusArea: "Clinical Practice Support",
    features: [
      "Strict potency and impurity testing",
      "Secure tamper-proof sealed packaging",
      "Continuous stability monitoring programs",
      "Traceable batch numbering system"
    ]
  },
  {
    id: "prod-06",
    category: "Quality Healthcare",
    title: "Essential Care Formulations",
    dosageForm: "Multi-Route Portfolio",
    description: "A comprehensive range of core pharmaceutical items focused on dependable therapeutic delivery for everyday healthcare needs.",
    focusArea: "Core Patient Care",
    features: [
      "Uncompromising ingredient purity standards",
      "Environmental barrier packaging protection",
      "Continuous in-process quality sampling",
      "Standardized manufacturing operating protocols"
    ]
  }
];

export const QUALITY_PILLARS = [
  {
    title: "Product Quality",
    description: "Every formulation is governed by uncompromising standards of chemical integrity, potency verification, and batch-to-batch uniformity."
  },
  {
    title: "Safety First",
    description: "Patient well-being is our foundation. Comprehensive safety protocols and contaminant testing are conducted across every production phase."
  },
  {
    title: "Reliability & Consistency",
    description: "Standardized operating systems ensure that every release meets defined clinical and physical specifications without deviation."
  },
  {
    title: "Professional Standards",
    description: "Our pharmaceutical professionals uphold disciplined scientific ethics, diligent record-keeping, and meticulous oversight."
  },
  {
    title: "Continuous Improvement",
    description: "We regularly review and refine operational methodologies, testing instruments, and packaging safety to advance healthcare delivery."
  },
  {
    title: "Customer & Healthcare Trust",
    description: "Building lasting trust among healthcare professionals, pharmacies, and patients through transparency and product dependability."
  }
];

export const MANUFACTURING_STEPS = [
  {
    step: "01",
    title: "Material Screening & Quarantine",
    description: "All incoming active ingredients and pharmaceutical excipients undergo quarantine and analytical verification before batch allocation."
  },
  {
    step: "02",
    title: "Controlled Cleanroom Processing",
    description: "Formulation and blending take place inside strictly controlled environments with HEPA air filtration and monitored humidity."
  },
  {
    step: "03",
    title: "In-Process Quality Checks",
    description: "Continuous analytical sampling monitors uniformity, tablet hardness, dissolution rates, and liquid homogeneity in real-time."
  },
  {
    step: "04",
    title: "Integrity Packaging & Traceability",
    description: "Automated blister sealing and secure boxing ensure moisture protection, tamper-evidence, and clear batch traceability."
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Quality Focus",
    description: "Every pharmaceutical product is produced with relentless attention to chemical purity, physical integrity, and clinical dependability."
  },
  {
    title: "Reliable Healthcare Solutions",
    description: "Committed to delivering dependable medicines that doctors trust and patients rely on for their healthcare needs."
  },
  {
    title: "Professional Approach",
    description: "A culture grounded in scientific discipline, transparency, and adherence to highest corporate healthcare standards."
  },
  {
    title: "Customer Trust",
    description: "Fostering long-term relationships with medical practitioners, distributors, and communities across Pakistan."
  },
  {
    title: "Continuous Improvement",
    description: "Regularly evaluating our methods and technical capabilities to ensure modern, dependable pharmaceutical manufacturing."
  },
  {
    title: "Commitment to Excellence",
    description: "Driven by our core purpose: advancing health outcomes and patient well-being with unwavering institutional integrity."
  }
];
