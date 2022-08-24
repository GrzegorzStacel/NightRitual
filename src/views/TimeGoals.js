import MainWindow from "components/atoms/MainWindow/MainWindow";
import React from "react";
import styled from "styled-components";
import { formatDate, getMonday } from "utils/formatTime";
import Desc from "components/atoms/Desc/Desc";
import Input from "components/atoms/Input/Input";
import { nanoid } from "nanoid";
import dummyValue from "assets/dummyValueForInputs";

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
	grid-template-columns: 30% 10% 25% 35%;
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

export class TimeGoals extends React.Component {
	getInputs = (validDummyValue) => {
		const row = [];
		let id;
		let desc = "min";

		Object.entries(validDummyValue).map((item, index) => {
			id = nanoid();
			if (index === 3) desc = "m";

			row.push(
				<InsideContainer key={id} id={id}>
					<Input type='tel' defaultValue={item[1][0]} maxLength={3} />
					<Desc>h</Desc>
					<Input type='tel' defaultValue={item[1][1]} maxLength={3} />
					<Desc>{desc}</Desc>
				</InsideContainer>
			);
		});

		return row;
	};

	DisplayInputs = () => {
		const inputs = [];
		let dateAfterFormat = "",
			validDummyValue;

		let latestMonday = new Date();
		latestMonday = getMonday(latestMonday);

		for (let index = 0; index < 7; index++) {
			dateAfterFormat = formatDate(latestMonday, index);

			if (Object.prototype.hasOwnProperty.call(dummyValue, dateAfterFormat))
				validDummyValue = dummyValue[dateAfterFormat];

			inputs.push(
				<Container key={`id-${index}`}>
					<Input
						readOnly
						disabled
						big
						activeColor='surface'
						defaultValue={dateAfterFormat}
					/>
					{this.getInputs(validDummyValue)}
				</Container>
			);
		}

		return inputs;
	};

	render() {
		return (
			<MainWindow>
				<Container>{DisplayDescriptions}</Container>
				{this.DisplayInputs()}
			</MainWindow>
		);
	}
}

export default TimeGoals;
