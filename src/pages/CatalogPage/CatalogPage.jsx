import React from 'react';
import { ButtonLoadMore } from '../../components/ButtonLoadMore/ButtonLoadMore';
import { CardsList } from '../../components/CardsList/CardsList';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectError, selectCars } from '../../redux/cars/carsSelectors';
import { fetchCars } from '../../redux/cars/carsOperations';
import { setTotalCars, selectTotalCars } from '../../redux/cars/totalCarsSlice';
import { getTotalCars } from '../../api/carsAPI';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const totalCars = useSelector(selectTotalCars);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  const cardsPerPage = 8;
  const paginatedCars = cars.slice(0, page * cardsPerPage);
  const totalPages = cardsPerPage < Math.ceil(cars.length / cardsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalCars();

        dispatch(setTotalCars(total));
      } catch (error) {
        console.error('Error fetching total cars:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (prevPage !== page) {
      dispatch(fetchCars(page));
      setPrevPage(page);
    }
  }, [dispatch, page, prevPage]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.container}>
      {cars.length !== 0 && (
        <>
          <CardsList cars={cars} />

          {totalPages !== page && <ButtonLoadMore onClick={loadMore} />}
        </>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default CatalogPage;
