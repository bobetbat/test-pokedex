import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { IconButton } from "@mui/material";

const SearchContainer = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingY: theme.spacing(1),
	borderRadius: theme.shape.borderRadius,
	backgroundColor: "#FCFCFC",
	[theme.breakpoints.up("md")]: {
		padding: ".5rem",
		minWidth: "50rem",
	},
}));

const IconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
	color: "inherit",
	width: "80%",
}));

export const Search: React.FC = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<SearchContainer>
				<IconWrapper>
					<SearchIcon />
				</IconWrapper>
				<StyledInputBase
					placeholder="Search…"
					inputProps={{ "aria-label": "search" }}
					value={searchParams.get("name") || ""}
					onChange={(e) => {
						navigate({
							pathname: "/",
							search: `?${createSearchParams({ name: e.currentTarget.value })}`
						});
					}}
				/>
				<IconButton onClick={() => {
					navigate({
						pathname: "/",
					});
				}}>
					<CloseIcon />
				</IconButton>
			</SearchContainer>
		</Box>
	);
};
