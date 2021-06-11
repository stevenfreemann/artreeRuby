import React, { useEffect, useRef, useState } from 'react'
import SeeButton from './SeeButton'
import cerrar from '../assets/static/buttons/boton cerrar.png'

import acrilico from '../assets/static/images/acrilico-section.png'
import canvas from '../assets/static/images/canvas-section.png'
import papel from '../assets/static/images/papel-section.png'
import marco from '../assets/static/images/marcoSection.png'
import marco2 from '../assets/static/images/marcos2.png'
import marco3 from '../assets/static/images/marcos3.png'
import size1 from '../assets/static/images/size1.png'
import size2 from '../assets/static/images/size2.png'
import size3 from '../assets/static/images/size3.png'

// const sizeInfo = [
//     {   
//         id:1,
//         width:120,
//         height:120,
//         price:2000000,
//         img:size1
//     },
//     {   
//         id:2,
//         width:130,
//         height:130,
//         price:2200000,
//         img:size2
//     },
//     {   
//         id:3,
//         width:140,
//         height:140,
//         price:2400000,
//         img:size3
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

const SectionProductModal = ({showModal,info,dataModal,listener}) => {
    const [showInfo] = useState(info)
    const [selectSize, setSelectSize] = useState(1)
    const [selectMaterial, setSelectMaterial] = useState(1)
    const [selectFrame, setSelectFrame] = useState(1)
    const modalRef = useRef({})
    const inputSizeRadioRef = useRef({})
    const selectSizeRef = useRef({})
    const inputMaterialRadioRef = useRef({})
    const selectMaterialRef = useRef({})
    const selectFrameRef = useRef({})

    const overflow = ()=>{
        if (!showModal) {
            document.body.style.overflow='hidden'
            document.documentElement.scrollTop = 0;
        }else{
            document.body.style.overflow='visible'
        }
    }
    overflow()

    useEffect(() => {
        const clickEvent=()=>{
            listener(!showModal)
        }
        const keyEsc=(e)=>{
            if (e.key=="Escape") {
                listener(!showModal)
            }
        }
        if (showModal) {
            modalRef.current.addEventListener('click',clickEvent)
            document.addEventListener('keyup', keyEsc)
        }
        return () => {
            modalRef.current.removeEventListener("click", clickEvent)
            document.removeEventListener('keyup',keyEsc)
        }
    }, [showModal])

    const checkedSize=(value)=>{
        if (inputSizeRadioRef) {
            setSelectSize(selectSizeRef.current.value)
            inputSizeRadioRef.current.children[value].children[0].checked=true
        }
    }
    const checkedMaterial=(value)=>{
        if (inputSizeRadioRef) {
            setSelectMaterial(selectMaterialRef.current.value)
            inputMaterialRadioRef.current.children[value].children[0].checked=true
        }
    }

    console.log('Modal',showModal)
    return (
        <div className='sectionProductModal' hidden={showModal?false:true}>
            <div className='sectionProductModal__backGround' ref={modalRef}>
            </div>
            <div className='sectionProductModal__cont'>
                <img className='sectionProductModal__close' src={cerrar} alt='X' onClick={()=> {listener(!showModal)}}/>
                {showInfo===1&&
                <div className='sectionProductModal__size'>
                    <div className='sectionProductModal__size-select1' ref={inputSizeRadioRef}>
                        {dataModal.map((size)=>
                        <label className='sectionProductModal__size-select1-item' key={size.id}>
                            <input type="radio" name="size" value={size.id} defaultChecked={selectSize===size.id?true:false}></input>
                            <div onClick={()=>{setSelectSize(size.id)}} >
                                <img src={size.img}/>
                                <span>{size.width}x{size.height}</span>
                            </div>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__size-select2' ref={selectSizeRef} value={selectSize} onChange={()=>{checkedSize(selectSizeRef.current.value-1)}}>
                        {/* <option value='0' disabled></option> */}
                        {dataModal.map((size)=>
                        <option key={size.id} value={size.id} >{size.width}x{size.height} ${size.price}</option>
                        )}
                    </select>
                    <div className='sectionProductModal__size-button'>
                        <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}}/>
                    </div>
                </div>}
                {/* Modal Material*/}
                {showInfo===2&&
                <div className='sectionProductModal__material'>
                    <img className='sectionProductModal__material-show' src={selectMaterial?materials[(selectMaterial)-1].backShow:null}/>
                    <div className='sectionProductModal__material-select1' ref={inputMaterialRadioRef}>
                        {materials.map((material)=>
                        <label className='sectionProductModal__material-select1-item' key={material.id}>
                            <input type='radio' name='material' value={material.id} defaultChecked={selectMaterial===material.id?true:false} ></input>
                            <img onClick={()=>{setSelectMaterial(material.id)}} src={material.img}/>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__material-select2' ref={selectMaterialRef} value={selectMaterial} onChange={()=>{checkedMaterial(selectMaterialRef.current.value-1)}}>
                        {/* <option value='0' disabled></option> */}
                        {materials.map((material)=>
                        <option key={material.id} value={material.id} >{material.type} ${material.price}</option>)}
                    </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}}/>
                </div>}
                {/* Modal Frame*/}
                {showInfo===3&&
                <div className='sectionProductModal__frame'>
                    <img className='sectionProductModal__frame-show' src={frames[(selectFrame)-1].backShow}/>
                    <select className='sectionProductModal__frame-select' ref={selectFrameRef} value={selectFrame} onChange={()=>{setSelectFrame(selectFrameRef.current.value)}}>
                    {frames.map((frame)=>
                    <option key={frame.id} value={frame.id} >{frame.type} ${frame.price}</option>
                    )}
                    </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}}/>
                </div>}
            </div>
        </div>
    )
}

export default SectionProductModal