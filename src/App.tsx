import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container className="d-flex flex-column min-vh-100">
      <Row className="flex-grow-1">
        <Col>Chat</Col>
      </Row>
      <Row>
        <Col>Input</Col>
      </Row>
    </Container>
  );
}

export default App;
