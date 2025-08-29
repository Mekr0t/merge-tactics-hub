interface BattlefieldGridProps {
  units?: Array<{
    position: number;
    name: string;
    cost: number;
  }>;
}

export const BattlefieldGrid = ({ units = [] }: BattlefieldGridProps) => {
  const gridPositions = Array.from({ length: 16 }, (_, i) => i);

  const getUnitAtPosition = (position: number) => {
    return units.find(unit => unit.position === position);
  };

  return (
    <div className="battlefield-grid">
      {gridPositions.map((position) => {
        const unit = getUnitAtPosition(position);
        return (
          <div
            key={position}
            className="aspect-square bg-secondary border border-accent/20 rounded flex items-center justify-center hover:border-accent/40 transition-colors"
          >
            {unit && (
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold mb-1">
                  {unit.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="text-xs text-muted-foreground">{unit.cost}★</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};