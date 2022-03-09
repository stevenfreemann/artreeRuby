import React, { useEffect } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Upload from './Upload'
import Contactanos from './Contactanos'
import Footer from './Footer'
import SectionInfoArtist from './SectionInfoArtist'
import SectionFeatures from './SectionFeatured'
import SectionInfoMaterials from './SectionInfoMaterials'
import Api from './api'
import img from '../assets/static/images/javier-vanegas.png'

const content = ({contentCarousel, texts, lines, artists}) => {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)]
  console.log("artist", randomArtist)
  
  const navigate = (section) => {
    const redirect = {
      'artist': '/artist',
      'infoMaterials': '/infoMaterials'
    }
    window.location = redirect[section] ? redirect[section] : '/'
  }
  return (
    <>
      <Carousel contentCarousel={contentCarousel}/>
      <SectionFeatures texts={texts} lines={lines} />
      <SectionInfoArtist inverso={true} listener={() => navigate('artist')} artist={randomArtist} />
      <SectionInfoMaterials listener={() => navigate('infoMaterials')} texts={texts}/>
    </>
  )
}

export default content
