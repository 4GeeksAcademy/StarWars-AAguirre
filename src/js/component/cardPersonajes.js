import React from "react";
import { Link } from "react-router-dom";




export const CardPersonajes = ({ personaje, id, detallesPersonajes }) => {

    let nuevo = detallesPersonajes.filter((people)=>{
        
       return people.uid == personaje.uid}) [0]
      
    
    return (


        <div className="card " style={{ width: "13rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name} </h5>
                <p className="card-text">Gender:{nuevo?.properties.gender} </p>
                <p className="card-text">Hair Color:{nuevo?.properties.hair_color} </p>
                <p className="card-text">Eye Color: {nuevo?.properties.eye_color}  </p>
                <p className="card-text"></p>
                <div className="btn ">
                    <Link to={`/infoPersonajes/${id}`}>
                        <p>
                        Learn more!
                        </p>

                    </Link>
                </div>
            </div>
        </div>

    )
};
