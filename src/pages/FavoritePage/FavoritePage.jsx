import React from 'react';
import { useSelector } from 'react-redux';
import { CardsList } from '../../components/CardsList/CardsList';

import { selectCars } from '../../redux/cars/carsSelectors';
import css from './FavoritePage.module.css';

const Favorites = () => {
  const cars = useSelector(selectCars);

  const favorite = useSelector(state => state.favorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));

  return (
    <div className={css.container}>
      <h1 className={css.title}>My favorites cars</h1>

      <CardsList cars={favoriteCars} />
    </div>
  );
};

export default Favorites;
