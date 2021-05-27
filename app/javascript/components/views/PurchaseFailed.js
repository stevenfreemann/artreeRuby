import React from 'react'
import Title from '../Title'
import atras from '../../assets/static/buttons/left-arrow.png'
import pregunta from '../../assets/static/icon/pregunta.png'



const PurchaseFailed = () => {
    return (
        <div className='purchaseFailed'>
            <img className='purchaseFailed__back' src={atras} alt="atras"/>
            <div className='purchaseFailed__cont'>
                <img src={pregunta} alt='Fallida'/>
                <h3>
                    Compra Fallida
                </h3>
                <span>Los datos de la cuenta no registran.</span>
                <button>Volver a pagos</button>
            </div>
        </div>
    )
}

export default PurchaseFailed
