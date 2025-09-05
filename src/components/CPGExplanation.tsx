import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, Pause } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cpgStages = [
  {
    id: "ast",
    title: "AST",
    subtitle: "Abstract Syntax Tree",
    description: "Language-specific parsing into tree structures",
    color: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    example: `Module(
  body=[
    ImportFrom(module='Crypto.Cipher', names=['AES']),
    Assign(
      targets=[Name(id='key')],
      value=Bytes(b'1234567890123456')
    ),
    Assign(
      targets=[Name(id='cipher')],
      value=Call(
        func=Attribute(value=Name(id='AES'), attr='new'),
        args=[Name(id='key'), Attribute(...)]
      )
    )
  ]
)`,
    noise: "Very language-specific, lots of noise (Module, Assign, etc.)"
  },
  {
    id: "cfg", 
    title: "CFG",
    subtitle: "Control Flow Graph",
    description: "Execution paths and branching logic",
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20",
    example: `if condition:
    cipher = AES.new(key, MODE_ECB)  # Block A
else:
    cipher = AES.new(key, MODE_CBC)  # Block B
# Both blocks flow to Block C`,
    noise: "Focuses on control flow, not crypto semantics"
  },
  {
    id: "pdg",
    title: "PDG", 
    subtitle: "Program Dependence Graph",
    description: "Data and control dependencies",
    color: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    example: `key ──depends_on──> user_input
cipher ──depends_on──> key
cipher ──depends_on──> AES.new
result ──depends_on──> cipher.encrypt`,
    noise: "Shows dependencies but misses crypto-specific context"
  }
];

const evolutionStages = [
  {
    title: "AST (Noisy)",
    data: `Module(body=[ImportFrom(...), Assign(...)])`,
    issue: "Language-specific syntax noise"
  },
  {
    title: "LAIR (Clean)",
    data: `{
  "nodes": [
    {"type": "ENT", "role": "key"},
    {"type": "CALL", "api": "AES", "mode": "ECB"},
    {"type": "SYM", "name": "cipher"}
  ]
}`,
    issue: "Language-agnostic, crypto-focused"
  },
  {
    title: "CSG (Semantic)",
    data: `{
  "nodes": [...],
  "edges": [
    {"src": "key", "dst": "AES", "type": "flows_to"}
  ],
  "oid": "2.16.840.1.101.3.4.1.1"
}`,
    issue: "Adds semantic relationships + compliance mapping"
  }
];

export const CPGExplanation = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEvolution, setShowEvolution] = useState(false);

  const nextStage = () => {
    if (currentStage < cpgStages.length - 1) {
      setCurrentStage(currentStage + 1);
    } else {
      setShowEvolution(true);
      setIsPlaying(false);
    }
  };

  const playAnimation = () => {
    setIsPlaying(true);
    setCurrentStage(0);
    setShowEvolution(false);
    
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < cpgStages.length - 1) {
          return prev + 1;
        } else {
          setShowEvolution(true);
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 2000);
  };

  return (
    <section className="py-20 px-6 bg-[hsl(var(--surface))]">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Understanding Code Property Graphs (CPG)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Before CSG, traditional analysis relies on three classical components
          </p>
          <Button onClick={playAnimation} disabled={isPlaying} className="gap-2">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Playing..." : "Play Animation"}
          </Button>
        </motion.div>

        {/* CPG Components */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {cpgStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{ 
                opacity: currentStage >= index ? 1 : 0.3,
                scale: currentStage >= index ? 1 : 0.95,
                y: currentStage >= index ? 0 : 10
              }}
              transition={{ duration: 0.5, delay: currentStage >= index ? 0 : 0 }}
              className="relative"
            >
              <Card className={`${stage.color} h-full transition-all duration-500 ${currentStage >= index ? 'shadow-[var(--shadow-medium)]' : 'shadow-none'}`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Badge className="text-2xl px-3 py-1">
                      {index + 1}
                    </Badge>
                    {index < cpgStages.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold">{stage.title}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{stage.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 text-center">{stage.description}</p>
                  <div className="bg-background/80 rounded-lg p-3 mb-3">
                    <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                      <code>{stage.example}</code>
                    </pre>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                    <p className="text-xs text-amber-800 dark:text-amber-200 font-medium">
                      ⚠️ {stage.noise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentStage >= cpgStages.length ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card className="enterprise-card max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-200">
                The CPG Problem for Cryptography
              </h3>
              <p className="text-lg text-red-700 dark:text-red-300 leading-relaxed mb-4">
                Traditional CPG tools like <strong>Joern</strong> and <strong>CodeQL</strong> create excessive noise 
                when analyzing crypto libraries because they focus on <em>syntax</em> rather than <em>semantic meaning</em>.
              </p>
              <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-4">
                <p className="text-sm font-mono text-red-800 dark:text-red-200">
                  Result: 🔴 High false positives • 🔴 Language-specific rules • 🔴 No compliance context
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Evolution to CSG */}
        <AnimatePresence>
          {showEvolution && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-center mb-8">
                The Evolution: AST → LAIR → CSG
              </h3>
              <p className="text-lg text-center text-muted-foreground mb-8">
                How we clean the noise and add semantic understanding
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {evolutionStages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.5 }}
                  >
                    <Card className={`h-full ${
                      index === 0 ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20' :
                      index === 1 ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20' :
                      'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
                    }`}>
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Badge>{index + 1}</Badge>
                          {stage.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-background/80 rounded-lg p-3 mb-4">
                          <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                            <code>{stage.data}</code>
                          </pre>
                        </div>
                        <div className={`rounded-lg p-3 ${
                          index === 0 ? 'bg-red-100 dark:bg-red-900/40' :
                          index === 1 ? 'bg-yellow-100 dark:bg-yellow-900/40' :
                          'bg-green-100 dark:bg-green-900/40'
                        }`}>
                          <p className={`text-xs font-medium ${
                            index === 0 ? 'text-red-800 dark:text-red-200' :
                            index === 1 ? 'text-yellow-800 dark:text-yellow-200' :
                            'text-green-800 dark:text-green-200'
                          }`}>
                            {index === 0 ? '❌' : index === 1 ? '⚡' : '✅'} {stage.issue}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    {index < evolutionStages.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};