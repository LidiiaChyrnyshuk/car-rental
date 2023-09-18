import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				className={css.registerForm}
			>
				<label className={css.registerLabel}>
					Name
					<input
						className={css.registerInput}
						type="text"
						name="name"
						required
					/>
				</label>
				<label className={css.registerLabel}>
					Email
					<input
						className={css.registerInput}
						type="email"
						name="email"
						placeholder="User@gmail.com"
						pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$"
						required
					/>
				</label>
				<label className={css.registerLabel}>
					Password
					<input
						className={css.registerInput}
						type="password"
						name="password"
						placeholder="min 8 symbols,uppercase and lowercase charasters"
						pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
						required
					/>
				</label>
				<button type="submit" className={css.btnRegister}>
					Register
				</button>
			</form>
		</div>
	);
};
