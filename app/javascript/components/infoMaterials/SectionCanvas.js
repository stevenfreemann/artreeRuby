import React from 'react'
import Title from '../Title'

import marcosComposicion from '../../assets/static/images/marcosComposicion.png'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import canvasSection from '../../assets/static/images/canvas-section.png'
import espesorImg from '../../assets/static/images/lamina.png'
import MaterialCards from '../MaterialCard'


const espesoresText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente.'
const espesores = {
    subtitle: 'Espesores',
    tipos: [
        {id:1,type:'Material1',img:espesorImg,text:espesoresText,},
        {id:2,type:'Material2',img:espesorImg,text:espesoresText,},
    ]
};

    
const SectionCanvas = ({canvases, text1, text2}) => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={"Canvas"} backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionCanvas'>
                <div className='sectionCanvas__first-intro'>
                    <h2>{text1.name}</h2>
                    <p>{text1.content}</p>
                    <img src={marcosComposicion} alt='Marcos_Composicion'/>
                </div>
                {/* <div className='sectionCanvas__second-intro'>
                    <h2>{marcos.subtitle}</h2>
                    <p>{marcos.text2}</p>
                    <img src={marcos.img2} alt={marcos.subtitle}/>
                </div> */}
                <div className='sectionCanvas__content'>
                    <h2>{text2.name}</h2>
                    <p>{text2.content}</p>
                </div>
                <div className='sectionCanvas__subContent'>
                    <div>
                        <h2>{espesores.subtitle}</h2>
                        <div className="materials__cont">
                            {espesores.tipos.map(e=>
                                <MaterialCards id={e.id} type={e.type} img={e.img} text={e.text} borderColor={'#CBBDCB'}/>
                                )}
                        </div> 
                    </div>
                    <div>
                        <h2>Tipos de Retablo </h2>
                        <div className='sectionCanvas__materials'>
                            {canvases.map(canvas=>
                                 <MaterialCards id={canvas.id} img={canvasSection} text={canvas.description} type={canvas.name} borderColor={'#D6E1E6'}/>
                            )}
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCanvas
