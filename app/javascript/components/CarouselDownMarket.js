import React, { useState } from 'react'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'

const CarouselDownMarket = ({info,idSelected, listener}) => {
    // const [position, setPosition] = useState(0)
    // const [direction, setDirection] = useState(0)

    const handleClick = (dir)=>{
        let direction = 0
        direction = {
            'left':-50,
            'right':50
        }
        if (dir) {
            document.getElementById('item_cont').scrollLeft += direction[dir];
        }
        // return `${direction[dir]}`
    }

    // console.log(position)

    return (
        <div className="sectionExclusive__carousel">
            <img className="sectionExclusive__direction" src={Left} alt="Left" onClick={()=>handleClick('left')}/>
            <div className='sectionExclusive__content' id='item_cont'>
                {info.map((info) =>
                    <img className={idSelected === info.id ?  "sectionExclusive__content--selected":''} key={info.id} src={info.img} alt={info.nombre} onClick={()=>listener(info)}/>
                )}
            </div>
            <img className="sectionExclusive__direction" src={Right} alt="Right" onClick={()=>handleClick('right')}/>
        </div>
    )
}

export default CarouselDownMarket
