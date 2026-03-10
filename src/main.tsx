import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { useWorkflowStore } from "./store/workflowStore"

const store = useWorkflowStore.getState()

window.addEventListener("beforeunload", () => {
  localStorage.setItem("workflow", JSON.stringify(store.nodes))
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)