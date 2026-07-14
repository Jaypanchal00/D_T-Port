import { Button } from '@/components/ui/button';

interface ProjectFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ['All', 'React', 'JS', 'HTML'];

export default function ProjectFilter({ activeFilter, setActiveFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <div key={filter} className="transition-transform hover:scale-105">
          <Button
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? 'default' : 'outline'}
            className={`relative px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-neon-cyan to-electric-blue text-dark shadow-neon-glow'
                : 'border-neon-cyan/30 text-muted-foreground hover:text-foreground hover:border-neon-cyan/50'
            }`}
          >
            {filter}
          </Button>
        </div>
      ))}
    </div>
  );
}
