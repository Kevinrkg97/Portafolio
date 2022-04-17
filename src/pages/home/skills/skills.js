import './skills.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import flutter from './assets/flutter.jpg';
import php from './assets/php.jpg';
import javascript from './assets/javascript.png';
import react from './assets/react.jpg';
import sql from './assets/sql.jpg';

const Skills = () => {
    return (
        <section className='skills' id='Habilidades'>
            <div className='certificates'>
            <Carousel 
               showThumbs={false}
               showStatus={false}
               infiniteLoop
               autoPlay
               // emulateTouch
               useKeyboardArrows
               transitionTime={1000}
            //    axis="vertical"
               centerMode
                
               //    selectedItem={1}
             >
                 <div className='slide-holder'>
                    <img src={flutter} alt='flutter' />
                </div>
                <div className='slide-holder'>
                    <img src={react} alt='react' />
                </div>
                <div className='slide-holder'>
                    <img src={javascript} alt='javascript' />
                </div>
                <div className='slide-holder'>
                    <img src={php} alt='php' />
                </div>
                <div className='slide-holder'>
                    <img src={sql} alt='sql' />
                </div>
            </Carousel>

            </div>
            <div className='technologies'>
                        <svg viewBox="0 0 36 36" class="circular-chart flutter">
                            <path class="circle1 circle"
                                stroke-dasharray="100, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart flask">
                            <path class="circle2 circle"
                                stroke-dasharray="100, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart pandas">
                            <path class="circle3 circle"
                                stroke-dasharray="100, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        
                        <svg viewBox="0 0 36 36" class="circular-chart react">
                            <path class="circle4 circle"
                                stroke-dasharray="100, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
             
                        <svg viewBox="0 0 36 36" class="circular-chart sql">
                            <path class="circle5 circle"
                                stroke-dasharray="100, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
             
                        <svg viewBox="0 0 36 36" class="circular-chart wordpress">
                            <path class="circle6 circle"
                                stroke-dasharray="100, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                
            </div>
        </section>
    )
}

export default Skills;