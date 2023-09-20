import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navWrap}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      <NavLink to="catalog" className={css.navLink}>
        Catalog
      </NavLink>

      <NavLink to="/favorites" className={css.navLink}>
        Favorites
      </NavLink>
    </nav>
  );
};
