import React, { useState } from 'react'
import Title from './Title'
import ShowProduct from './product/ShowProduct'
import ShowProductPurchase from './product/ShowProductPurchase'
import CarrouselDown from './CarouselDownMarket'

const SectionProduct = ({view, title, info, sizeInfo, materials, frames}) => {
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
                    <ShowProductPurchase exclusive={view===1 ? true : false} likeAPro={view===3 ? true : false} data={data} sizeInfo={sizeInfo} materials={materials} frames={frames}/>}
                    {view!==3&&<CarrouselDown idSelected={data.id} info={info} listener={(info)=> setData(info)}/>}
            </div>
        </div>
    )
}

export default SectionProduct
