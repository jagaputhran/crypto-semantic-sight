import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Layers, Network, Shield, FileCheck } from "lucide-react";

const pipelineStages = [
  {
    id: "ast",
    title: "AST",
    subtitle: "Abstract Syntax Trees",
    description: "Language-specific parsing of source code into tree structures",
    icon: Code2,
    color: "pipeline-stage-ast",
    emoji: "🔵"
  },
  {
    id: "lair",
    title: "LAIR", 
    subtitle: "Language Agnostic IR",
    description: "Normalized representation: CALL, ENT, SYM nodes",
    icon: Layers,
    color: "pipeline-stage-lair", 
    emoji: "🟡"
  },
  {
    id: "csg",
    title: "CSG",
    subtitle: "Crypto Semantic Graph", 
    description: "Semantic understanding of cryptographic operations and data flow",
    icon: Network,
    color: "pipeline-stage-csg",
    emoji: "🟢"
  },
  {
    id: "oid",
    title: "OID Mapping",
    subtitle: "Standards Identification",
    description: "Map crypto operations to standard identifiers (NIST, FIPS)",
    icon: Shield,
    color: "pipeline-stage-oid",
    emoji: "🔴"
  },
  {
    id: "policy",
    title: "Compliance",
    subtitle: "Policy Enforcement",
    description: "Automated compliance checking against organizational policies",
    icon: FileCheck,
    color: "pipeline-stage-policy",
    emoji: "⚫"
  }
];

export const PipelineDiagram = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The CSG Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From source code to compliance validation in five semantic stages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
          {pipelineStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <Card className={`${stage.color} h-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-[var(--shadow-medium)] hover:shadow-[var(--hover-lift)]`}>
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center mb-3">
                      <Badge variant="secondary" className="text-2xl px-3 py-1">
                        {stage.emoji}
                      </Badge>
                    </div>
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-xl font-bold">{stage.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{stage.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center leading-relaxed">
                      {stage.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow between stages */}
                {index < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-[var(--shadow-soft)] border border-border">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Flow description */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="enterprise-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">End-to-End Semantic Analysis</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional static analysis tools that work at the syntax level, 
                CSG creates a <strong>semantic understanding</strong> of cryptographic operations, 
                enabling precise compliance validation and eliminating false positives.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};