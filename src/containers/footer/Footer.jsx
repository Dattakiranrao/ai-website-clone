import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

export default function Footer() {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt={gpt3Logo} />
                    <p>Hyderabad India, All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>links</h4>
                    <p>Overons</p>
                    <p>SocialMedia</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Hyderabad, India</p>
                    <p>999999999</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}