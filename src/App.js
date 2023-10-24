import "./App.css"
import React, { useState } from "react"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [guessCounter, setGuessCounter] = useState(5)

  const [mouseLocation, setMouseLocation] = useState(Math.floor(Math.random() * board.length))

  const [mouseTrapLocation, setMouseTrapLocation] = useState(Math.floor(Math.random() * board.length))

  console.log("Mouse:", mouseLocation)
  console.log("MouseTrap:", mouseTrapLocation)

  const playAgain = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    setMouseLocation(Math.floor(Math.random() * board.length))
    setMouseTrapLocation(Math.floor(Math.random() * board.length))
    setGuessCounter(5)
  }

  const handleGamePlay = (index) => {
    // alert(index)

    let updatedBoard = [...board]
    if (mouseLocation === index) {
      alert("Congratulations! You found the mouse! Click Play Again to try again!")
      updatedBoard[index] = "🐭"
      setBoard(updatedBoard)
      setGuessCounter(guessCounter-1)
    } else if (mouseTrapLocation === index) {
      alert("OUCH! You ran into a mousetrap! Click Play Again to try again!")
      updatedBoard[index] = "💥"
      setBoard(updatedBoard)
      setGuessCounter(guessCounter-1)
    } else {
      updatedBoard[index] = "😾"
      setBoard(updatedBoard)
      setGuessCounter(guessCounter-1)
    }
  }

  return (
    <>
      <h1>Cat and Mouse</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return (
        <Square value={value}
        key={index}
        index={index}
        handleGamePlay={handleGamePlay} />
        )
      })}
      </div>
      <p>You have {guessCounter} guesses remaining.</p>
      <button onClick={playAgain}>Play Again</button>
    </>
  )
}

export default App
