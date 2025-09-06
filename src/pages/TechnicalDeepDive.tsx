import { CPGExplanation } from "@/components/CPGExplanation";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { PageHeader } from "@/components/PageHeader";

const TechnicalDeepDive = () => {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="From Syntax to Semantics"
        subtitle="Understanding Code Property Graphs and the evolution to CSG"
        backTo="/"
      />
      <CPGExplanation />
      <ComparisonTable />
      <PipelineDiagram />
    </main>
  );
};

export default TechnicalDeepDive;