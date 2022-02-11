import React, { useRef } from "react";
import Edit from "../../assets/static/buttons/editar@2x.png";
import EditActivo from "../../assets/static/buttons/editarwishlistactivo@2x.png";
import Delete from "../../assets/static/buttons/eliminar@2x.png";
import DeleteActivo from "../../assets/static/buttons/eliminarwishlistactivo@2x.png";
import Wishlist from "../../assets/static/buttons/moverwishlistbtn@2x.png";
import WishlistActivo from "../../assets/static/buttons/perfilwishactivobtn@2x.png";

const cant = [1, 2, 3, 4, 5];

const CartItem = ({ product, k }) => {
  console.log("product", product)
  const quantity = useRef(null);
  const editRef = useRef({});
  const deleteRef = useRef({});
  const wishRef = useRef({});

  return (
    <div className="cardItem" key={k}>
      <div className="cardItem__product">
        <div className="cardItem__img">
          <img src={product.photo.file.url} alt={product.photo.name} />
        </div>
        <div className="cardItem__options">
          <div>
            <img
              src={Edit}
              alt="Editar"
              onMouseOver={() => (editRef.current.src = EditActivo)}
              onMouseLeave={() => (editRef.current.src = Edit)}
              ref={editRef}
            />
            <span>Editar</span>
          </div>
          <div>
            <img
              src={Delete}
              alt="Eliminar"
              onMouseOver={() => (deleteRef.current.src = DeleteActivo)}
              onMouseLeave={() => (deleteRef.current.src = Delete)}
              ref={deleteRef}
            />
            <span>Eliminar</span>
          </div>
          <div>
            <img
              src={Wishlist}
              alt="Wishlist"
              onMouseOver={() => (wishRef.current.src = WishlistActivo)}
              onMouseLeave={() => (wishRef.current.src = Wishlist)}
              ref={wishRef}
            />
            <span>Wishlist</span>
          </div>
        </div>
      </div>
      <div className="cardItem__infoAndPrice">
        <div className="cardItem__info">
          <h3>LINEA {product.size.line_id}</h3>
          <h4>{product.photo.name}, </h4>
          <span>{product.size.dimensions}, </span>
          <span>empaque tipo {product.package.name}, </span>
          <span>papel {product.sub_materials[0].name}, </span>
          <span>marco {product.sub_materials[1].name}.</span>
        </div>
        <div className="cardItem__price">
          <select ref={quantity}>
            {cant.map((cant) => (
              <option value={cant}>{cant}</option>
            ))}
          </select>
          <h3>${product.photo.base_price}</h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
