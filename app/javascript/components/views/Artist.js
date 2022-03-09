import React, { useState } from 'react'
import Title from '../Title'
import left from '../../assets/static/buttons/leftButton.png'
import right from '../../assets/static/buttons/rightButton.png'
import facebook from '../../assets/static/icon/facebookartistas@2x.png'
import pinterest from '../../assets/static/icon/pinterestfooter.png'
import linkedin from '../../assets/static/icon/linkedinlogo.png'
import instagram from '../../assets/static/icon/instaartistas@2x.png'



const Artist = ({artists,foto}) => {
    
    const [page, setPage] = useState(1)
    const elements = 16
    const pages = (Math.floor((artists.length-1)/elements)+1)

    const paginationArtist = (artistList)=> {
        if (artistList.length>elements) {
            let maxArtist = page * elements
            let minArtist = maxArtist - elements
            let showArtist = artistList.slice(minArtist,maxArtist)
            return showArtist
        }
        return artistList
    }

    const showArtist = paginationArtist(artists)

    const navigate = (section) => {
        const redirect = {
            'infoArtist': '/infoArtist',
        }
        window.location = redirect[section] ? redirect[section] : '/'
    }

    return (
        <>
            <Title title="ARTISTAS"alignLeft={false}/>
            <div className='artist__cont'>
                {artists.map((artist)=>
                    <div key={artist.id} className={`artist__card${((showArtist.indexOf(artist) % 2) == 0)?'':'--invertido'}`}>
                        <img className='artist__card-img' src={artist.file.url} alt={artist.name}/>
                        <div className='artist__info-cont'>
                            <div className='artist__info'>
                                <span style={{fontWeight:'bold'}}>{artist.name}: </span>
                                <span>{artist.bio}</span>
                            </div>
                            <div className='artist__card-social' >
                                <a href={artist.facebook} target="_blank"><img src={facebook} alt='Facebook'/></a>
                                <a href={artist.linkedin} target="_blank"><img src={linkedin} alt='linkedin'/></a>
                                <a href={artist.pinterest} target="_blank"><img src={pinterest} alt='pinterest'/></a>
                                <a href={artist.instagram} target="_blank"><img src={instagram} alt='Instagram'/></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='artist__want'>
                <div>
                    <img src={left} alt='Anterior' style={{visibility:`${page>1?'visible':'hidden'}`}} onClick={()=>{setPage(page-1);document.documentElement.scrollTop = 0}}></img>
                    <span>{`Página ${page} de ${pages}`}</span>
                    <img src={right} alt='Sigiente' style={{visibility:`${page<pages&&page!==pages?'visible':'hidden'}`}} onClick={()=>{setPage(page+1);document.documentElement.scrollTop = 0}}></img>
                </div>
                {/* <h2>¿Quieres ser uno de nuestros artistas?/h2>
                <button type="button" onClick={()=>navigate('infoArtist')}>Click aquí</button> */}
            </div>
        </>
    )
}

export default Artist
