import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
