import Bolozero from "../../images/BoloZeroLac.jpg";
import Cakearco from "../../images/Cakearco.jpg";
import Cakeblue from "../../images/Cakeblue.jpg";
import Bolovulcao from "../../images/bolo-vulcao.jpg"
import ExibePerfil from "../ExibePerfil/ExibePerfil";
import "./Equipe.css";
function Equipe({n1,n2,n3,n4,h1,h2,h3,h4,e1}) {
  return (
    <>
    <h1>{e1}</h1>
      <div className="div-exibe">
        <ExibePerfil nome={n1} img={Bolozero} crt={h1} />
        <ExibePerfil nome={n2} img={Cakearco} crt={h2} />
        <ExibePerfil nome={n3} img={Cakeblue} crt={h3} />
        <ExibePerfil nome={n4} img={Bolovulcao} crt={h4} />
      </div>
    </>
  );
}

export default Equipe;
