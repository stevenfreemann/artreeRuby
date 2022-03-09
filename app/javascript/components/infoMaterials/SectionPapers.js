import React from 'react'
import Title from '../Title'
import papelComposicion from '../../assets/static/images/papelComposicion.png'
import MaterialCards from '../MaterialCard'

    
const SectionPapers = ({papers, text}) => {
    const navigate=(dir)=>{
        const direction={
            'back':'/infoMaterials'
        }
        window.location=direction[dir] ? direction[dir] : '/'
    }

    return (
        <>
            <Title title={"PAPELES"} backTitle={true} listener={()=>navigate('back')}/>
            <div className='sectionPapers'>
                <h2>{text.name}</h2>
                <p>{text.content}</p>
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
