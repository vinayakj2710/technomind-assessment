import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import CardUi from "../UI/CardUi";
import axios from "axios";
// import {Data} from '../Data/data'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const [error, setError] = useState(null);

  const fetchTestimonials = async () => {
    const apiUrl = "https://api.potterdb.com/v1/movies";

    try {
      const response = await axios.get(apiUrl);
      let content = await response.data.data;
      setTestimonials(content);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      <div className="section-padding testimonials">
        <Container>
          <Row>
            <Col>
              <Carousel fade indicators={false}>
                {testimonials.map((item) => {
                  return (
                    <Carousel.Item key={item.id}>
                      <CardUi title={item.attributes.release_date}>{item.attributes.title}</CardUi>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
