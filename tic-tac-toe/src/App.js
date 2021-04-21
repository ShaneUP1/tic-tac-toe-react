import React, {useState} from 'react';
import './App.css';


 const BoardCell = ({onClick, value}) => { 
  return (
     <button onClick={onClick}>
       {value}
     </button>
   )
 }

  const Board = () => {
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ status, setStatus ] = useState('');
  
  function calculateWinner(squares) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++){
      const [a, b, c] = winningLines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        setStatus(squares[a]);
    }
    return null;
  }

  function handleClick(i) {
    if(squares[i] || status ) return
    squares[i] = xIsNext ? 'X' : 'O';
    setSquares([...squares], squares[i]);
    setXIsNext(!xIsNext);
    calculateWinner(squares);
  }
  
  function renderBoardCell(i) {
     return (
        <BoardCell
        value={squares[i]}
        onClick={() => handleClick(i)} />
     );
   }

   const handleReset= () => {
    setSquares((Array(9).fill(null)));
    setStatus('')
   }

     return (
       <>
       <div>
         <div>
           { status
           ? `${status} Wins!`
           : (squares.indexOf(null) === -1 && !status) ? 'Cats'
           : ''}
         </div>
         <div className="top-row">
           {renderBoardCell(0)}
           {renderBoardCell(1)}
           {renderBoardCell(2)}
         </div>
         <div className="middle-row">
           {renderBoardCell(3)}
           {renderBoardCell(4)}
           {renderBoardCell(5)}
         </div>
         <div className="bottom-row">
           {renderBoardCell(6)}
           {renderBoardCell(7)}
           {renderBoardCell(8)}
         </div>
       </div>
       <button onClick={handleReset}>
         Play Again
       </button>
       </>
     )
   }

function App() {
  return (
    <>
      <Board />
    </>
    
  );
}

export default App;
