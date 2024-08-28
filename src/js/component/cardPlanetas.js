import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { Context } from "../store/appContext";




export const CardPlanetas = ({ planetas, id, detallesPlanetas }) => {
   const {store, actions}= useContext(Context)

    let detalles = detallesPlanetas.filter((planet) => { //con filter creo un nuevo array con todos los elemtn q pasan el filtro dado, 

        return planet.uid == planetas.uid
    })[0] //en este caso si son iguales oasan el filtro, y con [0 ] accedo al primer elemento 



    return (


        <div className="card_planets " style={{ width: "14rem" }}>
       
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top-" alt="..." />
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
                    <button className="btn-favo" onClick={() => actions.addFavoritos(planetas.name)}>
                        <i className=" fa fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

    )
};
