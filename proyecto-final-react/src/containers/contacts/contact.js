import "../../scss/main.scss"
import {Form, Button} from 'react-bootstrap'
import imageSlider from "../../assets/img/contact-image@2x.png"


const Contact = () => {
    return (
        <section id="Contact">
            <div id="ContFooter">
                <div id="ContFooter1">
                    <h1>
                    Get in touch
                    </h1>
                    <h2>
                    We are hiring!
                    </h2>
                </div>
                <div id="ContFooter2">
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="Name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="Phone" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" placeholder="Message" rows={3} />
                        </Form.Group>
                        <Button variant='Primary'>Send</Button>
                    </Form>
                </div>
                <div id="ContFooter3">
                    <img className="imageContact" src={imageSlider} alt="Contact Image" />
                </div>
                <div id="ContFooter4"></div>
            </div>

        </section>
        )
}
export default Contact;