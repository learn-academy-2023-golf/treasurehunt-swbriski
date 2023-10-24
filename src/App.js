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
  }

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]
    if (mouseLocation === index) {
      updatedBoard[index] = "🐭"
      setBoard(updatedBoard)
    } else if (mouseTrapLocation === index) {
      updatedBoard[index] = "💥"
      setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "😾"
      setBoard(updatedBoard)
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
      <button onClick={playAgain}>Play Again</button>
    </>
  )
}

export default App
