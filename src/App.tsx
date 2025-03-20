
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import ResourceUtilization from "./pages/ResourceUtilization";
import ResourceDetails from "./pages/ResourceDetails";
import Initiatives from "./pages/Initiatives";
import InitiativeDetails from "./pages/InitiativeDetails";
import ROI from "./pages/ROI";
import CostSavingsBreakdown from "./pages/CostSavingsBreakdown";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/resources" element={<ResourceUtilization />} />
          <Route path="/resources/:id" element={<ResourceDetails />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/initiatives/:id" element={<InitiativeDetails />} />
          <Route path="/roi" element={<ROI />} />
          <Route path="/roi/cost-savings" element={<CostSavingsBreakdown />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
