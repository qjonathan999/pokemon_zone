import React from "react";
import imagen from "../../src/image.png"
const Card=()=>{
    return(
        <>
            <div className="card">
                <h2>1</h2>
                <img src={imagen} alt="" />
                <h2>Charmander</h2>
            </div>
        </>
    )
}

export default Card