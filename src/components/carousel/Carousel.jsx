import React from 'react'
import CarouselCard from './CarouselCard'
import CarouselControlls from './CarouselControlls'
import ButtonCar from '../buttons/ButtonCar'

import './carousel.css'

const Carousel = () => {
    return (
        <>
            <div className='carousel'>
               <CarouselCard text={'Si querés aprender, ¡podés!'} image='https://um.edu.uy/sites/default/files/styles/slider_adaptado/public/2021-04/Noticias%20%28%C3%B9ltima%29%20%2825%29.jpg?itok=gSVrag6H'/>
               <CarouselControlls  />
            </div>
            <div className='btns'> 
                <ButtonCar  text={'Carreras de grado'}  />
                <ButtonCar  text={'Admisiones y becas (GRADO)'}  />
                <ButtonCar  text={'Postgrados'}  />
            </div>
        </>
    )
}

export default Carousel
