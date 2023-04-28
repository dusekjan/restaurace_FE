import {useRef, useState} from "react";
import Input from "./Input";
import { RiLockPasswordFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import {makeRequest} from "../utils/requests";
import {useNavigate} from "react-router-dom";
import {isLoginFormValid} from "../utils/validators";

function LoginForm() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const submitButton = useRef(null)
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        try {
            submitButton.current.disabled = true;

            if (!isLoginFormValid(email, password)) {
                alert("Překontrolujte zadané údaje")
                return
            }

            const response = await makeRequest("/auth/login", {email, password });
            switch (response["json_status"]) {
                case 200:
                case 201:
                    alert("Úspěšné přihlášení.")
                    navigate("/")
                    break;
                case 433:
                    alert("Použijte příhlášení pomocí vašeho Google účtu.")
                    break;
                case 404:
                    alert("Špatně zadaný email nebo heslo.")
                    break;
                default:
                    alert("Nastala chyba.")
            }
        } catch (e) {
            console.log(e)
        }
        finally {
            submitButton.current.disabled = false
        }
    }

    return (
        <form className="in-column" onSubmit={handleOnSubmit}>
            <Input
                label={<>{<MdEmail/>}E-MAIL</>}
                id="email"
                type="text"
                placeholder="jan.novak@email.cz"
                value={email}
                onChange={handleEmailChange}/>
            <Input
                label={<>{<RiLockPasswordFill/>}HESLO</>}
                id="password"
                type="password"
                placeholder="*****"
                value={password}
                onChange={handlePasswordChange}/>

            <button className="button" ref={submitButton}>PŘIHLÁSIT SE</button>
        </form>
    );
}

export default LoginForm;