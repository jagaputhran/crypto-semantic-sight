import { ProblemStatement } from "@/components/ProblemStatement";
import { PageHeader } from "@/components/PageHeader";

const ProblemAnalysis = () => {
  return (
    <main className="min-h-screen">
      <PageHeader 
        title="The Problem with Traditional Analysis"
        subtitle="Why current static analysis tools fall short for cryptography"
        backTo="/"
      />
      <ProblemStatement />
    </main>
  );
};

export default ProblemAnalysis;