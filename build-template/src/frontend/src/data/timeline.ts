export interface TimelineItem {
  id: number;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'experience',
    title: 'Senior Frontend Developer',
    organization: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
  },
  {
    id: 2,
    type: 'experience',
    title: 'Frontend Developer',
    organization: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications using React and TypeScript, collaborated with design teams to implement pixel-perfect UIs.',
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Computer Science',
    organization: 'University of Technology',
    period: '2016 - 2020',
    description: 'Graduated with honors. Focused on web technologies, software engineering, and human-computer interaction.',
  },
  {
    id: 4,
    type: 'experience',
    title: 'Junior Web Developer',
    organization: 'StartUp Labs',
    period: '2019 - 2020',
    description: 'Built and maintained company websites, learned modern web development practices, and contributed to open-source projects.',
  },
];
