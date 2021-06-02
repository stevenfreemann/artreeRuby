import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionRoom from '../SectionRoom'

import Pro1 from '../../assets/static/images/PRO/COLECCION-PARA-TU-COCINA-5846.jpeg'
import Pro2 from '../../assets/static/images/PRO/COLECCION-FACHADAS-2486.jpeg'
import Pro3 from '../../assets/static/images/ShoppingCart2.png'
import Pro4 from '../../assets/static/images/PRO/COLECCION-URBANA-0151.jpeg'
import Pro5 from '../../assets/static/images/PRO/COLECCION-FACHADAS-8314.jpeg'
import Pro6 from '../../assets/static/images/ShoppingCart4.png'

const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'

const rooms = [
    {id:1,room:'COLECCIÓN 1',area:'Para tu cocina',text:texto, img:Pro1,color:'var(--backPurple)',},
    {id:2,room:'COLECCIÓN 2',area:'Blanco y Negro',text:texto, img:Pro2,color:'white',},
  {id:3,room:'COLECCIÓN 3',area:'Naturaleza',text:texto, img:Pro3,color:'var(--beige',},
  {id:4,room:'COLECCIÓN 4',area:'Urbana',text:texto, img:Pro4,color:'var(--white)',},
  {id:5,room:'COLECCIÓN 5',area:'Fachadas',text:texto, img:Pro5,color:'var(--backWhiteCream)',},
  {id:6,room:'COLECCIÓN 6',area:'Texturas',text:texto, img:Pro6,color:'var(--white)',},
]

export default function infoPro() {
    const navigate=(dir)=>{
        const direction={
            'home':'/',
            'Sala 1':'/proMarket'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={'PRO'} alignLeft={true} listener={()=>navigate('home')}/>
            <div className='infoPro' > 
                <p className='infoPro__texto'>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            <Carrousel />
            </div>
            <Title title={'COLECCIONES'}/>
            <div className='infoPro__rooms'/>
            {rooms.map(item =>
                <SectionRoom key={item.id} inverso={rooms.indexOf(item) % 2 === 0 ? false : true } title={item.room} subtitle={item.area} text={item.text} img={item.img} color={item.color} listener={()=>navigate('Sala 1')}/>
            )}
        </>
    )
}