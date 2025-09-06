import { NoveltyCards } from "@/components/NoveltyCards";
import { ComplianceTable } from "@/components/ComplianceTable";
import { CodeDemo } from "@/components/CodeDemo";
import { ClosingSection } from "@/components/ClosingSection";
import { PageHeader } from "@/components/PageHeader";

const SolutionDemo = () => {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="CSG in Action"
        subtitle="Interactive demonstrations and real-world applications"
        backTo="/"
      />
      <NoveltyCards />
      <ComplianceTable />
      <CodeDemo />
      <ClosingSection />
    </main>
  );
};

export default SolutionDemo;