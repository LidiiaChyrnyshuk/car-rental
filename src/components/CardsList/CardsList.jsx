import React, { useState } from 'react';
import { CardItem } from '../CardItem/CardItem';
import { selectCars, selectIsLoading } from '../../redux/cars/carsSelectors';
import css from './CardsList.module.css';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

export const CardsList = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);

  const cardsPerPage = 8;
  const paginatedCars = cars.slice(0, page * cardsPerPage);
  const totalPages = Math.ceil(cars.length / cardsPerPage);

  const getPage = () => setPage(page + 1);

  return (
    <section className={css.sectionContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.galleryList}>
          {paginatedCars.map(car => (
            <CardItem
              key={car.id}
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
          ))}
        </ul>
      )}
      {isLoading ? (
        totalPages !== page && <ButtonLoadMore getPage={getPage} />
      ) : (
        <Loader />
      )}
    </section>
  );
};
