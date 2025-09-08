// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Advertisers from "./pages/Advertisers";
import Authors from "./pages/Authors";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails"; // no .tsx

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/advertisers" element={<Advertisers />} />
          {/* Slug route with no /product prefix */}
          <Route path="/:slug" element={<BookDetails />} />
          {/* Catch-all LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
