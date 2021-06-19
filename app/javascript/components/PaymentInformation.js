import React, { useEffect, useRef, useState } from "react";

import LogoVisa from "../assets/static/icon/visa-logo.png";
import LogoAmerican from "../assets/static/icon/american-express.png";
import LogoMaster from "../assets/static/icon/mastercard-logo.png";
import LogoPayPal from "../assets/static/icon/paypal-logo.png";
import api from "./api";
import { element } from "prop-types";

const usuario = "Natalia Bedoya";
const country = ["Colombia", "Ecuador", "Venezuela", "Estados Unidos"];
const city = ["Bogotá", "Medellín", "Cali", "Barranquilla"];
const ind = ["+57", "+58", "+59"];

const PaymentInformation = (props) => {
  const [check, setCheck] = useState("Acount");
  const [cuenta, setCuenta] = useState(1);
  const [signIn, setSignIn] = useState(null);
  const [formu, setform] = useState(null);
  const [forgot, setForgot] = useState(null);
  const products = props.products;

  useEffect(() => {
    let a = document.getElementById("registerLink")
    let b = document.getElementById("forgotPass")
    let c = document.getElementById("loginLink")
    if (a){
      a.onclick= ()=>{setCuenta(2);document.documentElement.scrollTop = 0;}
    }if(b){
      b.onclick= ()=>{setCuenta(4);document.documentElement.scrollTop = 0;}
    }
    if (c){
      c.onclick= ()=>{setCuenta(1);document.documentElement.scrollTop = 0;}
    }
  }, [signIn,cuenta,formu])



  useEffect(() => {
    fetch("/users/sign_in")
    .then((res) => {
        return res.text();
    })
    .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("signIn__form")[0];
        let input = formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        let a = formulario.getElementsByTagName("a")[0]
        let b = formulario.getElementsByTagName("a")[1]
        a.setAttribute("id","registerLink")
        b.setAttribute("id","forgotPass")
        a.removeAttribute("href")
        b.removeAttribute("href")
        setSignIn(formulario.outerHTML);
    });
    fetch("/users/sign_up")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("checkIn__form")[0];
        let input = formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        let c = formulario.getElementsByClassName("checkIn__signIn")[0]
        c.setAttribute("id","loginLink")
        c.removeAttribute("href")
        setform(formulario.outerHTML);
      });
    fetch("/users/password/new")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("forgotPass__form")[0];
        let input = formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        let inputButton = formulario.getElementsByTagName("input")[3];
        inputButton.setAttribute("id","forgot_button")
        setForgot(formulario.outerHTML);
      });
  }, []);
  return (
    <div className="paymentInformation__cont">
      <div className="paymentInformation__tabs">
        <div
          className={
            check === "Acount" ? "paymentInformation__tabs--selected" : ""
          }
          onClick={() => setCheck("Acount")}
        >
          Cuenta
        </div>
        <div
          className={
            check === "Check" ? "paymentInformation__tabs--selected" : ""
          }
          onClick={() => setCheck("Check")}
        >
          Check Out
        </div>
        <div
          className={
            check === "Payment" ? "paymentInformation__tabs--selected" : ""
          }
          onClick={() => setCheck("Payment")}
        >
          Pagos
        </div>
      </div>
      <div className="paymentInformation__acount">
        {check === "Acount" && cuenta === 1 ? (
          <div>
            <legend>Iniciar Sesión</legend>
            <div className='paymentInformation__acount-login' dangerouslySetInnerHTML={{ __html: signIn }}/>
          </div>
        ) 
        : check === "Acount" && cuenta === 2 ? (
          <div>
            <legend>Regístrate</legend>
            <div className='paymentInformation__acount-registration' dangerouslySetInnerHTML={{ __html: formu }} />
          </div>
                    )
        : check === "Acount" && cuenta === 3 ? (
          <div className="paymentInformation__welcome">
            <div>
              <span>¡Bienvenido(a)!</span>
              <span>{usuario}</span>
            </div>
            <button type="button" onClick={() => setCheck("Check")}>
              Continuar Compra
            </button>
            <button type="button">Agregar Domicilio</button>
          </div>
        ) 
        : check === "Acount" && cuenta === 4 ? (
          <div>
            <legend>¿Olvidó su contraseña?</legend>
              <div className='paymentInformation__acount-forgot' dangerouslySetInnerHTML={{ __html: forgot}} />
            <div className='paymentInformation__acount-back'><a onClick={()=>setCuenta(1)}>Atrás</a></div>
          </div>
        )
        : check === "Check" ? (
          <div className="paymentInformation__check">
            <legend>¡Gracias por tú compra!</legend>
            <span style={{ alignSelf: "center", marginBottom: "10%" }}>
              En Artree estamos para ti
            </span>
            <h3 style={{ alignSelf: "center" }}>LISTA DE ORDEN</h3>
            <div className="paymentInformation__market">
              <h3>{`${products.length} Productos`}</h3>
              <hr />
              {products.map((product) => (
                <div key={product.id}>
                  <span>{product.name}</span>
                  <span>${product.price}</span>
                </div>
              ))}
              <div>
                <span>Costo de envio</span>
                <span>$0</span>
              </div>
              <div>
                <span>Descuento</span>
                <span>-$50.000</span>
              </div>
              <div>
                <span>IVA (19%)</span>
                <span>$102.600</span>
              </div>
            </div>
            <div className="paymentInformation__total">
              <span>Total</span>
              <span>$592.600</span>
            </div>
            <div className="paymentInformation__code">
              <label>Código de Descuento</label>
              <input type="text"></input>
              <button type="button">Redimir</button>
            </div>
            <button type="button" onClick={() => setCheck("Payment")}>
              Pagar
            </button>
          </div>
        ) 
        : (
          check === "Payment" && (
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
          )
        )}
      </div>
    </div>
  );
};

export default PaymentInformation;
