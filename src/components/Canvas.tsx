import { useWorkflowStore } from "../store/workflowStore"

export default function Canvas() {
  const nodes = useWorkflowStore((s) => s.nodes)
  const edges = useWorkflowStore((s) => s.edges)
  const selectNode = useWorkflowStore((s) => s.selectNode)

  const radius = 200
  const centerX = 500
  const centerY = 300

  return (
    <div className="canvas">

      <svg width="1000" height="600">

        {/* edges */}
        {edges.map((edge) => {
          const sourceIndex = nodes.findIndex(n => n.id === edge.source)
          const targetIndex = nodes.findIndex(n => n.id === edge.target)

          const angle1 = (sourceIndex / nodes.length) * 2 * Math.PI
          const angle2 = (targetIndex / nodes.length) * 2 * Math.PI

          const x1 = centerX + radius * Math.cos(angle1)
          const y1 = centerY + radius * Math.sin(angle1)

          const x2 = centerX + radius * Math.cos(angle2)
          const y2 = centerY + radius * Math.sin(angle2)

          return (
            <line
              key={edge.id}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#22c55e"
              strokeWidth="3"
            />
          )
        })}

        {/* nodes */}
        {nodes.map((node, i) => {

          const angle = (i / nodes.length) * 2 * Math.PI

          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)

          return (
            <g
              key={node.id}
              onClick={() => selectNode(node)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={x}
                cy={y}
                r="40"
                fill="#334155"
              />

              <text
                x={x}
                y={y}
                textAnchor="middle"
                fill="white"
                dy=".3em"
                fontSize="12"
              >
                {node.type}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}