import React, { useEffect, useState } from 'react'
import Home1 from '../assets/static/images/home1.png'
import Home2 from '../assets/static/images/home2.png'
import Left from '../assets/static/buttons/left-arrow.png'
import Right from '../assets/static/buttons/right-arrow.png'
import ContentCarousel from './ContentCarousel'
// import Indicators from './Indicators'
const imgDumm = [Home1, Home2]
const contentCarousel = [
    {
        Title: null,
        text: null,
        img: Home1
    },
    {
        Title: 'TÍTULO',
        text: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: Home2
    }
]
export default function Carrousel() {
    const [index, setIndex] = useState(0)
    const next = (dir) => {
        // 0 is right
        // 1 is left
        let slides = document.getElementsByClassName('carousel')[0]
        if ((dir === 1 && index > 0) || (dir === 0 && index < imgDumm.length - 1)) {
            slides.classList.add('carousel--slide')
        }
        setTimeout(() => {
            if (dir === 1 && index > 0) { setIndex(index - 1); slides.classList.replace('carousel--slide', 'carousel--show') }
            else if (dir === 0 && index < imgDumm.length - 1) { setIndex(index + 1); slides.classList.replace('carousel--slide', 'carousel--show') }
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
