import { create } from "zustand"
import type { Node, Edge } from "../types/workflow"
import { v4 as uuid } from "uuid"

interface WorkflowState {
  nodes: Node[]
  edges: Edge[]
  selectedNode: Node | null
  executingNodeId: string | null

  addNode: (type: "trigger" | "action") => void
  updateNode: (id: string, label: string) => void
  deleteNode: (id: string) => void
  connectNodes: (source: string, target: string) => void
  selectNode: (node: Node | null) => void
  setExecutingNode: (id: string | null) => void
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  nodes: [],
  edges: [],
  selectedNode: null,
  executingNodeId: null,

  addNode: (type) =>
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: uuid(),
          type,
          label: type,
          x: 100,
          y: 100
        }
      ]
    })),

  updateNode: (id, label) =>
    set((state) => ({
      nodes: state.nodes.map((n) =>
        n.id === id ? { ...n, label } : n
      )
    })),

  deleteNode: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((n) => n.id !== id),
      edges: state.edges.filter(
        (e) => e.source !== id && e.target !== id
      ),
      selectedNode: null
    })),

  connectNodes: (source, target) =>
    set((state) => ({
      edges: [
        ...state.edges,
        {
          id: uuid(),
          source,
          target
        }
      ]
    })),

  selectNode: (node) => set({ selectedNode: node }),

  setExecutingNode: (id) => set({ executingNodeId: id })
}))