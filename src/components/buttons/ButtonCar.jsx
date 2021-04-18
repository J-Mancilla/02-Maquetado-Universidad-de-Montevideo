import React from 'react'
import PropTypes from 'prop-types'
import './Buttons.css'

const ButtonCar = ({text}) => {
    return (
        <div className='bigButton'>
            {text}
        </div>
    )
}

ButtonCar.propTypes = {
    text : PropTypes.string.isRequired
}

export default ButtonCar
