import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<nav className={css.navWrap}>
			<NavLink to="/" className={css.navLink}>
				Home
			</NavLink>
			<NavLink to="catalog" className={css.navLink}>
				Catalog
			</NavLink>
			{isLoggedIn && (
				<NavLink to="/favorites" className={css.navLink}>
					Favorites
				</NavLink>
			)}
		</nav>
	);
};
