import React from "react";
import NavBar from "./NavBar";

const CarrouselImagenes=()=> {
    return(
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="flex h-[700px] w-full md:h-[900px] bg-[url(https://www.infoturchubut.ar/wp-content/uploads/2019/12/Parque-Nacional-Iguazu.jpg)]" alt="..."/>
            <div className="flex h-[100px] w-full py-5 md:h-[150px] md:py-7 bg-black justify-center"><h1 className=" text-white text-4xl md:text-7xl">Argentina-Cataratas del Iguazú</h1></div>          
          </div>

          <div class="carousel-item">
            <div className="bg-[url(https://www.civitatis.com/blog/wp-content/uploads/2021/02/parque-nacional-perito-moreno.jpg)] h-[600px] w-100 md:h-[700px]" alt="..."/>
            <div className="flex w-full py-5 md:py-10 bg-black text-center justify-center"><h1 className="text-white text-4xl md:text-7xl">Argentina-Los glaciares</h1></div>
          </div>
          <div class="carousel-item">
            <div className="bg-[url(https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/06193215/Parque-Nacional-Iguazu_Ph-Parques-Nacionales.jpg)] h-[600px] w-100 md:h-[700px]" alt="..."/>
            <div className="flex w-full py-5 md:py-10 bg-black justify-center"><h1 className="text-white text-4xl md:text-7xl">Argentina-Cataratas del iguazú</h1></div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div>
          <NavBar/>
        </div>
      </div>
    ) 
};
export default CarrouselImagenes;