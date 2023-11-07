import React from 'react'

function Word({ text, setText }) {

    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)} value={text}></textarea>
            </div>
            <div className="word_counter_footer">
                <button onClick={() => setText(text.toUpperCase())}>Click to Uppercase</button>
                <button onClick={() => setText(text.toLowerCase())}>Click to Lowercase</button>
            </div>
        </div>
    )
}

export default Word