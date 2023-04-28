import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import ManageOrdersPage from "./pages/ManageOrdersPage";
import ScrollToTop from "./components/ScrollToTop";
import ManageProfilePage from "./pages/ManageProfilePage";


function App() {

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />  {/* magic for automatic scroll to the top after redirect */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="menu" element={<MenuPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegistrationPage />} />

                        <Route path="manage/orders" element={<ManageOrdersPage />} />
                        <Route path="manage/profile" element={<ManageProfilePage />} />

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
