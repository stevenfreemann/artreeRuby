import React, { useEffect } from "react";
import Title from '../Title'
import atras from '../../assets/static/buttons/left-arrow.png'
import pregunta from '../../assets/static/icon/pregunta.png'

const PurchaseFailed = ({ info, status }) => {
    useEffect(() => {
        const correctStock = async () => {
            console.log("info", info)
            let response = await fetch(`/correct_stock`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({products: info}), 
              })     
               response = await response.json()
               console.log('response', response)                 
            }
        correctStock()
    }, [])

    return (
        <div className='purchaseFailed'>
            <img className='purchaseFailed__back' src={atras} alt="atras" />
            <div className='purchaseFailed__cont'>
                <img src={pregunta} alt='Fallida' />
                <h3>
                    Compra Fallida
                </h3>
                <span >Id de transacción: {info.payment_id}</span>
                <span >status :{status}</span>
                <button onClick={() => window.location = "/cart"}>Volver al carrito</button>
            </div>
        </div>
    )
}

export default PurchaseFailed
