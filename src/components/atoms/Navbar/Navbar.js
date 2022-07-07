import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Belt = styled.nav`
	max-width: 60rem;
	background-color: ${({ theme }) => theme.surface};
	font-size: ${({ theme }) => theme.fontSize.xs};
	padding: 0 5px;
	border-radius: 0 0 25px 25px;
`;

const List = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	padding: 0 10px;
	margin: 0;
`;

const ListElement = styled(NavLink)`
	padding: 10px;
	color: ${({ theme }) => theme.on.surface};
	text-decoration: none;

	&.active {
		color: ${({ theme }) => theme.hover.primary};
	}
`;

const NavigationBelt = () => (
	<Wrapper>
		<Belt>
			<List>
				<ListElement to={"/"}>Home</ListElement>
				<ListElement to={"/hens"}>Kury</ListElement>
				<ListElement to={"/timegoals"}>Godz. Pracy</ListElement>
			</List>
		</Belt>
	</Wrapper>
);

export default NavigationBelt;
