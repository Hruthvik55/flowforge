export type NodeType = "trigger" | "action"

export interface Node {
  id: string
  type: NodeType
  label: string
  x: number
  y: number
}

export interface Edge {
  id: string
  source: string
  target: string
}