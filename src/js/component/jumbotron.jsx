import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar.jsx";
//create your first component

const Jumbotron = () => {
	return (
		<div class="container mt-3">
			<div class="mt-4 p-5 bg-light text-dark rounded">
				<h1>A Warm Welcome!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat..
				</p>
				<button type="button" className="btn btn-primary">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
