import Logo from '../../images/Bolo2.png';
import './footer.css'

function Footer() {
    return(
        <footer>
            <img src={Logo} alt="Logo" id='image'/>
            <h2>Os melhores bolos da cidade!</h2>
        </footer>
    )
}


export default Footer