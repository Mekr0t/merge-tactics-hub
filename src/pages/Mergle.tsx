import React, { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sword, Eye, Image as ImageIcon, Users, Scroll, RotateCcw } from "lucide-react";
import { UNIT_DATA } from "@/lib/unitData";
import { mockModifiers } from "@/data/mockData";
import { unitPortrait } from "@/lib/unitPortrait";
import { on } from "events";


const GameModes = { MENU: "menu", CLASSIC: "classic", DESCRIPTION: "description", PORTRAIT: "portrait", TRAIT: "trait", MODIFIER: "modifier" } as const;
type Mode = typeof GameModes[keyof typeof GameModes];

/** === Helpers === */
const allUnits = Object.values(UNIT_DATA);
const unitNames = allUnits.map((u) => u.displayName);
const getRandomUnit = () => allUnits[Math.floor(Math.random() * allUnits.length)];
const getRandomModifier = () => {
  const league = mockModifiers[Math.floor(Math.random() * mockModifiers.length)];
  return league.modifiers[Math.floor(Math.random() * league.modifiers.length)];
};

const getRandomTraitPuzzle = () => {
  const allTraits = [...new Set(allUnits.flatMap((u) => u.traits))];
  const trait = allTraits[Math.floor(Math.random() * allTraits.length)] as string;
  const unitsWithTrait = allUnits.filter((u) => u.traits.includes(trait));
  if (unitsWithTrait.length < 2) return getRandomTraitPuzzle();
  const hiddenUnit = unitsWithTrait[Math.floor(Math.random() * unitsWithTrait.length)];
  const visibleUnits = unitsWithTrait.filter((u) => u !== hiddenUnit);
  return { trait, hiddenUnit, visibleUnits };
};

const onTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const onBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
};



