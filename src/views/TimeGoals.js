import MainWindow from "components/atoms/MainWindow/MainWindow";
import React from "react";
import styled from "styled-components";
import formatDate from "utils/formatTIme";
import Desc from "components/atoms/Desc/Desc";
import Input from "components/atoms/Input/Input";
import { nanoid } from "nanoid";

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

const InsideContainer = styled.div`
	align-items: center;
	background: ${({ theme }) => theme["surface"]};
	display: grid;
	grid-template-columns: 25% 15% 25% 35%;
	align-content: center;
	justify-items: stretch;
	height: 35px;
	text-align: center;
	width: ${widthColumn};
`;

const descriptions = ["Data", "Programowanie", "Angielski", "Sport", "Km"];

const DisplayDescriptions = descriptions.map((item, index) => (
	<Desc activeColor='surface' key={index + "-" + item} width={widthColumn}>
		{item}
	</Desc>
));

const getInputs = (index) => {
	const row = [];
	let id;

	for (index = 0; index < 4; index++) {
		id = nanoid();

		if (index === 3) {
			row.push(
				<InsideContainer key={id} id={id}>
					<Input />
					<Desc>km</Desc>
					<Input />
					<Desc>m</Desc>
				</InsideContainer>
			);
		} else {
			row.push(
				<InsideContainer key={id} id={id}>
					<Input />
					<Desc>h</Desc>
					<Input />
					<Desc>min</Desc>
				</InsideContainer>
			);
		}
	}

	return row;
};

const DisplayInputs = () => {
	const inputs = [];

	for (let index = 0; index < 7; index++) {
		inputs.push(
			<Container key={`id-${index}`}>
				<Input
					readOnly
					disabled
					big
					activeColor='surface'
					defaultValue={formatDate(index)}
				/>
				{getInputs(4)}
			</Container>
		);
	}

	return inputs;
};

const TimeGoals = () => {
	return (
		<MainWindow>
			<Container>{DisplayDescriptions}</Container>
			{DisplayInputs()}
		</MainWindow>
	);
};

export default TimeGoals;
