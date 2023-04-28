import Header from "../components/Header";
import React from "react";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <Header title="CHYBA"></Header>
            <main className="error">
                <h2 style={{textDecoration: "underline"}}>
                    POKRAČUJTE NA HLAVNÍ STRÁNKU
                    <Link to={"/"}> &gt;&gt;ZDE&lt;&lt;</Link>
                </h2>
            </main>
        </>
    )
}

export default ErrorPage;