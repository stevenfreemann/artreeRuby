import React, { useState } from 'react'
import Title from './Title'
import ShowProduct from './product/ShowProduct'
import ShowProductPurchase from './product/ShowProductPurchase'
import CarrouselDown from './CarouselDownMarket'

const SectionProduct = ({view, title, photos, sizeInfo, materials, frames, packing}) => {
    console.log(photos)
    const [photo, setPhoto] = useState(photos[0])
    const [screen, setScreen] = useState(view === 3 ? 'purchase':"picture")
    
    const generateWishItem = async(size, frame, material, packing) => {
        console.log(photo, size, frame, packing, material, photo)
        //let photo = {size: selectSize}
        // let response = await fetch('/wishItem', {
        //     method: 'POST', 
        //     headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({  authenticity_token: authenticity_token}), //completar!
        // })
        // response = await response.json()
        // console.log('response', response);
    }

    return (
        <div className="sectionProduct">
            <div className="sectionProduct__title">
                <h1>{title}</h1>
            </div>
            <div className="sectionProduct__cont">
                    {screen==="picture"?<ShowProduct photo={photo} setScreen={setScreen}/>
                    :screen==="purchase"&&
                    <ShowProductPurchase clickWishItem={generateWishItem} exclusive={view===1 ? true : false} likeAPro={view===3 ? true : false} photo={photo} sizeInfo={sizeInfo} materials={materials} frames={frames}/>}
                    {view!==3&&<CarrouselDown idSelected={photo.id} info={photos} listener={(photo)=> setPhoto(photo)}/>}
            </div>
        </div>
    )
}

export default SectionProduct
