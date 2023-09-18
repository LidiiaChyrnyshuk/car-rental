import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
	return (
		<div className={css.registerWrap}>
			<h1>Register</h1>
			<RegisterForm />
		</div>
	);
}
