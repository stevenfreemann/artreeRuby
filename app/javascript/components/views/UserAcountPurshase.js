import React from 'react'
import check from '../../assets/static/graphics/check@2x.png'

const UserAcountPurshase = ({purshase}) => {
    
    return (
        <>
            <div className='userAcountPurshase'>
                <img className='userAcountPurshase__img' src={purshase.img} alt={purshase.name}></img>
                <div className='userAcountPurshase__info'>
                    <h3>{purshase.type}</h3>
                    <span style={{fontWeight:'bold'}}>{purshase.name}, </span>
                    <span>{purshase.phrase}, </span>
                    <span>{purshase.dimensions}, </span>
                    <span>{purshase.frame}, </span>
                    <span>{purshase.material}. </span>
                    <h3>${purshase.price}</h3>
                    <div className='userAcountPurshase__payment'>
                        <img src={check} alt='Estado de pago'/>
                        <div>
                            <h3>Detalle de pago:</h3>
                            <span>{purshase.paymentInfo.date}</span>
                            <span>{purshase.paymentInfo.detail} terminada en <span style={{fontWeight:'bold'}}>{purshase.paymentInfo.lastDB}</span></span>
                            
                            <span style={{fontWeight:'bold'}}>Referencia de pago: {purshase.paymentInfo.paymentReference}</span>
                            <span style={{fontWeight:'bold'}}>Código de autorización: {purshase.paymentInfo.authorizationCode}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default UserAcountPurshase
