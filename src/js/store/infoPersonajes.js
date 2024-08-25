import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./appContext";

export const InfoPersonajes = () => {
    const { store } = useContext(Context)

    const { id } = useParams();

    console.log(store)

    return (
        <div className="card" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{store.personajes[id - 1].name}</h5>
                <p className="card-text">{store.detallesPersonajes[id - 1].description}</p>
                <div className="btn">
                    <Link to="/">
                        <p>
                            Volver
                        </p>

                    </Link>
                </div>
            </div>
        </div>
    )
}