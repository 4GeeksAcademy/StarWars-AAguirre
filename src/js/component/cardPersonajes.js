import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "../../styles/cards.css";
import { Context } from "../store/appContext";
import "../../styles/cards.css";





export const CardPersonajes = ({ personaje, id, detallesPersonajes }) => {

    const { store, actions } = useContext(Context);

    let nuevo = detallesPersonajes.filter((people) => {

        return people.uid == personaje.uid
    })[0]

    
    return (


        <div className="card_person " style={{ width: "14rem" }}>
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
                    <button className="btn-favo" onClick={() => actions.addFavoritos(personaje.name)}>
                    <i className=" fa fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

    )
};
