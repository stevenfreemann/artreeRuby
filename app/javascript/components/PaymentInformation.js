import React, { useState } from 'react'

import LogoVisa from '../assets/static/icon/visa-logo.png'
import LogoAmerican from '../assets/static/icon/american-express.png'
import LogoMaster from '../assets/static/icon/mastercard-logo.png'
import LogoPayPal from '../assets/static/icon/paypal-logo.png'

const usuario = "Natalia Bedoya"
const country = ["Colombia","Ecuador","Venezuela","Estados Unidos"]
const city = ["Bogotá","Medellín","Cali","Barranquilla"]
const ind = ["+57","+58","+59"]
const dir = ["Cra","Calle","Diagonal","Transversal"]
const sub = ["Interior","Apto"]

const PaymentInformation = (props) => {
    const [check, setCheck] = useState("Acount")
    const [cuenta, setCuenta] = useState(1)
    const products = props.products

    
    return (
        <div className="paymentInformation__cont">
            <div className="paymentInformation__tabs">
                <div className={check==="Acount" ? "paymentInformation__tabs--selected":""} onClick={()=>setCheck("Acount")}>Cuenta</div>
                <div className={check==="Check" ? "paymentInformation__tabs--selected":""} onClick={()=>setCheck("Check")}>Check Out</div>
                <div className={check==="Payment" ? "paymentInformation__tabs--selected":""} onClick={()=>setCheck("Payment")}>Pagos</div>
            </div>
            <div className="paymentInformation__acount">
                {check==="Acount"&&cuenta===1 ? 
                <form action="">
                    <legend>Login</legend>
                    <div>
                        <label>Nombre</label>
                        <input type="text" autocomplete="name"></input>
                    </div>
                    <div>
                        <label>Correo</label>
                        <input type="email" autocomplete="email"></input>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" autocomplete="password"></input>
                    </div>
                    <button type="button" onClick={()=>setCuenta(3)}>Entrar</button>
                    <div className="links">
                        <a onClick={()=>setCuenta(2)}>Registrarse</a>
                        <a>Recordar Contraseña</a>
                    </div>
                </form>
                :check==="Acount"&&cuenta===2?
                <form action="">
                    <legend>Registrarse</legend>
                    <label>Nombre</label>
                    <input type="text" autocomplete="name"></input>
                    <label>Correo</label>
                    <input type="email" autocomplete="email"></input>
                    <label>País</label>
                    <select>
                        {country.map((country)=>
                        <option>{country}</option>
                        )}
                    </select>
                    <label>Ciudad</label>
                    <select>
                        {city.map((city)=>
                        <option>{city}</option>
                        )}
                    </select>
                    <label>Teléfono</label>
                    <div className="tel">
                        <select>
                            {ind.map((ind)=>
                            <option>{ind}</option>
                            )}
                        </select>
                        <input type="tel" autocomplete="tel-national"></input>
                    </div>
                    <label>Dirección</label>
                    <div className="address">
                        <select>
                            {dir.map((dir)=>
                            <option>{dir}</option>
                            )}
                        </select>
                        <span>#</span>
                        <input type="text" autocomplete="off"></input>
                        <span>-</span>
                        <input type="text" autocomplete="off"></input>
                    </div>
                    <div className="address2">
                        <select>
                            {sub.map((sub)=>
                            <option>{sub}</option>
                            )}
                        </select>
                        <input type="text" autocomplete="off"></input>
                    </div>
                    <label>Contraseña</label>
                    <input type="password"></input>
                    <label> Confirmar Contraseña</label>
                    <input type="password"></input>
                    <div className="terms">
                        <input type="checkbox"></input>
                        <span>
                        He leído y acepto los <a href="#">Términos y condiciones</a>
                        </span>
                    </div>
                    <button type="button" onClick={()=>setCuenta(3)}>Registrarme</button>
                </form>
                :check==="Acount"&&cuenta===3?
                <div className="paymentInformation__welcome">
                    <legend>Registrate</legend>
                    <div>
                        <span>¡Bienvenido(a)!</span>
                        <span>{usuario}</span>
                    </div>
                    <button type="button" onClick={()=>setCheck("Check")}>Continuar Compra</button>
                    <button type="button">Agregar Domicilio</button>
                </div>
                :check==="Check"?
                <div className="paymentInformation__check">
                    <legend>¡Gracias por tú compra!</legend>
                    <span style={{alignSelf: "center", marginBottom:"10%"}}>En Artree estamos para ti</span>
                    <h3 style={{alignSelf: "center"}}>LISTA DE ORDEN</h3>
                    <div className="paymentInformation__market">
                        <h3>{`${products.length} Productos`}</h3>
                        <hr/>
                        {products.map((product)=>
                            <div key={product.id}>
                                <span>{product.name}</span>
                                <span>${product.price}</span>
                            </div>
                        )}
                        <div><span>Costo de envio</span><span>$0</span></div>
                        <div><span>Descuento</span><span>-$50.000</span></div>
                        <div><span>IVA (19%)</span><span>$102.600</span></div>
                    </div>
                    <div className="paymentInformation__total">
                        <span>Total</span>
                        <span>$592.600</span>
                    </div>
                    <div className="paymentInformation__code">
                        <label>Código de Descuento</label>
                        <input type="text"></input>
                        <button type='button'>Redimir</button>
                    </div>
                    <button type="button" onClick={()=>setCheck("Payment")}>Pagar</button>
                </div>
                :check==="Payment"&&
                <div className="paymentInformation__payment">
                   <legend>Métodos de pago</legend>
                   <button type="button">Débito PSE</button>
                   <button type="button">Crédito</button>
                   <button type="button">PayPal</button>

                   {/* <div className='paymentInformation__logo'>
                            <img className='payment-logo' src={LogoVisa} alt='Visa'/>
                            <img className='payment-logo' src={LogoAmerican} alt='American Express'/>
                            <img className='payment-logo' src={LogoMaster} alt='MasterCard'/>
                            <img className='payment-logo' src={LogoPayPal} alt='PayPal'/>
                    </div> */}
                </div>
                }
            </div>
        </div>
    )
}

export default PaymentInformation
