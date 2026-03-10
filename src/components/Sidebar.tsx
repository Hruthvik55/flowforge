import { useWorkflowStore } from "../store/workflowStore"

export default function Sidebar() {
  const addNode = useWorkflowStore((s) => s.addNode)

  return (
    <div className="sidebar">
      <h3>Node Library</h3>

      <button onClick={() => addNode("trigger")}>
        Add Trigger
      </button>

      <button onClick={() => addNode("action")}>
        Add Action
      </button>
    </div>
  )
}