import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import Mohamed from "./components/Mohamed.jsx";
import Ahmed from "./components/Ahmed.jsx";
import DefaultProfile from "./components/DefaultProfile.jsx";
import Meal from "./components/Meal.jsx";
import ProfileNotFound from "./components/ProfileNotFound.jsx";
import MealsList from "./components/MealsList.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
	{
		// /users /meals /profile  /xyz ???  errorElement or *
		path: "/", 
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <h1>This is the home page</h1>,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			// {
			// 	path: "/profile/:name",
			// 	element: <Profile />,
			// 	children: [
			// 		{
			// 			index: true,
			// 			element: <DefaultProfile />,
			// 		},
			// 		// {
			// 		// 	// /profile/mohamed
			// 		// 	path: "mohamed",
			// 		// 	element: <Mohamed />,
			// 		// },
			// 		// {
			// 		// 	path: "ahmed",
			// 		// 	element: <Ahmed />,
			// 		// },
			// 	],
			// },
			// {
			// 	path: "/meal",
			// 	element: <MealsList />,
			// },
			// {
			// 	path: "/meal/:mealId",
			// 	element: <Meal />,
			// },
			// =======================
			{
				path: "/meal/:mealId",
				element: <Meal />,
				children: [
					{
						index: true,
						element: <MealsList />,
					},
				],
			},

			{
				path: "/profile",
				element: <Profile />,
				children: [
					{
						index: true,
						element: <DefaultProfile />,
					},
					{
						// /profile/mohamed
						path: "mohamed",
						element: <Mohamed />,
					},
					{
						path: "ahmed",
						element: <Ahmed />,
					},
					{
						path: "*",
						element: <ProfileNotFound />,
					},
				],
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},

	// {
	// 	path: "/profile",
	// 	element: <Profile />,
	// 	children: [
	// 		{
	// 			index: true,
	// 			element: <DefaultProfile />,
	// 		},
	// 		{
	// 			// /profile/mohamed
	// 			path: "mohamed",
	// 			element: <Mohamed />,
	// 		},
	// 		{
	// 			path: "ahmed",
	// 			element: <Ahmed />,
	// 		},
	// 	],
	// },
	// ===========================
	// /profile/mohamed  mohamed
	// {
	// 	path: "/profile/mohamed",
	// 	element: <Mohamed />,
	// },
]);

export default router;
