import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const message = useRef();

    const submit = (e) => {
        e.preventDefault();
        console.log(firstName.current.value);
        console.log(lastName.current.value);
        console.log(email.current.value);
        console.log(message.current.value);
        
    }

    return (
        <Container>
            <form id="contact_form" onSubmit={submit}>
                <Row className="justify-content-md-center">
                    <Col>
                        <h1>Contact Form</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm lg="3">
                        <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                            <Form.Control type="text" placeholder="First Name" ref={firstName} required />
                        </FloatingLabel>
                    </Col>
                    <Col sm lg="3">
                        <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                            <Form.Control type="text" placeholder="Last Name" ref={lastName} required />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm lg="6">
                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingEmail"
                            type="email"
                            placeholder="name@example.com"
                            ref={email}
                            required
                            />
                            <label htmlFor="floatingInputCustom">Your Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                            id="floatingMessage"
                            as="textarea"
                            placeholder="Message"
                            style={{ height: '200px' }}
                            ref={message}
                            required
                            />
                            <label htmlFor="floatingMessage">Send me a message!</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br/>
                        <br/>
                    </Col>
                </Row>
            </form>
        </Container>
        
    )
}

export default ContactForm
