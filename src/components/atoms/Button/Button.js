import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
	border: 2px solid blue;
	padding: 45px;
`;

const Button = () => {
	return <MyButton>Click me now</MyButton>;
};

export default Button;
