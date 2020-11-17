import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faInstagram);  

function Footer() {
    return (
        <div className="footer">
        <div className="redes">
            <p2><strong>Redes Sociais!</strong></p2>
        </div>
        <section>
            <div className="rede">
                <a target='_blank' href="https://www.facebook.com/eric.sacardo"><FontAwesomeIcon icon={['fab', 'facebook-f']}/> Facebook</a> <br /><br />
                <a target='_blank' href='https://www.instagram.com/ericsacardo/'><FontAwesomeIcon icon={['fab', 'instagram']}/> Instagram</a>
            </div>
        </section>
        
        <div className="Contato">
                <h5>Contato</h5>
                <p><strong>Eric Sacardo  </strong> (45) 9 9832-9727</p>         
         </div>
         
        
        <div className="copy">
           <p3>© 2020 Copyright</p3> 
        </div>
        
    </div>
    );
}
export default Footer;
