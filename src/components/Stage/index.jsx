import React from "react";
import Cell from "../Cell";
import { StyledState } from "../styles/StyledStage";
const Stage = ({ state }) => {
	return (
		<StyledState width={state[0].length} height={state.length}>
			{state.map((row) =>
				row.map((cell, x) => <Cell key={x} type={cell[0]} />)
			)}
		</StyledState>
	);
};

export default Stage;
