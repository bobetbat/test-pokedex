import React from "react";
import { Container, Button, Stack } from "@mui/material";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router";
import { Search } from "../components/Search";
import { getItems, useFetch } from "../api";

export const Home: React.FC = () => {
	const navigate = useNavigate();
	const {data, loading } = useFetch(getItems)
	console.log(data, loading)
	return (
		<Layout header footer>
			<Container>
				<Search />
				
				<Stack mt='2rem' gap={1} direction='row' justifyContent='space-evenly'>
				</Stack>
			</Container>
		</Layout>
	);
};
