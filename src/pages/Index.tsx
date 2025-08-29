import { Header } from "@/components/Header";
import { CompCard } from "@/components/CompCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockComps } from "@/data/mockData";
import { TrendingUp, Zap, Users, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Best <span className="text-gradient">Merge Tactics</span> Comps
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Updated for Season X • Based on top player strategies & community rankings
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="px-3 py-1">
              <TrendingUp className="w-4 h-4 mr-2" />
              Meta Updated Daily
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Zap className="w-4 h-4 mr-2" />
              Patch 2.4.1
            </Badge>
          </div>
        </div>

        {/* Meta Comps Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-primary" />
            Meta Compositions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockComps.map((comp) => (
              <CompCard key={comp.id} {...comp} />
            ))}
          </div>
        </div>

        {/* Community Section Preview */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Users className="w-6 h-6 mr-2 text-accent" />
              🔥 Trending from Community
            </h2>
            <Button variant="outline">
              View All Community Comps
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockComps.slice(0, 3).map((comp) => (
              <div key={`community-${comp.id}`} className="comp-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{comp.name} v2</h3>
                  <Badge variant="secondary">Community</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Modified the classic {comp.name} build for better early game!"
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>By: ProPlayer123</span>
                  <span>👍 142 • 💬 23</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="comp-card text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">New to Merge Tactics?</h3>
            <p className="text-muted-foreground mb-4">
              Learn the basics with our comprehensive beginner guides.
            </p>
            <Button>Start Learning</Button>
          </div>
          
          <div className="comp-card text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Meta Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Deep dive into the current meta with tier lists and analysis.
            </p>
            <Button variant="outline">View Analysis</Button>
          </div>
          
          <div className="comp-card text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-neon-cyan" />
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-muted-foreground mb-4">
              Share builds, discuss strategies, and connect with players.
            </p>
            <Button variant="outline">Join Discord</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
