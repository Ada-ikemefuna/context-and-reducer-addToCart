import React from 'react';
import {FaStar} from 'react-icons/fa'

const Rating = ({rating, onClick, style}) => {
  return (
    <>
        {
            [...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i)} style = {style}>
                    {rating > i? (
                        <FaStar fontSize="15px"/>
                    ):(
                        <FaStar fontSize="15px" style={{color: "rgba(224, 222, 222,0.4)"}}/>
                    )}
                </span>
                ))
        }
    </>
  )
}

export default Rating