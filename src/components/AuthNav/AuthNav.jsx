import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNavWrap}>
      <NavLink to="/register" className={css.authLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authLink}>
        Log In
      </NavLink>
    </div>
  );
};
