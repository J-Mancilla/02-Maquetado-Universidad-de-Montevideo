import React from 'react'
import LinkUM  from './LinkUM'
import RedesUM from '../social/RedesUM'
import buscar from '../../img/buscar.png'

import './head.css'


const HeadUM = () => {
    return (
        <>
            <div className='whiteBox'></div>
            <div id='head'>
                <div className='headUM'>
                    <img src='https://um.edu.uy/sites/default/files/LogoUniversidadMontevideo.png' alt='Logo UM' className='logoHead'/>
                    <div className="redesHead"><RedesUM /></div>
                    <img src={buscar} className='inputHead' alt=''/>
                    <div className='langs'>
                        <p>ES</p>
                        <p>EN</p>
                    </div>
                </div>
                <div className='headLinks'>
                    <LinkUM text={'La Universidad'}/>
                    <LinkUM text={'Unidades académicas'}/>
                    <LinkUM text={'Admisiones y becas'}/>
                    <LinkUM text={'Vida universitaria'}/>
                    <LinkUM text={'Alumni'}/>
                    <LinkUM text={'Internacional'}/>
                    <LinkUM text={'Centros'}/>
                    <LinkUM text={'Investigación y publicaciones'}/>
                </div>
            </div>
        </>
    )
}


export default HeadUM