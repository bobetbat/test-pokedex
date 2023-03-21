import "./App.css";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";
import { DataProvider } from "./components/DataProvider";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<DataProvider>
						<CssBaseline />
						<RouterProvider router={router} />
					</DataProvider>
				</Provider>
			</ThemeProvider>
		</div>
	);
};

export default App;
