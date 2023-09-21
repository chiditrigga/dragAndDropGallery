import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Desk from './images/deskImage.jpg'

import Form from "react-bootstrap/Form";
import "./index.css";







const Login = () => {
    return ( <>
      <Container fluid> 
        <Row >
            <Col xs={12} md={6} className="px-0">
               <Image className="h-100 w-100 d-none d-md-block vh-100"  fluid  src={Desk} />
            </Col>
            <Col xs={12} md={6}  className="vh-100  align-items-center d-flex">
            <Form className="mx-auto w-75 form">
                <h1 className="text-center">Log in</h1>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>
      <div className="text-center">
         <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
     
    </Form>

            </Col>
        </Row>
      </Container>
    
    </> );
}
 
export default Login;