import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../images/pizza-python-logo.png"

function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "MENU", path: "/menu" },
    { label: "O NÁS", path: "/about" },
    { label: "KONTAKT", path: "/contact" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

    renderedLinks.push(
      <Link key="PŘIHLÁŠENÍ" to="/login">
        PŘIHLÁŠENÍ
      </Link>
    )


  const handleClick = () => {
    if (pathname !== "/") {
      navigate("/")
    }
  }

  return (
    <nav>
      <img id="main-logo" src={Logo} alt="Pizza Python Logo" onClick={handleClick} />
      <div id="nav-links">
        {renderedLinks}
        <FaFacebookSquare />
        <FaInstagramSquare />
      </div>
    </nav>
  );
}

export default Navigation;
