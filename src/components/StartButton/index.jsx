import React from "react";
import { StyledStartButton } from "../styles/StyledStartButton";

const StartButton = ({ callback }) => {
	return (
		<StyledStartButton onClick={callback}>
			<h2>Start game</h2>
		</StyledStartButton>
	);
};

export default StartButton;
