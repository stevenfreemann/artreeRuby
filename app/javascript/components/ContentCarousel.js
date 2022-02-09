import React from 'react'

export default function ContentCarousel({ id, obj }) {
    console.log(obj)
    if (!obj.Title) {
        return (
            <div className='carousel__img'>
                <img style={{ height: '100%', width: '100%', objectFit:'cover' }} alt={id} src={obj.link} />
            </div>
        )
    } else if (obj.text) {
        return (
            <div className='container-content-carousel'>
                <div style={{display:'flex', height:'100%', width:'100%'}}>
                    <div className='container-text-carousel'>
                        <h1>{obj.Title}</h1>
                        <p>{obj.text}</p>
                    </div>
                    <div className='carousel__img-with-text'>
                        <img style={{ height: '100%', width: '100%', objectFit:'cover' }} alt={id} src={obj.link} />
                    </div>
                </div>
            </div>
        )
    }

}
