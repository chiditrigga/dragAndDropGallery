import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Desk from "./images/deskImage.jpg";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import Form from "react-bootstrap/Form";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errpassword, setErrPassword] = useState(false);

  const navigate = useNavigate();

  const signin = () => {
    navigate("/");
  };

  const [show, setShow] = useState(true);
  const [fetching,setFetching] = useState(false)

  const auth = getAuth();
const [error,setError] = useState(null)
  async function handleSignUp(e) {
    setFetching(true)
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => navigate("/"))
      .catch((error) => {if (error){setFetching(false)} setError(error.message)});
      setEmail("")
      setPassword("")
      setError('')
  }

  return (
    <>
     {error &&  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
     {error}
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
              onSubmit={(e) => handleSignUp(e)}
              className="mx-auto w-75 form"
            >
              <h1 className="text-center">sign up</h1>
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
                  onChange={(e) => {
                    setPassword(e.target.value) 
                    setErrPassword(true)}}
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              {errpassword && password.length < 6 && password.length !== 0?  <span className="text-danger">"password must contain 6 characters"</span> : null}
              <div className="text-center">
             
                <Button className="mb-3 btnn p-2" variant="outline-secondary" type="submit">
              {fetching?  <Spinner animation="border" />: "signup"} 
                </Button>
                <br />
                <p className="mb-0">Already have an account? </p>
                <Button className="px-4" variant="danger" onClick={signin}>
                  sign in
                </Button>
               
              </div> 
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
