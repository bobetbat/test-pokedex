import {
	createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PokemonDetails } from "./pages/PokemonDetails";

export const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/details/:id",
		element: <PokemonDetails />,
		errorElement: <NotFound />,
	}
];

export const router = createBrowserRouter(routes);
