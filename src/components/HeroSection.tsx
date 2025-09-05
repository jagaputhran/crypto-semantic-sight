import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary leading-tight">
            From Syntax to Semantics:
            <br />
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
              The Crypto Semantic Graph
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Automating compliance, crypto lineage, and risk detection — beyond today's code scanners.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-[var(--shadow-soft)]"
            >
              <Shield className="w-5 h-5 text-[hsl(var(--success))]" />
              <span className="font-medium">Automated Compliance</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-[var(--shadow-soft)]"
            >
              <Zap className="w-5 h-5 text-[hsl(var(--warning))]" />
              <span className="font-medium">Semantic Analysis</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-[var(--shadow-soft)]"
            >
              <Target className="w-5 h-5 text-[hsl(var(--danger))]" />
              <span className="font-medium">Risk Detection</span>
            </motion.div>
          </div>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-[hsl(var(--primary-glow))] transition-all duration-300 shadow-[var(--shadow-medium)] hover:shadow-[var(--hover-lift)]"
          >
            Explore the Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};