import React from 'react'
import distintion from '../../assets/static/icon/sello.png'
import left from '../../assets/static/buttons/left-arrow.png'
import right from '../../assets/static/buttons/right-arrow.png'
import client from '../../assets/static/images/cliente.png'
import logoInsta from '../../assets/static/icon/instafooter@2x.png'
import logoFacebook from '../../assets/static/icon/facebookfooter@2x.png'
import logoWhats from '../../assets/static/icon/whatsfooter@2x.png'
import logoPinterest from '../../assets/static/icon/pinterestfooter@2x.png'
import artist from '../../assets/static/images/artist.png'
import purchase from '../../assets/static/images/purchase.png'
import print from '../../assets/static/images/print.png'
const facebook = "https://www.facebook.com/"
const whats = "https://wa.me/573103122081"
const insta = "https://www.instagram.com/"
const pinte = "https://pinterest.com"

const distintions = [
    {id:1,name:'Distinción1',img:distintion,},
    {id:2,name:'Distinción2',img:distintion,},
    {id:3,name:'Distinción3',img:distintion,},
    {id:4,name:'Distinción4',img:distintion,},
    {id:5,name:'Distinción5',img:distintion,},
]

const phrase = '"Laborum voluptas harum laudantium nihil error soluta odio ea quod fugiat mollitia vel dignissimos corrupti quasi tenetur!"'
const clients =[
    {id:1,img:client,ubication:'Ubicacion1', name:'Nombre fotografo1', photoName:'Nombre fotografia', phrase:phrase},
    {id:2,img:client,ubication:'Ubicacion1', name:'Nombre fotografo1', photoName:'Nombre fotografia', phrase:phrase},
    {id:3,img:client,ubication:'Ubicacion1', name:'Nombre fotografo1', photoName:'Nombre fotografia', phrase:phrase},
]

const AboutUs = () => {

    const navigate=(id)=>{
        const direction={
            'artist':'/infoArtist',
            'purchase':'/infoPurchase',
            'print':'/infoPrint',
        }
        window.location=direction[id] ? direction[id] : '/'
    }

    return (
        <div className='aboutUs'>
            <div className='aboutUs__hero'>
                <div className='aboutUs__hero-cont'>
                    <h1>Somos una empresa</h1>
                    <span>Lorem ipsum dolor sit, harum laudantium nihil error soluta odio ea quod amet consectetur adipisicing elit. Fugiat mollitia vel dignissimos corrupti quasi tenetur.</span>
                </div>
            </div>
            <div className='aboutUs__distintion'>
                {distintions.map((item)=>
                <div className='aboutUs__distintion-item' key={item.id}>
                    <img src={item.img} alt='Reconocimiento'/>
                    <label>{item.name}</label>
                </div>
                )}
            </div>
            <div className='aboutUs__client'>
                <h2>Clientes Felices</h2>
                <div className='aboutUs__client-cont'>
                    <img className='aboutUs__client-arrow'
/* TODO: cuadrar la pagina de clientes */ src={left} alt='left'/>
                        <div className='aboutUs__client-show'>
                            {clients.map((client)=>
                                <div className='aboutUs__client-item' key={client.id}>
                                    <img src={client.img} alt='Cliente'/>
                                    <span style={{fontWeight:'bold'}} >{client.ubication}, </span>
                                    <span style={{fontWeight:'bold'}} >{client.name}, </span>
                                    <span style={{fontWeight:'bold'}} >{client.photoName}, </span>
                                    <span>{client.phrase}</span>
                                </div>
                            )}
                        </div>
                    <img className='aboutUs__client-arrow' src={right} alt='right'/>
                </div>
            </div>
            <div className='aboutUs__info'>
                <h1>Siguenos en nuestras redes sociales</h1>
                <div className='aboutUs__info-social'>
                    <a href={insta} target="_blank"><img src={logoInsta} alt='Social'/></a>
                    <a href={facebook} target="_blank"><img src={logoFacebook} alt='Social'/></a>
                    <a href={whats} target="_blank"><img src={logoWhats} alt='Social'/></a>
                    <a href={pinte} target="_blank"><img src={logoPinterest} alt='Social'/></a>
                </div>
                <div className='aboutUs__info-other'>
                    <div>
                        <img src={artist} alt='Artista' onClick={()=>navigate('artist')}/>
                        <h2>Si quieres ser un artista</h2>
                    </div>
                    <div>
                        <img src={purchase} alt='Compra' onClick={()=>navigate('purchase')}/>
                        <h2>Si quieres comprar los productos</h2>
                    </div>
                    <div>
                        <img src={print} alt='Imprimir' onClick={()=>navigate('print')}/>
                        <h2>Si quieres imprimir tus fotos</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
