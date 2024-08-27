import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";


export const InfoVehiculos = () => {
    const { store } = useContext(Context)

    const { id } = useParams();

    return (
        <div className="principal_info">
            <div className="card_vehiculos_info row" >
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img_info_vehiculos col-4" alt="..." />
                <div className="card-body col-3">
                    <h5 className="card-title">Name : {store.vehiculos[id - 1].name}</h5>
                    <p className="card-text">Description : {store.detallesVehiculos[id - 1].description}</p>
                    <p className="card-text">Cargo capacity : {store.vehiculos[id - 1].cargo_capacity}</p>
                    <p className="card-text">Manufacturer : {store.vehiculos[id - 1].manufacturer}</p>

                    <div className="btn">
                        <Link to="/">
                            <p>
                                Volver
                            </p>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}