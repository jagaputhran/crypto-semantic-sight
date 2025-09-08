import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

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
            Next-Generation Security:
            <br />
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
              The Crypto Semantic Graph
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your security posture with AI-powered semantic analysis that goes beyond traditional code scanning.
          </p>
          
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-3xl mx-auto mb-12">
            <p className="text-lg text-foreground/90 font-medium">
              <span className="text-primary font-semibold">Enterprise Challenge:</span> Traditional static analysis tools create security blind spots, require multiple vendors, and generate false positives that slow development velocity.
            </p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 text-sm bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              Automated Compliance
            </div>
            <div className="flex items-center gap-2 text-sm bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              <Zap className="w-4 h-4 text-accent" />
              Semantic Analysis  
            </div>
            <div className="flex items-center gap-2 text-sm bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
              <Target className="w-4 h-4 text-secondary" />
              Zero False Positives
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link 
              to="/problem-analysis"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
            >
              Understand the Problem
            </Link>
            <Link 
              to="/technical-deep-dive"
              className="px-8 py-4 bg-background border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
            >
              See the Solution
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};