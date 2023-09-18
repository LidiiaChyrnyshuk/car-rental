import React from "react";
import { CardItem } from "../CardItem/CardItem";

import css from "./CardsList.module.css";
export const CardsList = ({ cars }) => {
	console.log(cars);
	return (
		<section className={css.sectionContainer}>
			<ul className={css.galleryList}>
				{cars.map((car) => (
					<CardItem key={car.id} car={car} />
				))}
			</ul>
		</section>
	);
};
