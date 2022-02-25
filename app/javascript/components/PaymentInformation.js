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



const PaymentInformation = ({ items, currentUser, total_cost, authenticity_token, cost }) => {
  const [check, setCheck] = useState("Acount");
  const [cuenta, setCuenta] = useState(1);
  const [signIn, setSignIn] = useState(null);
  const [formu, setform] = useState(null);
  const [forgot, setForgot] = useState(null);
  const [viewPayment, setViewPayment] = useState(1);
  const [answer, setAnswer] = useState(null);
  // const [available, setAvailable] = useState(null);



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


  const checkStock = async () => {
    const obj = {}
    {
      items.map((product) => (
        console.log(product),
        obj[product.photo.id] = product.quantity
      ))
    }
    console.log("obj", obj)

    api.verifyAvailable({ ids: obj }, (response) => {
      console.log('response', response)
      if (response.success) {

        fetch('/transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ total_cost: total_cost, products: items, authenticity_token: authenticity_token }),
        }).then(response => response.json())
          .then(data => {
            console.log(data)
            setAnswer(data)
            setCheck("Payment")
          })
      }
      else {
        alert(response.msg)
      }
    })
  }

  useEffect(() => {
    fetch("/users/sign_in")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("signIn__form")[0];
        if (formulario) {
          let input = formulario && formulario.getElementsByTagName("input")[1];
          input.value = "screen2"
          let a = formulario.getElementsByTagName("a")[0]
          let b = formulario.getElementsByTagName("a")[1]
          a.setAttribute("id", "registerLink")
          b.setAttribute("id", "forgotPass")
          a.removeAttribute("href")
          b.removeAttribute("href")
          setSignIn(formulario.outerHTML);
        }
      });
    fetch("/users/sign_up")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("checkIn__form")[0];
        if (formulario) {
          let input = formulario && formulario.getElementsByTagName("input")[1];
          input.value = "screen2"
          let c = formulario.getElementsByClassName("checkIn__signIn")[0]
          c.setAttribute("id", "loginLink")
          c.removeAttribute("href")
          setform(formulario.outerHTML);
        }
      });
    fetch("/users/password/new")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = data;
        let formulario = wrapper.getElementsByClassName("forgotPass__form")[0];
        if (formulario) {
          let input = formulario && formulario.getElementsByTagName("input")[1];
          input.value = "screen2"
          let inputButton = formulario.getElementsByTagName("input")[3];
          inputButton.setAttribute("id", "forgot_button")
          setForgot(formulario.outerHTML);
        }
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
            {!currentUser && <legend>Iniciar Sesión</legend>}
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
                      <h3>{`${items.length} Producto(s)`}</h3>
                      <hr />

                      {items.map((product) => (
                        console.log(product),
                        <div key={product.id}>
                          <span>{product.photo.name}</span>
                          <span>${product.photo.base_price * product.quantity}</span>
                        </div>
                      ))}
                      <div>
                        <span>Costo de envio</span>
                        <span>$0</span>
                      </div>
                      <div>
                        <span>Descuento</span>
                        <span>-$0</span>
                      </div>
                      <div>
                        <span>IVA (19%)</span>
                        <span>${total_cost * 0.19}</span>
                      </div>
                    </div>
                    <div className="paymentInformation__total">
                      <span>Total</span>
                      <span>${total_cost + (total_cost * 0.19)}</span>
                    </div>
                    <div className="paymentInformation__code">
                      <label>Código de Descuento</label>
                      <input type="text"></input>
                      <button type="button">Redimir</button>
                    </div>
                    <button type="button" onClick={() => checkStock()}>
                      Pagar
                    </button>
                  </div>
                )
                  : (
                    check === "Payment" && answer &&
                    <>
                      {viewPayment === 1 ?
                        <div className="paymentInformation__payment" style={{ alignItems: "center" }}>
                          <legend>Métodos de pago</legend>
                          <SeeButton textBtn={"Pagar con payU"} listener={() => setViewPayment(2)} />
                        </div>
                        :
                        <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                        <input name="merchantId"      type="hidden"  value="508029"  />
                        <input name="accountId"       type="hidden"  value="512321"/>
                        <input name="description"     type="hidden"  value="TRUE" />
                        <input name="referenceCode"   type="hidden"  value={answer.ref_number}/>
                        <input name="amount"          type="hidden"  value={answer.total_cost}  />
                        <input name="tax"             type="hidden"  value={answer.iva_tax} />
                        <input name="taxReturnBase"   type="hidden"  value={(answer.total_cost - answer.iva_tax - answer.consumption_tax) / 100}/>
                        <input name="currency"        type="hidden"  value="COP"/>
                        <input name="signature"       type="hidden"  value={answer.signature}/>
                        <input name="test"            type="hidden"  value="1"/> 
                        <input name="buyerEmail"      type="hidden"  value={currentUser.email}/>
                        <input name="responseUrl"     type="hidden"  value="https://artree-shop.herokuapp.com/result"/> 
                        <input name="confirmationUrl" type="hidden"  value="https://artree-shop.herokuapp.com/payu_response"/>
                        <input name="shippingCountry" type="hidden"  value="CO"/>
                        <input name="shippingAddress" placeholder="Direccion"/>
                        <input name="extra1"          placeholder="Cedula"/>
                        <input name="shippingCity"    placeholder="Ciudad"/>
                        <input name="Submit"          type="submit"  value="Pagar con payU"/>
                      </form>
                      }
                    </>
                  )}
      </div>
    </div>
  );
};

export default PaymentInformation;
