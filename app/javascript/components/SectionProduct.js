import React, { useState } from 'react'
import Title from './Title'
import ShowProduct from './product/ShowProduct'
import ShowProductPurchase from './product/ShowProductPurchase'
import CarrouselDown from './CarouselDownMarket'

const SectionProduct = ({view, title, photos, sizeInfo, materials, room, frames, packing, authenticity_token}) => {
    const [photo, setPhoto] = useState(photos[0])
    const [screen, setScreen] = useState(view === 3 ? 'purchase':"picture")

    console.log("photo", photo)
    // console.log("token", authenticity_token)
    // console.log('sizeInfo :>> ', sizeInfo);
    // console.log('materials :>> ', materials);
    console.log('room :>> ', room);
    console.log('frames :>> ', frames);
    console.log('packing :>> ', packing);

    const generateWishItem = async(size, frame, material, packing) => {
        // console.log(`size ${size}` , `frame ${frame}`,  `material ${material}`,  `packing ${packing}`,  `photo ${photo.id}`)
         
        let response = await fetch('/wishItem', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({frame: frame, size: size, material: material, packing: packing, photo: photo.id}), 
        })
        response = await response.json()
        console.log('response', response);
        end
    }

    return (
        <div className="sectionProduct">
            <div className="sectionProduct__title">
                <h1>{title}</h1>
            </div>
            <div className="sectionProduct__cont">
                {screen==="picture"?<ShowProduct photo={photo} room={room} setScreen={setScreen}/>
                :screen==="purchase"&&
                <ShowProductPurchase clickWishItem={generateWishItem} exclusive={view===1 ? true : false} likeAPro={view===3 ? true : false} photo={photo}  price={photo.base_price} sizeInfo={sizeInfo} materials={materials} frames={frames} packing={packing}/>}
                {photo&&view!==3&&<CarrouselDown idSelected={photo.id} info={photos} listener={(photo)=> setPhoto(photo)}/>}
            </div>
        </div>
    )
}

export default SectionProduct
