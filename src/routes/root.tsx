import RootLayout from "src/components/RootLayout";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<RootLayout>
			<Outlet />
		</RootLayout>
	);
}
