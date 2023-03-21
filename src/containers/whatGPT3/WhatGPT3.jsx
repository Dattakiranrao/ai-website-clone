import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

export default function WhatGPT3() {
    return (
        <div className="section__margin">
            <div className="gpt3__whatgpt3" id="wgpt3">
                <div className="gpt3__whatgpt3-feature">
                    <Feature title="What is GPT-3" text='GPT-3 or Generative Pretrained Transformer 3 is an artificial intelligence created by OpenAI. A chat with GPT-3 is a bot that can create text and simulate real talk with a person, translate speech, etc. It has 175 billion parameters that make this model one of the most advanced you can find for business use.' />
                </div>
                <div className="gpt3__whatgpt3-heading">
                    <h1 className="gradient__text">The Possibilities are beyond your imagination</h1>
                    <p>Explore The Library</p>
                </div>
                <div className="gpt3__whatgpt3-container">
                    <Feature title="Chatbots" text='A chat with GPT-3 is a bot that can create text and simulate real talk with a person, translate speech, etc.' />
                    <Feature title="Knowledgebase" text='It has 175 billion parameters that make this model one of the most advanced you can find for business use.' />
                    <Feature title="Education" text='It has 175 billion parameters that make this model one of the most advanced you can find for business use.' />
                </div>
            </div>
        </div>
    )
}
