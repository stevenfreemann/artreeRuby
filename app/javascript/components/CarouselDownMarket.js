import React from 'react'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'

const CarouselDownMarket = ({info,idSelected, listener}) => {

    return (
        <div className="sectionExclusive__carousel">
            <img className="direction" src={Left} alt="Left" />
            <div>
                {info.map((info) =>
                    <img className={idSelected === info.id ?  "sectionExclusive__carousel--selected":''} key={info.id} src={info.img} alt={info.nombre} onClick={()=>listener(info)} />
                )}
            </div>
            <img className="direction" src={Right} alt="Right" />
        </div>
    )
}

export default CarouselDownMarket
