import {BrowserRouter, Routes, Route} from "react-router-dom";
import  Home  from '../pages/Home.js'
import  About  from '../pages/About.js';

export default function RouterComponent(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        </BrowserRouter>
    )
}