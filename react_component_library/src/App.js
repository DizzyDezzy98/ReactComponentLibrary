import './App.css';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Components from './components/Components';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='Components' element={<Components />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

