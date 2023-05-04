import React from "react";

const Card=(props)=>{
    <div className="inline-block bg-black">
        <h1>
            {props.name}
        </h1>
        <h2>
            {props.apellido}
        </h2>
    </div>
}
export default Card;