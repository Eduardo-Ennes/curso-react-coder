import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// CONFIGURAÇÃO REDUX
import {Provider} from "react-redux"
import configStore from "../store/StoreConfig.js"
const store = configStore()

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>,
)
