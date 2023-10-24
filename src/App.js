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

  const [disablePlay, setDisablePlay] = useState(false)

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
    setDisablePlay(false)
  }

  const handleGamePlay = (index) => {

    let updatedBoard = [...board]
    if (disablePlay === false) {
      if (mouseLocation === index) {
        alert("Congratulations! You captured the mouse! Click Play Again to hunt another mouse!")
        updatedBoard[index] = "🐭"
        setBoard(updatedBoard)
        setGuessCounter(guessCounter-1)
        setDisablePlay(true)
      } else if (mouseTrapLocation === index) {
        alert("OUCH! You ran into a mousetrap! Click Play Again to try again!")
        updatedBoard[index] = "💥"
        setBoard(updatedBoard)
        setGuessCounter(guessCounter-1)
        setDisablePlay(true)
      } else if (guessCounter === 1) {
        alert("Oh no! The mouse escaped with the cheese! Click Play Again to try again!")
        updatedBoard[index] = "😾"
        setBoard(updatedBoard)
        setGuessCounter(guessCounter-1)
        setDisablePlay(true)
      } else {
        updatedBoard[index] = "😾"
        setBoard(updatedBoard)
        setGuessCounter(guessCounter-1)
      }
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
