import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, GitBranch, Zap, ArrowRight } from "lucide-react";

const navigationItems = [
  {
    title: "The Problem",
    description: "Why traditional static analysis falls short for cryptography",
    icon: AlertTriangle,
    path: "/problem-analysis",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30"
  },
  {
    title: "Technical Deep Dive", 
    description: "From Code Property Graphs to Crypto Semantic Graphs",
    icon: GitBranch,
    path: "/technical-deep-dive",
    color: "from-blue-500/20 to-cyan-500/20", 
    borderColor: "border-blue-500/30"
  },
  {
    title: "CSG in Action",
    description: "Interactive demos and real-world applications",
    icon: Zap,
    path: "/solution-demo",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  }
];

export const NavigationCards = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Explore the Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the evolution from traditional static analysis to semantic crypto understanding
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={item.path}>
                <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${item.borderColor} bg-gradient-to-br ${item.color} group cursor-pointer`}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-background/80 w-fit group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};