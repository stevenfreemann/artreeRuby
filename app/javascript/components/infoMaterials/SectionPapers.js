import React from 'react'
import Title from '../Title'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import MaterialCards from '../MaterialCard'
const papeles = { 
    title:'PAPELES',
    subtitle:'Tipos de papel',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus.',
}
const papelTipoText= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
const papelTipos = [
        {id:1,type:'Papel1',img:papelComposicion,text:papelTipoText,},
        {id:2,type:'Papel2',img:papelComposicion,text:papelTipoText,},
        {id:3,type:'Papel3',img:papelComposicion,text:papelTipoText,},
        {id:4,type:'Papel4',img:papelComposicion,text:papelTipoText,},
        {id:5,type:'Papel5',img:papelComposicion,text:papelTipoText,},
        {id:6,type:'Papel6',img:papelComposicion,text:papelTipoText,},
        {id:7,type:'Papel7',img:papelComposicion,text:papelTipoText,},
    ]
    
const SectionPapers = () => {
    return (
        <>
            <Title title={papeles.title} backTitle={true}/>
            <div className='sectionPapers'>
                <h2>{papeles.subtitle}</h2>
                <p>{papeles.text}</p>
                <div className="materials__cont">
                    {papelTipos.map(item=>
                         <MaterialCards id={item.id} img={item.img} type={item.type} text={item.type}/>
                    )}
               </div>
            </div>
        </>
    )
}

export default SectionPapers
