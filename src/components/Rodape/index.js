import './Rodape.css';

export const Rodape = () => {

    return(
        <footer className="container">
            <div className="social-links">
                <a href="www.facebook.com/"><img src= "../img/fb.png" alt="Facebook"/></a>
                <a href="www.twitter.com/"><img src= "../img/tw.png" alt="Facebook"/></a>
                <a href="www.instagram.com/"><img src= "../img/ig.png" alt="Facebook"/></a>
            </div>
            <div className= "logo">
            <img src= "../img/logo.png" alt="Logo"/>
            </div>
            <div className= "texto">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}