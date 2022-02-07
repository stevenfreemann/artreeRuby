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


// const sizeInfo = [
//     {   
//         id:1,
//         width:120,
//         height:120,
//         price:2000000,
//         img:size1,
//     },
//     {   
//         id:2,
//         width:130,
//         height:130,
//         price:2200000,
//         img:size2,
//     },
//     {   
//         id:3,
//         width:140,
//         height:140,
//         price:2400000,
//         img:size3,
//     },
// ]

// const materials = [
//     {
//         id:1,
//         type:'papel1',
//         img:acrilico,
//         price:1000000,
//         backShow:acrilico,
//     },
//     {
//         id:2,
//         type:'papel2',
//         img:canvas,
//         price:2000000,
//         backShow:canvas,
//     },
//     {
//         id:3,
//         type:'papel3',
//         img:papel,
//         price:3000000,
//         backShow:papel,
//     },
//     {
//         id:4,
//         type:'papel4',
//         img:marco,
//         price:4000000,
//         backShow:marco,
//     },
// ]

// const frames =[
//     {
//         id:1,
//         type:'Blanco Marfil',
//         backShow:marco2,
//         price:1000000
//     },
//     {
//         id:2,
//         type:'Negro Marfil',
//         backShow:marco3,
//         price:2000000
//     },
// ]

const ShowProductPurchase = ({exclusive, likeAPro, data, clickWishItem, sizeInfo, materials, frames}) => {
    const [showExclusive] = useState(exclusive)
    const [showLikeAPro] = useState(likeAPro)
    const [accordionInfo, setAccordionInfo] = useState(0)
    const [selectSize, setSelectSize] = useState(0)
    const [selectMaterial, setSelectMaterial] = useState(0)
    const [selectFrame, setSelectFrame] = useState(0)
    const [selectPacking, setSelectPacking] = useState(0)
    const [modal, setModal] = useState(false)
    const modalDataRef = useRef({})
    const modalInfoRef = useRef({})
    const modalProductRef = useRef({})

    const navigate=(section)=>{
        if(showExclusive){
            if (selectSize&&selectFrame&&selectPacking) {
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
            if (selectSize&&selectMaterial&&selectFrame&&selectPacking) {
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

    useEffect(() => {
        let info = document.getElementsByClassName('accordeon-info')
        for (let i = 0; i < info.length; i++) {
            if(accordionInfo===(i+1)){
                let div = document.getElementsByClassName('accordeon-info')[i]
                div.style.height=`${div.scrollHeight}px`}
        }
    }, [accordionInfo])

    const showModal = (tag,product)=>{
        if (tag==='size') {
            modalDataRef.current=sizeInfo
            modalInfoRef.current=1
            modalProductRef.current=product
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
            {modal&&<SectionProductModal showModal={modal} info={modalInfoRef.current} dataModal={modalDataRef.current} selectSize={selectSize} setSelectSize={setSelectSize} selectMaterial={selectMaterial} setSelectMaterial={setSelectMaterial} selectFrame={selectFrame} setSelectFrame={setSelectFrame} listener={(showModal)=>{setModal(showModal)}}/>}
            <div className="showProductPurchase__progress">
                <hr></hr>
                <div className="showProductPurchase__item">
                    <div className="item-selected"></div>
                    <span>Foto</span>
                </div>
                <div className="showProductPurchase__item">
                    <div className={selectSize!==0?"item-selected":""}></div>
                    <span>Tamaño</span>
                </div>
                {!showExclusive&&
                <div className="showProductPurchase__item">
                    <div className={selectMaterial!==0?"item-selected":""}></div>
                    <span>Materiales</span>
                </div>}
                <div className="showProductPurchase__item">
                    <div className={selectFrame!==0?"item-selected":""}></div>
                    <span>Marco</span>
                </div>
                <div className="showProductPurchase__item">
                    <div className={selectPacking!==0?"item-selected":""}></div>
                    <span>Empaque</span>
                </div>
            </div>
            <div className="showProductPurchase__product">
                <div className="showProductPurchase__info">
                    <img src={data.file.url} alt={data.name}/>
                    <div>
                        <span style={{fontWeight:"bold"}}>{data.name}: </span>
                        <span>{data.info}</span>
                    </div>
                </div>
                <div className="showProductPurchase__carac">
                    <div className="showProductPurchase__accordeon">
                        <div className={`accordeon-title${accordionInfo===1?"-selected":""}`} onClick={()=>{accordionInfo===1?setAccordionInfo(0):setAccordionInfo(1)}}>Tamaño<img src={accordionInfo===1?minus:plus}/></div>
                        <div className="accordeon-info" style={accordionInfo!==1?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-sizes">
                                {sizeInfo.map((size)=>
                                <div id={`size${size.id}`} key={size.id}>
                                    <img style={selectSize===size.id?{opacity:1}:{opacity:0.3}} src={sizeImg} alt={size.height} onClick={()=>{setSelectSize(size.id);showModal('size',size.id)}}/>
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
                                {materials.map((material)=>
                                    <img style={selectMaterial===material.id?{opacity:1, transform:'scale(1.2)'}:{opacity:0.3}} key={material.id} src={material.img} alt='material' onClick={()=>{showModal('material');setSelectMaterial(material.id)}}/>
                                )}
                            </div>
                        </div>
                        <div className={`accordeon-title${accordionInfo===3?"-selected":""}`} onClick={()=>{accordionInfo===3?setAccordionInfo(0):setAccordionInfo(3)}}>Marco<img src={accordionInfo===3?minus:plus}/></div>
                        <div className="accordeon-info" style={accordionInfo!==3?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-frame">
                                {frames.map((frame)=>
                                <div key={frame.id}>
                                    <input type="radio" name="marco" checked={selectFrame===frame.id?true:false} onChange={()=>{showModal('frame'); setSelectFrame(frame.id)}}/>
                                    <label>{frame.name}</label>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className={`accordeon-title${accordionInfo===4?"-selected":""}`} onClick={()=>{accordionInfo===4?setAccordionInfo(0):setAccordionInfo(4)}}>Empaque<img src={accordionInfo===4?minus:plus}/></div>
                        <div className="accordeon-info" style={accordionInfo!==4?{height:'0'}:{}}>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-package">
                                <div>
                                    <input type="radio" name="marco" onChange={()=>setSelectPacking(1)}/>
                                    <label>Normal</label>
                                </div>
                                <div>
                                    <input type="radio" name="marco" onChange={()=>setSelectPacking(2)}/>
                                    <label>Regalo</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showProductPurchase__icons">
                        {!showLikeAPro&&<div onClick={()=>clickWishItem(selectSize, selectFrame, s)}>
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
