import './exibePerfil.css';

function ExibePerfil({nome, img, crt}){
    return(
        <div>
            <img className="img-exibe-perfil" src={img} alt={nome}/>
            <h1>Nome: {nome}</h1>
            <p>Peso em kg: {crt}</p>
        </div>
    )
}

export default ExibePerfil;