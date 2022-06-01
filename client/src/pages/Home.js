import React from 'react'
import heropic from './public/img/heropic.png'


const Home = () => {
    return (
        <div className='hero'>
            <div>
                <h1 className='hero-title'>Welcome to WhateverNow</h1>
                <p className='mission-statement'></p>
                <img src={heropic} alt='hero-img'></img>
                <div className="mb-2">
                    <Button variant="primary" size="lg">
                        Login
                    </Button>{' '}
                    <Button variant="secondary" size="lg">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Home