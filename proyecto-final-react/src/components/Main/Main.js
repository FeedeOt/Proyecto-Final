import React from 'react';
import imageSliderA from "../../assets/img/Icon feather-arrow-left-circle.svg";
import imageSliderB from "../../assets/img/Icon feather-arrow-right-circle.svg"
import "../../scss/main.scss"

const Main = () => {
    return (
        <main>
            <section class="backg-main1">
                <div>
                    <button disabled="disabled" class="boton"></button>
                </div>
                <div id="div-main-h">
                    <section>
                        <h1>
                        <span class="h1-main1">We Help Businesses</span> <br/> <span class="h1-main2">Grow and Innovate</span>
                        </h1>
                    </section>
                    <section>
                        <h2>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut<br/>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et<br/>ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem<br/>ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea<br/>rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </h2>
                    </section>
                </div>
            </section>
            <section class="backg-main2">
                <div>
                    <button disabled="disabled" class="boton-main2"></button>
                </div>
                <div class="div2-main2">
                    <button disabled="disabled" class="boton-div-main2">
                        <div>
                            <h1 class="boton-main2-h1">
                                Sed ut perspiciatis
                            </h1>
                            <h2 class="boton-main2-h2">
                                Nemo Enim
                            </h2>
                            <h3 class="boton-main2-h3">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </h3>
                        </div>
                        <div class="botones-en-boton">
                            <img src={imageSliderA} alt="boton flecha izquierda"/>
                            <img src={imageSliderB} alt="boton flecha derecha"/>
                        </div>
                    </button>
                </div>

            </section>

        </main>
    
    )
}

export default Main;