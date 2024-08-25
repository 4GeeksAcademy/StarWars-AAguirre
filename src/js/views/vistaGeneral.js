import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardGeneral } from "../component/cardGeneral";
import "../../styles/home.css";



export const VistaGeneral = () => {
	const { store, actions } = useContext(Context);
    
	return (


		<div className="card_vistaGeneral">

			{store.personajes.map((personaje) => (
				<CardGeneral key={personaje.uid} personaje={personaje} id={personaje.uid} detallesPersonajes={store.detallesPersonajes} />
			))}
		</div>
	)
}
