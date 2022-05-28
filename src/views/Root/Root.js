import React from "react";
import Button from "components/atoms/Button/Button";
import GlobalStyle from "theme/GlobalStyle";

function Root() {
	return (
		<>
			<GlobalStyle />
			<h1>Hello World:)</h1>
			<Button>Hello</Button>
		</>
	);
}

export default Root;
