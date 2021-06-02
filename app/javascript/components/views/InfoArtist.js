import React from 'react'
import Title from '../Title'
import img from '../../assets/static/images/artist.png'

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur laboriosam eveniet nobis quas facilis quis quam obcaecati consequatur necessitatibus porro voluptates itaque at perferendis, nulla ducimus corrupti impedit repellendus a.'
const list = [
    {id:1,text:text,},
    {id:2,text:text,},
    {id:3,text:text,},
    {id:4,text:text,},
]

const InfoArtist = () => {
    return (
        <div>
            <h1 className="infoArtist__title" >
            SI QUIERES SER UN ARTISTA
            </h1>
            <div className='infoArtist'>
                <div className='infoArtist__cont'>
                    <div className='infoArtist__img'>
                        <img src={img}/>
                        <button>Imprime ahora</button>
                    </div>
                    <div className='infoArtist__list'>
                        <ol>
                            {list.map((item)=>
                            <li key={item.id}>{item.text}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoArtist
