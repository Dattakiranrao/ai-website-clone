import React from 'react'
// import Article from "./components/article/Article"
// import Brand from "./components/brand/Brand"
// import CTA from './components/cta/CTA'
// import  Feature from './components/feature/Feature'
// import Navbar from './components/navbar/Navbar'
import './App.css'
import { Navbar, Brand, CTA } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'

export default function App() {
    return (
        <>
            <div className='App'>
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility /> 
                <CTA />
                <Blog />
                <Footer /> 
            </div>
        </>
    )
}
