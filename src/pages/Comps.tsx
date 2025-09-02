import { Header } from "@/components/Header"
import { mockComps } from "@/data/mockData"
import { CompCard } from "@/components/CompCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Crown } from "lucide-react"
import { unitPortrait } from "@/lib/unitPortrait"
import { calculateTraits } from "@/lib/calcTraits"
import { normalizeUnitName } from "@/lib/unitUtils"

const tierColors: Record<string, string> = {
  S: "text-tier-s",
  A: "text-green-500",
  B: "text-yellow-400",
  C: "text-gray-400",
}

export default function Comps() {
  const compsByTier: Record<string, typeof mockComps> = {}
  mockComps.forEach((comp) => {
    if (!compsByTier[comp.tier]) compsByTier[comp.tier] = []
    compsByTier[comp.tier].push(comp)
  })

  const sortedTiers = Object.keys(compsByTier).sort(
    (a, b) => ["S", "A", "B", "C"].indexOf(a) - ["S", "A", "B", "C"].indexOf(b)
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
          <span className="text-gradient">Team Compositions Tier List</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-10">
          All comps grouped by tier — find the strongest S-tier comps down to fun C-tier experiments.
        </p>

        <div className="space-y-12">
          {sortedTiers.map((tier) => (
            <div key={tier}>
              <h2
                className={`text-3xl font-extrabold mb-6 text-center ${
                  tierColors[tier] || "text-foreground"
                }`}
              >
                {tier}-Tier
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {compsByTier[tier].map((comp) => {
                  const traits = calculateTraits(comp.units ?? [])
                  return (
                    <div key={comp.id} className="comp-card group cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {comp.name}
                        </h3>
                        <Badge className={`tier-badge tier-${comp.tier.toLowerCase()}`}>
                          {comp.tier}
                        </Badge>
                      </div>

                      {/* Ruler */}
                      <div className="flex items-center space-x-2 mb-3">
                        <Crown className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{comp.ruler}</span>
                      </div>

                      {/* Unit Icons */}
                      <div className="flex space-x-1 overflow-x-auto no-scrollbar mb-3">
                        {comp.units.map(unit => {
                          const normalized = normalizeUnitName(unit);
                          return (
                            <img
                              key={unit}
                              src={unitPortrait(normalized)}
                              alt={normalized}
                              className="w-16 h-18 flex-shrink-0 rounded object-cover border border-accent/20 neon-glow"
                            />
                          );
                        })}
                      </div>

                      {/* Traits */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {traits
                          .sort((a, b) => b.level / b.max - a.level / a.max)
                          .slice(0, 4)
                          .map((trait, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {trait.name} {trait.level}
                            </Badge>
                        ))}
                      </div>

                      {/* ✅ Description right here */}
                      {comp.description && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {comp.description}
                        </p>
                      )}

                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link
                          to={`/comp/${comp.id}`}
                          className="flex items-center w-full justify-center"
                        >
                          See Guide
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
