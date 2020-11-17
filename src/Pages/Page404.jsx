import {Link} from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import '../Styles/Page404.css';
import Gif from '../img/erro.gif';
function Page404() {
    return (
      <div>
          <Header />
          <img className="gif" src={Gif} alt="Erro 404"/>
          <h1>Oops! Não encontrei essa página =O</h1>
          <Link className="voltar" to="/">Voltar ao menu principal</Link>
          
          <Footer/>
      </div>
    );
  }
  export default Page404;