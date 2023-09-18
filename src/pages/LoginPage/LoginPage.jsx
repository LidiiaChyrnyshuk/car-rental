import { LoginForm } from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
	return (
		<div className={css.loginWrap}>
			<h1>Log In</h1>
			<LoginForm />
		</div>
	);
}
