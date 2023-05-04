import React,{useState} from "react";

export default function Formulario(){
    
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [contador,setContador]=useState(0);
    //eventos
    const enviarDatos=(e)=>{
        e.preventDefault();
        console.log(`nombre: ${nombre}, apellido:${apellido}`);
        console.log(`Se llama ${nombre} ${apellido}. `);
        
    };
    const cambiarNombre= (e) =>{
        setNombre(e.target.value);
        console.log("holaaaaa"+e.target.value);
    };
    const cambiarApellido=(e)=>{setApellido(e.target.value)};
    const total=()=>{
        setContador(contador+1);
        alert("Has creado "+contador+" usuarios.");
    }
    return(
        <div className="flex justify-center">
            <form onSubmit={enviarDatos}>
                <div className="inline-block bg-blue-200 rounded-lg py-2 space-y-4 h-[200px] md:h-[20%]">
                    <div>
                        <label for="nombre" className="text-black pl-4">Nombre</label>
                        <br/>
                        <input type="text" value={nombre} onChange={cambiarNombre} id="nombre" placeholder="ingrese su nombre" className="bg-black border-2 hover:border-blue-600 focus:border-blue-300 mx-2 rounded-full text-gray-300 pl-2"/>
                    </div>
                    <div>
                        <label for="apellido" className="text-black pl-4">Apellido</label>
                        <br/>
                        <input type="text" id="apellido" value={apellido} onChange={cambiarApellido} placeholder="ingrese su apellido" className="bg-black border-2 hover:border-blue-600 text-gray-300 rounded-full mx-2 pl-2"/>
                    </div>

                    <div>
                        <label for="dni" className="text-black pl-4">Dni</label>
                        <br/>
                        <input type="number" id="dni" placeholder="ingrese su apellido" className="bg-black border-2 hover:border-blue-600 rounded-full text-gray-300 mx-2 pl-2"/>
                    </div>
                    <div>
                        <button name="boton" type="submit" onClick={total} className="bg-black border-2 border-rose-600 hover:bg-gray-700 text-white ml-3 rounded-lg px-4">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
};
