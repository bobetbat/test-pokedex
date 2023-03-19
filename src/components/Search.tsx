import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchContainer = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingY: theme.spacing(1),
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	[theme.breakpoints.up("md")]: {
		minWidth: "51rem",
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "80%",
}));

export const Search: React.FC = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<SearchContainer>
				<IconWrapper>
					<SearchIcon />
				</IconWrapper>
				<StyledInputBase
					placeholder="Search…"
					inputProps={{ "aria-label": "search" }}
				/>
				<IconWrapper>
					<CloseIcon />
				</IconWrapper>
			</SearchContainer>
		</Box>
	);
};
