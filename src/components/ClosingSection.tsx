import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, FileText, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const businessValues = [
  {
    icon: TrendingUp,
    title: "Reduce False Positives",
    description: "Cut security alert noise by 90% with semantic understanding"
  },
  {
    icon: Shield,
    title: "Automated Compliance",
    description: "Real-time NIST, FIPS, and internal policy validation"
  },
  {
    icon: FileText,
    title: "CBOM Generation",
    description: "Automated Crypto Bill of Materials for audit readiness"
  },
  {
    icon: Target,
    title: "Risk Detection",
    description: "Proactive identification of cryptographic vulnerabilities"
  }
];

export const ClosingSection = () => {
  return (
    <section className="py-20 px-6 hero-gradient">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Transform Your Crypto Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            CSG delivers the semantic intelligence your organization needs for comprehensive cryptographic governance
          </p>
        </motion.div>

        {/* Business Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {businessValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="enterprise-card h-full text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Key Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="enterprise-card max-w-4xl mx-auto mb-12">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                "CSG is to cryptography what SBOM is to software"
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                The missing compliance layer that transforms how organizations understand, 
                manage, and secure their cryptographic assets.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="bg-[hsl(var(--success))]/10 px-4 py-2 rounded-full">
                  <span className="text-[hsl(var(--success))] font-medium">Semantic Analysis</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">Automated Compliance</span>
                </div>
                <div className="bg-[hsl(var(--warning))]/10 px-4 py-2 rounded-full">
                  <span className="text-[hsl(var(--warning))] font-medium">Risk Intelligence</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Ready to See CSG in Action?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading organizations already using CSG to transform their cryptographic security posture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-[hsl(var(--primary-glow))] transition-all duration-300 shadow-[var(--shadow-medium)] hover:shadow-[var(--hover-lift)]"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
            >
              Download Whitepaper
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};