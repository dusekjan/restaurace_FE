import {useRef, useState} from "react";
import Input from "./Input";
import { RiLockPasswordFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import {makeRequest} from "../utils/requests";
import useUserContext from "../hooks/use-user-context";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const { fetchUser } = useUserContext()
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
        // checkPasswords and Email on Server // TODO
        submitButton.current.disabled = true;

        try {
            const response = await makeRequest("/auth/login", {email, password });
            if (response["json_status"] < 300){
                await fetchUser()
                navigate("/")
            } else if (response["json_status"] === 433) {
                alert("Použijte příhlášení pomocí Google účtu.")
            }

            // TODO errory
        } catch (e) {
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
                type="email"
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