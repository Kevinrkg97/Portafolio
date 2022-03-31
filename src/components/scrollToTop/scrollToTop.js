import './scrollToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const ScrollToTop = () => {

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

    return(     
        <button className='scroll-to-top' onClick={scrollToTop} style={{display : visible ? 'inline' : 'none',}} >
            <FontAwesomeIcon icon={faAngleUp}  />
        </button>
    );
}

export default ScrollToTop;