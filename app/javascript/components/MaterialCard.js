import React from 'react'

const MaterialCard = ({main, id, type , img , text, listener, borderColor}) => {
    //content[type,img,text], main:boolean only MainSection
    return (
        <>
            <div key={id} className="material-card" onClick={listener}>
                <div className={`material-card__img${main ? '--main' : ''}`}>
                    {main && <span>{type}</span>}
                    <img style={{border: `solid 1.5rem ${borderColor}`}} src={img} alt={type} />
                </div>
                {text ? <div className={`material-card__info${main ? '--main' : ''}`}>
                    <span className>{type}. </span>
                    <span>{text}</span>
                </div>
                    : <></>}
            </div>
        </>
    )
}

export default MaterialCard
