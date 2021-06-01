import React from 'react'
import Edit from '../../assets/static/buttons/editar@2x.png'
import EditActivo from '../../assets/static/buttons/editarwishlistactivo@2x'
import Delete from '../../assets/static/buttons/eliminar@2x.png'
import DeleteActivo from '../../assets/static/buttons/eliminarwishlistactivo@2x.png'
import Cart from '../../assets/static/buttons/movercarrito@2x.png'
import CartActivo from '../../assets/static/buttons/moverwishlistactivo@2x.png'

const hoverImg = (img)=>{
    img = {
        "Edit":Edit,
        "Activo": EditActivo   
    }
    return img
}

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
                    <img src={hoverImg()} alt="Editar" onMouseOver={}/>
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
