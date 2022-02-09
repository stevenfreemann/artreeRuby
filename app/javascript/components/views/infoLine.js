import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionRoom from '../SectionRoom'

import Exclusive1 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-.jpg'
import Pro1 from '../../assets/static/images/PRO/COLECCION-PARA-TU-COCINA-5846.jpeg'

const infoExclusive = ({rooms, line, contentCarousel}) => {
  const navigate=(id)=> {
      window.location = "/room/" + id
  }
  return (
      <>
          <Title title={line.name} alignLeft={true} listener={()=>navigate('home')}/>
          <div className='infoExclusive' > 
              <p className='infoExclusive__text'>
                {line.description}
              </p>
          <Carrousel contentCarousel={contentCarousel}/>
          </div>
          <Title title={'SALAS'}/>
          <div className='infoExclusive__rooms'/>
          {rooms.map(room =>
              <SectionRoom key={room.id} inverso={rooms.indexOf(room) % 2 === 0 ? false : true } title={room.name} text={room.description} img={Exclusive1} listener={()=>navigate(room.id)}/>
          )}
      </>
  )
}

export default infoExclusive