import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: 'What is GPT-3',
        text: 'GPT-3 or Generative Pretrained Transformer 3 is an artificial intelligence created by OpenAI.',
    },
    {
        title: 'Chatbots',
        text: 'A chat with GPT-3 is a bot that can create text and simulate real talk with a person, translate speech, etc.',
    },
    {
        title: 'Knowledgebase',
        text: 'It has 175 billion parameters that make this model one of the most advanced you can find for business use.',
    },
    {
        title: 'Education',
        text: 'It has 175 billion parameters that make this model one of the most advanced you can find for business use.',
    },
];

export default function Features(props) {
    return (
        <div className="gpt3__features section__padding" id='features'>
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and you Just Need to Realize it Step into Future Today & Make it Happen</h1>
                <p className="fill">Request Early Access To Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {/* <Feature /> */}
                {
                    featuresData.map((data, index) => {
                        return <Feature title={data.title} text={data.text} />
                        // key={data.title + index}
                    })
                }
            </div>
        </div>
    )
}
