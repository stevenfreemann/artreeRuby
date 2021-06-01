import React, { useState } from 'react'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'

const CarouselDownMarket = ({info,idSelected, listener}) => {

    const handleClick = (dir)=>{
        let direction = 0
        direction = {
            'left':-70,
            'right':70
        }
        if (dir) {
            document.getElementById('item_cont').scrollLeft += direction[dir];
        }
    }

    return (
        <div className="carouselDownMarket__carousel">
            <img className="carouselDownMarket__direction" src={Left} alt="Left" onClick={()=>handleClick('left')}/>
            <div className='carouselDownMarket__content' id='item_cont'>
                {info.map((info) =>
                    <img className={idSelected === info.id ?  "carouselDownMarket__content--selected":''} key={info.id} src={info.img} alt={info.nombre} onClick={()=>listener(info)}/>
                )}
            </div>
            <img className="carouselDownMarket__direction" src={Right} alt="Right" onClick={()=>handleClick('right')}/>
        </div>
    )
}

export default CarouselDownMarket
