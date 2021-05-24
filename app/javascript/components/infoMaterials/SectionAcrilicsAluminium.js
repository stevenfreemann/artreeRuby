import React from 'react'
import Title from '../Title'
import MaterialCards from '../MaterialCard'
import acrilicoSection from '../../assets/static/images/acrilico-section.png'
import aluminioImg from '../../assets/static/images/aluminio.png'

const acrilicoTipoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.'
const acrilicos = {
    title: 'ACRILICOS',
    tipos: [
        { id: 1, type: 'Papel1', img: acrilicoSection, },
        { id: 2, type: 'Papel2', img: acrilicoSection, },
    ]
};
const aluminioTipoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.'
const aluminio = {
    title: 'ALUMINIO',
    tipos: [
        { id: 1, type: 'Papel1', img: aluminioImg, },
        { id: 2, type: 'Papel2', img: aluminioImg, },
    ]
};


const SectionAcrilicsAluminium = () => {
    return (
        <>
            <Title title={acrilicos.title} backTitle={true} />
            <div className='sectionAcrilicsAluminium'>
                <p>{acrilicoTipoText}</p>
                <div className="materials__cont">
                    {aluminio.tipos.map(alm =>
                        <MaterialCards id={alm.id} type={alm.type} img={alm.img} />
                    )}
                </div>
                <Title title={aluminio.title} />
                <p>{aluminioTipoText}</p>
                <div className="materials__cont">
                    {aluminio.tipos.map(alm =>
                        <MaterialCards id={alm.id} type={alm.type} img={alm.img} />
                    )}
                </div>
            </div>
        </>
    )
}

export default SectionAcrilicsAluminium
