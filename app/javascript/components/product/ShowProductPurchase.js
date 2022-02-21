import React, { useEffect, useRef, useState } from 'react'
import SectionProductModal from '../SectionProductModal'
import WishItem from '../views/WishItem'


import minus from '../../assets/static/buttons/minus.png'
import plus from '../../assets/static/buttons/plus.png'
import sizeImg from '../../assets/static/images/size.png'
import wishList from '../../assets/static/buttons/perfilwish@2x.png'
import wishListActivo from '../../assets/static/buttons/perfilwishactivobtn@2x.png'
import compra from '../../assets/static/buttons/perfilcarrito@2x.png'
import compraActivo from '../../assets/static/buttons/perfilcarritoactivobtn@2x.png'

import size1 from '../../assets/static/images/size1.png'
import size2 from '../../assets/static/images/size2.png'
import size3 from '../../assets/static/images/size3.png'
import acrilico from '../../assets/static/images/acrilico-section.png'
import canvas from '../../assets/static/images/canvas-section.png'
import papel from '../../assets/static/images/papel-section.png'
import marco from '../../assets/static/images/marcoSection.png'
import marco2 from '../../assets/static/images/marcos2.png'
import marco3 from '../../assets/static/images/marcos3.png'

const packing = [{id:1, name:"Normal"}]

