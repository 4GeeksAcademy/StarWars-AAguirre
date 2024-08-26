import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			detallesPersonajes: [],
			planetas: [],
			detallesPlanetas: [],
			vehiculos: [],
			detallesVehiculos: []



		},
		actions: {
			// Use getActions to call a function within a fuction


			//PERSONAJES
			traerPersonajes: async () => {
				const respuesta = await fetch("https://www.swapi.tech/api/people/") //realizo la solicitud a la api 
				const res = await respuesta.json() //convierto la respuesta en json

				const array = [] //creamos un array vacio para almacenar los detalles 
				for (let personaje of res.results) {  //iteramos sobre cada personaje en res.results (lo q nos da la api)
					const data = await getActions().traerDetallePersonajes(personaje.uid);  // para cada personaje se llama a la funcion traer.. pasando el uid del personaje. 
					array.push(data.result) //añado los detalles con push 
				}
				setStore(  // actualizo el estado con la lista de personajes y sus detalles 
					{
						personajes: res.results,
						detallesPersonajes: array
					}
				)
			},

			traerDetallePersonajes: async (id) => {

				const respuesta = await fetch(`https://www.swapi.tech/api/people/${id}`)  //hago la llamada para traer los detalles de un personaje especifico con su uid 
				return await respuesta.json() //convierto la respuesta en json y la devuelvo, se usa arriba 

			},


			//PLANETAS
			traerPlanetas: async () => {
				const respuesta = await fetch("https://www.swapi.tech/api/planets/")
				const res = await respuesta.json()

				const nuevo = [] //array vacio para ir almacenando. 
				for (let planeta of res.results) { //
					const data = await getActions().traerDetallePlanetas(planeta.uid)
					nuevo.push(data.result)
				}

				setStore(
					{
						planetas: res.results, //la primera url me da RESULTS
						detallesPlanetas : nuevo
					}
				)


			},

			traerDetallePlanetas: async (id) => {
				const res = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				return await res.json() // hago la llamada y la respuesta la convierto en json. 

			},


			//VEHICULOS

			traerVehiculos : async () =>{  //la mayoría de peticiones están formados por dos llamadas await, la primera resuelve con los encabezado de respuesta y la segunda, accede al cuerpo de respuesta json. 
				const respuesta = await	fetch("https://www.swapi.tech/api/vehicles/")
				const res = await respuesta.json()

				const nuevoArray =[]
				for (let vehiculo of res.results ){
					const data = await getActions().traerDetalleVehiculos(vehiculo.uid)
					nuevoArray.push(data.result)
				}
				setStore(
					{
					vehiculos : res.results,
					detallesVehiculos : nuevoArray
				}
			)
				
			},
			
			traerDetalleVehiculos: async (id)=>{ //tb se puede hacer sin await, fetch devolverá una promesa que será aceptada cuando reciba una resps y solo será rechazada si hay un fallo en la red o no se puede completar la petición. 
				const respuesta = await fetch( `https://www.swapi.tech/api/vehicles/${id}`)
				return await respuesta.json()
			}


		}
	};
};

export default getState;
