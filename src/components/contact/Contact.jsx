import "./contact.css";
import Phone from "./img/phone.png";
import Email from "./img/email.png";
import Address from "./img/address.png"
import { useRef, useContext } from "react";
import emailjs from 'emailjs-com';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDon] = useState(false);
    const theme = useContext(ThemeContext)
    const derkMode = theme.state.darkMode;

    const handleEnviar = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_isamaqv',
            'template_pbjd4a2',
            formRef.current,
            "user_63HZ7TIVQLDmZOmP4PzqR"
        )
            .then((result) => {
                console.log(result.text);
                setDon(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1>Vamos falar sobre o seu projeto</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            +55 (62) 98116-7144
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon"
                            />
                            jc7155004@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="c-icon"
                            />
                            Goiânia,Goiás
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Precissamos fechar esse negócio</b>Concorda?
                    </p>
                    <form ref={formRef} onSubmit={handleEnviar}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Nome" name="user_name" ></input>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Assunto" name="user_assunto" ></input>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" ></input>
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Enviar</button>
                        {done && ":)"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;