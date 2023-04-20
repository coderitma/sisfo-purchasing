import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const PageAuthLogin = () => {
  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Login</Card.Title>
                <div className="d-grid gap-3">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="john@do.com" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="john@do.com" />
                  </Form.Group>
                  <Button>Log in</Button>
                  <Button variant="outline-dark">Sign up</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageAuthLogin;
