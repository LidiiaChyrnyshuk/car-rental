import { AppBar } from "../AppBar/AppBar";
import { Loader } from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<div>
				<AppBar />
			</div>

			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
export default Layout;
