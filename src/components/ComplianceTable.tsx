import { motion } from "framer-motion";
import { Check, X, AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const complianceData = [
  {
    algorithm: "AES-256-GCM",
    oid: "2.16.840.1.101.3.4.1.46",
    nistStatus: "approved",
    fipsStatus: "approved", 
    internalPolicy: "approved",
    usage: "Encrypt user data",
    recommendation: "✅ Fully compliant - recommended for production"
  },
  {
    algorithm: "AES-128-ECB",
    oid: "2.16.840.1.101.3.4.1.1",
    nistStatus: "deprecated",
    fipsStatus: "approved",
    internalPolicy: "prohibited",
    usage: "Legacy system integration",
    recommendation: "❌ Prohibited - upgrade to GCM mode required"
  },
  {
    algorithm: "RSA-1024",
    oid: "1.2.840.113549.1.1.1",
    nistStatus: "deprecated",
    fipsStatus: "legacy",
    internalPolicy: "review",
    usage: "Digital signatures",
    recommendation: "⚠️ Under review - migration to RSA-2048 planned"
  },
  {
    algorithm: "SHA-1",
    oid: "1.3.14.3.2.26", 
    nistStatus: "prohibited",
    fipsStatus: "prohibited",
    internalPolicy: "prohibited",
    usage: "Hash verification",
    recommendation: "❌ Immediate replacement required - use SHA-256"
  },
  {
    algorithm: "ChaCha20-Poly1305",
    oid: "1.2.840.113549.1.9.16.3.18",
    nistStatus: "approved",
    fipsStatus: "pending",
    internalPolicy: "approved",
    usage: "Mobile app encryption",
    recommendation: "✅ Approved for mobile - FIPS validation pending"
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusProps = (status: string) => {
    switch (status) {
      case "approved":
        return { 
          variant: "default" as const, 
          className: "bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))] text-white",
          icon: Check
        };
      case "prohibited":
        return { 
          variant: "destructive" as const, 
          className: "bg-[hsl(var(--danger))] hover:bg-[hsl(var(--danger))]",
          icon: X
        };
      case "deprecated":
      case "review":
      case "pending":
      case "legacy":
        return { 
          variant: "secondary" as const, 
          className: "bg-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]",
          icon: AlertTriangle
        };
      default:
        return { 
          variant: "outline" as const, 
          className: "",
          icon: Shield
        };
    }
  };

  const { variant, className, icon: Icon } = getStatusProps(status);
  
  return (
    <Badge variant={variant} className={`${className} text-xs font-medium`}>
      <Icon className="w-3 h-3 mr-1" />
      {status.toUpperCase()}
    </Badge>
  );
};

export const ComplianceTable = () => {
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
            Automated Compliance Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time compliance status across NIST, FIPS, and internal security policies
          </p>
        </motion.div>

        <Card className="enterprise-card overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-[hsl(var(--primary-glow))]/5">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Cryptographic Compliance Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[hsl(var(--surface-elevated))]">
                  <tr>
                    <th className="text-left p-4 font-semibold">Algorithm</th>
                    <th className="text-left p-4 font-semibold">OID</th>
                    <th className="text-left p-4 font-semibold">NIST</th>
                    <th className="text-left p-4 font-semibold">FIPS</th>
                    <th className="text-left p-4 font-semibold">Internal</th>
                    <th className="text-left p-4 font-semibold">Usage Context</th>
                    <th className="text-left p-4 font-semibold">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceData.map((row, index) => (
                    <motion.tr
                      key={row.algorithm}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="border-t border-border hover:bg-[hsl(var(--surface-elevated))]/30 transition-colors"
                    >
                      <td className="p-4">
                        <code className="bg-background/80 px-2 py-1 rounded text-sm font-mono">
                          {row.algorithm}
                        </code>
                      </td>
                      <td className="p-4">
                        <code className="text-xs text-muted-foreground">
                          {row.oid}
                        </code>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={row.nistStatus} />
                      </td>
                      <td className="p-4">
                        <StatusBadge status={row.fipsStatus} />
                      </td>
                      <td className="p-4">
                        <StatusBadge status={row.internalPolicy} />
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {row.usage}
                      </td>
                      <td className="p-4 text-sm">
                        {row.recommendation}
                      </td>
                     </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="enterprise-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-[hsl(var(--success))] mb-2">2</div>
              <div className="text-sm text-muted-foreground">Fully Compliant</div>
            </CardContent>
          </Card>
          <Card className="enterprise-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-[hsl(var(--warning))] mb-2">1</div>
              <div className="text-sm text-muted-foreground">Under Review</div>
            </CardContent>
          </Card>
          <Card className="enterprise-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-[hsl(var(--danger))] mb-2">2</div>
              <div className="text-sm text-muted-foreground">Non-Compliant</div>
            </CardContent>
          </Card>
          <Card className="enterprise-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Compliance Score</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};