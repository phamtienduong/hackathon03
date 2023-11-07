import React from 'react'
import Counter from './Counter'
import Word from './Word'

function WordCounter({ text, setText }) {
    return (
        <div>
            <h3>
                <span> <img width={20} height={20} src="./images/word.png" alt="" /> </span>
                <span>Word Counter</span>
            </h3>
            <Counter text={text} />
            <Word text={text} setText={setText} />
        </div>
    )
}

export default WordCounter