import { Outlet } from "react-router-dom";
import useUserContext from "../hooks/use-user-context";
import { useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
    const { fetchUser } = useUserContext()

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