export default function MergleGame() {
  const [mode, setMode] = useState<Mode>(GameModes.MENU);
  const [currentUnit, setCurrentUnit] = useState<any>(null);
  const [currentModifier, setCurrentModifier] = useState<any>(null);
  const [currentTrait, setCurrentTrait] = useState<string | null>(null);
  const [missingUnit, setMissingUnit] = useState<any>(null);

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [maxGuesses, setMaxGuesses] = useState(6);
  const [portraitZoom, setPortraitZoom] = useState(900);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mode !== GameModes.MENU) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [mode]);
  

  /** Start/Reset */
  const startGame = (m: Mode) => {
    setMode(m);
    setGuesses([]);
    setCurrentGuess("");
    setGameWon(false);
    setGameLost(false);
    setPortraitZoom(500);

    if (m === GameModes.CLASSIC || m === GameModes.DESCRIPTION || m === GameModes.PORTRAIT) {
      setCurrentUnit(getRandomUnit());
      setMaxGuesses(6);
      setCurrentModifier(null);
      setMissingUnit(null);
      setCurrentTrait(null);
    } else if (m === GameModes.TRAIT) {
      const p = getRandomTraitPuzzle();
      setCurrentTrait(p.trait);
      setMissingUnit(p.hiddenUnit);
      setCurrentUnit(p);
      setMaxGuesses(3);
      setCurrentModifier(null);
    } else if (m === GameModes.MODIFIER) {
      setCurrentModifier(getRandomModifier());
      setMaxGuesses(3);
      setCurrentTrait(null);
      setMissingUnit(null);
      setCurrentUnit(null);
    }
  };

  /** Guess flow */
  const makeGuess = () => {
    if (!currentGuess.trim() || gameWon || gameLost) return;

    const guess = currentGuess.trim();

    // 🚫 check duplicates
    if (guesses.some(g => g.toLowerCase() === guess.toLowerCase())) {
      setCurrentGuess("");
      inputRef.current?.focus();
      return;
    }

    // 🔍 validation depending on mode
    let valid = false;
    if (mode === GameModes.MODIFIER) {
      valid = mockModifiers.some(m =>
        m.modifiers.some(mod => mod.title.toLowerCase() === guess.toLowerCase())
      );
    } else {
      valid = allUnits.some(u => u.displayName.toLowerCase() === guess.toLowerCase());
    }

    if (!valid) {
      // 🚫 invalid guess → just clear input, don’t add
      setCurrentGuess("");
      inputRef.current?.focus();
      return;
    }

    // ✅ add only if valid & not duplicate
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    setCurrentGuess("");
    inputRef.current?.focus();

    let won = false;
    if (mode === GameModes.CLASSIC || mode === GameModes.DESCRIPTION || mode === GameModes.PORTRAIT) {
      won = guess.toLowerCase() === currentUnit.displayName.toLowerCase();
    } else if (mode === GameModes.TRAIT) {
      won = guess.toLowerCase() === missingUnit.displayName.toLowerCase();
    } else if (mode === GameModes.MODIFIER) {
      won = guess.toLowerCase() === currentModifier.title.toLowerCase();
    }

    if (won) {
      setGameWon(true);
    } else {
      if (mode === GameModes.PORTRAIT) {
        setPortraitZoom(z => Math.max(120, z - 80));
      }
      if (nextGuesses.length >= maxGuesses) setGameLost(true);
    }
  };



  /** Suggestions (only after first char, startsWith) */
  const suggestions = useMemo(() => {
    if (currentGuess.length < 1) return [];
    const src = mode === GameModes.MODIFIER ? mockModifiers.flatMap((m) => m.modifiers.map((mod) => mod.title)) : unitNames;
    const q = currentGuess.toLowerCase();
    return src.filter((name) => name.toLowerCase().startsWith(q)).slice(0, 10);
  }, [currentGuess, mode]);

  /** Classic feedback colors (green, orange for ±1, red) */
  const getClassicFeedback = (guess: string, target: any) => {
    const guessUnit = allUnits.find((u) => u.displayName.toLowerCase() === guess.toLowerCase());
    if (!guessUnit) return null;

    const match = (a: any, b: any) => (a === b ? "bg-green-600 text-white" : "bg-red-600 text-white");
    const near = (a: number, b: number) =>
      a === b ? "bg-green-600 text-white" : Math.abs(a - b) <= 1 ? "bg-orange-500 text-white" : "bg-red-600 text-white";

    return {
      unit: guessUnit,
      colors: {
        gender: match(guessUnit.gender, target.gender),
        origin: match(guessUnit.traits[0], target.traits[0]),
        klass: match(guessUnit.traits[1], target.traits[1]),
        range: near(guessUnit.range, target.range),
        cost: near(guessUnit.cost, target.cost)
      }
    };
  };

  /** UI bits */
  const TopBar = () => (
    <div className="sticky top-[72px] z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="flex items-center justify-between  py-3 w-full px-4">
        {/* left side */}
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="gap-2" onClick={() => setMode(GameModes.MENU)}>
            <RotateCcw className="w-4 h-4" />
            Back
          </Button>
          <Badge variant="secondary" className="capitalize">Mode: {mode}</Badge>
        </div>

        {/* right side */}
        <div className="text-sm text-muted-foreground">
          Guesses: {guesses.length} / {maxGuesses}
        </div>
      </div>
    </div>
  );

  const GuessInput = ({ placeholder }: { placeholder: string }) => (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          makeGuess();
        }}
        className="flex gap-2"
      >
        <Input
          ref={inputRef}
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          placeholder={placeholder}
          className="h-11"
          autoFocus
        />
        <Button type="submit" disabled={!currentGuess.trim()} className="h-11">Guess</Button>
      </form>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <Card className="absolute mt-1 w-full shadow-xl">
          <CardContent className="p-2">
            <div className="flex flex-wrap gap-1 max-h-48 overflow-y-auto">
              {suggestions.map((name) => (
                <Button
                  key={name}
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="justify-start"
                  onMouseDown={(e) => {
                    e.preventDefault();          // keep focus in input
                    setCurrentGuess(name);
                    // don’t auto-submit; user can press Enter
                  }}
                >
                  {name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const ModeMenu = () => (
    onTop(),
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 pt-6">
        <div className="w-full max-w-md text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">MERGLE</span>
          </h1>
          <p className="text-muted-foreground mb-10">Test your tactical knowledge!</p>

          <div className="flex flex-col gap-4">
            <Card className="hover:shadow-lg transition">
              <button
                onClick={() => startGame(GameModes.CLASSIC)}
                className="w-full p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sword className="w-6 h-6 mb-2" />
                  <h3 className="text-xl font-semibold">Classic</h3>
                </div>
                  <p className="text-muted-foreground">Guess the unit by its stats</p>

              </button>
            </Card>

            <Card className="hover:shadow-lg transition">
              <button
                onClick={() => startGame(GameModes.DESCRIPTION)}
                className="w-full p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Description</h3>
                </div>
                <p className="text-muted-foreground">Guess from the description</p>
              </button>
            </Card>

            <Card className="hover:shadow-lg transition">
              <button
                onClick={() => startGame(GameModes.PORTRAIT)}
                className="w-full p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <ImageIcon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Portrait</h3>
                </div>
                <p className="text-muted-foreground">Zoomed-in mystery portrait</p>
              </button>
            </Card>

            <Card className="hover:shadow-lg transition">
              <button
                onClick={() => startGame(GameModes.TRAIT)}
                className="w-full p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Trait</h3>
                </div>
                <p className="text-muted-foreground">Find the missing trait member</p>
              </button>
            </Card>

            <Card className="hover:shadow-lg transition">
              <button
                onClick={() => startGame(GameModes.MODIFIER)}
                className="w-full p-6 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Scroll className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Modifier</h3>
                </div>
                <p className="text-muted-foreground">Name the game modifier</p>
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
  


  const ClassicMode = () => (
    
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <TopBar />
        <div className="max-w-5xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <GuessInput placeholder="Enter unit name..." />
            </CardContent>
          </Card>

          {/* Feedback Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] grid grid-cols-6 gap-2 text-center text-sm text-muted-foreground">
              <div>Unit</div>
              <div>Gender</div>
              <div>Origin</div>
              <div>Class</div>
              <div>Range</div>
              <div>Cost</div>
            </div>

            <div className="space-y-2 mt-2 min-w-[600px]">
              {guesses.map((g, i) => {
                const fb = getClassicFeedback(g, currentUnit);
                return (
                  <div key={i} className="grid grid-cols-6 gap-2">
                    <Card>
                      <CardContent className="p-3 flex items-center justify-center">
                        <img
                          src={unitPortrait(fb.unit.displayName)}
                          alt={fb.unit.displayName}
                          className="w-12 h-16 rounded object-cover border border-accent/30"
                        />
                      </CardContent>
                    </Card>
                    <div className={`flex items-center justify-center rounded text-center font-semibold whitespace-nowrap ${fb.colors.gender}`}>
                      {fb.unit.gender}
                    </div>
                    <div className={`flex items-center justify-center rounded text-center font-semibold whitespace-nowrap ${fb.colors.origin}`}>
                      {fb.unit.traits[0]}
                    </div>
                    <div className={`flex items-center justify-center rounded text-center font-semibold whitespace-nowrap ${fb.colors.klass}`}>
                      {fb.unit.traits[1]}
                    </div>
                    <div className={`flex items-center justify-center rounded text-center font-semibold whitespace-nowrap ${fb.colors.range}`}>
                      {fb.unit.range}
                    </div>
                    <div className={`flex items-center justify-center rounded text-center font-semibold whitespace-nowrap ${fb.colors.cost}`}>
                      {fb.unit.cost}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {(gameWon || gameLost) && (
            onBottom(),
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${gameWon ? "text-green-500" : "text-red-500"}`}>
                  {gameWon ? "Congratulations!" : "Game Over"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  The answer was: <span className="font-semibold text-foreground">{currentUnit.displayName}</span>
                </p>
                <img
                  src={unitPortrait(currentUnit.displayName)}
                  alt={currentUnit.displayName}
                  className="w-24 h-30 mx-auto rounded mb-4"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <Button onClick={() => startGame(mode)}>Play Again</Button>
              </CardContent>
            </Card>
          )}

          {/* Legend pinned low */}
          <div className="pt-8">
            <div className="text-sm text-muted-foreground">Legend:</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded bg-green-600 text-white text-sm">Correct</span>
              <span className="px-3 py-1 rounded bg-orange-500 text-white text-sm">±1 (close)</span>
              <span className="px-3 py-1 rounded bg-red-600 text-white text-sm">Wrong</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DescriptionMode = () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <TopBar />
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Unit Description</h3>
              <p className="text-lg italic text-muted-foreground">“{currentUnit.description}”</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <GuessInput placeholder="Enter unit name..." />
            </CardContent>
          </Card>

          <div className="space-y-2">
            {guesses.map((g, i) => {
              const ok = g.toLowerCase() === currentUnit.displayName.toLowerCase();
              return (
                <div key={i} className={`p-3 rounded text-center ${ok ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                  {g}
                </div>
              );
            })}
          </div>

          {(gameWon || gameLost) && (
            onBottom(),
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${gameWon ? "text-green-500" : "text-red-500"}`}>
                  {gameWon ? "Correct!" : "Game Over"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  The answer was: <span className="font-semibold text-foreground">{currentUnit.displayName}</span>
                </p>
                <img
                  src={unitPortrait(currentUnit.displayName)}
                  alt={currentUnit.displayName}
                  className="w-45 h-60 mx-auto rounded mb-4"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <Button onClick={() => startGame(mode)}>Play Again</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (gameWon || gameLost) {
      setPortraitZoom(50); // reset to normal size
    }
  }, [gameWon]);

  const PortraitMode = () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <TopBar />
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Who is this unit?</h3>
              <div className="relative w-60 h-80 mx-auto rounded overflow-hidden bg-secondary">
                <img
                  src={unitPortrait(currentUnit.displayName)}
                  alt="Mystery Unit"
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-100 ${!gameWon ? "grayscale" : ""}`}
                  style={{ transform: `scale(${portraitZoom / 50})` }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Image zooms out with each incorrect guess</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <GuessInput placeholder="Enter unit name..." />
            </CardContent>
          </Card>

          <div className="space-y-2">
            {guesses.map((g, i) => {
              const ok = g.toLowerCase() === currentUnit.displayName.toLowerCase();
              return (
                <div key={i} className={`p-3 rounded ${ok ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                  {g}
                </div>
              );
            })}
          </div>

          {(gameWon || gameLost) && (
            onBottom(),
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${gameWon ? "text-green-500" : "text-red-500"}`}>
                  {gameWon ? "Correct!" : "Game Over"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  The answer was: <span className="font-semibold text-foreground">{currentUnit.displayName}</span>
                </p>
                <Button onClick={() => startGame(mode)}>Play Again</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );

  const TraitMode = () => {
    const { trait, visibleUnits } = currentUnit;
    return (
      
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <TopBar />
          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-center">
                  Which unit is missing?
                </h3>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visibleUnits.map((u: any, i: number) => (
                    <Card key={i}>
                      <CardContent className="p-4 text-center">
                        <img
                          src={unitPortrait(u.displayName)}
                          alt={u.displayName}
                          className="w-32 h-38 mx-auto mb-2 rounded object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        <p className="text-sm">{u.displayName}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <Card>
                    <CardContent className="p-4 text-center border-dashed">
                      <div className="w-24 h-24 mx-auto mb-2 rounded bg-secondary grid place-items-center">
                        <span className="text-2xl text-muted-foreground">?</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Missing Unit</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <GuessInput placeholder="Enter unit name..." />
              </CardContent>
            </Card>

            <div className="space-y-2">
              {guesses.map((g, i) => {
                const ok = g.toLowerCase() === missingUnit.displayName.toLowerCase();
                return (
                  <div key={i} className={`p-3 rounded text-center ${ok ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                    {g}
                  </div>
                );
              })}
            </div>

            {(gameWon || gameLost) && (
              onBottom(),
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${gameWon ? "text-green-500" : "text-red-500"}`}>
                    {gameWon ? "Correct!" : "Game Over"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The missing unit was: <span className="font-semibold text-foreground">{missingUnit.displayName}</span>
                  </p>
                  <img
                    src={unitPortrait(missingUnit.displayName)}
                    alt={missingUnit.displayName}
                    className="w-20 h-24 mx-auto rounded mb-4"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <Button onClick={() => startGame(mode)}>Play Again</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ModifierMode = () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <TopBar />
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Modifier Description</h3>
              <p className="text-lg italic text-muted-foreground">“{currentModifier.description}”</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <GuessInput placeholder="Enter modifier name..." />
            </CardContent>
          </Card>

          <div className="space-y-2">
            {guesses.map((g, i) => {
              const ok = g.toLowerCase() === currentModifier.title.toLowerCase();
              return (
                <div key={i} className={`p-3 rounded ${ok ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                  {g}
                </div>
              );
            })}
          </div>

          {(gameWon || gameLost) && (
            onBottom(),
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${gameWon ? "text-green-500" : "text-red-500"}`}>
                  {gameWon ? "Correct!" : "Game Over"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  The answer was: <span className="font-semibold text-foreground">{currentModifier.title}</span>
                </p>
                <Button onClick={() => startGame(mode)}>Play Again</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );

  /** Render */
  if (mode === GameModes.MENU) return <ModeMenu />;
  if (mode === GameModes.CLASSIC) return <ClassicMode />;
  if (mode === GameModes.DESCRIPTION) return <DescriptionMode />;
  if (mode === GameModes.PORTRAIT) return <PortraitMode />;
  if (mode === GameModes.TRAIT) return <TraitMode />;
  if (mode === GameModes.MODIFIER) return <ModifierMode />;
  return null;
}
