import React, { useState } from 'react'
import Title from './Title'
import ShowProduct from './product/ShowProduct'
import ShowProductPurchase from './product/ShowProductPurchase'
import CarrouselDown from './CarouselDownMarket'
import bicycle1 from '../assets/static/images/bicycle1.jpg'
import bicycle2 from '../assets/static/images/bicycle2.jpg'
import bicycle3 from '../assets/static/images/bicycle3.jpg'
import bicycle4 from '../assets/static/images/bicycle4.jpg'
import bicycle5 from '../assets/static/images/bicycle5.jpg'
import bicycle6 from '../assets/static/images/bicycle6.jpg'
import bicycle7 from '../assets/static/images/bicycle7.jpg'

// const info = [
//     {id:1,nombre: "Bicicleta 1", img: bicycle1,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque."},
//     {id:2,nombre: "Bicicleta 2", img: bicycle2,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
//     {id:3,nombre: "Bicicleta 3", img: bicycle3,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque."},
//     {id:4,nombre: "Bicicleta 4", img: bicycle4,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque."},
//     {id:5,nombre: "Bicicleta 5", img: bicycle5,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque."},
//     {id:6,nombre: "Bicicleta 6", img: bicycle6,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae "},
//     {id:7,nombre: "Bicicleta 7", img: bicycle7,info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque.  Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque. Asperiores molestiae libero eaque omnis sequi! Nam ab corrupti blanditiis eaque."},
// ]


const SectionProduct = ({view, title, info}) => {
    console.log(info)
    const [data, setData] = useState(info[0])
    const [screen, setScreen] = useState(view === 3 ? 'purchase':"picture")
    return (
        <div className="sectionProduct">
            <div className="sectionProduct__title">
                <h1>{title}</h1>
            </div>
            <div className="sectionProduct__cont">
                    {screen==="picture"?<ShowProduct data={data} setScreen={setScreen}/>
                    :screen==="purchase"&&
                    <ShowProductPurchase exclusive={view===1 ? true : false} likeAPro={view===3 ? true : false} data={data}/>}
                    {view!==3&&<CarrouselDown idSelected={data.id} info={info} listener={(info)=> setData(info)}/>}
            </div>
        </div>
    )
}

export default SectionProduct
