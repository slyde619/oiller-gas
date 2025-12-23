// Mock data for the oil & gas website
// All data is stored here and synced to localStorage

export const initialServices = [
  {
    id: "drilling",
    title: "Drilling Services",
    shortDescription:
      "Advanced drilling solutions for onshore and offshore operations.",
    fullDescription:
      "Our comprehensive drilling services encompass directional drilling, horizontal drilling, and deep water operations. We utilize cutting-edge technology to maximize efficiency and minimize environmental impact.",
    icon: "Drill",
    image: "drilling",
  },
  {
    id: "pipeline",
    title: "Pipeline Construction",
    shortDescription: "Expert pipeline installation and maintenance worldwide.",
    fullDescription:
      "From design to installation, we deliver complete pipeline solutions. Our team handles everything from feasibility studies to commissioning, ensuring safe and efficient transport of oil and gas products.",
    icon: "Pipeline",
    image: "pipeline",
  },
  {
    id: "refinery",
    title: "Refinery Services",
    shortDescription: "Complete refinery solutions and process optimization.",
    fullDescription:
      "We provide turnkey refinery services including maintenance, upgrades, and process optimization. Our expertise spans across crude oil processing, petrochemical production, and environmental compliance.",
    icon: "Factory",
    image: "refinery",
  },
  {
    id: "offshore",
    title: "Offshore Operations",
    shortDescription: "Comprehensive offshore platform services and support.",
    fullDescription:
      "Our offshore capabilities include platform installation, maintenance, and decommissioning. We operate in challenging environments with an unwavering commitment to safety and operational excellence.",
    icon: "Ship",
    image: "offshore",
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    shortDescription: "Strategic consulting for energy sector optimization.",
    fullDescription:
      "Our team of industry veterans provides strategic guidance on exploration, production optimization, and regulatory compliance. We help clients navigate complex challenges and maximize returns.",
    icon: "ClipboardCheck",
    image: "consulting",
  },
  {
    id: "environmental",
    title: "Environmental Services",
    shortDescription: "Sustainable practices and environmental management.",
    fullDescription:
      "We're committed to environmental stewardship. Our services include environmental impact assessments, remediation, and sustainable operations consulting to minimize ecological footprint.",
    icon: "Leaf",
    image: "environmental",
  },
];

export const initialTestimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "Operations Director",
    company: "PetroMax Industries",
    content:
      "Their drilling expertise and commitment to safety transformed our operations. We've seen a 40% increase in efficiency since partnering with them.",
    avatar: "JA",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CEO",
    company: "Pacific Energy Corp",
    content:
      "Outstanding service from start to finish. The pipeline project was completed ahead of schedule and under budget. Truly exceptional team.",
    avatar: "SC",
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "VP of Engineering",
    company: "Gulf Coast Petroleum",
    content:
      "Their technical consulting helped us navigate complex regulatory requirements while optimizing our production. Highly recommended.",
    avatar: "MT",
  },
  {
    id: 4,
    name: "Emily Richardson",
    role: "Project Manager",
    company: "Nordic Oil Solutions",
    content:
      "Professional, reliable, and innovative. They delivered our offshore project with zero safety incidents. That speaks volumes about their quality.",
    avatar: "ER",
  },
];

export const initialBlogPosts = [
  {
    id: 1,
    slug: "future-of-offshore-drilling",
    title: "The Future of Offshore Drilling: Technology and Sustainability",
    excerpt:
      "Exploring how advanced technology is reshaping offshore drilling operations while prioritizing environmental sustainability.",
    content: `The offshore drilling industry is undergoing a profound transformation. As global energy demands continue to rise, operators are increasingly turning to advanced technologies that not only improve efficiency but also minimize environmental impact.

## Automation and AI Integration

Modern drilling platforms are leveraging artificial intelligence and machine learning to optimize operations. These systems can predict equipment failures before they occur, reducing costly downtime and improving safety outcomes.

## Sustainable Practices

Environmental stewardship is no longer optional—it's essential. Leading operators are implementing closed-loop drilling systems, advanced waste management, and renewable energy integration on their platforms.

## The Road Ahead

The future of offshore drilling lies in the balance between meeting energy needs and protecting our oceans. Companies that embrace innovation while maintaining rigorous environmental standards will lead the industry forward.`,
    author: "Dr. Robert Mitchell",
    date: "2024-12-15",
    category: "Technology",
    featured: true,
    image: "offshore",
  },
  {
    id: 2,
    slug: "pipeline-safety-standards-2024",
    title: "New Pipeline Safety Standards for 2024: What You Need to Know",
    excerpt:
      "A comprehensive overview of the latest regulatory changes affecting pipeline construction and maintenance.",
    content: `The pipeline industry faces significant regulatory updates in 2024. These changes aim to enhance safety, improve environmental protection, and ensure operational integrity across the sector.

## Key Regulatory Changes

New requirements include enhanced leak detection systems, more frequent inspections, and stricter material specifications for high-pressure applications.

## Compliance Timeline

Operators have until Q3 2024 to implement critical safety upgrades, with full compliance expected by year-end.

## Industry Impact

While these regulations require significant investment, they ultimately strengthen public trust and ensure long-term operational sustainability.`,
    author: "Jennifer Walsh",
    date: "2024-12-10",
    category: "Regulations",
    featured: false,
    image: "pipeline",
  },
  {
    id: 3,
    slug: "refinery-modernization-trends",
    title: "Refinery Modernization: Trends Driving the Industry Forward",
    excerpt:
      "How refineries are adapting to changing market demands and environmental requirements.",
    content: `The refining sector is experiencing unprecedented change. From digitalization to alternative fuels processing, refineries worldwide are investing in modernization to remain competitive.

## Digital Transformation

Advanced process control, digital twins, and real-time monitoring are becoming standard. These technologies enable refineries to optimize operations and reduce emissions simultaneously.

## Alternative Fuels

Many refineries are adding biofuel processing capabilities, positioning themselves for a lower-carbon future while maintaining profitability.

## Operational Excellence

Modernization isn't just about new equipment—it's about culture change, workforce development, and continuous improvement mindsets.`,
    author: "Marcus Thompson",
    date: "2024-12-05",
    category: "Industry Trends",
    featured: true,
    image: "refinery",
  },
];

