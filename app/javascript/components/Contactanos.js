import React from 'react'
import Title from './Title'
import Wsp from '../assets/static/icon/whatscontacto@2x.png'
import Correo from '../assets/static/icon/correocontacto@2x.png'
import Horario from '../assets/static/icon/horariocontacto@2x.png'
import Ubicacion from '../assets/static/icon/ubicacioncontacto@2x.png'
const icons = [
    { img: Wsp, info: '(57) 11111 1 111' },
    { img: Correo, info: 'artreecontacto@ gmail.com' },
    { img: Horario, info: 'Lunes a Viernes 8am - 5pm' },
    { img: Ubicacion, info: 'Cra 11 # 11a - 11 Bogota D.c' },
]
const country = ['COLOMBIA','ARGENTINA','VENEZUELA','BRAZIL',]
const city = ['BOGOTÁ','CALI','MEDELLÍN',]
export default function Contactanos() {
    return (
        <div>
            <Title title={'CONTÁCTANOS'} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p className='contact__paragraph'>
                    Queremos solucionar cualquier duda con respecto a tu compra, contáctanos para poder ofrecerte un servicio más integral y personalizado.
                </p>
            </div>
            <div className='contact__icons'>
                {icons.map(icon =>
                    <div style={{ width: '130px', textAlign: 'center' }}>
                        <img src={icon.img} />
                        <label>{icon.info}</label>
                    </div>
                )}
            </div>
                <h2 style={{ textAlign: 'center' }}>Contáctanos por E-mail</h2>
            <div className='contact__form'>
                    <div className='contact__form-cont'>
                        <label>Tu nombre</label>
                        <input className='contact__input-form' type='text'></input>
                        <label>Tu email</label>
                        <input className='contact__input-form' type='text'></input>
                        <label>País</label>
                        <select className='contact__input-form'>
                            {country.map((country)=>
                            <option>{country}</option>
                            )}
                        </select>
                        <label>Ciudad</label>
                        <select className='contact__input-form'>
                            {city.map((city)=>
                            <option>{city}</option>
                            )}
                        </select>
                        <label>Número de contacto</label>
                        <input className='contact__input-form' type='text'></input>
                        <label>Mensaje</label>
                        <textarea className='contact__input-form-msg' type='text'></textarea>
                        <div className='contact__terms' style={{ textAlign: 'center', marginTop: '2%' }}>
                            <input type='checkbox' />
                            <span>He leído y acepto los </span>
                            <a href='#'>Terminos y condiciones</a>
                        </div>
                        <button className='contact__button-contact' type="button">
                            ENVIAR
                        </button>
                    </div>
            </div>
        </div>
    )
}
