import React, { useEffect, useRef, useState } from 'react'
import SeeButton from './SeeButton'
import cerrar from '../assets/static/buttons/boton cerrar.png'

import size1 from '../assets/static/images/size1.png'
import size2 from '../assets/static/images/size2.png'
import size3 from '../assets/static/images/size3.png'

const imagesSizes = {Grande: size3, Mediano: size2, Pequeño: size1}

const SectionProductModal = ({ setData, modal, setModal, info, dataModal, selectedSize, setSelectedSize,  selectedMaterial, setSelectedMaterial, selectedFrame, setSelectedFrame }) => {
    const [showInfo] = useState(info)
    const modalRef = useRef({})
    const inputSizeRadioRef = useRef({})
    const selectSizeRef = useRef({})
    const inputMaterialRadioRef = useRef({})
    const selectMaterialRef = useRef({})
    const selectFrameRef = useRef({})

    // console.log("price", price)
    // console.log('dataModal', dataModal)

    useEffect(() => {
        if (modal) {
            document.body.style.overflow='hidden'
            document.documentElement.scrollTop = 0;
        }else{
            document.body.style.overflow='visible'
        }
    }, [modal])

    const withoutItem = ()=>{
        if (showInfo===1){
            setSelectedSize("")
        }
        if (showInfo===2){
            setSelectedMaterial("")
        }
        if (showInfo===3){
            setSelectedFrame("")
        }
    }
    
    useEffect(() => {
        const clickEvent=()=>{
            document.body.style.overflow='visible'
            withoutItem()
            setModal(!modal)
        }
        const keyEsc=(e)=>{
            if (e.key=="Escape") {
                document.body.style.overflow='visible'
                withoutItem()
                setModal(!modal)
            }
        }
        if (modal) {
            modalRef.current.addEventListener('click',clickEvent)
            document.addEventListener('keyup', keyEsc)
        }
        return () => {
            if(!modal){
                modalRef.current.removeEventListener("click", clickEvent)
                document.removeEventListener('keyup',keyEsc)}
        }
    }, [modal])

    const checkedSize=(e)=>{
        let value = e.target.value
        if (inputSizeRadioRef) {
            setSelectedSize(parseInt(value))
            inputSizeRadioRef.current.children[value].children[0].checked=true
        }
    }
    const checkedMaterial=(e)=>{
        let value = e.target.value
        if (inputSizeRadioRef) {
            setSelectedMaterial(parseInt(value))
            inputMaterialRadioRef.current.children[value].children[0].checked=true
        }
    }
    const checkedFrame=(e)=>{
        let value = e.target.value
        setSelectedFrame(parseInt(value))
    }

    const selectItem = ( i, tag )=>{
        setData(i, tag)
        document.body.style.overflow='visible'
        setModal(!modal)
    }

    return (
        <div className='sectionProductModal' hidden={modal?false:true}>
            <div className='sectionProductModal__backGround' ref={modalRef}>
            </div>
            <div className='sectionProductModal__cont'>
                <img className='sectionProductModal__close' src={cerrar} alt='X' onClick={()=> {setModal(!modal);withoutItem()}}/>
                {showInfo===1&&
                <div className='sectionProductModal__size'>
                    <div className='sectionProductModal__size-select1' ref={inputSizeRadioRef}>
                        {dataModal?.map((size, i)=>
                        <label className='sectionProductModal__size-select1-item' key={size.id}>
                            <input type="radio" name="size" value={i} defaultChecked={selectedSize===i?true:false}></input>
                            <div onClick={()=>{setSelectedSize(i)}} >
                                <img src={imagesSizes[size.name]}/>
                                <span>{size.dimensions} - {size.name}</span>
                            </div>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__size-select2' ref={selectSizeRef} value={selectedSize} onChange={(e)=>{checkedSize(e)}}>
                        <option value='' disabled>Seleccione Tamaño</option>
                        {dataModal.map((size, i)=>
                        <option key={size.id} value={i} >{size.dimensions}---------------${size.price}</option>
                        )}
                    </select>
                    <div className='sectionProductModal__size-button'>
                        <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}} listener={()=>selectItem(selectedSize, "size")}/>
                    </div>
                </div>}
                {/* Modal Material*/}
                {showInfo===2&&
                <div className='sectionProductModal__material'>
                    <img className='sectionProductModal__material-show' src={dataModal[selectedMaterial]?.file.url}/>
                    <div className='sectionProductModal__material-select1' ref={inputMaterialRadioRef}>
                        {dataModal?.map((material, i)=>
                        <label className='sectionProductModal__material-select1-item' key={material.id}>
                            <input type='radio' name='material' value={i} defaultChecked={selectedMaterial===i?true:false} ></input>
                            <img onClick={()=>{setSelectedMaterial(i)}} src={material.file.url}/>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__material-select2' ref={selectMaterialRef} value={selectedMaterial} onChange={(e)=>{checkedMaterial(e)}}>
                        <option value='' disabled>Seleccione Material</option>
                        {dataModal.map((material, i)=>
                        <option key={material.id} value={i} >{material.name} $ {material.price}</option>)}
                    </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}} listener={()=>selectItem(selectedMaterial, "material")}/>
                </div>}
                {/* Modal Frame*/}
                {showInfo===3&&
                <div className='sectionProductModal__frame'>
                    <img className='sectionProductModal__frame-show' src={dataModal[selectedFrame]?.file.url}/>
                        <select className='sectionProductModal__frame-select' ref={selectFrameRef} value={selectedFrame} onChange={(e)=>{checkedFrame(e)}}>
                        <option value='' disabled>Seleccione Marco</option>
                        {dataModal.map((frame, i)=>
                        <option key={frame.id} value={i} >{frame.name} $ {frame.price}</option>
                        )}
                        </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}} listener={()=>selectItem(selectedFrame, "frame")}/>
                </div>}
            </div>
        </div>
    )
}

export default SectionProductModal