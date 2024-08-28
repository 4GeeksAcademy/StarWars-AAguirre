import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanetas } from "../component/cardPlanetas";
import { CardPersonajes } from "../component/cardPersonajes";
import { CardVehiculos } from "../component/cardVehiculos";
import "../../styles/vistaGeneral.css";




export const VistaGeneral = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="card_vistaGeneral ">

			<div className="card_vistaGeneral_person row d-flex flex-nowrap overflow-auto">
				<h2 className="titulo">	Characters  </h2>

				{
					store.personajes.map((personaje) => (
						<CardPersonajes key={personaje.uid} personaje={personaje} id={personaje.uid} detallesPersonajes={store.detallesPersonajes} />
					))
				}
			</div>

			<div className="card_vistaGeneral_planets row d-flex flex-nowrap overflow-auto">
				<h2 className="titulo">Planets </h2>
				{
					store.planetas.map((planetas) => (

						<CardPlanetas key={planetas.uid} planetas={planetas} id={planetas.uid} detallesPlanetas={store.detallesPlanetas} />

					))
				}
			</div>

			<div className="card_vistaGeneral_veh row d-flex flex-nowrap overflow-auto">
				<h2 className="titulo">Vehicles </h2>
				{
					store.vehiculos.map((vehiculos) => (
						<CardVehiculos key={vehiculos.uid} id={vehiculos.uid} vehiculos={vehiculos} detallesVehiculos={store.detallesVehiculos} />
					))
				}

			</div>
		</div>

	)
}
