import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

export default function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT-3 OpenAi
                </h1>

                <p>OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI.</p>

                <div className="gpt3__header-content-input">
                    <input type="email" placeholder='Your Email address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt={people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt={ai} />
            </div>
        </div>
    )
}