import React, { useEffect, useRef } from 'react'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'

const CarouselDownMarket = ({info, idSelected, listener}) => {
    const contentRef = useRef({})
    const leftRef = useRef({})
    const rightRef = useRef({})

    useEffect(() => {
        const content = contentRef.current
        let limit = content.scrollWidth
        let scroll = content.scrollLeft
        let offset = content.offsetWidth
        if (scroll === 0){
            leftRef.current.style.visibility = "hidden"
        }
        const handleScroll=()=>{
            scroll = content.scrollLeft
            if((scroll+offset)>=limit){
                rightRef.current.style.visibility = "hidden"
            }else{
                leftRef.current.style.visibility = "visible"
                rightRef.current.style.visibility = "visible"
            }
            if (scroll === 0){
                leftRef.current.style.visibility = "hidden"
            }
        }
        if(content){
            content.addEventListener('scroll', handleScroll)
        }
        return ()=> {
            content.removeEventListener('scroll')
        }
    }, [])

    const handleClick = (dir)=>{
        let direction = {}
        direction = {
            'left':-100,
            'right':100
        }
        if (dir) {
            document.getElementsByClassName('carouselDownMarket__content')[0].scrollLeft += direction[dir];
        }
    }

    return (
        <div className="carouselDownMarket__carousel">
            <img className="carouselDownMarket__direction" src={Left} alt="Left" ref={leftRef} onClick={()=>handleClick('left')}/>
            <div className='carouselDownMarket__content' ref={contentRef}>
                {info.map((info) =>
                    <img className={idSelected === info.id ?  "carouselDownMarket__content--selected":''} key={info.id} src={info.file.url} alt={info.nombre} onClick={()=>listener(info)}/>
                )}
            </div>
            <img className="carouselDownMarket__direction" src={Right} alt="Right" ref={rightRef} onClick={()=>handleClick('right')}/>
        </div>
    )
}

export default CarouselDownMarket
