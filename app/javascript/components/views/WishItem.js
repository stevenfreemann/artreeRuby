import React, { useRef } from 'react'
import Edit from '../../assets/static/buttons/editar@2x.png'
import EditActivo from '../../assets/static/buttons/editarwishlistactivo@2x'
import Delete from '../../assets/static/buttons/eliminar@2x.png'
import DeleteActivo from '../../assets/static/buttons/eliminarwishlistactivo@2x.png'
import Cart from '../../assets/static/buttons/movercarrito@2x.png'
import CartActivo from '../../assets/static/buttons/moverwishlistactivo@2x.png'



const WishItem = ({ product, clickAddToCart, k }) => {
    console.log(product)
    const editRef = useRef({})
    const deleteRef = useRef({})
    const cartRef = useRef({})

    return (
        <div className="wishItem">
            <img className="wishItem__img" src={product.photo.file.url} alt={product.photo.id} />
            <div className="wishItem__infoAndPrice">
                <div className="wishItem__info">
                    {/* Aqui debes definir que vas a mostrar, el error que tenias anteriormente se generaba debido que estabas metiendo dentro de un <span> un objeto ya que frame, size y photo son objetos y eso no lo puede renderizar un span,
                    agregue el iterador de sub material por si lo necesitas  */}

                    <h5>{product.size.name} </h5>
                    <h5>{product.photo.name}</h5>
                    <h5>{product.package.name}</h5>

                    {product.sub_material.map((value) =>
                        <span>{value.name}</span>
                    )}
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
                    <img src={Cart} alt="Wishlist" onClick={() => asdfg } onMouseOver={() => cartRef.current.src = CartActivo}
                        onMouseLeave={() => cartRef.current.src = Cart} ref={cartRef} />
                    <span> Mover al Carrito</span>
                </div>
            </div>
        </div>
    )
}
// localStorage.setItem("products", JSON.stringify(WishItem))
export default WishItem
