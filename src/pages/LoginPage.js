import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import {Link} from "react-router-dom";


function LoginPage() {
    return (
        <>
            <Header title="PŘIHLÁŠENÍ"></Header>
            <main className="login">
                <LoginForm />
                <Link to="/register">NEMÁTE ÚČET?</Link>
            </main>
        </>
    )
}

export default LoginPage;