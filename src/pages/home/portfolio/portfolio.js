import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import './portfolio.css';
import "react-carousel-animated/dist/style.css";
import portfolioValues from "./portfolioValues";
import { hover } from "@testing-library/user-event/dist/hover";

const Portfolio = () => {
    return (
        <section className='portfolio' id="Portafolio">
             <div className="container">
      <ReactCarousel
        carouselConfig={{
          transform: {
            rotateY: {
              [BEFORE]: () => "rotateY(25deg)",
              [CENTER]: () => "rotateY(0deg)",
              [AFTER]: () => "rotateY(-25deg)"
            }
          }
        }}
        itemBackgroundStyle={{
          id: "itemCarousel",
          backgroundColor: "#000",
          borderRadius: "3px",
          boxShadow: "8px 12px 14px -6px black"
          
        }}
        containerBackgroundStyle={{
          filter: "blur(20px)",
          backgroundColor: "rgba(249, 168, 38, 0.3)"
        }}
        itemMaxWidth={50}
        carouselHeight="500px"
      >
        {portfolioValues[0].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="test"
            style={{
              maxHeight: "300px",
              maxWidth: "400px",
              borderRadius: "20px",
              boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
              margin: ".5rem"
            }}
          />
        ))}
      </ReactCarousel>
    </div>
        </section>
    )
}

export default Portfolio;