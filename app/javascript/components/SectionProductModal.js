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

const sizeInfo = [
    {   
        id:1,
        width:120,
        height:120,
        price:2000000,
        img:size1
    },
    {   
        id:2,
        width:130,
        height:130,
        price:2200000,
        img:size2
    },
    {   
        id:3,
        width:140,
        height:140,
        price:2400000,
        img:size3
    },
]

const materials = [
    {
        id:1,
        type:'papel1',
        img:acrilico,
        price:1000000,
        backShow:acrilico,
    },
    {
        id:2,
        type:'papel2',
        img:canvas,
        price:2000000,
        backShow:canvas,
    },
    {
        id:3,
        type:'papel3',
        img:papel,
        price:3000000,
        backShow:papel,
    },
    {
        id:4,
        type:'papel4',
        img:marco,
        price:4000000,
        backShow:marco,
    },
]

const frames =[
    {
        id:1,
        type:'Blanco, Marfil',
        backShow:marco2,
        price:1000000
    },
    {
        id:2,
        type:'Negro, Marfil',
        backShow:marco3,
        price:2000000
    },
]

const SectionProductModal = ({show}) => {
    const [showModal, setShowModal] = useState(show&&false)
    const [showInfo, setShowInfo] = useState(1)
    const modalRef = useRef({})

    useEffect(() => {
        const clickEvent=()=>{
            setShowModal(!showModal)
        }
        const keyEsc=(e)=>{
            if (e.key=="Escape") {
                setShowModal(!showModal)
            }
        }
        if (!showModal) {
            console.log(modalRef.current)
            modalRef.current.addEventListener('click',clickEvent)
            document.addEventListener('keyup', keyEsc)
        }
        return () => {
            modalRef.current.removeEventListener("click", clickEvent)
            document.removeEventListener('keyup',keyEsc)
        }
    }, [showModal])

    return (
        <div className='sectionProductModal' hidden={showModal?true:false}>
            <div className='sectionProductModal__back' ref={modalRef}></div>
            <div className='sectionProductModal__cont'>
                <img className='sectionProductModal__close' src={cerrar} alt='X'/>
                {showInfo===1&&
                <div className='sectionProductModal__size'>
                    <div className='sectionProductModal__size-select1'>
                        {sizeInfo.map((size)=>
                        <div className='sectionProductModal__size-select1-item' key={size.id}>
                            <input type="radio" value={size.id}></input>
                            <div>
                                <img src={size.img}/>
                                <span>{size.width}x{size.height}</span>
                            </div>
                        </div>
                        )}
                    </div>
                    <select className='sectionProductModal__size-select2'>
                        {sizeInfo.map((size)=>
                        <option align='justify' key={size.id}>{size.width}x{size.height} ${size.price}</option>)}
                    </select>
                    <SeeButton textBtn={'Añadir'} />
                </div>}
                {showInfo===2&&
                <div className='sectionProductModal__material'>
                    <img className='sectionProductModal__material-show' src={materials[0].backShow}/>
                    <div className='sectionProductModal__material-select1'>
                        {materials.map((material)=>
                        <div key={material.id}>
                            <img src={material.img}/>
                            <input type='radio' value={material.id}></input>
                        </div>
                        )}
                    </div>
                    <select className='sectionProductModal__material-select2'>
                        {materials.map((material)=>
                        <option><span>{material.type}</span><span>${material.price}</span></option>)}
                    </select>
                    <SeeButton textBtn={'Añadir'}/>
                </div>}
                {showInfo===2&&
                <div className='sectionProductModal__frame'>
                    <img className='sectionProductModal__frame-show' src={frames[0].backShow}/>
                    <select className='sectionProductModal__frame-select'>
                    {frames.map((frame)=>
                    <option key={frame.id}><span>{frame.type}</span><span>${frame.price}</span></option>
                    )}
                    </select>
                    <SeeButton textBtn={'Añadir'}/>
                </div>}
            </div>
        </div>
    )
}

export default SectionProductModal