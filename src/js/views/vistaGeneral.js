import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanetas } from "../component/cardPlanetas";
import { CardPersonajes } from "../component/cardPersonajes";
import { CardVehiculos } from "../component/cardVehiculos";
import "../../styles/home.css";




export const VistaGeneral = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="principal ">
			<div className="card_vistaGeneral row d-flex flex-nowrap overflow-auto">

				{
					store.personajes.map((personaje) => (
						<CardPersonajes key={personaje.uid} personaje={personaje} id={personaje.uid} detallesPersonajes={store.detallesPersonajes} />
					))
				}
			</div>

			<div className="card_vistaGeneral row d-flex flex-nowrap overflow-auto">
				{
					store.planetas.map((planetas) => (

						<CardPlanetas key={planetas.uid} planetas={planetas} id={planetas.uid} detallesPlanetas={store.detallesPlanetas} />

					))
				}
			</div>

			<div className="card_vistaGeneral row d-flex flex-nowrap overflow-auto">
				{
					store.vehiculos.map((vehiculos) => (
						<CardVehiculos key={vehiculos.uid} id={vehiculos.uid} vehiculos={vehiculos} detallesVehiculos={store.detallesVehiculos} />
					))
				}

			</div>
		</div>

	)
}
