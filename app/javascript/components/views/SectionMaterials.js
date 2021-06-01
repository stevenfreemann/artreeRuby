import React from 'react'
import Title from '../Title'
import marcosComposicion from '../../assets/static/images/marcosComposicion.png'
import marcoSection from '../../assets/static/images/marcoSection.png'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import MaterialCard from '../MaterialCard'
const marcos = {
    title: 'MARCOS',
    type: 'Tips de composición',
    text1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.',
    img1: marcosComposicion,
    subtitle: 'Tipos de Marco',
    text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.',
    img2: marcoSection,
}
const papelTipoText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente.'
const papel = {
    subtitle: 'tipos de papel',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.',
    tipos: [
        { id: 1, type: 'Papel1', img: papelComposicion, text: papelTipoText, },
        { id: 2, type: 'Papel2', img: papelComposicion, text: papelTipoText, },
        { id: 3, type: 'Papel3', img: papelComposicion, text: papelTipoText, },
        { id: 4, type: 'Papel4', img: papelComposicion, text: papelTipoText, },
        { id: 5, type: 'Papel5', img: papelComposicion, text: papelTipoText, },
        { id: 6, type: 'Papel6', img: papelComposicion, text: papelTipoText, },
        { id: 7, type: 'Papel7', img: papelComposicion, text: papelTipoText, },
    ]
};

const SectionMaterials = () => {
    return (
        <>
            <Title title={marcos.title} />
            <div className='sectionMaterials'>
                <div className='sectionMaterials__first-intro'>
                    <h2>{marcos.type}</h2>
                    <p>{marcos.text1}</p>
                    <img src={marcos.img1} alt='Marcos_Composicion' />
                </div>
                <div className='sectionMaterials__second-intro'>
                    <h2>{marcos.subtitle}</h2>
                    <p>{marcos.text2}</p>
                    <img src={marcos.img2} alt={marcos.subtitle} />
                </div>
                <div className='sectionMaterials__content'>
                    <h2>{papel.subtitle}</h2>
                    <p>{papel.text}</p>
                    <div className="materials__cont">
                        {papel.tipos.map(item =>
                            <MaterialCard type={item.type} img={item.img} id={item.id} text={item.text} />
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default SectionMaterials
