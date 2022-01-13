import React from 'react'
import atras from '../../assets/static/buttons/left-arrow.png'
import check from '../../assets/static/graphics/check@2x.png'



const PurchaseSuccess = ({info}) => {
    console.log(info)
    return (
        <div className='purchaseSuccess'>
            <div className='purchaseSuccess__cont'>
                <div className='purchaseSuccess__title'>
                    <img src={atras} alt="atras"/>
                    <h2>¡Muchas Gracias por tu compra!</h2>
                </div>
                <p>Recibirás tu pedido entre 3 a 10 días. Podrás hacer el seguimiento con el código en la factura que te llegará a tu correo electrónico registrado.</p>
                <div className='purchaseSuccess__payment-info'>
                    <img src={check} alt='Estado de pago'/>
                    <div>
                    <span>{info.status}  <span style={{fontWeight:'bold'}}>{info.status_message}</span></span>
                        <h3>Detalle de pago:</h3>
                        <span>Tarjeta terminada en <span style={{fontWeight:'bold'}}>{info.creditCard}</span></span>
                        <span style={{fontWeight:'bold'}}>Referencia de pago: {info.reference}</span>
                        <span style={{fontWeight:'bold'}}>Código de transacción: {info.transaction_id}</span>
                        <span style={{fontWeight:'bold'}}>Tipo de pago: {info.payment_type}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseSuccess
