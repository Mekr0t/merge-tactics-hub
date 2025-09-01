import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { mockTraits } from "@/data/mockData"
import { traitIcon } from "@/lib/traitIcon"
import { UNIT_DATA } from "@/lib/unitData"
import { unitPortrait } from "@/lib/unitPortrait"
import { Header } from "@/components/Header"

export default function Traits() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
          <span className="text-gradient">Merge Tactics Traits</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-10">
          Traits define your team’s synergies. Collect units with the same trait to unlock powerful bonuses.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTraits.map((trait, idx) => (
            <Card
              key={idx}
              className="bg-card border border-accent/30 hover:border-accent/60 transition-all duration-200"
            >
              {/* Trait Header */}
              <CardHeader>
                <CardTitle className="text-xxl flex items-center gap-2">
                  <img
                    src={traitIcon(trait.name)}
                    alt={trait.name}
                    className="w-8 h-8 inline-block"
                  />
                  {trait.name}
                </CardTitle>
              </CardHeader>

              {/* Trait Content */}
              <CardContent>
                {/* description */}
                <p className="mb-4 text-muted-foreground">{trait.description}</p>

                {/* thresholds */}
                <div className="space-y-1 mb-4">
                  {trait.thresholds.map((t, i) => (
                    <div key={i} className="text-sm font-semibold">
                      [{t.value}]: {t.effect}
                    </div>
                  ))}
                </div>

                {/* units belonging to this trait */}
                <div className="flex flex-wrap gap-2">
                  {Object.entries(UNIT_DATA)
                    .filter(([_, data]) => data.traits.includes(trait.name))
                    .map(([unitName, data]) => (
                      <div
                        key={unitName}
                        className="relative w-12 h-14 rounded border border-accent/30 bg-secondary"
                      >
                        <img
                          src={unitPortrait(unitName)}
                          alt={unitName}
                          className="w-full h-full object-cover rounded"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg"
                          }}
                        />
                        {/* cost bubble */}
                        <div className="absolute -top-2 -left-2 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                          {data.cost}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
