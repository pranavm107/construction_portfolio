export interface Project {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure';
  location: string;
  area: string;
  completionYear: string;
  budget: string;
  duration: string;
  client: string;
  description: string;
  image: string;
  blueprintImage: string;
  progressImages: string[];
}
