import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './index'

export default function Blog() {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imageUrl={blog01} date="Mar 15, 2023" title="Gpt3 and Open AI is the future" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imageUrl={blog02} date="Mar 15, 2023" title="Gpt3 and Open AI is the future" />
                    <Article imageUrl={blog03} date="Mar 15, 2023" title="Gpt3 and Open AI is the future" />
                    <Article imageUrl={blog04} date="Mar 15, 2023" title="Gpt3 and Open AI is the future" />
                    <Article imageUrl={blog05} date="Mar 15, 2023" title="Gpt3 and Open AI is the future" />
                </div>
            </div>
        </div>
    )
}
