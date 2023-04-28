import Header from "../components/Header";
import Pizza2 from "../images/pizza2.jpg";

function AboutPage() {
    return (
        <>
            <Header title="O NÁS"></Header>
            <main className="about-contact">
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis pulvinar.</p>
                    <p>Integer imperdiet lectus quis justo. Fusce tellus. Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                    <p>Phasellus et lorem id felis nonummy placerat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean vel massa quis mauris vehicula lacinia. Fusce tellus.</p>
                </section>
                <div className="gallery">
                    <div>
                        <img src={Pizza2} alt="food"/>
                        <div>
                            <p>Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                        </div>
                    </div>
                </div>
                <section>
                    <h3>Phasellus enim erat, vestibulum vel</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis pulvinar.</p>
                    <h3>Nunc tincidunt ante vitae massa</h3>
                    <p>Integer imperdiet lectus quis justo. Fusce tellus. Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                    <p>Nam quis nulla. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.</p>
                </section>
            </main>
        </>
    )
}

export default AboutPage;