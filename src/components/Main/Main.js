import ExibePerfil from '../ExibePerfil/ExibePerfil';
import NarutoPerfil from '../../images/narutoPerfil.webp';
import SasukePerfil from '../../images/sasukePerfil.webp';
import Sakura from '../../images/sakuraPerfil.webp';
import Kakashi from '../../images/kakashiPerfil.webp';
import Equipe from '../Equipe/Equipe';
import './main.css';

function Main() {
    let caracKakashi = "Ele é conhecido por seu domínio em diversas técnicas ninja, sendo especialmente famoso por seu uso do Sharingan (um poderoso jutsu ocular) e por sua habilidade de copiar técnicas de outros ninjas.";
    let caracNaruto = "Ele possui uma habilidade única chamada Chakra da Kyuubi, que lhe confere grande poder. Além disso, ele é habilidoso em técnicas de clonagem e é famoso por sua técnica Rasengan";
    let caracSasuke = "Ele é um usuário talentoso do Sharingan e, mais tarde, desenvolve o Mangekyou Sharingan. Sasuke também se torna um mestre em técnicas de manipulação de raios, conhecidas como Raiton";
    let caracSakura = " Ela é altamente treinada em técnicas médicas e se destaca na manipulação de chakra para curar ferimentos. Além disso, ela desenvolve habilidades de combate notáveis";

    return(
        <main>
          <Equipe n1='Bolo zero lactose' n2='Bolo arco iris' n3='Bolo azul' n4='Bolo vulcão chocolate' h1='1kg' h2='2kg' h3='1kg' h4='2kg' e1='Bolos pequenos'/>
          <Equipe n1='Bolo zero lactose' n2='Bolo arco iris' n3='Bolo azul' n4='Bolo vulcão chocolate' h1='2kg' h2='3kg' h3='2kg' h4='3kg' e1='Bolos grandes'/>
          
        </main>
    )
}

export default Main;