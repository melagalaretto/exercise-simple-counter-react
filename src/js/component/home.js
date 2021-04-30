import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		/* Animo :) vos podes, yo creo en vos */
		<div className="container bg-dark text-white" id="contenedor">
			<div className="row">
				<div className="col-2 h2 text-center" id="clock">
					<i className="fas fa-clock"></i>
				</div>
				<div id="ultseg">
					<h1>{props.seis % 10}</h1>
				</div>
				<div>
					<h1>{props.cinco % 10}</h1>
				</div>
				<div>
					<h1>{props.cuatro % 10}</h1>
				</div>
				<div>
					<h1>{props.tres % 10}</h1>
				</div>
				<div>
					<h1>{props.dos % 10}</h1>
				</div>
				<div>
					<h1>{props.uno % 10}</h1>
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	uno: PropTypes.number,
	dos: PropTypes.number,
	tres: PropTypes.number,
	cuatro: PropTypes.number,
	cinco: PropTypes.number,
	seis: PropTypes.number
};
