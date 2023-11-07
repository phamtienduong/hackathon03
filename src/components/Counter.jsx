import React from 'react'

function Counter({ text }) {
    return (
        <div className='counter'>
            <div className='counter-item'>
                <p>
                    <span>
                        <img width={20} height={20} src="./images/text-box.png" alt="" />
                    </span>
                    <span>Word</span>
                </p>
                <p>{text.match(/[A-Za-z]/g) ? text.match(/[A-Za-z]/g).length : 0}</p>
            </div>

            <div className='counter-item'>
                <p>
                    <span>
                        <img width={20} height={20} src="./images/letter.png" alt="" />
                    </span>
                    <span>Letter</span>
                </p>
                <p>{text.trim().split(/\s+/).length - 1}</p>
            </div>

            <div className='counter-item'>
                <p>
                    <span>
                        <img width={20} height={20} src="./images/paragraph.png" alt="" />
                    </span>
                    <span>Paragraph</span>
                </p>
                <p>{text.split(/\n+/).length - 1}</p>
            </div>
        </div>
    )
}

export default Counter