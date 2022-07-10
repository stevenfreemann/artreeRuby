import React from 'react'
import SeeButton from './SeeButton'

const listener = (dato) => {
    console.log(dato)
}
const SectionInfoArtist = ({inverso, listener, artist}) => {
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
                        {artist?.name}
                    </h2>
                    <p className='sectionInfo__text'>
                        {artist?.bio}
                    </p>
                    <div className='sectionInfo__button'>
                        <SeeButton textBtn="Ver todos los artistas" listener={listener} /> 
                    </div>
                </div>
                <img className='sectionInfo__img' src={artist?.file.url} />
            </div>
        </section>
    )
}

export default SectionInfoArtist
