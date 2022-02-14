import React from 'react'
import Title from '../Title'
import atras from '../../assets/static/buttons/left-arrow.png'
import pregunta from '../../assets/static/icon/pregunta.png'

const PurchaseFailed = ({ info }) => {
    const response = await fetch(`/correct_stock/${items[0].size.id}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const result = await response.json()
      const availableStock = result["result"]

    return (
        <div className='purchaseFailed'>
            <img className='purchaseFailed__back' src={atras} alt="atras" />
            <div className='purchaseFailed__cont'>
                <img src={pregunta} alt='Fallida' />
                <h3>
                    Compra Fallida
                </h3>
                <span >{info.status_message}</span>
                <button onClick={() => window.location = "/"}>Volver a pagos</button>
            </div>
        </div>
    )
}

export default PurchaseFailed
