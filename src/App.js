import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ListModules from './pages/ListModules';
import CheatSheet from "./pages/CheatSheet"
import Header from './component/Header';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:lang' element={<ListModules />} />
          <Route path='/:lang/:module' element={<CheatSheet />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
