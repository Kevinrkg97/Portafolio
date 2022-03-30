import './header.css';
import dev from './assets/dev.svg';

const Header = () => {

  
    return (
        <section className='header' id='inicio'>
            <div className='container' >
                <div className='nav'>
                    <ul>
                        <a href='#Inicio'><li>Inicio</li><span /></a>
                        <a href='#SobreMi'><li>Sobre mí</li><span /></a>
                        <a href='#Portafolio'><li>Portafolio</li><span /></a>
                        <a href='#Habilidades'><li>Habilidades</li><span /></a>
                    </ul>
                </div>
                <div className='text'>
                    <h2>Soy Desarrollador </h2>
                    <h3>de Software</h3>
                    <button className="contactBtn" href='#contacto'>Contáctame</button>
                </div>
                <div className='image'>
                    <img src={dev} alt='dev'></img>
                </div>
            </div>
        </section>
    )
}

export default Header;