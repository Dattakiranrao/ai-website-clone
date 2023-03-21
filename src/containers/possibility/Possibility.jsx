import React from 'react'
import possibility from '../../assets/possibility.png'
import './possibility.css'

export default function Possibility() {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibility} alt={possibility} />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
                <p>The perks of using a chatbot with GPT-3/3.5 technologies include human-like interaction, around-the-clock availability, and better customer satisfaction as a result.</p>
                <h4>Request Access</h4>
            </div>
        </div>
    )
}


