import React, { useRef, useEffect, useState } from "react";
import Edit from "../../assets/static/buttons/editar@2x.png";
import EditActivo from "../../assets/static/buttons/editarwishlistactivo@2x.png";
import Delete from "../../assets/static/buttons/eliminar@2x.png";
import DeleteActivo from "../../assets/static/buttons/eliminarwishlistactivo@2x.png";
import Wishlist from "../../assets/static/buttons/moverwishlistbtn@2x.png";
import WishlistActivo from "../../assets/static/buttons/perfilwishactivobtn@2x.png";


const CartItem = ({ updateItem, clickDelete, prod }) => {

  // console.log("cartItem", prod)
  const imagePro = prod?.line_id === 2 ? true : false
  const stock = prod?.photo.stock
  const selectStock = imagePro && stock >= 100 ? 100 : stock
  const [product] = useState(prod);
  const cant = Array.from({ length: selectStock }, (_, i) => i + 1)
  const editRef = useRef({});
  const deleteRef = useRef({});
  const wishRef = useRef({});

  const updateQuantity = (value) => {
    let temp = { ...product }
    temp.quantity = parseInt(value)
    updateItem(temp)
  }
  return (
    <div className="cardItem">
      <div className="cardItem__product">
        <div className="cardItem__img">
          <img src={product.photo.file.url} alt={product.photo.name} />
        </div>
        <div className="cardItem__options">
          <div>
            <img
              src={Delete}
              alt="Eliminar"
              onClick={() => clickDelete(product)}
              onMouseOver={() => (deleteRef.current.src = DeleteActivo)}
              onMouseLeave={() => (deleteRef.current.src = Delete)}
              ref={deleteRef}
            />
            <span>Eliminar</span>
          </div>
          
        </div>
      </div>
      <div className="cardItem__infoAndPrice">
        <div className="cardItem__info">
          <h3>LINEA {product.size.line_id}</h3>
          <h4>{product.photo.name}, </h4>
          <span>{product.size.dimensions}, </span>
          <span>empaque tipo {product.package.name}, </span>
          <span>papel {product.material.name}, </span>
          <span>marco {product.frame.name}.</span>
        </div>
        <div className="cardItem__price">
          <select value={product.quantity} onChange={(e) => updateQuantity(e.target.value,)}>
            {cant.map((number, i) => (
              <option value={number} key={"option"+i}>{number}</option>
            ))}
          </select>
          <h3>${(product?.photo.base_price + product?.frame.price + product?.material.price + product?.package.price + product?.size.price) * 
          product.quantity}</h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
