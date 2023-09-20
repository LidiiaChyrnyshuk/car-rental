import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { MdClose } from 'react-icons/md';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({
  handleBackdropClick,
  handleModalClose,
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalConditionsSplitted = rentalConditions.split('\n', 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <div className={css.contentWrepper}>
          <button
            type="button"
            className={css.btnClose}
            onClick={handleModalClose}
          >
            {MdClose}
          </button>
          <img className={css.carImg} src={img} alt={make} />
          <div className={css.infoWrapper}>
            <div className={css.mainInfo}>
              <ul className={css.carInfo}>
                <li className={css.carText}>{make}</li>
                <li className={css.modelTextBlue}>
                  {model}
                  <span style={{ color: 'black' }}>,</span>
                </li>
                <li className={css.carText}>{year}</li>
              </ul>
            </div>
            <div className={css.secondaryInfo}>
              <div className={css.secondaryCarText}>{city}</div>
              <div className={css.secondaryCarText}>{country}</div>
              <div className={css.secondaryCarText}>id: {id}</div>
              <div className={css.secondaryCarText}>Year: {year}</div>
              <div className={css.secondaryCarText}>Type: {type}</div>
              <div className={css.secondaryCarText}>
                Fuel Consumption: {fuelConsumption}
              </div>
              <div className={css.secondaryCarText}>
                Engine Size: {engineSize}
              </div>
            </div>
            <p className={css.description}>{description}</p>
            <div className={css.accessories}>
              <p className={css.accessoriesTitle}>
                Accessories and functionalities:
              </p>
              <ul className={css.accessoryList}>
                {accessories.map((accessory, index) => (
                  <li className={css.accessoryListItem} key={index}>
                    {accessory}
                  </li>
                ))}
                {functionalities.map((functionality, index) => (
                  <li className={css.accessoryListItem} key={index}>
                    {functionality}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.rentalBlock}>
              <p className={css.rentalTitle}>Rental Conditions:</p>
              <ul className={css.rentalInfo}>
                <li className={css.rentalItem}>
                  Minimum age:{' '}
                  <span className={css.rentalItemValue}>{number}</span>
                </li>
                <li className={css.rentalItem}>
                  {rentalConditionsSplitted[1]}
                </li>
                <li className={css.rentalItem}>
                  {rentalConditionsSplitted[2]}
                </li>
                <li className={css.rentalItem}>
                  Mileage:{' '}
                  <span className={css.rentalItemValue}>
                    {mileage.toLocaleString('en-EN')}
                  </span>
                </li>
                <li className={css.rentalItem}>
                  Price:{' '}
                  <span className={css.rentalItemValue}>{rentalPrice}</span>
                </li>
              </ul>
            </div>
            <a className={css.rentalButton} href="tel:+380730000000">
              Rental car
            </a>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  handleModalClose: PropTypes.func,
  handleBackdropClick: PropTypes.func,
};
