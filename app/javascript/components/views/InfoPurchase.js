import React from 'react'
import Title from '../Title'
import img from '../../assets/static/images/purchase.png'
const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laboriosam eveniet nobis quas facilis quis quam obcaecati consequatur necessitatibus porro voluptates itaque at perferendis, nulla ducimus corrupti impedit repellendus a.'
const list = [
    {id:1,text:text,},
    {id:2,text:text,},
    {id:3,text:text,},
    {id:4,text:text,}, 
    {id:5,text:text,}, 
    {id:6,text:text,}, 
]

const InfoPurchase = () => {
    return (
        <div>
        <Title title='SI QUIERES COMPRAR LOS PRODUCTOS' />
        <div className='infoPurchase'>
            <div className='infoPurchase__cont'>
                <div className='infoPurchase__img'>
                    <img src={img}/>
                    <button>Imprime ahora</button>
                </div>
                <div className='infoPurchase__list'>
                    <ol>
                        {list.map((item)=>
                        <li key={item.id}>{item.text}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InfoPurchase
