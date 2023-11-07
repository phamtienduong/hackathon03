import React, { useState } from 'react'
import WordCounter from './components/WordCounter'
import "./App.css"

function App() {

    const [text, setText] = useState("")

    return (
        <div className='app'>
            <WordCounter text={text} setText={setText} />
        </div>
    )
}

export default App
