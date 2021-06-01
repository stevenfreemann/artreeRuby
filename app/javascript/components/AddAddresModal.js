import React from 'react'
import SeeButton from './SeeButton'
import cerrar from '../assets/static/buttons/boton cerrar.png'
const dir = ['Cra', 'Cll']
const indicator = ['+57', '+49']
const optionDir = ['Interior']
const AddAdressModal = () => {
    const hiddenModal = () => {
        let cuerpo = document.body
        cuerpo.style.overflow = null
        let blur = document.getElementsByClassName('container-artree')[0]
        let modal = document.getElementsByClassName('container-addres-show')[0]
        blur.classList.replace('container-artree', 'container-artree-none')
        modal.classList.replace('container-addres-show', 'container-addres')
    }
    return (
        <div className='container-addres'>
            <div className="container-addres-modal">
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative' }}>
                    <h2 className='title-add-addres'>AGREGAR DOMICILIO</h2>
                    <img src={cerrar} className='img-close-modal-addres' onClick={() => hiddenModal()} />
                </div>
                <form className='form-addres'>
                    <div className='form-add-addres-input'>
                        <label className='label-modal-left' >Nombre</label>
                        <input className='inputs-form-addres-general'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label className='label-modal-right' >Correo</label>
                        <input className='inputs-form-addres-general-der'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label className='label-modal-left' >Ciudad</label>
                        <input className='inputs-form-addres-general'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label className='label-modal-right' >País</label>
                        <input className='inputs-form-addres-general-der'></input>
                    </div>
                    <div className='form-add-addres-input'>
                    <label className='label-modal-left' >Ciudad</label>
                        <div className='container-input-city'>  
                            <input className='inputs-form-addres-general' style={{ marginBottom: '3%' }}></input>
                            <label className='label-modal-left' >Telefono</label>
                            <div className='input-select-tel' style={{ display: 'flex' }}>
                                <select className='drop-down-form-addres' style={{ width: '16%' }}>
                                    {indicator.map(d =>
                                        <option>
                                            {d}
                                        </option>
                                    )}
                                </select>
                                <input style={{ width: '69%' }}></input>
                            </div>
                        </div>
                    </div>
                    <div className='form-add-addres-input'>
                        <label className='label-modal-right' >Direccion</label>
                        <div className='inputs-select-addres' >
                            <select className='drop-down-form-addres' style={{ width: '19%' }}>
                                {dir.map(d =>
                                    <option>
                                        {d}
                                    </option>
                                )}
                            </select>
                            <label style={{ marginRight: '5%' }}>#</label>
                            <input style={{ marginRight: '5%' }}></input>
                            <label style={{ marginRight: '5%' }}>-</label>
                            <input></input>
                        </div>
                        <div style={{ display: 'flex', marginTop: '8%', paddingLeft: '10%' }}>
                            <select className='drop-down-form-addres' style={{ width: '40%' }}>
                                {optionDir.map(d =>
                                    <option>
                                        {d}
                                    </option>
                                )}
                            </select>
                            <input className='inputs-form-addres-general' style={{ width: '40%', marginLeft: '6%' }}></input>
                        </div>
                    </div>
                </form>
                <div className='container-terminos-modal' >
                    <input style={{ marginRight: '3%', height: '20px', width: '20px' }} type='checkbox' />
                    <label>
                        He leído y acepto los
                    </label>
                    <a href='#'> términos y condiciones</a>
                </div>
                <div>
                    <button className='button-modal-addres' type='button'>
                        AGREGAR
                </button>
                </div>
            </div>
        </div>
    )
}

export default AddAdressModal