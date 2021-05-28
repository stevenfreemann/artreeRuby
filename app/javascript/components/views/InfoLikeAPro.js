import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionRoom from '../SectionRoom'

import infoMaterials from '../../assets/static/images/infoMaterials.png'
import img from '../../assets/static/images/javier-vanegas.png'

const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'

const rooms = [
  {id:1,room:'Sala 1',text:texto, img:img,color:'var(--backPurple)',},
  {id:2,room:'Sala 2',text:texto, img:infoMaterials,color:'white',},
  {id:3,room:'Sala 3',text:texto, img:img,color:'var(--backCream',},
  {id:4,room:'Sala 4',text:texto, img:infoMaterials,color:'var(--white)',}
]

export default function InfoLikeAPro() {
    return (
        <>
            <Title title={'EXCLUSIVE'} backTitle={true} />
            <div className='infoExclusive' > 
                <p>
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </p>
            </div>
            <Carrousel />
            <div style={{ height: '4rem' }} />
            {rooms.map(item =>
                <SectionRoom key={item.id} inverso={rooms.indexOf(item) % 2 === 0 ? false : true } title={item.room} text={item.text} img={item.img} color={item.color} />
            )}
        </>
    )
}

