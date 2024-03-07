import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Components from './pages/Components';
import CardPage from './component_pages/CardComponentPage';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='components' element={<Components />}></Route>
      <Route path='/components/cardcomponentpage' element={<CardPage />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

