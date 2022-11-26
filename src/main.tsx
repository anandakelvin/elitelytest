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
		path: "",
		element: <Root />,
		children: [
			{
				path: "explore/xuixian_98",
				element: <Profile />,
				children: [
					{
						path: "main",
						caseSensitive: true,
						element: <ProfileMain />,
					},
					{
						path: "about",

						element: <ProfileAbout />,
					},
				],
			},
			{
				path: "*",
				loader: () => {
					throw redirect("explore/xuixian_98");
				},
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
