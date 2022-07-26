import MainWindow from "components/atoms/MainWindow/MainWindow";
import React from "react";
import styled from "styled-components";
import Desc from "components/atoms/Desc/Desc";
const widthColumn = "135px";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	flex-direction: row;
	align-items: center;
	margin: 0 0 0.4em;
	color: ${({ theme }) => theme.on["surface"]};
`;
const descriptions = ["Data", "Programowanie", "Angielski", "Sport", "Km"];

const DisplayDescriptions = descriptions.map((item, index) => (
	<Desc activeColor='surface' key={index + "-" + item} width={widthColumn}>
		{item}
	</Desc>
));

const TimeGoals = () => {
	return (
		<MainWindow>
			<Container>{DisplayDescriptions}</Container>
		</MainWindow>
	);
};

export default TimeGoals;
