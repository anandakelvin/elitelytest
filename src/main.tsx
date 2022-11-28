import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	Navigate,
	redirect,
	RouterProvider,
} from "react-router-dom";
import Root from "src/routes/root";
import Profile from "src/routes/profile";
import ProfileMain from "src/routes/profile-main";
import ProfileAbout from "src/routes/profile-about";

const router = createBrowserRouter([
	{
		path: "explore",
		element: <Root />,
		children: [
			{
				path: "xiuxian_98",
				element: <Profile />,
				children: [
					{
						path: "",
						caseSensitive: true,
						element: <ProfileMain />,
					},
					{
						path: "about",
						element: <ProfileAbout />,
					},
				],
			},
		],
	},
	{
		path: "*",
		loader: () => {
			throw redirect("explore/xiuxian_98/");
		},
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
