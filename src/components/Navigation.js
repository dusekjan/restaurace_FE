import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../images/pizza-python-logo.png"
import useUserContext from "../hooks/use-user-context";

function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useUserContext()

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

if (user.id) {
    const title = user.name !== "" ? user.name : user.email.split("@")[0]
    let label = title.length <= 15 ? title : `${title.slice(0, 13)}...`
    renderedLinks.push(
      <Link key={label} to="/manage/orders" className="user">
        {label}
      </Link>
    )
    if (user.role === "admin") {
      renderedLinks.push(
        <Link key="admin" to="/admin/orders" className="admin">
          ADMIN
        </Link>
      )
    }
  } else {
    renderedLinks.push(
      <Link key="PŘIHLÁŠENÍ" to="/login">
        PŘIHLÁŠENÍ
      </Link>
    )
  }

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
