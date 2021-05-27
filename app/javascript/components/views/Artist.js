import React, { useState } from 'react'
import Title from '../Title'
import left from '../../assets/static/buttons/leftButton.png'
import right from '../../assets/static/buttons/rightButton.png'
import facebook from '../../assets/static/icon/facebookartistas@2x.png'
import whatsapp from '../../assets/static/icon/whatsartistas@2x.png'
import twiter from '../../assets/static/icon/twitterartistas@2x.png'
import instagram from '../../assets/static/icon/instaartistas@2x.png'
const facebookpage = "https://www.facebook.com/"
const whatspage = "https://wa.me/573103122081"
const twiterpage = "https://twitter.com/"
const instapage = "https://www.instagram.com/"
const DescriptionArtist = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vel provident amet necessitatibus.'


const Artist = ({artistas,foto}) => {
    //const artistList = [
    //    {id:1,nameArtist: 'Artista_A',img:foto,description:DescriptionArtist,},
    //    {id:2,nameArtist: 'Artista_B',img:foto,description:DescriptionArtist,},
    //    {id:3,nameArtist: 'Artista_C',img:foto,description:DescriptionArtist,},
    //    {id:4,nameArtist: 'Artista_D',img:foto,description:DescriptionArtist,},
    //    {id:5,nameArtist: 'Artista_E',img:foto,description:DescriptionArtist,},
    //    {id:6,nameArtist: 'Artista_F',img:foto,description:DescriptionArtist,},
    //    {id:7,nameArtist: 'Artista_G',img:foto,description:DescriptionArtist,},
    //    {id:8,nameArtist: 'Artista_H',img:foto,description:DescriptionArtist,},
    //    {id:9,nameArtist: 'Artista_I',img:foto,description:DescriptionArtist,},
    //    {id:10,nameArtist: 'Artista_J',img:foto,description:DescriptionArtist,},
    //    {id:11,nameArtist: 'Artista_K',img:foto,description:DescriptionArtist,},
    //    {id:12,nameArtist: 'Artista_L',img:foto,description:DescriptionArtist,},
    //    {id:13,nameArtist: 'Artista_M',img:foto,description:DescriptionArtist,},
    //    {id:14,nameArtist: 'Artista_N',img:foto,description:DescriptionArtist,},
    //    {id:15,nameArtist: 'Artista_O',img:foto,description:DescriptionArtist,},
    //    {id:16,nameArtist: 'Artista_P',img:foto,description:DescriptionArtist,},
    //]
    console.log(artistas)
    const [page, setPage] = useState(1)
    const elements = 16
    const pages = (Math.floor((artistas.length-1)/elements)+1)

    const paginationArtist = (artistList)=> {
        if (artistList.length>elements) {
            let maxArtist = page * elements
            let minArtist = maxArtist - elements
            let showArtist = artistList.slice(minArtist,maxArtist)
            return showArtist
        }
        return artistList
    }

    const showArtist = paginationArtist(artistas)

    return (
        <>
            <Title title="ARTISTAS" backTitle={true} alignLeft={false}/>
            <div className='artist__cont'>
                {showArtist.map((artist)=>
                    <div key={artist.id} className={`artist__card ${((showArtist.indexOf(artist) % 2) == 0)?'':'invertido'}`}>
                        <img className='artist__card-img' src={artist.img} alt={artist.nombre}/>
                        <div className='artist__info-cont'>
                            <div className='artist__info'>
                                <span style={{fontWeight:'bold'}}>{artist.nombre}: </span>
                                <span>{artist.bio}</span>
                            </div>
                            <div className='artist__card-social' >
                                <a href={facebookpage} target="_blank"><img src={facebook} alt='Facebook'/></a>
                                <a href={whatspage} target="_blank"><img src={whatsapp} alt='Whatsapp'/></a>
                                <a href={twiterpage} target="_blank"><img src={twiter} alt='Twiter'/></a>
                                <a href={instapage} target="_blank"><img src={instagram} alt='Instagram'/></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='artist__want'>
                <div>
                    {page>1&&<img src={left} alt='Anterior' onClick={()=>setPage(page-1)}></img>}
                    {page<pages&&page!==pages&&<img src={right} alt='Sigiente' onClick={()=>setPage(page+1)}></img>}
                </div>
                <h2>¿Quieres ser uno de nuestros artistas?</h2>
                <button type="button">Click aquí</button>
            </div>
        </>
    )
}

export default Artist
