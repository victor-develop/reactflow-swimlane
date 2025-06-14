import React, { useEffect, useState } from "react";
import getGraphNodesEdges from "../include/SwimlaneLayout";
import ReactFlow, {
  ConnectionMode,
  Controls,
  Panel,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";
import { SwimlaneFlowInput } from "../types/swimlane-flow-types";
import { Button } from "@mui/material";
import CustomNode from "../include/CustomNode";
import SwimlaneEdge from "../include/SwimlaneEdge";
import Toolbar from "./Toolbar";

const proOptions = { hideAttribution: true };

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  swimlane: SwimlaneEdge,
};

const SwimlaneFlow = (props: {
  rankDirection: string;
  selectedFlow: SwimlaneFlowInput | null | undefined;
}) => {
  const { rankDirection, selectedFlow } = props;
  const { fitView } = useReactFlow();

  const [rankDir, setRankDir] = useState(rankDirection);
  const [reactflowNodes, setReactflowNodes, onNodesChange] = useNodesState([]);
  const [reactflowEdges, setReactflowEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const setReactflowNodesEdges = (direction: string) => {
      const { nodes, edges } = getGraphNodesEdges(direction, selectedFlow!);
      setReactflowNodes(nodes);
      setReactflowEdges(edges);
    };
    setReactflowNodesEdges(rankDir);
  }, [selectedFlow, rankDir, setReactflowNodes, setReactflowEdges]);

  useEffect(() => {
    fitView();
  }, [reactflowEdges, reactflowNodes, fitView]);
  return (
    <>
      <Toolbar />
      <ReactFlow
        nodes={reactflowNodes}
        edges={reactflowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        connectionMode={ConnectionMode.Loose}
        proOptions={proOptions}
      >
        <Panel position="top-right">
          <Button
            onClick={() => setRankDir("TB")}
            variant="contained"
            className="Panel-Button"
            autoCapitalize="false"
          >
            Top to Bottom
          </Button>{" "}
          <Button
            onClick={() => setRankDir("LR")}
            variant="contained"
            className="Panel-Button"
            autoCapitalize="false"
          >
            Left to Right
          </Button>
        </Panel>
        <Controls />
      </ReactFlow>
    </>
  );
};

export default SwimlaneFlow;
