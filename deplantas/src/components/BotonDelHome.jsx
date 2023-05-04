import React from "react";
import { ContenedorDeBoton } from "../styled-components/StyleInicio";
import { Boton } from "../styled-components/StyleInicio";
import {Link} from "react-router-dom";

export const BotonDelHome=()=>{
    return(
        <ContenedorDeBoton>
            <Boton>
                <Link to="/home">Home</Link>
            </Boton>
        </ContenedorDeBoton>
    )
}