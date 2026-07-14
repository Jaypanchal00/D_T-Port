export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management and seamless checkout experience.',
    category: 'React',
    image: '/assets/generated/project-thumb-1.dim_1200x800.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['React', 'TypeScript', 'Stripe', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop interface and real-time updates.',
    category: 'React',
    image: '/assets/generated/project-thumb-2.dim_1200x800.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A stunning portfolio website with smooth animations and interactive 3D elements.',
    category: 'HTML',
    image: '/assets/generated/project-thumb-3.dim_1200x800.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with beautiful visualizations and location-based forecasts.',
    category: 'JS',
    image: '/assets/generated/project-thumb-1.dim_1200x800.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['JavaScript', 'Chart.js', 'OpenWeather API'],
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with interactive charts and insights.',
    category: 'React',
    image: '/assets/generated/project-thumb-2.dim_1200x800.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 6,
    title: 'Landing Page',
    description: 'High-converting landing page with smooth scroll animations and optimized performance.',
    category: 'HTML',
    image: '/assets/generated/project-thumb-3.dim_1200x800.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    tags: ['HTML', 'SCSS', 'GSAP', 'Webpack'],
  },
];
