import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ContactForm() {

    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <Form className="mt-5" onSubmit={submitHandler}>
        <FloatingLabel
        controlId="floatingName"
        label="Password"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Full Name" required/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingEmail"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" required/>
      </FloatingLabel>

      <Button className="default-btn rounded mt-2" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
