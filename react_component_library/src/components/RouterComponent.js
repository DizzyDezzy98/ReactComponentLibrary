import {BrowserRouter, Routes, Route} from "react-router-dom";
import  Home  from './Home.js'
import  About  from './About.js';

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