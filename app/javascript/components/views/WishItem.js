import React from 'react'
import Edit from '../../assets/static/buttons/editar@2x.png'
import Delete from '../../assets/static/buttons/eliminar@2x.png'
import Cart from '../../assets/static/buttons/movercarrito@2x.png'

const WishItem = ({ product }) => {
    return (
        <div className="wishItem">
            <img className="wishItem__img" src={product.img} alt={product.name}/>
            <div className="wishItem__infoAndPrice">
                <div className="wishItem__info">
                    <h3>{product.type}</h3>
                    <h4>{product.name}, </h4>
                    <span>{product.phrase}, </span>
                    <span>{product.dimensions}, </span>
                    <span>{product.frame}, </span>
                    <span>{product.material}</span>
                    <h3>${product.price}</h3>
                </div>
            </div>
            <div className="wishItem__options">
                <div>
                    <img src={Edit} alt="Editar" />
                    <span>Editar</span>
                </div>
                <div>
                    <img src={Delete} alt="Eliminar" />
                    <span>Eliminar</span>
                </div>
                <div>
                    <img src={Cart} alt="Wishlist" />
                    <span>Mover al Carrito</span>
                </div>
            </div>
        </div>
    )
}

export default WishItem
