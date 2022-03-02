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
    const [items, setItems] = useState([]);
    const [total_cost, setTotalCost] = useState(0);

    useEffect(() => {
        const info = async() => {
            const data = localStorage.getItem("items")
            // console.log("localStorage", data)
            let items = JSON.parse(data)
            items?.map((item) => { get_info(item)})
            }
        info()
    }, [])
    
    // localStorage.removeItem('items');
    useEffect(() => {
        const data = localStorage.getItem("items")
        let parsed_data = JSON.parse(data)

        if (items?.length === parsed_data?.length) {
            let acum = 0
            items?.map((w) => acum = acum + (w.photo.base_price * w.quantity))
            setTotalCost(acum)
        }
    }, [items])
    
    const get_info = async (item) => {
        let response = await fetch(`/get_info?size=${item.size}&packing=${item.packing}&material=${item.material}&frame=${item.frame}&photo=${item.photo}&reference=${item.reference}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        response = await response.json()
        setItems(items => items.concat(response))
    }
    
    const deleteItem = async(deleteItem) => {        
        let data = localStorage.getItem("items") || []
        let parsed_data = await JSON.parse(data)
        let temp_data = await parsed_data.filter((cartItem) => cartItem.reference !== deleteItem.reference);    
        localStorage.setItem("items", JSON.stringify(temp_data))
        alert("Item borrado del carrito")
        location.reload()
    }
    // console.log("items", items)   
    

    const updateItem = (obj) => {
        let temp = [...items]
        temp.map((v) => {
            if (v.reference === obj.reference) {
                v.quantity = obj.quantity
            }
        })
        console.log('temp', temp)
        setItems(temp)
    }
    // console.log('items', items);
    return (
        <div className="sectionShoppingCart">
            <Title title="CARRITO" />
            <div className="shoppingCard__cont">
                {!items?
                <div>El carrito de Compras está vacio</div>
                :
                <div className="shoppingCard__items">
                    {items && items.map((product, i) =>
                        <CartItem clickDelete={()=> deleteItem(product)} updateItem={updateItem} prod={product} key={`ìtem${i}`} />
                    )}
                </div>}
                <div className="sectionShoppingCart__payment">
                    <PaymentInformation {...{ items, authenticity_token, currentUser, total_cost }} />
                </div>
            </div>
        </div>
    )
}

export default SectionShoppingCart
