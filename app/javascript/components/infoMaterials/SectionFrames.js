import React from 'react'
import Title from '../Title'
import marcosComposicion from '../../assets/static/images/marcosComposicion.png'
import marcoSection from '../../assets/static/images/marcoSection.png'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import MaterialCards from '../MaterialCard'

const marcos = { 
    title:'MARCOS',
    type:'Tips de composición',
    text1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus,dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus',
    img1: marcosComposicion,
    subtitle: 'Tipos de Marco',
    text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.',
     img2: marcoSection,
}

const SectionFrames = ({frames}) => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={marcos.title} backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionFrames'>
            <div className='sectionFrames__first-intro'>
                    <h2>{marcos.type}</h2>
                    <p>{marcos.text1}</p>
                    <img src={marcos.img1} alt='Marcos_Composicion'/>
                </div>
                <div className='sectionFrames__second-intro'>
                    <h2>{marcos.subtitle}</h2>
                    <p>{marcos.text2}</p>
                </div>
                <div className='sectionFrames__content'>

                    <div className="sectionFrames__materials">
                    {frames.map(item =>
                        <MaterialCards id={item.id} img={marcosComposicion} text={item.description} type={item.name} borderColor={'#D6E1E6'}/>
                    )}
                    </div>         
                </div>
            </div>
        </>
    )
}

export default SectionFrames
