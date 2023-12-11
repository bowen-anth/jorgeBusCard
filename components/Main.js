import React from 'react'
import ReactDOM from "react-dom"
import About from './main/About.js'
import Interests from './main/Interests.js'

export default function Main() {
    return (
        <main className='main'>
            <About />
            <Interests />
        </main>
    )
}