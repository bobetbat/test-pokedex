import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems, useFetch } from "../api";
import { addPokemons } from "../store/reducers/pokemon";

type Props = {
	children: ReactNode;
	footer?: boolean;
	header?: boolean;
};

export const DataProvider: React.FC<Props> = ({ children }) => {
	const dispatch = useDispatch();

	const { data } = useFetch(getItems);
	useEffect(() => {
		if (data === null) return;
		// console.log("save data to store");
		dispatch(addPokemons(data?.pokemon_v2_pokemon));
	}, [data, dispatch]);

	return (
		<>
			{children}
		</>
	);
};
