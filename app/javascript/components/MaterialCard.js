import React from 'react'

const MaterialCard = ({main, id, type , img , text, listener}) => {
    //content[type,img,text], main:boolean only MainSection
    return (
        <>
            <div key={id} className="material-card" onClick={listener}>
                <div className={`material-card__img${main ? '--main' : ''}`}>
                    {main && <span>{type}</span>}
                    <img src={img} alt={type} />
                </div>
                {text ? <div className="material-card__info">
                    <span className>{type}. </span>
                    <span>{text}</span>
                </div>
                    : <></>}
            </div>
        </>
    )
}

export default MaterialCard
