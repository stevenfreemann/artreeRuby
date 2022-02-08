import React from 'react'
import Title from '../Title'
import MaterialCards from '../MaterialCard'
import acrilicoSection from '../../assets/static/images/acrilico-section.png'
import aluminioImg from '../../assets/static/images/aluminio.png'

 const acrilicoTipoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.'
// const acrilicos = {
//     title: 'ACRÍLICOS',
//     tipos: [
//         { id: 1, type: 'Papel1', img: acrilicoSection, },
//         { id: 2, type: 'Papel2', img: acrilicoSection, },
//     ]
// };
const aluminioTipoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.'
// const aluminio = {
//     title: 'ALUMINIOS',
//     tipos: [
//         { id: 1, type: 'Papel1', img: aluminioImg, },
//         { id: 2, type: 'Papel2', img: aluminioImg, },
//     ]
// };


const SectionAcrilicsAluminium = ({acrylics}) => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title="Tipos de Acrilico" backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionAcrilicsAluminium'>
                <p>{acrilicoTipoText}</p>
                <div className="sectionAcrilicsAluminium__cont">
                    {acrylics.map(acrylic =>
                        <MaterialCards id={acrylic.id} type={acrylic.name} img={acrilicoSection} borderColor={'#D1D2D7'} />
                    )}
                </div>
                {/* <Title title={aluminio.title} />
                <p>{aluminioTipoText}</p>
                <div className="sectionAcrilicsAluminium__cont">
                    {aluminio.tipos.map(alm =>
                        <MaterialCards id={alm.id} type={alm.type} img={alm.img} borderColor={'#D6E1E6'} />
                    )}
                </div> */}
            </div>
        </>
    )
}

export default SectionAcrilicsAluminium
