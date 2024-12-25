import CardUi from "../UI/CardUi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Classes from "./Projects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const sliderPrams = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Projects bg-sub section-padding">
      <Container>
        <div className="title">
          <h2 className="gradient-text">Projects</h2>
        </div>
        <Row>
          <Slider {...sliderPrams}>
            <div className={Classes.projectBox}>
              <h3>Project #1</h3>
              <a href="#">Read more...</a>
            </div>
            <div className={Classes.projectBox}>
              <h3>Project #2</h3>
              <a href="#">Read more...</a>
            </div>
            <div className={Classes.projectBox}>
              <h3>Project #3</h3>
              <a href="#">Read more...</a>
            </div>
            <div className={Classes.projectBox}>
              <h3>Project #4</h3>
              <a href="#">Read more...</a>
            </div>
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
