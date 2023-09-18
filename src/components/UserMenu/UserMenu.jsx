import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	return (
		<div className={css.userWrap}>
			<p className={css.userText}>Hello,{user.name}</p>
			<button
				className={css.btnLogout}
				type="button"
				onClick={() => dispatch(logOut())}
			>
				Log Out
			</button>
		</div>
	);
};
