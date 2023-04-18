import React from 'react';
import "./MovieCard.css"


export default function MovieCard({ title, description, posterURL, rating }) {
    return (
        <div className='MovieCard'>
            <div className='d-flex' >
                <img width="300" src={posterURL} alt={`${title} poster`} />
            </div >
            <div className='d-flex' >
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>Rating : {rating}</h3>
                <h4>{posterURL}</h4>
            </div>
        </div >
    )
}
