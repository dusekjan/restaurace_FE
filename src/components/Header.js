import Default from "../images/pizza2.jpg"
import Pizza1 from "../images/pizza1.jpg"


function Header({className, title, backgroundImgPath}) {
    const images = {
        pizza1: Pizza1
    }

    const backgroundImage = images[backgroundImgPath] || Default
    return (
        <header className={className}>
            <div className="background-anchor" style={{backgroundImage: `url('${backgroundImage}')`}}></div>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;