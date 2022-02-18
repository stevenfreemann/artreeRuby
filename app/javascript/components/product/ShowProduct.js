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

const ShowProduct = ({photo, setScreen , room}) => {
    const [sala, setSala] = useState("picture")
    const [horizontal, setHorizontal] = useState(false)

    useEffect(() => {
        let picture1 = document.getElementsByClassName("showProduct__spacesGaleryPt")[0] || document.getElementsByClassName("showProduct__spacesGaleryPt--height")[0]
        let picture2 = document.getElementsByClassName("showProduct__spacesSpacePt")[0] || document.getElementsByClassName("showProduct__spacesSpacePt--height")[0]
        if(picture2){
            let width = picture1.width
            let height = picture1.height
            if(width/height<1){
                picture1.classList.replace('showProduct__spacesGaleryPt','showProduct__spacesGaleryPt--height')
                picture2.classList.replace('showProduct__spacesSpacePt','showProduct__spacesSpacePt--height')
                setHorizontal(true)
            }else{
                picture1.classList.replace('showProduct__spacesGaleryPt--height','showProduct__spacesGaleryPt')
                picture2.classList.replace('showProduct__spacesSpacePt--height','showProduct__spacesSpacePt')
                setHorizontal(false)
            }
        }
    }, [photo, sala])

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
                            <img className="showProduct__spacesGaleryPt" src={photo.file.url} alt="galeriaPt"/>
                            <span>pikisuperstar</span>
                        </div>
                    </div>
                    <div>
                        <h3>...a tus espacios</h3>
                        <div className="showProduct__spaces-spaceBg">
                            <img src={room.space_vertical.url} alt="espacios"/>
                            <img className="showProduct__spacesSpacePt" src={photo.file.url} alt="galeriaPt"/>
                        </div>
                    </div>
                </div>
                }
                {photo?
                <div className="showProduct__text">
                    <span style={{fontWeight:"bold"}}>{photo.name}: </span>
                    <span>$ {photo.base_price} COP</span>
                </div>
                :
                <span> <h3> Galeria vacia </h3> </span>
                }
            </div>
            <div className="showProduct__menu">
                <div onClick={()=>setSala('picture')}>
                    <img src={sala === "picture" ? galeriaActivo : galeria }/>
                    <span>Volver a la foto</span>
                </div>
                <div onClick={()=>setSala('spaces')}>
                    <img src={sala === "spaces" ? espacioActivo : espacio}/>
                    <span>En tu espacio</span>
                </div>
                <div onClick={sala === "spaces" ? ()=>setScreen('purchase') : ()=>{alert("Visita en tu espacio para continuar")}}>
                    <img src={sala === "spaces" ? compraActivo : compra}/>
                    <span>Inicia tu compra</span>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct
