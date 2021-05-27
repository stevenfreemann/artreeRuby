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
export default function Contactanos() {
    return (
        <div>
            <Title title={'CONTÁCTANOS'} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p className='paragraph-contact'>
                    Queremos solucionar cualquier duda con respecto a tu compra, contáctanos para poder ofrecerte un servicio más integral y personalizado.
                </p>
            </div>
            <div className='iconscontact' >
                {icons.map(icon =>
                    <div style={{ width: '110px', marginLeft: '5%', textAlign: 'center' }}>
                        <img src={icon.img} style={{ width: '100%' }} />
                        <label>{icon.info}</label>
                    </div>
                )}
            </div>
            <div style={{ width: '100%' }}>
                <h2 style={{ textAlign: 'center' }}>Contáctanos por E-mail</h2>
                <div className='container-form'>
                    <div className='sub-container-form' style={{ padding: '3% 13% 8%' }}>
                        <h4>Tu nombre</h4>
                        <input className='input-form' type='text'></input>
                        <h4>Tu email</h4>
                        <input className='input-form' type='text'></input>
                        <h4>País</h4>
                        <select className='input-form'>
                            <option>COLOMBIA</option>
                            <option>ARGENTINA</option>
                            <option>VENEZUELA</option>
                            <option>BRAZIL</option>
                        </select>
                        <h4>Ciudad</h4>
                        <select className='input-form'>
                            <option>BOGOTÁ</option>
                            <option>CALI</option>
                            <option>MEDELLÍN</option>
                        </select>
                        <h4>Número de contacto</h4>
                        <input className='input-form' type='text'></input>
                        <h4>Mensaje</h4>
                        <textarea className='input-form-msg' type='text'></textarea>
                        <div style={{ textAlign: 'center', marginTop: '2%' }}>
                            <input style={{ transform: 'scale(2)', width: '5%' }} type='checkbox' />
                            <label>He leído y acepto los</label>
                            <a href='#'>Terminos y condiciones</a>
                        </div>
                        <div style={{justifyContent:'center', display:'flex', marginTop:'5%'}}>
                            <button className='button-contact' type="button">
                                <h4 style={{ margin: 'inherit' }}>
                                    ENVIAR
                            </h4>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
