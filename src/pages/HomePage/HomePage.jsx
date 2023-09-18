import React from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
	return (
		<div className={css.hero}>
			<h1>We welcome you!</h1>
			<p className={css.text}>
				If you are looking for a place to rent a car, you are in the right
				place. We have the best prices and conditions. It is on our website that
				you can easily choose a car that meets all your requirements. Therefore,
				do not waste time, register and go to the most interesting.
			</p>
		</div>
	);
}
