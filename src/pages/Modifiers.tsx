import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { mockModifiers } from "@/data/mockData"
import { modIcon } from "@/lib/modIcon"
import { Header } from "@/components/Header"

export default function Modifiers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
          <span className="text-gradient">Merge Tactics Modifiers</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-10">
          Modifiers change core gameplay mechanics and are unlocked as you progress through different leagues.
        </p>

        {mockModifiers.map((league, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold text-center text-primary mb-6">
              {league.name}
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {league.modifiers.map((mod, i) => (
                <Card
                  key={i}
                  className="bg-card border border-accent/30 hover:border-accent/60 transition-all duration-200"
                >
                  <CardHeader className="flex flex-row items-center space-x-3">
                    {/* Mod icon */}
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={modIcon(mod.title)}
                        alt={mod.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
                        }}
                      />
                    </div>
                    <CardTitle className="text-lg">{mod.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{mod.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
