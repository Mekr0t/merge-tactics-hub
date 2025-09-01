import { Header } from "@/components/Header"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const rulers = [
  {
    name: "Royale King",
    unlock: "Starter Ruler",
    ability: "Royal Commission: Losing grants you +4 Elixir",
    image: "/rulers/royaleking.webp",
  },
  {
    name: "Spirit Empress",
    unlock: "Unlocks at Silver I",
    ability: "Fusion Foresight: Every merge grants you +1 bonus Elixir",
    image: "/rulers/spiritempress.webp",
  },
]

export default function Rulers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
          <span className="text-gradient">Merge Tactics Rulers</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-10">
          Rulers are the heart of your team — protect them at all costs! Each brings a unique ability that can turn the tide of battle.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {rulers.map((ruler, i) => (
            <Card
              key={i}
              className="bg-card border border-accent/30 hover:border-accent/60 transition-all duration-200 text-center p-6"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{ruler.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{ruler.unlock}</p>
              </CardHeader>
              <CardContent>
                <img
                  src={ruler.image}
                  alt={ruler.name}
                  className="w-42 h-60 mx-auto mb-4 object-contain"
                />
                <p className="font-semibold">{ruler.ability}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom info */}
        <p className="text-muted-foreground text-center mt-12 max-w-2xl mx-auto">
          Rulers don’t level up, but collecting Ruler Cards unlocks cosmetic rewards such as new skins and victory confetti.
        </p>
      </div>
    </div>
  )
}
