import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
    <div>  
        <ul class="nav nav-tabs flex justify-around md:justify-center md:space-x-20 bg-slate-900" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Parques nacionales</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Arboles nativos</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><Link to="/aboutUs"> Plantas nativas</Link></button>
          </li>
        </ul>
    </div>
    )
};
export default NavBar;