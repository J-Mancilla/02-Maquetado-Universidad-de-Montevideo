import React from 'react'
import PropTypes from 'prop-types'
import arrow from '../../img/arrow.svg'

const LinkUM = ({text}) => {
    return (
        <a href="https://um.edu.uy/mision-identidad-y-valores">
            {text}
            <img src={arrow} alt='arrow'/>
        </a>
    )
}

LinkUM.propTypes = {
    text : PropTypes.string.isRequired
}

export default LinkUM
