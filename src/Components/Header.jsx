import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import img1 from '../img/logo.png';

function Header() {
  return (
    <nav>
        <ul>
            <li>
                <img className="icone"src={img1} />
            </li>
            <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Contato</Link>
            </li>
            <li>
                <Link to="/">Localização</Link>
            </li>
            <li>
                <Link to="/"> Sobre </Link>
            </li>
            <li />
        </ul>
    </nav>
  );
}

export default Header;