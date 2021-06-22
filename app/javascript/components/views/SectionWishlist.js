import React, { useState } from 'react'
import Title from '../Title'
import WishItem from './WishItem'
import leftButton from '../../assets/static/buttons/leftButton.png'
import rightButton from '../../assets/static/buttons/rightButton.png'

import ShoppingCart1 from '../../assets/static/images/ShoppingCart1.png'
import ShoppingCart2 from '../../assets/static/images/ShoppingCart2.png'
import ShoppingCart3 from '../../assets/static/images/ShoppingCart3.png'
import ShoppingCart4 from '../../assets/static/images/ShoppingCart4.png'

const products=[
    {id:1,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
    {id:2,type:'LINEA PRO',name:'Nombre Fotografia 2',img: ShoppingCart2,phrase:'Frase Fotografia 2',dimensions: '120 * 140',frame:'Tipo de Marco 2',material:'Tipo de Material 2',price: 130000,},   
    {id:3,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:4,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},   
    {id:5,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
    {id:6,type:'LINEA PRO',name:'Nombre Fotografia 2',img: ShoppingCart2,phrase:'Frase Fotografia 2',dimensions: '120 * 140',frame:'Tipo de Marco 2',material:'Tipo de Material 2',price: 130000,},   
    {id:7,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:8,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},   
    {id:9,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
    {id:10,type:'LINEA PRO',name:'Nombre Fotografia 2',img: ShoppingCart2,phrase:'Frase Fotografia 2',dimensions: '120 * 140',frame:'Tipo de Marco 2',material:'Tipo de Material 2',price: 130000,},   
    {id:11,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:12,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},   
    {id:13,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
    {id:14,type:'LINEA PRO',name:'Nombre Fotografia 2',img: ShoppingCart2,phrase:'Frase Fotografia 2',dimensions: '120 * 140',frame:'Tipo de Marco 2',material:'Tipo de Material 2',price: 130000,},   
    {id:15,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:16,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},  
    {id:17,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:18,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},   
    {id:19,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
    {id:20,type:'LINEA PRO',name:'Nombre Fotografia 2',img: ShoppingCart2,phrase:'Frase Fotografia 2',dimensions: '120 * 140',frame:'Tipo de Marco 2',material:'Tipo de Material 2',price: 130000,},   
    {id:21,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:22,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},   
    {id:23,type:'LINEA EXCLUSIVE',name:'Nombre Fotografia 1',img: ShoppingCart1,phrase:'Frase Fotografia 1',dimensions: '120 * 140',frame:'Tipo de Marco 1',material:'Tipo de Material 1',price: 120000,},   
    {id:24,type:'LINEA PRO',name:'Nombre Fotografia 2',img: ShoppingCart2,phrase:'Frase Fotografia 2',dimensions: '120 * 140',frame:'Tipo de Marco 2',material:'Tipo de Material 2',price: 130000,},   
    {id:25,type:'LINEA PRO',name:'Nombre Fotografia 3',dimensions: '120 * 140',img: ShoppingCart3,phrase:'Frase Fotografia 3',frame:'Tipo de Marco 3',material:'Tipo de Material 3',price: 140000,},   
    {id:26,type:'LINEA PRO',name:'Nombre Fotografia 4',img: ShoppingCart4,phrase:'Frase Fotografia 4',dimensions: '120 * 140',frame:'Tipo de Marco 4',material:'Tipo de Material 4',price: 150000,},  
]

const SectionWishlist = ({title}) => {
    const [page, setPage] = useState(1)
    const elements = title?12:6
    const pages = (Math.floor((products.length-1)/elements)+1)
    
    const paginationWish = (products)=>{
        if (products.length>elements) {
            let maxProduct = page * elements
            let minProduct = maxProduct - elements
            let showProducts = products.slice(minProduct,maxProduct)
            return showProducts
    }
        return products  
    }
    const showProducts = paginationWish(products)

    return (
        <div>
            {title&&<div className='sectionWishlist__title'>
                <Title title='WISHLIST' />
            </div>}
            <div className='sectionWishlist__cont'>
                {showProducts.map((product) =>
                    <WishItem product={product} key={product.id}/>
                )}
            </div>
            <div className='sectionWishlist__next-prev'>
                <img src={leftButton} alt='Atras' style={{visibility:`${page>1?'visible':'hidden'}`}} onClick={()=>{setPage(page-1);document.documentElement.scrollTop = 0}}/>
                <span>{`Página ${page} de ${pages}`}</span>
                <img src={rightButton} alt='Siguente' style={{visibility:`${page<pages&&page!==pages?'visible':'hidden'}`}} onClick={()=>{setPage(page+1);document.documentElement.scrollTop = 0}}/>
            </div>
        </div>
    )
}

export default SectionWishlist
