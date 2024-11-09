import {BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Link } from "react-router-dom"
import About from "./components/views/About"
import Home from "./components/views/Home"
import ParametroUm from "./components/views/ParametroUm"
import ParametroDois from "./components/views/ParametroDois"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/parametroum/10">Param#01</Link>
            </li>
            <li>
              <Link to="/parametrodois">Param#02</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/parametroum/:id" element={<ParametroUm/>} />
          <Route path="/parametrodois" element={<ParametroDois/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
