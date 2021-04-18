import React from 'react'

import './social.css'

import fb from '../../img/logos-redes/facebook.svg'
import ig from '../../img/logos-redes/instagram.svg'
import tw from '../../img/logos-redes/twitter.svg'
import ln from '../../img/logos-redes/linkedin.svg'
import yt from '../../img/logos-redes/youtube.svg'

const RedesUM = () => {
    return (
        <div className="redesSociales">
            <img src={fb} alt='fb'/>
            <img src={ig} alt='ig'/>
            <img src={tw} alt='tw'/>
            <img src={ln} alt='ln'/>
            <img src={yt} alt='yt'/>
            
         </div>
    )
}

export default RedesUM
