import React from 'react'
import './article.css'

export default function Article(props) {
    let {imageUrl, date, title} = props
    return (
        <div className="gpt3__article">
            <div className="gpt3__article-image">
                <img src={imageUrl} alt={imageUrl} />
            </div>
            <div className="gpt3__article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}
