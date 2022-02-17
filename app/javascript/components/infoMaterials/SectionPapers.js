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

    
const SectionPapers = ({papers}) => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }

    return (
        <>
            <Title title={papeles.title} backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionPapers'>
                <h2>{papeles.subtitle}</h2>
                <p>{papeles.text}</p>
                <div className="sectionPapers__cont">
                    {papers.map( item =>
                         <MaterialCards id={item.id} img={papelComposicion} type={item.name} text={item.description} borderColor={'#D6E1E6'}/>
                    )}
               </div>
            </div>
        </>
    )
}

export default SectionPapers
