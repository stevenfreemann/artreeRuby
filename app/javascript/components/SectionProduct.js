import React, { useEffect, useState } from 'react'
import Title from './Title'
import ShowProduct from './product/ShowProduct'
import ShowProductPurchase from './product/ShowProductPurchase'
import CarrouselDown from './CarouselDownMarket'

const SectionProduct = ({view, title, photos, sizeInfo, materials, room, frames, packing, authenticity_token}) => {
    const [photo, setPhoto] = useState(photos[0])
    const [screen, setScreen] = useState(view === 3 ? 'purchase':"picture")
    const [productPurchase, setProductPurchase] = useState({})
    const [pricePurchase, setPricePurchase] = useState()

    console.log("photo", photo)
    console.log('productPurchase :>> ', productPurchase);

    useEffect(() => {
        let photoPrice = photo.base_price
        let totalPrice = photoPrice
        for (let property in productPurchase){
            let itemPrice = productPurchase[property]?.price
            totalPrice += itemPrice
        }
        setPricePurchase(totalPrice);
    }, [productPurchase, photo])

    const generateWishItem = async() => {
        console.log('productPurchase :>> ', productPurchase);
             
        let response = await fetch('/wishItem', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({frame: productPurchase?.frame.id, size: productPurchase?.size.id, material: productPurchase?.material.id, packing: productPurchase?.packing.id, photo: photo?.id}), 
        })
        response = await response.json()
        alert(response.msg)
        //console.log('response', response);
    }

    const sendToCart = async() => {        
        const cart = localStorage.getItem("items")
        let tempCart = JSON.parse(cart) || []
        let obj = {
            frame: productPurchase?.frame.id,
            size: productPurchase?.size.id,
            material: productPurchase?.material.id,
            packing: productPurchase?.packing.id,
            photo: photo?.id
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

    return (
        <div className="sectionProduct">
            <div className="sectionProduct__title">
                <h1>{title}</h1>
            </div>
            <div className="sectionProduct__cont">
                {screen==="picture"?<ShowProduct photo={photo} room={room} setScreen={setScreen}/>
                :screen==="purchase"&&
                <ShowProductPurchase {...{ photo, sizeInfo, materials, frames, packing, productPurchase, setProductPurchase, pricePurchase }} listenerWishList={()=>generateWishItem()} listenerSendToCart={()=>sendToCart()} exclusive={view===1 ? true : false} likeAPro={view===3 ? true : false}/>}
                {photo&&view!==3&&<CarrouselDown idSelected={photo.id} info={photos} listener={(photo)=> setPhoto(photo)}/>}
            </div>
        </div>
    )
}

export default SectionProduct
