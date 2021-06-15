import React, { useState } from 'react'
import Title from '../Title'
import CartItem from './CartItem'
import PaymentInformation from '../PaymentInformation'

import ShoppingCart1 from '../../assets/static/images/ShoppingCart1.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'
import ShoppingCart4 from '../../assets/static/images/ShoppingCart4.png'

import AddAdressModal from '../AddAddresModal'

const products=[
    {
        id:1,
        type:'LINEA EXCLUSIVE',
        name:'Nombre Fotografia 1',
        img: ShoppingCart1,
        phrase:'Frase Fotografia 1',
        dimensions: '120 * 140',
        frame:'Tipo de Marco 1',
        material:'Tipo de Material 1',
        price: 120000,
    },   
    {
        id:2,
        type:'LINEA PRO',
        name:'Nombre Fotografia 2',
        img: ShoppingCart2,
        phrase:'Frase Fotografia 2',
        dimensions: '120 * 140',
        frame:'Tipo de Marco 2',
        material:'Tipo de Material 2',
        price: 130000,
    },   
    {
        id:3,
        type:'',
        name:'Nombre Fotografia 3',
        dimensions: '120 * 140',
        img: ShoppingCart3,
        phrase:'Frase Fotografia 3',
        frame:'Tipo de Marco 3',
        material:'Tipo de Material 3',
        price: 140000,
    },   
    {
        id:4,
        type:'',
        name:'Nombre Fotografia 4',
        img: ShoppingCart4,
        phrase:'Frase Fotografia 4',
        dimensions: '120 * 140',
        frame:'Tipo de Marco 4',
        material:'Tipo de Material 4',
        price: 150000,
    },   
]

const SectionShoppingCart = ({authenticity_token}) => {
    const [value, setValue] = useState(0)
    return (
        <div className="sectionShoppingCart">
            <Title title="CARRITO"/>
            <div className="shoppingCard__cont">
                <div className="shoppingCard__items">
                    {products.map((product)=>
                    <CartItem key={product.id} product={product}/>
                    )}    
                </div>
                <div className="sectionShoppingCart__payment">
                   <PaymentInformation {...{products,authenticity_token}}/> 
                </div>
            </div>
        </div>
    )
}

export default SectionShoppingCart
