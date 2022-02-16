import React from 'react'
import SeeButton from './SeeButton'

const listener = (dato) => {
    console.log(dato)
}
const SectionInfo = ({inverso, img, title, photo, text, subtitle, color,listener}) => {
 
    const showInverso = () => {
        let inv = inverso ? "room_inverso" : ""
        return inv
    }
    return (
        <section className={`sectionRoom ${showInverso()}`} style={{ backgroundColor: color }}>
            <div className='sectionRoom__cont'>
                <div className={`sectionRoom__info ${showInverso()}`}>
                    <h2 className="sectionRoom__title">
                        {title}
                    </h2>
                    {subtitle&&<span className="sectionRoom__subtitle">
                        {subtitle}
                    </span>}
                    <p className='sectionRoom__text'>
                    {text}
                    </p>
                </div>
                <img className='sectionRoom__img' src={photo.url} onClick={listener}/>
            </div>
        </section>
    )
}

export default SectionInfo
