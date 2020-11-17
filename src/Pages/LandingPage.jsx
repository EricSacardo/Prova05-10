import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import img from '../img/logo.jpg';
import '../Styles/LandingPage.css';
function LandingPage() {
  return (
    <div>
        <Header />
        <div className="logoImagem">
            <img src={img} alt="imagem pe sobre o dia mundial do prematuro"></img>
            <div className="logoTexto">
                <h3>17 de Novembro Dia Mundial do Prematuro</h3>
            </div>
        </div>



        <Footer /> 
    </div>
  );
}
export default LandingPage;