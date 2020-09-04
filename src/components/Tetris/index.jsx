import React, { useState } from "react";
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";

import { StyledTetrisWrapper, StyledTetris } from "../styles/StyledTetris";

import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useInterval } from "../../hooks/useInterval";

import { createStage, checkCollision } from "../../gameHelper";

const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage] = useStage(player, resetPlayer);

	console.log("re-render");

	const movePlayer = (dir) => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({
				x: dir,
				y: 0,
			});
		}
	};

	const startGame = () => {
		setStage(createStage());
		setDropTime(500);
		resetPlayer();
		setGameOver(false);
	};

	const drop = () => {
		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game over
			if (player.pos.y < 1) {
				console.log("Game OVER");
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const keyUp = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 40) {
				// Down
				console.log("Interval on");
				setDropTime(500);
			}
		}
	};

	const dropPlayer = () => {
		// Stop the interval when user type DOWN
		setDropTime(null);
		console.log("Interval off");
		drop();
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				//Left
				movePlayer(-1);
			} else if (keyCode === 39) {
				//Right
				movePlayer(1);
			} else if (keyCode === 40) {
				// Down
				dropPlayer();
			} else if (keyCode === 38) {
				// Up
				playerRotate(stage, 1);
			}
		}
	};

	useInterval(() => {
		drop();
	}, dropTime);

	return (
		<StyledTetrisWrapper
			role="button"
			tabIndex="0"
			onKeyDown={(e) => move(e)}
			onKeyUp={keyUp}
		>
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
					<StartButton callback={startGame} />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
