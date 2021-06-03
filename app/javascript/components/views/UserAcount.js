import React, { useState } from 'react'
import Title from '../Title'
import UserAcountData from './UserAcountData'
import UserAcountPurshase from './UserAcountPurshase'
import SectionWishlist from './SectionWishlist' 
import user from '../../assets/static/icon/user.png'
import userProfile from '../../assets/static/buttons/perfilusuario@2x.png'
import userProfileActive from '../../assets/static/buttons/perfilusuarioactivobtn@2x.png'
import userCart from '../../assets/static/buttons/perfilcarrito@2x.png'
import userCartActive from '../../assets/static/buttons/perfilcarritoactivobtn@2x.png'
import userWish from '../../assets/static/buttons/perfilwish@2x.png'
import userWishActive from '../../assets/static/buttons/perfilwishactivobtn@2x.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'

const userAcount = {
    userID: 1,
    img: user,
    email: 'natalia_bedoya@gmail.com',
    fullName:'Natalia Carolina Bedoya Velasquez',
    documentID:{type:'C.C.',numberID:1056780423},
    phone: '(57) 222 22 22',
    mobile: '311 111 1111',
    address: 'Calle 52 # 17 - 39, Apto 302',
    country: 'Colombia',
    City:'Bogotá D.C.',
    district:'Chapinero',
    purshases:[ 
        {
            id:2,
            type:'LÍNEA EXCLUSIVE',
            name:'Nombre Fotografía 2',
            img: ShoppingCart2,
            phrase:'Frase Fotografía 2',
            dimensions: '120 * 140',
            frame:'Tipo de Marco 2',
            material:'Tipo de Material 2',
            price: 130000,
            paymentInfo:{
                success:true,
                date:'20/05/2021',
                detail:'Debito RedCompra PSE Davivienda',
                lastDB: 1031,
                paymentReference: 4923121608,
                authorizationCode: 601319,
                paymentType:'Debito'
            }
        },
        {
            id:3,
            type:'LÍNEA PRO',
            type:'',
            name:'Nombre Fotografía 3',
            dimensions: '120 * 140',
            img: ShoppingCart3,
            phrase:'Frase Fotografía 3',
            frame:'Tipo de Marco 3',
            material:'Tipo de Material 3',
            price: 140000,
            paymentInfo:{
                sucess:true,
                date:'20/05/2021',
                detail:'Debito RedCompra PSE Davivienda',
                lastDB: 1031,
                paymentReference: 4923121608,
                authorizationCode: 601319,
                paymentType:'Debito'
            }
        }, 
    ]
}

const UserAcount = () => {
    const [acountInfo, setAcountInfo] = useState(1)
    return (
        <div className='userAcount'>
            <Title title='MI CUENTA' />
            <div className='userAcount__info'>
                <img src={userAcount.img} />
                <span>{userAcount.fullName}</span>
            </div>
            <div className='userAcount__menu'>
                <div onClick={()=>setAcountInfo(1)}>
                    <img src={acountInfo!==1?userProfile:userProfileActive} alt="Mi Perfil"/>
                    <span>Mi cuenta</span>
                </div>
                <div onClick={()=>setAcountInfo(2)}>
                    <img src={acountInfo!==2?userCart:userCartActive} alt="Mi Carrito"/>
                    <span>Mis Compras</span>
                </div>
                <div onClick={()=>setAcountInfo(3)}>
                    <img src={acountInfo!==3?userWish:userWishActive} alt="Mis Deseos"/>
                    <span>Mi Whislist</span>
                </div>
            </div>
            <div className='userAcount__cont'>
                {acountInfo===1&&
                <div>
                    <UserAcountData userAcount={userAcount}/>
                </div>}
                {acountInfo===2?<div className='userAcount__purshase'>
                    {userAcount.purshases.map((purshase)=>
                        <UserAcountPurshase key={purshase.id} purshase={purshase}/>
                    )}
                </div>:<></>}
                {acountInfo===3&&
                <div>
                    <SectionWishlist/>
                </div>}
            </div>
        </div>
    )
}

export default UserAcount
