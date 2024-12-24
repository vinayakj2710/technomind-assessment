import CardUi from "../UI/CardUi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Projects = () => {
  return (
    <div className="Projects">
      <Container>
        <Row>
          <div class="slick-scroll slider">
            <div class="slide mx-2">
              <CardUi link={"Project Link"}>
                <h2 className="title text-dark">Project #1</h2>
              </CardUi>
            </div>
            <div class="slide mx-2">
              <CardUi link={"Project Link"}>
                <h2 className="title text-dark">Project #2</h2>
              </CardUi>
            </div>
            <div class="slide mx-2">
              <CardUi link={"Project Link"}>
                <h2 className="title text-dark">Project #3</h2>
              </CardUi>
            </div>
            <div class="slide mx-2">
              <CardUi link={"Project Link"}>
                <h2 className="title text-dark">Project #4</h2>
              </CardUi>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
