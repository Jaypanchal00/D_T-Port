import { Code, Smartphone, Database, Wrench } from 'lucide-react';
import Section from '../components/common/Section';
import Reveal from '../components/motion/Reveal';
import SkillProgress from '../components/skills/SkillProgress';
import GlassCard from '../components/common/GlassCard';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    color: 'from-neon-cyan to-electric-blue',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    icon: Smartphone,
    title: 'UI/UX',
    color: 'from-neon-purple to-pink-500',
    skills: [
      { name: 'Responsive Design', level: 94 },
      { name: 'Figma', level: 85 },
      { name: 'Accessibility', level: 87 },
      { name: 'Animation', level: 90 },
    ],
  },
  {
    icon: Database,
    title: 'Backend',
    color: 'from-electric-blue to-neon-cyan',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 75 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'from-pink-500 to-neon-purple',
    skills: [
      { name: 'Git / GitHub', level: 93 },
      { name: 'VS Code', level: 95 },
      { name: 'Webpack / Vite', level: 85 },
      { name: 'Docker', level: 78 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-gradient-to-b from-dark/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Skills</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={0.3 + categoryIndex * 0.1}>
              <GlassCard hover={false} className="h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-[2px] shadow-neon-glow`}>
                    <div className="w-full h-full rounded-xl bg-dark flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillProgress
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.5 + categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
