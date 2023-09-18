import React from 'react';
import { Form, Button,Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

const SignIn = () => {
    const history = useHistory();
  
    const handleSubmit = () => {
        history.push(window.history.go(-1))
    };

    const schema = yup.object().shape({
        email: yup.string().required('Email is required').email('Invalid Email.'),
        password: yup.string().required()
    });

    return <div className="body">
        <Formik
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values)}
      initialValues={{
        email: "",
        password: ""
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
            <Row>
                <Col lg={3} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && errors.email}/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        name="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={touched.password && errors.password}/>
                        <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="success" type="submit" size="sm" className="my-3">
                Sign In
            </Button>
        </Form>)}
    </Formik>
        <div onClick={() => history.push(`/user/sign-up`)} className="sign-up-redirect-btn">New User? Sign up</div>
    </div>
}

export default SignIn;