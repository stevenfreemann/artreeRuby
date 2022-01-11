import React from 'react'
import atras from '../../assets/static/buttons/left-arrow.png'
import check from '../../assets/static/graphics/check@2x.png'

element.addEventListener("transaction.updated", bankInfo);

const bankInfo = () => {

}

const paymentInfo ={
    sucess:true,
    detail:'Debito RedCompra PSE Davivienda',
    lastDB: 1031,
    paymentReference: 4923121608,
    authorizationCode: 601319,
    paymentType:'Debito'
}

const PurchaseSuccess = () => {
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
                        <h3>Pago Aprobado</h3>
                        <h3>Detalle de pago:</h3>
                        <span>{paymentInfo.detail} terminada en <span style={{fontWeight:'bold'}}>{paymentInfo.lastDB}</span></span>
                        <span style={{fontWeight:'bold'}}>Referencia de pago: {paymentInfo.paymentReference}</span>
                        <span style={{fontWeight:'bold'}}>Código de autorización: {paymentInfo.authorizationCode}</span>
                        <span style={{fontWeight:'bold'}}>Tipo de pago: {paymentInfo.paymentType}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseSuccess
