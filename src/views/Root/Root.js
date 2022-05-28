import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import Button from "components/atoms/Button/Button";

function Root() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyle />
					<h1>Hello World:)</h1>
					<Button>Hello</Button>
				</>
			</ThemeProvider>
		</>
	);
}

export default Root;
