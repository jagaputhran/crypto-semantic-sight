import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparisonData = [
  {
    feature: "Analysis Scope",
    cpg: { text: "Syntax-based pattern matching", status: "limited" },
    csg: { text: "Semantic understanding of crypto flow", status: "success" }
  },
  {
    feature: "False Positives",
    cpg: { text: "High (flags hardcoded strings as keys)", status: "error" },
    csg: { text: "Low (understands context)", status: "success" }
  },
  {
    feature: "Compliance Mapping",
    cpg: { text: "Manual rule creation required", status: "limited" },
    csg: { text: "Automated OID → policy mapping", status: "success" }
  },
  {
    feature: "Cross-Language Support",
    cpg: { text: "Language-specific rules", status: "limited" },
    csg: { text: "Universal semantic representation", status: "success" }
  },
  {
    feature: "Lineage Tracking",
    cpg: { text: "Limited to single files", status: "error" },
    csg: { text: "Full key/data flow across modules", status: "success" }
  },
  {
    feature: "CBOM Generation",
    cpg: { text: "Not supported", status: "error" },
    csg: { text: "Automated crypto bill of materials", status: "success" }
  }
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "success":
      return <Check className="w-5 h-5 text-[hsl(var(--success))]" />;
    case "error":
      return <X className="w-5 h-5 text-[hsl(var(--danger))]" />;
    case "limited":
      return <AlertTriangle className="w-5 h-5 text-[hsl(var(--warning))]" />;
    default:
      return <AlertTriangle className="w-5 h-5 text-[hsl(var(--warning))]" />;
  }
};

export const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 bg-[hsl(var(--surface))]">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Why CSG &gt; CPG
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Comparing traditional Code Property Graphs with Crypto Semantic Graphs
          </p>
        </motion.div>

        <Card className="enterprise-card overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-[hsl(var(--primary-glow))]/5">
            <CardTitle className="text-2xl">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[hsl(var(--surface-elevated))]">
                  <tr>
                    <th className="text-left p-6 font-semibold text-lg">Feature</th>
                    <th className="text-left p-6 font-semibold text-lg text-muted-foreground">
                      Traditional CPG
                    </th>
                    <th className="text-left p-6 font-semibold text-lg text-primary">
                      Crypto Semantic Graph
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="border-t border-border hover:bg-[hsl(var(--surface-elevated))]/50 transition-colors"
                    >
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <StatusIcon status={row.cpg.status} />
                          <span className="text-muted-foreground">{row.cpg.text}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <StatusIcon status={row.csg.status} />
                          <span className="text-foreground font-medium">{row.csg.text}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};