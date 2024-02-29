
export function WinnerModalComponent({winner, resetGame, Square}){
    if(winner === null) return null
    const winnerText = winner === false ? 'Empate' : `El ganador es ${winner}`
    return (
             <section className='winner'>
                <div className='text'>
                <h2>{winnerText}
                </h2>
                <header className='win'>
                    {winner && <Square style={{color:"white"}}>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Reiniciar</button>
                </footer>
                </div>
                
              </section>
            )
        
    
}