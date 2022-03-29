import './about.css';
import profile from './assets/profile.jpg';
import rkgg from './assets/RKGG.pdf';
import phone from './assets/phone.png';
import calendar from './assets/calendar.png';
import mexico from './assets/mexico.png';
import email from './assets/email.png';

const About = () => {
    return (
        <section className='about' id='SobreMi'>
            <div className='container'>
                <div className='profile'>
                    <img src={profile} alt='profile'></img>
                    <div className='card'>
                        <ul>
                            <li><img src={phone} alt='phone' />55 3965 0500</li>
                            <li><img src={email} alt='email' />kevinrkg97@gmail.com</li>
                            <li><img src={calendar} alt='calendar' />10/Marzo/1997</li>
                            <li><img src={mexico} alt='mexico' />CDMX</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='description'>
                <div className='content'>
                    <h2>Sobre Mí</h2>
                    <p>Me dedico principalmente al desarrollo web y móvil, tengo una carrera en Ing. en Sistemas y actualmente curso la Ing. en Ciencias de Datos.</p>
                    <p>Aunque me dedico al desarrollo full stack me interesa bastante Machine Learning, tengo conocimientos en estadística.</p>
                    <p>Me considero una persona con gusto por el aprendizaje y que se enfoca en resolver de la mejor forma los problemas.</p>
                </div>
                <div className='buttons'>
                    <a href={rkgg} alt='rkgg' target='_blank' rel="noreferrer">Descargar CV</a>
                </div>
            </div>
        </section>
    )
}

export default About;