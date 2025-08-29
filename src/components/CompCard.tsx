import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Crown } from "lucide-react";
import { Link } from "react-router-dom";

interface CompCardProps {
  id: number;
  name: string;
  ruler: string;
  units: string[];
  traits: Array<{ name: string; level: number }>;
  tier: 'S' | 'A' | 'B' | 'C';
  image?: string;
}

export const CompCard = ({ id, name, ruler, units, traits, tier }: CompCardProps) => {
  const getTierStyle = (tier: string) => {
    switch (tier) {
      case 'S':
        return 'tier-s';
      case 'A':
        return 'tier-a';
      case 'B':
        return 'tier-b';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="comp-card group cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <Badge className={`tier-badge ${getTierStyle(tier)}`}>
          {tier}
        </Badge>
      </div>

      {/* Ruler */}
      <div className="flex items-center space-x-2 mb-3">
        <Crown className="w-4 h-4 text-primary" />
        <span className="text-sm text-muted-foreground">{ruler}</span>
      </div>

      {/* Unit Icons */}
      <div className="flex space-x-1 mb-3">
        {units.map((unit, index) => (
          <div
            key={index}
            className="w-8 h-8 bg-secondary rounded border border-accent/20 flex items-center justify-center text-xs font-medium neon-glow"
          >
            {unit.substring(0, 2).toUpperCase()}
          </div>
        ))}
      </div>

      {/* Traits */}
      <div className="flex flex-wrap gap-1 mb-4">
        {traits.map((trait, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {trait.name} {trait.level}
          </Badge>
        ))}
      </div>

      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Link to={`/comp/${id}`} className="flex items-center w-full justify-center">
          See Guide
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};