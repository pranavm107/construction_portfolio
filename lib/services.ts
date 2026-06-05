import { Service } from '../types/service';

export const servicesData: Service[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    description: "Bespoke high-end residential estates, luxury villas, and custom multi-family structures engineered with architectural precision.",
    details: [
      "Custom Luxury Estates",
      "Sustainable Green Homebuilding",
      "Structural Engineering Analysis",
      "Interior Execution & Fit-outs"
    ],
    iconName: "Home",
    image: "/services/residential.webp"
  },
  {
    id: "commercial-buildings",
    title: "Commercial Buildings",
    description: "State-of-the-art office towers, retail complexes, and mixed-use spaces optimized for business and human interaction.",
    details: [
      "Grade-A Office Parks",
      "Retail Centers & Plazas",
      "High-rise Structural Design",
      "Smart Building Integrations"
    ],
    iconName: "Building2",
    image: "/services/commercial.webp"
  },
  {
    id: "industrial-projects",
    title: "Industrial Projects",
    description: "Advanced manufacturing plants, logistics hubs, and warehouses engineered to withstand intense operational loads.",
    details: [
      "Heavy-duty Foundations",
      "Logistics & Warehousing Hubs",
      "Cold Storage Facilities",
      "Seismic Retrofitting"
    ],
    iconName: "Factory",
    image: "/services/industrial.webp"
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    description: "Transforming and modernizing existing structures to meet contemporary standards of efficiency, safety, and visual luxury.",
    details: [
      "Historical Facade Restoration",
      "Structural Reinforcements",
      "Adaptive Reuse Projects",
      "Premium Interior Overhauls"
    ],
    iconName: "Hammer",
    image: "/services/renovation.webp"
  },
  {
    id: "architectural-planning",
    title: "Architectural Planning",
    description: "Master planning and spatial conceptualization that integrates aesthetic design with local compliance and zoning codes.",
    details: [
      "BIM (Building Information Modeling)",
      "Feasibility Studies",
      "Zoning & Permitting Assistance",
      "3D Architectural Rendering"
    ],
    iconName: "DraftingCompass",
    image: "/services/planning.webp"
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "End-to-end site leadership overseeing budget compliance, safety metrics, sub-contractor scheduling, and quality assurance.",
    details: [
      "Cost Control & Estimation",
      "Safety Protocol Enforcement",
      "Quality Assurance Inspections",
      "Critical Path Scheduling"
    ],
    iconName: "ClipboardCheck",
    image: "/services/management.webp"
  }
];
