import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container ">
				<Link to="/">
					<span className="navbar-brand mb-0 h3">
						<img src="https://www.prosportstickers.com/wp-content/uploads/nc/y/star_wars_chrome_looking_logo_sticker__59710.jpg" alt="Logo" width="110px" height="50px" />
					</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
					<ul className="navbar-nav" aria-labelledby="dropdownMenuClickableInside">
						<li className="nav-item dropdown">
							<button className="btn btn-primary dropdown-toggle align-items-center" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuClickableInside" data-bs-auto-close="outside" >
								Favorites
								<div className="favoriteCount">
									{store.fav.length}
								</div>
							</button>
							<ul className="dropdown-menu dropdown-menu-end dropdown-menu-primary " aria-labelledby="dropdownMenuClickableInside">
								{

									store.fav.length == 0 ? <li className="favorite">
										<a className="dropdown-item" href="#">Empty</a></li> :
										store.fav.map((e, index) => {
											//console.log(e)
											return (
												<li className="favorite" key={index}>
													<div className="col-10">
														<a className="dropdown-item" href="#">{e}</a>
													</div>
													<div className="col-2">
														<span><i className="fas fa-trash-alt"
															onClick={() => {
																actions.addFavoritos(e);
															}}></i>
														</span>
													</div>
												</li>
											)

										})
								}
							</ul>
						</li>
					</ul>

				</div>
				</div>
		</nav>

	)
};
