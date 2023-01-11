import React from 'react';
import './HomePage.css'



export const HomePage = () => {

    return <>
        <div className='heading--welcome'>
            <h2>Welcome to</h2>
            <h1>Practice Journal</h1>
        </div>
        <div className='video'>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/4T5zXW7d5Dw?autoplay=1&loop=1&controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>

    </>
}