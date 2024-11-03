import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";
import Card from "./Card";

const nodes = [
  {
    id: "1",
    data: { label: "Abdelraheman Hamed", lineWidth: 1400, heightLine: 95 },
    position: { x: 250, y: 0 },
    type: "custom",
    sourcePosition: 'bottom', 
    targetPosition: 'top',    
  },
  {
    id: "2",
    data: { label: "Director A", lineWidth: 800, heightLine: 95 },
    position: { x: -450, y: 300 },
    type: "custom",
  },
  {
    id: "3",
    data: { label: "Director B", lineWidth: 800, heightLine: 95 },
    position: { x: 950, y: 300 },
    type: "custom",
  },
  {
    id: "4",
    data: { label: "Child 1", lineWidth: 450, heightLine: 95 },
    position: { x: -850, y: 600 },
    type: "custom",
  },
  {
    id: "5",
    data: { label: "Child 2", lineWidth: 450, heightLine: 95 },
    position: { x: -50, y: 600 },
    type: "custom",
  },
  {
    id: "6",
    data: { label: "Child 3", lineWidth: 450, heightLine: 95 },
    position: { x: 550, y: 600 },
    type: "custom",
  },
  {
    id: "7",
    data: { label: "Child 4", lineWidth: 450, heightLine: 95 },
    position: { x: 1400, y: 600 },
    type: "custom",
  },
  {
    id: "8",
    data: { label: "Grand Child 1", lineWidth: 200, heightLine: 95 },
    position: { x: -1040, y: 900 },
    type: "custom",
  },
  {
    id: "9",
    data: { label: "Grand Child 2", lineWidth: 200, heightLine: 95 },
    position: { x: -650, y: 900 },
    type: "custom",
  },
  {
    id: "10",
    data: { label: "Grand Child 3", lineWidth: 200, heightLine: 95 },
    position: { x: -240, y: 900 },
    type: "custom",
  },
  {
    id: "11",
    data: { label: "Grand Child 4", lineWidth: 200, heightLine: 95 },
    position: { x: 150, y: 900 },
    type: "custom",
  },
  {
    id: "12",
    data: { label: "Grand Child 5", lineWidth: 200, heightLine: 95 },
    position: { x: 380, y: 900 },
    type: "custom",
  },
  {
    id: "13",
    data: { label: "Grand Child 6", lineWidth: 200, heightLine: 1 },
    position: { x: 750, y: 900 },
    type: "custom",
  },
  {
    id: "14",
    data: { label: "Grand Child 7", lineWidth: 200, heightLine: 1 },
    position: { x: 1210, y: 900 },
    type: "custom",
  },
  {
    id: "15",
    data: { label: "Grand Child 8", lineWidth: 200, heightLine: 1 },
    position: { x: 1600, y: 900 },
    type: "custom",
  },
  {
    id: "16",
    data: { label: "Grand Child 8", lineWidth: 200, heightLine: 1 },
    position: { x: -1100, y: 1200 },
    type: "custom",
  },
  {
    id: "17",
    data: { label: "Grand Child 8", lineWidth: 200, heightLine: 1 },
    position: { x: 1600, y: 1400 },
    type: "custom",
  },
  {
    id: "18",
    data: { label: "Grand Child 8", lineWidth: 200, heightLine: 1 },
    position: { x: 1600, y: 1600 },
    type: "custom",
  },
  {
    id: "19",
    data: { label: "Grand Child 8", lineWidth: 200, heightLine: 1 },
    position: { x: 1600, y: 1800 },
    type: "custom",
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep", style: { stroke: "white" } },
  { id: "e1-3", source: "1", target: "3", type: "smoothstep", style: { stroke: "white" } },
  { id: "e2-4", source: "2", target: "4", type: "smoothstep", style: { stroke: "white" } },
  { id: "e2-5", source: "2", target: "5", type: "smoothstep", style: { stroke: "white" } },
  { id: "e3-6", source: "3", target: "6", type: "smoothstep", style: { stroke: "white" } },
  { id: "e3-7", source: "3", target: "7", type: "smoothstep", style: { stroke: "white" } },
  { id: "e4-8", source: "4", target: "8", type: "smoothstep", style: { stroke: "white" } },
  { id: "e4-9", source: "4", target: "9", type: "smoothstep", style: { stroke: "white" } },
  { id: "e5-10", source: "5", target: "10", type: "smoothstep", style: { stroke: "white" } },
  { id: "e5-11", source: "5", target: "11", type: "smoothstep", style: { stroke: "white" } },
  { id: "e6-12", source: "6", target: "12", type: "smoothstep", style: { stroke: "white" } },
  { id: "e6-13", source: "6", target: "13", type: "smoothstep", style: { stroke: "white" } },
  { id: "e7-14", source: "7", target: "14", type: "smoothstep", style: { stroke: "white" } },
  { id: "e7-15", source: "7", target: "15", type: "smoothstep", style: { stroke: "white" } },
];

const Network = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#282c34" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: Card }}
        fitView
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        zoomOnScroll={true}
        zoomOnPinch={true}
        minZoom={0.1}
        maxZoom={2}
      >
        <MiniMap
          nodeStrokeColor={() => "#fff"}
          nodeColor={() => "#555"}
          nodeBorderRadius={2}
          maskColor="rgba(255, 255, 255, 0.1)"
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Network;
