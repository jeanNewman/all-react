import { useState } from 'react';
import { Square,updateBoard,resetGame} from './SquareComponent.jsx';
import { WinnerModalComponent } from './WinnerModalComponent.jsx'
import { TURNS } from "../constant/Constants.jsx"



export const Game = () => {
const [board,setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    if(savedBoard){
        return JSON.parse(savedBoard)
    }
    return Array(9).fill(null)

})

const [turn, setTurn] = useState(() => {
    const saveTurn = window.localStorage.getItem('turn')
    return saveTurn ?? TURNS.X
})

const [winner, setWinner] = useState(null)

    return(
        <>
        <button onClick={value1 => resetGame(setBoard,setTurn,setWinner)}>Reiniciar</button>
        <section className='game'>
            {board.map((square, index) => {
                return (
                    <Square key={index} index={index} updateBoard={value => updateBoard(index, turn, setTurn, board,setBoard, winner, setWinner)}>
                        {square}
                    </Square>);
            }
            )}
        </section>
        <section className='turn'>
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
            <WinnerModalComponent winner={winner} resetGame={value => resetGame(setBoard,setTurn,setWinner)} Square={Square} /> 
        </>
    )
}