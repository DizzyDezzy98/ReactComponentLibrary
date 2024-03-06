import './styles/App.css';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Components from './pages/Components';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='components' element={<Components />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

