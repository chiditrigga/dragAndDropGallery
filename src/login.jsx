import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Desk from "./images/deskImage.jpg";
import Alert from 'react-bootstrap/Alert';

import Form from "react-bootstrap/Form";
import "./index.css";
import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState()
  const navigate = useNavigate();
  const auth = getAuth();

  const [show, setShow] = useState(true);

  const signup = () => {
    navigate("/signup");
  };

 

  async function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/images");
      })
      .catch((error) => setErrorMessage(error.message));
   setEmail("")
   setPassword("")
    
  }

  return (
    <>
   
  {errorMessage &&  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
     {errorMessage}
      </Alert> } 
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="px-0">
            <Image
              className="h-100 w-100 d-none d-md-block vh-100"
              fluid
              src={Desk}
            />
          </Col>
          <Col xs={12} md={6} className="vh-100  align-items-center d-flex">
            <Form
              onSubmit={(e) => handleSignIn(e)}
              className="mx-auto w-75 form"
            >
              <h1 className="text-center">Log in</h1>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <div className="text-center">
                <Button className="mb-3" variant="primary" type="submit">
                  login
                </Button>
                <br />
                <p className="mb-0">don't have an account? </p>
                <Button className="pt-0" variant="primary" onClick={signup}>
                  sign up
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
