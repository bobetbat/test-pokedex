import { createSlice } from "@reduxjs/toolkit";
import { PokemonSpecies } from "../../api";

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {
		pokemons: [] as PokemonSpecies[],
	},
	reducers: {
		addPokemons: (state, action) => {
			state.pokemons = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addPokemons } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
