import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import WishItem from './WishItem'
import leftButton from '../../assets/static/buttons/leftButton.png'
import rightButton from '../../assets/static/buttons/rightButton.png'

import ShoppingCart1 from '../../assets/static/images/ShoppingCart1.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'
import ShoppingCart4 from '../../assets/static/images/ShoppingCart4.png'


// const products=[
//     {id:1,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
//]
const SectionWishlist = ({ title, products }) => {   
    const [page, setPage] = useState(1)
    const exist = useRef(false)
    const elements = title ? 12 : 6
    const pages = (Math.floor((products.length - 1) / elements) + 1)
    
    
    const addItems = (wishItem) => {
        const data = localStorage.getItem("items")
        let wishes = data ?  JSON.parse(data) : []
        if(wishes.length > 0){
            wishes.map((v)=>{
                if(!exist.current) exist.current = repeat(v , wishItem)
            })
            if (!exist.current) wishes.push(wishItem)
        }else wishes.push(wishItem)
        localStorage.setItem("items", JSON.stringify(wishes))
        exist.current = false
        // if(repeated === true) {
        // } else {
        //     if (wishItem) {
        //         console.log("wishItem", wishItem)
        //         if (data) {
        //             wishes.push(wishItem)
        //             localStorage.setItem("items", JSON.stringify(wishes))
        //         } else {
        //             wishes.push(wishItem)
        //             localStorage.setItem("items", JSON.stringify(wishes))
        //         }
        //         alert("Item agregado al carrito")
        //     }
        // }
        
        // wishes && wishes.map((item)=>{
        //     alert("Este item ya esta en el carrito")
        //     if(item.id === wishItem.id) {
        //     }
        // })
    }
    const repeat = (obj1, obj2)=>{ 
        console.log(obj1.id, obj2.id)
        let value  = obj1.id === obj2.id ? true : false
        return value
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
                {showProducts.map((product) =>
                    <WishItem clickAddToCart={() => addItems(product)} product={product} k={product.id} />
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
