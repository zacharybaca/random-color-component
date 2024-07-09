import RandomColor from "./components/RandomColor";
import React from "react";
import './App.css'

function App() {
  const [color, setColor] = React.useState([]);

  React.useEffect(() => {
    fetch("https://random-color.onrender.com/colors/random")
      .then(response => response.json())
      .then(data => setColor(data.hex))
  }, [])

  function changeColor() {
    fetch("https://random-color.onrender.com/colors/random")
      .then(response => response.json())
      .then(data => setColor(data.hex))
  }

  return (
    <div id="app-container" onClick={changeColor}>
      {!color ? <div>Data Loading</div> : <RandomColor color={color} />}
    </div>
  )
}

export default App
