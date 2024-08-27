import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";




export const CardPlanetas = ({ planetas, id, detallesPlanetas }) => {

    let detalles = detallesPlanetas.filter((planet) => { //con filter creo un nuevo array con todos los elemtn q pasan el filtro dado, 

        return planet.uid == planetas.uid
    })[0] //en este caso si son iguales oasan el filtro, y con [0 ] accedo al primer elemento 



    return (


        <div className="card_planets " style={{ width: "13rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planetas.name} </h5>
                <p className="card-text">Population: {detalles?.properties.population} </p>
                <p className="card-text">Terrain: {detalles?.properties.terrain} </p>
                <div className="btn ">
                    <Link to={`/infoPlanetas/${id}`}>
                        <p>
                            Learn more!
                        </p>

                    </Link>
                    <button>Favoritos</button>
                </div>
            </div>
        </div>

    )
};
