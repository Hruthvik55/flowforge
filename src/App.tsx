import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Canvas from "./components/Canvas"
import ConfigPanel from "./components/ConfigPanel"
import { useWorkflowStore } from "./store/workflowStore"
import { validateWorkflow } from "./utils/validation"
import { executeWorkflow } from "./utils/execution"

function App() {

  const nodes = useWorkflowStore((s) => s.nodes)

  const [logs, setLogs] = useState<string[]>([])
  const [running, setRunning] = useState(false)

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, msg])
  }

  const runWorkflow = async () => {

    if (running) return

    const error = validateWorkflow(nodes)

    if (error) {
      alert(error)
      return
    }

    setLogs([])
    setRunning(true)

    await executeWorkflow(nodes, addLog)

    setRunning(false)
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      <Sidebar />

      <Canvas />

      {/* RIGHT PANEL */}
      <div
        style={{
          width: "300px",
          background: "#1e293b",
          padding: "20px",
          borderLeft: "1px solid #334155"
        }}
      >

        {/* RUN WORKFLOW */}
        <button
          onClick={runWorkflow}
          disabled={running}
          style={{
            width: "100%",
            background: "#22c55e",
            border: "none",
            padding: "12px",
            color: "white",
            fontWeight: "bold",
            marginBottom: "20px",
            cursor: "pointer"
          }}
        >
          {running ? "Running..." : "Run Workflow"}
        </button>

        {/* CONFIG PANEL */}
        <ConfigPanel />

        {/* EXECUTION LOGS */}
        <div
          style={{
            marginTop: "30px",
            background: "#111",
            padding: "10px",
            fontSize: "12px",
            borderRadius: "6px"
          }}
        >
          <strong>Execution Logs</strong>

          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default App