import React from "react";
import { Link } from "react-router-dom";




export const CardGeneral = ({ personaje, id, detallesPersonajes }) => {




    return (




        <div className="card " style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name} </h5>
                <p className="card-text">Gender:{detallesPersonajes[id - 1]?.properties.gender} </p>
                <p className="card-text">Hair Color:{detallesPersonajes[id - 1]?.properties.hair_color} </p>
                <p className="card-text">Eye Color: {detallesPersonajes[id - 1]?.properties.eye_color}  </p>
                <p className="card-text"></p>
                <div className="btn ">
                    <Link to={`/infoPersonajes/${id}`}>
                        <p>
                            Ver detalles
                        </p>

                    </Link>
                </div>
            </div>
        </div>

    )
};
