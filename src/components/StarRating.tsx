"use client"

import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

function StarRating() {
    const [rating, setRating] = useState(0)
    const [colorRate, setColor] = useState(0)
  return (
    <>
    <div className='flex'>
    {[...Array(5)].map((star, index) => {
      const currentRating: number = index + 1;
      return (
        <label
        key={currentRating}>
          <input 
          key={currentRating}
          className='hidden'
          type='radio' 
          name='rating'
          value={currentRating}
          onClick={() => setRating(currentRating)}
          />

          <FaStar 
          size={15} 
          className='cursor-pointer'
          color={ currentRating <= (colorRate || rating) ? 'orange' : 'grey' }
           />
        </label>
        )
    })}
  </div>
    </>
    
  )
}

export default StarRating