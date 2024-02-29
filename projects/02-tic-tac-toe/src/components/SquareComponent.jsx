import { TURNS } from '../constant/Constants.jsx'
import confetti from "canvas-confetti";

export   const Square = ({ children, isSelected, updateBoard,index }) => {
        const className = `square ${isSelected ? 'is-selected' : ''}` 
        const handleClick = () => {
          updateBoard(index)
        }
        return (
          <div onClick={handleClick} className={className} >
              {children}
           
          </div>
        )
      }

export const calculateWinner = (newBoard) => {
        const winConditions = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
      
        for (let i = 0; i < winConditions.length; i++) {
          const [a,b,c] = winConditions[i]
          if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]){
            return newBoard[a]
          }
        }
        return null
      
      }

export const updateBoard = (index,turn, setTurn, board,setBoard, winner, setWinner) => {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      
        if(board[index] !== null || winner) return
      
        setTurn(newTurn)
        //guardar partida

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', newTurn)

      
        const newWinner = calculateWinner(newBoard)
        if(newWinner){
          setWinner(newWinner)
          confetti()
         
        }
        else if(!newBoard.includes(null)){
          setWinner(false)
        }
      
      }

            
export const resetGame = (setBoard,setTurn,setWinner) => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)

  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}


