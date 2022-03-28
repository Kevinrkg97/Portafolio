import './header.css';
import dev from './assets/dev.svg';

const Header = () => {

  
    return (
        <section className='header'>
            <div className='container'>
                <div className='text'>
                    <h2>Mi nombre es Kevin Guzmán</h2>
                    <h3>Soy desarrollador de software</h3>
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