import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import Navbar from "components/atoms/Navbar/Navbar";
import Hens from "./Hens";
import TimeGoals from "./TimeGoals";
import Home from "./Home";

function Root() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='hens' element={<Hens />} />
						<Route path='timegoals' element={<TimeGoals />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default Root;
