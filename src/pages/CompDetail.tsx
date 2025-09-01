import { Header } from "@/components/Header";
import { BattlefieldGrid } from "@/components/BattlefieldGrid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockComps } from "@/data/mockData";
import { ArrowLeft, Crown, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { unitPortrait } from "@/lib/unitPortrait";
import { traitIcon } from "@/lib/traitIcon";
import { UNIT_DATA } from "@/lib/unitData";
import { normalizeUnitName } from "@/lib/unitUtils";
import { calculateTraits, getTraitColor } from "@/lib/calcTraits";

const CompDetail = () => {
  const { id } = useParams();
  const comp = mockComps.find(c => c.id === Number(id)) || mockComps[0];
  const traits = calculateTraits(comp.units);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/comps"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Comps
          </Link>
        </div>

        {/* Comp Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h1 className="text-4xl font-bold">{comp.name}</h1>
              <Badge className={`tier-badge tier-${comp.tier.toLowerCase()} flex flex-col items-center justify-center leading-none`}>
                <span className="text-[14px]">TIER</span>
                <span className="text-base font-bold">{comp.tier}</span>
              </Badge>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Crown className="w-4 h-4" />
              <span>{comp.ruler}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Battlefield */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Battlefield Positioning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BattlefieldGrid units={comp.battlefieldUnits} />
              </CardContent>
            </Card>

            {/* Description / Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Comp Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Comp Description */}
                <section>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{comp.descriptionLong}</p>
                </section>

                {/* When to Play */}
                {comp.whenToPlay && (
                  <section>
                    <h3 className="text-lg font-semibold mb-2">When to Play</h3>
                    <p className="text-muted-foreground">{comp.whenToPlay}</p>
                  </section>
                )}

                {/* Core Units */}
                {comp.coreUnits && (
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Core Units</h3>
                    <div className="flex gap-6">
                      {comp.coreUnits.map((unit, idx) => {
                        const normalized = normalizeUnitName(unit);
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center w-24 text-center"
                          >
                            <img
                              src={unitPortrait(normalized)}
                              alt={unit}
                              className="w-20 h-24 object-cover rounded-lg border border-accent/30"
                            />
                            <div className="text-sm font-medium mt-2">{unit}</div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Tips */}
                {comp.tips && (
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Tips & Tricks</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {comp.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Traits */}
            <Card>
              <CardHeader>
                <CardTitle>Active Traits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {traits
                  .sort((a, b) => b.level / b.max - a.level / a.max)
                  .map((trait, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg border ${getTraitColor(trait.level, trait.max)}`}
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          src={traitIcon(trait.name)}
                          alt={trait.name}
                          className="w-8 h-8"
                        />
                        <span className="font-semibold">{trait.name}</span>
                      </div>
                      <span className="text-sm font-bold">
                        {trait.level} / {trait.max}
                      </span>
                    </div>
                  ))}
              </CardContent>
            </Card>

            {/* Units */}
            <Card>
              <CardHeader>
                <CardTitle>Units</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {comp.units.map((unit, index) => {
                    const normalized = normalizeUnitName(unit);
                    const data =
                      UNIT_DATA[normalized] || {
                        cost: "?",
                        traits: [] as string[],
                        displayName: normalized,
                      };

                    return (
                      <div
                        key={index}
                        className="relative p-1 bg-secondary rounded border border-accent/40 hover:border-accent/70 transition-colors"
                      >
                        {/* Portrait */}
                        <img
                          src={unitPortrait(normalized)}
                          alt={data.displayName}
                          className="w-full aspect-[3/4] object-cover rounded-lg border border-accent/30"
                        />

                        {/* Cost */}
                        <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold text-sm px-2 py-1 rounded-full shadow-lg">
                          {data.cost}
                        </div>

                        {/* Name */}
                        <div className="mt-2 text-center text-sm font-semibold leading-tight">
                          {data.displayName}
                        </div>

                        {/* Traits */}
                        <div className="mt-2 flex justify-center gap-1">
                          {data.traits.map((t, i) => (
                            <img
                              key={`${normalized}-trait-${i}`}
                              src={traitIcon(t)}
                              alt={t}
                              className="w-6 h-6 object-contain"
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CompDetail;
