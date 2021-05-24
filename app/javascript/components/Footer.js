import React from 'react'

import LogoArtree from '../assets/static/graphics/logoartreefooter.png'
import LogoSuper from '../assets/static/graphics/industriaycomercio.png'
import LogoVisa from '../assets/static/icon/visa-logo.png'
import LogoAmerican from '../assets/static/icon/american-express.png'
import LogoMaster from '../assets/static/icon/mastercard-logo.png'
import LogoPayPal from '../assets/static/icon/paypal-logo.png'
import LogoInsta from '../assets/static/icon/instafooter@2x.png'
import LogoFacebook from '../assets/static/icon/facebookfooter@2x.png'
import LogoWhats from '../assets/static/icon/whatsfooter@2x.png'
import LogoPinterest from '../assets/static/icon/pinterestfooter@2x.png'
const facebook = "https://www.facebook.com/"
const whats = "https://wa.me/573103122081"
const insta = "https://www.instagram.com/"
const pinte = "https://pinterest.com"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-cont'>
                <div className='top-cont'>
                    <div className='logo-cont'>
                        <div className='logo1'>
                            <img src={LogoArtree}/>
                        </div>
                        <div className='logo2'>
                            <img src={LogoSuper}/>
                        </div>
                    </div>
                    <div className='link-cont'>
                        <li><a href="#">Envíos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Suscripciones</a></li>
                    </div>
                    <div className='info-cont'>
                        <a href="#">Términos y condiciones</a>
                        <p>
                            Cra. 11 #11-11<br></br>
                            Tel. 3103122081<br></br>
                            PBX (57) 2 222 222 <br></br>
                            Bogotá, Colombia<br/>
                        </p>
                    </div>
                </div>
                <div className='lower-cont'>
                    <div className='payment-cont'>
                        <div className='payment-logo'>
                            <img src={LogoVisa} alt='Visa'/>
                        </div>
                        <div className='payment-logo'>
                            <img src={LogoAmerican} alt='American Express'/>
                        </div>
                        <div className='payment-logo'>
                            <img src={LogoMaster} alt='MasterCard'/>
                        </div>
                        <div className='payment-logo'>
                            <img src={LogoPayPal} alt='PayPal'/>
                        </div>
                    </div>
                    <div className='social-cont'>
                        <div className='social-logo'>
                            <a href={insta} target="_blank"><img src={LogoInsta} alt='Instagram'/></a>
                        </div>
                        <div className='social-logo'>
                            <a href={facebook} target="_blank"><img src={LogoFacebook} alt='Facebook'/></a>
                        </div>
                        <div className='social-logo'>
                            <a href={whats} target="_blank"><img src={LogoWhats} alt='WhatsApp'/></a>
                        </div>
                        <div className='social-logo'>
                            <a href={pinte} target="_blank"><img src={LogoPinterest} alt='Pinterest'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
