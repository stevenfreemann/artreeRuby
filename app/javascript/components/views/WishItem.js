import React, { useRef } from 'react'
import Edit from '../../assets/static/buttons/editar@2x.png'
import EditActivo from '../../assets/static/buttons/editarwishlistactivo@2x'
import Delete from '../../assets/static/buttons/eliminar@2x.png'
import DeleteActivo from '../../assets/static/buttons/eliminarwishlistactivo@2x.png'
import Cart from '../../assets/static/buttons/movercarrito@2x.png'
import CartActivo from '../../assets/static/buttons/moverwishlistactivo@2x.png'



const WishItem = ({ product, clickSendToCart, clickDelete, k }) => {
    console.log("product_wishItem",product)
    const editRef = useRef({})
    const deleteRef = useRef({})
    const cartRef = useRef({})

    return (
        <div className="wishItem">
            <img className="wishItem__img" src={product.photos.file.url} alt={product.photos.id} />
            <div className="wishItem__info">
                <h3>{product.photos.name}</h3>
                <h4>{product.sizes.name} </h4>
                <h4>Empaque {product.packages.name}</h4>
                <div className="wishItem__subMat">
                    {product.sub_materials.map((value, i) =>
                        <span key={"submaterial"+ i}>- {value.name} </span>
                    )}
                </div>
            </div>
            <div className="wishItem__options">
                <div>
                    <img src={Delete} alt="Eliminar" onClick={() => clickDelete(product) }
                        onMouseOver={() => deleteRef.current.src = DeleteActivo}
                        onMouseLeave={() => deleteRef.current.src = Delete} ref={deleteRef} />
                    <span>Eliminar</span>
                </div>
                <div>
                    <img src={Cart} alt="Wishlist" onClick={() => clickSendToCart(product) } onMouseOver={() => cartRef.current.src = CartActivo}
                        onMouseLeave={() => cartRef.current.src = Cart} ref={cartRef} />
                    <span> Mover al Carrito</span>
                </div>
            </div>
        </div>
    )
}
// localStorage.setItem("products", JSON.stringify(WishItem))
export default WishItem
