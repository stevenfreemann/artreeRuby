import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionRoom from '../SectionRoom'
import Pro1 from '../../assets/static/images/PRO/COLECCION-PARA-TU-COCINA-5846.jpeg'
import Pro2 from '../../assets/static/images/PRO/COLECCION-FACHADAS-2486.jpeg'
import Pro3 from '../../assets/static/images/ShoppingCart2.png'

const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'

const rooms = [
    {id:1,room:'ESPACIO 1',area:'Sala',text:texto, img:Pro1,color:'var(--backCream)',},
    {id:2,room:'ESPACIO 2',area:'Estudio',text:texto, img:Pro2,color:'white',},
    {id:3,room:'ESPACIO 3',area:'Habitación',text:texto, img:Pro3,color:'var(--backPurple',},
]

export default function infoPro() {
    const navigate=(dir)=>{
        const direction={
            'home':'/',
            'Sala 1':'/upload'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={'LIKE A PRO'} alignLeft={true} listener={()=>navigate('home')}/>
            <div className='infoPro' > 
                <p className='infoPro__texto'>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            <Carrousel />
            </div>
            <Title title={'ESPACIOS'}/>
            <div className='infoPro__rooms'/>
            {rooms.map(item =>
                <SectionRoom key={item.id} inverso={rooms.indexOf(item) % 2 === 0 ? false : true } title={item.room} subtitle={item.area} text={item.text} img={item.img} color={item.color} listener={()=>navigate('Sala 1')}/>
            )}
        </>
    )
}