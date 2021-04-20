#Requirements

- There should be a visible board and pieces (3x3 grid).
- The app should tell you whose turn it is and who wins.
- Players should not be able to play out of turn, or if someone has won.
- You can take back a move.
- You should be able to play again without refreshing the app.

#Nice To Haves

- You implement SOME kind of AI, so long as the AI will take a win if it is available.
- You can pick a custom “X” or “O” from any single character.
- You do some fancy styling.

Objects:

- gameBoard
- gamePiece
- undoLastMove button
- playAgain button

Functions:

- generateGameBoard
- alternateTurn
- choosePlacement
- undoLastMove
- calculateWin
- displayResult
- playAgain
