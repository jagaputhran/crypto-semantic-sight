import { HeroSection } from "@/components/HeroSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { NoveltyCards } from "@/components/NoveltyCards";
import { ComplianceTable } from "@/components/ComplianceTable";
import { CodeDemo } from "@/components/CodeDemo";
import { ClosingSection } from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ComparisonTable />
      <PipelineDiagram />
      <NoveltyCards />
      <ComplianceTable />
      <CodeDemo />
      <ClosingSection />
    </main>
  );
};

export default Index;
