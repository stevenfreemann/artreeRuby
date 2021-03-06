import React from 'react'

const MaterialCard = ({main, text, id, type , img , listener, borderColor}) => {
    //content[type,img,text], main:boolean only MainSection
    return (
        <>
            <div key={id} className="material-card" onClick={listener}>
                <div className={`material-card__img${main ? '--main' : ''}`}>
                    {main && <span>{type}</span>}
                    <img style={{borderColor: `${borderColor}`}} src={img} alt={type} />
                </div>
                {type ? <div className={`material-card__info${main ? '--main' : ''}`}>
                    <span className>{type} </span>
                    <span>{text}</span>
                </div>
                    : <></>}
            </div>
        </>
    )
}

export default MaterialCard
