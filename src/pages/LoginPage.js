import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import {makeRequest} from "../utils/requests";
import useUserContext from "../hooks/use-user-context";
import {FcGoogle} from "react-icons/fc";

/**
 * Normally, the browser would render the HTML and, depending on the action,
 * automatically submit the data of the form based on each element's name attribute.
 * Although this default behavior still works in React.js,
 * it is highly advised to programmatically submit a form
 * by supplying your own custom controls on how data is processed by a component.
 * https://www.pluralsight.com/guides/form-submission-in-reactjs
 *
 */
function LoginPage() {
    const navigate = useNavigate()
    const { fetchUser } = useUserContext()

    const handleGoogleSuccess = async (data) => {
        const accessToken = data.access_token

        try {
            const googleData = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: 'application/json'
                    }
                })

            const jsonGoogleData = await googleData.json()
            if (googleData.status === 200){
                const response = await makeRequest("/auth/login-google/", {
                    email: jsonGoogleData.email,
                    name: jsonGoogleData.name,
                    id: jsonGoogleData.id
                })

                if (response.json_status < 300){
                    await fetchUser()
                    navigate("/")
                } else {
                    console.log("Login with Google fail:", response)
                }

            } else {
                console.log("Google fail:", googleData)
            }

        } catch (e) {
            console.log("Google fail:", e)
        }
    }
    const handleGoogleError = (error) => {
        console.log(error)
    }

    const googleLogin = useGoogleLogin({
        onSuccess: handleGoogleSuccess,
        onError: handleGoogleError
    });

    return (
        <>
            <Header title="PŘIHLÁŠENÍ"></Header>
            <main className="login">
                <LoginForm />
                <div id="google-oauth">
                    <button onClick={() => googleLogin()} >PŘIHLÁSIT POMOCÍ GOOGLE <FcGoogle/></button>
                </div>
                <Link to="/register">NEMÁTE ÚČET?</Link>
            </main>
        </>
    )
}

export default LoginPage;