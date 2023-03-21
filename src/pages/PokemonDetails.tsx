import React, { useMemo } from "react";
import { Breadcrumbs, Card, CardMedia, Container, Link, List, ListItem, Stack, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { PokemonSpecies } from "../api";
import { Layout } from "../components/Layout";
import logo from "./../logo.svg";
import { formatString } from "../utils";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const PokemonDetails: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [value, setValue] = React.useState("1");
	const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);


	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const pokemonDetails = useMemo(() => {
		return (pokemons as PokemonSpecies[]).find((pokemon) => pokemon.id === Number(id));
	}, [id, pokemons]);

	return (
		<Layout header footer>
			<Container sx={{ width: "100%", typography: "body1", px: "12%" }}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link fontWeight={600} underline="hover" color="inherit" onClick={() => navigate(-1)}>
						<ArrowBackIosIcon fontSize='small' sx={{ pt: 1 }} />	Back to search
					</Link>
				</Breadcrumbs>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList onChange={handleChange}>
							<Tab label="Profile" value="1" />
							<Tab label="Stats" value="2" />
						</TabList>
					</Box>
					<Card sx={{ p: 4 }}>
						<TabPanel value="1" sx={{ display: "flex", flexDirection: "row", p: 0 }}>
							<Card sx={{ mr: 1 }}>
								<Typography fontWeight={600} color='primary.main' variant='h5'>{formatString(pokemonDetails?.name)}</Typography>
								<CardMedia
									sx={{ height: 340, width: 240 }}
									image={logo}
									title="green iguana"
								/>
							</Card>
							<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", alignSelf: "center" }}>
								<ListItem>
									<Box sx={{ p: 1, borderRadius: ".25rem", width: "20%", bgcolor: "secondary.main" }}>
										<Typography fontWeight={600} variant='body1'>
											Height
										</Typography>
									</Box>
									<Box sx={{ ml: 1 }}>
										<Typography variant='body1'>
											{pokemonDetails?.height}
										</Typography>
									</Box>
								</ListItem>
								<ListItem>
									<Box sx={{ p: 1, borderRadius: ".25rem", width: "20%", bgcolor: "secondary.main" }}>
										<Typography fontWeight={600} variant='body1'>
											Weight
										</Typography>
									</Box>
									<Box sx={{ ml: 1 }}>
										<Typography variant='body1'>
											{pokemonDetails?.weight}
										</Typography>
									</Box>
								</ListItem>
								<ListItem>
									<Box sx={{ p: 1, borderRadius: ".25rem", width: "20%", bgcolor: "secondary.main" }}>
										<Typography fontWeight={600} textAlign='center' variant='body1'>
											Type
										</Typography>
									</Box>
									{pokemonDetails?.pokemon_v2_pokemontypes?.map((stat, i) => <Box key={i} sx={{ ml: 1 }}>
										<Typography variant='body1'>
											{formatString(stat.pokemon_v2_type?.name)}
										</Typography>
									</Box>)}
								</ListItem>
							</List>
						</TabPanel>
						<TabPanel value="2" sx={{ display: "flex", flexDirection: "row", p: 0 }}>
							<Card sx={{ mr: 1 }}>
								<Typography fontWeight={600} color='primary.main' variant='h5'>{formatString(pokemonDetails?.name)}</Typography>
								<CardMedia
									sx={{ height: 340, width: 240 }}
									image={logo}
									title="green iguana"
								/>
							</Card>
							<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", alignSelf: "center" }}>
								{pokemonDetails?.pokemon_v2_pokemonstats?.map((stat, i) => <ListItem key={i} sx={{ display: "flex", direction: "row", justifyContent: "space-between" }}>
									<Typography fontWeight={600} variant='body1'>
										{formatString(stat.pokemon_v2_stat?.name)}
									</Typography>
									<Box sx={{ borderRadius: ".25rem", width: "60%", bgcolor: "secondary.main" }}>
										<Stack alignItems='start' justifyContent='center' sx={{ width: `${stat.base_stat}%`, height: "2rem", bgcolor: "primary.main", borderRadius: ".25rem", pl: ".5rem" }}>
											<Typography color='primary.contrastText' variant='body1'>
												{stat.base_stat}
											</Typography>
										</Stack>
									</Box>
								</ListItem>)}
							</List>
						</TabPanel>
					</Card>
				</TabContext>
			</Container>
		</Layout >
	);
};
