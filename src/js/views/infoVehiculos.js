import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const InfoVehiculos = () => {
    const { store } = useContext(Context)

    const { id } = useParams();

    return (
        <div className="card_vehiculos" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{store.vehiculos[id - 1].name}</h5>
                <p className="card-text">{store.detallesVehiculos[id - 1].description}</p>
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