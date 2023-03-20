import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CardMedia } from "@mui/material";
import logo from "./../logo.svg";

export const SearchCard: React.FC<{ id: number, name: string, image?: string }> = ({ id, image, name }) => {
	const navigate = useNavigate();

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 240 }}
				image={image ?? logo}
			/>
			<CardActions sx={{ p: 0 }}>
				<Button variant="contained" sx={{ p: 2.5 }} fullWidth onClick={() => navigate(`/pokemon/${id}`)} size="small">{name}</Button>
			</CardActions>
		</Card>
	);
};
