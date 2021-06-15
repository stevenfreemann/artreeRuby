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
  const [formu, setform] = useState(null);
  const [signIn, setSignIn] = useState(null);
  const [forgot, setForgot] = useState(null);
  const products = props.products;

  const linkRef = useRef({})

  const changeCuenta = () => {
      setCuenta(2)
  }
  const setAttribute = () => {
    let a = document.getElementById("registerLink")
    // a.onclick= ()=>changeCuenta()
    console.log('2',a)
  }
  setAttribute()

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
        input.value = "screen3";
        let a = formulario.getElementsByTagName("a")[0]
        // a.addEventListener("click", console.log('aqui')
        // );
        a.setAttribute("id","registerLink")
        a.removeAttribute("href")
        console.log('1',a)
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
        setform(formulario.outerHTML);
      });
    fetch("/users/password/new")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("forgot__form")[0];
        let input = formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        setForgot(formulario.outerHTML);
      });
  }, []);
 console.log(linkRef.current)
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
          <div dangerouslySetInnerHTML={{ __html: signIn }} />
        ) 
        : check === "Acount" && cuenta === 2 ? (
          <div dangerouslySetInnerHTML={{ __html: formu }} />
        ) 
        : check === "Acount" && cuenta === 3 ? (
          <div className="paymentInformation__welcome">
            <legend>Registrate</legend>
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
            <div dangerouslySetInnerHTML={{ __html: forgot}} />
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
