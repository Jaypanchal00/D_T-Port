import { useState } from 'react';
import Section from '../components/common/Section';
import Reveal from '../components/motion/Reveal';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section id="projects" className="bg-gradient-to-b from-transparent to-dark/50">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            Featured <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Projects</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ProjectFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.4 + index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
