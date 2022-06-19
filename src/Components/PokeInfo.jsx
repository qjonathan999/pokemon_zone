import React from "react";

const PokeInfo=()=>{
    return(
        <>
            <h1>Charmander</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"/>
            <div className="abilities">
                <div className="group">
                    <h2>blaze</h2>
                </div>
                <div className="group">
                    <h2>solar-power</h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>HP:30</h3>
                <h3>Atack:52</h3>
                <h3>Defense:43</h3>
                <h3>Special-Attack:50</h3>
                <h3>Speed</h3>
            </div>
        </>
    )
}

export default PokeInfo