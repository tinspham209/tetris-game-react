import React from "react";
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";
import { createState } from "../../gameHelper";
import { StyledTetrisWrapper, StyledTetris } from "../styles/StyledTetris";

const Tetris = () => {
	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage state={createState()} />
				<aside>
					<div>
						<Display text="Score" />
						<Display text="Rows" />
						<Display text="Level" />
					</div>
					<StartButton />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
