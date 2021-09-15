import { React, useState } from "react"
import "../../scss/main.scss"
import {Form, Button, Alert} from 'react-bootstrap'
import imageSlider from "../../assets/img/contact-image@2x.png"
import { sendForm } from "../../axios/index"


const Contact = () => {
    const [dataForm, setDataForm] = useState({});
    const [showAlert,setShowAlert] = useState(false);
    const [error,setError] = useState(false);
    const [validated,setValidated] = useState(false)


    const handleChange = (e) =>{
        setDataForm((prevData)=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value,
            }
        })
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.currentTarget;
        console.log("form.checkValidity()",form.checkValidity());
        setValidated (true)
        if (form.checkValidity() === false) {
            setError(true);
            setShowAlert(true);
        }else{
            const response = await sendForm(dataForm);
            if (response.status === 201) {
                setValidated(false)
                setShowAlert(true);
                setError(false);
                setTimeout(()=>{setShowAlert(false)},3000);
                form.reset();
            }
        }
    }
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
                    <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="Name" placeholder="Name" name="Name" onChange={(e)=>handleChange(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email" name="Email" onChange={(e)=>handleChange(e)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="tel" placeholder="Phone" name="Phone" onChange={(e)=>handleChange(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" placeholder="Message" name="Message" onChange={(e)=>handleChange(e)} rows={3} />
                        </Form.Group>
                        { showAlert ? !error ? <Alert variant={'success'}>Email enviado con éxito.
                        </Alert> : <Alert variant={'danger'}>Hubo un error al enviar el email.</Alert> : null }
                        <Button variant='Primary'type="submit">Send</Button>
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