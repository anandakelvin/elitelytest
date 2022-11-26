import { ReactNode } from "react";
import Navbar from "src/components/Navbar";
// @ts-ignore
import { ReactComponent as BottomHome } from "src/assets/svgs/bottom_navbar/bottom-home.svg";
// @ts-ignore
import { ReactComponent as BottomExplore } from "src/assets/svgs/bottom_navbar/bottom-explore.svg";
// @ts-ignore
import { ReactComponent as BottomFeed } from "src/assets/svgs/bottom_navbar/bottom-feed.svg";
// @ts-ignore
import { ReactComponent as BottomScheduled } from "src/assets/svgs/bottom_navbar/bottom-scheduled.svg";
import { BottomNavItem } from "src/components/BottomNavItem";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-greyBackground">
			<Navbar />
			<main className="pb-20 min-h-screen">{children}</main>
			<div className="block sm:hidden sticky bottom-0 bg-white">
				<div className="border-t border-greyBorder">
					<div className="grid grid-cols-4 justify-around items-center">
						<BottomNavItem>
							<BottomHome />
						</BottomNavItem>
						<BottomNavItem>
							<BottomExplore />
						</BottomNavItem>
						<BottomNavItem>
							<BottomFeed />
						</BottomNavItem>
						<BottomNavItem>
							<BottomScheduled />
						</BottomNavItem>
					</div>
				</div>
			</div>
		</div>
	);
}
