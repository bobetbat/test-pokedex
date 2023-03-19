import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";

export const NotFound: React.FC = () => {
	return (
		<Layout header>
			<Box mt='30vh'>
				<Typography variant='h4'>404 Page not found</Typography>
			</Box>
		</Layout>
	);
};
