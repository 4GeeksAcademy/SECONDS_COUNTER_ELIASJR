import React from "react";
import SecondsCounter from "./secondscounter.jsx";
import logo from "../../img/logo.png";
import icon2 from "../../img/icon.png";


const Home = () => {
	return (
		<div className="container-fluid text-center text-light p-2">
			<div className="box mt-2 mb-3">
			<h1 className="text text-center mt-2 mb-3"><span>SECONDS COUNTER</span></h1>
			</div>
			<p><img className="logo mt-1 mb-1" src={logo} style={{width:"100px"}}/></p>
			<SecondsCounter />
			<p className="mt-5">Made by{" "}<a href="https://github.com/eliasjr89"><img className="icon" src={icon2}></img></a>Elías Jiminián</p>
		</div>
	);
};

export default Home;
