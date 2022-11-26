import { BottomNavbar } from "./BottomNavbar";
import { ReactNode } from "react";
import Navbar from "src/components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-greyBackground">
			<Navbar />
			<main className="pb-20 min-h-screen">{children}</main>
			<div className="block sm:hidden sticky bottom-0 bg-white">
				<BottomNavbar />
			</div>
		</div>
	);
}
