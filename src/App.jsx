import { useState } from 'react'
import './App.css'
// import RenderMD from './component/RenderMD'
import Router from './router/router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
   <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
   </>
  )
}

export default App
