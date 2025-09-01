import { unitPortrait } from "@/lib/unitPortrait";
import { normalizeUnitName } from "@/lib/unitUtils";

// BattlefieldGrid.tsx
export const BattlefieldGrid: React.FC<{ 
  units: any[]; 
  rows?: number; 
  cols?: number; 
}> = ({ units, rows = 4, cols = 5 }) => {
  const map = new Map<string, any>();
  units.forEach((u) => {
    map.set(`${u.row},${u.col}`, u);
  });

  const HEX =
    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

  return (
    <div className="w-full max-w-3xl mx-auto relative" style={{ left: "5%" }}>
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="grid gap-1 mb-2"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
            transform: r % 2 ? "translateX(-10%)" : "none", // your stagger
          }}
        >
          {Array.from({ length: cols }).map((_, c) => {
            const key = `${r},${c}`;
            const u = map.get(key);
            return (
              <div
                key={c}
                className="relative aspect-square"
                style={{ clipPath: HEX }}
              >
                <div className="absolute inset-0 bg-zinc-700/30 border border-white/10" />
                {u && (() => {
                  const normalized = normalizeUnitName(u.name);
                  return (
                    <img
                      src={unitPortrait(normalized)}
                      alt={u.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ clipPath: HEX }}
                    />
                  );
                })()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
