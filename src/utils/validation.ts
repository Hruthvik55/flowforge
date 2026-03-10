import type { Node } from "../types/workflow"

export function validateWorkflow(nodes: Node[]) {
  const hasTrigger = nodes.some((n) => n.type === "trigger")

  if (!hasTrigger) {
    return "Workflow must contain at least one Trigger node"
  }

  return null
}