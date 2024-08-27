import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const InfoPersonajes = () => {
    const { store, actions } = useContext(Context)

    const { id } = useParams();

    return (
        <div className="principal_info">
            <div className="card_personajes_info" >
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img_info_personajes" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name :{store.personaje[id-1].name}</h5>
                    <p className="card-text"> Description: {store.detallesPersonajes[id-1].description}</p>
                    <p className="card-text"> Gender: {store.detallesPersonajes[id-1].gender}</p>
                    <p className="card-text"> Height: {store.detallesPersonajes[id-1].height}</p>
                    <p className="card-text"> Eye color: {store.detallesPersonajes[id-1].eye_color}</p>

                    <p className="card-text"> Skin Color: {store.detallesPersonajes[id-1].skin_color}</p>



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