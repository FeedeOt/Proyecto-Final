import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import imageSlider from "../../assets/img/slider-1@2x.png";


const Hero = () => {
    return (
        <section ClassName='Hero'>
            <Carousel fade>
                <Carousel.Item>
                    <img src={imageSlider} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <h3>Sed ut perspiciatis<br />unde omnis iste natus</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error<br />sit voluptatem accusantium doloremque.</p>
                        <Button variant='Primary'>Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imageSlider} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant='Primary'>Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imageSlider} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant='Primary'>Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
        
        // <section>
        //     <div className="img-header">
        //         <div>
        //             <h1>Sed ut perspiciatis<br />unde omnis iste natus</h1>
        //         </div>
        //         <div>
        //             <h2>Sed ut perspiciatis unde omnis iste natus error<br />sit voluptatem accusantium doloremque.</h2>
        //         </div>
        //         <div>
        //             <a href="">
        //                 <button className="boton">Read More</button>
        //             </a>
        //         </div>
        //     </div>
        // </section>
    );
}
export default Hero;