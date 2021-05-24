import React from 'react'
import Title from '../Title'

const SignIn = () => {
    return (
        <div className='signIn'>
            <Title title='REGISTRATE' backTitle={true}/>
            <form className='signIn__form' action="">
                <div>
                    <label>Tu Nombre</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Tu Email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password"></input>
                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input type="password"></input>
                </div>
                <div className="signIn__form-terms">
                        <input type="checkbox"></input>
                        <span>
                        He leído y acepto los <a href="#">Términos y condiciones</a>
                        </span>
                </div>
                <button type="button">Registrarse</button>
            </form>
        </div>
    )
}

export default SignIn
