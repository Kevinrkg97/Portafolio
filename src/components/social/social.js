import './social.css';
import twitter from './assets/twitter.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import whatsapp from './assets/whatsapp.svg';


const Social = () =>{
    return(
        <div className='social'>
            <ul>
                <li><a href='https://github.com/Kevinrkg97/' target='_blank' rel="noreferrer"><img src={github} alt='github'></img><span>github</span></a></li>
                <li><a href='https://www.linkedin.com/in/kevinrkg97/' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin'></img><span>linkedin</span></a></li>
                <li><a href='https://twitter.com/kevinrkg97' target='_blank' rel="noreferrer"><img src={twitter} alt='twitter'></img><span>Twitter</span></a></li>
                <li><a href='https://wa.me/+5215539650500/' target='_blank' rel="noreferrer"><img src={whatsapp} alt='whatsapp'></img><span>whatsapp</span></a></li>

            </ul>
        </div>
    )
}

export default Social;