import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Call from "./components/Call"
import Context from "./components/Context"
import Effect from "./components/Effect"
import Home from "./components/Home"
import Memo from "./components/Memo"
import MyHook from "./components/MyHook"
import Reducer from "./components/Reducer"
import Ref from "./components/Ref"
import State from "./components/State"
import Store from './store/Store'
import DataContext, {data} from './data/DataContext'
import { useState } from 'react'

function App() {
  const [state, setState] = useState(data)
  return (
    <Store>
      <DataContext.Provider value={{state, setState}}>
        <BrowserRouter>
          <div className='flexbox'>
            <nav className='navegacao'>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/state/useState">useState</Link>
                </li>
                <li>
                  <Link to="/effect">useEffect</Link>
                </li>
                <li>
                  <Link to="/ref">useRef</Link>
                </li>
                <li>
                  <Link to="/memo">useMemo</Link>
                </li>
                <li>
                  <Link to="/callback">useCallback</Link>
                </li>
                <li>
                  <Link to="/context">useContext</Link>
                </li>
                <li>
                  <Link to="/reducer">useReducer</Link>
                </li>
                <li>
                  <Link to="/myhook">useMyHook</Link>
                </li>
              </ul>
            </nav>
            <div className='contein'>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/callback" element={<Call/>} />
                <Route path="/context" element={<Context/>} />
                <Route path="/effect" element={<Effect/>} />
                <Route path="/memo" element={<Memo/>} />
                <Route path="/myhook" element={<MyHook/>} />
                <Route path="/reducer" element={<Reducer/>} />
                <Route path="/ref" element={<Ref/>} />
                <Route path="/state/:title" element={<State/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </Store>
  )
}

export default App
