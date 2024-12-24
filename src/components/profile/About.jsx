// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

const About = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(!open);

  return (
    <div className="profile section-padding">
      <Container>
        <h1 className="title">My Profile</h1>
        <Row className="mb-2">
          <Col>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header>About Me</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                  <ul className="list-unstyled">
                    <li className="mb-2">ReactJs</li>
                    <li className="mb-2">Javascript</li>
                    <li className="mb-2">HTML</li>
                    <li className="mb-2">CSS</li>
                    <li className="mb-2">Bootstrap</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
