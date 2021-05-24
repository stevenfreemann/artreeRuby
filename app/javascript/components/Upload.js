import React from 'react'
import Title from './Title'
import Subir from '../assets/static/icon/subir@2x.png'
import Carrito from '../assets/static/buttons/carrito@2x.png'
export default function Upload() {
    return (
        <div style={{backgroundColor:'var(--backGray)'}}>
            <Title title={'LIKE A PRO - Espacio 1'} background={'var(--backGray)'}/>
            <div style={{backgroundColor:'var(--backGray)'}}>
                <div className='container-upload'>
                    <img src={Subir} style={{width:'42%', height:'88%'}}/>
                </div>
                <img src={Carrito} style={{width:'10%'}}/>
                <div className='container-buttom'/>
            </div>
        </div>
    )
}
