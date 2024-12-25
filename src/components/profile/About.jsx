// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileTabs from "./ProfileTabs";

const About = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(!open);

  return (
    <div className="profile section-padding">
      <Container>
        <div className="title">
          <h1 className="gradient-text">My Profile</h1>
        </div>
        <Row className="mb-2">
          <Col>
            <ProfileTabs/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
