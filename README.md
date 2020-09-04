# Mini Project: Tetris Game

## Date: 3 - Sep - 2020

### Functions

- Tetris Game with React

### Screenshot

<img src=""/>

### Tech-Stack

- React
- Styled-components

### Deploy

- [Live Site](link)
- [Live Server](link)

### Plan Of Action

- Initial project
- setup react & tooling
- setup hooks useInterval
- Scaffolding/Initial components
  - Cell
  - Display
  - Stage
  - StartButton
  - Tetris
- Stage and Tetrominos
  - `createState`
  - Tetrominos
    - create shape of each element: `0(default), I, J, L, O, S, T, Z`
    - `randomTetromino` function
- Styling with styled-components
  - StyledCell
  - StyledTetris
  - StyledStage
  - StyledDisplay
  - StyledStartButton
  - import style to component
- `usePlayer`: set Position tetromino of user current playing
- `useStage`: '[stage, setStage]';
  - `createStage`: when we restart the game, we need to create a clean stage for that
- Stage update and player movement
  - `movePlayer` function: move tetromino when user use `move` left/right function
  - in `Tetris` component:
    - `startGame` function:
    - `drop` function:
    - `dropPlayer` function: move tetromino when user use `move` down function dropPlayer();
    - `move` function: tracking keyCode of user typing on keyboard
  - in `src/gameHelper`
    - updatePlayerPos: set new position of tetromino
    - resetPlayer: reset tetrominos when run `startGame` function
  - in `useStage`
    - `updateStage`
      - First flush the stage
      - Then draw the tetromino
  - in `usePlayer`
    - set tetromino is 0 when initial application
- collision detection
  - `checkCollision` function:
  - 1. Check that we are on an actual Tetromino Cell
  - 2. Check that our move is inside the game areas height (y)
  - We shouldn't go through the bottom of the play area
  - 3. Check that our move is inside the game areas width (x)
  - 4. Check that the cell we are moving is isn't set to clear
  - Add checkCollision to Tetris component
- player RotationG
  - `rotate` function:
    - Make the rows to become cols
    - Reverse each row to get a rotated matrix
  - `playerRotate` function
  - Check when tetromino rotate in a collied: true
- Clear Rows
- drop with useInterval
- useGameStatus and React.memo

### After this project

I have improve my knowledge about

I have understand about

- styling without CSS file by styled-components
  Next Steps:

### Directory Structure

```
.
├── .gitignore
├── package.json
├── README.md
├── public
└── src
    ├── App.js
    ├── App.css
    ├── index.css
    └── index.js
```

### Set up

Use the cmd line to clone repo to your computer

```
git clone [github_repo_url]
```

Use the cmd line to install dependencies.

```
npm install
```

Run in cmd for start the dependencies server

```
npm start
```
