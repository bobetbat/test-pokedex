import React, { useMemo } from "react";
import { Grid, Pagination } from "@mui/material";
import { Layout } from "../components/Layout";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { SearchCard } from "../components/SearchCard";
import { Search } from "../components/Search";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Home: React.FC = () => {
	const navigate = useNavigate();
	const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);

	const [searchParams] = useSearchParams();
	const page = useMemo(
		() => Number(searchParams.get("page") ?? 1),
		[searchParams]
	);

	const fileteredPokemons = useMemo(() => {
		if (pokemons.length === 0) return [];
		if (searchParams.get("name")) {
			return pokemons.filter((pokemon) => {
				return pokemon.name.includes(searchParams.get("name") ?? "");
			});
		}
		const page = Number(searchParams.get("page") ?? 1);
		const start = (page - 1) * 20;
		const end = start + 20;
		return pokemons.slice(start, end);
	}, [searchParams, pokemons]);

	return (
		<Layout header footer>
			<Search />
			<Grid container spacing={2} px='12%' py={4}>
				{fileteredPokemons.map((pokemon) => (
					<Grid key={pokemon.id} item xs={6} md={3}>
						<SearchCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
					</Grid>
				))}
			</Grid>
			<Pagination
				page={page}
				count={pokemons ? Math.ceil(pokemons.length / 20) : 1}
				variant="outlined"
				shape="rounded"
				onChange={(e, page) => {
					navigate({
						pathname: "/",
						search: `?${createSearchParams({ page: String(page) })}`
					});
				}}
			/>
		</Layout>
	);
};
