const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],



		},
		actions: {
			// Use getActions to call a function within a fuction

			traerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						setStore({personajes: data.personajes })
						console.log(getStore());
					})
						
					.catch(err => console.error(err))
			}

		}
	};
};

export default getState;
