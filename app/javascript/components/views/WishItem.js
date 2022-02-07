import React, { useRef } from 'react'
import Edit from '../../assets/static/buttons/editar@2x.png'
import EditActivo from '../../assets/static/buttons/editarwishlistactivo@2x'
import Delete from '../../assets/static/buttons/eliminar@2x.png'
import DeleteActivo from '../../assets/static/buttons/eliminarwishlistactivo@2x.png'
import Cart from '../../assets/static/buttons/movercarrito@2x.png'
import CartActivo from '../../assets/static/buttons/moverwishlistactivo@2x.png'



const WishItem = ({ product, clickWishItem }) => {

    const editRef = useRef({})
    const deleteRef = useRef({})
    const cartRef = useRef({})

    return (
        <div className="wishItem">
            <img className="wishItem__img" src={product.img} alt={product.name} />
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
                    <img src={Edit} alt="Editar" onMouseOver={() => editRef.current.src = EditActivo}
                        onMouseLeave={() => editRef.current.src = Edit} ref={editRef} />
                    <span>Editar</span>
                </div>
                <div>
                    <img src={Delete} alt="Eliminar"
                        onMouseOver={() => deleteRef.current.src = DeleteActivo}
                        onMouseLeave={() => deleteRef.current.src = Delete} ref={deleteRef} />
                    <span>Eliminar</span>
                </div>
                <div>
                    <img src={Cart} alt="Wishlist" onClick={clickWishItem} onMouseOver={() => cartRef.current.src = CartActivo}
                        onMouseLeave={() => cartRef.current.src = Cart} ref={cartRef} />
                    <span> Mover al Carrito</span>

                </div>
            </div>
        </div>
    )
}
// localStorage.setItem("products", JSON.stringify(WishItem))
export default WishItem
