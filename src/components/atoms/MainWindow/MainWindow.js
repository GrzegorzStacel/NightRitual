import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Window = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	color: ${({ theme }) => theme.on.surface};
	margin-top: 50px;
`;

const Wrapper = styled.main`
	width: 90%;
	padding: 20px;
	background-color: ${({ theme }) => theme.surface};
`;

const MainWindow = ({ children }) => {
	return (
		<Window>
			<Wrapper>{children}</Wrapper>
		</Window>
	);
};

MainWindow.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MainWindow;
