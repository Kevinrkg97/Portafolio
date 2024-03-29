import './contact.css';
import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import token from '../../../private';
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact (){

    const [captchaValido, cambiarCaptchaValido] = useState(null);
	const [usuarioValido, cambiarUsuarioValido] = useState(false);

	const captcha = useRef(null);


    function sendEmail(e) {
        e.preventDefault();
    
        

          if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarUsuarioValido(true);
			cambiarCaptchaValido(true);
            
            emailjs.sendForm(`${token.format}`, `${token.id}`, e.target, `${token.tokenUser}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
            });

		} else {
			console.log('Por favor acepta el captcha');
			cambiarUsuarioValido(false);
			cambiarCaptchaValido(false);
		}

      }

      const onChange = () => {
		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarCaptchaValido(true);
		}
	}


    return(
        <form className="contact" id="Contacto">
            {!usuarioValido &&
            <>
                <h2>Contáctame</h2>
                <hr />
                <form onSubmit={sendEmail} >
                    <div className="data">
                        <input type="text" placeholder="Nombre" name="nombre" />
                        <input type="number" placeholder="Teléfono" name="telefono" />
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="message">
                        <textarea type="text" placeholder="Escribe tu mensaje" name="mensaje" />
                    </div>
                    <div className="captcha">
                        <ReCAPTCHA
                            ref={captcha}
                            sitekey={`${token.captchaToken}`}
                            onChange={onChange}
                            theme='dark'
                        />
                    </div>
                    {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
                    <div className="btnSend">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </>
            }
            {usuarioValido && 
				<div className="sendedEmail">
                    {/* <img src={sent} alt="sent" /> */}
					<h1>Tu mensaje ha sido enviado.</h1>
				</div>
			}
        </form>
    );
}
