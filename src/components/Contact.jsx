import React, { useRef } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);

    emailjs
      .sendForm(
        "service_t8usoqn",
        "template_cbfdb16",
        form.current,
        "user_LCeauX4RMI8720l37xEgk"
      )
      .then(
        function (response) {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for your message! I will respond shortly.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          Swal.fire({
            title: "Whoops!",
            text: "Something went wrong.",
            icon: "error",
            confirmButtonText: "Ok",
          });
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="pb-4">
      <Container className="contact-wrapper">
        <Row>
          <Col size="col-md-6 justify-content-center">
            <div className="card mt-4 pb-4">
              <h1 className="heading">Let's Connect</h1>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3 w-75 mx-auto"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Last"
                      name="name"
                      autoComplete="on"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-75 mx-auto"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      autoComplete="on"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formComment"
                ></Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Comments"
                  className="w-75 mx-auto"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    name="message"
                    style={{ height: "100px" }}
                    required
                  />
                </FloatingLabel>
                <Container className="center mt-4">
                  <div className="buttonWrapper mt-4">
                    <Button
                      variant="primary"
                      className="w-75"
                      type="submit"
                      size="lg"
                    >
                      Submit
                    </Button>
                  </div>
                </Container>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LdUnOYcAAAAADLf3Lshhz3kOLcBi9KNjk_HB_9h"
                  onChange={onChange}
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
