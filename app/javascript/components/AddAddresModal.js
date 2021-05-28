import React from 'react'
import SeeButton from './SeeButton'
import cerrar from '../assets/static/buttons/boton cerrar.png'
const dir = ['Cra', 'Cll']
const indicator = ['+57', '+49']
const optionDir = ['Interior']
const AddAdressModal = () => {
    const hiddenModal=()=>{
            let cuerpo=document.body
            cuerpo.style.overflow=null
            let blur = document.getElementsByClassName('container-artree')[0]
            let modal= document.getElementsByClassName('container-addres-show')[0]
            blur.classList.replace('container-artree','container-artree-none')
            modal.classList.replace('container-addres-show','container-addres')
    }
    return (
        <div className='container-addres'>
            <div className="container-addres-modal">
                <div style={{ display: 'flex', width:'100%', justifyContent:'center', position:'relative' }}>
                    <h2 className='title-add-addres'>AGREGAR DOMICILIO</h2>
                    <img src={cerrar} style={{position:'absolute', left:'96%', bottom:'66%'}} onClick={()=>hiddenModal()} />
                </div>
                <form className='form-addres'>
                    <div className='form-add-addres-input'>
                        <label style={{ paddingLeft: '2%' }}>Nombre</label>
                        <input className='inputs-form-addres-general'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label style={{ paddingLeft: '12%' }}>Correo</label>
                        <input className='inputs-form-addres-general-der'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label style={{ paddingLeft: '2%' }}>Ciudad</label>
                        <input className='inputs-form-addres-general'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label style={{ paddingLeft: '12%' }}>País</label>
                        <input className='inputs-form-addres-general-der'></input>
                    </div>
                    <div className='form-add-addres-input'>
                        <label style={{ paddingLeft: '2%' }}>Ciudad</label>
                        <input className='inputs-form-addres-general' style={{ marginBottom: '3%' }}></input>
                        <label style={{ paddingLeft: '2%' }}>Telefono</label>
                        <div style={{ display: 'flex' }}>
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
                    <div className='form-add-addres-input'>
                        <label style={{ paddingLeft: '12%' }}>Direccion</label>
                        <div className='inputs-select-addres' style={{ paddingLeft: '10%' }}>
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
                <div style={{ width: '29%', marginTop: '5%' }}>
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