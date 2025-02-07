import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks"
import { useState } from "react"
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para criar aplicações web",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar TailwindCSS",
      description: "Estudar TailwindCSS para estilizar aplicações web",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Estudar Next.js",
      description: "Estudar Next.js para criar aplicações web",
      isCompleted: false,
    },
  ])
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTask)
  }

  function onDeletedTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
  }

  function ondAddTaskSubmit({ title, description }) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }
  return (
    <div className="w-screen h-screen flex justify-center p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-center font-bold text-white">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeletedTaskClick={onDeletedTaskClick}
          ondAddTaskSubmit={ondAddTaskSubmit}
        />
      </div>
    </div>
  )
}
export default App
