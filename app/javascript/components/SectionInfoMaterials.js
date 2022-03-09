import React from 'react'
import SeeButton from './SeeButton'
import infoMaterials from '../assets/static/images/infoMaterials.png'

const listener = (dato) => {
    console.log(dato)
}
const SectionInfoMaterials = ({inverso, listener, artist, texts}) => {
    const text = texts.find(text => text.id === 2)
    console.log("test", artist)
    const showInverso = () => {
        let inv = inverso ? "inverso" : ""
        return inv
    }
    let color = inverso ? 'var(--backCream)' : 'var(--backWhiteCream)';
    return (
        <section className={`sectionInfo ${showInverso()}`} style={{ backgroundColor: color }}>
            <div className='sectionInfo__cont'>
                <div className={`sectionInfo__info ${showInverso()}`}>
                    <h2 className="sectionInfo__title">
                        {text.name}
                    </h2>
                    <p className='sectionInfo__text'>
                        {text.content}
                    </p>
                    <div className='sectionInfo__button'>
                        <SeeButton textBtn="Ver todos los materiales" listener={listener} /> 
                    </div>
                </div>
                <img className='sectionInfo__img' src={infoMaterials} />
            </div>
        </section>
    )
}

export default SectionInfoMaterials
