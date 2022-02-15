import React, { useState, useEffect } from 'react'
import Title from '../Title'
import CartItem from './CartItem'
import PaymentInformation from '../PaymentInformation'

import ShoppingCart1 from '../../assets/static/images/ShoppingCart1.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'
import ShoppingCart4 from '../../assets/static/images/ShoppingCart4.png'

import AddAdressModal from '../AddAddresModal'

const SectionShoppingCart = ({ authenticity_token, currentUser }) => {
    // localStorage.removeItem('items');

    const [items, setItems] = useState([]);
    const [total_cost, setTotalCost] = useState(0);
    useEffect(() => {
        const data = localStorage.getItem("items")
        const wish = JSON.parse(data)
        if (wish && wish.length>0){  setItems(wish)
        let acum = 0
        wish.map((w) => {
                acum = acum + w.photo.base_price
            })
            setTotalCost(acum)
        }
    }, [])
    console.log('items', items);
    return (
        <div className="sectionShoppingCart">
            <Title title="CARRITO" />
            <div className="shoppingCard__cont">
                <div className="shoppingCard__items">
                    {items && items.map((product, i) =>

                        <CartItem product={product} k={`ìtem${i}`} />
                    )}
                </div>
                <div className="sectionShoppingCart__payment">
                    <PaymentInformation {...{ items, authenticity_token, currentUser, total_cost }} />
                </div>
            </div>
        </div>
    )
}

export default SectionShoppingCart
