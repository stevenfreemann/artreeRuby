import React, { useEffect } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Upload from './Upload'
import Contactanos from './Contactanos'
import Footer from './Footer'
import SectionInfo from './SectionInfo'
import SectionFeatures from './SectionFeatured'
import Api from './api'

import infoMaterials from '../assets/static/images/infoMaterials.png'
import img from '../assets/static/images/javier-vanegas.png'

const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'

const info = [
  {title: 'Javier Vanegas',text:texto,textoBtn:'Ver todos los artistas', img:img},
  {title: 'MATERIALES',text:texto,textoBtn:'Ver todos los materiales', img:infoMaterials}
]

export default function app(props) {
  useEffect(()=>{
    Api.getArtistas((response)=>{
      console.log('respuesta api--',response)
    })
  },[])
  const navigate=(section)=>{
    const redirect={
        'artist':'/artist',
        'infoMaterials':'/infoMaterials'
    }
    window.location = redirect[section] ? redirect[section]: '/'
  }
  return (
    <>
      <Carousel />
      <SectionFeatures/>
      <SectionInfo inverso={true} title={info[0].title} text={info[0].text} listener={()=>navigate('artist')} img={info[0].img} textoBtn={info[0].textoBtn}/>
      <SectionInfo title={info[1].title} text={info[1].text} img={info[1].img} textoBtn={info[1].textoBtn} listener={()=>navigate('infoMaterials')}/>
    </>
  )
}


