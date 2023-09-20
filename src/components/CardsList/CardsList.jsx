import React from 'react';
import { CardItem } from '../CardItem/CardItem';

import css from './CardsList.module.css';
export const CardsList = ({ cars }) => {
  return (
    <section className={css.sectionContainer}>
      <ul className={css.galleryList}>
        {cars.map(car => (
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
    </section>
  );
};
