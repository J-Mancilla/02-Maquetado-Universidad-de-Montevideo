import React from 'react'
import la from '../../img/left-arrow.svg'
import ra from '../../img/right-arrow.svg'

export const CarouselControlls = () => {
    return (
        <div className='carouselControlls'>
            <div><img src={la} alt='left'/></div>
            <div><img src={ra} alt='right'/></div>
        </div>
    )
}

export default CarouselControlls
