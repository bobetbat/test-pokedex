import { useEffect, useState } from "react";

const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
const headers = {
	"content-type": "application/json",
	// "Authorization": "<token>"
};

interface Query {
  query: string;
  variables: null;
  operationName: string;
}

export const getItems: Query = {
	"query": `query getItems {
    pokemon_v2_pokemon(where: {id: {_lte: 151}}, order_by: {id: asc}) {
      name
      id
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
  `,
	"variables": null,
	"operationName": "getItems"
};

export interface PokemonTypes {
  base_stat: number;
  pokemon_v2_type: {
    name: string;
  }
}
export interface PokemonStat {
  base_stat: number;
  pokemon_v2_stat: {
    name: string;
  }
}

export interface PokemonSpecies {
  name: string;
  id: number;
  weight: number;
  height: number;
  pokemon_v2_pokemontypes: PokemonTypes[]
  pokemon_v2_pokemonstats: PokemonStat[];
}

export interface Response {
  pokemon_v2_pokemon: PokemonSpecies[];
}

export const useFetch = (graphqlQuery: Query) => {
	const [data, setData] = useState<Response | null>(null);
	const [loading, setLoading] = useState(true);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const options = {
					"method": "POST",
					"headers": headers,
					"body": JSON.stringify(graphqlQuery)
				};
				const response = await fetch(endpoint, options);
				const data = await response.json();
				setData(data.data);
				// console.log("fetch pokemon data:", data.data.pokemon_v2_pokemon);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error };
};

