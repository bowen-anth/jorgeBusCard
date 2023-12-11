import React from 'react'
import ReactDOM from "react-dom"
import About from './components/main/About.jsx'
import Interests from './components/main/Interests.jsx'

export default function Main() {
    return (
        <main className='main'>
            <About />
            <Interests />
        </main>
    )
}