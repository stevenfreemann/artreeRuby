import React, { useEffect, useState } from 'react'
import Home1 from '../assets/static/images/home1.png'
import Home2 from '../assets/static/images/home2.png'
import Banner1 from '../assets/static/images/banner1.jpeg'
import Banner2 from '../assets/static/images/banner2.jpeg'
import Banner3 from '../assets/static/images/banner3.jpeg'
import Banner4 from '../assets/static/images/banner4.jpeg'
import Banner5 from '../assets/static/images/banner5.jpg'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'
import ContentCarousel from './ContentCarousel'

export default function Carrousel({contentCarousel}) {
    const [index, setIndex] = useState(0)
    const next = (dir) => {
        // 0 is right
        // 1 is left
        let slides = document.getElementsByClassName('carousel')[0]
        if ((dir === 1 && index > 0) || (dir === 0 && index < contentCarousel.length - 1) || (index===contentCarousel.length-1)) {
            slides.classList.add('carousel--slide')
        }
        setTimeout(() => {
            if (dir === 1 && index > 0) { setIndex(index - 1); slides.classList.replace('carousel--slide', 'carousel--show') }
            else if (dir === 0 && index < contentCarousel.length - 1) { setIndex(index + 1); slides.classList.replace('carousel--slide', 'carousel--show') }
            else if(dir === 0 && index===contentCarousel.length-1) setIndex(0); slides.classList.replace('carousel--slide', 'carousel--show')
            setTimeout(() => {
                slides.classList.remove('carousel--show')
            }, 300)
        }, 300)
    }
    return (
        <div className='carousel'>
            <div className='carousel__leftButton' onClick={() => next(1)}>
                <img src={Left} />
            </div>
            <ContentCarousel id={index} obj={contentCarousel[index]} />
            <div className='carousel__rigthButton' onClick={() => next(0)}>
                <img src={Right} />
            </div>
            <div className='carousel__slideInd'>
                {
                    Array(contentCarousel.length).fill().map(
                        (_, i) => {
                            return (
                                <div
                                    className={`carousel__indicator${i === index ? '--selected' : ''}`}
                                    key={`indicator${i}`}
                                    id={`indicator${i}`}>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
