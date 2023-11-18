import React from 'react'
import ReactDOM from 'react-dom/client'
import Gatewayit from './Gatewayit'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>

   <Gatewayit/>


</BrowserRouter>

  </React.StrictMode>,
)
