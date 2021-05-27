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

const typeText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde cum sapiente, architecto, temporibus."
const type = [
    {
        id: 1,
        img: marcoSec,
        type: 'marco',
        text: typeText,
    },
    {
        id: 2,
        img: canvasSec,
        type: 'canvas',
        text: typeText,
    },
    {
        id: 3,
        img: acrilicoSec,
        type: 'acrilico',
        text: typeText,
    },
    {
        id: 4,
        img: papelSec,
        type: 'papel',
        text: typeText,
    },
    {
        id: 5,
        img: retablosSec,
        type: 'retablos',
        text: typeText,
    },
    {
        id: 6,
        img: materialSec,
        type: 'material',
        text: typeText,
    }]

const MainSectionMaterials = () => {
    const navigate=(id)=>{
        const direction={
            1:'/infoFrames',
            2:'/infoCanvas',
            4:'/infoPapers',
            3:'/infoAcrilics',
            5:'/infoCanvas',
            'back':'/'
        }
        window.location=direction[id] ? direction[id] : '/'
    }
    return (
        <div className="sec-materials">
            <Title title="MATERIALES" backTitle={true} listener={()=>navigate('back')}/>
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
                {type.map(item =>
                    <MaterialCard type={item.type} img={item.img} key={item.id} text={item.text} main={true} borderColor={'#D1D2D7'} listener={()=>navigate(item.id)} />  
                )}
            </div>   
        </div>
    )
}

export default MainSectionMaterials
