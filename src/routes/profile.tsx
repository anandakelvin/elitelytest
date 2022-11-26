import { NavLink, Outlet } from "react-router-dom";
import Menu from "src/components/Menu";
import NewUserLi from "src/components/NewUserLi";
import ProfileBanner from "src/components/ProfileBanner";
import VerifiedUserLi from "src/components/VerifiedUserLi";

export default function Profile() {
	return (
		<div className="container mx-auto max-w-[1024px]">
			<ProfileBanner />
			<div className="flex mt-5">
				<div className="w-full sm:w-2/3 sm:pr-5">
					<div className="grid grid-cols-3 mb-5 border border-transparent border-b-greyBorder">
						<NavLink
							to="main"
							className={({ isActive }) =>
								isActive ? "btn-nav-active" : "btn-nav"
							}
						>
							Main
						</NavLink>
						<NavLink
							to="about"
							className={({ isActive }) =>
								isActive ? "btn-nav-active" : "btn-nav"
							}
						>
							About
						</NavLink>
						<NavLink
							to="posts"
							className={({ isActive }) =>
								isActive ? "btn-nav-active" : "btn-nav"
							}
						>
							Posts
						</NavLink>
					</div>
					<Outlet />
				</div>
				<div className="hidden sm:flex flex-col gap-5 sm:w-1/3">
					<Menu>
						<Menu.Title>Meet our new members</Menu.Title>
						<NewUserLi />
						<NewUserLi />
						<NewUserLi />
						<NewUserLi />
						<Menu.LoadMore />
					</Menu>
					<Menu>
						<Menu.Title>You might also wanna check</Menu.Title>
						<VerifiedUserLi />
						<VerifiedUserLi />
						<VerifiedUserLi />
						<VerifiedUserLi />
						<VerifiedUserLi />
						<Menu.LoadMore />
					</Menu>
				</div>
			</div>
		</div>
	);
}
