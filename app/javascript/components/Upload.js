import React from 'react'
import Title from './Title'
import Subir from '../assets/static/icon/subir@2x.png'
import Carrito from '../assets/static/buttons/perfilcarrito@2x.png'
export default function Upload() {
    const navigate=(dir)=>{
        const direction={
            'home':'/',
            'Market':'/likeProMarket'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <div className='upload' style={{ backgroundColor: 'var(--backGray)' }}>
            <Title title={'LIKE A PRO - Espacio 1'} alignLeft={true} background={'var(--backGray)'} />
            <div className='upload__cont'>
                <div className='upload__img'>
                    <img src={Subir}/>
                </div>
                <div className='upload__cart' onClick={()=>navigate('Market')}>
                    <img src={Carrito}/>
                    <span>Inicia tu compra</span>
                </div>
            </div>
        </div>
    )
}
