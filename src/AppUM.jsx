import React from 'react'

import HeadUM  from './components/head/HeadUM'
import SocialMedia  from './components/social/SocialMedia'
import Carousel  from './components/carousel/Carousel'
import CarrerasSec  from './components/Sections/CarrerasSec'
import PostgradosSec  from './components/Sections/PostgradosSec'
import Footer from './components/Footer/Footer'

const AppUM = () => {
    return (
        <>
            <SocialMedia />
            <HeadUM />
            <Carousel  />
            <CarrerasSec  />
            <PostgradosSec  />
            <Footer  />
        </>
    );
}

export default AppUM
