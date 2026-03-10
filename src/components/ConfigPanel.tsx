import { useWorkflowStore } from "../store/workflowStore"

export default function ConfigPanel() {

  const selected = useWorkflowStore((s) => s.selectedNode)
  const updateNode = useWorkflowStore((s) => s.updateNode)
  const deleteNode = useWorkflowStore((s) => s.deleteNode)

  if (!selected) {
    return <div>Select a node</div>
  }

  return (
    <div>

      <h3>Node Configuration</h3>

      <label>Label</label>

      <input
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "8px"
        }}
        value={selected.label}
        onChange={(e) =>
          updateNode(selected.id, e.target.value)
        }
      />

      <button
        style={{
          marginTop: "20px",
          width: "100%",
          background: "#ef4444",
          border: "none",
          padding: "10px",
          color: "white",
          cursor: "pointer"
        }}
        onClick={() => deleteNode(selected.id)}
      >
        Delete Node
      </button>

    </div>
  )
}