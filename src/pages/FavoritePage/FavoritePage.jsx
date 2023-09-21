import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { selectCars } from '../../redux/cars/carsSelectors';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';

import css from '../../components/CardsList/CardsList.module.css';
import { CardItem } from 'components/CardItem/CardItem';

const Favorites = () => {
  const cars = useSelector(selectCars);
  const favorite = useSelector(selectFavorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));
  const [page, setPage] = useState(1);

  const cardsPerPage = 8;
  const paginatedCars = favoriteCars.slice(0, page * cardsPerPage);
  const totalPages = Math.ceil(favoriteCars.length / cardsPerPage);

  const getPage = () => setPage(page + 1);

  return (
    <div className={css.container}>
      <h1 className={css.title}>My favorites cars</h1>
      <ul className={css.galleryList}>
        {paginatedCars.map(car => (
          <li key={car.id}>
            <CardItem
              model={car.model}
              make={car.make}
              year={car.year}
              rentalPrice={car.rentalPrice}
              isFavorite={car.isFavorite}
              address={car.address}
              rentalCompany={car.rentalCompany}
              functionalities={car.functionalities}
              id={car.id}
              type={car.type}
              img={car?.img}
              fuelConsumption={car.fuelConsumption}
              engineSize={car.engineSize}
              description={car.description}
              accessories={car.accessories}
              rentalConditions={car.rentalConditions}
              mileage={car.mileage}
            />
          </li>
        ))}
      </ul>
      {favoriteCars.length === 0 ? (
        <p
          style={{
            alignSelf: 'center',
            marginTop: 100,
            fontSize: 26,
          }}
        >
          There is no cars in your favorite list yet
        </p>
      ) : (
        totalPages !== page && <ButtonLoadMore getPage={getPage} />
      )}
    </div>
  );
};

export default Favorites;
