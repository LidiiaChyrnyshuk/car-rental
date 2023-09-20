import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { selectIsRefreshing } from './redux/auth/authSelectors';
import { refreshUser } from './redux/auth/authOperations';
import { Loader } from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        {/* <Route
          path="favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<FavoritePage />} />
          }
        /> */}
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/favorites"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/favorites"
              component={<LoginPage />}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};
