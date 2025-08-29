import { Header } from "@/components/Header";
import { BattlefieldGrid } from "@/components/BattlefieldGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockComps } from "@/data/mockData";
import { ArrowLeft, Crown, Target, Users, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CompDetail = () => {
  const { id } = useParams();
  const comp = mockComps.find(c => c.id === Number(id)) || mockComps[0];

  const battlefieldUnits = [
    { position: 0, name: "Knight", cost: 3 },
    { position: 1, name: "Guardian", cost: 4 },
    { position: 4, name: "Paladin", cost: 5 },
    { position: 5, name: "Crusader", cost: 4 },
    { position: 9, name: "Champion", cost: 6 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Comps
          </Link>
        </div>

        {/* Comp Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h1 className="text-4xl font-bold">{comp.name}</h1>
              <Badge className={`tier-badge tier-${comp.tier.toLowerCase()}`}>
                Tier {comp.tier}
              </Badge>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Crown className="w-4 h-4" />
              <span>{comp.ruler}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="outline" size="sm">
              <ThumbsUp className="w-4 h-4 mr-2" />
              234
            </Button>
            <Button variant="outline" size="sm">
              <ThumbsDown className="w-4 h-4 mr-2" />
              12
            </Button>
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
                <BattlefieldGrid units={battlefieldUnits} />
                <p className="text-sm text-muted-foreground mt-4">
                  Position your tanks in the front row to absorb damage while damage dealers stay protected in the back.
                </p>
              </CardContent>
            </Card>

            {/* Game Plan Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Game Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="early" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="early">Early Game</TabsTrigger>
                    <TabsTrigger value="mid">Mid Game</TabsTrigger>
                    <TabsTrigger value="late">Late Game</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="early" className="space-y-4">
                    <h3 className="text-lg font-semibold">Early Game Strategy</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Prioritize Knight and Guardian as your early tanks</li>
                      <li>• Look for Noble trait synergy (2-piece bonus)</li>
                      <li>• Save gold for economy, don't force upgrades</li>
                      <li>• Position tanks in front row for maximum protection</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="mid" className="space-y-4">
                    <h3 className="text-lg font-semibold">Mid Game Strategy</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Transition to 4 Juggernaut synergy for shields</li>
                      <li>• Add Paladin for healing and protection</li>
                      <li>• Start leveling to fit more units on board</li>
                      <li>• Focus on upgrading your carry units</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="late" className="space-y-4">
                    <h3 className="text-lg font-semibold">Late Game Strategy</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Complete 6 Juggernaut for maximum shields</li>
                      <li>• Add Champion as your main damage dealer</li>
                      <li>• Perfect positioning against enemy carries</li>
                      <li>• Upgrade all units to maximum stars</li>
                    </ul>
                  </TabsContent>
                </Tabs>
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
                {comp.traits.map((trait, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{trait.name}</span>
                    <Badge variant="secondary">{trait.level}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Units */}
            <Card>
              <CardHeader>
                <CardTitle>Key Units</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {comp.units.map((unit, index) => (
                    <div
                      key={index}
                      className="p-3 bg-secondary rounded border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer"
                    >
                      <div className="text-center">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-2">
                          {unit.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="text-sm font-medium">{unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Win Rate:</span>
                  <span className="font-semibold text-neon-green">74.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Play Rate:</span>
                  <span className="font-semibold">12.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Place:</span>
                  <span className="font-semibold text-tier-s">2.3</span>
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