import styled from "styled-components";
import PropTypes from "prop-types";

const Desc = styled.p`
	color: ${({ activeColor, theme }) => theme.on[activeColor]};
	font-size: ${({ theme }) => theme.fontSize.xs};
`;

Desc.propTypes = {
	activeColor: PropTypes.string,
};

export default Desc;
