import React from 'react'
import SeeButton from './SeeButton'
import img from '../assets/static/images/javier-vanegas.png'
const title = 'Javier Vanegas'
const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'
const textoBtn = 'Ver todos los artistas'
const listener = (dato) => {
    console.log(dato)
}
const SectionArtist = (props) => {
    const inverso = () => {
        let inv = props.inverso === true ? "inverso" : ""
        return inv
    }
    let color = props.backColor ? props.backColor : props.inverso && 'var(--backWhiteCream)'
    return (
        <section className={`main-section ${inverso()}`} style={{ backgroundColor: color }}>
            <div className='section-cont'>
                <div className={`section-info ${inverso()}`}>
                    <div className="info-title">
                        <h2>
                            {title}
                        </h2>
                    </div>
                    <div className='info-text'>
                        <p>
                            {texto}
                        </p>
                    </div>
                    {!props.ignoreButton &&
                        <div className='info-button'>
                            <SeeButton textBtn={textoBtn} listener={props.listener} />
                        </div>
                    }
                </div>
                <div className='section-img'>
                    <img src={img} />
                </div>
            </div>
        </section>
    )
}

export default SectionArtist
