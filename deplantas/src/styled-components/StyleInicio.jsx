import tw from "twin.macro";
import styled from "styled-components";

export const StyledInicio=styled.div`
    ${tw
    `
    relative h-[100vh] w-[100vw] bg-gradient-to-b from-gray-100 to-green-100 
    `}
`
export const StyledFondo=styled.div`
    ${tw
    `
    flex mx-0.5 mt-0.5 bg-[url('https://www.clara.es/medio/2022/03/16/plantas-de-interior-bonitas_ad98ca6d_1280x720.jpg')] bg-contain [border-bottom-width: 0.6vh]
    `} 
`
export const StyledImagenDelFondo=styled.div`
    ${tw
    `
    flex flex-wrap h-[85vh] w-[100vw] justify-center items-end bg-gradient-to-b from-[#0A3B03] to-gray-500 mix-blend-overlay 
    `} 
`
export const ContenedorDeBoton=styled.div`
    ${tw
    `
    flex justify-center mt-[-1vh]

    `}
`
export const Boton=styled.button`
    ${tw
    `
    bg-[#6a975e85] text-white text-2xl border border-white px-[15vh] py-1 rounded-2xl shadow-[#da7d4f2e] shadow-xl cursor-pointer

    `}
`