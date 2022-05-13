import React from 'react'

function Button()
{
    return (
        <div className="rowFlex">
            <button className='whiteBtn'><i class="fa-solid fa-envelope"></i>Email</button>
            <button className='blueBtn'><i class="fa-brands fa-linkedin"></i>Linked In</button>
        </div>
    )
}

export default Button