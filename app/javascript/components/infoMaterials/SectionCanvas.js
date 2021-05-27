import React from 'react'
import Title from '../Title'


import marcosComposicion from '../../assets/static/images/marcosComposicion.png'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import canvasSection from '../../assets/static/images/canvas-section.png'
import espesorImg from '../../assets/static/images/lamina.png'
import MaterialCards from '../MaterialCard'
const marcos = { 
    title:'CANVAS',
    type:'Tips de composición',
    text1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus,dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus',
    img1: marcosComposicion,
    subtitle: 'Tipos de Canvas',
    text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.',
    img2: canvasSection,
}
const retablos= {
    subtitle: 'Retablos',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.'
}

const espesoresText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente.'
const espesores = {
    subtitle: 'Espesores',
    tipos: [
        {id:1,type:'Material1',img:espesorImg,text:espesoresText,},
        {id:2,type:'Material2',img:espesorImg,text:espesoresText,},
    ]
};
const papelesText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente.'
const papeles = {
    subtitle: 'Papeles',
    tipos: [
        {id:1,type:'Material1',img:papelComposicion,text:papelesText,},
        {id:2,type:'Material2',img:papelComposicion,text:papelesText,},
        {id:3,type:'Material3',img:papelComposicion,text:papelesText,},
        {id:4,type:'Material4',img:papelComposicion,text:papelesText,},
        
    ]
}; 
    
const SectionCanvas = () => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={marcos.title} backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionCanvas'>
                <div className='sectionCanvas__first-intro'>
                    <h2>{marcos.type}</h2>
                    <p>{marcos.text1}</p>
                    <img src={marcos.img1} alt='Marcos_Composicion'/>
                </div>
                <div className='sectionCanvas__second-intro'>
                    <h2>{marcos.subtitle}</h2>
                    <p>{marcos.text2}</p>
                    <img src={marcos.img2} alt={marcos.subtitle}/>
                </div>
                <div className='sectionCanvas__content'>
                    <h2>{retablos.subtitle}</h2>
                    <p>{retablos.text}</p>
                </div>
                <div className='sectionCanvas__subContent'>
                    <div>
                        <h2>{espesores.subtitle}</h2>
                        <div className="materials__cont">
                            {espesores.tipos.map(e=>
                                <MaterialCards id={e.id} type={e.type} img={e.img} text={e.text}/>
                                )}
                        </div> 
                    </div>
                    <div>
                        <h2>{papeles.subtitle}</h2>
                        {papeles.tipos.map(paper=>
                             <MaterialCards id={paper.id} img={paper.img} text={paper.text} type={paper.type}/>
                        )}
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCanvas
