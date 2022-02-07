import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionRoom from '../SectionRoom'

import Exclusive1 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-.jpg'
import Exclusive2 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-1384.jpg'
import Exclusive3 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-1664.jpg'
import Exclusive4 from '../../assets/static/images/EXCLUSIVE/EXCLUSIVE-2036.jpg'
import WishItem from './WishItem'


const infoExclusive = ({line, rooms}) => {
    const navigate=(id)=> {
        window.location = "/exclusiveMarket/" + id
    }
    return (
        <>
            <Title title={'EXCLUSIVE'} alignLeft={true} listener={()=>navigate('home')}/>
            <div className='infoExclusive' > 
                <p className='infoExclusive__text'>
                  {line.description}
                </p>
            <Carrousel />
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
