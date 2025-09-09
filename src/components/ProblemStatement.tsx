import { motion } from "framer-motion";
import { AlertTriangle, Search, Target, ShieldCheck, Globe, DollarSign, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const traditionalLimitations = [
  {
    icon: Search,
    title: "Security Theater vs. Real Protection",
    description: "Current tools create illusion of security by flagging surface-level issues while missing the real vulnerabilities that matter",
    businessImpact: "False sense of security",
    example: "🎭 Shows: 'Found crypto function'\n💥 Reality: Critical keys being reused everywhere"
  },
  {
    icon: Target,
    title: "Missing the Forest for Trees", 
    description: "Tools see individual components but miss how they work together—like checking car parts without testing if the car actually runs",
    businessImpact: "Blind spots in critical systems",
    example: "🔍 Shows: 'Encryption detected'\n🕳️ Reality: Using weakest possible settings"
  },
  {
    icon: AlertTriangle,
    title: "Easily Fooled by Simple Changes",
    description: "A developer renames a function and suddenly the security tool loses track—like a guard who only recognizes people by their name tags",
    businessImpact: "Bypassable security measures",
    example: "👀 Shows: 'All clear, no MD5 found'\n🚨 Reality: MD5 renamed as 'fast_hash' everywhere"
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance Guesswork",
    description: "Tools flag generic issues but don't map to actual compliance requirements—leaving legal teams scrambling during audits",
    businessImpact: "Audit failures and penalties",
    example: "⚠️ Shows: 'Crypto issue detected'\n📋 Reality: No idea if it violates FIPS, PCI, or NIST"
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
        {/* Executive Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="max-w-6xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
                  🚨 Critical Market Gap
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                  The $10M Cryptography Blind Spot
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">90%</div>
                    <p className="text-lg font-semibold text-muted-foreground">
                      of mobile applications violate cryptography best practices
                    </p>
                  </div>
                  
                  <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">The Root Cause</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Existing tools use <strong>general-purpose static analysis</strong> that miss cryptographic elements, 
                      or are <strong>language-specific</strong> leaving coverage gaps across polyglot environments.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <div className="bg-orange-100 dark:bg-orange-900/40 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      💼 Business Impact
                    </h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Regulatory compliance failures</li>
                      <li>• Quantum transition blind spots</li>
                      <li>• Vendor tool fragmentation costs</li>
                      <li>• Manual review overhead</li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/80 rounded-lg p-4 border border-muted">
                    <p className="text-sm italic text-muted-foreground">
                      "Current tools excel at <strong>large-scale coverage</strong> but yield 
                      <strong> false positives</strong> and cannot trace how keys, nonces, or 
                      digests are actually used in application code."
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Traditional Static Analysis Fails
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
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800 hover:shadow-[var(--shadow-medium)] transition-all duration-300 group-hover:border-red-300 dark:group-hover:border-red-700">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div 
                        className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <limitation.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </motion.div>
                      <CardTitle className="text-lg text-red-800 dark:text-red-200">
                        {limitation.title}
                      </CardTitle>
                    </div>
                    <div className="bg-red-200/50 dark:bg-red-800/30 px-3 py-1 rounded-full">
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wide">
                        💼 {limitation.businessImpact}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-4 leading-relaxed">
                      {limitation.description}
                    </p>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="bg-green-100 dark:bg-green-900/40 rounded-lg p-3 border-l-4 border-green-400">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
                            What Tool Shows
                          </span>
                        </div>
                        <pre className="text-xs font-mono text-green-800 dark:text-green-200 whitespace-pre-wrap">
                          {limitation.example.split('\n')[0]}
                        </pre>
                      </div>
                      <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-3 border-l-4 border-red-500">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wide">
                            Dangerous Reality
                          </span>
                        </div>
                        <pre className="text-xs font-mono text-red-800 dark:text-red-200 whitespace-pre-wrap">
                          {limitation.example.split('\n')[1]}
                        </pre>
                      </div>
                    </motion.div>
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
              🚀 Our Solution: LAIR
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Language-Agnostic Information Retrieval
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We build a <strong>Crypto Semantic Graph (CSG)</strong> that models <em>intent</em>, not just syntax. 
              LAIR detects cryptographic algorithms and their supporting elements regardless of programming language.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                  🧠 How LAIR Works: Semantic Understanding
                </h4>
                <p className="text-muted-foreground mb-6">
                  Instead of parsing entire codebases, LAIR takes a targeted approach to detect and store 
                  only <strong>cryptographic information</strong> that matters.
                </p>
              </div>
              
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

          {/* Technical Advantage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-primary mb-4">
                    🎯 Unified Representation Advantage
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold text-blue-800 dark:text-blue-200">Semantic Graphs</div>
                      <div className="text-blue-600 dark:text-blue-400">Python, Java, JS → Same JSON</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                      <div className="font-semibold text-purple-800 dark:text-purple-200">Cross-Language Rules</div>
                      <div className="text-purple-600 dark:text-purple-400">Write once, apply everywhere</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <div className="font-semibold text-green-800 dark:text-green-200">Lightweight</div>
                      <div className="text-green-600 dark:text-green-400">Crypto-relevant nodes only</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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

          {/* Real-World Business Case */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="default" className="text-base px-3 py-1 mb-3 bg-blue-600 text-white">
                    📊 Enterprise Use Case
                  </Badge>
                  <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    Comcast: Thousands of Applications, Multiple Languages
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-blue-100 dark:bg-blue-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        🎯 Strategic Requirements
                      </h5>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Detect outdated algorithms violating encryption standards</li>
                        <li>• Prepare for quantum-ready cipher migration</li>
                        <li>• Cover thousands of GitHub Enterprise applications</li>
                        <li>• Support wide range of programming languages</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-100 dark:bg-green-900/40 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        💰 Measurable ROI
                      </h5>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Saves <strong>2+ years</strong> of individual language solutions</li>
                        <li>• Eliminates <strong>hundreds of hours</strong> of manual review</li>
                        <li>• Reduces vendor & compliance costs significantly</li>
                        <li>• Strategic edge: No competing market products</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-background/80 rounded-lg border border-dashed border-blue-300 dark:border-blue-700">
                  <p className="text-center text-sm italic text-muted-foreground">
                    <strong>"Language-specific approaches make comprehensive coverage impossible. 
                    A semantic solution gives us the strategic edge we need for quantum transition."</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

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
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">Significant Cost Reduction</div>
                  <div className="text-sm text-muted-foreground">Replaces multiple vendor tools</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Universal Coverage</div>
                  <div className="text-sm text-muted-foreground">All major languages supported</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">Faster Deployment</div>
                  <div className="text-sm text-muted-foreground">Enterprise-wide rollout</div>
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