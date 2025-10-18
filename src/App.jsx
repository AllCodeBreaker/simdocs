import './App.css'
// import RenderMD from './component/RenderMD'
import Router from './router/Router'
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
