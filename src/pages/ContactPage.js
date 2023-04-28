import Header from "../components/Header";
import Pizza1 from "../images/pizza1.jpg";

function ContactPage() {
    return (
        <>
            <Header title="KONTAKT"></Header>
            <main className="about-contact">
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis pulvinar.</p>
                    <p>Integer imperdiet lectus quis justo. Fusce tellus. Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                    <p>Phasellus et lorem id felis nonummy placerat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean vel massa quis mauris vehicula lacinia. Fusce tellus.</p>
                </section>
                <div className="gallery bottom-margin">
                    <div>
                        <div>
                            <p>Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>
                        </div>
                        <img src={Pizza1} alt="food"/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage;