import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";


export const InfoPlanetas = () => {
    const { store } = useContext(Context)

    const { id } = useParams();

    return (
        <div className="principal_info">
            <div className="card_planetas" >
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body_planets">
                    <h5 className="card-title"> Name: {store.planetas[id - 1].name}</h5>
                    <p className="card-text">Description: {store.detallesPlanetas[id - 1].description}</p>
                    <p className="card-text">Climate{store.detallesPlanetas[id - 1].climate}</p>
                    <p className="card-text">Diameter: {store.detallesPlanetas[id - 1].diameter}</p>
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