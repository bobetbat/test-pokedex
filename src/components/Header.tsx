import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header: React.FC = () => {
	return (
		<AppBar>
			<Box maxWidth="xl">
				<Toolbar disableGutters sx={{ justifyContent: "space-between", px: "1rem" }}>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							display: { md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
            LOGO
					</Typography>

				</Toolbar>
			</Box>
		</AppBar>
	);
};
