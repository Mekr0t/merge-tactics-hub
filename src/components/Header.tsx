import { 
  Search, Sword, Trophy, Users, BookOpen, Target, Puzzle, Menu 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/favicon.ico" 
              alt="TacticsMeta logo" 
              className="w-12 h-12 rounded-lg"
            />
            <span className="text-xl font-bold text-gradient">TacticsMeta.com</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
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
            <Link to="/troops" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <Users className="w-4 h-4" />
              <span>Troops</span>
            </Link>
            <Link to="/modifiers" className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
              <Puzzle className="w-4 h-4" />
              <span>Modifiers</span>
            </Link>
          </nav>

          {/* Right Side: Search + Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Desktop Search */}

            {/* Mobile Search + Menu */}
            <div className="flex items-center space-x-2 md:hidden">

              {/* Hamburger / Drawer Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    <Link to="/comps" className="text-lg">Comps</Link>
                    <Link to="/traits" className="text-lg">Traits</Link>
                    <Link to="/rulers" className="text-lg">Rulers</Link>
                    <Link to="/guides" className="text-lg">Guides</Link>
                    <Link to="/troops" className="text-lg">Troops</Link>
                    <Link to="/modifiers" className="text-lg">Modifiers</Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};