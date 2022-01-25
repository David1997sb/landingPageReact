import React from "react";

const NavBar = () => {
	return (
		<>
			<div>
				<nav class="navbar navbar-light bg-dark ">
					<a class="navbar-brand text-white">Start Bootsrap</a>
					<ul class="nav d-flex justify-content-end bg-dark">
						<li class="nav-item ">
							<a
								class="nav-link active bg-dark text-white"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link bg-dark text-white" href="#">
								About
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link bg-dark text-white" href="#">
								Services
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link bg-dark text-white">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
