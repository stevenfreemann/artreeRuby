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
const papelTipoText= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente.'
const papel = {
    subtitle: 'tipos de papel',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus',
    tipos: [
        {id:1,type:'Papel1',img:papelComposicion,text:papelTipoText,},
        {id:2,type:'Papel2',img:papelComposicion,text:papelTipoText,},
        {id:3,type:'Papel3',img:papelComposicion,text:papelTipoText,},
        {id:4,type:'Papel4',img:papelComposicion,text:papelTipoText,},
        {id:5,type:'Papel5',img:papelComposicion,text:papelTipoText,},
        {id:6,type:'Papel6',img:papelComposicion,text:papelTipoText,},
        {id:7,type:'Papel7',img:papelComposicion,text:papelTipoText,},
    ]
}; 

const SectionFrames = () => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }
    return (
        <>
            <Title title={marcos.title} listener={()=>navigate('back')}/>
            <div className='sectionFrames'>
                <div className='sectionFrames__first-intro'>
                    <h2>{marcos.type}</h2>
                    <p>{marcos.text1}</p>
                    <img src={marcos.img1} alt='Marcos_Composicion'/>
                </div>
                <div className='sectionFrames__second-intro'>
                    <h2>{marcos.subtitle}</h2>
                    <p>{marcos.text2}</p>
                    <img src={marcos.img2} alt={marcos.subtitle}/>
                </div>
                <div className='sectionFrames__content'>
                    <h2>{papel.subtitle}</h2>
                    <p>{papel.text}</p>
                    <div className="sectionFrames__materials">
                    {papel.tipos.map(item=>
                        <MaterialCards id={item.id} img={item.img} text={item.text} type={item.type} borderColor={'#D6E1E6'}/>
                    )}
                    </div>         
                </div>
            </div>
        </>
    )
}

export default SectionFrames
