import { motion } from "framer-motion";
import { AlertTriangle, Search, Target, ShieldCheck, Globe, DollarSign, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const traditionalLimitations = [
  {
    icon: Search,
    title: "API Call Blindness",
    description: "Only flag isolated API calls (hashlib.md5()), blind to the flow of cryptographic material",
    example: "❌ Sees: hashlib.md5() call\n✅ Misses: Key reuse across modules"
  },
  {
    icon: Target,
    title: "No Semantic Understanding", 
    description: "Can't detect semantic misuse like AES in ECB mode, static IV reuse, or nonce collisions",
    example: "❌ Sees: AES.new() call\n✅ Misses: ECB mode weakness"
  },
  {
    icon: AlertTriangle,
    title: "Breaks Under Abstraction",
    description: "Fails with aliasing, wrappers, or obfuscation (e.g., from hashlib import md5 as fast_hash)",
    example: "❌ Sees: fast_hash() call\n✅ Misses: It's actually MD5"
  },
  {
    icon: ShieldCheck,
    title: "No Compliance Context",
    description: "No mapping to PCI, FIPS, NIST, CNSA standards — findings lack regulatory context",
    example: "❌ Sees: Crypto violation\n✅ Misses: FIPS 140-2 requirement"
  }
];

const ourApproach = [
  {
    title: "Crypto Semantic Graph (CSG)",
    description: "Models intent, not just syntax",
    color: "text-green-600 dark:text-green-400"
  },
  {
    title: "End-to-End Lineage",
    description: "Tracks keys, IVs, and digests across the codebase",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Higher-Order Detection",
    description: "Catches key reuse, weak randomness, non-compliant algorithms",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Compliance Enrichment",
    description: "OID mappings + compliance overlays tied to standards",
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    title: "Language Agnostic",
    description: "Works across languages, wrappers, and abstractions",
    color: "text-indigo-600 dark:text-indigo-400"
  }
];

const languageAgnosticBenefits = [
  {
    icon: Globe,
    title: "Universal Coverage",
    description: "One solution for Java, Python, C++, JavaScript, Go, and more",
    businessValue: "Eliminates need for multiple vendor tools",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction", 
    description: "Replace 3-5 language-specific tools with single platform",
    businessValue: "60-80% reduction in security tooling costs",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Clock,
    title: "Faster Deployment",
    description: "Deploy once across entire polyglot codebase",
    businessValue: "Weeks instead of months for enterprise rollout",
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Add new languages without new vendor relationships",
    businessValue: "Future-proof investment as tech stack evolves",
    color: "text-purple-600 dark:text-purple-400"
  }
];

export const ProblemStatement = () => {
  return (
    <section className="py-20 px-6 bg-[hsl(var(--surface))]">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The Problem with Traditional Static Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tools like <strong>CodeQL, Joern, Bandit, ESLint</strong> were built for generic security patterns — 
            SQL injection, XSS, buffer overflows. But <em>cryptography is different</em>.
          </p>
        </motion.div>

        {/* Traditional Tool Limitations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
              🛑 What Traditional Tools Miss
            </Badge>
            <p className="text-lg text-muted-foreground">
              They see <strong>function calls</strong>, not <strong>cryptographic behavior</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {traditionalLimitations.map((limitation, index) => (
              <motion.div
                key={limitation.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
                        <limitation.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <CardTitle className="text-lg text-red-800 dark:text-red-200">
                        {limitation.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-4 leading-relaxed">
                      {limitation.description}
                    </p>
                    <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-3">
                      <pre className="text-xs font-mono text-red-800 dark:text-red-200 whitespace-pre-wrap">
                        {limitation.example}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Different Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <Badge variant="default" className="text-lg px-4 py-2 mb-4 bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200">
              🚀 What We Do Differently
            </Badge>
            <p className="text-lg text-muted-foreground">
              We build a <strong>Crypto Semantic Graph (CSG)</strong> that models <em>intent</em>, not just syntax
            </p>
          </div>

          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourApproach.map((approach, index) => (
                  <motion.div
                    key={approach.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <h4 className={`font-semibold mb-2 ${approach.color}`}>
                      {approach.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {approach.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Language Agnostic Solution - Executive Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <Badge variant="default" className="text-lg px-4 py-2 mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
              🌍 Language-Agnostic Solution
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              One Platform, Every Language
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Traditional tools require <strong>separate solutions</strong> for each programming language. 
              Our semantic approach works across <em>all languages</em> from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {languageAgnosticBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-background to-accent/5 hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 text-foreground">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {benefit.description}
                        </p>
                        <div className="p-3 rounded-lg bg-accent/5">
                          <p className={`text-sm font-medium ${benefit.color}`}>
                            💼 {benefit.businessValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Executive Summary Card */}
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-6 text-center text-primary">
                Executive Summary: The Language-Agnostic Advantage
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">60-80%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  <div className="text-xs text-muted-foreground">vs. multiple tools</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                  <div className="text-xs text-muted-foreground">out of the box</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">75%</div>
                  <div className="text-sm text-muted-foreground">Faster Deployment</div>
                  <div className="text-xs text-muted-foreground">enterprise-wide</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto enterprise-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                The Strategic Advantage
              </h3>
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-semibold text-red-600 dark:text-red-400">Traditional approach:</span>{" "}
                  <span className="font-mono bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded text-red-800 dark:text-red-200">
                    "Multiple tools, fragmented coverage"
                  </span>
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-green-600 dark:text-green-400">Our approach:</span>{" "}
                  <span className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded text-green-800 dark:text-green-200">
                    "Unified platform, complete visibility"
                  </span>
                </p>
              </div>
              <div className="mt-6 p-4 bg-background/80 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Language-agnostic semantic analysis delivers what executives need: 
                  <strong> comprehensive coverage, reduced complexity, and measurable ROI</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};