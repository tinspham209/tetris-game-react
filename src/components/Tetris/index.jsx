import React, { useState } from "react";
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";

import { StyledTetrisWrapper, StyledTetris } from "../styles/StyledTetris";

import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";

const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const [player] = usePlayer();
	const [stage, setStage] = useStage(player);

	console.log("re-render");
	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage state={stage} />
				<aside>
					{gameOver ? (
						<Display gameOver={gameOver} text="Game Over" />
					) : (
						<div>
							<Display text="Score" />
							<Display text="Rows" />
							<Display text="Level" />
						</div>
					)}
					<StartButton />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
