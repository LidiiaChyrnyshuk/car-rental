import React from 'react';
import { Loader } from '../../components/Loader/Loader';
import { CardsList } from '../../components/CardsList/CardsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/cars/carsSelectors';
import { fetchCars } from '../../redux/cars/carsOperations';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading ? <Loader /> : <CardsList />}
    </div>
  );
};

export default CatalogPage;
