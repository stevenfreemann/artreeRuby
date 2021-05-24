import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Upload from './Upload'
import Contactanos from './Contactanos'
import Footer from './Footer'
import SectionInfo from './SectionInfo'
import SectionFeatures from './SectionFeatured'
export default function app(props) {
  const navigate=(section)=>{
    const redirect={
        'artist':'/artist',
    }
    window.location = redirect[section] ? redirect[section]: '/'
}
  return (
    <>
      <Carousel />
      <SectionFeatures/>
      <SectionInfo inverso={true} listener={()=>navigate('artist')} />
      <SectionInfo inverso={false} />
    </>
  )
}


