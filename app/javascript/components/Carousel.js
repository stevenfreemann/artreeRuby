import React, { useEffect, useRef, useState } from 'react'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'

export default function Carrousel({ contentCarousel }) {
    const [index, setIndex] = useState(0)
    const timerChangeBanner = useRef()

    
    useEffect(() => {
        timerChangeBanner.current = setTimeout(() => {
            next(1)
        }, 5000);
        return () => clearTimeout(timerChangeBanner.current)
    }, [])

    const next = (dir) => {
        // 0 is left
        // 1 is right
        const direction = [-1, 1]
        let currentBanner = index
        let nextBanner = (currentBanner + direction[dir]) % contentCarousel.length;
        nextBanner = nextBanner < 0 ? (contentCarousel.length - 1) : nextBanner
        console.log('nextBanner :>> ', nextBanner);
        setIndex(nextBanner)
    }

    return (
        <div className='carousel'>
            <div className="carousel__cont">
                {contentCarousel.map((item, i)=>
                    <div className={`carousel__item${index===i?" selectedBanner":""}`} key={"carousel"+i}>
                        <img style={{ height: '100%', width: '100%', objectFit:'cover' }} alt={"banner"+index} src={item?.file.url} />
                        {item?.title &&
                        <div className='carousel__info'>
                            {item?.title && <h1>{item?.title}</h1>}
                            {item?.text && <p>{item?.text}</p>}
                        </div>}
                    </div>
                )}
            </div>
            <div className="carousel__controls">
                <div className='carousel__leftButton' onClick={() => {clearTimeout(timerChangeBanner.current);next(0)}}>
                    <img src={Left} alt="left"/>
                </div>
                <div className='carousel__rigthButton' onClick={() => {next(1); clearTimeout(timerChangeBanner.current)}}>
                    <img src={Right} alt="right"/>
                </div>
                <div className='carousel__bannerInd'>
                    {contentCarousel.map((_, i) => {
                            return (
                                <div className={`carousel__indicator`} key={`indicator${i}`} id={`indicator${i}`} onClick={()=>{setIndex(i); clearTimeout(timerChangeBanner.current)}}>
                                    <div className={`carousel__indicatorFilling${i === index ? ' indicatorFilled' : ''}`}></div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
