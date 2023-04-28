import { useState, useRef } from "react";
import { makeRequest } from "../utils/requests";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill, RiRefreshFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { FaUser } from "react-icons/fa"

import useUserContext from "../hooks/use-user-context";
import Input from "./Input";
import {isRegistrationFormValid} from "../utils/validators";
import PasswordInfo from "./PasswordInfo";


function RegistrationForm() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ passwordRepeat, setPasswordRepeat ] = useState("")
    const { fetchUser } = useUserContext()
    const submitButton = useRef(null)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const value = event.target.value
        switch (event.target.id) {
            case "name":
                setName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            case "password-repeat":
                setPasswordRepeat(value)
                break;
            default:
                console.log("EVENT NENALEZEN", event)
        }
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        try {
            submitButton.current.disabled = true;

            if (password !== passwordRepeat) {
                alert("Zadaná hesla se neshodují.")
                return
            } else if (!name) {
                alert("Vyplňte vaše jméno.")
                return
            } else if (!isRegistrationFormValid(name, email, password)) {
                alert("Překontrolujte zadané údaje")
                return
            }

            const response = await makeRequest("/auth/register", { name, email, password });
            if (response["json_status"] < 300){
                await fetchUser()
                navigate("/")
            } else if (response["json_status"] === 409){
                alert("Uživatel s tímto emailem již existuje.")
            } else {
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
        <form className="in-column" onSubmit={handleSubmitForm}>
            <Input
                label={<>{<FaUser/>}JMÉNO</>}
                id="name"
                type="text"
                placeholder="Jan Novák"
                value={name}
                onChange={handleChange}/>
            <Input
                label={<>{<MdEmail/>}E-MAIL:</>}
                id="email"
                type="text"
                placeholder="vas@email.cz"
                value={email}
                onChange={handleChange}/>
            <PasswordInfo />
            <Input
                label={<>{<RiLockPasswordFill/>}HESLO:</>}
                id="password"
                type="password"
                placeholder="*****"
                value={password}
                onChange={handleChange}/>
            <Input
                label={<>{<RiRefreshFill/>}HESLO ZNOVU</>}
                id="password-repeat"
                type="password"
                placeholder="*****"
                value={passwordRepeat}
                onChange={handleChange}/>

            <button ref={submitButton} type="submit">REGISTROVAT SE</button>
        </form>
    );
}

export default RegistrationForm;