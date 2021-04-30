//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let contador = 0;
setInterval(() => {
	let uno = Math.floor(contador / 1);
	let dos = Math.floor(contador / 10);
	let tres = Math.floor(contador / 100);
	let cuatro = Math.floor(contador / 1000);
	let cinco = Math.floor(contador / 10000);
	let seis = Math.floor(contador / 100000);

	console.log(uno, dos, tres, cuatro, cinco, seis);
	contador++;

	ReactDOM.render(
		<Home
			uno={uno}
			dos={dos}
			tres={tres}
			cuatro={cuatro}
			cinco={cinco}
			seis={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
