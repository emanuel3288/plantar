import {Routes,Route} from "react-router-dom";
import Inicio from "../pages/Inicio"
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

const Router=()=> {
    return(
        <Routes>
            <Route exact path="/"element={<Inicio/>} ></Route>
            <Route exact path="/home" element={<Home nombreDelItem="HOME"/>}></Route>
            <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
        </Routes>
    )
};

export default Router;