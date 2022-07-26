import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Window = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

const Wrapper = styled.main`
	width: 90%;
	max-width: 950px;
	padding: 20px;
	display: flex;
	flex-direction: column;
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
