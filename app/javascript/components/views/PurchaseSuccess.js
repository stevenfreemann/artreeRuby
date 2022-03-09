import React from 'react'
import atras from '../../assets/static/buttons/left-arrow.png'
import check from '../../assets/static/graphics/check@2x.png'



const PurchaseSuccess = ({ info }) => {
    console.log(info)
    localStorage.removeItem('items');
    return (
        <div className='purchaseSuccess'>
            <div className='purchaseSuccess__cont'>
                <div className='purchaseSuccess__title'>
                    <img src={atras} alt="atras" />
                    <h2>¡Muchas Gracias por tu compra!</h2>
                </div>
                <p>Recibirás tu pedido entre 3 a 10 días. Podrás hacer el seguimiento con el código en la factura que te llegará a tu correo electrónico registrado.</p>
                <div className='purchaseSuccess__payment-info'>
                    <img src={check} alt='Estado de pago' />
                    <div>
                        <span>status: {info.status} </span>
                        <h3>Detalle de pago:</h3>
                        <span style={{ fontWeight: 'bold' }}>Tipo de pago: {info.payment_method}</span>
                        <span>Tarjeta terminada en <span style={{ fontWeight: 'bold' }}>{info.last_4}</span></span>
                        <span Referencia de pago style={{ fontWeight: 'bold' }}> codigo de transacción: (artree): {info.ref_number}</span>
                        <span Código de transacción style={{ fontWeight: 'bold' }}> codigo de transacción: (plataforma de pago): {info.payment_id}</span>
                        <h3 style={{ fontWeight: 'bold' }}>Total pagado: $ {info.total_cost} COP </h3>
                        <h4>Detalles:</h4>  
                        <div>
                        {info.products?.map((product) => (
                            <div>
                                <div className="cardItem__img">
                                    <img src={product.photo.file.url} />
                                </div>
                            <span key={product?.id}>
                                <span style={{ fontWeight: 'bold' }}> nombre foto: </span>   
                                <span> {product?.photo.name}</span>
                            </span>
                            <span> 
                                <span style={{ fontWeight: 'bold' }}> marco: </span>   
                                <span> {product?.frame.name}</span>
                            </span>
                            <span key={product?.id}>
                                <span style={{ fontWeight: 'bold' }}> tamaño: </span>   
                                <span> {product?.size.name}</span>
                            </span>
                            <span> 
                                <span style={{ fontWeight: 'bold' }}> material: </span>   
                                <span> {product?.material.name}</span>
                            </span>
                            <span> 
                                <span style={{ fontWeight: 'bold' }}> empaque: </span>   
                                <span> {product?.package.name}</span>
                            </span>
                            <span> 
                                <span style={{ fontWeight: 'bold' }}> cantidad: </span>   
                                <span> {product?.quantity}</span>
                                <br></br>
                                <br></br>
                            </span>
                            </div>
                            
                        ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseSuccess
