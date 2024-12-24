import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import CardUi from "../UI/CardUi";
import axios from "axios";
import {Data} from '../Data/data'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(Data);

//   const [error, setError] = useState(null);

//   const fetchTestimonials = async () => {
//     const apiUrl = "https://tmits.in/testimonialapi";

//     try {
//       const response = await axios.get(apiUrl);
//       setTestimonials(response.data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

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
                      <CardUi title={item.name}>{item.testimonial}</CardUi>
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
