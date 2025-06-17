import { Route, Routes } from 'react-router-dom'
import './App.css'
import { WordContext } from './context/WordContext'
import Home from './pages/Home'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'
import { useState } from 'react'

function App() {
  const[wordList,setWordList] = useState([])
  const[word,setWord]=useState('')
  const[wordHint,setWordHint]=useState('')
  return (

    <WordContext.Provider value={{wordList,setWordList,word,setWord,wordHint,setWordHint}}>
      <Routes>
        <Route path='/start' element={<StartGame />}/>
        <Route path='/play' element={<PlayGame />}/>
        <Route path='/'element={<Home />} />
    </Routes>
    </WordContext.Provider>
    
  )
}

export default App
