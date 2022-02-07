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

const infoPro = ({line, rooms}) => {
    const navigate=(id)=> {
        window.location = "/proMarket/" + id
    }
    const titles= {1:"exclusive", 2:"pro"}
    return (
        <>
            <Title title={"Pro"} alignLeft={true} listener={()=>navigate('home')}/>
            <div className='infoPro' > 
                <p className='infoPro__texto'>
                {line.description}
                </p>
            <Carrousel />
            </div>
            <Title title={'COLECCIONES'}/>
            <div className='infoPro__rooms'/>
            {rooms.map(room => //TODO: condicional para q no muestre sala si esta vacia
                <SectionRoom key={room.id} inverso={rooms.indexOf(room) % 2 === 0 ? false : true } title={room.name} text={room.description} img={Pro1} listener={()=>navigate(room.id)}/>
            )}
        </>
    )
}

export default infoPro