export const initialJobs = [
  {
    id: 1,
    title: "Senior Drilling Engineer",
    department: "Operations",
    location: "Houston, TX",
    type: "Full-time",
    description:
      "Lead complex drilling projects and mentor junior engineers. Requires 10+ years of experience in directional drilling operations.",
    requirements: [
      "10+ years drilling engineering experience",
      "Professional Engineering license",
      "Experience with directional drilling",
      "Strong leadership skills",
    ],
  },
  {
    id: 2,
    title: "Pipeline Integrity Specialist",
    department: "Engineering",
    location: "Calgary, AB",
    type: "Full-time",
    description:
      "Develop and implement pipeline integrity management programs. Ensure compliance with regulatory requirements.",
    requirements: [
      "5+ years pipeline experience",
      "Knowledge of ILI technologies",
      "Familiarity with API 1160",
      "Strong analytical skills",
    ],
  },
  {
    id: 3,
    title: "HSE Coordinator",
    department: "Health, Safety & Environment",
    location: "Midland, TX",
    type: "Full-time",
    description:
      "Coordinate safety programs and ensure regulatory compliance across multiple field operations.",
    requirements: [
      "3+ years HSE experience",
      "OSHA certifications",
      "Experience with safety audits",
      "Excellent communication skills",
    ],
  },
  {
    id: 4,
    title: "Process Engineer",
    department: "Refinery Operations",
    location: "Port Arthur, TX",
    type: "Full-time",
    description:
      "Optimize refinery processes and lead improvement projects. Focus on efficiency and environmental compliance.",
    requirements: [
      "5+ years refinery experience",
      "Chemical Engineering degree",
      "Six Sigma certification preferred",
      "Process simulation experience",
    ],
  },
];

export const initialFAQs = [
  {
    id: 1,
    question: "What geographic regions do you operate in?",
    answer:
      "We operate globally, with major operations in North America, the Gulf of Mexico, North Sea, West Africa, and Southeast Asia. Our headquarters is in Houston, with regional offices strategically located to support our clients worldwide.",
  },
  {
    id: 2,
    question: "What safety certifications does your company hold?",
    answer:
      "We maintain ISO 45001 certification for occupational health and safety, ISO 14001 for environmental management, and API Q1/Q2 certifications. Our safety record exceeds industry standards with a TRIR below 0.5.",
  },
  {
    id: 3,
    question: "How do you handle environmental concerns?",
    answer:
      "Environmental stewardship is core to our operations. We conduct thorough environmental impact assessments, use advanced containment systems, and have robust spill prevention programs. We're committed to reducing our carbon footprint and supporting the energy transition.",
  },
  {
    id: 4,
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Small maintenance projects may take weeks, while major installations can span 12-24 months. We work closely with clients to establish realistic schedules and maintain transparent communication throughout.",
  },
  {
    id: 5,
    question: "Do you offer training and certification programs?",
    answer:
      "Yes, we operate a comprehensive training center offering technical certifications, safety training, and professional development programs. Many of our courses are accredited and recognized industry-wide.",
  },
  {
    id: 6,
    question: "How can I request a quote for services?",
    answer:
      "You can request a quote by filling out our contact form, calling our main office, or reaching out to your regional representative. We typically respond within 24-48 business hours with preliminary information.",
  },
];

export const companyStats = [
  { label: "Years Experience", value: 45 },
  { label: "Projects Completed", value: 2500 },
  { label: "Global Locations", value: 30 },
  { label: "Team Members", value: 5000 },
];

export const companyInfo = {
  name: "Oiller Energy Services",
  tagline: "Powering Progress. Protecting Tomorrow.",
  address: "1200 Energy Plaza, Houston, TX 77002",
  phone: "+1 (713) 555-0100",
  email: "info@oillerenergy.com",
  founded: 1979,
};

// LocalStorage helpers
const STORAGE_KEYS = {
  blogs: "oiller_blogs",
  testimonials: "oiller_testimonials",
  jobs: "oiller_jobs",
};

export const getStoredData = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

export const setStoredData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to store data:", error);
  }
};

export const getBlogs = () =>
  getStoredData(STORAGE_KEYS.blogs, initialBlogPosts);
export const setBlogs = (data) => setStoredData(STORAGE_KEYS.blogs, data);

export const getTestimonials = () =>
  getStoredData(STORAGE_KEYS.testimonials, initialTestimonials);
export const setTestimonials = (data) =>
  setStoredData(STORAGE_KEYS.testimonials, data);

export const getJobs = () => getStoredData(STORAGE_KEYS.jobs, initialJobs);
export const setJobs = (data) => setStoredData(STORAGE_KEYS.jobs, data);
