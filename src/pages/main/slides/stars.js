import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Stars({ size, fillColor, style }) {
    const [rating, setRating] = useState(0) // initial rating value


    function handleRating(rate = 5) {
        setRating(rate)
    }

    return (
        <div className='App'>
            <Rating size={size} fillColor={fillColor} style={style} onClick={handleRating} ratingValue={rating} /* Available Props */ />
        </div>
    )
}