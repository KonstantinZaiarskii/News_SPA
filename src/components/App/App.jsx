import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppContent from "components/AppContent/AppContent";

import { StyledEngineProvider, createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme();

const App = () => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<AppContent />
				</BrowserRouter>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};
export default App;
