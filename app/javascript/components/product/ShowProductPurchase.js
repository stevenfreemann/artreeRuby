import React, { useEffect, useState } from 'react'
import size from '../../assets/static/images/size.png'
import minus from '../../assets/static/buttons/minus.png'
import plus from '../../assets/static/buttons/plus.png'
import whishList from '../../assets/static/buttons/perfilwish@2x.png'
import whishListActivo from '../../assets/static/buttons/perfilwishactivobtn@2x.png'
import compra from '../../assets/static/buttons/perfilcarrito@2x.png'
import compraActivo from '../../assets/static/buttons/perfilcarritoactivobtn@2x.png'
import acrilico from '../../assets/static/images/acrilico-section.png'
import canvas from '../../assets/static/images/canvas-section.png'
import papel from '../../assets/static/images/papel-section.png'
import marco from '../../assets/static/images/marcoSection.png'

const sizeInfo = [
    {   
        id:1,
        width:120,
        height:120,
        price:2000000,
        img:size,
    },
    {   
        id:2,
        width:130,
        height:130,
        price:2200000,
        img:size,
    },
    {   
        id:3,
        width:140,
        height:140,
        price:2400000,
        img:size,
    },
]

const materials = [acrilico,canvas,papel,marco,]

const ShowProductPurchase = (props) => {
    const [exclusive] = useState(props.exclusive)
    const [likeAPro] = useState(props.likeAPro)
    const [accordionInfo, setAccordionInfo] = useState(1)
    const [selectSize, setSelectSize] = useState(0)
    const [selectMaterial, setSelectMaterial] = useState(0)
    const [selectFrame, setSelectFrame] = useState(false)
    const [selectPaking, setSelectPaking] = useState(false)
    
    const navigate=(section)=>{
        const redirect={
            'cart':'/cart'
        }
        window.location = redirect[section] ? redirect[section]: '/'
      }

    return (
        <div className="showProductPurchase">
            <div className="showProductPurchase__progress">
                <hr></hr>
                <div>
                    <div className="item-selected"></div>
                    <span>Foto</span>
                </div>
                <div>
                    <div className={selectSize!==0?"item-selected":""}></div>
                    <span>Tamaño</span>
                </div>
                {!exclusive&&<div>
                    <div className={selectMaterial!==0?"item-selected":""}></div>
                    <span>Materiales</span>
                </div>}
                <div>
                    <div className={selectFrame===true?"item-selected":""}></div>
                    <span>Marco</span>
                </div>
                <div>
                    <div className={selectPaking===true?"item-selected":""}></div>
                    <span>Empaque</span>
                </div>
            </div>
            <div className="showProductPurchase__product">
                <div className="showProductPurchase__info">
                    <img src={props.data.img}/>
                    <div>
                        <span style={{fontWeight:"bold"}}>{props.data.nombre}: </span>
                        <span>{props.data.info}</span>
                    </div>
                </div>
                <div className="showProductPurchase__carac">
                    <div className="showProductPurchase__accordeon">
                        <div className={`accordeon-title${accordionInfo===1?"-selected":""}`} onClick={()=>setAccordionInfo(1)}>Tamaño<img src={accordionInfo===1?minus:plus}/></div>
                        {accordionInfo===1&&
                        <div className="accordeon-info">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-sizes">
                                {sizeInfo.map((size)=>
                                <div id={size.id} key={size.id}>
                                    <img style={selectSize===size.id?{opacity:1}:{opacity:0.3}} src={size.img} alt={size.height} onClick={()=>setSelectSize(size.id)}/>
                                    <span>{size.width}x{size.height} cm</span>
                                    <span>$ {size.price}</span>
                                </div>
                                )}
                            </div>
                        </div>}
                        {!exclusive&&<div className={`accordeon-title${accordionInfo===2?"-selected":""}`} onClick={()=>setAccordionInfo(2)}>Materiales<img src={accordionInfo===2?minus:plus}/></div>}
                        {accordionInfo===2&&
                        <div className="accordeon-info">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-material">
                                {materials.map((material)=>
                                    <img src={material} alt='material' onClick={()=>setSelectMaterial(1)}/>
                                )}
                            </div>
                        </div>}
                        <div className={`accordeon-title${accordionInfo===3?"-selected":""}`} onClick={()=>setAccordionInfo(3)}>Marco<img src={accordionInfo===3?minus:plus}/></div>
                        {accordionInfo===3&&
                        <div className="accordeon-info">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <div className="accordeon-frame">
                                <div>
                                    <input type="radio" name="marco" onChange={()=>setSelectFrame(true)}/>
                                    <label>Blanco</label>
                                </div>
                                <div>
                                    <input type="radio" name="marco" onChange={()=>setSelectFrame(true)}/>
                                    <label>Negro</label>
                                </div>
                            </div>
                        </div>}
                        <div className={`accordeon-title${accordionInfo===4?"-selected":""}`} onClick={()=>setAccordionInfo(4)}>Empaque<img src={accordionInfo===4?minus:plus}/></div>
                        {accordionInfo===4&&
                        <div className="accordeon-info">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        <div className="accordeon-package">
                            <div>
                                <input type="radio" name="marco" onChange={()=>setSelectPaking(true)}/>
                                <label>Normal</label>
                            </div>
                            <div>
                                <input type="radio" name="marco" onChange={()=>setSelectPaking(true)}/>
                                <label>Regalo</label>
                            </div>
                        </div>
                    </div>}

                    </div>
                    <div className="showProductPurchase__icons">
                        {!likeAPro&&<div>
                            <img src={whishList} alt="whishlist"/>
                            <span>Whish List</span>
                        </div>}
                        <div onClick={()=>navigate('cart')} >
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
