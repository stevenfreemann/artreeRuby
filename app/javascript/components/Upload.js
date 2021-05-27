import React from 'react'
import Title from './Title'
import Subir from '../assets/static/icon/subir@2x.png'
import Carrito from '../assets/static/buttons/carrito@2x.png'
export default function Upload() {
    return (
        <div className='upload' style={{ backgroundColor: 'var(--backGray)' }}>
            <Title title={'LIKE A PRO - Espacio 1'} backTitle={true} alignLeft={true} background={'var(--backGray)'} />
            <div className='upload__cont'>
                <div className='upload__img'>
                    <img src={Subir}/>
                </div>
                <div className='upload__cart'>
                    <img src={Carrito}/>
                    <span>Inicia tu compra</span>
                </div>
            </div>
        </div>
    )
}
