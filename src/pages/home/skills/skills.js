import './skills.css';
import flutter from './assets/flutter.jpg';

const Skills = () => {
    return (
        <section className='skills'>
            <div className='certificates'>
                <img src={flutter} alt='flutter' />
            </div>
            <div className='technologies'>
            
                        <svg viewBox="0 0 36 36" class="circular-chart flutter">
                            <path class="circle"
                                stroke-dasharray="90, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart pandas">
                            <path class="circle"
                                stroke-dasharray="40, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart flask">
                            <path class="circle"
                                stroke-dasharray="70, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart react">
                            <path class="circle"
                                stroke-dasharray="85, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
             
                        <svg viewBox="0 0 36 36" class="circular-chart sql">
                            <path class="circle"
                                stroke-dasharray="70, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
             
                        <svg viewBox="0 0 36 36" class="circular-chart wordpress">
                            <path class="circle"
                                stroke-dasharray="90, 100"
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