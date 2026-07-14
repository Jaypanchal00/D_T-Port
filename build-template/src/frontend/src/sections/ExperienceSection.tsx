import Section from '../components/common/Section';
import Reveal from '../components/motion/Reveal';
import Timeline from '../components/timeline/Timeline';
import { timelineData } from '../data/timeline';

export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-gradient-to-b from-dark/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            Experience & <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Education</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </Reveal>

        <Timeline items={timelineData} />
      </div>
    </Section>
  );
}
