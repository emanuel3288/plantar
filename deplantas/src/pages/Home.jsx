import React from "react";
import Footer from "../components/Footer"
import CarrouselImagenes from "../components/CarrouselImagenes";

const Home=()=>{
    return(
        <div className="flex flex-col h-screen w-full m-1 md:m-3">
            <CarrouselImagenes/>
            <Footer/>
        </div>
    )
};
export default Home;