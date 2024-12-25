import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as yup from "yup";

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const validationSchema = yup.object({
    name: yup.string().required("Please Enter Your Name"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Please Enter Your Email"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setFormSubmitted(true);
      fadeOutThankYou();
    },
  });

  const fadeOutThankYou = () => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Form onSubmit={formik.handleSubmit} className="mt-5">
      <Form.Group className="mb-3 form-input" >
        <Form.Control placeholder="Full Name" id="name"
         name="name"
         type="text"
         value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}/>
        {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
        
      </Form.Group>
      <Form.Group className="mb-3 form-input">
        <Form.Control placeholder="name@example.com" id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
      </Form.Group>
 
       <button type="submit" className="btn-default rounded mt-2">Submit</button>
     </Form>
  );
}

export default ContactForm;
