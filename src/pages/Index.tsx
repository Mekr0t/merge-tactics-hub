import { Header } from "@/components/Header";
import { CompCard } from "@/components/CompCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockComps } from "@/data/mockData";
import { TrendingUp, Zap, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom"

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
            Updated for current Season • Based on top player strategies & community rankings
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="px-3 py-1">
              <TrendingUp className="w-4 h-4 mr-2" />
              Meta Updated Daily
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Zap className="w-4 h-4 mr-2" />
              Patch 13.8.2025
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
            {[...mockComps]
              .sort((a, b) => {
                const order = { S: 0, A: 1, B: 2, C: 3 }
                return order[a.tier] - order[b.tier]
              })
              .slice(0, 6)
              .map(comp => (
                <CompCard key={comp.id} {...comp} />
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
            <Button><Link to="/guides">Start Learning</Link></Button>
          </div>
          
          <div className="comp-card text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Meta Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Deep dive into the current meta with tier lists and analysis.
            </p>
            <Button variant="outline"><Link to="/comps">View Analysis</Link></Button>
          </div>
          
          <div className="comp-card text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-neon-cyan" />
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-muted-foreground mb-4">
              Share builds, discuss strategies, and connect with players.
            </p>
            <Button asChild variant="outline">
              {/* DC server link will be there */}
              <a 
              >
                Comming Soon
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
