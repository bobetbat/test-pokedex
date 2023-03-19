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
  "query": "query getItems{pokemon_v2_item{name,cost}}",
  "variables": null,
  "operationName": "getItems"
}

export const useFetch = (graphqlQuery: Query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        console.log('DATA:', data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}
