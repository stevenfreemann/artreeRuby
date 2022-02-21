import React from 'react'
import Title from '../Title'
import atras from '../../assets/static/buttons/left-arrow.png'
import pregunta from '../../assets/static/icon/pregunta.png'

const PurchaseFailed = async({ info }) => {
    let response = await fetch(`/correct_stock`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({transaction: info}),
      })     
       response = await response.json()
       console.log('response', response)
       //   const availableStock = result["result"]

    return (
        <div className='purchaseFailed'>
            <img className='purchaseFailed__back' src={atras} alt="atras" />
            <div className='purchaseFailed__cont'>
                <img src={pregunta} alt='Fallida' />
                <h3>
                    Compra Fallida
                </h3>
                <span >{info.status_message}</span>
                <button onClick={() => window.location = "/cart"}>Volver al carrito</button>
            </div>
        </div>
    )
}

export default PurchaseFailed
