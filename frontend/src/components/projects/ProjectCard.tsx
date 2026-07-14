import { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '../../data/projects';
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionPreference();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const tiltX = (y - 0.5) * 10;
    const tiltY = (x - 0.5) * -10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full transition-transform duration-200"
      style={{
        transform: prefersReducedMotion ? 'none' : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-cyan/30 transition-all duration-300">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent flex items-center justify-center space-x-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Button
              size="icon"
              className="bg-neon-cyan text-dark hover:bg-neon-cyan/90 shadow-neon-glow"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple shadow-neon-glow-purple"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-neon-cyan/30 text-neon-cyan text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
