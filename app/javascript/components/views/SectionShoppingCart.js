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
    //localStorage.removeItem('items');
    const [items, setItems] = useState([]);
    const [total_cost, setTotalCost] = useState(0);
    useEffect(() => {
        const data = localStorage.getItem("items")
        let wish = JSON.parse(data)
        wish.map((v) => { v["quantity"] = v["quantity"] ? v["quantity"] : 1 })
        console.log('wish', wish)
        localStorage.setItem("items", JSON.stringify(wish))
        setItems(wish)

    }, [])

    useEffect(() => {
        if (items.length > 0) {
            let acum = 0
            items.map((w) => acum = acum + (w.photo.base_price * w.quantity))
            setTotalCost(acum)
        }
    }, [items])

    const updateItem = (obj) => {
        let temp = [...items]
        temp.map((v) => {
            if (v.id === obj.id) {
                v.quantity = obj.quantity
            }
        })
        console.log('temp', temp)
        setItems(temp)
    }
    console.log('items', items);
    return (
        <div className="sectionShoppingCart">
            <Title title="CARRITO" />
            <div className="shoppingCard__cont">
                <div className="shoppingCard__items">
                    {items && items.map((product, i) =>
                        <CartItem updateItem={updateItem} prod={product} key={`ìtem${i}`} />
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
