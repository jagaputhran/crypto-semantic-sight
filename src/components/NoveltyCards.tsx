import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Brain, Target, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const noveltyData = [
  {
    id: "semantics",
    title: "CSG: Semantics > Syntax",
    subtitle: "Understanding meaning, not just patterns",
    icon: Brain,
    color: "pipeline-stage-csg",
    example: {
      title: "Python AES-ECB Detection",
      description: "Traditional scanners flag any AES usage. CSG understands the specific mode:",
      code: `from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# CSG identifies this as ECB mode specifically
cipher = Cipher(algorithms.AES(key), modes.ECB())
encryptor = cipher.encryptor()`,
      analysis: {
        traditional: "❌ Generic 'AES usage detected' alert",
        csg: "✅ Specific 'AES-ECB mode detected - non-compliant with NIST SP 800-38A'"
      }
    }
  },
  {
    id: "oid-mapping", 
    title: "OID Mapping",
    subtitle: "Automatic standards compliance checking",
    icon: Target,
    color: "pipeline-stage-oid",
    example: {
      title: "Compliance Table Integration",
      description: "CSG automatically maps crypto operations to standard OIDs:",
      code: `AES-128-ECB → OID: 2.16.840.1.101.3.4.1.1
RSA-2048 → OID: 1.2.840.113549.1.1.1
SHA-256 → OID: 2.16.840.1.101.3.4.2.1`,
      analysis: {
        traditional: "❌ Manual policy rule creation required",
        csg: "✅ Automatic policy lookup: 'AES-ECB prohibited by internal security policy'"
      }
    }
  },
  {
    id: "lineage",
    title: "Lineage Tracking", 
    subtitle: "Full key and data flow analysis",
    icon: GitBranch,
    color: "pipeline-stage-lair",
    example: {
      title: "Cross-Module Key Flow",
      description: "Track cryptographic keys across module boundaries:",
      code: `// config.py
master_key = load_from_env()

// crypto_utils.py  
def derive_key(master):
    return pbkdf2(master, salt)

// service.py
session_key = derive_key(master_key)  # CSG tracks this flow`,
      analysis: {
        traditional: "❌ Cannot trace key derivation across files",
        csg: "✅ Complete lineage: ENV → master_key → derive_key → session_key"
      }
    }
  }
];

export const NoveltyCards = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-[hsl(var(--surface))]">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Three Core Innovations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click to explore what makes CSG fundamentally different from existing approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {noveltyData.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedCard === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card 
                  className={`${item.color} cursor-pointer transition-all duration-300 hover:scale-105 shadow-[var(--shadow-medium)] hover:shadow-[var(--hover-lift)] ${isExpanded ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setExpandedCard(isExpanded ? null : item.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="border-t border-border/20 pt-6">
                          <h4 className="font-bold text-lg mb-3">{item.example.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            {item.example.description}
                          </p>
                          
                          <div className="bg-background/80 rounded-lg p-4 mb-4">
                            <pre className="text-xs overflow-x-auto">
                              <code>{item.example.code}</code>
                            </pre>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <Badge variant="destructive" className="text-xs">Traditional</Badge>
                              <p className="text-sm">{item.example.analysis.traditional}</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <Badge className="text-xs bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))]">CSG</Badge>
                              <p className="text-sm font-medium">{item.example.analysis.csg}</p>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};