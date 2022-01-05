import React from 'react'
import SeeButton from './SeeButton'

const listener = (dato) => {
    console.log(dato)
}
const SectionInfo = ({inverso, img, title, text,listener, textoBtn}) => {
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
                        {title}
                    </h2>
                    <p className='sectionInfo__text'>
                        {text}
                    </p>
                    <div className='sectionInfo__button'>
                        <SeeButton textBtn={textoBtn} listener={listener} /> {/*redirect wompi*/}
                    </div>
                </div>
                <img className='sectionInfo__img' src={img} />
            </div>
        </section>
    )
}

export default SectionInfo
