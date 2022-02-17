import React from 'react'
import Title from '../Title'
import MaterialCard from '../MaterialCard'
import canvas from '../../assets/static/images/canvas.png'
import papel from '../../assets/static/images/papel.png'
import marcos from '../../assets/static/images/marcos.png'
import acrilico from '../../assets/static/images/acrilico.png'
import marcoSec from '../../assets/static/images/marcoSection.png'
import canvasSec from '../../assets/static/images/canvas-section.png'
import acrilicoSec from '../../assets/static/images/acrilico-section.png'
import papelSec from '../../assets/static/images/papel-section.png'
import retablosSec from '../../assets/static/images/retablos-section.png'
import materialSec from '../../assets/static/images/material-section.png'

const MainSectionMaterials = ({materials}) => {
    console.log(materials)
    const navigate=(id)=>{
        const direction={
            1:'/infoCanvas',
            2:'/infoPapers',
            3:'/infoFrames',
            4:'/infoAcrilics',
            'back':'/'
        }
        window.location=direction[id] ? direction[id] : '/'
    }
    return (
        <div className="sec-materials">
            <Title title="MATERIALES" listener={()=>navigate('back')}/>
            <div className="materials__pres">
                <div className="materials__background">
                    <div className="materials__img--pos">
                        <div>
                            <span>Canvas</span>
                            <img src={canvas} alt="Canvas" />
                        </div>
                        <div>
                            <span>Papel</span>
                            <img src={papel} alt="Papel" />
                        </div>
                        <div>
                            <span>Marcos</span>
                            <img src={marcos} alt="Marcos" />
                        </div>
                        <div>
                            <span>Acrilicos</span>
                            <img src={acrilico} alt="Acrilico" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="materials__cont">
                {materials.map(material =>
                    <MaterialCard type={material.name} img={material.file.url} key={material.id} main={true} borderColor={'#D1D2D7'} listener={()=>navigate(material.id)} />  
                )}
            </div>   
        </div>
    )
}

export default MainSectionMaterials
