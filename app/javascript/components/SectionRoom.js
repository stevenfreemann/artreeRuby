import React from 'react'
import SeeButton from './SeeButton'

const listener = (dato) => {
    console.log(dato)
}
const SectionInfo = ({inverso, img, title, text, color}) => {
    const showInverso = () => {
        let inv = inverso ? "inverso" : ""
        return inv
    }
    return (
        <section className={`sectionRoom ${showInverso()}`} style={{ backgroundColor: color }}>
            <div className='sectionRoom__cont'>
                <div className={`sectionRoom__info ${showInverso()}`}>
                    <h2 className="sectionRoom__title">
                        {title}
                    </h2>
                    <p className='sectionRoom__text'>
                        {text}
                    </p>
                </div>
                <img className='sectionRoom__img' src={img} />
            </div>
        </section>
    )
}

export default SectionInfo
