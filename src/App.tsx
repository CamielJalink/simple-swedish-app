import { useState } from 'react'
import './App.css'
import data from './data/data';

function App() {
  const nlKeys = Object.keys(data.numbers);
  const nlValues = Object.values(data.numbers);
  const [wordIndex, setWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const nextWord = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if(inputValue.toLowerCase() === nlValues[wordIndex]) {
      setWordIndex((prev) => prev + 1)
      setInputValue("");
    } else {
      setInputValue("");
    }
  }

  return (
    <div>
      <h1 className="text-3xl">Vi repeterar Svenska!</h1>
      <p>Translate the following english word into it's swedish counterpart.</p>
      <h2>{nlKeys[wordIndex]}</h2>
      <form onSubmit={nextWord}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button type="submit">Nästa</button>
      </form>
    </div>
  )
}

export default App
