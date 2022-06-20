import React from "react";
import imagen from "../../src/image.png"
const Card=({pokemon,loading,infoPokemon})=>{
    
    return(
        <>
            {loading?<h1>Loading...</h1>:
            pokemon.map((item,key)=>{
                return(
                    <>
                        <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.front_default} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Card