import { Header } from "@/components/Header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Target, TrendingUp, Zap, Shield, Swords } from "lucide-react";
import { Link } from "react-router-dom";

export default function Guides() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card border border-accent/20 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4 text-primary" />
            Official Clash Royale Mode
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">Merge Tactics</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl">Mastery Guide</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From first match to diamond rank. Master the economy, dominate with synergies, 
            and climb the ladder with pro strategies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="comp-card px-6 py-3">
              <div className="text-2xl font-bold text-primary">4 Players</div>
              <div className="text-sm text-muted-foreground">Auto-battler</div>
            </div>
            <div className="comp-card px-6 py-3">
              <div className="text-2xl font-bold text-accent">5-8 Min</div>
              <div className="text-sm text-muted-foreground">Match time</div>
            </div>
            <div className="comp-card px-6 py-3">
              <div className="text-2xl font-bold text-neon-cyan">Last Standing</div>
              <div className="text-sm text-muted-foreground">Win condition</div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <a href="#basics"><Button variant="outline" className="neon-glow">Game Basics</Button></a>
          <a href="#rulers"><Button variant="outline" className="neon-glow">Choose Your Ruler</Button></a>
          <a href="#beginner"><Button variant="outline" className="neon-glow">Beginner</Button></a>
          <a href="#intermediate"><Button variant="outline" className="neon-glow">Intermediate</Button></a>
          <a href="#pro"><Button variant="outline" className="neon-glow">Pro Tactics</Button></a>
        </div>

        {/* Game Basics */}
        <section id="basics" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Game Basics</h2>
              <p className="text-muted-foreground text-lg">Understanding the core mechanics</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="comp-card hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Round Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold text-foreground">Deploy Phase</p>
                      <p className="text-sm">Buy, merge, sell, and position troops with your Elixir</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold text-foreground">Battle Phase</p>
                      <p className="text-sm">Auto-battle against paired opponent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-cyan text-background rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold text-foreground">Damage Calculation</p>
                      <p className="text-sm">Lose HP = surviving enemy troops + 1</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card/50 border border-accent/20 p-3 rounded-lg">
                  <p className="text-sm"><span className="text-primary font-semibold">Pro Tip:</span> Early losses hurt less—use them strategically to build economy</p>
                </div>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Shared Pool System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="text-sm leading-relaxed">All players draw from the same limited pool—only <span className="text-accent font-bold">4 copies</span> of each troop exist (except Goblins).</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-card/50 border border-accent/20 p-2 rounded">
                    <span className="text-sm">Pool Strategy</span>
                    <Badge variant="secondary" className="text-xs">Advanced</Badge>
                  </div>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Deny opponents key units by holding extras</li>
                    <li>• Monitor what others are building</li>
                    <li>• Pivot when your units are contested</li>
                  </ul>
                </div>
                
                <div className="bg-card/50 border border-primary/30 p-3 rounded-lg">
                  <p className="text-sm text-primary"><span className="font-semibold">Strategy:</span> Scout opponents and buy their key pieces to block upgrades</p>
                </div>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-neon-cyan/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Merging & Stars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-2 bg-card/50 border border-accent/20 rounded">
                    <div className="text-primary font-bold">2x 1★</div>
                    <div className="text-xs">→ 1x 2★</div>
                  </div>
                  <div className="text-center p-2 bg-card/50 border border-accent/20 rounded">
                    <div className="text-primary font-bold">2x 2★</div>
                    <div className="text-xs">→ 1x 3★</div>
                  </div>
                </div>
                
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Each merge refunds +1 Elixir
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Higher stars = better stats & abilities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    Always merge before selling for profit
                  </li>
                </ul>
                
                <div className="bg-card/50 border border-neon-cyan/30 p-3 rounded-lg">
                  <p className="text-sm text-neon-cyan"><span className="font-semibold">Key:</span> Leave space for merges, don't clog with 1★ units</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rulers Section */}
        <section id="rulers" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Choose Your Ruler</h2>
              <p className="text-muted-foreground text-lg">Your economic foundation</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="comp-card hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground text-2xl flex items-center gap-2">
                    <Crown className="w-6 h-6 text-primary" />
                    Royale King
                  </CardTitle>
                  <Badge className="bg-primary/20 text-primary border border-primary/30">Default</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="bg-card/50 border border-primary/30 p-4 rounded-lg">
                  <p className="font-bold text-primary mb-2">Royal Commission</p>
                  <p className="text-lg text-foreground">+4 Elixir on every loss</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Best For:</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Loss-streaking strategy (intentional early losses)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Comeback mechanics and safety net
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      High-cost, late-game compositions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Beginner-friendly (forgiving)
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 border border-primary/30 p-3 rounded-lg">
                  <p className="text-sm text-primary"><span className="font-semibold">Pro Strategy:</span> Tank 1-2 early rounds when damage is low, then spend big in mid-game</p>
                </div>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-neon-cyan/50 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground text-2xl flex items-center gap-2">
                    <Zap className="w-6 h-6 text-neon-cyan" />
                    Spirit Empress
                  </CardTitle>
                  <Badge className="bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">Unlock: Bronze III</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="bg-card/50 border border-neon-cyan/30 p-4 rounded-lg">
                  <p className="font-bold text-neon-cyan mb-2">Fusion Foresight</p>
                  <p className="text-lg text-foreground">+1 bonus Elixir per merge</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Best For:</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Aggressive merge-heavy gameplay
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Win-streak strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Goblin economy builds
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Snowball tempo advantages
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 border border-neon-cyan/30 p-3 rounded-lg">
                  <p className="text-sm text-neon-cyan"><span className="font-semibold">Pro Strategy:</span> Merge Goblins for +2 Elixir each, enables endless shop cycling</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Beginner Guide */}
        <section id="beginner" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-accent/20 p-3 rounded-xl border border-accent/30">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beginner Guide</h2>
              <p className="text-muted-foreground text-lg">Master the fundamentals</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="comp-card hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">First 10 Games Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                    <p className="text-sm">Merge early & often for power and Elixir refunds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                    <p className="text-sm">Leave space to merge—don't clog with 1★ units</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                    <p className="text-sm">Pick one simple synergy (Goblins or Clan)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                    <p className="text-sm">Tanks front, ranged behind, spread vs splash</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Economy Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="bg-card/50 border border-primary/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-2">Shop Cycling Trick:</p>
                  <p className="text-sm">Buy cheap unit → Sell = 1 Elixir to refresh shop</p>
                </div>
                
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Start each round with 4 Elixir
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Merging gives +1 Elixir back (+2 with Empress)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    Selling costs 1 Elixir (price - 1)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-neon-cyan/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Starter Synergies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div className="bg-card/50 border border-primary/30 p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Goblin Economy</p>
                    <p className="text-xs">Merge cheap Goblins, snowball Elixir advantage</p>
                  </div>
                  
                  <div className="bg-card/50 border border-accent/30 p-3 rounded-lg">
                    <p className="font-semibold text-accent mb-1">Clan + Tank</p>
                    <p className="text-xs">Durable frontline with healing at 50% HP</p>
                  </div>
                  
                  <div className="bg-card/50 border border-neon-cyan/30 p-3 rounded-lg">
                    <p className="font-semibold text-neon-cyan mb-1">Ranger DPS</p>
                    <p className="text-xs">Archers + ranged units for stacking attack speed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Intermediate Tactics */}
        <section id="intermediate" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Intermediate Tactics</h2>
              <p className="text-muted-foreground text-lg">Level up your gameplay</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="comp-card hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Advanced Economy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <div className="bg-card/50 border border-primary/30 p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Health Management</p>
                    <p className="text-xs">High HP = greed more, Low HP = stabilize now</p>
                  </div>
                  
                  <ul className="text-sm space-y-2">
                    <li>• Only roll for specific spikes (2★/3★ carry)</li>
                    <li>• King players can loss-streak early safely</li>
                    <li>• Save Elixir for key power moments</li>
                    <li>• Use interest modifiers when available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-neon-cyan/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Unit Denial</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="bg-card/50 border border-neon-cyan/30 p-3 rounded-lg">
                  <p className="font-semibold text-neon-cyan mb-1">Pool Strategy</p>
                  <p className="text-xs">Buy opponents' key units to block their upgrades</p>
                </div>
                
                <ul className="text-sm space-y-2">
                  <li>• Scout enemy boards constantly</li>
                  <li>• Hold extras of contested meta units</li>
                  <li>• Force pivots by denying key pieces</li>
                  <li>• Sell denials back when opponent dies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-accent/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Flexible Synergies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-3">
                  <p className="text-sm">Use dual-trait units for efficiency:</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-card/50 border border-accent/20 p-2 rounded">Archer: Clan + Ranger</div>
                    <div className="bg-card/50 border border-accent/20 p-2 rounded">Valkyrie: Clan + Avenger</div>
                    <div className="bg-card/50 border border-accent/20 p-2 rounded">Knight: Noble + Juggernaut</div>
                    <div className="bg-card/50 border border-accent/20 p-2 rounded">Bandit: Avenger + Ace</div>
                  </div>
                  
                  <div className="bg-card/50 border border-accent/30 p-2 rounded-lg">
                    <p className="text-xs text-accent">Aim for multiple 2-3 trait thresholds rather than maxing one</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="comp-card hover:border-accent/50 transition-all duration-300 md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-foreground text-xl">Adaptive Positioning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">Counter-Positioning:</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span><span className="font-semibold">vs Assassins:</span> Bait units in backline corners</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span><span className="font-semibold">vs Splash:</span> Spread units to avoid multi-hits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                        <span><span className="font-semibold">vs Carries:</span> Focus fire priority targets first</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">Advanced Tips:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Mirror enemy carry positions to focus them</li>
                      <li>• Use Juggernaut shields for key allies behind</li>
                      <li>• Last-second swaps to confuse opponents</li>
                      <li>• Scout fights to learn enemy patterns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pro Tactics */}
        <section id="pro" className="mb-12 scroll-mt-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-neon-cyan/20 p-3 rounded-xl border border-neon-cyan/30">
              <Swords className="w-8 h-8 text-neon-cyan" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Pro Tactics & Meta</h2>
              <p className="text-muted-foreground text-lg">Master the highest level play</p>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Advanced Strategies */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="comp-card hover:border-neon-cyan/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground text-xl">Elixir Mastery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="text-sm space-y-2">
                    <li>• Plan Elixir carryover between rounds</li>
                    <li>• Execute merge→sell loops for "free" power</li>
                    <li>• Use interest modifiers optimally</li>
                    <li>• Never float Elixir unnecessarily</li>
                  </ul>
                  
                  <div className="bg-card/50 border border-neon-cyan/30 p-3 rounded-lg">
                    <p className="text-sm text-neon-cyan"><span className="font-semibold">Pro Tip:</span> Merge units during battle phase if shop refreshes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="comp-card hover:border-accent/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-foreground text-xl">Trait Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="text-sm space-y-2">
                    <li>• Anchor around 4-unit core synergy</li>
                    <li>• Overlap traits for maximum efficiency</li>
                    <li>• Rush 3★ carries when safe to do so</li>
                    <li>• Use bench merging for surprise spikes</li>
                  </ul>
                  
                  <div className="bg-card/50 border border-accent/30 p-3 rounded-lg">
                    <p className="text-sm text-accent"><span className="font-semibold">Focus:</span> Quality over quantity—fewer maxed traits beats many weak ones</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="comp-card hover:border-primary/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-foreground text-xl">Modifier Adaptation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Key Modifiers to Watch:</p>
                    <ul className="text-xs space-y-1">
                      <li>• <span className="text-primary">Big Bucks:</span> +5 starting Elixir</li>
                      <li>• <span className="text-accent">Bigger Team:</span> +1 unit slot</li>
                      <li>• <span className="text-neon-cyan">First Free:</span> First buy costs 0</li>
                      <li>• <span className="text-primary">Richer & Richer:</span> Interest bonus</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 border border-primary/30 p-3 rounded-lg">
                    <p className="text-xs text-primary">Always read modifier at match start—adapt strategy immediately</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-12 comp-card">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Dominate?</h3>
          <p className="text-muted-foreground text-lg mb-6">Apply these strategies and climb to Diamond rank</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 neon-glow"
              onClick={() => window.open("https://supercell.com/en/games/clashroyale", "_blank")}
            >
              Start Playing
            </Button>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 neon-glow"><Link to="/comps">View Meta Tracker</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}