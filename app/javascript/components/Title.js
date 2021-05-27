import React from 'react'
import atras from '../assets/static/buttons/left-arrow.png'
const Title = ({title, alignLeft, backTitle, background,listener}) => {
    let color = background ? background : null
    return (
        <div className="title" style={{backgroundColor:color}}>
            {title&&
            <div className={`title__cont ${alignLeft?'title__cont--left':''}`}>
                {backTitle&&<img src={atras} alt="atras" onClick={listener}/>}
                {title&&<h1>{title}</h1>}
            </div>}
        </div>
    )
}

export default Title
