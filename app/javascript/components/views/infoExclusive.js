import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionRoom from '../SectionRoom'

import Exclusive1 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-.jpg'
import Exclusive2 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-1384.jpg'
import Exclusive3 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-1664.jpg'
import Exclusive4 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-2036.jpg'

const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'

const rooms = [
  {id:1,room:'SALA 1',text:texto, img:Exclusive1,color:'var(--backPurple)',},
  {id:2,room:'SALA 2',text:texto, img:Exclusive2,color:'white',},
  {id:3,room:'SALA 3',text:texto, img:Exclusive3,color:'var(--backCream',},
  {id:4,room:'SALA 4',text:texto, img:Exclusive4,color:'var(--white)',}
]

export default function infoExclusive() {
    const navigate=(dir)=>{
        const direction={
            'home':'/',
            'Sala 1':'/exclusiveMarket'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={'EXCLUSIVE'} alignLeft={true} listener={()=>navigate('home')}/>
            <div className='infoExclusive' > 
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            <Carrousel />
            </div>
            <Title title={'SALAS'}/>
            <div className='infoExclusive__rooms'/>
            {rooms.map(item =>
                <SectionRoom key={item.id} inverso={rooms.indexOf(item) % 2 === 0 ? false : true } title={item.room} text={item.text} img={item.img} color={item.color} listener={()=>navigate('Sala 1')}/>
            )}
        </>
    )
}

