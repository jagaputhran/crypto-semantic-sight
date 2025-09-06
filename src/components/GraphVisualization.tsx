import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CSGNode {
  id: string;
  type: string;
  [key: string]: any;
}

interface CSGEdge {
  src: string;
  dst: string;
  type: string;
}

interface CSGData {
  nodes: CSGNode[];
  edges: CSGEdge[];
  oid?: string;
  policy?: string;
}

interface GraphVisualizationProps {
  data: CSGData;
}

interface NodePosition {
  x: number;
  y: number;
  id: string;
}

const nodeTypeColors: { [key: string]: string } = {
  CALL: "#3B82F6", // Blue
  ENT: "#10B981",  // Green
  SYM: "#F59E0B"   // Orange
};

const nodeTypeLabels: { [key: string]: string } = {
  CALL: "API Call",
  ENT: "Entity", 
  SYM: "Symbol"
};

export const GraphVisualization = ({ data }: GraphVisualizationProps) => {
  const [nodePositions, setNodePositions] = useState<NodePosition[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    // Calculate node positions in a circular layout
    const centerX = 200;
    const centerY = 150;
    const radius = 80;
    
    const positions = data.nodes.map((node, index) => {
      const angle = (index / data.nodes.length) * 2 * Math.PI;
      return {
        id: node.id,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    });
    
    setNodePositions(positions);
  }, [data.nodes]);

  const getNodePosition = (nodeId: string) => {
    return nodePositions.find(pos => pos.id === nodeId) || { x: 0, y: 0 };
  };

  const getNodeDetails = (nodeId: string) => {
    return data.nodes.find(node => node.id === nodeId);
  };

  return (
    <div className="bg-background border rounded-lg p-4">
      <h4 className="font-semibold mb-4 text-center">Visual Graph Representation</h4>
      
      <div className="relative">
        <svg width="400" height="300" className="border rounded bg-gradient-to-br from-background to-muted/20">
          {/* Render edges first (behind nodes) */}
          {data.edges.map((edge, index) => {
            const srcPos = getNodePosition(edge.src);
            const dstPos = getNodePosition(edge.dst);
            
            return (
              <motion.g key={`edge-${index}`}>
                <motion.line
                  x1={srcPos.x}
                  y1={srcPos.y}
                  x2={dstPos.x}
                  y2={dstPos.y}
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                
                {/* Edge label */}
                <motion.text
                  x={(srcPos.x + dstPos.x) / 2}
                  y={(srcPos.y + dstPos.y) / 2 - 5}
                  textAnchor="middle"
                  className="text-xs fill-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {edge.type}
                </motion.text>
              </motion.g>
            );
          })}

          {/* Render nodes */}
          {nodePositions.map((pos, index) => {
            const node = getNodeDetails(pos.id);
            if (!node) return null;
            
            const isHovered = hoveredNode === node.id;
            const nodeColor = nodeTypeColors[node.type] || "#6B7280"; // Default gray for unknown types
            
            return (
              <motion.g 
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                {/* Node shadow */}
                <circle
                  cx={pos.x + 2}
                  cy={pos.y + 2}
                  r={isHovered ? 22 : 20}
                  fill="#00000020"
                />
                
                {/* Node circle */}
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 22 : 20}
                  fill={nodeColor}
                  stroke="#ffffff"
                  strokeWidth="3"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    boxShadow: isHovered ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none"
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Node type indicator */}
                <text
                  x={pos.x}
                  y={pos.y + 5}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white"
                >
                  {node.type}
                </text>
                
                {/* Node ID */}
                <text
                  x={pos.x}
                  y={pos.y + 35}
                  textAnchor="middle"
                  className="text-xs fill-foreground font-medium"
                >
                  {node.id}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="mt-4 flex justify-center gap-6">
          {["CALL", "ENT", "SYM"].map((type) => (
            <div key={type} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white"
                style={{ backgroundColor: nodeTypeColors[type] }}
              />
              <span className="text-sm text-muted-foreground">
                {nodeTypeLabels[type]}
              </span>
            </div>
          ))}
        </div>

        {/* Hovered node details */}
        {hoveredNode && (
          <motion.div
            className="absolute top-0 right-0 bg-popover border rounded-lg p-3 shadow-lg max-w-48"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h5 className="font-semibold text-sm mb-2">Node Details</h5>
            {Object.entries(getNodeDetails(hoveredNode) || {}).map(([key, value]) => (
              <div key={key} className="text-xs mb-1">
                <span className="font-medium">{key}:</span> {String(value)}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};