import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Code2, FileJson, Shield, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraphVisualization } from "@/components/GraphVisualization";

const codeExamples = {
  python: {
    title: "Python",
    code: `from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import hashes
import os

# Key derivation
master_key = os.environ.get('MASTER_KEY')
salt = os.urandom(16)

# AES-ECB encryption (problematic)
cipher = Cipher(algorithms.AES(master_key), modes.ECB())
encryptor = cipher.encryptor()
ciphertext = encryptor.update(data) + encryptor.finalize()`,
    csg: {
      nodes: [
        { id: "n1", type: "CALL", api: "AES", mode: "ECB" },
        { id: "n2", type: "ENT", role: "key", source: "environment" },
        { id: "n3", type: "SYM", name: "cipher" },
        { id: "n4", type: "CALL", api: "os.urandom", purpose: "salt_generation" }
      ],
      edges: [
        { src: "n2", dst: "n1", type: "flows_to" },
        { src: "n1", dst: "n3", type: "produces" },
        { src: "n4", dst: "n2", type: "contributes_to" }
      ],
      oid: "2.16.840.1.101.3.4.1.1",
      policy: "❌ Disallowed by NIST SP 800-38A - ECB mode prohibited"
    }
  },
  java: {
    title: "Java",
    code: `import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.MessageDigest;

public class CryptoExample {
    public void encrypt(byte[] data, String password) {
        // Weak hash function
        MessageDigest md = MessageDigest.getInstance("SHA-1");
        byte[] keyBytes = md.digest(password.getBytes());
        
        // RSA with PKCS1 padding
        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "RSA");
        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.ENCRYPT_MODE, keySpec);
    }
}`,
    csg: {
      nodes: [
        { id: "n1", type: "CALL", api: "SHA-1", category: "hash" },
        { id: "n2", type: "CALL", api: "RSA", padding: "PKCS1" },
        { id: "n3", type: "ENT", role: "password", dataType: "plaintext" },
        { id: "n4", type: "SYM", name: "keySpec" }
      ],
      edges: [
        { src: "n3", dst: "n1", type: "input_to" },
        { src: "n1", dst: "n4", type: "derives" },
        { src: "n4", dst: "n2", type: "authenticates" }
      ],
      oid: "1.3.14.3.2.26",
      policy: "❌ Multiple violations: SHA-1 deprecated, PKCS1 padding vulnerable"
    }
  },
  rust: {
    title: "Rust",
    code: `use aes_gcm::{Aes256Gcm, Key, Nonce};
use aes_gcm::aead::{Aead, NewAead};
use rand::Rng;

fn secure_encrypt(data: &[u8]) -> Vec<u8> {
    let key = Key::from_slice(b"an example very very secret key.");
    let cipher = Aes256Gcm::new(key);
    
    let mut rng = rand::thread_rng();
    let nonce_bytes: [u8; 12] = rng.gen();
    let nonce = Nonce::from_slice(&nonce_bytes);
    
    cipher.encrypt(nonce, data).expect("encryption failure!")
}`,
    csg: {
      nodes: [
        { id: "n1", type: "CALL", api: "AES-256-GCM", mode: "GCM" },
        { id: "n2", type: "ENT", role: "key", strength: 256 },
        { id: "n3", type: "ENT", role: "nonce", source: "random" },
        { id: "n4", type: "CALL", api: "thread_rng", purpose: "nonce_generation" }
      ],
      edges: [
        { src: "n2", dst: "n1", type: "authenticates" },
        { src: "n3", dst: "n1", type: "initializes" },
        { src: "n4", dst: "n3", type: "generates" }
      ],
      oid: "2.16.840.1.101.3.4.1.46",
      policy: "✅ Fully compliant - AES-256-GCM with proper nonce generation"
    }
  }
};

export const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState("python");
  const [showCsg, setShowCsg] = useState(false);

  const currentExample = codeExamples[activeTab as keyof typeof codeExamples];

  const handleAnalyze = () => {
    setShowCsg(true);
  };

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
            Try CSG Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how CSG analyzes code across different languages and generates semantic understanding
          </p>
        </motion.div>

        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              Interactive Code Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="rust">Rust</TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([lang, example]) => (
                <TabsContent key={lang} value={lang} className="space-y-6">
                  <div className="space-y-6">
                    {/* Code Panel - Full Width */}
                    <Card className="bg-background">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Code2 className="w-5 h-5" />
                          {example.title} Source Code
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm overflow-x-auto bg-[hsl(var(--surface-elevated))] p-4 rounded-lg">
                          <code>{example.code}</code>
                        </pre>
                        <Button 
                          onClick={handleAnalyze}
                          className="mt-4 w-full"
                          disabled={showCsg}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Analyze with CSG
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Results Grid - Two Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Visual Graph Panel */}
                      <Card className="bg-background">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Network className="w-5 h-5" />
                            Visual Graph
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {showCsg ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <GraphVisualization data={example.csg} />
                            </motion.div>
                          ) : (
                            <div className="flex items-center justify-center h-80 text-muted-foreground">
                              <div className="text-center">
                                <Network className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <p>Visual graph will appear after analysis</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* CSG JSON Output Panel */}
                      <Card className="bg-background">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <FileJson className="w-5 h-5" />
                            CSG Output
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {showCsg ? (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="space-y-4"
                            >
                              <div className="bg-[hsl(var(--surface-elevated))] p-4 rounded-lg max-h-60 overflow-y-auto">
                                <pre className="text-xs">
                                  <code>{JSON.stringify(example.csg, null, 2)}</code>
                                </pre>
                              </div>
                              
                              <div className="border-t pt-4">
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <Shield className="w-4 h-4" />
                                  Compliance Status
                                </h4>
                                <Badge 
                                  variant={example.csg.policy?.startsWith('✅') ? 'default' : 'destructive'}
                                  className={example.csg.policy?.startsWith('✅') 
                                    ? 'bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))]' 
                                    : 'bg-[hsl(var(--danger))] hover:bg-[hsl(var(--danger))]'
                                  }
                                >
                                  {example.csg.policy}
                                </Badge>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="flex items-center justify-center h-80 text-muted-foreground">
                              <div className="text-center">
                                <FileJson className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <p>JSON output will appear after analysis</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};