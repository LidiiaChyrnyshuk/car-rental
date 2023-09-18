import React from "react";
import { useSelector } from "react-redux";
import { CardsList } from "../../components/CardsList/CardsList";
import { selectTotalCars } from "../../redux/cars/totalCarsSlice";
import css from "./FavoritePage.module.css";

const Favorites = () => {
	const totalCars = useSelector(selectTotalCars);
	const favorite = useSelector((state) => state.favorite);
	const favoriteCars = totalCars.filter((car) => favorite.includes(car.id));

	return (
		<div className={css.container}>
			<h1 className={css.title}>My favorites cars</h1>

			<CardsList cars={favoriteCars} />
		</div>
	);
};

export default Favorites;
