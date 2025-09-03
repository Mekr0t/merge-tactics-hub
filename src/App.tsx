import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompDetail from "./pages/CompDetail";
import NotFound from "./pages/NotFound";
import Comps from "./pages/Comps";
import Traits from "./pages/Traits";
import Rulers from "./pages/Rulers";
import Guides from "./pages/Guides";
import Modifiers from "./pages/Modifiers";
import Units from "./pages/Troops";
import ScrollToTop from "./components/ScrollToTop";
import Mergle from "./pages/Mergle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/comp/:id" element={<CompDetail />} />
            <Route path="/" element={<Index />} />
            <Route path="/comps" element={<Comps />} />
            <Route path="/traits" element={<Traits />} />
            <Route path="/rulers" element={<Rulers />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/troops" element={<Units />} />
            <Route path="/modifiers" element={<Modifiers />} />
            <Route path="/mergle" element={<Mergle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
