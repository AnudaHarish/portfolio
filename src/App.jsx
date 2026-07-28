import { Home } from "lucide-react"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
