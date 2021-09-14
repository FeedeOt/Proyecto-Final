import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import imageSliderC from "../../assets/img/slider-1.png";
import "../../scss/main.scss"


const Hero = () => {
    return (
        <section ClassName='Hero'>
            <Carousel fade>
                    <Carousel.Item>
                    <img className="d-block w-100" src={imageSliderC} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Sed ut perspiciatis<br />unde omnis iste natus</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error<br />sit voluptatem accusantium doloremque.</p>
                        <Button variant='Primary'>Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imageSliderC} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant='Primary'>Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imageSliderC} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant='Primary'>Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
export default Hero;