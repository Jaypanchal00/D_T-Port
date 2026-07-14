import { Code2, Palette, Zap, Heart } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit, SiFigma } from 'react-icons/si';
import Section from '../components/common/Section';
import Reveal from '../components/motion/Reveal';
import GlassCard from '../components/common/GlassCard';

const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Pixel-perfect implementations with attention to detail',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized applications for lightning-fast user experiences',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Building intuitive interfaces that users love',
  },
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-gradient-to-b from-transparent to-dark/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            About <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Me</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <Reveal direction="left" delay={0.3}>
            <div className="relative mx-auto max-w-md animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-neon-purple to-electric-blue rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-neon-cyan/20 shadow-neon-glow">
                <img
                  src="/assets/generated/profile-portrait.dim_800x800.png"
                  alt="Profile"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Reveal>

          {/* About Text */}
          <div className="space-y-6">
            <Reveal direction="right" delay={0.4}>
              <h3 className="text-3xl font-bold mb-4">
                Hi, I'm <span className="text-neon-cyan">John Doe</span>
              </h3>
            </Reveal>

            <Reveal direction="right" delay={0.5}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A passionate Frontend Developer with 5+ years of experience building modern web applications.
                I specialize in creating beautiful, performant, and accessible user interfaces using cutting-edge technologies.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.6}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </Reveal>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <Reveal key={item.title} direction="right" delay={0.7 + index * 0.1}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-neon-cyan/20">
                      <item.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <Reveal delay={0.8}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Tech <span className="text-neon-purple">Stack</span>
          </h3>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <Reveal key={tech.name} delay={0.9 + index * 0.1}>
              <div className="group transition-transform hover:scale-110 hover:rotate-3">
                <GlassCard className="flex flex-col items-center justify-center p-6 h-full">
                  <tech.icon
                    className="w-12 h-12 mb-3 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
