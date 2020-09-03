export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createState = () =>
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, "clear"])
	);
