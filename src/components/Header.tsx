import { Search, Sword, Trophy, Users, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sword className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">MergeTactics.gg</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/comps" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <Trophy className="w-4 h-4" />
              <span>Comps</span>
            </Link>
            <Link to="/traits" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <Target className="w-4 h-4" />
              <span>Traits</span>
            </Link>
            <Link to="/rulers" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <Sword className="w-4 h-4" />
              <span>Rulers</span>
            </Link>
            <Link to="/guides" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Guides</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Input 
                placeholder="Search comp or trait..." 
                className="w-64 pl-10 bg-secondary border-accent/20 focus:border-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <Button size="sm" className="md:hidden">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};