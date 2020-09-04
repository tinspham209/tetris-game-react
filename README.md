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

1. **Initial project**
2. **setup react & tooling**
3. **setup hooks useInterval**
4. **Scaffolding/Initial components**

- Cell
- Display
- Stage
- StartButton
- Tetris

5. **Stage and Tetrominos**

- `createState`
- Tetrominos
  - create shape of each element: `0(default), I, J, L, O, S, T, Z`
  - `randomTetromino` function

6. **Styling with styled-components**

- StyledCell
- StyledTetris
- StyledStage
- StyledDisplay
- StyledStartButton
- import style to component

7. `usePlayer`: set Position tetromino of user current playing
8. `useStage`: '[stage, setStage]';

- `createStage`: when we restart the game, we need to create a clean stage for that

9. **Stage update and player movement**

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

10. **Collision detection**

- `checkCollision` function:
- 1. Check that we are on an actual Tetromino Cell
- 2. Check that our move is inside the game areas height (y)
- We shouldn't go through the bottom of the play area
- 3. Check that our move is inside the game areas width (x)
- 4. Check that the cell we are moving is isn't set to clear
- Add checkCollision to Tetris component

11. **Player RotationG**

- `rotate` function:
  - Make the rows to become cols
  - Reverse each row to get a rotated matrix
- `playerRotate` function
- Check when tetromino rotate in a collied: true

12. **Clear Rows**

- `sweepRows`

13. **drop with useInterval**

- copy `useInterval.js` hook created by Dan Abramov to `src/hooks`
- useInterval in Tetris component
- Interval off when keyDown = DOWN
- Interval off when keyUp

14. **useGameStatus and React.memo**

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

```js
git clone https://github.com/tinspham209/tetris-game-react
```

Use the cmd line to install dependencies.

```js
npm install
```

Run in cmd for start the dependencies server

```js
npm start
```
