import React, { useEffect, useRef, useState } from 'react'
import SeeButton from './SeeButton'
import cerrar from '../assets/static/buttons/boton cerrar.png'

import size1 from '../assets/static/images/size1.png'
import size2 from '../assets/static/images/size2.png'
import size3 from '../assets/static/images/size3.png'

const imagesSizes = {Grande: size3, Mediano: size2, Pequeño: size1}

const SectionProductModal = ({showModal,info, price, dataModal,selectSize,setSelectSize,selectMaterial,setSelectMaterial,selectFrame,setSelectFrame,listener}) => {
    const [selectPrice, setSelectPrice] = useState(price)
    const [showInfo] = useState(info)
    const modalRef = useRef({})
    const inputSizeRadioRef = useRef({})
    const selectSizeRef = useRef({})
    const inputMaterialRadioRef = useRef({})
    const selectMaterialRef = useRef({})
    const selectFrameRef = useRef({})

    // console.log("price", price)
    console.log('dataModal', dataModal)

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow='hidden'
            document.documentElement.scrollTop = 0;
        }else{
            document.body.style.overflow='visible'
        }
    }, [showModal])

    const withoutItem = ()=>{
        if (showInfo===1){
            setSelectSize("")
        }
        if (showInfo===2){
            setSelectMaterial("")
        }
        if (showInfo===3){
            setSelectFrame("")
        }
    }
    
    useEffect(() => {
        const clickEvent=()=>{
            document.body.style.overflow='visible'
            withoutItem()
            listener(!showModal)
        }
        const keyEsc=(e)=>{
            if (e.key=="Escape") {
                document.body.style.overflow='visible'
                withoutItem()
                listener(!showModal)
            }
        }
        if (showModal) {
            modalRef.current.addEventListener('click',clickEvent)
            document.addEventListener('keyup', keyEsc)
        }
        return () => {
            if(!showModal){
                modalRef.current.removeEventListener("click", clickEvent)
                document.removeEventListener('keyup',keyEsc)}
        }
    }, [showModal])

    const checkedSize=(e)=>{
        let value = e.target.value
        if (inputSizeRadioRef) {
            setSelectSize(value)
            inputSizeRadioRef.current.children[value].children[0].checked=true
        }
    }
    const checkedMaterial=(e)=>{
        let value = e.target.value
        if (inputSizeRadioRef) {
            console.log(value)
            setSelectMaterial(value)
            inputMaterialRadioRef.current.children[value].children[0].checked=true
        }
    }
    const checkedFrame=(e)=>{
        let value = e.target.value
        console.log(value)
        setSelectFrame(value)
    }
    return (
        <div className='sectionProductModal' hidden={showModal?false:true}>
            <div className='sectionProductModal__backGround' ref={modalRef}>
            </div>
            <div className='sectionProductModal__cont'>
                <img className='sectionProductModal__close' src={cerrar} alt='X' onClick={()=> {listener(!showModal);withoutItem()}}/>
                {showInfo===1&&
                <div className='sectionProductModal__size'>
                    <div className='sectionProductModal__size-select1' ref={inputSizeRadioRef}>
                        {dataModal?.map((size, i)=>
                        <label className='sectionProductModal__size-select1-item' key={size.id}>
                            <input type="radio" name="size" value={i} defaultChecked={selectSize===i?true:false}></input>
                            <div onClick={()=>{setSelectSize(size.id); setSelectPrice(current_price); console.log("current", current_price)}} >
                                <img src={imagesSizes[size.name]}/>
                                <span>{size.dimensions} - {size.name}</span>
                            </div>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__size-select2' ref={selectSizeRef} value={selectSize} onChange={(e)=>{checkedSize(e)}}>
                        <option value='' disabled>Seleccione Tamaño</option>
                        {dataModal.map((size, i)=>
                        <option key={size.id} value={i} >{size.dimensions}---------------${size.price}</option>
                        )}
                    </select>
                    <div className='sectionProductModal__size-button'>
                        <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}} listener={listener}/>
                    </div>
                </div>}
                {/* Modal Material*/}
                {showInfo===2&&
                <div className='sectionProductModal__material'>
                    <img className='sectionProductModal__material-show' src={dataModal[selectMaterial]?.file.url}/>
                    <div className='sectionProductModal__material-select1' ref={inputMaterialRadioRef}>
                        {dataModal?.map((material, i)=>
                        <label className='sectionProductModal__material-select1-item' key={material.id}>
                            <input type='radio' name='material' value={i} defaultChecked={selectMaterial===i?true:false} ></input>
                            <img onClick={()=>{setSelectMaterial(i)}} src={material.file.url}/>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__material-select2' ref={selectMaterialRef} value={selectMaterial} onChange={(e)=>{checkedMaterial(e)}}>
                        <option value='' disabled>Seleccione Material</option>
                        {dataModal.map((material, i)=>
                        <option key={material.id} value={i} >{material.name} $ {material.price}</option>)}
                    </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}} listener={listener}/>
                </div>}
                {/* Modal Frame*/}
                {showInfo===3&&
                <div className='sectionProductModal__frame'>
                    <img className='sectionProductModal__frame-show' src={dataModal[selectFrame]?.file.url}/>
                        <select className='sectionProductModal__frame-select' ref={selectFrameRef} value={selectFrame} onChange={(e)=>{checkedFrame(e)}}>
                        <option value='' disabled>Seleccione Marco</option>
                        {dataModal.map((frame, i)=>
                        <option key={frame.id} value={i} >{frame.name} ${frame.price}</option>
                        )}
                        </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}} listener={listener}/>
                </div>}
            </div>
        </div>
    )
}

export default SectionProductModal