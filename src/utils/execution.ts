import type { Node } from "../types/workflow"
import { useWorkflowStore } from "../store/workflowStore"

export async function executeWorkflow(
  nodes: Node[],
  log: (msg: string) => void
) {
  const setExecutingNode = useWorkflowStore.getState().setExecutingNode

  for (const node of nodes) {
    setExecutingNode(node.id)

    log("Executing: " + node.label)

    await new Promise((res) => setTimeout(res, 800))
  }

  setExecutingNode(null)

  log("Workflow Completed")
}