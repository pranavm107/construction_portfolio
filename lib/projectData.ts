import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    slug: "obsidian-pavilion",
    title: "The Obsidian Pavilion",
    category: "Residential",
    location: "Beverly Hills, California",
    area: "12,500 sq ft",
    completionYear: "2025",
    budget: "$8.5 Million",
    duration: "18 Months",
    client: "Vance Luxury Living",
    description: "A luxury architectural estate built on a steep hillside, incorporating cantilevers, a reinforced concrete foundation, floor-to-ceiling smart glass facades, and sustainable solar energy integration.",
    image: "/projects/obsidian.webp",
    blueprintImage: "/projects/obsidian-blueprint.webp",
    progressImages: [
      "/projects/obsidian-progress-1.webp",
      "/projects/obsidian-progress-2.webp",
      "/projects/obsidian-progress-3.webp"
    ]
  },
  {
    slug: "helix-tower",
    title: "The Helix Tower",
    category: "Commercial",
    location: "Downtown Chicago, Illinois",
    area: "350,000 sq ft",
    completionYear: "2024",
    budget: "$110 Million",
    duration: "36 Months",
    client: "Apex Development Corp",
    description: "An architectural landmark featuring a twisting structural steel core, high-efficiency geothermal heating, smart elevator networks, and a dynamic double-skin glass facade.",
    image: "/projects/helix.webp",
    blueprintImage: "/projects/helix-blueprint.webp",
    progressImages: [
      "/projects/helix-progress-1.webp",
      "/projects/helix-progress-2.webp",
      "/projects/helix-progress-3.webp"
    ]
  },
  {
    slug: "nexus-logistics-hub",
    title: "Nexus Logistics Hub",
    category: "Industrial",
    location: "Houston, Texas",
    area: "1,200,000 sq ft",
    completionYear: "2025",
    budget: "$45 Million",
    duration: "24 Months",
    client: "LogiTrans International",
    description: "A super-flat flooring manufacturing and distribution warehouse with a heavy-duty precast concrete frame, high-capacity rooftop solar grids, and fully automated logistics tracks.",
    image: "/projects/nexus.webp",
    blueprintImage: "/projects/nexus-blueprint.webp",
    progressImages: [
      "/projects/nexus-progress-1.webp",
      "/projects/nexus-progress-2.webp",
      "/projects/nexus-progress-3.webp"
    ]
  },
  {
    slug: "vanguard-viaduct",
    title: "Vanguard Viaduct",
    category: "Infrastructure",
    location: "Seattle, Washington",
    area: "2.4 miles length",
    completionYear: "2023",
    budget: "$210 Million",
    duration: "48 Months",
    client: "Washington Dept of Transportation",
    description: "A state-of-the-art cable-stayed bridge utilizing high-durability pre-stressed concrete towers, advanced dampening systems, and smart sensor monitoring arrays.",
    image: "/projects/vanguard.webp",
    blueprintImage: "/projects/vanguard-blueprint.webp",
    progressImages: [
      "/projects/vanguard-progress-1.webp",
      "/projects/vanguard-progress-2.webp",
      "/projects/vanguard-progress-3.webp"
    ]
  }
];
