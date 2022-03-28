import './about.css';
import profile from './assets/profile.jpg';

const About = () => {
    return (
        <section className='about' id='SobreMi'>
            <div className='container'>
                <div className='profile'>
                    <img src={profile} alt='profile'></img>
                    <div className='card'>
                        <h3>Contacto</h3>
                        <ul>
                            <li>Número: 55 3965 0500</li>
                            <li>Email: kevinrkg97@gmail.com</li>
                            <li>Nacimiento: 10/03/1997</li>
                            <li>Ciudad: CDMX, MX.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='description'></div>
        </section>
    )
}

export default About;