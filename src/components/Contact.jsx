import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import { Form, Button, FloatingLabel } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="pb-4">
      <h1 className="heading">Let's Connect</h1>
      <Container>
        <Row>
          <Col size="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="First Last"
                    className="bg-dark text-light"
                    required
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="bg-dark text-light"
                    required
                  />
                </FloatingLabel>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formComment"></Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="bg-dark text-light"
                  required
                />
              </FloatingLabel>
              <div className="buttonWrapper mt-4">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;