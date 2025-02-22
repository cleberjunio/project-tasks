import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import TaskPage from "./pages/Taskpages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/task",
    element: <TaskPage />,
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
