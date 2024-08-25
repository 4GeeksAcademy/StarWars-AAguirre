import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";



export const CardGeneral = ({ personaje, id, detallesPersonajes }) => {

    const { store, actions } = useContext(Context);


    return (




        <div className="card " style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name} </h5>
                <p className="card-text">Gender:{detallesPersonajes[id-1]?.properties.gender} </p>
                <p className="card-text">Hair Color:{detallesPersonajes[id-1]?.properties.hair_color} </p>
                <p className="card-text">Eye Color: {detallesPersonajes[id-1]?.properties.eye_color}  </p>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
            </div>
        </div>

    )
};
