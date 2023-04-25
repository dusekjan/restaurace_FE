import { Outlet } from "react-router-dom";
import useUserContext from "../hooks/use-user-context";
import { useEffect } from "react";
import Navigation from "./Navigation";

function Layout() {
    const { fetchUser } = useUserContext()

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return (
        <>
            <Navigation />
            <Outlet />
            <footer style={{height: "300px", textAlign: "center", lineHeight: "300px"}}>FOOTER</footer>
        </>
    )
}

export default Layout;
