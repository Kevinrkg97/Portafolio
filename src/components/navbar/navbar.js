import './navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [visible, setVisible] = useState(false);


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

 
    window.addEventListener('scroll', toggleVisible);



    return (
        <div className='nav' style={{display : visible ? 'inline' : 'none'}}>
             <ul>
                <a href='#Inicio'><li >Inicio</li></a>
                <a href='#SobreMi'><li>Sobre mí</li></a>
                <a href='#Portafolio'><li>Portafolio</li></a>
                <a href='#Habilidades'><li>Habilidades</li></a>
                <button className="contactBtn" href='#contacto'>Contácto</button>
            </ul>
        </div>
    )
}

export default Navbar;