// @ts-ignore
import { ReactComponent as BottomHome } from "src/assets/svgs/bottom_navbar/bottom-home.svg";
// @ts-ignore
import { ReactComponent as BottomExplore } from "src/assets/svgs/bottom_navbar/bottom-explore.svg";
// @ts-ignore
import { ReactComponent as BottomFeed } from "src/assets/svgs/bottom_navbar/bottom-feed.svg";
// @ts-ignore
import { ReactComponent as BottomScheduled } from "src/assets/svgs/bottom_navbar/bottom-scheduled.svg";
import { NavLink } from "react-router-dom";
import colors from "src/colors";

export function BottomNavbar({}) {
	return (
		<div className="grid grid-cols-4 justify-around items-center border-t border-greyBorder h-[64px]">
			<NavLink to="/home" className="flex justify-center p-3">
				{({ isActive }) => (
					<BottomHome stroke={isActive ? colors.brand : colors.greyContent} />
				)}
			</NavLink>
			<NavLink to="/explore" className="flex justify-center p-3">
				{({ isActive }) => (
					<BottomExplore
						stroke={isActive ? colors.brand : colors.greyContent}
					/>
				)}
			</NavLink>
			<NavLink to="/feed" className="flex justify-center p-3">
				{({ isActive }) => (
					<BottomFeed stroke={isActive ? colors.brand : colors.greyContent} />
				)}
			</NavLink>
			<NavLink to="/scheduled" className="flex justify-center p-3">
				{({ isActive }) => (
					<BottomScheduled
						stroke={isActive ? colors.brand : colors.greyContent}
					/>
				)}
			</NavLink>
		</div>
	);
}
