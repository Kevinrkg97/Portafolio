import React from "react";
import Particles from "react-tsparticles";
import './home.css';
import Navbar from '../../components/navbar/navbar';
import Social from '../../components/social/social';
import Footer from '../../components/footer/footer';
import Header from './header/header';
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Certificates from './certificates/certificates';

const Home  = () => {


    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };


    return (
        <div className="home">  
            <div className="container">
                <Social />
                <Header />
                <About />
                <Portfolio />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                width='100%'
                height='100vh'
                options={{
                  
                    particles: {
                    number: {
                        value: 50,
                        limit: 50,
                        density: {
                        enable: true,
                        value_area: 1000
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                        width: 3,
                        color: "#000000"
                        },
                        polygon: {
                        nb_sides: 5
                        },
                        image: {
                        src: "images/github.svg",
                        width: 200,
                        height: 100
                        }
                    },
                    opacity: {
                        value: 0.4,
                        random: true,
                        anim: {
                        enable: true,
                        speed: 0.1,
                        opacity_min: 0.2,
                        sync: false
                        }
                    },
                    size: {
                        value: 40,
                        random: true,
                        anim: {
                        enable: true,
                        speed: 2,
                        size_min: 10,
                        sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                        }
                    },
                    
                
                    modes: {
                        grab: {
                        distance: 400,
                        lineLinked: {
                            opacity: 1
                        }
                        },
                        bubble: {
                        distance: 400,
                        size: 100,
                        duration: 2,
                        opacity: 1,
                        speed: 2
                        },
                        repulse: {
                        distance: 200
                        },
                        push: {
                        particles_nb: 4
                        },
                        remove: {
                        particles_nb: 2
                        }
                    }
                    },
                    backgroundMask: {
                    enable: true,
                    cover: {
                        color: {
                        value: {
                            r: 0,
                            g: 0,
                            b: 0
                        }
                        }
                    }
                    },
                    retina_detect: true,
                    fps_limit: 60,
                    background: {
                    image: "url('https://particles.js.org/images/background3.jpg')"
                    }}}
            />
        </div>
    );
}

export default Home;