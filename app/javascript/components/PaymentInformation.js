import React, { useEffect, useRef, useState } from "react";

import SeeButton from "./SeeButton";
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
const fields = ["correo", ""]
const PaymentInformation = ({ products, currentUser }) => {
  const [check, setCheck] = useState("Acount");
  const [cuenta, setCuenta] = useState(1);
  const [signIn, setSignIn] = useState(null);
  const [formu, setform] = useState(null);
  const [forgot, setForgot] = useState(null);
  const [viewPayment, setViewPayment] = useState(1);

  useEffect(() => {
    let a = document.getElementById("registerLink")
    let b = document.getElementById("forgotPass")
    let c = document.getElementById("loginLink")
    if (a) {
      a.onclick = () => { setCuenta(2); document.documentElement.scrollTop = 0; }
    } if (b) {
      b.onclick = () => { setCuenta(4); document.documentElement.scrollTop = 0; }
    }
    if (c) {
      c.onclick = () => { setCuenta(1); document.documentElement.scrollTop = 0; }
    }
  }, [signIn, cuenta, formu])

  console.log('currentUser :>> ', currentUser);

  useEffect(() => {
    fetch("/users/sign_in")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("signIn__form")[0];
        let input = formulario && formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        let a = formulario.getElementsByTagName("a")[0]
        let b = formulario.getElementsByTagName("a")[1]
        a.setAttribute("id", "registerLink")
        b.setAttribute("id", "forgotPass")
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
        let input = formulario && formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        let c = formulario.getElementsByClassName("checkIn__signIn")[0]
        c.setAttribute("id", "loginLink")
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
        let input = formulario && formulario.getElementsByTagName("input")[1];
        input.value = "screen2";
        let inputButton = formulario.getElementsByTagName("input")[3];
        inputButton.setAttribute("id", "forgot_button")
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
            {!currentUser&&<legend>Iniciar Sesión</legend>}
            <div className='paymentInformation__acount-login' dangerouslySetInnerHTML={{ __html: signIn }} />
            {currentUser && 
            <div className="paymentInformation__acount-logout">
              <a data-method="delete" href="/users/sign_out">Cerrar Sesión</a>
            </div>}
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
                  <div className='paymentInformation__acount-forgot' dangerouslySetInnerHTML={{ __html: forgot }} />
                  <div className='paymentInformation__acount-back'><a onClick={() => setCuenta(1)}>Atrás</a></div>
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
                    check === "Payment" &&
                    <>
                      {viewPayment === 1 ?
                        <div className="paymentInformation__payment" style={{ alignItems: "center" }}>
                          <legend>Métodos de pago</legend>
                          <SeeButton textBtn={"Pagar con Wompi"} listener={() => setViewPayment(2)} />
                        </div>
                        :
                        <form action="https://checkout.wompi.co/p/" method="GET" id="wompi">
                          <input type="hidden" name="public-key" value="pub_test_XoT8TA41lZdIxMoT01XJUTD9MGzj7rWD" />
                          <input type="hidden" name="currency" value="COP" />
                          <input type="hidden" name="amount-in-cents" value="12000000" />
                          <input type="hidden" name="reference" value="3264" />
                          <input type="hidden" name="signature:integrity" value="cbecb046c0967171bdff26e87c1a7d70c758b48cc2955e02c0ad2c30165ccff4"/>
                          <input type="hidden" name="redirect-url" value="http://localhost:3000/succesPurchase" />
                          <input type="hidden" name="tax-in-cents:vat" value="150000" />
                          <input type="hidden" name="tax-in-cents:consumption" value="100000" />
                          <input type="hidden" name="customer-data:email" value="test@test.com" />
                          <input type="hidden" name="customer-data:full-name" value="Homero Simpson" />
                          <input type="hidden" name="customer-data:phone-number" value="4152121" />
                          {/* <input name="customer-data:legal-id-type" value="CC" /> */}
                          <select form = "wompi">
                             <option value = {"CE"}> CE </option>
                             <option value = {"CC"}> CC </option>
                          </select>
                          <input name="customer-data:legal-id"/>
                          <input type="hidden" name="shipping-address:address-line-1" value="Salitre Plaza" />
                          <input type="hidden" name="shipping-address:country" value="CO" />
                          <input type="hidden" name="shipping-address:phone-number" value="4152121" />
                          <input type="hidden" name="shipping-address:city" value="Bogota" />
                          <input type="hidden" name="shipping-address:region" value="Cundinamarca" />
                          <button className="paymentInformation__paymentButton" type="submit">Pagar con Wompi</button>
                        </form>
                      }
                    </>

                  )}
      </div>
    </div>
  );
};

export default PaymentInformation;
