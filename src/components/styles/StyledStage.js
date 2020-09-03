import styled from "styled-components";

export const StyledState = styled.div`
	display: grid;
	grid-template-rows: repeat(
		${(props) => props.height},
		calc(25vw / ${(props) => props.width})
	);
	grid-template-columns: repeat(${(props) => props.width}, 1fr);
	grid-gap: 1px;

	width: 100%;
	max-width: 25vw;

	border: 2px solid #333;
	background: #111;
`;
