import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavoritePage,
  deleteFromFavoritePage,
} from '../../redux/favorite/favoriteSlice';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';

import { HiHeart } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';
import { Modal } from '../Modal/Modal';
import css from './CardItem.module.css';

export const CardItem = ({
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);

    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setShowModal(false);

    document.body.style.overflow = '';
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalClose();
      document.body.style.overflow = '';
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      handleModalClose();
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleBackdropClick);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleBackdropClick);
    };
  });

  const incrementFavorite = () => {
    dispatch(addToFavoritePage(id));
  };
  const decrementFavorite = () => {
    dispatch(deleteFromFavoritePage(id));
  };

  const addressSlice = address.split(', ');
  const city = addressSlice[1];
  const country = addressSlice[2];

  // const miliageToString = mileage.toString();
  // const miliageAfterComma = miliageToString.slice(1, 4);
  // const miliageUi = miliageToString[0] + ',' + miliageAfterComma;
  const firstFunctionality = functionalities[0]
    .split(' ')
    .slice(0, 1)
    .join(' ');
  // const firstFunctionality = functionalities[0];
  const favorites = useSelector(selectFavorite);

  const followStatus = favorites.includes(id);
  return (
    <>
      <div className={css.item}>
        <div className={css.cardImgWrap}>
          <img className={css.cardImg} src={img} alt={make} />
          <button
            className={css.iconBtn}
            onClick={!followStatus ? incrementFavorite : decrementFavorite}
            type="button"
          >
            {followStatus ? (
              <HiHeart color={'#3470ff'} size={22} />
            ) : (
              <HiOutlineHeart size={22} />
            )}
          </button>
        </div>
        <div className={css.infoWrapper}>
          <div className={css.mainInfo}>
            <ul className={css.carInfo}>
              <li className={css.carText}>{make}</li>
              <li className={css.carTextBlue}>
                {model}
                <span style={{ color: 'black' }}>,</span>
              </li>
              <li className={css.carText}>{year}</li>
            </ul>
            <p className={css.carRentalPrice}>{rentalPrice}</p>
          </div>
          <div className={css.secondaryInfo}>
            <ul className={css.secondaryCarInfo}>
              <li className={css.secondaryCarAbout}>{city}</li>
              <li className={css.secondaryCarAbout}>{country}</li>
              <li className={css.secondaryCarAbout}>{rentalCompany}</li>
            </ul>
            <ul className={css.secondaryCarInfo}>
              <li className={css.secondaryCarAbout}>{type}</li>
              <li className={css.secondaryCarAbout}>{make}</li>
              <li className={css.secondaryCarAbout}>{id}</li>
              <li className={css.secondaryCarAbout}>{firstFunctionality}</li>
            </ul>
          </div>
          <button
            className={css.learnMoreBtn}
            type="button"
            onClick={handleModalOpen}
          >
            Learn more
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          handleModalClose={handleModalClose}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
          key={id}
          model={model}
          make={make}
          year={year}
          rentalPrice={rentalPrice}
          address={address}
          rentalCompany={rentalCompany}
          functionalities={functionalities}
          id={id}
          type={type}
          img={img}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          description={description}
          accessories={accessories}
          rentalConditions={rentalConditions}
          mileage={mileage}
        />
      )}
    </>
  );
};
