import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import WishItem from './WishItem'
import leftButton from '../../assets/static/buttons/leftButton.png'
import rightButton from '../../assets/static/buttons/rightButton.png'

import ShoppingCart1 from '../../assets/static/images/ShoppingCart1.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'
import ShoppingCart4 from '../../assets/static/images/ShoppingCart4.png'

const SectionWishlist = ({ title, products }) => {   
    const [page, setPage] = useState(1)
    const elements = title ? 12 : 6
    const pages = (Math.floor((products.length - 1) / elements) + 1)
    
    const sendToCart = async(wishItem) => { 
        const cart = localStorage.getItem("items")
        let tempCart = JSON.parse(cart) || []
        //console.log("cart", cart)
        //console.log("wishItem", wishItem)
        let obj = {
            size: wishItem?.sizes.id,
            material: wishItem?.sub_materials[0].id,
            frame: wishItem?.sub_materials[1].id,
            packing: wishItem?.packages.id,
            photo: wishItem?.photos.id,
        }
        obj["reference"] = `${obj["size"]}${obj["material"]}${obj["frame"]}${obj["packing"]}${obj["photo"]}`
        let exist = tempCart?.find((item)=>item?.reference === obj["reference"])
        if (exist) {
            return alert("Esta combinacion ya se encuentra en el carrito de compras")
        }
        else {
        tempCart?.push(obj)
            localStorage.setItem("items", JSON.stringify(tempCart))
            alert("Item agregado al carrito")
        }
    }


    const addItems = (wishItem) => {
        const cart = localStorage.getItem("items")
        let tempCart = JSON.parse(cart) || []
        let exist = tempCart?.find((item)=>item?.id === wishItem.id)
        if (exist) {
            return alert("El item ya se encuentra en el carrito de compras")
        }
        else {
            tempCart?.push(wishItem)
            localStorage.setItem("items", JSON.stringify(tempCart))
            alert("Item agregado al carrito")
        }
    }
    
    const paginationWish = (products) => {
        if (products.length > elements) {
            let maxProduct = page * elements
            let minProduct = maxProduct - elements
            let showProducts = products.slice(minProduct, maxProduct)
            return showProducts
        }
        return products
    }
    const showProducts = paginationWish(products)
    console.log('showProducts', showProducts);
    return (
        <div>
            {title && <div className='sectionWishlist__title'>
                <Title title='WISHLIST' />
            </div>}
            <div className='sectionWishlist__cont'>
                {showProducts.map((product, i) =>
                    <WishItem clickSendToCart={()=> sendToCart(product)} product={product} key={product.id} />
                )}
            </div>
            <div className='sectionWishlist__next-prev'>
                <img src={leftButton} alt='Atras' style={{ visibility: `${page > 1 ? 'visible' : 'hidden'}` }} onClick={() => { setPage(page - 1); document.documentElement.scrollTop = 0 }} />
                <span>{`Página ${page} de ${pages}`}</span>
                <img src={rightButton} alt='Siguente' style={{ visibility: `${page < pages && page !== pages ? 'visible' : 'hidden'}` }} onClick={() => { setPage(page + 1); document.documentElement.scrollTop = 0 }} />
            </div>
        </div>
    )
}

export default SectionWishlist
