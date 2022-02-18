import React, { useEffect, useState } from 'react'
import galeria from '../../assets/static/buttons/galeria@2x.png'
import galeriaActivo from '../../assets/static/buttons/galeriaactivo@2x.png'
import espacio from '../../assets/static/buttons/entucasa@2x.png'
import espacioActivo from '../../assets/static/buttons/entucasaactivo@2x.png'
import compra from '../../assets/static/buttons/perfilcarrito@2x.png'
import compraActivo from '../../assets/static/buttons/perfilcarritoactivobtn@2x.png'
import whishList from '../../assets/static/buttons/perfilwish@2x.png'
import whishListActivo from '../../assets/static/buttons/perfilwishactivobtn@2x.png'
import imgGalery from '../../assets/static/images/galeria.jpg'
import imgSpaces from '../../assets/static/images/espacios.jpg'
import SectionProductModal from '../SectionProductModal'

const ShowProduct = ({photo,setScreen, room}) => {
    const [sala, setSala] = useState("picture")

    useEffect(() => {
        let picture1 = document.getElementsByClassName("showProduct__spaces-galeryPt")[0] || document.getElementsByClassName("showProduct__spaces-galeryPt-height")[0]
        let picture2 = document.getElementsByClassName("showProduct__spaces-spacePt")[0] || document.getElementsByClassName("showProduct__spaces-spacePt-height")[0]
        if(picture2){
            let width = picture1.width
            let height = picture1.height
            if(width/height<1){
                picture1.classList.replace('showProduct__spaces-galeryPt','showProduct__spaces-galeryPt-height')
                picture2.classList.replace('showProduct__spaces-spacePt','showProduct__spaces-spacePt-height')
            }else{
                picture1.classList.replace('showProduct__spaces-galeryPt-height','showProduct__spaces-galeryPt')
                picture2.classList.replace('showProduct__spaces-spacePt-height','showProduct__spaces-spacePt')
            }
        }
    }, [photo,sala])

    return (
        <div className="showProduct" >
            <div className="showProduct__info">
                {photo&&sala==="picture"?
                    <div className="showProduct__picture"><img src={photo.file.url}/></div>
                :sala==="spaces"&&
                <div className="showProduct__spaces">
                    <div>
                        <h3>De la galería...</h3>
                        <div className="showProduct__spaces-galeryBg">
                            <img src={imgGalery} alt="galeriaBg"/>
                            <img className="showProduct__spaces-galeryPt" src={photo.file.url} alt="galeriaPt"/>
                            <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">pikisuperstar</a>
                        </div>
                    </div>
                    <div>
                        <h3>...a tus espacios</h3>
                        <div className="showProduct__spaces-spaceBg">
                            <img src={room.space_vertical.url} alt="espacios"/>
                            <img className="showProduct__spaces-spacePt" src={photo.file.url} alt="galeriaPt"/>
                            <a href="https://www.freepik.es/psd/maqueta">alexandercho</a>
                        </div>
                    </div>
                </div>
                }
                 {photo?
                <div className="showProduct__text">
                    <span style={{fontWeight:"bold"}}>{photo.name}: </span>
                    <span>${photo.base_price} COP</span>
                </div>
                 :<span> <h3> Galeria vacia </h3> </span>}
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
                <div onClick={()=>setScreen('purchase')}>
                    <img src={whishList}/>
                    <span>wish List</span>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct
