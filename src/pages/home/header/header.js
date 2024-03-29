import './header.css';
import dev from './assets/dev.svg';

const Header = () => {

  
    return (
        <section className='header' id='inicio'>
            {/* <div className='navhead'>
                    <ul>
                        <a href='#Inicio'><li>Inicio</li></a>
                        <a href='#SobreMi'><li>Sobre mí</li></a>
                        <a href='#Portafolio'><li>Portafolio</li></a>
                        <a href='#Habilidades'><li>Habilidades</li></a>
                    </ul>
                </div> */}
            <div className='container' >   
                <div className='text'>
                    <h2>Soy Desarrollador </h2>
                    <h3>de Software</h3>
                    <button className="contactBtn" href='#Contacto'>Contáctame</button>
                </div>
                <div className='image'>
                    <img src={dev} alt='dev'></img>
                </div>
            </div>
        </section>
    )
}

export default Header;