import React from 'react'

import './social.css'

import fb from '../../img/logos-redes/facebook.svg'
import ig from '../../img/logos-redes/instagram.svg'
import tw from '../../img/logos-redes/twitter.svg'

const SocialMedia = () => {
    return (
        <div className="socialMedia">
            <img src={ig} alt='social' />
            <img src={tw} alt='social' />
            <img src={fb} alt='social' />
            
        </div>
    )
}

export default SocialMedia
