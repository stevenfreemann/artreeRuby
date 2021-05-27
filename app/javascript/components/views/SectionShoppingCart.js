import React, { useRef, useState } from 'react'
import Title from '../Title'
import PaymentInformation from '../PaymentInformation'
import ShoppingCart1 from '../../assets/static/images/ShoppingCart1.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'
import ShoppingCart4 from '../../assets/static/images/ShoppingCart4.png'
import Edit from '../../assets/static/buttons/editar@2x.png'
import Delete from '../../assets/static/buttons/eliminar@2x.png'
import Wishlist from '../../assets/static/buttons/moverwishlistbtn@2x.png'
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
const cant=[1,2,3,4,5]

const SectionShoppingCart = () => {
    const [value, setValue] = useState(0)
    const quantity = useRef(null)

    return (
        <div className="sectionShoppingCart">
            <Title title="CARRITO"/>
            <div className="shoppingCard__cont">
                <div className="shoppingCard__items">
                    {products.map((product)=>
                    <div className="shoppingCard__item" key={product.id}>
                        <div className="shoppingCard__product">
                            <div className="shoppingCard__img"><img src={product.img} alt={product.name}/></div>
                            <div className="shoppingCard__options">
                                <div>
                                    <img src={Edit} alt="Editar"/>
                                    <span>Editar</span>
                                </div>
                                <div>
                                    <img src={Delete} alt="Eliminar"/>
                                    <span>Eliminar</span>
                                </div>
                                <div>
                                    <img src={Wishlist} alt="Wishlist"/>
                                    <span>Wishlist</span>
                                </div>
                            </div>
                        </div>
                        <div className="shoppingCard__infoAndPrice">
                            <div className="shoppingCard__info">
                                <h3>{product.type}</h3>
                                <h4>{product.name}, </h4>
                                <span>{product.phrase}, </span>
                                <span>{product.dimensions}, </span>
                                <span>{product.frame}, </span>
                                <span>{product.material}</span>
                            </div>
                            <div className="shoppingCard__price">
                                <select ref={quantity}>
                                    {cant.map((cant)=>
                                        <option value={cant}>{cant}</option>
                                    )}
                                </select>
                                <h3>${product.price}</h3>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    )}    
                </div>
                <div className="payment">
                   <PaymentInformation products={products}/> 
                </div>
            </div>
        </div>
    )
}

export default SectionShoppingCart
