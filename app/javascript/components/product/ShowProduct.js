import React, { useState } from 'react'
import galeria from '../../assets/static/buttons/galeria@2x.png'
import galeriaActivo from '../../assets/static/buttons/galeriaactivo@2x.png'
import espacio from '../../assets/static/buttons/entucasa@2x.png'
import espacioActivo from '../../assets/static/buttons/entucasaactivo@2x.png'
import compra from '../../assets/static/buttons/perfilcarrito@2x.png'
import compraActivo from '../../assets/static/buttons/perfilcarritoactivobtn@2x.png'
import whishList from '../../assets/static/buttons/perfilwish@2x.png'
import whishListActivo from '../../assets/static/buttons/perfilwishactivobtn@2x.png'
import imgGalery from '../../assets/static/images/galeria.png'
import imgSpaces from '../../assets/static/images/espacios.png'
import SectionProductModal from '../SectionProductModal'

const ShowProduct = ({data,setScreen}) => {
    const [sala, setSala] = useState("picture")
    return (
        <div className="showProduct" >
            <div className="showProduct__info">
                {sala==="picture"?
                    <div className="showProduct__picture"><img src={data.img}/></div>
                :sala==="spaces"&&
                <div className="showProduct__spaces">
                    <div>
                        <h3>De la galería...</h3>
                        <img src={imgGalery} alt="galeria"/>
                    </div>
                    <div>
                        <h3>...a tus espacios</h3>
                        <img src={imgSpaces} alt="espacios"/>
                    </div>
                </div>
                }
                <div className="showProduct__text">
                    <span style={{fontWeight:"bold"}}>{data.nombre}: </span>
                    <span>{data.info}</span>
                </div>
            </div>
            <div className="showProduct__menu">
                <div onClick={()=>setSala('picture')}>
                    <img src={galeria}/>
                    <span>Volver a la foto</span>
                </div>
                <div onClick={()=>setSala('spaces')}>
                    <img src={espacio}/>
                    <span>En tu espacio</span>
                </div>
                <div onClick={()=>setScreen('purchase')}>
                    <img src={compra}/>
                    <span>Inicia tu compra</span>
                </div>
                <div>
                    <img src={whishList}/>
                    <span>wish List</span>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct
