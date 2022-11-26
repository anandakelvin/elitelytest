import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="bg-white sticky top-0 z-50 sm:static drop-shadow">
			<div className="block sm:hidden">
				<div className="p-5 flex gap-5 items-center">
					<BiArrowBack />
					<div className="txt-headline6 text-center">Explore</div>
				</div>
			</div>
			<div className="hidden sm:block">
				<div className="p-5 grid grid-cols-3 items-center">
					<BiArrowBack />
					<div className="txt-headline6 text-center">Profile</div>
				</div>
				<div className="flex justify-center">
					<NavLink
						to="/home"
						className={({ isActive }) =>
							isActive ? "btn-nav-active" : "btn-nav"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/explore"
						className={({ isActive }) =>
							isActive ? "btn-nav-active" : "btn-nav"
						}
					>
						Explore
					</NavLink>
					<NavLink
						to="/feed"
						className={({ isActive }) =>
							isActive ? "btn-nav-active" : "btn-nav"
						}
					>
						Feed
					</NavLink>
					<NavLink
						to="/scheduled"
						className={({ isActive }) =>
							isActive ? "btn-nav-active" : "btn-nav"
						}
					>
						Scheduled
					</NavLink>
				</div>
			</div>
		</header>
	);
}
