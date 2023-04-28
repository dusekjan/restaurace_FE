import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";


function App() {

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />  {/* magic for automatic scroll to the top after redirect */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="about" element={<AboutPage />} />

                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegistrationPage />} />

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
