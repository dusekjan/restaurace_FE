import React, {useEffect, useRef} from 'react';
import { FaUser } from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux";
import { setUserData, setFormValue } from "../store";
import Input from "../components/Input";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill, RiRefreshFill} from "react-icons/ri";
import Header from "../components/Header";
import {makeRequest} from "../utils/requests";
import {useNavigate} from "react-router-dom";
import useUserContext from "../hooks/use-user-context";

function ManageProfilePage() {
    const dispatch = useDispatch();
    const submitButton = useRef(null)
    const { user, fetchUser } = useUserContext()
    const { name, email, password, passwordRepeat } = useSelector((state) => {
        return {
            name: state.userData.nameInput,
            email: state.userData.emailInput,
            password: state.userData.passwordInput,
            passwordRepeat: state.userData.passwordRepeatInput
        }
    });

    useEffect(() => {
        if (user.id) {
            dispatch(setUserData(user))
        }

        console.log(user)
    }, [user, dispatch])

    const handleChange = (event) => {
        const value = event.target.value
        switch (event.target.id) {
            case "name":
                dispatch(setFormValue(["nameInput", value]))
                break;
            case "email":
                dispatch(setFormValue(["emailInput", value]))
                break;
            case "password":
                dispatch(setFormValue(["passwordInput", value]))
                break;
            case "password-repeat":
                dispatch(setFormValue(["passwordRepeatInput", value]))
                break;
            default:
                console.log("EVENT NENALEZEN", event)
        }
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()

        // checkPasswords and Email on Server // TODO
        submitButton.current.disabled = true;
        let data = {};
        if (user.name !== name.trim()) {
            data.name = name
        }
        if (user.email !== email.trim()) {
            data.email = email
        }
        if (password !== "") {
            data.password = password
        }

        try {
            const response = await makeRequest("/user/data/", data, "PUT");
            if (response["json_status"] < 300){
                await fetchUser()
                dispatch(setFormValue(["passwordInput", ""]))
                dispatch(setFormValue(["passwordRepeatInput", ""]))
                alert("VAŠE DATA BYLA ÚSPĚŠNĚ AKTUALIZOVÁNA")
            } else if (response["json_status"] === 433) {
                alert("Nelze provádět změny u účtu Google.")
            }

            // TODO errory
        } catch (e) {
        }
        finally {
            submitButton.current.disabled = false
        }
    }


    return (
        <>
            <Header title="ÚČET"></Header>
            <main className="manage-profile">
                <h2>ZMĚNIT ÚDAJE:</h2>
                <form className="in-column" onSubmit={handleSubmitForm}>
                    <Input
                        label={<>{<FaUser/>}ZMĚNIT JMÉNO</>}
                        id="name"
                        type="text"
                        placeholder="Jan Novák"
                        value={name}
                        onChange={handleChange}/>
                    <Input
                        label={<>{<MdEmail/>}ZMĚNIT E-MAIL:</>}
                        id="email"
                        type="email"
                        placeholder="vas@email.cz"
                        value={email}
                        onChange={handleChange}/>
                    <Input
                        label={<>{<RiLockPasswordFill/>}ZMĚNIT HESLO:</>}
                        id="password"
                        type="password"
                        placeholder="*****"
                        value={password}
                        onChange={handleChange}/>
                    {password && <Input
                        label={<>{<RiRefreshFill/>}HESLO ZNOVU</>}
                        id="password-repeat"
                        type="password"
                        placeholder="*****"
                        value={passwordRepeat}
                        onChange={handleChange}/>}

                    <button ref={submitButton} type="submit">AKTUALIZOVAT ÚDAJE</button>
                </form>
            </main>
        </>
    )
}

export default ManageProfilePage;