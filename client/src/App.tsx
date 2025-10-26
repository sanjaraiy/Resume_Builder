import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import ResumeBuilder from "./pages/ResumeBuilder"
import Preview from "./pages/Preview"
import Login from "./pages/Login"


const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="app" element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='builder/:resumeId' element={<ResumeBuilder></ResumeBuilder>}></Route>
        </Route>

         <Route path="/view/:resumeId" element={<Preview></Preview>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         
      </Routes>
    </>
  )
}

export default App