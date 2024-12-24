import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact section-padding">
      <Container>
        <Row>
          <Col lg="6" className="mb-lg-0 mb-4">
          
        <h1 className="title">Contact</h1>
            <ul className="mb-2 list-unstyled">
              <li>Address: Connaught Place, New Delhi, India.</li>
              <li>
                Email:{" "}
                <a href="mailto:Developer@example.com">Developer@example.com</a>
              </li>
              <li>
                Phone: <a href="tel:+91 1234567890">+91 1234567890'</a>
              </li>
            </ul>
            <ContactForm/>
          </Col>
          <Col lg={6}>
          <GoogleMap/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
