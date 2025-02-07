import { ChevronRight, Trash } from "lucide-react"

function Tasks({ tasks, onTaskClick, onDeletedTaskClick }) {
  return (
    <ul className="space-y-2 p-6 bg-slate-200 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => {
              onTaskClick(task.id)
            }}
            className={`bg-slate-400 text-left rounded-md p-2 text-white w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 rounded-md p-2 text-white">
            <ChevronRight size={24} />
          </button>
          <button
            onClick={() => {
              onDeletedTaskClick(task.id)
            }}
            className="bg-slate-400 rounded-md p-2 text-white"
          >
            <Trash size={24} />
          </button>
        </li>
      ))}
    </ul>
  )
}
export default Tasks
