import React from 'react'
import PropTypes from 'prop-types'

const CarouselCard = ({image, text}) => {
    return (
        <div className='carousel-card'>
             <img src={image} alt=''/>
             <h1>{text}</h1>
        </div>
    )
}

CarouselCard.propTypes = {
    text : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired
}


export default CarouselCard
