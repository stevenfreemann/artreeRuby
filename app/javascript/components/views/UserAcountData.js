import React, { useEffect, useRef, useState } from 'react'
import edit from '../../assets/static/buttons/editarlapiz@2x.png'
import AddAdressModal from '../AddAddresModal'

const UserAcountData = ({ userAcount }) => {
    const [prevId, setPrevId] = useState(null)
    const [prevId2, setPrevId2] = useState(null)
    const [showAddressModal, setShowAddressModal] = useState(false)

    const infoInput = [
        {
            label: 'Nombre',
            data: userAcount.name,
            type: 'text'
        },
        {
            // label: 'Documento',
            // data: `${userAcount.documentID.type} ${userAcount.documentID.numberID}`,
            // type: 'text'
            label: 'Documento',
            data: `CC ${userAcount.document}`,
            type: 'text'
        },
        {
            label: 'Correo',
            data: userAcount.email,
            type: 'email'
        },
        {
            label: 'Usuario',
            data: 'Por Definir',
            type: 'text'
        },
        {
            label: 'Telefono',
            data: userAcount.mobile2,
            type: 'tel'
        },
        {
            label: 'Celular',
            data: userAcount.mobile,
            type: 'text'
        },
    ]

    const addressInput = [
        {
            data1: 'Natalia Bedoya - 300 444 4444',
            data2: 'Calle 52 # 17 - 39, apto 302',
            data3: 'Bogotá D.C. (1113111), Chapinero'
        },
        {
            data1: 'Natalia Bedoya - 300 444 4444',
            data2: 'Calle 52 # 17 - 39, apto 302',
            data3: 'Bogotá D.C. (1113111), Chapinero'
        },

    ]

    const handleClick = (id) => {
        if (prevId) {
            let prevInput = document.getElementById(prevId)
            prevInput.setAttribute('disabled', '')
            prevInput.focus()
        }
        let input = document.getElementById(id)
        input.removeAttribute('disabled', '')
        input.focus()
        setPrevId(id)
    }
    const handleClickAddr = (id) => {
        for (let i = 1; i < 4; i++) {
            if (prevId2) {
                let prevInput = document.getElementById(`${prevId2}-${i}`)
                prevInput.setAttribute('disabled', '')
                prevInput.focus()
            }
            let input = document.getElementById(`${id}-${i}`)
            input.removeAttribute('disabled', '')
            input.focus()
        }
        setPrevId2(id)
    }

    return (
        <form className='userAcountData'>
            {showAddressModal&&<AddAdressModal showAddressModal={showAddressModal} listener={(showAddressModal)=>{setShowAddressModal(showAddressModal)}} />}
            <legend>Datos de cuenta</legend>
            <div className='userAcountData__main' >
                {infoInput.map((info, i) =>
                    <div key={(i + 1)} className='userAcountData__input' >
                        <label>{info.label}</label>
                        <input id={(i + 1)} placeholder={info.data} type={info.type} disabled />
                        {info.label !== 'Documento' && <img src={edit} alt='Editar' onClick={() => handleClick((i + 1))} />}
                    </div>
                )}
            </div>
            <legend>Direcciones</legend>
            <div className='userAcountData__address'>
                {addressInput.map((address, i) =>
                    <div key={i + 1} className='userAcountData__address-input'>
                        <input id={`address-input${i + 1}-1`} placeholder={address.data1} type='text' disabled />
                        <input id={`address-input${i + 1}-2`} placeholder={address.data2} type='text' disabled />
                        <input id={`address-input${i + 1}-3`} placeholder={address.data3} type='text' disabled />
                        <img src={edit} alt='Editar' onClick={() => handleClickAddr(`address-input${i + 1}`)} />
                    </div>
                )}
                <a onClick={() => setShowAddressModal(!showAddressModal)} style={{ cursor: 'pointer' }}>Agregar Domicilio</a>
            </div>
            <legend>Cambiar Contraseña</legend>
            <div className='userAcountData__pass'>
                <div>
                    <label>Contraseña Actual</label>
                    <input type='password' />
                </div>
                <div>
                    <label>Nueva Contraseña</label>
                    <input type='password' autoComplete="new-password"/>
                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input type='password' autoComplete="new-password"/>
                </div>
                <button type='button'>Actualizar</button>
            </div>
        </form>
    )
}

export default UserAcountData
