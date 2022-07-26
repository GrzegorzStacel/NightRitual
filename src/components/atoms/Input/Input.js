import styled, { css } from "styled-components";

const Input = styled.input.attrs((props) => ({
	type: "text",
	readOnly: props.readOnly ? true : false,
}))`
	background-color: ${({ activeColor, theme }) =>
		activeColor ? theme[activeColor] : "transparent"};
	border-radius: 3px;
	border: none;
	color: ${({ activeColor, theme }) =>
		activeColor ? theme.on[activeColor] : theme.on["surface"]};
	width: 40px;
	height: 35px;
	text-align: right;
	padding: 0 5px;
	margin: 0;

	:focus {
		outline: none;
		background-color: ${({ activeColor, theme }) =>
			activeColor ? theme[activeColor] : theme.hover["surface"]};
		color: ${({ activeColor, theme }) =>
			activeColor ? theme[activeColor] : theme.on["surface"]};
	}

	${(props) =>
		props.big &&
		css`
			width: 135px;
			text-align: center;
			flex-grow: 0;
			padding: 0;
		`}
`;

export default Input;
