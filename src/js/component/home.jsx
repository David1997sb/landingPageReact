import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
//create your first component

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container ">
				<Jumbotron />
				<div className="row ps-5 pt-4">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
