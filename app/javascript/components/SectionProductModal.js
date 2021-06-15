import React, { useEffect, useRef, useState } from 'react'
import SeeButton from './SeeButton'
import cerrar from '../assets/static/buttons/boton cerrar.png'

const SectionProductModal = ({showModal,info,dataModal,selectSize,setSelectSize,selectMaterial,setSelectMaterial,selectFrame,setSelectFrame,listener}) => {
    const [showInfo] = useState(info)
    const modalRef = useRef({})
    const inputSizeRadioRef = useRef({})
    const selectSizeRef = useRef({})
    const inputMaterialRadioRef = useRef({})
    const selectMaterialRef = useRef({})
    const selectFrameRef = useRef({})

    const overflow = ()=>{
        if (showModal) {
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
            setSelectSize(parseInt(value))
            inputSizeRadioRef.current.children[(value)-1].children[0].checked=true
        }
    }
    const checkedMaterial=(value)=>{
        if (inputSizeRadioRef) {
            setSelectMaterial(parseInt(value))
            inputMaterialRadioRef.current.children[(value)-1].children[0].checked=true
        }
    }
    console.log('Dentro',selectFrame)
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
                    <select className='sectionProductModal__size-select2' ref={selectSizeRef} value={selectSize} onChange={()=>{checkedSize(selectSizeRef.current.value)}}>
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
                    <img className='sectionProductModal__material-show' src={selectMaterial?dataModal[(selectMaterial)-1].backShow:null}/>
                    <div className='sectionProductModal__material-select1' ref={inputMaterialRadioRef}>
                        {dataModal.map((material)=>
                        <label className='sectionProductModal__material-select1-item' key={material.id}>
                            <input type='radio' name='material' value={material.id} defaultChecked={selectMaterial===material.id?true:false} ></input>
                            <img onClick={()=>{setSelectMaterial(material.id)}} src={material.img}/>
                        </label>
                        )}
                    </div>
                    <select className='sectionProductModal__material-select2' ref={selectMaterialRef} value={selectMaterial} onChange={()=>{checkedMaterial(parseInt(selectMaterialRef.current.value))}}>
                        {/* <option value='0' disabled></option> */}
                        {dataModal.map((material)=>
                        <option key={material.id} value={material.id} >{material.type} ${material.price}</option>)}
                    </select>
                    <SeeButton textBtn={'Añadir'} style={{border:'2px solid black', width:'12.8rem'}}/>
                </div>}
                {/* Modal Frame*/}
                {showInfo===3&&
                <div className='sectionProductModal__frame'>
                    <img className='sectionProductModal__frame-show' src={dataModal[(selectFrame)-1].backShow}/>
                        <select className='sectionProductModal__frame-select' ref={selectFrameRef} value={selectFrame} onChange={()=>{setSelectFrame(parseInt(selectFrameRef.current.value))}}>
                        {dataModal.map((frame)=>
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