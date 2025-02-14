import { ChevronLeftIcon } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const TaskPage = () => {
  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const description = searchParams.get("description")
  const navigate = useNavigate()
  navigate("/")
  return (
    <div className="w-screen h-screen flex justify-center p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-4">
          <button
            className="absolute left-0 top-0 bottom-0 text-slate-100"
            onClick={() => navigate()}
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-center font-bold text-white">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-6 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage
