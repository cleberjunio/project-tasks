import { useState } from "react"

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="flex bg-slate-200 p-4 rounded-md gap-4 flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="px-4 py-2 rounded-md border-slate-300 outline-slate-400"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="px-4 py-2 rounded-md border-slate-300 outline-slate-400"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa")
          }
          onAddTaskSubmit(title, description)
          setTitle("")
          setDescription("")
        }}
        className="bg-slate-400 text-white px-4 py-2 rounded-md"
      >
        Adicionar tarefa
      </button>
    </div>
  )
}
export default AddTasks
