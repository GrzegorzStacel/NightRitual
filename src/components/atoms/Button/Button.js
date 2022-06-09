import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button.attrs(() => ({
	type: "submit",
}))`
	min-width: 90px;
	padding: 15px;
	background-color: ${({ activeColor, theme }) => theme[activeColor]};
	color: ${({ activeColor, theme }) => theme.on[activeColor]};
	border: none;
	font-size: ${({ theme }) => theme.fontSize.xs};

	&:hover {
		transition: 0.2s;
		background-color: ${({ activeColor, theme }) => theme.hover[activeColor]};
	}
`;

Button.propTypes = {
	activeColor: PropTypes.string,
};

export default Button;
