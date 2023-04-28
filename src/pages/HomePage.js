import useUserContext from "../hooks/use-user-context";

import PizzaHomePage from "../images/pizza-homepage.jpg"
import HamburgerHomePage from "../images/hamburger-homepage.jpg"
import FoodHomePage from "../images/food-homepage.jpg"
import HamburgerHomePage2 from "../images/hamburger2-homepage.jpg"
import Pizza1 from "../images/pizza1.jpg"
import Pizza2 from "../images/pizza2.jpg"

function HomePage() {
    const { user } = useUserContext()

    let name;
    if (user.name) {
        name = <h3>{user.name}, VÍTEJTE.</h3>
    }
    return (
        <>
            <header className="homepage">
                <img src={HamburgerHomePage2}  alt="Hamburger"/>
                <img src={FoodHomePage}  alt="Food"/>
                <img src={PizzaHomePage}  alt="Pizza"/>
                <img src={HamburgerHomePage}  alt="Hamburger"/>
            </header>
            <main className="homepage">
                <section>
                    <h1>Pizza Python!</h1>
                    {name || null}
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis pulvinar.</p>
                    <p>Integer imperdiet lectus quis justo. Fusce tellus. Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                    <p>Phasellus et lorem id felis nonummy placerat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean vel massa quis mauris vehicula lacinia. Fusce tellus.</p>
                </section>
                <div className="gallery">
                    <div>
                        <img src={Pizza1} alt="food"/>
                        <div>
                            <p>Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Nam quis nulla. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.</p>
                        </div>
                        <img src={Pizza2} alt="food"/>
                    </div>
                </div>
                <section>
                    <h2>Duis pulvinar</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis pulvinar.</p>
                    <h2>Fusce tellus</h2>
                    <p>Integer imperdiet lectus quis justo. Fusce tellus. Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                    <h2>Pharetra vitae</h2>
                    <p>Nam quis nulla. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.</p>
                </section>
            </main>
        </>
    )
}

export default HomePage;