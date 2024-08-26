import React from "react";
import { Link } from "react-router-dom";




export const CardVehiculos = ({ detallesVehiculos, vehiculos, id }) => {


    let nuevo = detallesVehiculos.filter((car) => {
        return car.uid == vehiculos.uid
    })[0]

    console.log('id', id)

    return (


        <div className="card " style={{ width: "13rem" }}>
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
                </div>
            </div>
        </div>

    )
};
