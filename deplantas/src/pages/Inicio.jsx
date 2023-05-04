import React from "react";
import ContenedorDelBoton from "../containers/home/ContenedorDelBoton";
import ContenedorDeFondo from "../containers/home/ContenedorDeFondo";
import { StyledInicio } from "../styled-components/StyleInicio";

const Home=()=> {
    return(
        <StyledInicio>
            <ContenedorDeFondo/>
            <ContenedorDelBoton/>
        </StyledInicio>
    )
};

export default Home;