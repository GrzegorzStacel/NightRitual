import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
	padding: 45px;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.grey100};
	font-size: ${({ theme }) => theme.fontSize.s};
`;

const Button = () => {
	return <MyButton>Click me now</MyButton>;
};

export default Button;
