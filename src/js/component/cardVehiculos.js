import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { Context } from "../store/appContext";



export const CardVehiculos = ({ detallesVehiculos, vehiculos, id }) => {
 
    const { store, actions } = useContext(Context);

    let nuevo = detallesVehiculos.filter((car) => {
        return car.uid == vehiculos.uid
    })[0]

    console.log('id', id)

    return (


        <div className="card_vehiculos" style={{ width: "14rem" }}>
            
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehiculos.name} </h5>
                <p className="card-text">Model :{nuevo.properties?.model} </p>
                <p className="card-text"> Vehicle class: {nuevo.properties?.vehicle_class} </p>
                <div className="btn ">
                    <Link to={`/infoVehiculos/${id}`}>
                        <p>
                            Learn more!
                        </p>

                    </Link>
                    <button className="btn-favo" onClick={() => actions.addFavoritos(vehiculos.name)}>
                    <i className=" fa fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

    )
};
