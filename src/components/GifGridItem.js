import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    return (
        <div className="card animate__animated animate__bounceInDown">
            <img src={url} alt={title}/>
            <p>{title?title:`Sin Titulo`}</p>
        </div>
    )
}
