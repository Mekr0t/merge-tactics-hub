"use client";

import { Header } from "@/components/Header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UNIT_DATA } from "@/lib/unitData";
import { unitPortrait } from "@/lib/unitPortrait";
import { traitIcon } from "@/lib/traitIcon";

export default function Troops() {
  const entries = Object.entries(UNIT_DATA) as [string, any][];
  const groups: Record<number, [string, any][]> = {};

  for (const [unitName, data] of entries) {
    const raw = data?.cost;
    const cost = Number.isFinite(Number(raw)) ? Number(raw) : -1;
    if (!groups[cost]) groups[cost] = [];
    groups[cost].push([unitName, data]);
  }

  const sortedCosts = Object.keys(groups)
    .map(Number)
    .sort((a, b) => (a === -1 ? 1 : b === -1 ? -1 : a - b));

  const titleForCost = (cost: number) =>
    cost === -1 ? "Unknown cost troops" : `${cost} Elixir Cost Troops`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
          <span className="text-gradient">Merge Tactics Troops</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-12">
          Browse all available troops with their portraits, descriptions, costs, and synergies.
        </p>

        {sortedCosts.map((cost) => (
          <section key={cost} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">
              {titleForCost(cost)}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {groups[cost]
                .sort((a, b) =>
                  (a[1].displayName ?? a[0]).localeCompare(b[1].displayName ?? b[0])
                )
                .map(([unitName, data]) => (
                  <Card
                    key={unitName}
                    className="bg-card border border-accent/20 shadow-md hover:shadow-lg transition-all duration-200 rounded-2xl"
                  >
                    <div className="flex flex-col items-center p-6 text-center">
                      {/* Portrait */}
                      <img
                        src={unitPortrait(unitName)}
                        alt={unitName}
                        className="w-32 h-40 object-cover rounded-lg border border-accent/30 mb-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />

                      {/* Title */}
                      <CardHeader className="p-0 mb-3">
                        <CardTitle className="text-2xl font-bold">
                          {data.displayName ?? unitName}
                        </CardTitle>
                      </CardHeader>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4">
                        {data.description}
                      </p>

                      {/* Cost */}
                      <p className="font-semibold mb-4">
                        Cost:{" "}
                        <span className="bg-yellow-400 text-black px-2 py-0.5 rounded">
                          {data.cost ?? "—"}
                        </span>
                      </p>

                      {/* Traits */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {(data.traits ?? []).map((traitName: string, idx: number) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="flex items-center gap-2 text-sm md:text-base px-3 py-1.5 rounded-lg"
                          >
                            <img
                              src={traitIcon(traitName)}
                              alt={traitName}
                              className="w-5 h-5"
                            />
                            <span>{traitName}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
