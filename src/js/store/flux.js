import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			detallesPersonajes: []



		},
		actions: {
			// Use getActions to call a function within a fuction

			traerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						setStore({ personajes: data.results })
						for (let personaje of data.results) {
							getActions().traerDetallePersonajes(personaje.uid);
						}

					})

					.catch(err => console.error(err))
			},


			traerDetallePersonajes: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						let aux = getStore().detallesPersonajes //get obtener, 
						aux.push(data.result);
						aux.sort((a,b)=>{
							return a.uid-b.uid;
						})
						
						setStore({ detallesPersonajes: aux }) //set asignar
				
					})

					.catch(err => console.error(err))
			}




		}
	};
};

export default getState;
