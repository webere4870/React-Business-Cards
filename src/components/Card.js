import React from 'react'
import Picture from './Picture'
import Main from './Main'
import Footer from './Footer'
function Card()
{
    return (
        <div className="underCard">
            <Picture/>
            <Main/>
            <Footer/>
        </div>
        
    )
}

export default Card