import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function OtherComponenes({ question, index, answer }) {
    const [toggle, settoogle] = useState(false)
    useEffect(() => {
        if (index === 0) {
            settoogle(true)
        }
    })
    const handel = () => {
        settoogle(!toggle)
    }
    return (
        <div className='other'>

            <div className='qu'>

                <button onClick={handel}>></button>
                <h2>{question}</h2>

            </div>
            <div> {toggle && answer}</div>

        </div>
    )
}

export default OtherComponenes