import React, {useState} from 'react';
import './App.css';


 const BoardCell = (props) => { 
  return (
     <button onClick={props.onClick}>
       {props.value}
     </button>
   )
 }

  const Board = () => {
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ status, setStatus ] = useState('');

  calculateWinner(squares);
  
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
  }
  
  function renderBoardCell(i) {
     return (
        <BoardCell
        value={squares[i]}
        onClick={() => handleClick(i)} />
     );
   }

     return (
       <div>
         <div>{status}</div>
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
