import React from 'react'
import Title from '../Title'
import marcosComposicion from '../../assets/static/images/marcosComposicion.png'
import marcoSection from '../../assets/static/images/marcoSection.png'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import MaterialCards from '../MaterialCard'

const SectionFrames = ({frames, text1, text2}) => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={'MARCOS'} backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionFrames'>
            <div className='sectionFrames__first-intro'>
                    <h2>{text1.name}</h2>
                    <p>{text1.content}</p>
                    <img src={marcoSection} alt='Marcos_Composicion'/>
                </div>
                <div className='sectionFrames__second-intro'>
                    <h2>{text2.name}</h2>
                    <p>{text2.content}</p>
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
