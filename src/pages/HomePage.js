import useUserContext from "../hooks/use-user-context";

import PizzaNew from "../images/pizza-new.jpg"
import HamburgerNew from "../images/hamburger-new.jpg"
import FoodNew from "../images/food-new.jpg"
import HamburgerNew2 from "../images/hamburger2-new.jpg"
import {useEffect} from "react";
import {Link} from "react-router-dom";

function HomePage() {
    const { user } = useUserContext()

    useEffect(() => {
        console.log(user)
    }, [user])

    let content;
    if (user.id) {
        content =
            <section>
                HOMEPAGE s ID: '{user.id}'
                <Link to="/manage/orders">Moje objednávky</Link>
            </section>
    } else {
        content = "HOMEPAGE"
    }

    return (
        <>
            <header className="homepage">
                <img src={HamburgerNew2}  alt="Hamburger"/>
                <img src={FoodNew}  alt="Food"/>
                <img src={PizzaNew}  alt="Pizza"/>
                <img src={HamburgerNew}  alt="Pizza"/>
            </header>
            <main className="homepage">
                {content}
            </main>
        </>
    )
}

export default HomePage;