const ShowProductPurchase = ({exclusive, likeAPro, photo, listenerWishList, sizeInfo, materials, frames, packing, productPurchase, setProductPurchase, pricePurchase}) => {
    //console.log("price", price)
    const [showExclusive] = useState(exclusive)
    const [showLikeAPro] = useState(likeAPro)
    const [accordionInfo, setAccordionInfo] = useState(0)
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedMaterial, setSelectedMaterial] = useState("")
    const [selectedFrame, setSelectedFrame] = useState("")
    const [selectedPacking, setSelectedPacking] = useState("")
    const [modal, setModal] = useState(false)
    const modalDataRef = useRef({})
    const modalInfoRef = useRef({})

    const navigate=(section)=>{
        if(showExclusive){
            if (selectedSize!==""&&selectedFrame!==""&&selectedPacking!=="") {
                const redirect={
                    'cart':'/cart'
                }
                window.location = redirect[section] ? redirect[section]: '/'
            }
            else{
                alert('Por favor seleccione todas las opciones')
            }
        }
        else{
            if (selectedSize!==""&&selectedMaterial!==""&&selectedFrame!==""&&selectedPacking!=="") {
                const redirect={
                    'cart':'/cart'
                }
                window.location = redirect[section] ? redirect[section]: '/'
            }
            else{
                alert('Por favor seleccione todas las opciones')
            }
        }
    }

    const setData = ( i, tag)=>{
        let tempProductObj = {...productPurchase}
        let dataTags = { size: sizeInfo, material: materials, frame: frames, packing: packing}

        let selectedTag = dataTags[tag]
        let selectedData = selectedTag[i]
        if(selectedData){
            tempProductObj[tag] = selectedData
            setProductPurchase(tempProductObj)
        }
    }
    
    useEffect(() => {
        let info = document.getElementsByClassName('accordeon-info')
        for (let i = 0; i < info.length; i++) {
            if(accordionInfo===(i+1)){
                let div = document.getElementsByClassName('accordeon-info')[i]
                div.style.height=`${div.scrollHeight}px`}
        }
    }, [accordionInfo])

    const showModal = (tag)=>{
        if (tag==='size') {
            modalDataRef.current=sizeInfo
            modalInfoRef.current=1
            setModal(true)
        }
        if (tag==='material') {
            modalDataRef.current=materials
            modalInfoRef.current=2
            setModal(true)
        }
        if (tag==='frame') {
            modalDataRef.current=frames
            modalInfoRef.current=3
            setModal(true)
        }
    }
      return (
          <div className="showProductPurchase">
            {modal&&<SectionProductModal {...{setData, modal, setModal, selectedSize, setSelectedSize, selectedMaterial, setSelectedMaterial, selectedFrame, setSelectedFrame}} info={modalInfoRef.current} dataModal={modalDataRef.current}/>}
            <div className="showProductPurchase__progress">
                <hr></hr>
                <div className="showProductPurchase__item">
                    <div className="item-selected"></div>
                    <span>Foto</span>
                </div>
                <div className="showProductPurchase__item">
                    <div className={selectedSize!==""?"item-selected":""}></div>
                    <span>Tamaño</span>
                </div>
                {!showExclusive&&
                <div className="showProductPurchase__item">
                    <div className={selectedMaterial!==""?"item-selected":""}></div>
                    <span>Materiales</span>
                </div>}
                <div className="showProductPurchase__item">
                    <div className={selectedFrame!==""?"item-selected":""}></div>
                    <span>Marco</span>
                </div>
                <div className="showProductPurchase__item">
                    <div className={selectedPacking!==""?"item-selected":""}></div>
                    <span>Empaque</span>
                </div>
            </div>
            <div className="showProductPurchase__product">
                <div className="showProductPurchase__info">
                    <img src={photo.file.url} alt={photo.name}/>
                    <div>
                        <span style={{fontWeight:"bold"}}>{photo.name}: $ {photo.base_price} </span>
                        <span>{photo.info}</span>
                    </div>
                </div>
                <div className="showProductPurchase__carac">
                    <div className="showProductPurchase__accordeon">
                        <div className={`accordeon-title${accordionInfo===1?"-selected":""}`} onClick={()=>{accordionInfo===1?setAccordionInfo(0):setAccordionInfo(1)}}>Tamaño<img src={accordionInfo===1?minus:plus}/></div>
                        <div className="accordeon-info" style={accordionInfo!==1?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-sizes">
                                {sizeInfo?.map((size, i)=>
                                <div id={`size${i}`} key={size.id}>
                                    <img style={selectedSize===i?{opacity:1}:{opacity:0.3}} src={sizeImg} alt={size.height} onClick={()=>{showModal('size')}}/>
                                    <span>{size.dimensions} cm</span>
                                    <span>$ {size.price}</span>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className={`accordeon-title${accordionInfo===2?"-selected":""}`} onClick={()=>{accordionInfo===2?setAccordionInfo(0):setAccordionInfo(2)}} hidden={!showExclusive?false:true}>Materiales<img src={accordionInfo===2?minus:plus}/>
                        </div>
                        <div className="accordeon-info" hidden={!showExclusive?false:true} style={accordionInfo!==2?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-material">
                                {materials?.map((material, i)=>
                                    <img style={selectedMaterial===i?{opacity:1, transform:'scale(1.2)'}:{opacity:0.3}} key={material.id} src={material.file.url} alt='material' onClick={()=>{showModal('material')}}/>
                                )}
                            </div>
                        </div>
                        <div className={`accordeon-title${accordionInfo===3?"-selected":""}`} onClick={()=>{accordionInfo===3?setAccordionInfo(0):setAccordionInfo(3)}}>Marco<img src={accordionInfo===3?minus:plus}/></div>
                        <div className="accordeon-info" style={accordionInfo!==3?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <div className="accordeon-frame">
                                {frames?.map((frame, i)=>
                                <div key={frame?.id}>
                                    <input type="radio" name="marco" checked={selectedFrame===i?true:false} onChange={()=>{showModal('frame')}}/>
                                    <label>{frame.name}</label>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className={`accordeon-title${accordionInfo===4?"-selected":""}`} onClick={()=>{accordionInfo===4?setAccordionInfo(0):setAccordionInfo(4)}}>Empaque<img src={accordionInfo===4?minus:plus}/></div>
                        <div className="accordeon-info" style={accordionInfo!==4?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-package">
                            {packing.map((pack, i)=>
                                <div key={pack.id}>
                                    <input type="radio" name="pack" checked={selectedPacking===i?true:false} onChange={()=>{setSelectedPacking(i);setData(i, "packing")}}/>
                                    <label>{pack.name}</label>
                                </div>
                            )}

                               
                            </div>
                        </div>
                    </div>
                    <div className="showProductPurchase__icons">
                        <div>
                            <span>Total: $ {pricePurchase}</span>
                        </div>
                        {!showLikeAPro&&
                            <div onClick={listenerWishList}>
                            <img src={wishList} alt="wishlist"/>
                            <span>Wish List</span>
                        </div>}
                        <div onClick={()=>console.log("finalizar compra")} >
                            <img src={compra} alt="compra"/>
                            <span>Finalizar Compra</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProductPurchase
