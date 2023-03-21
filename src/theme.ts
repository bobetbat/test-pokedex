

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: "#FF3E4E",
			contrastText: "#FCFCFC",
		},
		secondary: {
			main: "#FF3E4E1A",
			contrastText: "#1D1D1D",
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
